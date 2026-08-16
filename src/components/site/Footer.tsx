import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { site, mainNav } from "@/data/site";
import { services } from "@/data/services";
import { articles } from "@/data/articles";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-deep text-primary-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo variant="light" />
          <p className="mt-4 max-w-xs text-sm text-primary-foreground/70">
            Professional laundry and fabric care with approximately 10 years of local experience.
          </p>
          <ul className="mt-5 flex flex-wrap gap-3 text-sm">
            {site.social.map((s) => (
              <li key={s.label}>
                <a href={s.href} className="text-gold/90 underline-offset-4 hover:underline">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-gold">Navigation</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {mainNav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-primary-foreground/75 transition-colors hover:text-primary-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-gold">Services</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {services.slice(0, 8).map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="text-primary-foreground/75 transition-colors hover:text-primary-foreground"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
          <h3 className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-gold">Knowledge Centre</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {articles.slice(0, 3).map((a) => (
              <li key={a.slug}>
                <Link
                  to="/knowledge-centre/$slug"
                  params={{ slug: a.slug }}
                  className="text-primary-foreground/75 transition-colors hover:text-primary-foreground"
                >
                  {a.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-gold">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/75">
            <li>Phone: {site.phone}</li>
            <li>WhatsApp: {site.whatsapp}</li>
            <li>Address: {site.address}</li>
            <li>Service area: {site.serviceArea}</li>
            <li>Hours: {site.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Namma Laundry. All rights reserved.</p>
          <p>{site.domain}</p>
        </div>
      </div>
    </footer>
  );
}
