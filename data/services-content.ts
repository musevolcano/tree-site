export interface ServiceContent {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  body: string;
  process: { step: string; detail: string }[];
  faqs: { q: string; a: string }[];
  relatedSlugs: string[];
}

export const servicesContent: ServiceContent[] = [
  {
    slug: "tree-removal",
    name: "Tree Removal & Trimming",
    tagline: "Safe removal and expert trimming for any tree, any size, anywhere in NE Ohio.",
    description:
      "Licensed, insured tree removal and crown trimming serving Greater Cleveland and Northeast Ohio. Free on-site estimates. Same-day response for hazard trees.",
    body: `Tree removal is the most requested service we handle — and the one that carries the most risk when it's done wrong. Every removal we do starts with a proper assessment: we look at the lean, the root system, the proximity to structures, the access, and the wood condition before we make a single cut.

For trimming, we follow ISA pruning standards — removing dead and crossing branches, improving canopy structure, and reducing wind resistance without over-pruning or topping, which weakens trees long-term.

We serve Greater Cleveland, Parma, Strongsville, Berea, Westlake, North Olmsted, Olmsted Falls, Medina, Brunswick, Avon, Lakewood, and all of Cuyahoga, Lorain, and Medina counties.`,
    process: [
      { step: "Free on-site estimate", detail: "We walk the property, assess the tree, and give you a flat written price. No hourly rates." },
      { step: "Permit check", detail: "We flag any local permit requirements before work starts — some Cleveland-area municipalities require permits for large trees." },
      { step: "Removal", detail: "Top-down sectional removal with proper rigging to protect your structure and lawn." },
      { step: "Full cleanup and haul", detail: "All logs, brush, and chips removed. We leave zero trace." },
    ],
    faqs: [
      { q: "How much does tree removal cost in Cleveland?", a: "Small trees (under 30 ft): $200–$450. Medium trees (30–60 ft): $450–$900. Large trees (60+ ft): $900–$1,500+. Call for a free on-site estimate on your specific tree." },
      { q: "Do I need a permit to remove a tree in NE Ohio?", a: "It depends on your municipality. Some suburbs require permits for trees over a certain size. We check local requirements during your estimate." },
      { q: "Does tree trimming hurt the tree?", a: "Proper trimming improves tree health. Topping — cutting the main leader or large branches back to stubs — permanently damages the tree and is not something we do." },
      { q: "How long does tree removal take?", a: "Most residential removals take 2–6 hours. Large trees near structures can take a full day." },
    ],
    relatedSlugs: ["stump-grinding", "haul-away", "storm-damage"],
  },
  {
    slug: "tree-planting",
    name: "Tree Planting",
    tagline: "Professional tree selection and planting for NE Ohio's climate, soil, and your long-term goals.",
    description:
      "Expert tree planting across Greater Cleveland and Northeast Ohio. We select the right species for your soil, space, and climate — then plant it correctly so it thrives.",
    body: `Most trees fail not because of the species chosen, but because of how they were planted. Planted too deep, in compacted soil, in the wrong location, or without proper establishment watering — and a healthy young tree stalls or declines within 3 years.

We plant trees that last. That starts with honest species selection: matching the right tree to your soil type, sun exposure, space at maturity, and NE Ohio's climate. We work with balled-and-burlapped and container-grown stock, and we prep the planting site properly — not just dig a hole and drop the tree in.

Common planting scenarios we handle: replacing a removed tree, adding shade to a sunny yard, privacy screening along property lines, and new construction landscaping where the site has been cleared and compacted.`,
    process: [
      { step: "Site and soil assessment", detail: "We evaluate sun exposure, drainage, soil condition, and available space at maturity before recommending species." },
      { step: "Species selection", detail: "We recommend trees suited to NE Ohio's climate and your specific site. No guesswork." },
      { step: "Proper planting", detail: "Root flare planted at or above grade, appropriate soil amendment, proper staking if needed." },
      { step: "Establishment guidance", detail: "We give you a watering and care plan for the first two growing seasons — the critical establishment window." },
    ],
    faqs: [
      { q: "What's the best tree to plant in Northeast Ohio?", a: "White oak, sugar maple, red maple, American linden, and Kentucky coffeetree are all excellent choices for NE Ohio. Species selection depends on your specific site conditions." },
      { q: "When is the best time to plant a tree in Ohio?", a: "Early spring (before bud break) and fall (after leaf drop) are ideal. Trees planted in these windows have time to establish roots before heat or cold stress hits." },
      { q: "How long until a newly planted tree is established?", a: "Most trees need 1–3 years to fully establish. Proper watering during this window is the single biggest factor in success." },
      { q: "Can you plant near a septic system or underground utilities?", a: "Species selection matters significantly near utilities and septic systems. Certain trees with aggressive root systems should be avoided. We'll advise during the site assessment." },
    ],
    relatedSlugs: ["consulting", "tree-removal", "tree-treatment"],
  },
  {
    slug: "tree-treatment",
    name: "Tree Treatment",
    tagline: "Disease diagnosis, Emerald Ash Borer treatment, and health programs for NE Ohio trees.",
    description:
      "Professional tree health treatment across Greater Cleveland — Emerald Ash Borer treatment, disease diagnosis, deep root fertilization, and targeted pest management.",
    body: `Northeast Ohio has a specific set of tree health challenges: Emerald Ash Borer, Oak Wilt, Dutch Elm Disease, various fungal infections, and soil compaction issues common to suburban and urban properties. Treatment works when it's applied correctly and at the right stage of decline.

We handle EAB treatment most frequently — it remains a serious threat across Cuyahoga, Lorain, Medina, and Summit counties. Treatment is realistic for ash trees with less than 50% canopy loss; beyond that, removal is typically the better call. We'll give you an honest assessment rather than sell you treatment on a tree that can't be saved.

For other diseases and deficiencies, we start with a proper diagnosis before recommending any treatment program. The wrong treatment wastes money and time.`,
    process: [
      { step: "On-site diagnosis", detail: "We identify the specific issue — pest, disease, nutritional deficiency, or environmental stress — before recommending any treatment." },
      { step: "Treatment recommendation", detail: "We recommend the appropriate treatment and are honest about whether treatment is realistic or removal is the better option." },
      { step: "Application", detail: "Trunk injections, soil drenches, or foliar applications depending on the issue and tree size." },
      { step: "Follow-up schedule", detail: "Most treatment programs require follow-up applications. We provide a clear schedule and what to watch for." },
    ],
    faqs: [
      { q: "How do I know if my ash tree has Emerald Ash Borer?", a: "Look for S-shaped larval galleries under the bark, D-shaped exit holes on the trunk and branches, canopy thinning from the top down, and heavy woodpecker activity. Call us for a free assessment." },
      { q: "Is EAB treatment covered by homeowner's insurance?", a: "Generally no — pest damage is typically treated as a maintenance issue rather than a covered peril." },
      { q: "Can a tree with Dutch Elm Disease be saved?", a: "Sometimes, if caught in the early stages. Dutch Elm Disease is a vascular wilt — once it spreads through the vascular system, it's usually fatal. Early intervention with fungicide injection offers the best chance." },
      { q: "What is deep root fertilization?", a: "High-pressure injection of liquid fertilizer directly into the root zone, bypassing compacted surface soil. Effective for trees in urban or suburban settings where root health is compromised." },
    ],
    relatedSlugs: ["consulting", "tree-removal", "tree-planting"],
  },
  {
    slug: "stump-grinding",
    name: "Stump Grinding",
    tagline: "Complete stump removal below grade — no eyesore, no tripping hazard, no regrowth.",
    description:
      "Professional stump grinding across NE Ohio. We grind stumps to 6–12 inches below grade, haul all chips, and leave your yard ready to seed or sod.",
    body: `A stump left after tree removal is more than an eyesore — it's a tripping hazard, a lawnmower obstacle, and in some species, a regrowth problem. Stump grinding resolves all of it.

We grind stumps to 6–12 inches below grade using professional-grade equipment. What's left is a pit of wood chips that can be filled with topsoil and seeded, or left to settle and mulch naturally. The root system stays in the ground and decomposes over several years without causing structural problems.

For most NE Ohio homeowners, grinding is the right call. Full stump removal — extracting the root ball entirely — is only necessary when you're building over the area or dealing with an aggressively suckering species like cottonwood or black locust.`,
    process: [
      { step: "Utility and irrigation check", detail: "We verify no utilities, irrigation lines, or sprinkler heads are in the grinding path before we start." },
      { step: "Grinding", detail: "Rotating cutting wheel works across the stump face in progressive passes down to 6–12 inches below grade." },
      { step: "Chip handling", detail: "Chips can be left in place as mulch, spread in your yard, or hauled completely — your choice." },
      { step: "Site ready for seeding", detail: "Fill the pit with topsoil when you're ready — it'll be ready to seed or sod within a week." },
    ],
    faqs: [
      { q: "How much does stump grinding cost in Cleveland?", a: "$100–$300 for a single stump depending on diameter. Multiple stumps on the same property typically get a lower per-stump rate." },
      { q: "Will the stump grow back after grinding?", a: "For most species, no. Oak, maple, and ash don't regrow from ground-down stumps. Some species — cottonwood, black locust, some poplars — can send up suckers. Tell us the species and we'll advise." },
      { q: "How deep does grinding go?", a: "Standard depth is 6–12 inches below grade. We can go deeper on request for specific applications like under-slab construction." },
      { q: "Can I plant grass right away?", a: "Fill with topsoil, then seed. The wood chips below temporarily compete for nitrogen — use a starter fertilizer when seeding for best results." },
    ],
    relatedSlugs: ["tree-removal", "haul-away", "consulting"],
  },
  {
    slug: "storm-damage",
    name: "Storm Damage Response — 24/7",
    tagline: "24/7 emergency tree removal across NE Ohio. We answer when it matters most.",
    description:
      "Emergency storm damage response 24 hours a day, 7 days a week across Greater Cleveland and NE Ohio. Tree on your house, car, or blocking access — call 216-551-6445 now.",
    body: `Northeast Ohio weather doesn't keep business hours. Ice storms, high winds, heavy wet snow — we get all of it, and when a tree comes down on your property, you need someone who answers the phone at 2am and knows what they're doing.

We handle the full range of storm damage scenarios: tree through a roof, tree on a car, fallen tree blocking a driveway, hanging limbs threatening a structure, and large-scale storm cleanup across a property. We coordinate with insurance adjusters, provide written documentation for claims, and do the job safely — not fast and sloppy.

A tree on a structure is not a standard removal. The tree is under load. Removing it wrong sends hundreds of pounds of wood further into your home. We work top-down in controlled sections, using rigging to manage the load at every cut.`,
    process: [
      { step: "24/7 response", detail: "Call 216-551-6445 any time. We prioritize emergencies — tree on structure, utility lines down, blocked access." },
      { step: "Scene assessment", detail: "We assess the tree position, load, utility line proximity, and structural damage before any cuts." },
      { step: "Controlled removal", detail: "Top-down sectional removal with rigging for trees on structures. No guesswork cuts." },
      { step: "Insurance documentation", detail: "We provide photos, written estimates, and coordinate with your adjuster to support your claim." },
    ],
    faqs: [
      { q: "Does homeowner's insurance cover storm tree damage in Ohio?", a: "If the tree damaged a covered structure, most policies cover removal and repair minus your deductible. A tree that fell in the yard without hitting anything typically isn't covered. We help document your claim either way." },
      { q: "My neighbor's tree fell on my property — who pays?", a: "Your homeowner's insurance covers damage to your property, regardless of where the tree originated. Your neighbor is only liable if you can prove they knew the tree was hazardous beforehand." },
      { q: "Is a hanging limb an emergency?", a: "A hanging or partially attached large limb over a structure, vehicle, or high-traffic area is a hazard. Call us — we'll assess it and advise whether it needs immediate attention." },
      { q: "How quickly can you respond?", a: "For true emergencies — tree through a roof, blocked emergency access, live utility lines involved — we aim to be on-site within hours anywhere in Greater Cleveland and NE Ohio." },
    ],
    relatedSlugs: ["tree-removal", "consulting", "haul-away"],
  },
  {
    slug: "demolition",
    name: "Demolition",
    tagline: "Residential demolition services across NE Ohio — garages, sheds, structures, and site clearing.",
    description:
      "Professional residential demolition in Greater Cleveland and NE Ohio. Garage demolition, shed removal, structure teardown, and debris hauling. Licensed and insured.",
    body: `Big Creek handles residential demolition as a natural extension of our site work — garages, sheds, old barns, accessory structures, and anything else that needs to come down before new construction or landscaping can begin.

We bring the same approach to demolition as we do to tree work: assess before we act, protect what's staying, and leave the site completely clean. Every demolition job includes full debris hauling — we don't leave you with a pile of lumber and a problem.

Common jobs: attached and detached garage teardown for new construction or ADU projects, old shed removal, barn demolition, concrete slab removal, and clearing legacy structures on properties being developed or significantly renovated.`,
    process: [
      { step: "Utility disconnect verification", detail: "We confirm all utilities to the structure are properly disconnected before demolition begins." },
      { step: "Structural assessment", detail: "We plan the takedown sequence to avoid impact on adjacent structures, landscaping, and the property." },
      { step: "Demolition", detail: "Systematic teardown using appropriate equipment for the structure size and site conditions." },
      { step: "Complete haul-away", detail: "All debris, concrete, lumber, and materials removed and properly disposed of. Site left clean and graded." },
    ],
    faqs: [
      { q: "Do I need a permit to demolish a garage in Ohio?", a: "Most municipalities require a demolition permit. Requirements vary by city and structure size. We help identify what's needed during the estimate." },
      { q: "Can you demolish a structure attached to my house?", a: "Yes, but attached structures require more careful planning to avoid impacting the main structure. We assess the connection points and plan accordingly." },
      { q: "How long does garage demolition take?", a: "A standard single-car garage takes one day including cleanup. Larger structures or those with complex debris (asbestos siding, etc.) may take longer." },
      { q: "Do you haul away all the debris?", a: "Yes — full haul-away is included in every demolition job we do. Nothing left on-site." },
    ],
    relatedSlugs: ["land-clearing", "haul-away", "stump-grinding"],
  },
  {
    slug: "land-clearing",
    name: "Land Clearing",
    tagline: "Full-lot clearing for development, farming, and landscaping projects across NE Ohio.",
    description:
      "Professional land clearing in Greater Cleveland and Northeast Ohio. Full lot clearing including trees, brush, stumps, and debris for residential development, farming, and landscaping.",
    body: `Land clearing is high-volume site work — clearing an overgrown lot, preparing land for construction, opening up a field that's gone to brush, or cleaning out a fence line that's been swallowed by growth over the years.

We handle the full scope: tree removal, brush clearing, stump grinding, debris hauling, and rough grading. What you get at the end is a clear, workable site ready for the next phase of your project.

We work with residential property owners, developers, real estate investors, farmers, and HOAs across Cuyahoga, Lorain, Medina, Summit, and surrounding counties. Whether it's a quarter-acre backyard or a multi-acre development site, we have the equipment and crew to handle it.`,
    process: [
      { step: "Site walkthrough and quote", detail: "We assess the density of growth, tree sizes, stump count, and site access to give you a flat price for the scope." },
      { step: "Tree removal and felling", detail: "All trees within the clearing footprint removed, processed, and staged for hauling." },
      { step: "Brush and debris clearing", detail: "All brush, undergrowth, and slash cleared from the site." },
      { step: "Stump grinding and haul-out", detail: "Stumps ground to below grade. All chips, debris, and material hauled completely off-site." },
    ],
    faqs: [
      { q: "How much does land clearing cost in NE Ohio?", a: "Land clearing is priced by the acre and complexity — density of growth, tree sizes, access, and terrain all factor in. Call for a site visit and flat quote." },
      { q: "Do you leave the wood or haul it?", a: "We haul everything off-site. No log piles, no brush piles, no chip mountains left on your property." },
      { q: "Can you clear land in winter?", a: "Yes — winter is often ideal for land clearing in Ohio. Frozen ground handles equipment better, and dormant trees are lighter and easier to work." },
      { q: "Do you handle permits for land clearing?", a: "Permit requirements vary by municipality and project scope. We identify what's needed during the estimate and can advise on the process." },
    ],
    relatedSlugs: ["demolition", "stump-grinding", "haul-away"],
  },
  {
    slug: "haul-away",
    name: "Haul Away",
    tagline: "Complete debris, log, and brush removal from your property. We leave zero trace.",
    description:
      "Full haul-away service across NE Ohio — logs, brush, storm debris, construction waste, and yard cleanup. Serving Greater Cleveland and surrounding counties.",
    body: `Whether it's the aftermath of a storm, a DIY tree job that left you with more wood than you bargained for, or a property cleanout that's accumulated debris over years — we haul it.

Haul-away is available as a standalone service or as an add-on to any removal job. We take logs, brush, chips, stumps, storm debris, fence material, and general yard waste. If you're not sure whether we'll take it, call and describe it — we'll tell you straight.

We serve Greater Cleveland, Parma, Strongsville, Berea, Westlake, Avon, Medina, Brunswick, and all surrounding NE Ohio communities.`,
    process: [
      { step: "Assessment and quote", detail: "We assess the volume and type of material, then give you a flat price. No hourly estimates." },
      { step: "Loading", detail: "Our crew loads everything — you don't move a thing." },
      { step: "Haul-out", detail: "All material removed from the property in one trip where possible." },
      { step: "Site left clean", detail: "We rake and blow the area after loading. No residue, no debris trail." },
    ],
    faqs: [
      { q: "Can you haul away logs I already cut?", a: "Yes — cut logs, brush piles, chips, and stumps are all standard. Tell us the approximate volume when you call." },
      { q: "Do you take construction debris?", a: "We take wood-based construction debris — dimensional lumber, plywood, fencing. We don't haul concrete, metal, or hazardous materials." },
      { q: "How much does haul-away cost?", a: "Pricing depends on volume and material type. Call for a quote — we'll give you a flat price after a quick description or site look." },
      { q: "Is haul-away included when you do a tree removal?", a: "Yes — every Big Creek removal includes full cleanup and haul-away of all debris. Nothing left on your property." },
    ],
    relatedSlugs: ["tree-removal", "land-clearing", "stump-grinding"],
  },
  {
    slug: "consulting",
    name: "Tree Consulting",
    tagline: "Expert arborist assessments for property buyers, insurance claims, HOA disputes, and risk evaluation.",
    description:
      "Professional tree consulting across NE Ohio — pre-purchase assessments, hazard evaluations, insurance documentation, and HOA dispute support from Big Creek Tree Service.",
    body: `Not every tree question ends in a removal quote. Sometimes you need an honest expert opinion and a written report — for a real estate transaction, an insurance claim, an HOA dispute, or a liability assessment on a tree that's been making you nervous.

We provide consulting assessments that give you documented, defensible answers. We've worked with homebuyers, real estate investors, property managers, insurance adjusters, and attorneys across NE Ohio who needed accurate, professional tree assessments they could rely on.

Common consulting scenarios: pre-purchase assessment of mature trees on a property you're buying, hazard evaluation of a tree in dispute with a neighbor or HOA, documentation for an insurance claim after storm damage, and risk assessment of trees near structures, power lines, or high-traffic areas.`,
    process: [
      { step: "On-site assessment", detail: "We inspect the tree or trees in question — structure, health, root system, proximity to targets, and risk factors." },
      { step: "Written report", detail: "We provide a written assessment documenting our findings, conclusions, and recommendations." },
      { step: "Insurance and legal support", detail: "We coordinate with adjusters and can provide documentation suitable for insurance claims and legal proceedings." },
      { step: "Recommendations", detail: "Clear next steps — whether that's treatment, monitoring, removal, or no action required." },
    ],
    faqs: [
      { q: "Do you provide written reports for real estate transactions?", a: "Yes — we provide written assessments that document tree health, structural condition, and risk factors. Useful for buyers, sellers, and lenders." },
      { q: "Can you help with an HOA tree dispute?", a: "Yes. We provide documented professional assessments of trees in dispute — condition, hazard level, and recommended action — that give HOAs and homeowners a professional basis for decisions." },
      { q: "Will you work with my insurance adjuster?", a: "Yes. We coordinate directly with adjusters, provide written estimates and documentation, and can attend on-site inspections." },
      { q: "How much does a consulting assessment cost?", a: "Consulting fees vary by scope — a single-tree hazard assessment is straightforward; a multi-property review is more involved. Call to discuss your specific situation and we'll give you a clear answer." },
    ],
    relatedSlugs: ["tree-removal", "tree-treatment", "storm-damage"],
  },
];

export function getServiceContent(slug: string): ServiceContent | null {
  return servicesContent.find((s) => s.slug === slug) ?? null;
}
