import { getJson } from "./http.js";
import { formatMoney, formatShortDate } from "./format.js";

/**
 * @typedef {{ id: string; totalCents: number; placedAt: string; status: string }} Order
 */

/**
 * @param {string} userId
 * @returns {Promise<Order[]>}
 */
export async function listOrdersForUser(userId) {
  const raw = await getJson(`/v1/users/${encodeURIComponent(userId)}/orders`);
  return Array.isArray(raw) ? raw : raw?.items ?? [];
}

/**
 * @param {Order} order
 */
export function summarizeOrder(order) {
  const total = formatMoney(order.totalCents);
  const when = formatShortDate(order.placedAt);
  return `${order.id}: ${order.status} · ${total} · ${when}`;
}

/**
 * @param {Order[]} orders
 * @param {string[]} [statuses=['shipped','processing']]
 */
export function ordersMatchingStatus(orders, statuses = ["shipped", "processing"]) {
  const set = new Set(statuses);
  return orders.filter((o) => set.has(o.status));
}

/**
 * @param {Order[]} orders
 */
export function totalCents(orders) {
  return orders.reduce((sum, o) => sum + (o.totalCents ?? 0), 0);
}
