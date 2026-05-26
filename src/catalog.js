import { getJson } from "./http.js";
import { paginate } from "./pagination.js";
import { TtlCache } from "./cache.js";

/** @typedef {{ sku: string; title: string; priceCents: number }} Product */

const cache = new TtlCache(30_000);

/**
 * @param {number} [page]
 */
export async function listProducts(page = 1) {
  const key = `products:p${page}`;
  const cached = cache.get(key);
  if (cached) return cached;

  const raw = await getJson(`/v1/catalog?page=${page}`);
  const items = Array.isArray(raw) ? raw : raw?.items ?? [];
  const result = paginate(items, page);
  cache.set(key, result);
  return result;
}

/**
 * @param {string} sku
 * @returns {Promise<Product | null>}
 */
export async function fetchProduct(sku) {
  if (!sku?.trim()) return null;
  try {
    return await getJson(`/v1/catalog/${encodeURIComponent(sku)}`);
  } catch {
    return null;
  }
}
