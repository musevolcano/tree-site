# Big Creek Tree Service — Production Plan (v2)

**Status:** v2 of live site at https://www.bigcreektreeservice.com
**Scope:** Redesign on existing Next.js 16 / Tailwind v4 codebase. Preserve indexed URLs, sitemap, GSC progress, 18 blog posts, JSON-LD baseline. Add B2B and storm-emergency landing pages where ROI is clear.
**Companion file:** DESIGN.md (tokens, primitives, photography)
**Reference skills:** big-creek-brand, copy-direct-response, seo-technical, ui-ux-pro-max

---

## 1. Site map

Every existing URL keeps its slug. New pages added below the existing tree. Pages ranked by combined SEO impact (search volume + commercial intent) and conversion impact (cost-per-lead × close rate).

### Tier 1 — Highest combined SEO + conversion impact

| # | URL | Purpose | SEO weight | Conversion weight |
|---|---|---|---|---|
| 1 | `/` | Homepage. Residential same-day hero, B2B subhead, services grid, trust, reviews, contact. | 1.0 | 1.0 |
| 2 | `/services/storm-damage` | High-intent emergency search. "Tree on my house Cleveland" type queries. | 0.95 | 0.95 |
| 3 | `/services/tree-removal` | Largest residential search volume. "Tree removal cost Cleveland." | 0.95 | 0.90 |
| 4 | `/commercial` *(new)* | B2B hub. Property managers, HOAs, developers, insurance adjusters. Annual contract CTA. | 0.70 | 0.95 |
| 5 | `/storm-emergency` *(new)* | 24/7 emergency landing distinct from informational service page. Phone-first, allowed exclamation. Ad-target ready. | 0.65 | 1.0 |

### Tier 2 — High impact

| # | URL | Purpose |
|---|---|---|
| 6 | `/services/stump-grinding` | Mid-volume search, frequent add-on to removal jobs. |
| 7 | `/services/land-clearing` | High-ticket B2B (developers, farms, new construction). |
| 8 | `/service-areas` | Geo hub page, internal-link anchor to all 10 city pages. |
| 9 | `/service-areas/strongsville` | Top suburb by population in service area. |
| 10 | `/service-areas/parma` | Top suburb by tree-density + age of housing stock. |
| 11 | `/service-areas/westlake` | Upscale residential, high-ticket jobs. |
| 12 | `/services/tree-treatment` | EAB treatment, mid-volume but high recurring value. |
| 13 | `/services/demolition` | Adjacent service, distinct buyer intent, B2B-aligned. |

### Tier 3 — Medium impact

| # | URL | Purpose |
|---|---|---|
| 14 | `/service-areas/medina` | County seat. |
| 15 | `/service-areas/lakewood` | Dense urban, complex jobs. |
| 16 | `/service-areas/avon` | Fast-growing suburb. |
| 17 | `/service-areas/north-olmsted` | Established residential. |
| 18 | `/service-areas/berea` | Established residential, mature trees. |
| 19 | `/service-areas/brunswick` | Edge of service area, strong tree density. |
| 20 | `/service-areas/olmsted-falls` | Smaller, but wooded character drives demand. |
| 21 | `/services/tree-planting` | Lower urgency, longer sales cycle, recurring revenue. |
| 22 | `/services/haul-away` | Mostly bundled with other services. |
| 23 | `/services/consulting` | Niche but high-credential signal, supports insurance/HOA pitches. |
| 24 | `/about` *(promote from anchor to dedicated page)* | Credentials, ISA cert, insurance, story. Trust depth. |
| 25 | `/contact` *(confirm or promote from anchor)* | Form, phone, hours, service area. |
| 26 | `/blog` | Content hub. |
| 27 | `/insurance-claims` *(Phase 2, new)* | Insurance adjuster landing. Documentation services. |

### Tier 4 — Long-tail support

| # | URL | Purpose |
|---|---|---|
| 28-45 | `/blog/{18 slugs}` | Long-tail search capture. Already published. Audit and improve. |
| 46-48 | `/blog/category/{tree-care, emergency-storm, property-business}` | Topical hubs. |

