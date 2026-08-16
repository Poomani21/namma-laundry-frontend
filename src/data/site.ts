export const site = {
  name: "Namma Laundry",
  domain: "nammalaundry.in",
  tagline: "Professional laundry & fabric care",
  experience: "Approximately 10 years of local experience",
  phone: "[PHONE NUMBER]",
  whatsapp: "[WHATSAPP NUMBER]",
  address: "[ADDRESS]",
  serviceArea: "[SERVICE AREA]",
  hours: "[BUSINESS HOURS]",
  email: "[EMAIL]",
  social: [
    { label: "Instagram", href: "[INSTAGRAM LINK]" },
    { label: "Facebook", href: "[FACEBOOK LINK]" },
    { label: "Google Business", href: "[GOOGLE BUSINESS LINK]" },
  ],
} as const;

export const estimateDisclaimer =
  "This is an estimated price. Final pricing may vary depending on item condition, fabric, size, stains and special treatment.";

export const mainNav = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Pricing", to: "/pricing" },
  { label: "Online Estimate", to: "/estimate" },
  { label: "Knowledge Centre", to: "/knowledge-centre" },
  { label: "About", to: "/about" },
  { label: "Reviews", to: "/reviews" },
  { label: "Contact", to: "/contact" },
] as const;
