# Check4Real

A web application for verifying check routing numbers using Federal Reserve database information. Check4Real validates routing number format, checks the MOD 10 check digit algorithm, and cross-references routing numbers with official bank data.

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

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/Check4Real.git
cd Check4Real
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

```bash
npm run build
npm start
```

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy"

Your site will be live at `https://your-project.vercel.app`

### Environment Variables

No environment variables are required for basic functionality. If you plan to integrate external APIs in the future, add them in Vercel's project settings.

## Routing Number API Integration

The application uses the **BankRouting.io API** for real-time routing number verification. This provides:

- ✅ **No API key required** - Free to use
- ✅ **Real-time data** - Always up-to-date bank information
- ✅ **Rate limit**: 100 requests per hour per IP address
- ✅ **Automatic lookup** - No manual database management needed

The API is called server-side through Next.js API routes to keep the integration secure and handle CORS properly.

## Project Structure

```
check4real/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── CheckForm.tsx       # Routing number input form
│   └── VerificationResult.tsx  # Results display component
├── lib/
│   └── routingNumber.ts    # Verification logic
├── types/
│   └── routing.ts          # TypeScript types
└── data/
    └── routingNumbers.json # Routing number database
```

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

