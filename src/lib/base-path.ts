/**
 * Prefix a public asset path with the GitHub Pages base path in production.
 *
 * Usage:
 *   <img src={p("/images/iPhone 17 - 1.png")} />
 *   <img src={p("/mockups/hot-bg.png")} />
 *
 * In dev (NODE_ENV !== "production") the prefix is empty so paths work unchanged.
 */
const BASE = process.env.NODE_ENV === "production" ? "/Portfolio" : "";

export function p(path: string): string {
  // Avoid double-prefixing if someone already passes a full URL
  if (path.startsWith("http")) return path;
  return `${BASE}${path}`;
}