**Total page count target post-launch:** 47-48. Currently 43 in sitemap.

---

## 2. Per-page briefs

Each brief covers: hero pattern, sections in order, primary CTA, secondary CTA, schema, meta title, meta description, OG image dimensions. Meta titles capped at 60 chars, meta descriptions at 160 chars. OG images always 1200x630.

### 2.1 Homepage `/`

- **Hero pattern:** Full-bleed photo (real Big Creek storm response or crane work shot), overlay tinted with `--green-900` at 40% from bottom-left, headline in left third.
- **H1 (new):** `Same-Day Tree Estimates Across Greater Cleveland`
- **Subhead:** `Tree removal, storm response, stump grinding, and land clearing within 40 miles of Cleveland. ISA-certified, fully insured. Property managers and HOAs, ask about annual contracts.`
- **Hero CTAs:** Primary — `Call (216) 551-6445` (phone number visible). Secondary — `Get Same-Day Estimate` (scrolls to form).
- **Sections in order:**
  1. Hero
  2. Trust strip (4 credential pills: ISA-Certified · Fully Insured · 40-Mile Radius · 24/7 Storm Response)
  3. Service grid (9 cards, Storm Damage first on mobile)
  4. Coverage map + 10-city link list
  5. **Commercial band** (new, B2B reassurance: property managers, HOAs, developers, insurance — links to /commercial)
  6. Stats strip ("200+ storm calls cleared," "9 service lines," "40-mile radius")
  7. Reviews carousel (5 real Google reviews)
  8. Blog preview (3 most recent)
  9. Estimate form (Formspree-backed)
  10. Footer
- **Primary CTA:** Same-day estimate (call or form).
- **Secondary CTA:** Annual service contract for B2B (links to /commercial).
- **Schema:** LocalBusiness (existing, keep), FAQPage (existing, keep), WebSite (existing, keep). Add `BreadcrumbList`.
- **Meta title:** `Tree Removal & Storm Response, Cleveland Ohio | Big Creek Tree Service` (60 char)
- **Meta description:** `ISA-certified tree removal, stump grinding, land clearing, and 24/7 storm response within 40 miles of Cleveland. Same-day estimates, fully insured.` (155 char)
- **OG image:** Custom 1200x630, current opengraph-image.tsx exists, content needs to match new headline.

### 2.2 Service page template `/services/[slug]`

Used for all 9 services. Hero photo and copy vary; structure is identical.

- **Hero pattern:** Service photo as `next/image` priority, overlay, left-aligned headline.
- **H1 pattern:** `{Service} in Greater Cleveland` (e.g., `Tree Removal in Greater Cleveland`)
- **Subhead pattern:** One sentence stating who it's for, plus credentials.
- **Hero CTAs:** Phone link (number visible), form scroll.
- **Sections in order:**
  1. Hero
  2. Trust strip (same as homepage)
  3. What's included (bulleted scope of work, 4-6 items)
  4. How it works (3-step process: estimate → schedule → complete)
  5. Equipment + crew (proof — bucket truck, crane, ISA cert)
  6. Pricing transparency block (typical range, what affects price, free same-day quote)
  7. Coverage map mini (10 cities)
  8. Related services (3 cards) — keep existing parchment background
  9. From the blog (2-3 related posts) — keep existing stone background
  10. Estimate form
  11. Footer
- **Primary CTA:** Same-day estimate.
- **Secondary CTA:** "View related services."
- **Schema:** Service (per slug, with provider, areaServed, serviceType, offers — currently missing on service pages), inherit LocalBusiness from layout, BreadcrumbList.
- **Meta title pattern:** `{Service} Cleveland OH | Big Creek Tree Service` (55-60 char)
- **Meta description pattern:** `{Service} across Greater Cleveland and NE Ohio. {Specific detail}. ISA-certified, fully insured, same-day estimates. Call (216) 551-6445.` (150-160 char)
- **OG image:** Per-service 1200x630, dynamically generated via `opengraph-image.tsx` in `[slug]/` route segment.

