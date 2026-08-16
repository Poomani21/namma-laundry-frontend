import { Link } from "@tanstack/react-router";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const text = variant === "light" ? "text-primary-foreground" : "text-primary";
  return (
    <Link to="/" className="flex min-w-0 items-center gap-2.5" aria-label="Namma Laundry home">
      <span
        className="grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 border-gold bg-primary font-display text-sm font-semibold tracking-tight text-gold"
        aria-hidden="true"
      >
        NL
      </span>
      <span className="min-w-0 leading-tight">
        <span className={`block truncate font-display text-base font-semibold ${text}`}>Namma Laundry</span>
        <span className="block truncate text-[11px] uppercase tracking-[0.18em] text-gold">Fabric Care</span>
      </span>
    </Link>
  );
}
