import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import BlogPreview from "@/components/BlogPreview";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.bigcreektreeservice.com/#business",
      "name": "Big Creek Tree Service",
      "description": "Greater Cleveland's #1 tree and land service. Licensed and insured tree removal, stump grinding, land clearing, tree planting, storm damage response, and demolition serving NE Ohio.",
      "url": "https://www.bigcreektreeservice.com",
      "telephone": "+1-216-551-6445",
      "email": "joe@bigcreektreeservice.com",
      "priceRange": "$$",
      "image": "https://www.bigcreektreeservice.com/images/hero.jpg",
      "logo": "https://www.bigcreektreeservice.com/images/hero.jpg",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Cleveland",
        "addressRegion": "OH",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 41.4993,
        "longitude": -81.6944
      },
      "areaServed": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 41.4993,
          "longitude": -81.6944
        },
        "geoRadius": "64000"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
          "opens": "07:00",
          "closes": "19:00"
        }
      ],
      "sameAs": [
        "https://www.facebook.com/people/Big-Creek-Tree-Service/61568943713888/"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "5",
        "bestRating": "5"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Tree & Land Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tree Removal & Trimming", "description": "Safe removal of hazardous or unwanted trees of any size, plus expert crown trimming and canopy shaping." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Stump Grinding", "description": "Complete stump removal below grade — no eyesore, no regrowth. Yard ready to seed or sod." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Land Clearing", "description": "Full-lot clearing for development, farming, or landscaping projects." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Storm Damage Response", "description": "24/7 emergency response for fallen trees, broken limbs, and storm cleanup across NE Ohio." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tree Planting", "description": "Professional tree selection and planting for curb appeal, shade, and long-term property value." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tree Treatment", "description": "Disease diagnosis, fertilization, and health treatments including Emerald Ash Borer treatment." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Demolition", "description": "Structural and site demolition services to clear the way for new construction." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Haul Away", "description": "All debris, logs, brush, and waste removed and hauled from your property." } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tree Consulting", "description": "Expert arborist assessments for property buyers, insurance claims, HOA disputes, or tree risk evaluation." } }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.bigcreektreeservice.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does tree removal cost in Cleveland Ohio?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tree removal in Greater Cleveland typically costs $200–$450 for small trees, $450–$900 for medium trees (20–40 ft), and $800–$1,400 for large trees. Big Creek Tree Service offers free estimates — call 216-551-6445."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer 24/7 emergency tree removal in NE Ohio?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Big Creek Tree Service provides 24/7 emergency storm damage response across Greater Cleveland and Northeast Ohio, including fallen tree removal, limb clearing, and emergency tarping."
          }
        },
        {
          "@type": "Question",
          "name": "Are you licensed and insured for tree removal in Ohio?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Big Creek Tree Service is fully licensed and insured for all tree removal, land clearing, stump grinding, and demolition services in Northeast Ohio."
          }
        },
        {
          "@type": "Question",
          "name": "What areas do you serve near Cleveland?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We serve a 40-mile radius from Cleveland including Strongsville, Parma, Berea, Westlake, Lakewood, Medina, Brunswick, Avon, North Olmsted, Olmsted Falls, and all of Cuyahoga, Lorain, Medina, and Summit counties."
          }
        },
        {
          "@type": "Question",
          "name": "How do I get a free tree removal estimate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Call Big Creek Tree Service at 216-551-6445 or submit a quote request at bigcreektreeservice.com. We respond same-day and offer free on-site estimates across NE Ohio."
          }
        },
        {
          "@type": "Question",
          "name": "Do you handle Emerald Ash Borer treatment in Northeast Ohio?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Big Creek Tree Service offers Emerald Ash Borer (EAB) treatment programs across Cuyahoga, Summit, and Lorain counties. Early treatment is far less expensive than removal — call for a free assessment."
          }
        },
        { "@type": "Question", "name": "How much does stump grinding cost in Cleveland?", "acceptedAnswer": { "@type": "Answer", "text": "Stump grinding in Greater Cleveland typically costs $100–$300 depending on stump diameter and accessibility. Big Creek Tree Service offers stump grinding as a standalone service or add-on to any removal. Call 216-551-6445 for a free quote." } },
        { "@type": "Question", "name": "Do you offer land clearing services in NE Ohio?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Big Creek Tree Service provides full-lot land clearing for residential development, farming, and landscaping projects across Northeast Ohio. We handle brush, stumps, and debris removal from edge to edge." } },
        { "@type": "Question", "name": "Can you remove a tree that fell on my house?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — this is exactly the kind of emergency we handle 24/7. Big Creek Tree Service responds immediately to trees on homes, cars, and structures across Greater Cleveland. Call 216-551-6445 any time, day or night." } },
        { "@type": "Question", "name": "Do you offer tree service for HOAs and property managers in Ohio?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Big Creek Tree Service works with HOAs, property management companies, and commercial property owners across NE Ohio for regular maintenance, hazard removal, storm cleanup, and consulting assessments." } },
        { "@type": "Question", "name": "What is the best time of year to remove a tree in Ohio?", "acceptedAnswer": { "@type": "Answer", "text": "Tree removal in Ohio can be done year-round, but late fall through winter (November–March) is often ideal — trees are dormant, ground is firm, and crews have more availability. Summer removal is also common for emergency and hazard situations." } },
        { "@type": "Question", "name": "Do you offer tree trimming and crown reduction in Cleveland?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Big Creek Tree Service provides expert crown trimming, canopy shaping, deadwood removal, and crown reduction across Greater Cleveland. Proper trimming extends tree life and reduces storm hazard risk." } },
        { "@type": "Question", "name": "How long does tree removal take?", "acceptedAnswer": { "@type": "Answer", "text": "Most residential tree removals in NE Ohio take 2–6 hours depending on tree size, location, and complexity. Large trees or those near structures may take a full day. Big Creek provides a time estimate with every free quote." } },
        { "@type": "Question", "name": "Do you provide tree removal documentation for insurance claims in Ohio?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Big Creek Tree Service provides documentation, assessments, and consulting services for homeowners filing insurance claims after storm damage. We work with adjusters and can provide written estimates and reports." } },
        { "@type": "Question", "name": "Do you offer demolition services in Northeast Ohio?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Big Creek Tree Service provides structural and site demolition services for residential and commercial properties across NE Ohio, including garage demolition, shed removal, and site clearing for new construction." } },
        { "@type": "Question", "name": "How do I know if a tree is dangerous?", "acceptedAnswer": { "@type": "Answer", "text": "Signs of a dangerous tree include: significant lean toward a structure, large dead branches (widow makers), cracks in the trunk or major limbs, fungal growth at the base, heaving soil around roots, or more than 50% dead canopy. Call Big Creek for a free hazard assessment at 216-551-6445." } },
        { "@type": "Question", "name": "Do you offer tree planting services in Cleveland Ohio?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Big Creek Tree Service provides professional tree selection and planting across Greater Cleveland. We help homeowners and property managers choose the right species for NE Ohio's climate, soil conditions, and long-term goals." } },
        { "@type": "Question", "name": "Can you haul away brush, logs, and debris in NE Ohio?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Big Creek Tree Service provides full haul-away services — all debris, logs, brush, and waste removed and hauled from your property. We leave zero trace." } },
        { "@type": "Question", "name": "Do you serve Strongsville Ohio for tree removal?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Big Creek Tree Service provides full tree removal, trimming, stump grinding, and storm damage response in Strongsville, Ohio. Call 216-551-6445 for a free estimate." } },
        { "@type": "Question", "name": "Do you serve Medina Ohio for tree service?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Big Creek Tree Service covers all of Medina County including Medina, Brunswick, and Wadsworth. We offer the same full range of tree and land services with free estimates and same-day response." } },
        { "@type": "Question", "name": "Will my homeowner's insurance cover storm tree damage in Ohio?", "acceptedAnswer": { "@type": "Answer", "text": "Most Ohio homeowner's insurance policies cover removal of a tree that damaged a covered structure. Removal of a fallen tree that caused no structural damage is typically not covered. Big Creek can provide documentation to support your claim." } },
        { "@type": "Question", "name": "How soon can you respond to a storm damage call?", "acceptedAnswer": { "@type": "Answer", "text": "Big Creek Tree Service responds to storm damage calls 24/7. For emergency situations — tree on a home, blocked access, immediate safety risk — we aim to be on-site within hours. Call 216-551-6445 any time." } },
        { "@type": "Question", "name": "Do you offer consulting for property buyers in NE Ohio?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Big Creek Tree Service provides pre-purchase tree risk assessments for homebuyers and real estate investors across Northeast Ohio. We identify hazard trees, estimate removal costs, and provide written reports." } },
        { "@type": "Question", "name": "What tree diseases are common in Northeast Ohio?", "acceptedAnswer": { "@type": "Answer", "text": "The most common tree diseases and pests in NE Ohio include Emerald Ash Borer (devastating to ash trees), Oak Wilt, Dutch Elm Disease, and various fungal infections. Big Creek Tree Service offers diagnosis and treatment programs — call 216-551-6445 for a free assessment." } }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.bigcreektreeservice.com/#website",
      "url": "https://www.bigcreektreeservice.com",
      "name": "Big Creek Tree Service",
      "publisher": { "@id": "https://www.bigcreektreeservice.com/#business" }
    }
  ]
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <TopBar />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <About />
        <Testimonials />
        <BlogPreview />
        <Contact />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
