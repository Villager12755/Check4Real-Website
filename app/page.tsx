import CheckForm from "@/components/CheckForm";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ============================== HERO ============================== */}
      <section className="relative overflow-hidden">
        {/* Aurora + grid background */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 grid-bg opacity-[0.35] dark:opacity-25" />
          <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[70rem] h-[44rem] rounded-full bg-primary/15 dark:bg-primary/20 blur-[140px] animate-aurora" />
          <div className="absolute top-20 -right-32 w-[28rem] h-[28rem] rounded-full bg-accent/10 dark:bg-accent/15 blur-[120px] animate-aurora" />
        </div>

        {/* Massive watermark "4" */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-12 sm:right-0 top-24 select-none"
        >
          <span className="block font-mono font-bold leading-none text-[18rem] sm:text-[28rem] lg:text-[36rem] tracking-tightest text-primary/[0.05] dark:text-primary/[0.07]">
            4
          </span>
        </div>

        <div className="container mx-auto pt-20 sm:pt-28 pb-20 sm:pb-32 relative">
          <div className="max-w-4xl">
            {/* Status line */}
            <div
              className="flex items-center gap-3 text-xs font-mono text-muted-foreground mb-10 animate-fade-up"
              style={{ animationDelay: "0ms" }}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-success opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-success" />
              </span>
              <span className="uppercase tracking-[0.2em]">Live</span>
              <span className="text-border-strong">/</span>
              <span>Federal Reserve E-Payments directory</span>
            </div>

            {/* Display headline */}
            <h1
              className="font-display font-semibold tracking-tightest text-foreground text-balance text-5xl sm:text-7xl lg:text-[5.75rem] leading-[0.98] animate-fade-up"
              style={{ animationDelay: "60ms" }}
            >
              The fastest way to know
              <br />
              if a check is{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-br from-primary via-accent to-primary bg-clip-text text-transparent italic font-display">
                  for real
                </span>
                <svg
                  aria-hidden="true"
                  className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-3 text-primary/40"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M2 8 Q 50 2, 100 6 T 198 4" />
                </svg>
              </span>
              .
            </h1>

            {/* Subhead */}
            <p
              className="mt-8 max-w-2xl text-pretty text-lg sm:text-xl leading-relaxed text-muted-foreground animate-fade-up"
              style={{ animationDelay: "120ms" }}
            >
              Verify any U.S. routing number in under a second. We run the ABA
              Mod-10 algorithm and cross-check the public Federal Reserve
              directory — no account, no logs, no tracking.
            </p>

            {/* CTAs */}
            <div
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4 animate-fade-up"
              style={{ animationDelay: "180ms" }}
            >
              <a
                href="#verify"
                className="group inline-flex items-center gap-2 h-12 px-6 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition-all"
              >
                Verify a number
                <span className="inline-flex w-5 h-5 rounded-full bg-background/10 items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 h-12 px-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                See how it works
                <span className="text-muted-foreground">→</span>
              </a>
            </div>
          </div>

          {/* Inline meta row — replaces the trust pills */}
          <div
            className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-8 max-w-4xl animate-fade-up"
            style={{ animationDelay: "260ms" }}
          >
            {[
              { k: "Standard", v: "ABA Mod-10" },
              { k: "Source", v: "Fed E-Payments" },
              { k: "Latency", v: "< 200 ms" },
              { k: "Stored", v: "0 records" },
            ].map((m) => (
              <div key={m.k} className="border-l border-border pl-4">
                <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
                  {m.k}
                </p>
                <p className="mt-1.5 text-lg font-semibold tracking-tight text-foreground">
                  {m.v}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ VERIFIER ============================ */}
      <section id="verify" className="relative scroll-mt-24">
        <div className="container mx-auto py-12 sm:py-20">
          <div className="mx-auto max-w-2xl">
            {/* Section eyebrow above the form */}
            <div className="mb-10 text-center">
              <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-primary mb-3">
                Verifier
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tighter text-foreground">
                Run a check.
              </h2>
              <p className="mt-3 text-muted-foreground">
                Enter a 9-digit routing number. We'll do the rest.
              </p>
            </div>

            {/* The form, free-floating with soft radial halo behind it */}
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-12 sm:-inset-16 -z-10 bg-gradient-radial-soft"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 50% at 50% 50%, hsl(var(--primary) / 0.08), transparent 70%)",
                }}
              />
              <CheckForm />
            </div>
          </div>
        </div>
      </section>

      {/* =========================== HOW IT WORKS ========================== */}
      <section id="how-it-works" className="relative scroll-mt-24">
        <div className="container mx-auto py-24 sm:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-12 mb-20">
            <div className="lg:col-span-5">
              <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-primary mb-4">
                How it works
              </p>
              <h2 className="font-display font-semibold tracking-tightest text-4xl sm:text-5xl text-foreground text-balance leading-[1.05]">
                Three checks.
                <br />
                One source of truth.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex items-end">
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                Every request runs through structural validation, the ABA
                check-digit algorithm, and a directory lookup — entirely on the
                server, with nothing stored on disk.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Connecting line */}
            <div
              aria-hidden="true"
              className="absolute top-6 left-0 right-0 hidden md:block h-px bg-gradient-to-r from-transparent via-border-strong to-transparent"
            />

            <ol className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-12">
              {[
                {
                  num: "01",
                  title: "Structural validation",
                  body: "Confirms a 9-digit numeric format and verifies the leading prefix maps to a valid Federal Reserve district.",
                },
                {
                  num: "02",
                  title: "Mod-10 check digit",
                  body: "Applies the ABA's weighted Mod-10 algorithm — a deterministic test that catches transposition errors and fabricated numbers.",
                },
                {
                  num: "03",
                  title: "Directory lookup",
                  body: "Cross-references the official Federal Reserve E-Payments directory to surface bank name, location, and contact.",
                },
              ].map((step) => (
                <li key={step.num} className="relative">
                  <div className="relative inline-flex items-center justify-center w-12 h-12 mb-6 rounded-full bg-background border border-border-strong text-foreground font-mono text-sm font-medium">
                    {step.num}
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ============================ TRUST / STATS ========================== */}
      <section id="trust" className="relative scroll-mt-24">
        <div className="container mx-auto py-24 sm:py-32 border-t border-border/60">
          {/* Headline + features split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-16">
            <div className="lg:col-span-5">
              <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-primary mb-4">
                Why Check4Real
              </p>
              <h2 className="font-display font-semibold tracking-tightest text-4xl sm:text-5xl text-foreground text-balance leading-[1.05]">
                Bank-grade methodology.
                <br />
                <span className="text-muted-foreground">Without the friction.</span>
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">
                We don't guess. Verification is grounded in published ABA
                standards and the Federal Reserve's public directory — the same
                primitives banks themselves rely on.
              </p>
            </div>

            <div className="lg:col-span-6 lg:col-start-7 space-y-8">
              {[
                {
                  title: "Privacy by default",
                  body: "Routing numbers are processed in-memory and discarded. No logs, no analytics, no cookies.",
                },
                {
                  title: "Open, inspectable logic",
                  body: "Mod-10 is deterministic — re-derive the same result yourself anytime.",
                },
                {
                  title: "Rate-limited fairly",
                  body: "10 verifications per minute per IP keeps the service free and abuse-resistant.",
                },
              ].map((f, i) => (
                <div
                  key={f.title}
                  className="flex gap-5 pb-8 border-b border-border/60 last:border-b-0 last:pb-0"
                >
                  <span className="font-mono text-xs text-muted-foreground tabular-nums flex-shrink-0 mt-1">
                    0{i + 1}
                  </span>
                  <div>
                    <h4 className="font-semibold text-foreground tracking-tight">
                      {f.title}
                    </h4>
                    <p className="mt-1 text-muted-foreground text-pretty leading-relaxed">
                      {f.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Massive stats — typographic, no boxes */}
          <div className="mt-24 sm:mt-32 pt-16 border-t border-border/60">
            <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-muted-foreground mb-10">
              By the numbers
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8">
              {[
                { value: "29k+", label: "U.S. financial institutions indexed" },
                { value: "<200ms", label: "Median response time" },
                { value: "0", label: "Records stored on our servers" },
                { value: "100%", label: "Free, no account required" },
              ].map((stat) => (
                <div key={stat.label} className="group">
                  <p className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tightest text-foreground">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-[14ch]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Code as a pull quote — left accent only, no full box */}
          <div className="mt-24 max-w-3xl">
            <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-muted-foreground mb-4">
              The math
            </p>
            <div className="relative pl-6 sm:pl-8 border-l-2 border-primary/50">
              <pre className="font-mono text-[13px] sm:text-sm leading-loose text-foreground/80 overflow-x-auto">
                <code>
                  <span className="text-muted-foreground">// ABA Mod-10 — RFC 1990, ANSI X9.4</span>
                  {"\n"}
                  <span className="text-primary">const</span> sum =
                  {"\n"}  <span className="text-accent">3</span> *
                  (d[<span className="text-accent">0</span>] + d[<span className="text-accent">3</span>] + d[<span className="text-accent">6</span>]) +
                  {"\n"}  <span className="text-accent">7</span> *
                  (d[<span className="text-accent">1</span>] + d[<span className="text-accent">4</span>] + d[<span className="text-accent">7</span>]) +
                  {"\n"}  <span className="text-accent">1</span> *
                  (d[<span className="text-accent">2</span>] + d[<span className="text-accent">5</span>] + d[<span className="text-accent">8</span>]);
                  {"\n"}
                  <span className="text-primary">return</span>{" "}
                  sum % <span className="text-accent">10</span> ==={" "}
                  <span className="text-accent">0</span>;
                </code>
              </pre>
              <p className="mt-4 text-sm text-muted-foreground italic">
                Every digit, weighted, summed, mod-10. Zero is verified.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== FAQ =============================== */}
      <section id="faq" className="relative scroll-mt-24">
        <div className="container mx-auto py-24 sm:py-32 border-t border-border/60">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-12">
            <div className="lg:col-span-4">
              <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-primary mb-4">
                FAQ
              </p>
              <h2 className="font-display font-semibold tracking-tightest text-4xl sm:text-5xl text-foreground leading-[1.05]">
                Frequently
                <br />
                asked.
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Don't see yours? The{" "}
                <Link
                  href="/privacy"
                  className="text-foreground underline underline-offset-4 decoration-border hover:decoration-primary transition-colors"
                >
                  privacy policy
                </Link>{" "}
                covers the technical details.
              </p>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <dl>
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
                    a: "Check4Real is provided as an informational utility. For production payment systems, use a licensed provider with SLAs and a contractual data source.",
                  },
                ].map((item) => (
                  <details
                    key={item.q}
                    className="group py-7 border-b border-border first:border-t [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary className="flex cursor-pointer items-start justify-between gap-6 list-none">
                      <span className="font-medium text-foreground text-base sm:text-[17px] tracking-tight pr-4">
                        {item.q}
                      </span>
                      <span className="flex-shrink-0 mt-1 text-muted-foreground group-open:text-foreground transition-colors">
                        <svg
                          viewBox="0 0 24 24"
                          className="w-5 h-5 group-open:rotate-45 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={1.8}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-3 text-muted-foreground leading-relaxed pr-12 text-pretty">
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
        <div className="container mx-auto py-12 border-t border-border/60">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start gap-4 max-w-2xl">
              <span className="flex-shrink-0 mt-1 inline-flex items-center justify-center w-6 h-6 text-warning">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4M12 16h.01" />
                </svg>
              </span>
              <div>
                <p className="font-medium text-foreground tracking-tight">
                  Informational use only.
                </p>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed text-pretty">
                  Verification confirms a routing number's structure and the
                  issuing bank — it does not guarantee check authenticity or
                  available funds. Always verify with your bank before
                  accepting or depositing a check.
                </p>
              </div>
            </div>
            <Link
              href="/privacy"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap"
            >
              Privacy policy
              <span className="text-muted-foreground">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
