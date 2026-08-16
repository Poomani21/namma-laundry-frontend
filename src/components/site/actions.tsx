import { Link, type LinkProps } from "@tanstack/react-router";
import { MessageCircle, Phone, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/data/site";

type Size = "sm" | "md" | "lg";

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60";

export function CTAButton({
  to,
  children,
  variant = "primary",
  size = "md",
  className,
  withArrow,
}: {
  to: LinkProps["to"];
  children: React.ReactNode;
  variant?: "primary" | "gold" | "outline" | "ghost";
  size?: Size;
  className?: string;
  withArrow?: boolean;
}) {
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-deep-soft",
    gold: "bg-gold text-primary hover:bg-gold-soft",
    outline: "border border-primary/25 bg-transparent text-primary hover:bg-secondary",
    ghost: "text-primary hover:bg-secondary",
  } as const;

  return (
    <Link to={to} className={cn(base, sizes[size], variants[variant], className)}>
      {children}
      {withArrow ? <ArrowRight className="h-4 w-4" aria-hidden="true" /> : null}
    </Link>
  );
}

export function WhatsAppButton({ size = "md", className }: { size?: Size; className?: string }) {
  return (
    <a
      href={`https://wa.me/${site.whatsapp}`}
      className={cn(base, sizes[size], "border border-primary/25 text-primary hover:bg-secondary", className)}
    >
      <MessageCircle className="h-4 w-4" aria-hidden="true" />
      WhatsApp
      <span className="sr-only"> {site.whatsapp}</span>
    </a>
  );
}

export function CallButton({ size = "md", className }: { size?: Size; className?: string }) {
  return (
    <a
      href={`tel:${site.phone}`}
      className={cn(base, sizes[size], "border border-primary/25 text-primary hover:bg-secondary", className)}
    >
      <Phone className="h-4 w-4" aria-hidden="true" />
      Call
      <span className="sr-only"> {site.phone}</span>
    </a>
  );
}
