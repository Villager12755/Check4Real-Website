"use client";

import { useState, useRef, useEffect } from "react";
import { verifyRoutingNumber } from "@/lib/routingNumber";
import { VerificationResult as VerificationResultType } from "@/types/routing";
import VerificationResult from "./VerificationResult";

export default function CheckForm() {
  const [routingNumber, setRoutingNumber] = useState("");
  const [result, setResult] = useState<VerificationResultType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (result && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [result]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (routingNumber.length !== 9 || isLoading) return;
    setIsLoading(true);

    try {
      const verificationResult = await verifyRoutingNumber(routingNumber);
      setResult(verificationResult);
    } catch (error) {
      console.error("Verification error:", error);
      const errorMessage = error instanceof Error ? error.message : String(error);
      if (errorMessage.includes("rate limit") || errorMessage.includes("429")) {
        setResult({
          isValid: false,
          isValidFormat: true,
          isValidCheckDigit: true,
          isInDatabase: false,
          error:
            "Rate limit exceeded. Please wait a minute before trying again.",
        });
      } else {
        setResult({
          isValid: false,
          isValidFormat: true,
          isValidCheckDigit: true,
          isInDatabase: false,
          error:
            "An error occurred while verifying the routing number. Please try again.",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setRoutingNumber("");
    setResult(null);
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  const fillSample = () => {
    setRoutingNumber("021000021");
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  const digits = routingNumber.padEnd(9, "•").split("");
  const formatted = `${routingNumber.slice(0, 3)}${routingNumber.length > 3 ? " " : ""}${routingNumber.slice(3, 6)}${routingNumber.length > 6 ? " " : ""}${routingNumber.slice(6, 9)}`;

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label
            htmlFor="routingNumber"
            className="flex items-center justify-between mb-3"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Routing Number
            </span>
            <button
              type="button"
              onClick={fillSample}
              className="text-xs text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Try a sample →
            </button>
          </label>

          {/* Visual digit frame (decorative) */}
          <div
            aria-hidden="true"
            className="mb-3 hidden sm:flex items-center justify-center gap-1.5 select-none"
          >
            {digits.map((d, i) => {
              const filled = d !== "•";
              return (
                <div
                  key={i}
                  className={`w-9 h-12 rounded-md border flex items-center justify-center font-mono text-lg transition-all duration-200 ${
                    filled
                      ? "border-primary/40 bg-primary/5 text-foreground"
                      : "border-border bg-surface-elevated text-muted-foreground/40"
                  } ${
                    i === routingNumber.length && !isLoading
                      ? "ring-2 ring-primary/30 border-primary/60"
                      : ""
                  } ${i === 2 || i === 5 ? "mr-1" : ""}`}
                >
                  {filled ? d : ""}
                </div>
              );
            })}
          </div>

          {/* Input + Button */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative group">
              <input
                ref={inputRef}
                type="text"
                inputMode="numeric"
                autoComplete="off"
                id="routingNumber"
                value={formatted}
                onChange={(e) => {
                  const cleaned = e.target.value.replace(/\D/g, "").slice(0, 9);
                  setRoutingNumber(cleaned);
                  if (result) setResult(null);
                }}
                placeholder="000 000 000"
                className="w-full h-14 px-4 sm:px-5 rounded-xl border border-border bg-background hover:border-border-strong focus:border-primary focus:ring-4 focus:ring-primary/15 focus:outline-none text-foreground placeholder:text-muted-foreground/40 text-xl font-mono tracking-wider transition-all duration-200 disabled:opacity-50"
                required
                disabled={isLoading}
                aria-describedby="routing-help"
              />
              <div
                className={`absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono tabular-nums transition-colors ${
                  routingNumber.length === 9
                    ? "text-success"
                    : "text-muted-foreground"
                }`}
              >
                {routingNumber.length}/9
              </div>
            </div>
            <button
              type="submit"
              disabled={isLoading || routingNumber.length !== 9}
              className="relative h-14 px-6 sm:px-8 rounded-xl bg-foreground text-background font-medium text-sm hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-foreground/20 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 overflow-hidden"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Verifying
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  Verify
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              )}
            </button>
          </div>

          <p
            id="routing-help"
            className="mt-3 text-xs text-muted-foreground flex items-center gap-1.5"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-3.5 h-3.5 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 16v-4M12 8h.01" />
            </svg>
            The 9-digit number printed on the bottom-left of any U.S. check.
          </p>
        </div>
      </form>

      {result && (
        <div ref={resultRef} className="mt-8 animate-fade-up">
          <VerificationResult
            result={result}
            routingNumber={routingNumber}
          />
          <div className="mt-6 flex items-center justify-center">
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-2 h-10 px-4 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-surface-elevated transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M3 12a9 9 0 1 0 9-9" />
                <path d="M3 4v5h5" />
              </svg>
              Verify another number
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
