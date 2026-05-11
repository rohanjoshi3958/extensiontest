import { getJson } from "./http.js";

/** @typedef {{ id: string; name: string; email: string }} User */

/**
 * @param {string} userId
 * @returns {Promise<User>}
 */
export async function fetchUser(userId) {
  if (!userId?.trim()) throw new TypeError("userId required");
  return getJson(`/v1/users/${encodeURIComponent(userId)}`);
}

/**
 * @param {string} query
 * @returns {Promise<User[]>}
 */
export async function searchUsers(query) {
  const q = query.trim();
  if (q.length < 2) return [];
  return getJson(`/v1/users?q=${encodeURIComponent(q)}`);
}
