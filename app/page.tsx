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
        }
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
