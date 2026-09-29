# AGENTS.md

本仓库维护 ZrLog 前端公共基础库，使用 npm workspaces 管理 `packages/ui` 与 `packages/utils`。

- 先读 [README](README.md) 的接口、消费者和发布边界；产品 UI 从 [Ops 统一入口](../zrlog-ops/docs/ui-design-guide.md) 读取，不在本库另写视觉规范。
- `@zrlog/ui` 提供全部主题、公共外观类型与能力声明、控件样式及品牌组件；后台专属布局不属于公共包。
- `@zrlog/utils` 提供无 React / Ant Design 依赖的通用工具。依赖方向只允许 UI 使用 utils，不允许反向依赖。
- 不引入消费者的路由、鉴权、业务文案、缓存、偏好保存或安装协议。通用编辑器保持独立。
- 后台仅默认主题使用 M3；其他主题保持独立风格。安装页继续默认使用 M3，并保留自身明暗策略。
- React、React DOM、Ant Design 为 peer dependencies，不打包另一份运行时。
- 修改后运行 `npm test` 和 `npm run pack`，从实际 tarball 验证 admin/install 的类型、相关行为和生产构建。
- 共享主题修改补充后台主题切换、安装页明暗、桌面/移动和表单状态验收。SSE 修改覆盖 UTF-8/换行跨块、断流、错误和终止事件。
- GitHub Actions 仅通过 S3 endpoint 核验上传，不请求 Cloudflare 公开 CDN；消费者使用固定 GitHub Release tarball URL，CDN 保留为相同内容的分发出口。
- 发布为手动 workflow，版本 URL 不覆盖；凭据通过 GitHub Secrets 注入，不写入代码、日志或包内容。
