/** Runtime knobs for the fake service layer. */
export const config = {
  apiBaseUrl: process.env.API_BASE ?? "https://api.example.test",
  requestTimeoutMs: 15_000,
  maxRetries: 4,
  defaultPageSize: 25,
  /** When true, http layer may log slow requests (no-op in this sandbox). */
  traceSlowRequests: process.env.TRACE_HTTP === "1",
};
