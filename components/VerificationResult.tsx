"use client";

import { VerificationResult as VerificationResultType } from "@/types/routing";

interface VerificationResultProps {
  result: VerificationResultType;
  routingNumber?: string;
}

export default function VerificationResult({ result, routingNumber }: VerificationResultProps) {
  // Show success for fully valid routing numbers
  if (result.isValid && result.bankInfo) {
    return (
      <div className="relative overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-green-50 dark:from-green-900/20 dark:via-emerald-900/20 dark:to-green-900/20 border-2 border-green-400 dark:border-green-500 rounded-2xl p-8 shadow-xl shadow-green-200/50 dark:shadow-green-900/20 animate-fade-in">
        <div className="absolute top-0 right-0 w-40 h-40 bg-green-200/40 dark:bg-green-800/30 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-200/30 dark:bg-emerald-800/20 rounded-full blur-3xl -ml-16 -mb-16"></div>
        <div className="relative">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-green-400/40 animate-pulse">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-green-700 to-emerald-700 dark:from-green-300 dark:to-emerald-300 bg-clip-text text-transparent">
              Valid Routing Number
            </h3>
          </div>

          <div className="space-y-4 mb-6">
            <div className="p-4 bg-white/70 dark:bg-gray-800/70 rounded-xl backdrop-blur-sm border border-green-200/50 dark:border-green-700/50">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">Routing Number</span>
              </div>
              <span className="font-mono text-2xl font-bold text-green-700 dark:text-green-300">{result.bankInfo.routingNumber}</span>
            </div>
            
            <div className="p-4 bg-white/70 dark:bg-gray-800/70 rounded-xl backdrop-blur-sm border border-green-200/50 dark:border-green-700/50">
              <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-1">Bank Name</div>
              <div className="text-lg font-semibold text-gray-900 dark:text-white">{result.bankInfo.bankName}</div>
            </div>

            {result.bankInfo.address && (
              <div className="p-4 bg-white/70 dark:bg-gray-800/70 rounded-xl backdrop-blur-sm border border-green-200/50 dark:border-green-700/50">
                <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-1">Address</div>
                <div className="text-base text-gray-700 dark:text-gray-300">
                  {result.bankInfo.address}
                  {result.bankInfo.city && `, ${result.bankInfo.city}`}
                  {result.bankInfo.state && `, ${result.bankInfo.state}`}
                  {result.bankInfo.zipCode && ` ${result.bankInfo.zipCode}`}
                </div>
              </div>
            )}
            
            {result.bankInfo.phone && (
              <div className="p-4 bg-white/70 dark:bg-gray-800/70 rounded-xl backdrop-blur-sm border border-green-200/50 dark:border-green-700/50">
                <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-1">Phone</div>
                <div className="text-base text-gray-700 dark:text-gray-300">{result.bankInfo.phone}</div>
              </div>
            )}
          </div>

          <div className="mt-6 pt-6 border-t border-green-300/50 dark:border-green-700/50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 bg-white/60 dark:bg-gray-800/60 rounded-xl backdrop-blur-sm hover:bg-white/80 dark:hover:bg-gray-800/80 transition-colors">
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 dark:bg-green-900/40 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-green-600 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="font-medium text-green-700 dark:text-green-400">Format Valid</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white/60 dark:bg-gray-800/60 rounded-xl backdrop-blur-sm hover:bg-white/80 dark:hover:bg-gray-800/80 transition-colors">
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 dark:bg-green-900/40 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-green-600 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="font-medium text-green-700 dark:text-green-400">Algorithm Verified</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white/60 dark:bg-gray-800/60 rounded-xl backdrop-blur-sm hover:bg-white/80 dark:hover:bg-gray-800/80 transition-colors">
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 dark:bg-green-900/40 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-green-600 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="font-medium text-green-700 dark:text-green-400">In Database</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Show yellow-green warning for routing numbers that pass validation but aren't in database
  if (result.isValidFormat && result.isValidCheckDigit && !result.isInDatabase) {
    return (
      <div className="relative overflow-hidden bg-gradient-to-br from-lime-50 via-yellow-50 to-lime-50 dark:from-lime-900/20 dark:via-yellow-900/20 dark:to-lime-900/20 border-2 border-lime-400 dark:border-lime-500 rounded-2xl p-8 shadow-xl shadow-lime-200/50 dark:shadow-lime-900/20 animate-fade-in">
        <div className="absolute top-0 right-0 w-32 h-32 bg-lime-200/30 dark:bg-lime-800/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
        <div className="relative">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-lime-400 to-yellow-400 rounded-xl flex items-center justify-center shadow-lg shadow-lime-400/30">
              <svg
                className="w-7 h-7 text-lime-900 dark:text-lime-100"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-lime-700 to-yellow-700 dark:from-lime-300 dark:to-yellow-300 bg-clip-text text-transparent">
              Passes Validation - Exercise Caution
            </h3>
          </div>

          <div className="space-y-4 mb-6">
            <p className="text-base leading-relaxed text-lime-900 dark:text-lime-200">
              This routing number passes format and check digit validation, indicating a <strong className="font-semibold text-lime-800 dark:text-lime-100">good likelihood of being genuine</strong>. 
              However, it was not found in our database lookup.
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-lime-300/50 dark:border-lime-700/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-3 p-3 bg-white/60 dark:bg-gray-800/60 rounded-xl backdrop-blur-sm">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900/40 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-green-600 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="font-medium text-green-700 dark:text-green-400">Format Valid</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/60 dark:bg-gray-800/60 rounded-xl backdrop-blur-sm">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900/40 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-green-600 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="font-medium text-green-700 dark:text-green-400">Algorithm Verified</span>
              </div>
            </div>
          </div>

          <div className="mt-6 p-5 bg-gradient-to-r from-lime-100/80 to-yellow-100/80 dark:from-lime-900/40 dark:to-yellow-900/40 border border-lime-300/60 dark:border-lime-700/60 rounded-xl backdrop-blur-sm shadow-inner">
            <p className="text-sm leading-relaxed text-lime-900 dark:text-lime-200">
              <strong className="font-semibold">Note:</strong> The routing number may be from a smaller bank, recently issued, or not yet in the public database. 
              For additional verification, you can check with the issuing bank or visit{' '}
              <a 
                href={`https://routingnumber.aba.com/?rn=${routingNumber?.replace(/\D/g, '') || ''}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-lime-800 dark:hover:text-lime-100 font-semibold transition-colors"
              >
                routingnumber.aba.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Show red error for truly invalid routing numbers (format or check digit issues)
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-red-50 via-rose-50 to-red-50 dark:from-red-900/20 dark:via-rose-900/20 dark:to-red-900/20 border-2 border-red-400 dark:border-red-500 rounded-2xl p-8 shadow-xl shadow-red-200/50 dark:shadow-red-900/20 animate-fade-in">
      <div className="absolute top-0 right-0 w-32 h-32 bg-red-200/30 dark:bg-red-800/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
      <div className="relative">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-400 to-rose-500 rounded-xl flex items-center justify-center shadow-lg shadow-red-400/30">
            <svg
              className="w-7 h-7 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-red-700 to-rose-700 dark:from-red-300 dark:to-rose-300 bg-clip-text text-transparent">
            Invalid Routing Number
          </h3>
        </div>

        <div className="p-5 bg-white/70 dark:bg-gray-800/70 rounded-xl backdrop-blur-sm border border-red-200/50 dark:border-red-700/50 mb-6">
          <p className="text-base text-red-800 dark:text-red-300 font-medium">{result.error}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className={`flex items-center gap-3 p-4 rounded-xl backdrop-blur-sm transition-colors ${
            result.isValidFormat 
              ? 'bg-white/60 dark:bg-gray-800/60' 
              : 'bg-red-100/60 dark:bg-red-900/30'
          }`}>
            <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
              result.isValidFormat 
                ? 'bg-green-100 dark:bg-green-900/40' 
                : 'bg-red-100 dark:bg-red-900/40'
            }`}>
              {result.isValidFormat ? (
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-red-600 dark:text-red-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            <span className={`font-medium ${
              result.isValidFormat 
                ? 'text-green-700 dark:text-green-400' 
                : 'text-red-700 dark:text-red-400'
            }`}>
              {result.isValidFormat ? 'Format Valid' : 'Format Invalid'}
            </span>
          </div>
          <div className={`flex items-center gap-3 p-4 rounded-xl backdrop-blur-sm transition-colors ${
            result.isValidCheckDigit 
              ? 'bg-white/60 dark:bg-gray-800/60' 
              : 'bg-red-100/60 dark:bg-red-900/30'
          }`}>
            <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
              result.isValidCheckDigit 
                ? 'bg-green-100 dark:bg-green-900/40' 
                : 'bg-red-100 dark:bg-red-900/40'
            }`}>
              {result.isValidCheckDigit ? (
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-red-600 dark:text-red-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            <span className={`font-medium ${
              result.isValidCheckDigit 
                ? 'text-green-700 dark:text-green-400' 
                : 'text-red-700 dark:text-red-400'
            }`}>
              {result.isValidCheckDigit ? 'Algorithm Verified' : 'Algorithm Invalid'}
            </span>
          </div>
          <div className={`flex items-center gap-3 p-4 rounded-xl backdrop-blur-sm transition-colors ${
            result.isInDatabase 
              ? 'bg-white/60 dark:bg-gray-800/60' 
              : 'bg-red-100/60 dark:bg-red-900/30'
          }`}>
            <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
              result.isInDatabase 
                ? 'bg-green-100 dark:bg-green-900/40' 
                : 'bg-red-100 dark:bg-red-900/40'
            }`}>
              {result.isInDatabase ? (
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-red-600 dark:text-red-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            <span className={`font-medium ${
              result.isInDatabase 
                ? 'text-green-700 dark:text-green-400' 
                : 'text-red-700 dark:text-red-400'
            }`}>
              {result.isInDatabase ? 'In Database' : 'Not in Database'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

