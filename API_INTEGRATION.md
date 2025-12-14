# API Integration Details

## BankRouting.io API

Check4Real uses the **BankRouting.io** API for routing number verification. This is a free, no-authentication-required API that provides real-time bank information.

### API Details

- **Base URL**: `https://bankrouting.io/api/v1/aba/{routingNumber}`
- **Method**: GET
- **Authentication**: None required
- **Rate Limit**: 100 requests per hour per IP address
- **Response Format**: JSON

### Example Request

```bash
GET https://bankrouting.io/api/v1/aba/021000021
```

### Example Response

```json
{
  "status": "success",
  "data": {
    "aba_number": "021000021",
    "bank_name": "JPMORGAN CHASE BANK",
    "city": "COLUMBUS",
    "state": "OH"
  }
}
```

## Implementation

The API is integrated through a Next.js API route (`/api/verify`) which:

1. Receives the routing number from the client
2. Validates the format server-side
3. Makes the request to BankRouting.io
4. Formats the response to match our application's data structure
5. Returns the bank information to the client

This approach:
- ✅ Keeps API details server-side
- ✅ Handles CORS properly
- ✅ Allows for future API key management if needed
- ✅ Provides better error handling

## Rate Limiting

The API has a rate limit of **100 requests per hour per IP address**. For production use with higher traffic, consider:

1. Implementing client-side caching
2. Using a different API with higher limits
3. Contacting BankRouting.io for higher rate limits
4. Implementing your own caching layer

## Alternative APIs

If you need to switch to a different API, you can modify `app/api/verify/route.ts` to use:

- **API Ninjas Routing Number API** (requires API key)
- **Stack's Routing Number Lookup API** (requires API key)
- **Treasury Prime Routing Number API** (requires authentication)

## Error Handling

The integration handles:
- Invalid routing number format
- Routing numbers not found (404)
- API errors (500, network issues)
- Rate limit exceeded (429)

All errors are gracefully handled and displayed to the user with helpful messages.

