/** Runtime knobs for the fake service layer. */
export const config = {
  apiBaseUrl: process.env.API_BASE ?? "https://api.example.test",
  requestTimeoutMs: 12_000,
  maxRetries: 3,
};
