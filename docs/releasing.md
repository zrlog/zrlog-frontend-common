# 发布前端公共包

1. 在根目录及 `packages/ui`、`packages/utils` 的 package.json 同步设置稳定版本，执行 `npm install --package-lock-only` 更新锁。
2. 运行 `npm test`、`npm run pack`。以实际 tarball 在 admin 与 install 验证类型、测试、构建与相关视觉状态。
3. 提交并推送源码。GitHub Actions 的 **Publish frontend packages** 仅手动触发，version 必须与源码一致。
4. 工作流使用与 editor 相同的 S3 兼容上传凭据：`SECRET_ID`、`SECRET_KEY`、`BUCKET`、`HOST`，可继承组织 Secrets。凭据应允许读写 `frontend-common/` 前缀；GitHub Releases 使用仓库 GITHUB_TOKEN 的 contents:write 权限。
5. 包上传到 `frontend-common/<version>/`，包含 ui / utils tarball、SHA256SUMS 与 manifest.json。条件创建禁止覆盖已发布版本；上传后通过同一个 S3 endpoint 读回并核对字节和 SHA-256。
6. 将同一批已核验文件发布到 GitHub Releases 的 `v<version>`。先创建 draft，上传并读回全部资产后再发布；版本标签对应 manifest 的原始源码提交。重跑只补缺失资产，已有资产必须逐字节一致，不覆盖资产或移动标签。
7. 消费者使用 `https://github.com/zrlog/zrlog-frontend-common/releases/download/v<version>/zrlog-{ui,utils}-<version>.tgz`，用 Yarn 更新锁文件。不要使用 latest、main 分支文件、工作区路径或源码引用作为正式依赖。

沿用 editor 的 GitHub 产物 + S3/CDN 分发方式；本仓库以 Release assets 保存版本产物。GitHub Actions 无法访问 Cloudflare 公开下载域名，因此不能通过 `dl.zrlog.com` 回读作为发布门禁，消费者 CI 也不从该域名安装依赖。公开 CDN URL `https://dl.zrlog.com/frontend-common/<version>/` 保留，可在能访问的环境单独核对可达性和 SHA256SUMS；存储校验成功不等同于公开域名可达性验证。

工作流保存打包产物供 review。包仅含编译 JS、声明和说明，不含 React/Ant Design 本体、工作区链接、消费者源码或密钥。

上传暂时失败可重跑：同字节的存储对象可复用，内容不同则拒绝并要求新版本。manifest 只允许 source 不同而包清单完全相同，此时保留首次发布的 manifest，确保 S3 和 GitHub 两个出口内容一致。

本地联调允许临时使用实际 tarball，正式 GitHub 版本发布前不提交本机路径依赖。
