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
