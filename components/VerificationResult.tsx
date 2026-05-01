"use client";

import { VerificationResult as VerificationResultType } from "@/types/routing";

interface VerificationResultProps {
  result: VerificationResultType;
  routingNumber?: string;
}

interface CheckRowProps {
  label: string;
  passed: boolean;
}

function CheckRow({ label, passed }: CheckRowProps) {
  return (
    <div className="flex items-center justify-between py-3 px-4 rounded-lg bg-surface-elevated border border-border">
      <span className="text-sm text-foreground/80">{label}</span>
      {passed ? (
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-success">
          <svg
            viewBox="0 0 24 24"
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12.5l4.5 4.5L19 7.5" />
          </svg>
          Pass
        </span>
      ) : (
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-danger">
          <svg
            viewBox="0 0 24 24"
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
          Fail
        </span>
      )}
    </div>
  );
}

interface InfoRowProps {
  label: string;
  value: string;
  mono?: boolean;
}

function InfoRow({ label, value, mono }: InfoRowProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 py-3 px-4 rounded-lg bg-surface-elevated border border-border">
      <dt className="text-xs uppercase tracking-wider text-muted-foreground sm:w-32 flex-shrink-0">
        {label}
      </dt>
      <dd
        className={`text-sm text-foreground font-medium ${mono ? "font-mono tracking-wide" : ""}`}
      >
        {value}
      </dd>
    </div>
  );
}

export default function VerificationResult({
  result,
  routingNumber,
}: VerificationResultProps) {
  const formattedRn = routingNumber
    ? `${routingNumber.slice(0, 3)} ${routingNumber.slice(3, 6)} ${routingNumber.slice(6, 9)}`
    : "";

  // ============================== VALID ==============================
  if (result.isValid && result.bankInfo) {
    const addressParts = [
      result.bankInfo.address,
      result.bankInfo.city,
      result.bankInfo.state,
      result.bankInfo.zipCode,
    ].filter(Boolean);

    return (
      <div className="relative overflow-hidden rounded-2xl border border-success/30 bg-gradient-to-br from-success/5 via-transparent to-success/5">
        <div
          aria-hidden="true"
          className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-success/10 blur-3xl"
        />

        {/* Header */}
        <div className="relative px-6 sm:px-8 py-6 border-b border-success/20 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-success/15 border border-success/30 flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 text-success"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-success">
                Verified
              </p>
              <h3 className="text-xl font-semibold text-foreground tracking-tight">
                Valid routing number
              </h3>
            </div>
          </div>
          <span className="hidden sm:inline-flex font-mono text-sm text-foreground/70 px-3 py-1.5 rounded-md bg-surface border border-border">
            {formattedRn}
          </span>
        </div>

        {/* Bank info */}
        <div className="relative p-6 sm:p-8">
          <dl className="space-y-2">
            <InfoRow
              label="Routing"
              value={result.bankInfo.routingNumber}
              mono
            />
            <InfoRow label="Bank" value={result.bankInfo.bankName} />
            {addressParts.length > 0 && (
              <InfoRow
                label="Address"
                value={addressParts.join(", ")}
              />
            )}
            {result.bankInfo.phone && (
              <InfoRow label="Phone" value={result.bankInfo.phone} mono />
            )}
          </dl>

          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground mb-3">
              Verification breakdown
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <CheckRow label="Format" passed />
              <CheckRow label="Mod-10" passed />
              <CheckRow label="Directory" passed />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ===================== PASSES VALIDATION, NOT IN DB =====================
  if (
    result.isValidFormat &&
    result.isValidCheckDigit &&
    !result.isInDatabase
  ) {
    return (
      <div className="relative overflow-hidden rounded-2xl border border-warning/30 bg-gradient-to-br from-warning/5 via-transparent to-warning/5">
        <div
          aria-hidden="true"
          className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-warning/10 blur-3xl"
        />

        {/* Header */}
        <div className="relative px-6 sm:px-8 py-6 border-b border-warning/20 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-warning/15 border border-warning/30 flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 text-warning"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 9v4M12 17h.01" />
                <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-warning">
                Inconclusive
              </p>
              <h3 className="text-xl font-semibold text-foreground tracking-tight">
                Passes algorithm — not in directory
              </h3>
            </div>
          </div>
          <span className="hidden sm:inline-flex font-mono text-sm text-foreground/70 px-3 py-1.5 rounded-md bg-surface border border-border">
            {formattedRn}
          </span>
        </div>

        {/* Body */}
        <div className="relative p-6 sm:p-8 space-y-6">
          <p className="text-sm text-foreground/80 leading-relaxed">
            This number passes both structural and{" "}
            <span className="font-semibold text-foreground">Mod-10 check-digit</span>{" "}
            validation, suggesting it is well-formed. However, it is not present
            in our directory lookup — possibly a smaller or recently issued
            institution.
          </p>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground mb-3">
              Verification breakdown
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <CheckRow label="Format" passed />
              <CheckRow label="Mod-10" passed />
              <CheckRow label="Directory" passed={false} />
            </div>
          </div>

          <div className="rounded-xl border border-border bg-surface-elevated p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground mb-2">
              Recommended next step
            </p>
            <p className="text-sm text-foreground/80 leading-relaxed">
              Confirm with the issuing bank directly, or cross-check on the{" "}
              <a
                href={`https://routingnumber.aba.com/?rn=${routingNumber?.replace(/\D/g, "") || ""}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline underline-offset-4 decoration-primary/40 font-medium"
              >
                ABA Routing Number Lookup
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    );
  }

  // ============================== INVALID ==============================
  return (
    <div className="relative overflow-hidden rounded-2xl border border-danger/30 bg-gradient-to-br from-danger/5 via-transparent to-danger/5">
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-danger/10 blur-3xl"
      />

      {/* Header */}
      <div className="relative px-6 sm:px-8 py-6 border-b border-danger/20 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-danger/15 border border-danger/30 flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 text-danger"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-danger">
              Failed
            </p>
            <h3 className="text-xl font-semibold text-foreground tracking-tight">
              Invalid routing number
            </h3>
          </div>
        </div>
        <span className="hidden sm:inline-flex font-mono text-sm text-foreground/70 px-3 py-1.5 rounded-md bg-surface border border-border">
          {formattedRn}
        </span>
      </div>

      {/* Body */}
      <div className="relative p-6 sm:p-8 space-y-6">
        {result.error && (
          <div className="rounded-xl border border-danger/20 bg-danger/5 p-4">
            <p className="text-sm text-foreground/90 font-medium">
              {result.error}
            </p>
          </div>
        )}

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground mb-3">
            Verification breakdown
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <CheckRow label="Format" passed={result.isValidFormat} />
            <CheckRow label="Mod-10" passed={result.isValidCheckDigit} />
            <CheckRow label="Directory" passed={result.isInDatabase} />
          </div>
        </div>
      </div>
    </div>
  );
}
