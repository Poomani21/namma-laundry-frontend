export type Article = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  body: { heading: string; text: string }[];
};

export const articles: Article[] = [
  {
    slug: "how-often-to-clean-blankets",
    title: "How Frequently Should Blankets Be Professionally Cleaned?",
    category: "Home Fabric Care",
    excerpt: "Blankets absorb dust and moisture through the season. Here is how to judge when yours needs professional cleaning.",
    readTime: "3 min read",
    body: [
      { heading: "Why frequency matters", text: "Blankets absorb body oils, dust and humidity every night. Because the filling is thick, that build-up sits deep inside where surface airing cannot reach." },
      { heading: "Signs it is time", text: "A flattened feel, a musty smell after storage, visible dulling of colour, or increased sneezing at night are all practical indicators." },
      { heading: "A workable routine", text: "Clean before storing at the end of the cold season and again before bringing the blanket back into use. In dusty or humid areas, add one cleaning mid-season." },
      { heading: "Between cleanings", text: "Air blankets in indirect sunlight, use a washable cover, and store them dry in a breathable bag rather than sealed plastic." },
    ],
  },
  {
    slug: "how-often-to-clean-curtains",
    title: "How Frequently Should Curtains Be Cleaned?",
    category: "Home Fabric Care",
    excerpt: "Curtains filter household dust every day. A simple schedule keeps fabric and drape in good condition.",
    readTime: "3 min read",
    body: [
      { heading: "Curtains work as dust filters", text: "Air moving through windows carries dust straight into curtain fabric. The build-up is gradual, so it is easy to overlook until the colour visibly dulls." },
      { heading: "A practical schedule", text: "Living room and kitchen curtains face the heaviest load, bedroom curtains less so. Homes on busy roads or near construction need shorter intervals." },
      { heading: "Protecting the drape", text: "Shrinkage and warped pleats come from incorrect washing. Lined and blackout curtains in particular need a method matched to the backing." },
      { heading: "In between", text: "Vacuum with an upholstery attachment on low suction and shake curtains out periodically." },
    ],
  },
  {
    slug: "carpet-cleaning-frequency",
    title: "Carpet Cleaning Frequency: A Practical Guide",
    category: "Home Fabric Care",
    excerpt: "Vacuuming handles the surface. Deep cleaning handles what has settled into the pile.",
    readTime: "3 min read",
    body: [
      { heading: "Surface vs deep soil", text: "Regular vacuuming removes loose grit, but fine dust migrates to the base of the pile where it abrades fibres each time you walk on it." },
      { heading: "What sets the interval", text: "Foot traffic, pets, children, footwear indoors and proximity to dusty roads all shorten the interval between deep cleans." },
      { heading: "Warning signs", text: "Traffic lanes that look darker than the rest, a pile that no longer springs back, or lingering odour after vacuuming." },
      { heading: "Care between cleans", text: "Vacuum high-traffic areas more often, blot spills immediately, and rotate loose rugs to even out wear." },
    ],
  },
  {
    slug: "upholstery-cleaning",
    title: "Upholstery Cleaning: What to Know Before You Book",
    category: "Home Fabric Care",
    excerpt: "Upholstery holds daily use in a way that is easy to miss until it shows.",
    readTime: "3 min read",
    body: [
      { heading: "Where soiling gathers", text: "Armrests, headrest areas and seat fronts collect skin oils and hand contact far faster than the rest of the piece." },
      { heading: "Fabric decides the method", text: "Cleaning codes and fibre type determine whether water-based or solvent-based cleaning is safe. Testing on a hidden area comes first." },
      { heading: "Realistic expectations", text: "Long-set marks may lighten rather than disappear entirely. An honest assessment before work begins avoids disappointment." },
      { heading: "Everyday upkeep", text: "Vacuum crevices weekly, rotate loose cushions and keep upholstery out of direct sunlight where possible." },
    ],
  },
  {
    slug: "monsoon-fabric-care",
    title: "Monsoon Fabric Care: Preventing Damp and Odour",
    category: "Seasonal Care",
    excerpt: "High humidity is the main enemy of stored fabric. A few habits make a large difference.",
    readTime: "3 min read",
    body: [
      { heading: "Humidity is the real problem", text: "Fabric absorbs moisture from the air. Once damp, natural fibres develop odour and mildew quickly, especially in closed cupboards." },
      { heading: "Dry completely", text: "Partially dried clothing is the most common cause of monsoon odour. Professional drying gives a controlled, complete result that home drying often cannot in the rains." },
      { heading: "Storage habits", text: "Leave gaps between hanging clothes, keep cupboards ventilated, and avoid sealed plastic covers for long periods." },
      { heading: "Act early on marks", text: "Rain splashes and mud dry into stubborn marks. Treating them soon after they happen improves results." },
    ],
  },
  {
    slug: "seasonal-cleaning",
    title: "Seasonal Cleaning: A Simple Home Fabric Calendar",
    category: "Seasonal Care",
    excerpt: "Spreading fabric care across the year keeps the workload light and results consistent.",
    readTime: "3 min read",
    body: [
      { heading: "Why seasonal timing works", text: "Grouping fabric care around seasonal changes means items get cleaned before storage rather than after months of settled soil." },
      { heading: "Before storage", text: "Always store clean. Body oils and invisible food residue attract pests and oxidise into yellow marks over months." },
      { heading: "Before use", text: "Items coming out of storage benefit from a refresh to remove storage odour and folding creases." },
      { heading: "Spread the load", text: "Alternate categories — bedding in one cycle, curtains in the next — instead of sending everything at once." },
    ],
  },
  {
    slug: "pet-households",
    title: "Fabric Care in Homes With Pets",
    category: "Fabric Care Tips",
    excerpt: "Hair, dander and occasional accidents call for a slightly different routine.",
    readTime: "3 min read",
    body: [
      { heading: "Hair and dander", text: "Pet hair weaves into fabric rather than sitting on it, and dander settles into carpets and upholstery where vacuuming reaches only partly." },
      { heading: "Accidents need speed", text: "Blot, do not rub, and avoid strong household chemicals which can set the mark or bleach the fibre. Professional treatment works best when the stain is fresh." },
      { heading: "Shorter intervals", text: "Pet households generally need deep cleaning of carpets, throws and pet bedding more frequently than others." },
      { heading: "Simple habits", text: "Use washable throws on favourite spots and keep a lint roller near the main seating." },
    ],
  },
  {
    slug: "homes-with-children",
    title: "Fabric Care in Homes With Children",
    category: "Fabric Care Tips",
    excerpt: "Frequent spills and sensitive skin shape what good fabric care looks like.",
    readTime: "3 min read",
    body: [
      { heading: "Frequent, gentle cleaning", text: "Children's clothing and bedding need frequent cleaning, but harsh processing shortens the life of soft cotton and knits." },
      { heading: "Common stains", text: "Food, ink, paint and grass each need a different approach. Identifying the stain matters more than scrubbing harder." },
      { heading: "Rinse quality", text: "Thorough rinsing matters for sensitive skin. Residue left in fabric is a common cause of irritation." },
      { heading: "Practical tips", text: "Treat spills the same day, keep a set of spare bedding, and separate heavily soiled play clothes from the rest." },
    ],
  },
  {
    slug: "fabric-care-tips",
    title: "Everyday Fabric Care Tips That Extend Garment Life",
    category: "Fabric Care Tips",
    excerpt: "Small habits at home protect what you have already spent money on.",
    readTime: "3 min read",
    body: [
      { heading: "Read the label once", text: "Care labels give temperature and method limits. Checking once when the garment is new avoids a permanent mistake later." },
      { heading: "Sort properly", text: "Separate by colour, fabric weight and soil level. Mixing heavy denim with light knits abrades the softer fabric." },
      { heading: "Do not overload", text: "Overloaded machines clean poorly and rinse worse. Clothes need room to move through water." },
      { heading: "Store thoughtfully", text: "Hang structured garments, fold knits, and keep everything dry and out of direct sunlight." },
    ],
  },
  {
    slug: "washing-vs-dry-cleaning",
    title: "Washing vs Dry Cleaning vs Specialised Cleaning",
    category: "Fabric Care Tips",
    excerpt: "Three different methods for three different problems — here is how to tell them apart.",
    readTime: "4 min read",
    body: [
      { heading: "Washing", text: "Water-based cleaning suits everyday cotton, knits and synthetics. It handles general soiling and water-soluble stains well." },
      { heading: "Dry cleaning", text: "A solvent-based process for structured, lined, delicate or embellished garments that water would shrink, distort or damage." },
      { heading: "Specialised cleaning", text: "Item-specific handling for carpets, shoes, bags, heavy-work sarees and difficult stains, where standard processes are unsuitable." },
      { heading: "How to choose", text: "Start with the care label, consider the construction of the item, and ask when unsure. Getting the method right the first time is far cheaper than repairing damage." },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
