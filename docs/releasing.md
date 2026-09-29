# 发布前端公共包

`@zrlog/ui` 与 `@zrlog/utils` 通过 npmjs 发布。使用 npm workspaces 和标准 npm 命令，发布工作流仅手动触发。

## 首次配置

- npmjs 上具有 `@zrlog` scope 的包创建/发布权限。
- 在公共仓库 GitHub Actions Secrets 配置 `NPM_TOKEN`。使用有目标包或组织发布权限的 npm granular access token；无人值守发布需要允许绕过 2FA。不要把 token 写入代码、包或对话。
- 两个包的 `publishConfig` 指定 npmjs registry 与 public access；根包保持 private。

## 发布与升级

1. 同步修改根目录及 `packages/ui`、`packages/utils` 的 package.json 版本，并运行 `npm install --package-lock-only` 更新锁文件。
2. 运行 `npm test`、`npm run pack`。实际 tarball 在 `.tmp/packages/`，用于 admin / install 的类型、相关测试、构建与视觉验收。
3. 提交并推送源码，手动运行 **Publish frontend packages**。工作流执行 `npm ci`、`npm test`（含构建），再通过 `npm publish --workspaces --access public` 发布两个包。
4. 确认 npmjs 上两个目标版本均可安装后，在 admin / install 执行 `yarn add --exact @zrlog/ui@<version> @zrlog/utils@<version>`，提交 package.json 与 yarn.lock。

已发布的 npm 版本不可覆盖，后续修正应递增版本。两个 workspace 的发布并非事务：如果只成功一个包，先核对 registry 中的版本，再对尚未发布的 workspace 执行 `npm publish --workspace @zrlog/<name> --access public`，不要删除已发布版本。

正式消费者使用固定版本与锁文件，不依赖 Cloudflare 公开域名或仓库 raw 地址。本地 tarball 只用于联调，不能作为正式提交的路径依赖。
