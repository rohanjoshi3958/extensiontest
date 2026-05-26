const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** @param {string} email */
export function isValidEmail(email) {
  return emailRe.test(email.trim());
}

/** @param {string} id */
export function isUuidLike(id) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(id);
}

/** @param {unknown} value */
export function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}
