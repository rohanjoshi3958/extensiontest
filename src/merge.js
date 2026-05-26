/**
 * Shallow merge of plain objects (last wins).
 * @param {Record<string, unknown>} base
 * @param {...Record<string, unknown>} patches
 */
export function mergeShallow(base, ...patches) {
  return patches.reduce((acc, p) => ({ ...acc, ...p }), { ...base });
}

/**
 * @param {string[]} tags
 */
export function uniqueTags(tags) {
  return [...new Set(tags.map((t) => t.trim().toLowerCase()).filter(Boolean))];
}
