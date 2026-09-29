# 发布前端公共包

1. 在根目录及 `packages/ui`、`packages/utils` 的 package.json 同步设置稳定版本，执行 `npm install --package-lock-only` 更新锁。
2. 运行 `npm test`、`npm run pack`。以实际 tarball 在 admin 与 install 验证类型、测试、构建与相关视觉状态。
3. 提交并推送源码。GitHub Actions 的 **Publish frontend packages** 仅手动触发，version 必须与源码一致。
4. 工作流使用与 editor 相同的 S3 兼容上传凭据约定：`SECRET_ID`、`SECRET_KEY`、`BUCKET`、`HOST`。`HOST` 是 S3 endpoint，公开域名为 `dl.zrlog.com`；凭据应允许写入 `frontend-common/` 前缀。
5. 包上传到 `frontend-common/<version>/`，包含 ui / utils tarball、SHA256SUMS 与 manifest.json。使用条件创建防止覆盖已发布版本；上传后从 CDN 下载并检查 SHA-256。
6. 发布成功后，消费者修改两个固定版本 URL 并用 Yarn 更新锁文件。不要使用 latest、工作区相对路径或源码引用作为正式依赖。

工作流保存打包产物供 review。包仅包含编译 JS、声明和说明，不包含 React/Ant Design 本体、源码工作区链接、消费者代码或密钥。

上传或 CDN 校验暂时失败可重跑工作流：逐字节核对已存在的包与校验文件，相同才复用，内容不同则拒绝并要求新版本；manifest 只允许 source 提交不同且包清单完全相同，此时保留首次发布的来源记录。CDN 下载失败会重试，仍失败则任务失败，不能仅凭上传成功宣称 CDN 验证通过。

本地初次接入允许临时使用 `file:/.../artifacts/<version>/*.tgz` 做验证；正式 URL 可用前，不把这类路径提交到消费者仓库。公开 CDN 的首版发布依赖新仓库正确配置上述 Secrets。
