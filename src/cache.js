/** @template T */
export class TtlCache {
  /** @param {number} ttlMs */
  constructor(ttlMs = 60_000) {
    this.ttlMs = ttlMs;
    /** @type {Map<string, { value: T; expires: number }>} */
    this.store = new Map();
  }

  /** @param {string} key @param {T} value */
  set(key, value) {
    this.store.set(key, { value, expires: Date.now() + this.ttlMs });
  }

  /** @param {string} key @returns {T | undefined} */
  get(key) {
    const hit = this.store.get(key);
    if (!hit) return undefined;
    if (Date.now() > hit.expires) {
      this.store.delete(key);
      return undefined;
    }
    return hit.value;
  }

  clear() {
    this.store.clear();
  }
}