### 2.3 Service-area hub `/service-areas`

- **Hero pattern:** Headline + coverage map full-width, no photo behind.
- **H1:** `Tree Service Across 10 NE Ohio Communities`
- **Subhead:** `Same-day estimates within a 40-mile radius of Cleveland. Browse by city or call (216) 551-6445.`
- **Sections in order:**
  1. Hero with full coverage map
  2. 10-city grid (City cards)
  3. Service summary (1-paragraph each on 9 services)
  4. Reviews
  5. Estimate form
- **Primary CTA:** Phone or estimate form.
- **Schema:** LocalBusiness with `areaServed` containing all 10 city `Place` entities. BreadcrumbList.
- **Meta title:** `Tree Service in Cleveland, Strongsville, Parma, Westlake & Beyond` (60 char)
- **Meta description:** `Big Creek Tree Service covers 10 NE Ohio communities within 40 miles of Cleveland. Same-day estimates, ISA-certified, fully insured.` (140 char)
- **OG image:** 1200x630 with coverage map graphic.

### 2.4 City page template `/service-areas/[city]`

Used for 10 city pages.

- **Hero pattern:** Photo from that city if available (license from Atlas/Mark Allen by city), otherwise generic NE Ohio canopy shot.
- **H1 pattern:** `Tree Service in {City}, Ohio`
- **Subhead pattern:** City-specific blurb (already drafted in `data/cities.ts`).
- **Sections in order:**
  1. Hero
  2. Trust strip
  3. Why {City} property owners call Big Creek (3 bullets keyed to local context — e.g., ice storm risk in Parma, mall-corridor commercial in Strongsville)
  4. Services we provide in {City} (9-card grid)
  5. Nearby areas we serve (uses `nearbyAreas` from data, links if those are also city pages)
  6. Reviews
  7. Estimate form
- **Primary CTA:** Same-day estimate for {City}.
- **Schema:** Service with `areaServed` as `Place` entity for the city, `serviceType` array, provider reference to LocalBusiness `@id`.
- **Meta title pattern:** `Tree Service {City} OH | Big Creek Tree Service` (under 60)
- **Meta description pattern:** `Tree removal, stump grinding, storm response in {City}, Ohio. ISA-certified, fully insured. Same-day estimates. Call (216) 551-6445.` (150)
- **OG image:** Per-city 1200x630, generated from a template OG image with city name overlay.

### 2.5 Commercial `/commercial` *(new)*

- **Hero pattern:** Photo of crew on a commercial / HOA scale job (mall corridor, apartment complex, large lot). Overlay.
- **H1:** `Tree Service for Property Managers, HOAs, and Developers`
- **Subhead:** `Annual service contracts, 24-hour storm response, ISA-certified arborists, $2M liability coverage. Serving NE Ohio commercial properties within 40 miles of Cleveland.`
- **Hero CTAs:** Primary — `Request a Service Contract Quote` (form). Secondary — `Call (216) 551-6445`.
- **Sections in order:**
  1. Hero
  2. Who we serve (4 cards: Property managers · HOAs · Developers · Insurance adjusters)
  3. What's included in a contract (preventive trimming, hazard removal, storm response, documentation, single point of contact)
  4. Documentation + insurance support (matters for insurance-adjuster and HOA-board personas)
  5. Equipment + capacity (bucket trucks, crane work, capacity to handle multi-property routes)
  6. Case-style proof (1-2 anonymized property descriptions: "Strongsville HOA, 84-unit, annual contract since 2024, 12 hazard removals, 3 storm responses, zero claims")
  7. Service area coverage map
  8. Contract request form (longer form: property type, units, current pain points, contact)
  9. Footer
