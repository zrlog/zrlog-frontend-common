# Icon assets

Only the explicitly used subset is distributed, as SVG geometry in individual modules.
No external font, CDN, runtime download, library namespace or global glyph registry is used.

- Material Symbols Rounded: Google LLC, Apache-2.0. W400, optical size 24,
  regular and FILL=1. Source: https://github.com/google/material-design-icons,
  commit `737e3324305806514d7909874fa1818ae1808232`.
  License: `licenses/MATERIAL-SYMBOLS-LICENSE`.
- Legacy Ant Design geometry: `@ant-design/icons-svg` 4.5.0, MIT.
  Source: https://github.com/ant-design/ant-design-icons.
  License: `licenses/ANT-DESIGN-LICENSE`.
- CPU and memory legacy shapes retain the existing ZrLog SVGs.
- Webhook legacy shapes retain the existing Remix Icon SVGs (Remix Design,
  Apache-2.0; https://github.com/Remix-Design/RemixIcon). The Apache-2.0 license
  text is included in `licenses/MATERIAL-SYMBOLS-LICENSE`.

The maintained subset and semantic mappings are in `scripts/icons/manifest.json`
in the source repository. Generated files identify their source. Glyphs with no
distinct official filled variant reuse the regular shape.
