/**
 * undici (Node fetch) error codes that indicate a transient network blip
 * talking to the remote libsql/Turso connection. These are safe to retry.
 */
const TRANSIENT_ERROR_CODES: ReadonlySet<string> = new Set([
    "UND_ERR_SOCKET",
    "UND_ERR_HEADERS_TIMEOUT",
    "UND_ERR_BODY_TIMEOUT",
    "UND_ERR_CONNECT_TIMEOUT",
    "ECONNRESET",
    "ECONNREFUSED",
    "ETIMEDOUT",
    "EPIPE",
    "ENOTFOUND",
    "EAI_AGAIN",
]);

const TRANSIENT_ERROR_NAMES: ReadonlySet<string> = new Set([
    "SocketError",
    "HeadersTimeoutError",
    "BodyTimeoutError",
    "ConnectTimeoutError",
]);

/**
 * Walks the `cause` chain of an error and returns true if any link looks like a
 * transient undici/network failure (e.g. the `DrizzleQueryError -> TypeError ->
 * SocketError / HeadersTimeoutError` chains produced by the remote libsql
 * connection). These are connectivity blips, not data bugs.
 */
export function isTransientNetworkError(error: unknown): boolean {
    let current: unknown = error;

    for (let depth = 0; current instanceof Error && depth < 10; depth++) {
        const code: unknown = (current as { code?: unknown }).code;

        if (typeof code === "string" && TRANSIENT_ERROR_CODES.has(code)) {
            return true;
        }

        if (TRANSIENT_ERROR_NAMES.has(current.name)) {
            return true;
        }

        current = current.cause;
    }

    return false;
}

interface RetryOptions {
    retries?: number;
    baseDelayMs?: number;
}

const sleep = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Runs `fn`, retrying with exponential backoff only when it throws a transient
 * network error. Non-transient errors (and the final transient error once
 * retries are exhausted) are rethrown to the caller.
 *
 * @author Kyrylo Maliuha
 */
export async function withRetry<T>(fn: () => Promise<T>, options: RetryOptions = {}): Promise<T> {
    const retries: number = options.retries ?? 3;
    const baseDelayMs: number = options.baseDelayMs ?? 200;

    for (let attempt = 0; ; attempt++) {
        try {
            return await fn();
        } catch (error) {
            if (attempt >= retries || !isTransientNetworkError(error)) {
                throw error;
            }

            await sleep(baseDelayMs * 2 ** attempt);
        }
    }
}
