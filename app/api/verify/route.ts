import { NextRequest, NextResponse } from 'next/server';
import { checkRateLimit, getClientIP } from '@/lib/rateLimit';

/**
 * API route to verify routing number using external API
 * This fetches bank information from BankRouting.io API
 */
export async function GET(request: NextRequest) {
  // Rate limiting
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
          'X-RateLimit-Limit': '10',
          'X-RateLimit-Remaining': '0',
          'X-RateLimit-Reset': rateLimit.resetTime.toString(),
          'Retry-After': Math.ceil((rateLimit.resetTime - Date.now()) / 1000).toString(),
        },
      }
    );
  }

  const searchParams = request.nextUrl.searchParams;
  const routingNumber = searchParams.get('routingNumber');

  if (!routingNumber) {
    return NextResponse.json(
      { error: 'Routing number parameter is required' },
      {
        status: 400,
        headers: {
          'X-RateLimit-Limit': '10',
          'X-RateLimit-Remaining': rateLimit.remaining.toString(),
          'X-RateLimit-Reset': rateLimit.resetTime.toString(),
        },
      }
    );
  }

  // Normalize routing number
  const normalized = routingNumber.replace(/\D/g, '');

  if (!/^\d{9}$/.test(normalized)) {
    return NextResponse.json(
      { error: 'Invalid routing number format. Must be 9 digits.' },
      {
        status: 400,
        headers: {
          'X-RateLimit-Limit': '10',
          'X-RateLimit-Remaining': rateLimit.remaining.toString(),
          'X-RateLimit-Reset': rateLimit.resetTime.toString(),
        },
      }
    );
  }

  try {
    // Fetch from BankRouting.io API (free, no key required)
    const response = await fetch(`https://bankrouting.io/api/v1/aba/${normalized}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      if (response.status === 404) {
        return NextResponse.json(
          {
            found: false,
            routingNumber: normalized,
            error: 'Routing number not found in database',
          },
          {
            headers: {
              'X-RateLimit-Limit': '10',
              'X-RateLimit-Remaining': rateLimit.remaining.toString(),
              'X-RateLimit-Reset': rateLimit.resetTime.toString(),
            },
          }
        );
      }
      throw new Error(`API returned status ${response.status}`);
    }

    const data = await response.json();

    if (data.status === 'success' && data.data) {
      return NextResponse.json(
        {
          found: true,
          routingNumber: normalized,
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
        {
          headers: {
            'X-RateLimit-Limit': '10',
            'X-RateLimit-Remaining': rateLimit.remaining.toString(),
            'X-RateLimit-Reset': rateLimit.resetTime.toString(),
          },
        }
      );
    } else {
      return NextResponse.json(
        {
          found: false,
          routingNumber: normalized,
          error: 'Routing number not found',
        },
        {
          headers: {
            'X-RateLimit-Limit': '10',
            'X-RateLimit-Remaining': rateLimit.remaining.toString(),
            'X-RateLimit-Reset': rateLimit.resetTime.toString(),
          },
        }
      );
    }
  } catch (error) {
    // Log error without exposing routing number for security
    console.error('Error fetching routing number from API:', error instanceof Error ? error.message : 'Unknown error');
    return NextResponse.json(
      {
        found: false,
        routingNumber: normalized,
        error: 'Failed to verify routing number. Please try again later.',
      },
      {
        status: 500,
        headers: {
          'X-RateLimit-Limit': '10',
          'X-RateLimit-Remaining': rateLimit.remaining.toString(),
          'X-RateLimit-Reset': rateLimit.resetTime.toString(),
        },
      }
    );
  }
}

