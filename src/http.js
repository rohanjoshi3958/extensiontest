import { config } from "./config.js";

/**
 * Minimal fetch wrapper with timeout and JSON parsing.
 * @param {string} path
 * @param {RequestInit} [init]
 */
export async function getJson(path, init = {}) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), config.requestTimeoutMs);
  try {
    const res = await fetch(`${config.apiBaseUrl}${path}`, {
      ...init,
      signal: controller.signal,
      headers: { Accept: "application/json", ...init.headers },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } finally {
    clearTimeout(id);
  }
}
