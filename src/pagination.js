import { config } from "./config.js";

/**
 * @template T
 * @param {T[]} items
 * @param {number} [page=1]
 * @param {number} [pageSize=config.defaultPageSize]
 */
export function paginate(items, page = 1, pageSize = config.defaultPageSize) {
  const p = Math.max(1, page);
  const size = Math.max(1, pageSize);
  const start = (p - 1) * size;
  const slice = items.slice(start, start + size);
  const total = items.length;
  const pages = Math.max(1, Math.ceil(total / size));
  return { items: slice, page: p, pageSize: size, total, pages };
}