- **Primary CTA:** Contract quote form.
- **Secondary CTA:** Phone.
- **Schema:** Service with `serviceType: "Tree Maintenance Contract"`, `audience` schema (`businessFunction`, `audienceType: "Property Manager"`). LocalBusiness inherited.
- **Meta title:** `Commercial Tree Service & HOA Contracts | Big Creek Tree Service` (60)
- **Meta description:** `Annual tree service contracts for NE Ohio property managers, HOAs, and developers. 24-hour storm response, full documentation, ISA-certified, $2M insured.` (160)
- **OG image:** 1200x630, commercial-property scale shot with B2B-coded headline.

### 2.6 Storm Emergency `/storm-emergency` *(new)*

This is the only page on the site where the brand allows exclamation marks. Distinct from informational `/services/storm-damage`. Built to be paid-ad-ready and to dominate "tree on my house Cleveland" emergency search.

- **Hero pattern:** Photo of post-storm wreckage (tree on roof, crane in action). High-contrast overlay.
- **H1:** `Tree Down? We Answer 24/7 Across Cleveland.`
- **Subhead:** `Storm response within hours. ISA-certified, fully insured, $2M liability. Call now.`
- **Hero CTAs:** Single dominant phone CTA. `(216) 551-6445`, storm variant button, full-width on mobile.
- **Sections in order:**
  1. Hero
  2. Immediate-action callout (3 things to do right now: secure people, document damage, call us)
  3. What we handle (tree on home, tree blocking driveway, hanging limbs, blocked road, downed power line nearby — call utility first)
  4. Insurance documentation (we provide written reports for adjusters)
  5. Crew + equipment (crane, bucket truck, available now)
  6. Coverage map
  7. Phone CTA repeated, large
  8. Footer
- **Primary CTA:** Phone. The only call-to-action. No form. Emergency requires synchronous contact.
- **Schema:** EmergencyService schema (`@type: EmergencyService`), LocalBusiness inherited.
- **Meta title:** `24/7 Storm Damage & Emergency Tree Removal, Cleveland Ohio` (60)
- **Meta description:** `Tree down? Big Creek Tree Service responds 24/7 across NE Ohio. ISA-certified, fully insured. Crane and bucket truck on standby. Call (216) 551-6445 now.` (160)
- **OG image:** 1200x630, storm-coded (red accent, "24/7" prominent).

### 2.7 About `/about` *(promote from anchor)*

- **Hero pattern:** Joseph + crew + truck photo (real, not stock). Tight, no sky.
- **H1:** `Big Creek Tree Service`
- **Subhead:** `ISA-certified arborist, $2M insured, serving NE Ohio.`
- **Sections in order:**
  1. Hero
  2. Story (2-3 paragraphs, no "family-owned since" cliché — focus on what work has been done, who has been served)
  3. Credentials (ISA certification number if available, insurance, equipment list, years operating)
  4. Service area
  5. Reviews
  6. Estimate form
- **Primary CTA:** Same-day estimate.
- **Schema:** AboutPage, LocalBusiness inherited.
- **Meta title:** `About Big Creek Tree Service | ISA-Certified, NE Ohio` (55)
- **Meta description:** `Big Creek Tree Service is an ISA-certified, fully insured tree and land service operating across NE Ohio. Same-day estimates within 40 miles of Cleveland.` (160)
- **OG image:** Crew shot, 1200x630.

### 2.8 Contact `/contact`

- **Hero pattern:** Compact, no photo. Headline + form above the fold.
- **H1:** `Request a Same-Day Estimate`
- **Subhead:** `Reply within business hours. For storm emergencies, call (216) 551-6445.`
- **Sections in order:**
  1. Hero with form (Formspree, already wired)
  2. Phone block (large)
  3. Hours (Mon-Sun 7am-7pm + 24/7 emergency)
  4. Service area map
  5. Footer
- **Primary CTA:** Form submission.
- **Secondary CTA:** Phone.
- **Schema:** ContactPage, LocalBusiness inherited.
- **Meta title:** `Contact Big Creek Tree Service | Same-Day Estimates` (50)
- **Meta description:** `Request a same-day estimate from Big Creek Tree Service. NE Ohio, 40-mile radius of Cleveland. Call (216) 551-6445 or use the form.` (140)
- **OG image:** 1200x630, simple contact-coded.

