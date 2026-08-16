export type PriceItem = {
  id: string;
  service: string;
  serviceSlug: string;
  item: string;
  unit: string;
  price: string;
  notes: string;
};

/**
 * Placeholder pricing data for Phase 1.
 * The shape mirrors the future remote collection so the UI can switch
 * to a live data source without changing components.
 */
export const priceList: PriceItem[] = [
  { id: "wf-1", service: "Wash & Fold", serviceSlug: "wash-fold", item: "Everyday clothing", unit: "Per kg", price: "[PRICE]", notes: "Sorted by colour and fabric" },
  { id: "wf-2", service: "Wash & Fold", serviceSlug: "wash-fold", item: "Kids' clothing", unit: "Per kg", price: "[PRICE]", notes: "—" },
  { id: "wi-1", service: "Wash & Iron", serviceSlug: "wash-iron", item: "Shirt", unit: "Per piece", price: "[PRICE]", notes: "Pressed finish" },
  { id: "wi-2", service: "Wash & Iron", serviceSlug: "wash-iron", item: "Trouser", unit: "Per piece", price: "[PRICE]", notes: "—" },
  { id: "si-1", service: "Steam Ironing", serviceSlug: "steam-ironing", item: "Shirt / Kurta", unit: "Per piece", price: "[PRICE]", notes: "Press only" },
  { id: "si-2", service: "Steam Ironing", serviceSlug: "steam-ironing", item: "Saree", unit: "Per piece", price: "[PRICE]", notes: "Press only" },
  { id: "dc-1", service: "Dry Cleaning", serviceSlug: "dry-cleaning", item: "Blazer / Coat", unit: "Per piece", price: "[PRICE]", notes: "Structured garment" },
  { id: "dc-2", service: "Dry Cleaning", serviceSlug: "dry-cleaning", item: "Kurta set", unit: "Per set", price: "[PRICE]", notes: "—" },
  { id: "dc-3", service: "Dry Cleaning", serviceSlug: "dry-cleaning", item: "Gown", unit: "Per piece", price: "[PRICE]", notes: "Work-dependent" },
  { id: "sa-1", service: "Saree Care", serviceSlug: "sarees", item: "Silk saree (plain)", unit: "Per piece", price: "[PRICE]", notes: "Individually handled" },
  { id: "sa-2", service: "Saree Care", serviceSlug: "sarees", item: "Saree (heavy work)", unit: "Per piece", price: "[PRICE]", notes: "Assessed on inspection" },
  { id: "bl-1", service: "Blanket Cleaning", serviceSlug: "blankets", item: "Single blanket", unit: "Per piece", price: "[PRICE]", notes: "—" },
  { id: "bl-2", service: "Blanket Cleaning", serviceSlug: "blankets", item: "Double blanket / Quilt", unit: "Per piece", price: "[PRICE]", notes: "Size-dependent" },
  { id: "cu-1", service: "Curtain Cleaning", serviceSlug: "curtains", item: "Curtain panel", unit: "Per panel", price: "[PRICE]", notes: "Length-dependent" },
  { id: "cu-2", service: "Curtain Cleaning", serviceSlug: "curtains", item: "Sheer / Net curtain", unit: "Per panel", price: "[PRICE]", notes: "—" },
  { id: "ca-1", service: "Carpet Cleaning", serviceSlug: "carpets", item: "Carpet / Rug", unit: "Per sq ft", price: "[PRICE]", notes: "Pile-dependent" },
  { id: "ca-2", service: "Carpet Cleaning", serviceSlug: "carpets", item: "Door mat", unit: "Per piece", price: "[PRICE]", notes: "—" },
  { id: "hl-1", service: "Home Linen Care", serviceSlug: "home-linen", item: "Bed sheet", unit: "Per piece", price: "[PRICE]", notes: "—" },
  { id: "hl-2", service: "Home Linen Care", serviceSlug: "home-linen", item: "Pillow cover", unit: "Per piece", price: "[PRICE]", notes: "—" },
  { id: "hl-3", service: "Home Linen Care", serviceSlug: "home-linen", item: "Towel", unit: "Per piece", price: "[PRICE]", notes: "—" },
  { id: "sh-1", service: "Shoe Cleaning", serviceSlug: "shoes", item: "Sneakers", unit: "Per pair", price: "[PRICE]", notes: "Material-dependent" },
  { id: "sh-2", service: "Shoe Cleaning", serviceSlug: "shoes", item: "Leather shoes", unit: "Per pair", price: "[PRICE]", notes: "—" },
  { id: "bg-1", service: "Bag Cleaning", serviceSlug: "bags", item: "Handbag", unit: "Per piece", price: "[PRICE]", notes: "Size-dependent" },
  { id: "bg-2", service: "Bag Cleaning", serviceSlug: "bags", item: "Backpack / Luggage", unit: "Per piece", price: "[PRICE]", notes: "—" },
  { id: "st-1", service: "Stain Removal", serviceSlug: "stain-removal", item: "Targeted stain treatment", unit: "Per item", price: "[PRICE]", notes: "Assessed before treatment" },
];

export function pricesForService(slug: string) {
  return priceList.filter((p) => p.serviceSlug === slug);
}

export const priceGroups = Array.from(new Set(priceList.map((p) => p.service))).map((service) => ({
  service,
  items: priceList.filter((p) => p.service === service),
}));
