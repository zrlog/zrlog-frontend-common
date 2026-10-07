"""Fetch only the pinned Material Symbols subset into the ignored build cache."""
import concurrent.futures
import json
from pathlib import Path
import urllib.request

directory = Path(__file__).resolve().parent
manifest = json.loads((directory / 'manifest.json').read_text())
source = json.loads((directory / 'source.json').read_text())
base = f'https://raw.githubusercontent.com/{source["repository"]}/{source["revision"]}/'
output = directory.parents[1] / '.tmp/icons/material'
output.mkdir(parents=True, exist_ok=True)


def download(item):
    symbol, suffix = item
    filename = f'{symbol}{suffix}_24px.svg'
    url = base + f'symbols/web/{symbol}/{source["style"]}/{filename}'
    with urllib.request.urlopen(url, timeout=30) as response:
        (output / filename).write_bytes(response.read())


items = [(symbol, suffix) for symbol in sorted({entry['symbol'] for entry in manifest.values()})
         for suffix in ['', '_fill1']]
with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool:
    list(pool.map(download, items))
print(f'Downloaded {len(items)} explicitly listed variants to {output}')
