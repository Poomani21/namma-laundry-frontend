import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { CTAButton } from "./actions";
import { mainNav } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
      <div className="container-page grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3">
        <Logo />

        <div className="flex items-center gap-2">
          <nav aria-label="Main" className="hidden items-center gap-1 xl:flex">
            {mainNav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="rounded-md px-3 py-2 text-sm text-foreground/80 transition-colors hover:text-primary data-[status=active]:font-semibold data-[status=active]:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <CTAButton to="/estimate" size="sm" className="hidden sm:inline-flex">
            Get Estimate
          </CTAButton>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-border text-primary xl:hidden"
          >
            {open ? <Menu className="hidden" /> : null}
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-background xl:hidden">
          <nav aria-label="Mobile" className="container-page flex flex-col py-3">
            {mainNav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-sm text-foreground/85 transition-colors hover:bg-secondary data-[status=active]:font-semibold data-[status=active]:text-primary"
              >
                {item.label}
              </Link>
            ))}
            <CTAButton to="/estimate" className="mt-3 w-full" size="md">
              Get Estimate
            </CTAButton>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
