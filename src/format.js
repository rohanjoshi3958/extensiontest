/**
 * @param {number} cents
 * @param {string} [currency="USD"]
 */
export function formatMoney(cents, currency = "USD") {
  const amount = cents / 100;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  }).format(amount);
}

/** @param {string} isoDate */
export function formatShortDate(isoDate) {
  const d = new Date(isoDate);
  if (Number.isNaN(d.getTime())) return "—";
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

/**
 * @param {string} label
 * @param {number} [max=32]
 */
export function truncateLabel(label, max = 32) {
  const s = label.trim();
  if (s.length <= max) return s;
  return `${s.slice(0, Math.max(0, max - 1))}…`;
}
