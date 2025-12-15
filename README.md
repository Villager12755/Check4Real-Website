# Check4Real

A web application for verifying check routing numbers using Federal Reserve database information. Check4Real validates routing number format, checks the MOD 10 check digit algorithm, and cross-references routing numbers with official bank data.

# TRY NOW!
https://check4-real-website.vercel.app/

## Features

- ✅ **Format Validation**: Verifies routing numbers follow the correct 9-digit format
- ✅ **Check Digit Validation**: Uses MOD 10 algorithm to validate routing numbers
- ✅ **Federal Reserve Database**: Cross-references with official routing number database
- ✅ **Bank Information Display**: Shows bank name, address, and contact information
- ✅ **Modern UI**: Responsive design with dark mode support
- ✅ **Client-Side Processing**: All validation happens in the browser for privacy

## Technology Stack

- **Next.js 14+** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Vercel** - Hosting and deployment

## Getting Started

### Prerequisites

- Node.js 18+ and npm

## How It Works

1. **Format Check**: Validates that the input is exactly 9 digits (client-side, instant)
2. **Check Digit Validation**: Uses MOD 10 algorithm with weights [3, 7, 1, 3, 7, 1, 3, 7, 1] (client-side, instant)
3. **API Lookup**: Fetches bank information from BankRouting.io API (server-side)
4. **Result Display**: Shows validation results and bank details if found

## Disclaimer

This service provides routing number verification for informational purposes only. Verification does not guarantee check authenticity or that funds are available. Always verify with your bank before accepting checks.

## License

ISC

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.




