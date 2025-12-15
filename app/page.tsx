import CheckForm from "@/components/CheckForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 relative">
          {/* Decorative background elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-200/20 dark:bg-blue-800/20 rounded-full blur-3xl -z-10"></div>
          <div className="absolute top-10 right-1/4 w-64 h-64 bg-indigo-200/20 dark:bg-indigo-800/20 rounded-full blur-3xl -z-10"></div>
          
          <div className="relative">
            {/* Icon/Badge */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl blur-xl opacity-50 animate-pulse"></div>
                <div className="relative w-20 h-20 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Title with gradient */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent leading-tight">
              Check4Real
            </h1>

            {/* Subtitle */}
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-full text-blue-700 dark:text-blue-300 font-semibold text-sm sm:text-base shadow-lg backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50">
                Verify Your Checks
              </span>
            </div>

            {/* Description */}
            <div className="max-w-2xl mx-auto">
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Verify check routing numbers using <strong className="font-semibold text-gray-900 dark:text-white">Federal Reserve database</strong> information.
              </p>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              Validates routing number structure, applies the check-digit algorithm, and cross-references official bank information.
              </p>
            </div>

            {/* Feature highlights */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full border border-gray-200/50 dark:border-gray-700/50 shadow-sm">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">Instant Verification</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full border border-gray-200/50 dark:border-gray-700/50 shadow-sm">
                <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">Secure & Private</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full border border-gray-200/50 dark:border-gray-700/50 shadow-sm">
                <svg className="w-4 h-4 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
                <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">Real-time Database</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Form */}
        <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-2xl p-8 sm:p-10 border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-indigo-50/50 dark:from-blue-900/10 dark:to-indigo-900/10"></div>
          <div className="relative">
            <CheckForm />
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-lg p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent dark:from-blue-900/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                No Stored Data
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Client-side processing, zero data collection, and follows best practices for privacy and security.
              </p>
            </div>
          </div>

          <div className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-lg p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-transparent dark:from-indigo-900/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                Validation Algorithm
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Validates the routing number using the Mod 10 (Luhn) check digit algorithm.
              </p>
            </div>
          </div>

          <div className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-lg p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent dark:from-purple-900/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                Federal Reserve Database
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Cross-references routing numbers against the official Federal Reserve routing number database.
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-6 rounded">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700 dark:text-yellow-300">
                <strong>Disclaimer:</strong> This service provides routing number verification
                for informational purposes only. Verification does not guarantee check authenticity
                or that funds are available. Always verify with your bank before accepting or depositing checks.
              </p>
              <p className="text-xs text-yellow-600 dark:text-yellow-400 mt-2">
                <a href="/privacy" className="underline hover:text-yellow-800 dark:hover:text-yellow-200 font-medium">
                  View our Privacy Policy
                </a>
                {' • '}
                We do not store any routing numbers or user data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

