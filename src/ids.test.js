import test from "node:test";
import assert from "node:assert/strict";
import { randomId, randomString } from "./ids.js";

test("randomId returns expected length", () => {
  const id = randomId(7);
  assert.equal(id.length, 7);
});

test("randomString validates args", () => {
  assert.throws(() => randomString(0, "abc"));
  assert.throws(() => randomString(3, ""));
});

