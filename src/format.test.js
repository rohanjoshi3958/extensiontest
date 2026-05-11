import test from "node:test";
import assert from "node:assert/strict";
import { formatMoney, formatShortDate } from "./format.js";

test("formatMoney", () => {
  assert.equal(formatMoney(1999), "$19.99");
  assert.equal(formatMoney(50, "EUR"), "€0.50");
});

test("formatShortDate invalid", () => {
  assert.equal(formatShortDate("not-a-date"), "—");
});
