# ZrLog Frontend Common

后台与安装页共用的前端基础库。一个仓库维护两个包，消费者通过 npmjs 的固定版本依赖使用。

| 包 | 职责 | 消费者 |
| --- | --- | --- |
| `@zrlog/ui` | 全部九套主题、外观类型与能力声明、控件样式、ZrLog 品牌组件 | admin 默认/其他主题、install 默认 M3 |
| `@zrlog/utils` | JSON SSE 解析与流读取等通用浏览器工具，不依赖 React 或 Ant Design | admin、install |

UI 的主题标识与展示顺序只有 `packages/ui/src/themes.ts` 一个来源。显示文案由消费者传入，主题标识和已有用户选择保持兼容。品牌色、明暗和密度由宿主传入；公共库不监听或保存个人偏好。

后台导航、文章列表、权限、会话、离线缓存和任务中心留在 admin；安装状态、令牌、步骤、恢复与完成判定留在 install。SSE 包只读取事件，不根据事件名称推断业务成功，不发请求或提供鉴权。编辑器不迁入本库。

产品规则仍读取 [Ops UI 入口](../zrlog-ops/docs/ui-design-guide.md)。本仓库维护代码/API，不复制视觉与文案规范。

## 开发

```sh
npm ci
npm test
npm run pack
```

`npm run pack` 在 `.tmp/packages/` 生成包含编译后 JS 和类型声明的 tarball。UI 的 React、React DOM、Ant Design 使用宿主的 peer dependencies；utils 没有运行时依赖。

UI 接入见 [packages/ui](packages/ui/README.md)，工具 API 见 [packages/utils](packages/utils/README.md)。

## 发布与接入

两个包发布到 npmjs，版本统一由根目录与两个包的 `package.json` 声明。发布前同步版本并更新 lockfile，推送后手动运行 **Publish frontend packages**。工作流测试和构建后直接执行 `npm publish --workspaces --access public`，不维护额外发布脚本。详见 [发布流程](docs/releasing.md)。

```json
{
  "@zrlog/ui": "0.1.1",
  "@zrlog/utils": "0.1.1"
}
```

首次发布需要 npmjs 上 `@zrlog` scope 的发布权限，并在仓库 Actions Secrets 配置 `NPM_PUBLISH_SECRET`。消费者在版本实际发布后通过 Yarn 安装并更新锁文件；公共库后续修改先发布新版本，再显式升级消费者。

开发时可使用 `npm run pack` 在 `.tmp/packages/` 生成的 tarball 联调，不提交本机路径依赖。正式依赖从 npm registry 下载，不依赖 GitHub raw 或 Cloudflare CDN。
