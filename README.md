# ZrLog Frontend Common

后台与安装页共用的前端基础库。一个仓库维护两个包，消费者通过固定版本 tarball URL 使用。

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

`artifacts/` 中生成编译后的 JS、类型声明 tarball 和校验清单。UI 的 React、React DOM、Ant Design 使用宿主的 peer dependencies；utils 没有运行时依赖。

UI 接入见 [packages/ui](packages/ui/README.md)，工具 API 见 [packages/utils](packages/utils/README.md)。

## 发布与接入

版本统一由根目录与两个包的 `package.json` 声明，发布前同步修改这三处并更新 lockfile。手动运行 `Publish frontend packages`，输入与源码一致的版本；工作流先测试和打包，再上传 CDN。详见 [发布流程](docs/releasing.md)。

```json
{
  "@zrlog/ui": "https://dl.zrlog.com/frontend-common/0.1.0/zrlog-ui-0.1.0.tgz",
  "@zrlog/utils": "https://dl.zrlog.com/frontend-common/0.1.0/zrlog-utils-0.1.0.tgz"
}
```

上述 URL 是发布后的消费地址。首次发布前使用实际 tarball 验证，不宣称尚未上传的 URL 可用。消费者通过 package.json 与 lockfile 显式升级，公共库修改不会自动改变已部署应用。