### 2.9 Blog `/blog`

- **Hero pattern:** Compact heading + featured-post block.
- **H1:** `Tree Care, Storm Response, and Property Notes`
- **Sections in order:** Featured post, category filter, post grid, footer.
- **Schema:** Blog (`@type: Blog`), each post as BlogPosting.
- **Meta title:** `Blog | Big Creek Tree Service NE Ohio` (40)
- **Meta description:** `Practical tree care, storm prep, and property notes from an ISA-certified NE Ohio arborist.` (95)

### 2.10 Blog post `/blog/[slug]`

- **Hero pattern:** Title + meta (author, date, reading time) + featured image.
- **Sections:** Title, intro, body (h2/h3 sections), inline image (1-2), CTA block ("Same-day estimate? Call (216) 551-6445"), related posts, footer.
- **Schema:** BlogPosting with `author`, `publisher: LocalBusiness`, `datePublished`, `image`.
- **Meta title pattern:** `{Post title} | Big Creek Tree Service` (under 60)
- **Meta description pattern:** First 150 chars of post intro, hand-curated.
- **OG image:** Per-post, 1200x630, generated from MDX frontmatter.

### 2.11 Insurance Claims `/insurance-claims` *(Phase 2)*

Builds on consulting service, targeted at adjuster persona. Out of scope for v1 redesign launch, slot into Phase 2. Brief deferred until launch metrics inform priority.

---

## 3. Tech architecture

### 3.1 Stack confirmation

- **Framework:** Next.js 16.2.4 (App Router). React 19.2.4. Stays.
- **Styling:** Tailwind CSS v4. Stays.
- **Component primitives:** shadcn/ui where applicable (Accordion, Dialog if needed, Form helpers). Currently not in dependencies — add `@radix-ui/*` peers and CLI scaffold the components actually used. Don't import shadcn wholesale.
- **Icons:** Upgrade `lucide-react@1.14.0` (abandoned namespace) to current `lucide-react@^0.4xx`. Tree-shaken imports only.
- **Forms:** Formspree (already wired to /contact). Confirm endpoint routes to joe@bigcreektreeservice.com per May 13 handoff. Add a second form on /commercial for contract requests.
- **Content:** MDX for blog (existing), TypeScript data files for services and cities (existing).
- **Analytics:** Add Vercel Web Analytics (free tier) for CWV measurement. Phone clicks and form submits emit custom events.

### 3.2 Routing pattern

All routes server-rendered or statically generated. Zero client-only indexable pages.

| Route | Rendering | Why |
|---|---|---|
| `/` | Static | No dynamic content; revalidate on deploy. |
| `/services/[slug]` | Static, `generateStaticParams` from `data/site-data.ts` | Known slug list. |
| `/service-areas` | Static | Static city list. |
| `/service-areas/[city]` | Static, `generateStaticParams` from `data/cities.ts` | Known slug list. |
| `/commercial`, `/storm-emergency`, `/about`, `/contact` | Static | No dynamic data. |
| `/blog`, `/blog/[slug]`, `/blog/category/[cat]` | Static, regenerated on content change | MDX file system. |
| `/sitemap.xml`, `/robots.txt` | Dynamic at request | Already in app router. |

### 3.3 Data sources

- `data/site-data.ts` — businessInfo, services list, testimonials. Single source of truth for site-wide constants.
- `data/cities.ts` — 10 city objects with slug, name, county, blurb, zip, nearbyAreas.
- `data/services-content.ts` — per-service long-form copy (already exists, audit for em-dash and "free" replacements).
- `content/blog/*.mdx` — blog posts, frontmatter parsed by `lib/blog.ts`.
- `lib/seo.ts` *(new)* — exports shared schema builders so each route imports consistent JSON-LD: `buildLocalBusiness()`, `buildService(slug)`, `buildCityService(citySlug)`, `buildBlogPosting(post)`, `buildBreadcrumb(items)`.

### 3.4 Image strategy

