import { randomId } from "./ids.js";
import { truncateLabel, pad2 } from "./format.js";
import { resolveApiUrl } from "./http.js";
import { displayName } from "./users.js";
import { uniqueTags } from "./merge.js";

const id = randomId(10);
const label = truncateLabel("very-long-label-for-commit-summary-testing", 18);
const url = resolveApiUrl(`/v1/users/${id}`);

const fakeUser = { id, name: "Smoke Tester", email: "smoke@example.test" };
const tags = uniqueTags(["Beta", "beta", "  QA "]);
console.log({ id, label, url, slot: pad2(3), who: displayName(fakeUser), tags });

