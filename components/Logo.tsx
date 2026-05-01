interface LogoProps {
  className?: string;
  showWordmark?: boolean;
}

export default function Logo({ className = "", showWordmark = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent shadow-soft">
        <svg
          viewBox="0 0 24 24"
          className="w-4 h-4 text-primary-foreground"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M5 12.5l4.5 4.5L19 7.5" />
        </svg>
        <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/20" aria-hidden="true" />
      </div>
      {showWordmark && (
        <span className="font-semibold tracking-tight text-foreground text-[15px]">
          Check<span className="text-primary">4</span>Real
        </span>
      )}
    </div>
  );
}
