import test from "node:test";
import assert from "node:assert/strict";
import { formatMoney, formatShortDate, truncateLabel } from "./format.js";

test("formatMoney", () => {
  assert.equal(formatMoney(1999), "$19.99");
  assert.equal(formatMoney(50, "EUR"), "€0.50");
});

test("formatShortDate invalid", () => {
  assert.equal(formatShortDate("not-a-date"), "—");
});

test("truncateLabel", () => {
  assert.equal(truncateLabel("hi", 10), "hi");
  assert.equal(truncateLabel("abcdefghijklm", 5), "abcd…");
});
