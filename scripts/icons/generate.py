"""Generate the explicit icon subset; no runtime registry or font downloads.

python3 scripts/icons/generate.py --material-dir /path/to/pinned/svg-cache \
    --legacy-json /path/to/legacy-subset.json

Inputs are the official W400/24px Rounded SVGs at source.json's revision and
Ant Design icons-svg 4.5.0's icon objects (plus existing custom CPU/memory/webhook).
Only manifest entries are emitted. Generated glyph files retain source provenance.
"""
import argparse
import json
import xml.etree.ElementTree as ET
from pathlib import Path

parser = argparse.ArgumentParser()
parser.add_argument('--material-dir', type=Path, required=True)
parser.add_argument('--legacy-json', type=Path, required=True)
args = parser.parse_args()
root = Path(__file__).resolve().parents[2]
manifest = json.loads((Path(__file__).parent / 'manifest.json').read_text())
source = json.loads((Path(__file__).parent / 'source.json').read_text())
legacy = json.loads(args.legacy_json.read_text())
src = root / 'packages/ui/src'

def attrs(value):
    return {''.join([part if i == 0 else part.title() for i, part in enumerate(key.split('-'))]): val
            for key, val in value.items() if key not in ['xmlns', 'focusable']}

def xml_node(node):
    result = {'tag': node.tag.rsplit('}', 1)[-1], 'attrs': attrs(node.attrib)}
    if len(node): result['children'] = [xml_node(child) for child in node]
    return result

def glyph(node):
    return {'viewBox': node['attrs'].get('viewBox', '0 0 24 24'), 'nodes': node.get('children', [])}

def emit_glyph(name, family, variants, provenance):
    directory = src / 'glyphs' / family
    directory.mkdir(parents=True, exist_ok=True)
    regular = glyph(variants['regular'])
    selected = glyph(variants.get('selected', variants['regular']))
    text = '// Generated from ' + provenance + '. See THIRD_PARTY_NOTICES.md.\n'
    text += 'import type { IconVariants, IconGlyph } from "../../UiIcon";\n'
    text += 'const regular: IconGlyph = ' + json.dumps(regular, separators=(',', ':')) + ';\n'
    text += 'const glyphs: IconVariants = { regular'
    if selected != regular:
        text += ', selected: ' + json.dumps(selected, separators=(',', ':'))
    text += ' };\nexport default glyphs;\n'
    (directory / (name + '.ts')).write_text(text)

for name, item in manifest.items():
    material = {}
    for variant, suffix in [('regular', ''), ('selected', '_fill1')]:
        material[variant] = xml_node(ET.parse(args.material_dir / f'{item["symbol"]}{suffix}_24px.svg').getroot())
    emit_glyph(name, 'material', material, f'Google Material Symbols Rounded/{item["symbol"]} @ {source["revision"]}')
    emit_glyph(name, 'antd', legacy[name], f'Ant Design icons-svg {source["antDesignSvgVersion"]}' if 'legacy' in item else 'existing ZrLog custom SVG')
    component = ''.join(part.title() for part in name.split('-')) + 'Icon'
    for family in ['icons', 'material-icons']:
        directory = src / family
        directory.mkdir(exist_ok=True)
        text = 'import { forwardRef } from "react";\nimport type { UiIconProps } from "../UiIcon";\n'
        text += f'import material from "../glyphs/material/{name}";\n'
        if family == 'icons':
            text += 'import { UiIcon } from "../UiIcon";\n'
            text += f'import antd from "../glyphs/antd/{name}";\n'
            text += 'export const icon = { name: ' + json.dumps(name) + ', material, antd' + (', spin: true' if name == 'loading' else '') + ' };\n'
            text += f'const {component} = forwardRef<HTMLSpanElement, UiIconProps>((props, ref) => <UiIcon {{...props}} ref={{ref}} icon={{icon}} />);\n'
        else:
            text += 'import { IconSvg } from "../UiIcon";\n'
            text += f'const {component} = forwardRef<HTMLSpanElement, UiIconProps>(({{ selected = false, ...props }}, ref) => (\n'
            text += f'    <IconSvg name="{name}" iconSet="material-symbols-rounded" selected={{selected}}'
            if name == 'loading': text += ' spin'
            text += '\n        {...props} ref={ref} glyph={selected ? material.selected ?? material.regular : material.regular} />\n));\n'
        text += f'{component}.displayName = "{component}";\nexport default {component};\n'
        (directory / (name + '.tsx')).write_text(text)
print(f'Generated {len(manifest)} semantic icons with separate themed and Material-only entries.')
