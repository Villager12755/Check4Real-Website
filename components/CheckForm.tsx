"use client";

import { useState } from "react";
import { verifyRoutingNumber } from "@/lib/routingNumber";
import { VerificationResult as VerificationResultType } from "@/types/routing";
import VerificationResult from "./VerificationResult";

export default function CheckForm() {
  const [routingNumber, setRoutingNumber] = useState("");
  const [result, setResult] = useState<VerificationResultType | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const verificationResult = await verifyRoutingNumber(routingNumber);
      setResult(verificationResult);
    } catch (error) {
      console.error('Verification error:', error);
      // Check if it's a rate limit error
      const errorMessage = error instanceof Error ? error.message : String(error);
      if (errorMessage.includes('rate limit') || errorMessage.includes('429')) {
        setResult({
          isValid: false,
          isValidFormat: true,
          isValidCheckDigit: true,
          isInDatabase: false,
          error: "Rate limit exceeded. Please wait a minute before trying again.",
        });
      } else {
        setResult({
          isValid: false,
          isValidFormat: true,
          isValidCheckDigit: true,
          isInDatabase: false,
          error: "An error occurred while verifying the routing number. Please try again.",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setRoutingNumber("");
    setResult(null);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="routingNumber"
            className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide"
          >
            Enter Routing Number
          </label>
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                id="routingNumber"
                value={routingNumber}
                onChange={(e) => setRoutingNumber(e.target.value.replace(/\D/g, ""))}
                placeholder="123456789"
                maxLength={9}
                className="w-full px-5 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800/80 dark:text-white text-lg font-mono shadow-sm hover:shadow-md transition-all duration-200 backdrop-blur-sm"
                required
                disabled={isLoading}
              />
              {routingNumber.length > 0 && (
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-gray-400">
                  {routingNumber.length}/9
                </div>
              )}
            </div>
            <button
              type="submit"
              disabled={isLoading || routingNumber.length !== 9}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl disabled:shadow-sm transform hover:scale-105 disabled:transform-none"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Verifying...
                </span>
              ) : (
                "Verify"
              )}
            </button>
          </div>
          <p className="mt-3 text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Enter a 9-digit routing number to verify
          </p>
        </div>
      </form>

      {result && (
        <div className="mt-8 animate-fade-in">
          <VerificationResult result={result} routingNumber={routingNumber} />
          <button
            onClick={handleReset}
            className="mt-6 px-6 py-3 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200 flex items-center gap-2 mx-auto"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Verify Another Number
          </button>
        </div>
      )}
    </div>
  );
}

