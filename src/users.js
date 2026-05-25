import { getJson } from "./http.js";

/** @typedef {{ id: string; name: string; email: string }} User */

/** @param {string} value */
export function normalizeEmail(value) {
  return value.trim().toLowerCase();
}

/**
 * @param {string} userId
 * @returns {Promise<User>}
 */
export async function fetchUser(userId) {
  if (!userId?.trim()) throw new TypeError("userId required");
  return getJson(`/v1/users/${encodeURIComponent(userId)}`);
}

/**
 * @param {string} email
 * @returns {Promise<User | null>}
 */
export async function fetchUserByEmail(email) {
  const list = await searchUsers(normalizeEmail(email));
  const hit = list.find((u) => normalizeEmail(u.email) === normalizeEmail(email));
  return hit ?? null;
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

/** @param {User} user */
export function displayName(user) {
  const name = user.name?.trim();
  return name || user.email.split("@")[0] || "Unknown";
}
