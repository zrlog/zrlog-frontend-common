const { test } = require("node:test");
const assert = require("node:assert/strict");
const { parseJsonSseEvent, readJsonSseStream } = require("../dist");
const encoder = new TextEncoder();
const stream = (chunks) => new ReadableStream({ start(controller) {
    for (const chunk of chunks) controller.enqueue(chunk);
    controller.close();
} });
const collect = async (input) => {
    const events = [];
    for await (const event of readJsonSseStream(input)) events.push(event);
    return events;
};

test("handles comments, multi-line JSON, CRLF and unknown event names without business interpretation", () => {
    assert.equal(parseJsonSseEvent(": heartbeat"), null);
    assert.equal(parseJsonSseEvent('data: {"ready":true}'), null);
    assert.deepEqual(parseJsonSseEvent('event: future-event\r\ndata: {\r\ndata: "ready":true}\r\n'),
        { event: "future-event", data: { ready: true } });
    assert.throws(() => parseJsonSseEvent("event: failed\ndata: invalid"), SyntaxError);
});

test("preserves UTF-8 and every CRLF boundary when each byte arrives separately", async () => {
    const bytes = encoder.encode(': heartbeat\r\n\r\nevent: progress\r\ndata: {"message":"安装😀"}\r\n\r\nevent: complete\ndata: {"done":true}\n\n');
    const input = stream([...bytes].map((byte) => new Uint8Array([byte])));
    assert.deepEqual(await collect(input), [
        { event: "progress", data: { message: "安装😀" } },
        { event: "complete", data: { done: true } },
    ]);
    assert.equal(input.locked, false);
});

test("supports CR separators and the existing unterminated final-frame contract", async () => {
    assert.deepEqual(await collect(stream([encoder.encode('event: one\rdata: 1\r\revent: two\rdata: 2')])), [
        { event: "one", data: 1 }, { event: "two", data: 2 },
    ]);
});

test("consumer can stop at its terminal event without parsing later frames", async () => {
    let cancelled = 0;
    const input = new ReadableStream({
        start(controller) { controller.enqueue(encoder.encode('event: complete\ndata: true\n\nevent: later\ndata: invalid\n\n')); },
        cancel() { cancelled++; },
    });
    for await (const event of readJsonSseStream(input)) { assert.equal(event.event, "complete"); break; }
    assert.equal(cancelled, 1);
    assert.equal(input.locked, false);
});

test("propagates stream and JSON errors and releases its reader", async () => {
    const broken = new ReadableStream({ start(controller) { controller.error(new Error("disconnected")); } });
    await assert.rejects(collect(broken), /disconnected/);
    assert.equal(broken.locked, false);
    const invalid = stream([encoder.encode("event: result\ndata: invalid\n\n")]);
    await assert.rejects(collect(invalid), SyntaxError);
    assert.equal(invalid.locked, false);
});
