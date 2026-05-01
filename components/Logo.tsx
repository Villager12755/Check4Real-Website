interface LogoProps {
  className?: string;
  variant?: "wordmark" | "mark";
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: "text-[14px]",
  md: "text-[15px]",
  lg: "text-base",
};

export default function Logo({
  className = "",
  variant = "wordmark",
  size = "md",
}: LogoProps) {
  if (variant === "mark") {
    return (
      <span
        aria-label="Check4Real"
        className={`inline-flex items-baseline font-mono font-bold leading-none ${className}`}
      >
        <span className="text-foreground">/</span>
        <span className="text-primary">4</span>
      </span>
    );
  }

  return (
    <div
      aria-label="Check4Real"
      className={`inline-flex items-baseline font-semibold tracking-tightest text-foreground select-none ${sizes[size]} ${className}`}
    >
      <span>Check</span>
      <span className="font-mono font-bold text-primary tracking-normal mx-[2px] text-[1.08em] leading-none translate-y-[0.5px]">
        4
      </span>
      <span>Real</span>
    </div>
  );
}
