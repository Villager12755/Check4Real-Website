import { NextRequest, NextResponse } from 'next/server';
import { checkRateLimit, getClientIP } from '@/lib/rateLimit';

type RateLimitMeta = {
  remaining: number;
  resetTime: number;
};

function rateLimitHeaders(rateLimit: RateLimitMeta) {
  return {
    'X-RateLimit-Limit': '10',
    'X-RateLimit-Remaining': rateLimit.remaining.toString(),
    'X-RateLimit-Reset': rateLimit.resetTime.toString(),
  };
}

async function verifyRoutingNumber(
  normalized: string,
  rateLimit: RateLimitMeta
): Promise<NextResponse> {
  try {
    const response = await fetch(`https://bankrouting.io/api/v1/aba/${normalized}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      if (response.status === 404) {
        return NextResponse.json(
          {
            found: false,
            error: 'Routing number not found in database',
          },
          { headers: rateLimitHeaders(rateLimit) }
        );
      }
      throw new Error(`API returned status ${response.status}`);
    }

    const data = await response.json();

    if (data.status === 'success' && data.data) {
      return NextResponse.json(
        {
          found: true,
          bankInfo: {
            routingNumber: normalized,
            bankName: data.data.bank_name || data.data.bankName || 'Unknown Bank',
            city: data.data.city || '',
            state: data.data.state || '',
            address: data.data.address || '',
            zipCode: data.data.zip_code || data.data.zipCode || '',
            phone: data.data.phone || '',
          },
        },
        { headers: rateLimitHeaders(rateLimit) }
      );
    }

    return NextResponse.json(
      {
        found: false,
        error: 'Routing number not found',
      },
      { headers: rateLimitHeaders(rateLimit) }
    );
  } catch (error) {
    console.error(
      'Error fetching routing number from API:',
      error instanceof Error ? error.message : 'Unknown error'
    );
    return NextResponse.json(
      {
        found: false,
        error: 'Failed to verify routing number. Please try again later.',
      },
      {
        status: 500,
        headers: rateLimitHeaders(rateLimit),
      }
    );
  }
}

/**
 * POST /api/verify
 * Body: { "routingNumber": "021000021" }
 *
 * Uses POST so the routing number is not placed in the URL (and thus
 * not recorded in typical server access logs).
 */
export async function POST(request: NextRequest) {
  const clientIP = getClientIP(request);
  const rateLimit = checkRateLimit(clientIP);

  if (!rateLimit.allowed) {
    return NextResponse.json(
      {
        error: 'Rate limit exceeded. Please try again later.',
        remaining: 0,
        resetTime: rateLimit.resetTime,
      },
      {
        status: 429,
        headers: {
          ...rateLimitHeaders(rateLimit),
          'X-RateLimit-Remaining': '0',
          'Retry-After': Math.ceil(
            (rateLimit.resetTime - Date.now()) / 1000
          ).toString(),
        },
      }
    );
  }

  let body: { routingNumber?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: 'Invalid JSON body' },
      { status: 400, headers: rateLimitHeaders(rateLimit) }
    );
  }

  const routingNumber =
    typeof body.routingNumber === 'string' ? body.routingNumber : '';

  if (!routingNumber) {
    return NextResponse.json(
      { error: 'routingNumber is required in request body' },
      { status: 400, headers: rateLimitHeaders(rateLimit) }
    );
  }

  const normalized = routingNumber.replace(/\D/g, '');

  if (!/^\d{9}$/.test(normalized)) {
    return NextResponse.json(
      { error: 'Invalid routing number format. Must be 9 digits.' },
      { status: 400, headers: rateLimitHeaders(rateLimit) }
    );
  }

  return verifyRoutingNumber(normalized, rateLimit);
}

/** Reject GET — routing numbers must not be sent in query strings. */
export async function GET() {
  return NextResponse.json(
    {
      error:
        'Method not allowed. Use POST with JSON body: { "routingNumber": "..." }',
    },
    { status: 405, headers: { Allow: 'POST' } }
  );
}