- **Component:** `next/image` everywhere. Zero `<img>` tags, zero CSS `background-image` on LCP elements.
- **Formats:** AVIF primary, WebP fallback, JPEG legacy. Next.js handles negotiation.
- **Hero LCP image:** `priority` prop, explicit `width` + `height`, `sizes="100vw"`. Pre-generated AVIF capped at 180KB.
- **Card images:** lazy by default, `sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"`. AVIF capped at 60KB.
- **Blog hero images:** same as card images sizing, lazy.
- **CDN:** Vercel image optimization (default). No external image host needed.
- **Asset audit:** `/public/images/tree-removal.jpg` is reused for both `tree-removal` and `tree-planting` services. Resolve in image-asset task: distinct image per service.

### 3.5 Performance budget per page tier

Targets measured on Vercel mobile profile (4G throttle, Moto G4 reference). Lighthouse mobile.

| Page tier | LCP | INP | CLS | Total transfer | JS payload | Lighthouse perf |
|---|---|---|---|---|---|---|
| Homepage | < 2.0s | < 150ms | < 0.05 | < 600KB | < 120KB | > 95 |
| Service page | < 2.0s | < 150ms | < 0.05 | < 500KB | < 100KB | > 95 |
| City page | < 1.8s | < 150ms | < 0.05 | < 450KB | < 80KB | > 95 |
| Commercial / Storm-emergency | < 2.0s | < 150ms | < 0.05 | < 500KB | < 100KB | > 95 |
| Blog index | < 2.0s | < 150ms | < 0.05 | < 500KB | < 80KB | > 95 |
| Blog post | < 2.2s | < 150ms | < 0.05 | < 600KB | < 80KB | > 92 |

All tiers exceed the brief's LCP < 2.5s requirement.

### 3.6 Core Web Vitals enforcement

- **In CI:** Lighthouse CI runs on Vercel preview deploys. Fails the PR if any tier budget is missed by > 10%.
- **In production:** Vercel Web Analytics measures real-user CWV. Alert on weekly p75 regression.
- **Manual checkpoints:** PageSpeed Insights and search.google.com/test/rich-results on every new template before merge to main.

### 3.7 Schema architecture

Goal: every page has correct, validated JSON-LD. Pages embed only the schemas relevant to them. LocalBusiness lives once on every page (inherited from a shared schema builder), additional schemas per page type.

| Page | Schemas |
|---|---|
| `/` | LocalBusiness, WebSite, FAQPage |
| `/services/[slug]` | LocalBusiness, Service, BreadcrumbList |
| `/service-areas` | LocalBusiness, BreadcrumbList |
| `/service-areas/[city]` | LocalBusiness, Service (with areaServed=city), BreadcrumbList |
| `/commercial` | LocalBusiness, Service (Tree Maintenance Contract), BreadcrumbList |
| `/storm-emergency` | LocalBusiness, EmergencyService, BreadcrumbList |
| `/about` | LocalBusiness, AboutPage |
| `/contact` | LocalBusiness, ContactPage |
| `/blog` | LocalBusiness, Blog |
| `/blog/[slug]` | LocalBusiness, BlogPosting, BreadcrumbList |

Validate every template at search.google.com/test/rich-results before launch.

### 3.8 Repo conventions

- Server components default. `"use client"` only in: `Header.tsx` (mobile menu state), `MobileCallBar.tsx` (analytics events), FAQ accordion (if not native `<details>`), Carousel components, form fields.
- Inline `style={}` and `onMouseEnter` handlers in `Hero.tsx`, `Header.tsx`, `Services.tsx` (per audit) move to Tailwind classes. Net JS payload drop expected ~20-30KB.
- Per the May 9 handoff: a git wrapper script for the `.git/index.lock` issue is still open. Out of scope for v2 design plan; flagged.

---

## 4. Launch checklist

This is a re-launch, not a first launch. The site is already in GSC with a 43-page sitemap. Treat the checklist as a deployment gate before v2 goes live, plus a post-launch verification cycle.

