# Theme icons

## Contract and rollout

`@zrlog/ui` owns semantic icons, their Material Symbols Rounded / existing Ant Design
shapes, selected variants, sizing and accessibility. Hosts supply the current theme
to `UiIconProvider`; the provider does not save preferences. Brand marks retain their
identity. Admin routes and installation state remain in their respective hosts.

Each icon has an independent `@zrlog/ui/icons/<name>` entry. M3-only consumers use
`@zrlog/ui/material-icons/<name>` so legacy shapes are not loaded. There is no global
icon registry or wildcard library import. `UiIcon` also accepts an explicitly imported
definition for custom icons. Outlined/filled selection is expressed by `selected`.

Implementation slices:

1. Add the typed renderer, theme context, per-icon assets, provenance and package entries.
2. Migrate every host-owned action/status/navigation icon in admin/install, including
   custom CPU/memory/webhook shapes and existing selected states.
3. Adapt Ant Design's public icon slots and status APIs; preserve explicit icon overrides.
4. Verify all mappings, switching/selected states, package isolation, actual tarball
   consumer type checks/tests/builds and desktop/mobile light/dark presentation.

The generic editor and third-party plugin content keep their own public API boundaries.
This change does not alter navigation, installation protocols, business state or branding.

## Usage

```tsx
import { UiIconProvider } from "@zrlog/ui/icons";
import HomeIcon from "@zrlog/ui/icons/home";

<UiIconProvider theme={theme}>
    <HomeIcon selected={active} size={24} />
</UiIconProvider>
```

An M3-only application imports `HomeIcon` from `@zrlog/ui/material-icons/home`.
The provider mounts motion styles, including reduced-motion support. Icons are
decorative by default; `label` or `aria-label` makes a standalone icon accessible.
Interactive controls retain their own accessible labels and event handling.

Ant Design's public ConfigProvider slots live in `material-icon-config.tsx`.
For slots only available on individual components, `@zrlog/ui/antd/<Component>`
retains the props/ref contracts used by the hosts and adds icon defaults (Input, InputNumber,
Result, Steps, Popconfirm, Pagination, Table, Image, Tree, DatePicker, Progress, Switch, Tag,
Typography). Typography adapts copy/copy-complete actions; DatePicker adapts the root
and RangePicker; Image adapts individual-image preview actions. These adapters do not
claim coverage of every unused Ant Design static API. Explicit overrides win;
non-M3 themes keep Ant Design's defaults. Result exception illustrations, branding,
checkbox/radio marks and progress indicators retain their separate visual roles.
`useUiMessage` and `useUiApp` from `@zrlog/ui/feedback` supply status icons while
preserving callbacks, keys, close handles and thenables.

Global slots also cover collapse arrows, field help icons and back-to-top. Setting a
default icon must not enable a feature: plain tags stay non-dismissible, labels without
help stay plain, and non-copyable text stays non-copyable. Image preview uses the public
`actionsRender` buttons, retaining their handlers and disabled states (Ant Design 6.4
overwrites `preview.icons` internally).

## Updating the subset

The manifest is tooling input only and is not imported by application code. Add a
semantic mapping only when a consumer or a public control slot needs it. To regenerate
from the pinned revision and the locally installed `@ant-design/icons-svg` version:

```sh
python3 scripts/icons/download.py
node scripts/icons/export-legacy.cjs
python3 scripts/icons/generate.py --material-dir .tmp/icons/material --legacy-json .tmp/icons/legacy.json
npm test
npm run pack
```

Review the generated geometry and selected variants; glyphs with identical official
variants share one shape. Never replace this with a dynamic import context, namespace
import, all-icons barrel, or runtime name-to-library registry. Package exports and
generated CommonJS shims keep each glyph independently loadable in ESM, Node and CRA/Jest.

## Validation and release status (0.2.0)

- `npm test`: UI 39 tests and utils 5 tests passed; `npm run pack` produced the actual
  `@zrlog/ui` / `@zrlog/utils` 0.2.0 tarballs.
- Consumers were checked with the actual UI tarball extracted into their local
  `node_modules`: admin type check, 58 suites / 507 tests and production build;
  install type check, 8 suites / 50 tests and production build all passed.
- Production-browser fixtures covered all nine admin themes and switching back to
  default, dark/compact/mobile, message/modal portals, install light/dark at 1440 and
  390 pixels, and database selected states. The checked M3 views had no remaining
  generic Ant Design SVG icons, browser errors or horizontal overflow. A separate
  control fixture checked copy completion/callbacks, help, collapse, select, date
  picker, table filter/sort and image zoom/rotation/disabled actions. Ordinary tags
  and labels retained their original opt-in behavior.
- Production Webpack isolation check: importing only `icons/search` included exactly
  its Material and Ant Design glyphs (1,705 gzip bytes including the icon runtime,
  excluding React). `material-icons/search` included only its Material glyph (1,460
  gzip bytes). No unrelated icon modules were included.
- Compared with the pre-existing local build snapshots, the sum of compressed JS
  increased by 44,943 bytes for admin and 6,809 bytes for install. These snapshots are
  a local size reference, not a clean-release benchmark.

The initial 114 semantic mappings cover host-owned icons and the control slots
used by admin/install; editor additions are recorded below. Brand marks, generic editor internals and plugin-owned content
retain their separate boundaries. Browser data was supplied by read-only local
fixtures; no real installation, database, API or SSE protocol was changed. This does
not substitute for a full installation acceptance run.

**Release order:** publish `@zrlog/ui` and `@zrlog/utils` 0.2.0 first, then verify
both versions and their tarballs on npmjs before updating consumers' exact versions
and Yarn locks. Local tarball checks do not replace registry installation verification.

## Editor integration

The subset now includes 15 additional editing/control symbols (129 semantic modules
in total): formatting, headings 2–4, numbered lists, horizontal rules, attachment,
tables, alignment, and cloud upload. Admin's editor adapter uses their individual
Material-only exports and the editor's individual legacy defaults for other themes.
`@zrlog/editor` remains independent of this package and receives components through
its own semantic provider. Editor formats load with editor pages; no full library
catalogue is imported. Consumers require UI 0.2.0 and editor 2.2.0; verify their registry publication before upgrading.
