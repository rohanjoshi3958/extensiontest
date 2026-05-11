import { config } from "./config.js";

/** @param {string} path */
export function resolveApiUrl(path) {
  const base = config.apiBaseUrl.replace(/\/$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}

/**
 * Minimal fetch wrapper with timeout and JSON parsing.
 * @param {string} path
 * @param {RequestInit} [init]
 */
export async function getJson(path, init = {}) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), config.requestTimeoutMs);
  const started = config.traceSlowRequests ? performance.now() : 0;
  try {
    const res = await fetch(resolveApiUrl(path), {
      ...init,
      signal: controller.signal,
      headers: {
        Accept: "application/json",
        "X-Client": "extensiontest-sandbox",
        ...init.headers,
      },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`.trim());
    return await res.json();
  } finally {
    clearTimeout(id);
    if (config.traceSlowRequests && started) {
      const ms = Math.round(performance.now() - started);
      if (ms > 750) console.warn(`[http] slow ${path} (${ms}ms)`);
    }
  }
}
