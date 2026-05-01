import CheckForm from "@/components/CheckForm";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ============================== HERO ============================== */}
      <section className="relative overflow-hidden">
        {/* Aurora background layer */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute inset-0 grid-bg opacity-60 dark:opacity-40" />
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[60rem] h-[40rem] rounded-full bg-primary/15 dark:bg-primary/20 blur-[120px] animate-aurora" />
          <div className="absolute -top-20 right-1/3 w-[28rem] h-[28rem] rounded-full bg-accent/10 dark:bg-accent/15 blur-[100px] animate-aurora" />
        </div>

        <div className="container mx-auto pt-16 sm:pt-24 pb-12">
          {/* Eyebrow */}
          <div className="flex justify-center animate-fade-up" style={{ animationDelay: "0ms" }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface/60 backdrop-blur-sm text-xs">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-success opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-success" />
              </span>
              <span className="text-muted-foreground">
                Live · Federal Reserve directory
              </span>
              <span className="w-px h-3 bg-border" />
              <span className="text-foreground font-medium">v1.0</span>
            </div>
          </div>

          {/* Title */}
          <h1
            className="mt-8 text-center text-balance font-display font-semibold tracking-tightest text-foreground text-5xl sm:text-6xl lg:text-7xl leading-[1.05] animate-fade-up"
            style={{ animationDelay: "60ms" }}
          >
            Verify any routing number
            <br />
            <span className="bg-gradient-to-br from-primary via-accent to-primary bg-clip-text text-transparent">
              in under a second.
            </span>
          </h1>

          {/* Subhead */}
          <p
            className="mx-auto mt-6 max-w-2xl text-center text-pretty text-base sm:text-lg leading-relaxed text-muted-foreground animate-fade-up"
            style={{ animationDelay: "120ms" }}
          >
            Check4Real validates ABA routing numbers using the official{" "}
            <span className="text-foreground font-medium">Mod-10 algorithm</span>{" "}
            and cross-references the public Federal Reserve E-Payments directory.
            No accounts, no logs, no tracking.
          </p>

          {/* Hero actions */}
          <div
            className="mt-10 flex flex-wrap items-center justify-center gap-3 animate-fade-up"
            style={{ animationDelay: "180ms" }}
          >
            <a
              href="#verify"
              className="inline-flex items-center gap-2 h-11 px-5 rounded-lg bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity shadow-soft"
            >
              Start verifying
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 h-11 px-5 rounded-lg border border-border bg-surface/60 backdrop-blur-sm text-foreground text-sm font-medium hover:bg-surface-elevated transition-colors"
            >
              How it works
            </a>
          </div>

          {/* Trust strip */}
          <div
            className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 animate-fade-up"
            style={{ animationDelay: "240ms" }}
          >
            {[
              { label: "ABA Standards" },
              { label: "Mod-10 Verified" },
              { label: "Federal Reserve Data" },
              { label: "Zero Data Stored" },
              { label: "TLS Encrypted" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-3.5 h-3.5 text-success"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ VERIFIER ============================ */}
      <section id="verify" className="relative scroll-mt-24">
        <div className="container mx-auto py-12 sm:py-16">
          <div className="mx-auto max-w-3xl">
            <div className="relative">
              {/* Subtle ambient glow behind card */}
              <div
                aria-hidden="true"
                className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-primary/20 via-transparent to-accent/20 blur-xl opacity-60"
              />
              <div className="relative rounded-2xl border border-border bg-surface/80 backdrop-blur-xl shadow-panel overflow-hidden">
                {/* Card header */}
                <div className="flex items-center justify-between gap-4 px-6 sm:px-8 py-5 border-b border-border/70">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-danger/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-warning/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-success/70" />
                    </div>
                    <span className="font-mono text-xs text-muted-foreground tracking-tight">
                      check4real.io / verify
                    </span>
                  </div>
                  <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect x="3" y="11" width="18" height="11" rx="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    Encrypted · No logs
                  </span>
                </div>

                {/* Form area */}
                <div className="px-6 sm:px-10 py-8 sm:py-10">
                  <CheckForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================== HOW IT WORKS ========================== */}
      <section id="how-it-works" className="relative scroll-mt-24">
        <div className="container mx-auto py-20 sm:py-28">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">
              How it works
            </p>
            <h2 className="font-display font-semibold tracking-tighter text-4xl sm:text-5xl text-foreground text-balance">
              Three layers of verification, in real time.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              Each request runs through structural validation, the ABA check-digit
              algorithm, and a directory lookup — entirely on the server, with
              nothing stored on disk.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                step: "01",
                title: "Structural validation",
                description:
                  "Confirms a 9-digit numeric format and verifies the leading prefix matches a valid Federal Reserve district.",
                icon: (
                  <path d="M3 7h18M3 12h18M3 17h12" />
                ),
              },
              {
                step: "02",
                title: "Mod-10 check digit",
                description:
                  "Applies the ABA's weighted Mod-10 algorithm: 3·(d1+d4+d7) + 7·(d2+d5+d8) + (d3+d6+d9) ≡ 0 (mod 10).",
                icon: (
                  <>
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 8v4l3 2" />
                  </>
                ),
              },
              {
                step: "03",
                title: "Directory lookup",
                description:
                  "Cross-references the official Federal Reserve E-Payments directory to surface bank name, location, and contact.",
                icon: (
                  <>
                    <path d="M3 21h18" />
                    <path d="M5 21V8l7-4 7 4v13" />
                    <path d="M9 21v-6h6v6" />
                  </>
                ),
              },
            ].map((item, idx) => (
              <div
                key={item.step}
                className="group relative rounded-2xl border border-border bg-surface p-6 hover:border-border-strong hover:bg-surface-elevated transition-all duration-300"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-foreground/[0.04] border border-border group-hover:bg-primary/10 group-hover:border-primary/40 transition-colors">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 text-foreground/70 group-hover:text-primary transition-colors"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.8}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      {item.icon}
                    </svg>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground tracking-tight">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ TRUST / STATS ========================== */}
      <section id="trust" className="relative scroll-mt-24">
        <div className="container mx-auto pb-20 sm:pb-28">
          <div className="rounded-3xl border border-border bg-surface/60 backdrop-blur-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-10 sm:p-14 border-b md:border-b-0 md:border-r border-border">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">
                  Built on the right primitives
                </p>
                <h2 className="font-display font-semibold tracking-tighter text-3xl sm:text-4xl text-foreground text-balance">
                  Bank-grade methodology, without the friction.
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  We don't guess. Verification is grounded in published ABA
                  standards and the Federal Reserve's public directory — the same
                  primitives banks themselves use.
                </p>

                <ul className="mt-8 space-y-4">
                  {[
                    {
                      title: "Privacy by default",
                      body: "Routing numbers are processed in-memory and discarded. No logs, no analytics, no cookies.",
                    },
                    {
                      title: "Rate-limited fairly",
                      body: "10 verifications per minute per IP keeps the service free and abuse-resistant.",
                    },
                    {
                      title: "Open, inspectable logic",
                      body: "Mod-10 is deterministic — re-derive the same result yourself anytime.",
                    },
                  ].map((f) => (
                    <li key={f.title} className="flex gap-3">
                      <div className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-success/15 flex items-center justify-center">
                        <svg
                          viewBox="0 0 24 24"
                          className="w-3 h-3 text-success"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={3}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M5 12.5l4.5 4.5L19 7.5" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          {f.title}
                        </p>
                        <p className="text-sm text-muted-foreground mt-0.5">
                          {f.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative p-10 sm:p-14 bg-gradient-to-br from-surface-elevated to-surface">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 dot-bg opacity-50"
                />
                <div className="relative grid grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden border border-border">
                  {[
                    { value: "29,000+", label: "U.S. financial institutions" },
                    { value: "<200ms", label: "Average response time" },
                    { value: "0", label: "Records stored on our servers" },
                    { value: "100%", label: "Free, no account needed" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-surface p-6 sm:p-8"
                    >
                      <p className="font-display text-3xl sm:text-4xl font-semibold tracking-tighter text-foreground">
                        {stat.value}
                      </p>
                      <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="relative mt-8 p-5 rounded-xl border border-border bg-surface">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>
                    <span className="font-mono">verify.ts</span>
                  </div>
                  <pre className="text-xs leading-relaxed font-mono text-muted-foreground overflow-x-auto">
                    <code>
                      <span className="text-primary">const</span> sum ={" "}
                      <span className="text-accent">3</span>*(d[0]+d[3]+d[6])
                      <br />
                      {"        "}+{" "}
                      <span className="text-accent">7</span>*(d[1]+d[4]+d[7])
                      <br />
                      {"        "}+{"   "}
                      <span className="text-accent"> </span>(d[2]+d[5]+d[8]);
                      <br />
                      <span className="text-primary">return</span> sum %{" "}
                      <span className="text-accent">10</span> ==={" "}
                      <span className="text-accent">0</span>;
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== FAQ =============================== */}
      <section id="faq" className="relative scroll-mt-24">
        <div className="container mx-auto pb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">
                FAQ
              </p>
              <h2 className="font-display font-semibold tracking-tighter text-3xl sm:text-4xl text-foreground text-balance">
                Common questions.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Don't see yours? Read the{" "}
                <Link
                  href="/privacy"
                  className="text-foreground underline underline-offset-4 decoration-border hover:decoration-primary transition-colors"
                >
                  privacy policy
                </Link>{" "}
                for the technical details.
              </p>
            </div>

            <div className="md:col-span-2">
              <dl className="divide-y divide-border border-y border-border">
                {[
                  {
                    q: "Does Check4Real guarantee a check is real?",
                    a: "No tool can. Verifying a routing number proves the bank exists and the number is well-formed — not that the issuer has funds or that the check itself is authentic. Always confirm with your bank before depositing.",
                  },
                  {
                    q: "Where does the bank data come from?",
                    a: "We use the public Federal Reserve E-Payments directory (FedACH/Fedwire) as the authoritative source, supplemented by the BankRouting.io API for enriched lookups.",
                  },
                  {
                    q: "Do you store any data I enter?",
                    a: "No. Routing numbers are processed in-memory and discarded immediately after the response is returned. We don't use cookies, analytics, or any tracking.",
                  },
                  {
                    q: "Is there a rate limit?",
                    a: "Yes — 10 requests per minute per IP. This keeps the service free and abuse-resistant. If you need higher throughput, contact us.",
                  },
                  {
                    q: "Can I use this commercially?",
                    a: "Check4Real is provided as an informational utility. For production payment systems, you should use a licensed provider with SLAs and a contractual data source.",
                  },
                ].map((item) => (
                  <details
                    key={item.q}
                    className="group py-6 [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary className="flex cursor-pointer items-start justify-between gap-6 list-none">
                      <span className="font-medium text-foreground text-base sm:text-lg pr-4">
                        {item.q}
                      </span>
                      <span className="flex-shrink-0 mt-1 w-7 h-7 rounded-full border border-border flex items-center justify-center text-muted-foreground group-open:bg-foreground group-open:text-background group-open:border-foreground transition-colors">
                        <svg
                          viewBox="0 0 24 24"
                          className="w-3.5 h-3.5 group-open:rotate-45 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2.5}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-3 text-muted-foreground leading-relaxed pr-12">
                      {item.a}
                    </p>
                  </details>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ========================= FINAL CTA / DISCLAIMER ====================== */}
      <section className="relative">
        <div className="container mx-auto pb-24">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-surface to-surface-elevated p-8 sm:p-12">
            <div
              aria-hidden="true"
              className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-primary/10 blur-3xl"
            />
            <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-warning/15 border border-warning/30 flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-warning"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Informational use only
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground max-w-2xl leading-relaxed">
                    Verification confirms a routing number's structure and the
                    issuing bank — it does not guarantee check authenticity or
                    available funds. Always verify with your bank before
                    accepting or depositing a check.
                  </p>
                </div>
              </div>
              <Link
                href="/privacy"
                className="inline-flex items-center gap-2 h-10 px-4 rounded-lg border border-border bg-surface hover:bg-surface-elevated text-sm font-medium text-foreground transition-colors whitespace-nowrap"
              >
                Read Privacy Policy
                <svg
                  viewBox="0 0 24 24"
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
