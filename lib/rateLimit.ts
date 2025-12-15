/**
 * Simple in-memory rate limiter
 * Tracks requests per IP address within a time window
 */

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

// Configuration
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 10; // 10 requests per minute

/**
 * Clean up old entries periodically
 */
function cleanupOldEntries() {
  const now = Date.now();
  for (const [key, entry] of rateLimitStore.entries()) {
    if (now > entry.resetTime) {
      rateLimitStore.delete(key);
    }
  }
}

/**
 * Check if an IP address has exceeded the rate limit
 * @param identifier - IP address or unique identifier
 * @returns Object with allowed status and remaining requests
 */
export function checkRateLimit(identifier: string): {
  allowed: boolean;
  remaining: number;
  resetTime: number;
} {
  const now = Date.now();
  
  // Clean up old entries periodically (10% chance to avoid overhead)
  if (Math.random() < 0.1) {
    cleanupOldEntries();
  }

  const entry = rateLimitStore.get(identifier);

  if (!entry || now > entry.resetTime) {
    // New entry or expired entry
    rateLimitStore.set(identifier, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW_MS,
    });
    return {
      allowed: true,
      remaining: MAX_REQUESTS_PER_WINDOW - 1,
      resetTime: now + RATE_LIMIT_WINDOW_MS,
    };
  }

  if (entry.count >= MAX_REQUESTS_PER_WINDOW) {
    // Rate limit exceeded
    return {
      allowed: false,
      remaining: 0,
      resetTime: entry.resetTime,
    };
  }

  // Increment count
  entry.count++;
  return {
    allowed: true,
    remaining: MAX_REQUESTS_PER_WINDOW - entry.count,
    resetTime: entry.resetTime,
  };
}

/**
 * Get client IP address from request
 */
export function getClientIP(request: Request): string {
  // Try to get IP from headers (useful for Vercel/proxy setups)
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  const cfConnectingIP = request.headers.get('cf-connecting-ip'); // Cloudflare

  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  
  if (realIP) {
    return realIP;
  }
  
  if (cfConnectingIP) {
    return cfConnectingIP;
  }

  // Fallback (shouldn't happen in production with proper proxy)
  return 'unknown';
}

