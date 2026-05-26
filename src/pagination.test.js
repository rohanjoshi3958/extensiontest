import test from "node:test";
import assert from "node:assert/strict";
import { paginate } from "./pagination.js";

const items = Array.from({ length: 10 }, (_, i) => i + 1);

test("paginate middle page", () => {
  const { items: page, page: p, total, pages } = paginate(items, 2, 3);
  assert.deepEqual(page, [4, 5, 6]);
  assert.equal(p, 2);
  assert.equal(total, 10);
  assert.equal(pages, 4);
});
