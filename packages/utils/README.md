# @zrlog/utils

无 React / Ant Design 依赖的 ZrLog 通用工具。只迁入已有消费者的公共逻辑，不建立无使用方的工具集合。

```ts
import { readJsonSseStream } from "@zrlog/utils";

for await (const event of readJsonSseStream(response.body!)) {
    // 消费者处理自身事件、终止条件、错误提示与恢复逻辑。
}
```

- `parseJsonSseEvent<T>(frame)`：解析带 `event:` 名称与 JSON `data:` 的事件，支持多行 data；心跳与无名帧返回 null，非法 JSON 抛出错误。
- `readJsonSseStream<T>(stream)`：异步读取事件，处理跨块 UTF-8、LF / CRLF / CR、未带空行的末尾帧；调用方退出时取消读取并释放锁，正常结束也释放锁。
- 类型 `SseEvent<T>` 的 data 默认为 unknown；业务层负责数据契约校验。

本包不调用 fetch，不携带 token，不定义 API 地址、消息提示或“安装完成”等业务语义。
