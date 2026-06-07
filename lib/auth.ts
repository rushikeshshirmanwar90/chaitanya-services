// Shared admin-auth helpers used by the middleware (Edge), the login API route
// (Node) and the login page. Kept runtime-agnostic: the only crypto used is the
// Web Crypto API, which is available in both the Edge and Node runtimes.

// Name of the cookie that marks an authenticated admin session.
export const ADMIN_COOKIE = "admin_auth";

// How long the session lasts: 30 days (in seconds).
export const ADMIN_SESSION_MAX_AGE = 60 * 60 * 24 * 30;

// The admin password. Read from the environment, falling back to the known
// value so the gate still works if the env var is missing.
export const ADMIN_PASSWORD =
  process.env.ADMIN_PASSWORD || "Chaitanya_Services@2025";

// Salt mixed into the cookie token so the stored value isn't guessable and
// isn't the raw password. Bump the suffix to invalidate every session.
const TOKEN_SALT = "chaitanya-services-admin-v1";

async function sha256(text: string): Promise<string> {
  const data = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

// Deterministic, non-reversible token derived from the password. This is what
// gets stored in the (httpOnly) cookie and what the middleware compares against.
export function expectedToken(): Promise<string> {
  return sha256(`${ADMIN_PASSWORD}::${TOKEN_SALT}`);
}