### 4.1 Pre-launch (in PR or staging)

- [ ] All pages render visible content via `curl -A "Googlebot" {url}` — body contains the headline and copy.
- [ ] Every page's primary JSON-LD passes search.google.com/test/rich-results.
- [ ] FAQPage schema on `/` validates and shows 20+ Q&A in the rich results preview.
- [ ] Lighthouse mobile score ≥ 95 perf, ≥ 95 SEO, ≥ 95 accessibility, ≥ 100 best practices on homepage, top 3 service pages, top 3 city pages, and `/commercial`, `/storm-emergency`.
- [ ] CWV: LCP < 2.5s on all pages in PageSpeed Insights mobile (target < 2.0s per budgets).
- [ ] All `<img>` are `next/image`. No CSS `background-image` on hero or any LCP candidate.
- [ ] Copy audit: no em dashes site-wide (`grep -rE "—|–" app/ components/ data/ content/`).
- [ ] Copy audit: no "free quote / free estimate" (`grep -rE "free (quote|estimate)" app/ components/ data/`). Replace with "same-day estimate".
- [ ] Copy audit: no "#1 tree" or "transform your" or "family-owned since" or "world-class".
- [ ] Phone number `(216) 551-6445` visible on every page header and footer (not just behind a CTA label).
- [ ] Service area "40-mile radius of Cleveland" stated in body copy of every page (footer or about section).
- [ ] ISA-certified + fully insured badges visible on every page.
- [ ] No popups, no live chat, no exclamation marks except in `/storm-emergency` and any storm callout.
- [ ] All 9 services have a distinct photo (the tree-removal.jpg duplication on tree-planting is fixed).
- [ ] Mobile call bar persists below 768px.
- [ ] Forms submit to joe@bigcreektreeservice.com (Formspree endpoint reverified per May 13 handoff).
- [ ] All internal anchor `#contact` / `#services` / `#about` references updated for pages that no longer use anchors (about and contact now standalone routes).
- [ ] `/sitemap.xml` regenerates correctly including new routes (`/commercial`, `/storm-emergency`, `/about`, `/contact`).
- [ ] `/robots.txt` allows all, sitemap reference is correct.
- [ ] Open Graph image renders on all routes; test 4 representative URLs via opengraph.xyz or social-card debuggers.
- [ ] Canonical URLs set on every page; service pages and city pages canonical to themselves, not to `/`.
- [ ] 404 page exists and styled.

### 4.2 Launch deploy

- [ ] Deploy to Vercel preview, run all checks above.
- [ ] Promote to production.
- [ ] Sanity check: production homepage returns 200, has updated h1, has phone number visible.
- [ ] DNS unchanged — already on Vercel via GoDaddy per May 13 handoff.

### 4.3 Redirect plan from old URLs

The May 13 handoff confirms Hostinger DNS and mail are fully cut, so there is no live Hostinger site to redirect from. The redirect concern is only for stale URLs Google may have indexed pre-Vercel.

- [ ] Pull GSC "Pages" report → "Not indexed" + "Excluded" buckets. Export any Hostinger-era URLs Google still references.
- [ ] For each, create a 301 in `next.config.ts` `redirects()` pointing to the closest live URL.
- [ ] Common likely candidates to check: `/services.html`, `/contact.html`, `/about.html`, `/index.php`, any old slugs from a Hostinger template.
- [ ] Internal links in MDX blog posts pointing to old slugs are updated, not redirected, where possible.

### 4.4 Post-launch (week 1)

- [ ] Google Search Console: confirm property still verified after deploy.
- [ ] GSC: submit updated sitemap `https://www.bigcreektreeservice.com/sitemap.xml`.
- [ ] GSC: URL inspection on homepage, top 3 service pages, /commercial, /storm-emergency, /about → request indexing.
- [ ] GSC Coverage report 24 hours after deploy: zero new errors introduced by the v2.
- [ ] Google Business Profile audit per `GBP_OPTIMIZATION_CHECKLIST.md`:
  - [ ] Profile verified, NAP exact match to site.
  - [ ] Business description updated to reflect new homepage copy.
  - [ ] All 9 services listed.
  - [ ] 10+ photos uploaded with city/service file naming.
  - [ ] Q&A populated (5+ questions).
  - [ ] Posts: first weekly post live.
  - [ ] Service area lists all 10 cities + Northeast Ohio + Greater Cleveland.
