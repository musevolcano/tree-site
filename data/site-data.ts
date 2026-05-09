export const businessInfo = {
  name: "Big Creek Tree Service",
  phone: "216-551-6445",
  phoneHref: "tel:2165516445",
  email: "joe@bigcreektreeservice.com",
  serviceArea: "Greater Cleveland, NE Ohio — 40-Mile Radius",
  facebook: "https://www.facebook.com/people/Big-Creek-Tree-Service/61568943713888/",
  address: "Northeast Ohio",
  googleReviews: "https://www.google.com/maps/search/Big+Creek+Tree+Service+Cleveland+Ohio",
};

export const services = [
  {
    name: "Tree Removal & Trimming",
    slug: "tree-removal",
    description:
      "Safe removal of hazardous or unwanted trees of any size, plus expert crown trimming and canopy shaping — all in one call.",
    imagePath: "/images/tree-removal.jpg",
    icon: "🌲",
  },
  {
    name: "Tree Planting",
    slug: "tree-planting",
    description:
      "Professional tree selection and planting for curb appeal, shade, and long-term property value. We plant for the next generation.",
    imagePath: "/images/tree-removal.jpg",
    icon: "🌱",
  },
  {
    name: "Tree Treatment",
    slug: "tree-treatment",
    description:
      "Disease diagnosis, fertilization, and health treatments that keep your trees thriving for decades to come.",
    imagePath: "/images/tree-treatment.jpg",
    icon: "💉",
  },
  {
    name: "Stump Grinding",
    slug: "stump-grinding",
    description:
      "Complete stump removal below grade — no eyesore, no tripping hazard, no regrowth. Yard ready to seed or sod.",
    imagePath: "/images/stump-grinding.jpg",
    icon: "⚙️",
  },
  {
    name: "Storm Damage 24/7",
    slug: "storm-damage",
    description:
      "24/7 emergency response for fallen trees, broken limbs, and storm cleanup across NE Ohio. We answer when it matters most.",
    imagePath: "/images/storm-damage-real.jpg",
    icon: "⛈️",
  },
  {
    name: "Demolition",
    slug: "demolition",
    description:
      "Structural and site demolition services to clear the way for new construction, additions, or property improvements.",
    imagePath: "/images/demolition.jpg",
    icon: "🏗️",
  },
  {
    name: "Land Clearing",
    slug: "land-clearing",
    description:
      "Full-lot clearing for development, farming, or landscaping projects. We handle brush, stumps, and debris from edge to edge.",
    imagePath: "/images/land-clearing.jpg",
    icon: "🚜",
  },
  {
    name: "Haul Away",
    slug: "haul-away",
    description:
      "All debris, logs, brush, and waste removed and hauled from your property. Leave zero trace — we handle it all.",
    imagePath: "/images/haul-away.jpg",
    icon: "🚛",
  },
  {
    name: "Consulting",
    slug: "consulting",
    description:
      "Expert arborist assessments for property buyers, insurance claims, HOA disputes, or tree risk evaluation.",
    imagePath: "/images/crew-bucket-truck.jpg",
    icon: "📋",
  },
];

export const testimonials = [
  {
    name: "Tony Bee",
    location: "Google Review · a month ago",
    rating: 5,
    text: "Amazing tree service in north east Ohio! My tree was down so they prioritized me and came out the same day and worked until the job was finished.",
  },
  {
    name: "Sebastian Halloway",
    location: "Google Review · recently",
    rating: 5,
    text: "They did an outstanding job demolishing my old garage. The haul-away was flawless, and the cleanup was incredible. Not a single nail was left in my yard!",
  },
  {
    name: "Acyuta KD",
    location: "Google Review · a month ago",
    rating: 5,
    text: "Great value in town! I got a few bids and they landed right where I needed to be for all my ongoing tree maintenance needs. And I have a lot!",
  },
  {
    name: "Joseph Bronczyk",
    location: "Google Review · 2 weeks ago",
    rating: 5,
    text: "Very good service — on time, courteous, patient, and cleaned up the job site completely.",
  },
  {
    name: "Bea",
    location: "Google Review · a month ago",
    rating: 5,
    text: "Highly recommended.",
  },
];

// Blog posts removed — content/blog/*.mdx is the single source of truth.
// Use getAllPosts() from @/lib/blog everywhere.
