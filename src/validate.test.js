import test from "node:test";
import assert from "node:assert/strict";
import { isValidEmail, isUuidLike, isNonEmptyString } from "./validate.js";

test("isValidEmail", () => {
  assert.equal(isValidEmail("a@b.co"), true);
  assert.equal(isValidEmail("nope"), false);
});

test("isUuidLike", () => {
  assert.equal(isUuidLike("550e8400-e29b-41d4-a716-446655440000"), true);
  assert.equal(isUuidLike("not-uuid"), false);
});

test("isNonEmptyString", () => {
  assert.equal(isNonEmptyString("  x "), true);
  assert.equal(isNonEmptyString("   "), false);
});
