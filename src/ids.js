const alphabet = "0123456789abcdefghijklmnopqrstuvwxyz";

/** @param {number} [len=12] */
export function randomId(len = 12) {
  return randomString(len, alphabet);
}

/**
 * @param {number} len
 * @param {string} charset
 */
export function randomString(len, charset) {
  if (!Number.isFinite(len) || len <= 0) throw new TypeError("len must be > 0");
  if (!charset?.length) throw new TypeError("charset required");

  // Use crypto when available for better distribution.
  const cryptoObj = globalThis.crypto;
  if (cryptoObj?.getRandomValues) {
    const bytes = new Uint8Array(len);
    cryptoObj.getRandomValues(bytes);
    let out = "";
    for (let i = 0; i < len; i++) out += charset[bytes[i] % charset.length];
    return out;
  }

  let out = "";
  for (let i = 0; i < len; i++) out += charset[Math.floor(Math.random() * charset.length)];
  return out;
}
