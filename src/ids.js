const alphabet = "0123456789abcdefghijklmnopqrstuvwxyz";

/** @param {number} [len=12] */
export function randomId(len = 12) {
  let out = "";
  for (let i = 0; i < len; i++) {
    out += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  return out;
}
