import Link from "next/link";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          aria-label="Check4Real home"
          className="flex items-center transition-opacity hover:opacity-80"
        >
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center gap-1 text-sm">
          <Link
            href="/#how-it-works"
            className="px-3 py-2 text-muted-foreground hover:text-foreground rounded-md transition-colors"
          >
            How it works
          </Link>
          <Link
            href="/#trust"
            className="px-3 py-2 text-muted-foreground hover:text-foreground rounded-md transition-colors"
          >
            Why Check4Real
          </Link>
          <Link
            href="/#faq"
            className="px-3 py-2 text-muted-foreground hover:text-foreground rounded-md transition-colors"
          >
            FAQ
          </Link>
          <Link
            href="/privacy"
            className="px-3 py-2 text-muted-foreground hover:text-foreground rounded-md transition-colors"
          >
            Privacy
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/#verify"
            className="hidden sm:inline-flex items-center gap-1.5 h-9 px-4 rounded-lg bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Verify a number
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
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}
