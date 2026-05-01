import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-32">
      {/* Subtle gradient divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-5">
            <Logo size="lg" />
            <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
              Free, private routing-number verification powered by the ABA
              Mod-10 algorithm and the public Federal Reserve E-Payments
              directory.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-xs font-mono text-muted-foreground">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-success opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-success" />
              </span>
              <span className="uppercase tracking-[0.18em]">
                All systems operational
              </span>
            </div>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Product
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/#verify"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Verifier
                </Link>
              </li>
              <li>
                <Link
                  href="/#how-it-works"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  How it works
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Sources
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://www.frbservices.org/EPaymentsDirectory/search.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  Federal Reserve
                  <span className="text-muted-foreground text-xs">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://routingnumber.aba.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  ABA Lookup
                  <span className="text-muted-foreground text-xs">↗</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Legal
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <p className="text-xs text-muted-foreground max-w-md leading-relaxed">
            © {year} Check4Real. Informational service only — not a substitute
            for verification with your bank.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            Built for clarity, not confidence games.
          </p>
        </div>
      </div>

      {/* Massive watermark at the very bottom */}
      <div
        aria-hidden="true"
        className="relative overflow-hidden h-24 sm:h-32 -mt-4 select-none pointer-events-none"
      >
        <div className="absolute inset-x-0 -bottom-6 sm:-bottom-10 flex justify-center">
          <span className="font-display font-semibold tracking-tightest text-[8rem] sm:text-[12rem] lg:text-[16rem] leading-none bg-gradient-to-b from-foreground/[0.06] to-transparent bg-clip-text text-transparent">
            Check<span className="font-mono">4</span>Real
          </span>
        </div>
      </div>
    </footer>
  );
}
