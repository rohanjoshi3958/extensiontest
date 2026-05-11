import { randomId } from "./ids.js";
import { truncateLabel } from "./format.js";
import { resolveApiUrl } from "./http.js";

const id = randomId(10);
const label = truncateLabel("very-long-label-for-commit-summary-testing", 18);
const url = resolveApiUrl(`/v1/users/${id}`);

console.log({ id, label, url });

