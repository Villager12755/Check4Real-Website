import Link from "next/link";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/55">
      <div className="container mx-auto flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          aria-label="Check4Real home"
          className="flex items-center transition-opacity hover:opacity-70"
        >
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm">
          <Link
            href="/#how-it-works"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            How it works
          </Link>
          <Link
            href="/#trust"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Methodology
          </Link>
          <Link
            href="/#faq"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            FAQ
          </Link>
          <Link
            href="/privacy"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Privacy
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/#verify"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Verify
            <span className="text-muted-foreground">→</span>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </header>
  );
}
