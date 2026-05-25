import { config } from "./config.js";

/**
 * @template T
 * @param {() => Promise<T>} fn
 * @param {number} [attempts=config.maxRetries]
 */
export async function withRetries(fn, attempts = config.maxRetries) {
  let lastErr;
  for (let i = 0; i < attempts; i++) {
    try {
      return await fn();
    } catch (err) {
      lastErr = err;
      if (i === attempts - 1) break;
      await new Promise((r) => setTimeout(r, 50 * (i + 1)));
    }
  }
  throw lastErr;
}
