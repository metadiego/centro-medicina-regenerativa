const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 3;

const buckets = new Map<string, number[]>();

export function checkRateLimit(ip: string): { allowed: boolean; retryAfterMs?: number } {
  const now = Date.now();
  const cutoff = now - WINDOW_MS;

  const timestamps = (buckets.get(ip) ?? []).filter((t) => t > cutoff);

  if (timestamps.length >= MAX_REQUESTS) {
    const oldest = timestamps[0];
    return { allowed: false, retryAfterMs: oldest + WINDOW_MS - now };
  }

  timestamps.push(now);
  buckets.set(ip, timestamps);
  return { allowed: true };
}

export function __resetRateLimit() {
  buckets.clear();
}
