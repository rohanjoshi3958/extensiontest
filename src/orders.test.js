import test from "node:test";
import assert from "node:assert/strict";
import { ordersMatchingStatus, totalCents } from "./orders.js";

const sample = [
  { id: "a", status: "shipped", totalCents: 1000, placedAt: "2026-01-01" },
  { id: "b", status: "cancelled", totalCents: 500, placedAt: "2026-01-02" },
  { id: "c", status: "processing", totalCents: 250, placedAt: "2026-01-03" },
];

test("ordersMatchingStatus", () => {
  const out = ordersMatchingStatus(sample);
  assert.equal(out.length, 2);
});

test("totalCents", () => {
  assert.equal(totalCents(sample), 1750);
});
