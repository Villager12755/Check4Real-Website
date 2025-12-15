import { NextRequest, NextResponse } from 'next/server';

/**
 * API route to look up routing number information
 * This can be used to fetch bank info from external sources or add to database
 * 
 * GET /api/lookup?routingNumber=123456789
 */
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const routingNumber = searchParams.get('routingNumber');

  if (!routingNumber) {
    return NextResponse.json(
      { error: 'Routing number parameter is required' },
      { status: 400 }
    );
  }

  // Normalize routing number
  const normalized = routingNumber.replace(/\D/g, '');

  if (!/^\d{9}$/.test(normalized)) {
    return NextResponse.json(
      { error: 'Invalid routing number format. Must be 9 digits.' },
      { status: 400 }
    );
  }

  // For now, just return instructions on how to find the bank info
  // In the future, this could integrate with external APIs
  return NextResponse.json({
    routingNumber: normalized,
    message: 'Use the ABA Routing Number Lookup tool to find bank information:',
    lookupUrl: `https://routingnumber.aba.com/?rn=${normalized}`,
    instructions: [
      '1. Visit https://routingnumber.aba.com/',
      '2. Enter the routing number',
      '3. Get the bank information',
      '4. Use the add-routing-number.js script to add it to the database'
    ]
  });
}

