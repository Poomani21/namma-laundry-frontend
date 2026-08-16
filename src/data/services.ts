export type ServiceFaq = { q: string; a: string };

export type Service = {
  slug: string;
  title: string;
  category: "Laundry" | "Dry Cleaning" | "Home Fabric Care" | "Specialised Care";
  icon: string;
  summary: string;
  intro: string;
  whyNeeded: string[];
  handled: string[];
  process: { step: string; detail: string }[];
  suitable: string[];
  frequency: string;
  faqs: ServiceFaq[];
};

const commonFaq: ServiceFaq[] = [
  {
    q: "How do I get a price before handing over my items?",
    a: "Use the Online Estimate tool for an indicative total, or send us photos on WhatsApp at [WHATSAPP NUMBER] for guidance.",
  },
  {
    q: "How long does the service take?",
    a: "Turnaround depends on the item, fabric and current workload. We confirm a realistic timeline when your items are received.",
  },
];

export const services: Service[] = [
  {
    slug: "blankets",
    title: "Blanket Cleaning",
    category: "Home Fabric Care",
    icon: "BedDouble",
    summary: "Deep cleaning for blankets, quilts and comforters that are too bulky for home machines.",
    intro:
      "Blankets hold dust, body oils and moisture that ordinary home washing rarely removes. We clean them with equipment sized for bulky bedding, then dry them thoroughly so they return soft, fresh and ready to use.",
    whyNeeded: [
      "Household machines cannot agitate or rinse thick bedding properly.",
      "Trapped dust and moisture affect comfort and fabric life.",
      "Incomplete drying at home leads to odour and dampness.",
    ],
    handled: ["Woollen blankets", "Quilts and comforters", "Duvets and duvet covers", "Fleece and mink blankets", "Bedspreads"],
    process: [
      { step: "Inspection", detail: "Fabric, filling and any stains are checked before cleaning." },
      { step: "Pre-treatment", detail: "Spots and soiled areas are treated according to fabric type." },
      { step: "Cleaning", detail: "Cleaned using the method suited to the filling and weave." },
      { step: "Drying & finishing", detail: "Dried completely, fluffed, folded and packed." },
    ],
    suitable: ["Cotton", "Wool", "Polyester fill", "Microfibre", "Silk-blend covers"],
    frequency: "[RECOMMENDED FREQUENCY]",
    faqs: [
      {
        q: "Will the blanket lose its softness?",
        a: "The cleaning method is chosen for the filling and weave, so loft and softness are preserved as far as the fabric allows.",
      },
      ...commonFaq,
    ],
  },
  {
    slug: "curtains",
    title: "Curtain Cleaning",
    category: "Home Fabric Care",
    icon: "Blinds",
    summary: "Careful cleaning for long, heavy and delicate curtains without distorting drape or size.",
    intro:
      "Curtains collect dust and airborne particles continuously. We clean them with attention to shrinkage, lining and drape so they hang correctly when rehung.",
    whyNeeded: [
      "Curtains act as a filter for household dust every day.",
      "Wrong washing methods shrink fabric and warp pleats.",
      "Linings and blackout backings need specific handling.",
    ],
    handled: ["Sheer curtains", "Blackout curtains", "Lined drapes", "Door curtains", "Valances and tiebacks"],
    process: [
      { step: "Assessment", detail: "Fabric, lining and hardware are checked." },
      { step: "Dusting", detail: "Loose dust is removed before wet or dry treatment." },
      { step: "Cleaning", detail: "Cleaned by the method appropriate to the fabric and lining." },
      { step: "Pressing", detail: "Pressed and folded so pleats fall correctly on rehanging." },
    ],
    suitable: ["Cotton", "Polyester", "Velvet", "Linen", "Sheer nets"],
    frequency: "[RECOMMENDED FREQUENCY]",
    faqs: [
      { q: "Do you handle rings and hooks?", a: "Hardware is removed before cleaning where required and returned with your curtains." },
      ...commonFaq,
    ],
  },
  {
    slug: "carpets",
    title: "Carpet Cleaning",
    category: "Home Fabric Care",
    icon: "Rows3",
    summary: "Deep cleaning for rugs and carpets, with controlled drying to protect backing and pile.",
    intro:
      "Carpets trap fine dust deep in the pile where vacuuming cannot reach. Our process lifts embedded soil and restores pile appearance while keeping moisture under control.",
    whyNeeded: [
      "Foot traffic grinds dust into the pile over time.",
      "Spills left untreated set into permanent marks.",
      "Improper drying damages backing and causes odour.",
    ],
    handled: ["Room carpets", "Area rugs", "Runners", "Door mats", "Machine-made and tufted rugs"],
    process: [
      { step: "Dry soil removal", detail: "Loose grit and dust are extracted first." },
      { step: "Spot treatment", detail: "Marks are treated based on stain type and fibre." },
      { step: "Deep clean", detail: "Pile is cleaned and rinsed to lift embedded soil." },
      { step: "Controlled drying", detail: "Dried thoroughly and pile is groomed before return." },
    ],
    suitable: ["Wool", "Nylon", "Polypropylene", "Cotton dhurries", "Mixed-fibre rugs"],
    frequency: "[RECOMMENDED FREQUENCY]",
    faqs: [
      { q: "Can old stains be removed completely?", a: "Older stains may lighten rather than disappear. We assess honestly before treatment." },
      ...commonFaq,
    ],
  },
  {
    slug: "home-linen",
    title: "Home Linen Care",
    category: "Home Fabric Care",
    icon: "Layers",
    summary: "Bed sheets, pillow covers, towels and table linen cleaned, pressed and neatly folded.",
    intro:
      "Everyday household linen needs consistent, hygienic cleaning and a crisp finish. We handle it in volume without losing attention to fabric, colour and finishing.",
    whyNeeded: [
      "Linen is in direct contact with skin and needs hygienic care.",
      "Colours fade quickly when washed incorrectly.",
      "Neat pressing and folding save household time.",
    ],
    handled: ["Bed sheets", "Pillow and cushion covers", "Towels", "Table linen", "Napkins and runners"],
    process: [
      { step: "Sorting", detail: "Sorted by fabric, colour and soil level." },
      { step: "Cleaning", detail: "Washed at settings suited to the fabric." },
      { step: "Finishing", detail: "Pressed or steam finished as required." },
      { step: "Packing", detail: "Folded and packed set-wise for easy storage." },
    ],
    suitable: ["Cotton", "Linen", "Terry towelling", "Poly-cotton blends", "Printed fabrics"],
    frequency: "[RECOMMENDED FREQUENCY]",
    faqs: commonFaq,
  },
  {
    slug: "dry-cleaning",
    title: "Dry Cleaning",
    category: "Dry Cleaning",
    icon: "Sparkles",
    summary: "Professional dry cleaning for formal wear, delicate garments and structured clothing.",
    intro:
      "Dry cleaning protects garments that water washing would damage — structured jackets, embellished wear and delicate weaves. Each garment is inspected, treated and finished individually.",
    whyNeeded: [
      "Water washing distorts structured and lined garments.",
      "Embellishment and embroidery need controlled handling.",
      "Professional finishing restores shape and appearance.",
    ],
    handled: ["Suits and blazers", "Kurtas and sherwanis", "Gowns and dresses", "Woollens", "Embellished outfits"],
    process: [
      { step: "Garment check", detail: "Fabric, trims and care label are examined." },
      { step: "Spot treatment", detail: "Stains are treated before the main cycle." },
      { step: "Dry clean cycle", detail: "Cleaned in the appropriate cycle for the fabric." },
      { step: "Press & pack", detail: "Finished, pressed and packed on hangers or folded." },
    ],
    suitable: ["Silk", "Wool", "Rayon", "Velvet", "Embroidered fabrics"],
    frequency: "[RECOMMENDED FREQUENCY]",
    faqs: commonFaq,
  },
  {
    slug: "sarees",
    title: "Saree Care",
    category: "Dry Cleaning",
    icon: "Shirt",
    summary: "Specialised cleaning and finishing for silk, cotton and heavy-work sarees.",
    intro:
      "Sarees are often the most valuable garments in a wardrobe. We handle each one individually — zari, embroidery and delicate weaves are treated with the care they require.",
    whyNeeded: [
      "Zari and embroidery tarnish or loosen with rough handling.",
      "Folds and storage marks set permanently over time.",
      "Silk needs a specific cleaning and finishing method.",
    ],
    handled: ["Silk sarees", "Cotton sarees", "Heavy-work and bridal sarees", "Designer sarees", "Blouses and falls"],
    process: [
      { step: "Individual inspection", detail: "Weave, work and any damage are recorded." },
      { step: "Gentle treatment", detail: "Stains treated with methods safe for the weave." },
      { step: "Cleaning", detail: "Cleaned individually, never bulk processed." },
      { step: "Finishing", detail: "Finished and folded to protect the drape and work." },
    ],
    suitable: ["Kanchipuram silk", "Soft silk", "Cotton", "Georgette", "Organza"],
    frequency: "[RECOMMENDED FREQUENCY]",
    faqs: [
      { q: "Are sarees cleaned individually?", a: "Yes. Sarees are processed individually to protect the weave and any zari or embroidery." },
      ...commonFaq,
    ],
  },
  {
    slug: "shoes",
    title: "Shoe Cleaning",
    category: "Specialised Care",
    icon: "Footprints",
    summary: "Cleaning and refreshing for sneakers, leather and formal footwear.",
    intro:
      "Footwear needs material-specific cleaning. We clean uppers, midsoles and laces separately and dry footwear in a way that protects shape and adhesives.",
    whyNeeded: [
      "Household cleaning damages leather and adhesives.",
      "Soiling and odour build up inside footwear.",
      "Correct drying keeps shape intact.",
    ],
    handled: ["Sneakers", "Leather shoes", "Formal footwear", "Canvas shoes", "Sandals"],
    process: [
      { step: "Assessment", detail: "Material and construction are checked." },
      { step: "Deep clean", detail: "Uppers, soles and laces are cleaned separately." },
      { step: "Deodorising", detail: "Interiors are treated and freshened." },
      { step: "Finishing", detail: "Shaped, dried and conditioned where suitable." },
    ],
    suitable: ["Leather", "Suede (assessed case by case)", "Canvas", "Mesh", "Synthetic uppers"],
    frequency: "[RECOMMENDED FREQUENCY]",
    faqs: commonFaq,
  },
  {
    slug: "bags",
    title: "Bag Cleaning",
    category: "Specialised Care",
    icon: "Briefcase",
    summary: "Careful cleaning for handbags, backpacks and travel luggage.",
    intro:
      "Bags collect surface grime, handle marks and interior dust. We clean exterior and interior surfaces with methods matched to the material and hardware.",
    whyNeeded: [
      "Handles and corners collect the most soiling.",
      "Interiors accumulate dust and spill residue.",
      "Hardware and linings need protective handling.",
    ],
    handled: ["Handbags", "Backpacks", "Laptop bags", "Travel luggage", "Fabric totes"],
    process: [
      { step: "Material check", detail: "Leather, fabric and hardware are assessed." },
      { step: "Surface clean", detail: "Exterior soiling and handle marks are treated." },
      { step: "Interior clean", detail: "Linings are cleaned and freshened." },
      { step: "Finishing", detail: "Dried, shaped and conditioned where suitable." },
    ],
    suitable: ["Leather", "Canvas", "Nylon", "Polyester", "PU materials"],
    frequency: "[RECOMMENDED FREQUENCY]",
    faqs: commonFaq,
  },
  {
    slug: "wash-fold",
    title: "Wash & Fold",
    category: "Laundry",
    icon: "Shirt",
    summary: "Everyday laundry washed, dried and neatly folded, sorted by fabric and colour.",
    intro:
      "A straightforward everyday service for regular clothing. Items are sorted, washed at suitable settings, dried and folded ready to put away.",
    whyNeeded: [
      "Regular laundry takes significant household time.",
      "Correct sorting protects colours and fabrics.",
      "Consistent folding keeps wardrobes organised.",
    ],
    handled: ["Daily wear", "T-shirts and casuals", "Innerwear", "Kids' clothing", "Nightwear"],
    process: [
      { step: "Sorting", detail: "Separated by colour, fabric and soil level." },
      { step: "Wash", detail: "Washed at fabric-appropriate temperature and cycle." },
      { step: "Dry", detail: "Dried thoroughly with fabric-safe settings." },
      { step: "Fold & pack", detail: "Folded neatly and packed for return." },
    ],
    suitable: ["Cotton", "Poly-cotton", "Denim", "Knits", "Everyday synthetics"],
    frequency: "[RECOMMENDED FREQUENCY]",
    faqs: commonFaq,
  },
  {
    slug: "wash-iron",
    title: "Wash & Iron",
    category: "Laundry",
    icon: "Wind",
    summary: "Washing with a crisp pressed finish for shirts, trousers and daily formal wear.",
    intro:
      "For clothing that needs to look sharp every day. Garments are washed, then pressed individually for a clean, crisp finish.",
    whyNeeded: [
      "Formal and office wear needs a consistent pressed finish.",
      "Home ironing is time-consuming and uneven.",
      "Proper pressing extends the neat life of a garment.",
    ],
    handled: ["Shirts", "Trousers", "Kurtas", "Uniforms", "Formal daily wear"],
    process: [
      { step: "Sorting", detail: "Separated by fabric and finishing requirement." },
      { step: "Wash", detail: "Washed at settings suited to the garment." },
      { step: "Press", detail: "Individually pressed with controlled heat." },
      { step: "Hang or fold", detail: "Returned on hangers or folded as preferred." },
    ],
    suitable: ["Cotton", "Linen", "Poly-blends", "Formal shirting", "Uniform fabrics"],
    frequency: "[RECOMMENDED FREQUENCY]",
    faqs: commonFaq,
  },
  {
    slug: "steam-ironing",
    title: "Steam Ironing",
    category: "Laundry",
    icon: "Flame",
    summary: "Press-only service with professional steam finishing for already-clean clothes.",
    intro:
      "A finishing-only service for garments that are already clean. Steam relaxes creases without the shine or scorch risk of dry heat.",
    whyNeeded: [
      "Stored clothing develops deep fold creases.",
      "Steam is safer than dry heat on delicate fabrics.",
      "Event and occasion wear needs a crisp final finish.",
    ],
    handled: ["Shirts and trousers", "Sarees", "Kurtas", "Dresses", "Occasion wear"],
    process: [
      { step: "Fabric check", detail: "Heat tolerance is confirmed for each item." },
      { step: "Steam finishing", detail: "Creases relaxed with controlled steam." },
      { step: "Detail press", detail: "Collars, cuffs and pleats finished by hand." },
      { step: "Pack", detail: "Hung or folded to hold the finish." },
    ],
    suitable: ["Cotton", "Silk", "Chiffon", "Georgette", "Wool blends"],
    frequency: "[RECOMMENDED FREQUENCY]",
    faqs: commonFaq,
  },
  {
    slug: "stain-removal",
    title: "Stain Removal",
    category: "Specialised Care",
    icon: "Droplets",
    summary: "Targeted treatment for food, oil, ink and everyday stains, assessed before treatment.",
    intro:
      "Different stains need different chemistry. We identify the stain and fabric first, then use the least aggressive treatment that will work — and tell you honestly what to expect.",
    whyNeeded: [
      "Wrong home remedies often set stains permanently.",
      "Fabric type limits which treatments are safe.",
      "Early professional treatment improves results.",
    ],
    handled: ["Food and beverage marks", "Oil and grease", "Ink", "Sweat and collar marks", "Mud and outdoor soiling"],
    process: [
      { step: "Identification", detail: "Stain type and fabric are identified." },
      { step: "Test", detail: "Treatment is tested on a discreet area." },
      { step: "Treatment", detail: "Targeted treatment applied in stages." },
      { step: "Review", detail: "Result reviewed and the item finished." },
    ],
    suitable: ["Cotton", "Silk", "Wool", "Synthetics", "Blended fabrics"],
    frequency: "As required — the sooner the better",
    faqs: [
      { q: "Is removal guaranteed?", a: "No responsible laundry can guarantee removal. Older and set stains may lighten only, and we say so upfront." },
      ...commonFaq,
    ],
  },
];

export const serviceCategories = [
  "Laundry",
  "Dry Cleaning",
  "Home Fabric Care",
  "Specialised Care",
] as const;

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function relatedServices(slug: string) {
  const current = getService(slug);
  if (!current) return services.slice(0, 3);
  const same = services.filter((s) => s.category === current.category && s.slug !== slug);
  const others = services.filter((s) => s.category !== current.category);
  return [...same, ...others].slice(0, 3);
}
