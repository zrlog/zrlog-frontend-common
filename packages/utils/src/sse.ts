export type SseEvent<T = unknown> = { event: string; data: T };

/** Parse a named JSON event; comments, heartbeats and unnamed frames are ignored. */
export const parseJsonSseEvent = <T = unknown>(frame: string): SseEvent<T> | null => {
    const lines = frame.split(/\r\n|\r|\n/);
    const event = lines.find((line) => line.startsWith("event:"))?.slice(6).trim();
    const data = lines.filter((line) => line.startsWith("data:"))
        .map((line) => line.slice(5).replace(/^ /, "")).join("\n");
    if (!event || !data) return null;
    return { event, data: JSON.parse(data) as T };
};

/** Read JSON SSE events, preserving UTF-8 and CRLF boundaries across network chunks. */
export async function* readJsonSseStream<T = unknown>(stream: ReadableStream<Uint8Array>): AsyncGenerator<SseEvent<T>> {
    const reader = stream.getReader();
    const decoder = new TextDecoder();
    let buffer = "";
    let lines: string[] = [];
    let completed = false;

    function* drain(final: boolean): Generator<SseEvent<T>> {
        for (;;) {
            const index = buffer.search(/[\r\n]/);
            if (index < 0 || (!final && index === buffer.length - 1 && buffer[index] === "\r")) break;
            const line = buffer.slice(0, index);
            const width = buffer[index] === "\r" && buffer[index + 1] === "\n" ? 2 : 1;
            buffer = buffer.slice(index + width);
            if (line !== "") {
                lines.push(line);
            } else {
                const event = parseJsonSseEvent<T>(lines.join("\n"));
                lines = [];
                if (event) yield event;
            }
        }
        // Existing ZrLog endpoints may finish with an unterminated final frame.
        if (final) {
            if (buffer) lines.push(buffer);
            buffer = "";
            const event = parseJsonSseEvent<T>(lines.join("\n"));
            lines = [];
            if (event) yield event;
        }
    }

    try {
        for (;;) {
            const { done, value } = await reader.read();
            buffer += done ? decoder.decode() : decoder.decode(value, { stream: true });
            yield* drain(done);
            if (done) { completed = true; return; }
        }
    } finally {
        if (!completed) {
            try { await reader.cancel?.(); } catch { /* Do not mask the consumer's result or stream error. */ }
        }
        reader.releaseLock?.();
    }
}