- [ ] NAP citation audit:
  - [ ] Yelp listing matches site phone, name, area.
  - [ ] BBB listing reviewed if it exists.
  - [ ] Angi / HomeAdvisor / Thumbtack — list, verify NAP if active, claim if unclaimed.
  - [ ] Bing Places mirror of GBP.
  - [ ] Local directories (Cleveland.com, NEOhio business directories) — list of 10 citation targets.
- [ ] Schema re-validation on production URLs (Rich Results Test on 5 page templates).
- [ ] Mobile-Friendly Test on 5 page templates.
- [ ] PageSpeed Insights on 5 page templates: confirm CWV targets hit in real-user data.
- [ ] Formspree test submission, confirm Gmail delivery, confirm reply-to header is correct.

### 4.5 Post-launch (week 2-4)

- [ ] Re-pull GSC Coverage. Confirm sitemap-submitted pages move from "Discovered" to "Indexed."
- [ ] GBP weekly post cadence established.
- [ ] Review-request SMS template deployed to Joseph for completed jobs.
- [ ] Lighthouse CI baseline locked in; alert thresholds set.
- [ ] First conversion-tracking review: phone_click and form_submit events flowing in Vercel Analytics. Tie back to GBP, organic, direct.
- [ ] Photography Phase B started: license Atlas/Mark Allen photos, fill the duplicated-image gaps on service grid.

### 4.6 Phase 2 (month 2-3)

- [ ] Commission photography shoot per DESIGN.md §6 Phase C.
- [ ] Launch `/insurance-claims` page targeted at adjuster persona.
- [ ] Build out 2-3 more `/service-areas/[city]` pages from the next tier (Rocky River, Fairview Park, Avon Lake) if data shows volume from those zips.
- [ ] Add 4 new blog posts targeted at B2B keywords (property manager tree-care guide, HOA contract checklist, insurance claim documentation, developer land-clearing prep).
- [ ] Consider Google Local Services Ads once review count > 25.

---

## 5. What is not in scope for v2

Explicitly deferred so the v2 ships clean:

- Live chat. Brand prohibits.
- Cookie consent banner. Not required for Ohio-only local traffic per May 9 handoff. Revisit before paid ads.
- Booking/scheduling integration. Phone + form is the funnel. Calendar tooling deferred until lead volume justifies it.
- Spanish translation. Not blocking; can layer later via Next.js i18n if zip data shows the demand.
- Loyalty / referral system. Out of scope; SMS review requests cover the equivalent.
- Custom blog category landing pages beyond the 3 existing ones.
- SVG branch overlays on Services section. Per May 9 handoff, attempted and rolled back; do not reattempt without new direction.

---

## 6. Open questions / decisions still owed

1. **About page asset:** Is there a usable photo of Joseph + crew for /about, or does v1 ship with a stand-in equipment shot until Phase C?
2. **Pricing transparency:** Service page brief includes a "typical price range" block. Brand skill warns "Affordable" attracts wrong leads, but ranges build trust. Sign-off needed on whether to publish ranges or stick to "free same-day estimate" with no numbers.
3. **Insurance documentation lead magnet:** Could double as the `/insurance-claims` page's primary asset (PDF: "What to do when a tree falls on your house — the NE Ohio insurance documentation guide"). Decision: include in v2 or hold for Phase 2.
4. **Storm mode toggle:** Should `/storm-emergency` callouts surface site-wide automatically during weather events? Implementation: ENV-flagged callout band. Decision needed.
5. **Annual contract pricing model:** Per-property fee, per-acre, or per-tree-count basis for HOA/property manager contracts. Affects `/commercial` form fields. Joseph's input required.
