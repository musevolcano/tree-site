# Big Creek Tree Service — Design System (v2)

**Status:** v2 of live site at https://www.bigcreektreeservice.com
**Scope:** Redesign on existing Next.js 16 / Tailwind v4 codebase. Keep URLs, content, JSON-LD baseline. Swap visual language, components, copy.
**Companion file:** PLAN.md (sitemap, per-page briefs, tech, launch)
**Reference skills:** big-creek-brand (voice), copy-direct-response (structure), seo-technical (schema, CWV), ui-ux-pro-max (system primitives)

---

## 1. Design principles

Five principles, in priority order. When two pull against each other, the earlier one wins.

1. **Crawler-visible first.** Every indexable page server-renders. No content gated behind hydration. Hero LCP image rendered via `next/image` with `priority`, not CSS `background-image`.
2. **Insurance-grade trust over excitement.** Visual tone matches the brand voice: senior tradesman, not marketer. Calm contrast, restrained color, grounded photography. Bright lime green is an accent, never a hero color.
3. **One CTA per section.** Either same-day estimate (residential) or service contract (B2B). Phone is a permanent header element. No competing buttons in the same viewport.
4. **Mobile-first, thumb-reachable.** Header CTA, footer CTA, and a persistent mobile call bar must hit the bottom 25% of viewport on phones. Tap targets 44x44 minimum.
5. **Static where possible, ISR where dynamic.** Server components by default. `"use client"` only for actual interactivity (mobile menu, FAQ accordion, form). No client components on the LCP path.

---

## 2. Color tokens

The live palette is bright/welcoming green. The brand voice is grounded/professional. v2 keeps the green identity but **darkens, desaturates, and adds an earth-tone neutral ladder**. Lime `#72CC35` moves from primary to accent-only.

### Brand greens

| Token | Value | Use |
|---|---|---|
| `--green-900` | `#0D3B1F` | Deepest forest. Display headlines on light bg, dark-mode body bg. |
| `--green-800` | `#0F4A26` | Logo color. Header wordmark. Primary CTA hover. |
| `--green-700` | `#166534` | Body link color, h2 on light bg. (Keeps current `--green-deep`.) |
| `--green-600` | `#1D8A50` | Primary CTA fill, badge accent. (Keeps current `--green-mid`.) |
| `--green-500` | `#3AA86A` | Hover lift on `--green-600`. |
| `--green-300` | `#A8D5BA` | Disabled states, subtle backgrounds. |
| `--green-100` | `#E5F1EA` | Section tint, badge bg. |
| `--lime-accent` | `#72CC35` | Accent only: section rules, active tab indicator, focus rings. Never a full button. |

### Earth neutrals

| Token | Value | Use |
|---|---|---|
| `--cream` | `#F4EFE6` | Section background tier 1. (Kept.) |
| `--sand` | `#E2D9CA` | Borders, dividers, card bg on cream. (Kept.) |
| `--stone` | `#F5F2EC` | Section background tier 2, used on "From the Blog" already. (Kept.) |
| `--parchment` | `#E0D6C2` | Section background tier 3, "Related Services" already. (Kept.) |
| `--bark` | `#3D2E20` | Dark accent on cream sections, photo captions. |

### UI neutrals

| Token | Value | Use |
|---|---|---|
| `--ink` | `#0F1A14` | Body text on white. Replaces `--black`. |
| `--ink-soft` | `#3B4A40` | Secondary text. |
| `--ink-muted` | `#6B7670` | Captions, metadata. |
| `--line` | `#D9D2C5` | Hairline dividers. |
| `--surface` | `#FFFFFF` | Card surface, body bg. |

### Semantic

| Token | Value | Use |
|---|---|---|
| `--storm` | `#B23A1F` | Storm-emergency callouts only. Allowed contexts for `!` and red accents. |
| `--storm-bg` | `#FDECE5` | Storm callout background. |
| `--success` | `#1D8A50` | Form success state (reuses `--green-600`). |
| `--warn` | `#9A6B12` | Insurance/credential badges. |

### Contrast floor

All body text combinations must hit WCAG AA (4.5:1). Headlines hit 3:1. Tokens above are picked to pass on `--surface`, `--cream`, and `--green-900` backgrounds. Run axe in CI on every deploy.

---

## 3. Typography

### Families (kept from current build)

- **Display:** Bebas Neue, 400. Variable: `--font-bebas-neue`. Loaded `display: swap`.
- **Body:** DM Sans, 300/400/500/700. Variable: `--font-dm-sans`. Loaded `display: swap`.

Bebas reads as direct, blue-collar, all-caps work signage. DM Sans is the calm humanist counterpart that handles long-form blog copy without strain.

### Type scale (mobile → desktop)

Mobile-first. Desktop values in parens.

| Token | Size | Line | Weight | Use |
|---|---|---|---|---|
| `text-display-1` | 3.5rem → (6rem) | 0.92 | 400 (Bebas) | Hero h1 only. Letter-spacing 0.02em. |
| `text-display-2` | 2.5rem → (3.75rem) | 1.0 | 400 (Bebas) | Page h1 below hero, large section openers. |
| `text-h2` | 1.875rem → (2.5rem) | 1.1 | 400 (Bebas) | Section headers. Letter-spacing 0.04em. |
| `text-h3` | 1.375rem → (1.625rem) | 1.2 | 700 (DM Sans) | Card titles, sub-section. |
| `text-h4` | 1.125rem → (1.25rem) | 1.3 | 700 (DM Sans) | Inline emphasis headers, FAQ questions. |
| `text-eyebrow` | 0.75rem | 1.2 | 700 (DM Sans) | Kicker above h2. Uppercase, letter-spacing 0.14em. |
| `text-lead` | 1.125rem → (1.25rem) | 1.55 | 400 (DM Sans) | Hero subhead, page intro paragraph. |
| `text-body` | 1rem | 1.65 | 400 (DM Sans) | Default paragraph. |
| `text-small` | 0.875rem | 1.5 | 500 (DM Sans) | Captions, metadata, footer. |
| `text-mono-cta` | 1.1rem | 1.0 | 400 (Bebas) | Button labels. Letter-spacing 0.08em. |

### Rules

- Body copy max 70ch wide. Long-form blog 65ch.
- Bebas only for display/h1/h2 and CTAs. Never below 1rem (lowercase Bebas is illegible).
- Headlines sentence case when serving conversion ("Same-day estimates in Cleveland"), all-caps Bebas reserved for brand and section openers ("OUR SERVICES").
- No italic Bebas (it does not exist). DM Sans italic allowed for quoted reviews only.

---

## 4. Spacing, radius, shadow

### Spacing (Tailwind 4-aligned)

Base unit 4px. Common rhythm: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.

| Token | Value | Use |
|---|---|---|
| `space-section-y` | `5rem` mobile → `7rem` desktop | Vertical padding inside a section. |
| `space-section-x` | `1.5rem` mobile → `4rem` desktop | Side gutters. Sections are full-width, content max-w-7xl inside. |
| `space-card` | `1.5rem` | Internal card padding. |
| `space-stack-tight` | `0.75rem` | Between related lines (eyebrow → h2). |
| `space-stack-default` | `1.5rem` | Between sibling paragraphs. |
| `space-stack-loose` | `2.5rem` | Between sub-sections inside a section. |

### Radius

| Token | Value | Use |
|---|---|---|
| `radius-button` | `6px` | All buttons. Kept from current. |
| `radius-card` | `10px` | Service card, review card, blog card. |
| `radius-image` | `8px` | Photography corners. |
| `radius-pill` | `999px` | Badges, tag pills. |
| `radius-input` | `4px` | Form inputs. |

### Shadow

| Token | Value | Use |
|---|---|---|
| `shadow-card-rest` | `0 1px 2px rgba(15,26,20,0.06), 0 1px 3px rgba(15,26,20,0.04)` | Default card shadow. |
| `shadow-card-hover` | `0 16px 40px rgba(15,26,20,0.16)` | Service card hover lift. (Tones the live `0.22` down.) |
| `shadow-header` | `0 1px 12px rgba(15,26,20,0.08)` | Sticky header. (Kept.) |
| `shadow-popover` | `0 12px 32px rgba(15,26,20,0.18)` | Mobile menu dropdown. |

---

## 5. Component primitives

Built on Tailwind v4 + shadcn/ui where applicable. Each primitive ships as a server component unless interactivity demands `"use client"`.

### 5.1 Button

```
variant: primary | secondary | ghost | storm
size:    md | lg
icon:    leading | trailing | none
```

- **Primary:** `bg-[--green-600] text-white` → hover `--green-700`. Default for all standard CTAs.
- **Secondary:** `bg-white text-[--green-700] border border-[--green-700]` → hover `bg-[--cream]`. For "Get Same-Day Estimate" on dark hero overlays.
- **Ghost:** transparent, underlined on hover. For inline tertiary actions (e.g., "View all services").
- **Storm:** `bg-[--storm] text-white`. Reserved for emergency-only CTAs. Only place exclamation marks are permitted.

All buttons:
- Min height 48px on mobile, 44px on desktop.
- Bebas Neue label, `text-mono-cta`.
- Tel: links use `<a href="tel:...">` rendered as primary button. Click event fires GA `phone_click` for measurement.
- Focus ring: 2px `--lime-accent` outline offset 2px.

### 5.2 PhoneLink

A specialized button. Renders `(216) 551-6445` as button label (or icon + label on mobile call bar). Always wraps a real `tel:` href so iOS/Android tap-to-call works. Required visible on header, footer, every service page hero, every city page hero. **The number itself is always visible**, not hidden behind "Call now" label. This fixes a live-site issue where the header CTA reads "Call for Free Quote" without showing the number.

### 5.3 Card

```
variant: service | review | blog | city | stat
```

- **Service card:** `radius-card`, `space-card`, photo top, h3 title, 1 paragraph, "Learn more →" ghost. Hover: `shadow-card-hover` + `translate-y-[-4px]`. Replace current emoji icons with lucide-react SVG icons set in `--green-700`.
- **Review card:** quoted text, stars (filled `--green-600`), reviewer name + "Google Review · {date}". No avatars.
- **Blog card:** category eyebrow, h3 title, 2-line excerpt, reading time, date.
- **City card:** city name (Bebas), county, 1-sentence blurb, "View {city} services →" link.
- **Stat card:** big Bebas number (e.g., "200+"), label ("storm calls cleared in NE Ohio").

### 5.4 Badge

```
variant: credential | promise | emergency
```

- **Credential:** "ISA-Certified," "Fully Insured," "$2M Liability." Pill, `bg-[--cream]`, border `--line`, icon `--warn`.
- **Promise:** "Same-Day Estimate," "Free On-Site Quote." Pill, `bg-[--green-100]`, text `--green-800`.
- **Emergency:** "24/7 Storm Response." Pill, `bg-[--storm-bg]`, text `--storm`.

### 5.5 Callout

A full-width band that breaks the rhythm. Two variants:

- **Trust callout:** cream background, credential badges + 1-line claim. Used between hero and services.
- **Storm callout:** `--storm-bg` background, storm icon, headline allowed to use exclamation: "Tree down? We answer 24/7." + storm CTA button.

### 5.6 Section header

The recurring header pattern across every section:

```
[EYEBROW IN CAPS]
Section Title in Bebas
———  (3px rule, --lime-accent, 48px wide)
Optional lead paragraph, 60ch max.
```

Centered on most marketing sections, left-aligned on blog and service-area pages.

### 5.7 FAQ accordion

Server-rendered details/summary HTML. No JS required for SEO; progressive enhancement adds smooth expand. Each FAQ item double-published as JSON-LD FAQPage entity. Question h4 in DM Sans 700.

### 5.8 Form field

For the estimate-request form (Formspree-backed, already wired):

- Label above input, never placeholder-only.
- Input: 12px vertical padding, `radius-input`, border `--line`, focus border `--green-600` + ring `--lime-accent`.
- Required field marker: small `--storm` asterisk after label.
- Error state: border `--storm`, error text below input.
- Phone field uses inputmode="tel".

### 5.9 Service grid

Eight or nine cards in 1-col mobile, 2-col tablet, 3-col desktop. Storm Damage card pinned first in mobile sort order (highest intent search). No gradient overlays on cards; rely on photography quality.

### 5.10 Trust strip

Horizontal band immediately under hero. Four pills: ISA-Certified · Fully Insured · 40-Mile Radius from Cleveland · 24/7 Storm Response. Tap-through to /about for credentials section.

### 5.11 Coverage map

Static SVG of the 40-mile radius centered on Cleveland with 10 named cities as pins. No interactive map library (skip Mapbox/Google Maps tiles, both add weight). One PNG + one SVG for retina. Below the map: list of 10 city links + "View all service areas" → /service-areas.

### 5.12 Sticky mobile call bar

Bottom-fixed bar on screens under 768px. Two segments: "Call (216) 551-6445" (tap-to-call) + "Same-Day Estimate" (scrolls to form). Already exists in `MobileCallBar.tsx`; keep, restyle to match new token palette.

---

## 6. Photography direction

### Anti-patterns (do not use)

- Stock photo of a man in hi-vis vest with a chainsaw on a clean white background.
- Tree-shaped icons standing in for actual trees in heroes.
- Drone-shot suburban roofs with bright sky and no work happening.
- Family-portrait crew lineups.
- Trees photographed from below with sun flare lens.

### Patterns to commission or capture

1. **Mid-action:** crew member in the canopy, climbing rope visible, sawdust caught in light. Conveys craft and scale.
2. **Equipment + scale:** bucket truck arm extended to a 60-foot oak. The truck makes the tree look big and the work look serious.
3. **Before/after diptychs:** storm damage on a roof → cleared, tarped. HOA driveway choked with debris → clean. Sells the outcome.
4. **Insurance-context shots:** truck parked next to a damaged structure with adjuster's clipboard visible. Speaks directly to insurance-adjuster persona.
5. **Tight detail crops:** chain on a saw, hands on a rope, cleated boots in mulch. Texture and trust.
6. **Honest weather:** overcast, post-storm wet, dirt on equipment. Big Creek does dirty work; photography should not pretend otherwise.

### Composition

- 3:2 ratio for hero. 1:1 for card images. 16:9 for blog headers.
- Subject in left or right third, never centered for hero (room for headline overlay).
- Crop tight: tools and people, no sky-heavy compositions.

### Photography sourcing plan

1. **Phase A (immediate, this session):** Audit existing `/public/images/*.jpg`. Currently 10 photos; some are usable (`storm-damage-real.jpg`, `crew-bucket-truck.jpg`), some likely placeholders (`tree-removal.jpg` used for two services). Identify the gap list.
2. **Phase B (week 1):** License the Atlas Landscaping / Mark Allen set from facebook.com/landscapeandtreepro per the GBP checklist. Fill obvious gaps. Tag each file with city, service, date so we can rotate them on GBP weekly posts.
3. **Phase C (month 1):** Commission a half-day shoot with the crew on one storm job and one HOA contract job. ~30 usable shots target. Photographer brief: action + scale + texture, overcast preferred, no posed crew photos.

### File naming + compression

`{service}-{city}-{year}.jpg` (e.g., `tree-removal-strongsville-2026.jpg`). Helps image SEO. Compress to AVIF + WebP via Next.js `next/image`. JPEG fallback only for legacy browsers. Hero: max 180KB for the AVIF derivative. Card images: max 60KB.

---

## 7. Iconography

Drop emojis from service grid and CTA buttons. Brand voice does not support them.

Replace with **lucide-react** icons (current package at v1.14.0 is the abandoned namespace, upgrade to current `lucide-react@^0.4xx`). Picks per service:

| Service | Icon |
|---|---|
| Tree Removal & Trimming | `TreePine` |
| Tree Planting | `Sprout` |
| Tree Treatment | `Stethoscope` (medical association reinforces "treatment") |
| Stump Grinding | `Disc3` or custom stump SVG |
| Storm Damage | `CloudLightning` |
| Demolition | `Hammer` |
| Land Clearing | `Tractor` |
| Haul Away | `Truck` |
| Consulting | `ClipboardCheck` |

Sizes: 20px in cards, 24px in section headers, 32px on service-page heroes. Color `--green-700` default, `--storm` only on emergency contexts.

---

## 8. Motion

Sparing, functional, performance-budgeted.

- Card hover: `translate-y(-4px)` + shadow swap, 200ms ease.
- Section reveal on scroll: optional 8px upward fade-in, IntersectionObserver, only above 768px. Disabled on mobile to protect INP.
- Carousels (already in homepage, blog preview): keep IntersectionObserver gating that was added on May 9 — don't run autoplay timers off-screen. Interval 5s. Touch-swipe required.
- Respect `prefers-reduced-motion`: kill autoplay, kill scroll-reveal.
- No parallax. No autoplay video.

---

## 9. Breakpoints

Tailwind 4 defaults, mobile-first:

- `sm` 640px (large phone)
- `md` 768px (tablet, header transitions from hamburger to full nav)
- `lg` 1024px (small laptop)
- `xl` 1280px (desktop)
- `2xl` 1536px (large desktop)

Content `max-w-7xl` (1280px) on most sections. Long-form blog `max-w-prose` (~65ch).

---

## 10. Accessibility floor

Non-negotiable on every page:

- WCAG 2.1 AA contrast on all text, verified by axe in CI.
- Skip link as first focusable element.
- Header nav is a `<nav>` landmark. Main content in `<main>`. Footer in `<footer>`.
- All images have meaningful `alt` text. Decorative SVGs `aria-hidden="true"` only.
- Form fields have associated `<label>`, error messages linked via `aria-describedby`.
- Focus visible on every interactive element, never `outline: none` without replacement.
- Phone numbers rendered as `tel:` links so screen readers and dial apps recognize them.
- Carousels are pausable, can be advanced via keyboard, expose `aria-roledescription="carousel"`.

---

## 11. What we keep from the live build

The May 9 + May 13 work is not discarded. v2 keeps:

- Bebas Neue + DM Sans pairing.
- The cream / sand / stone / parchment neutral ladder. (Adds `--bark`, `--ink`, `--ink-soft`.)
- The `--green-deep` / `--green-mid` greens at `--green-700` / `--green-600` names.
- The 5-section service-page color flow (gradient CTA at the bottom, parchment "Related Services," stone "From the Blog"). Refine, don't redo.
- IntersectionObserver gating on carousels, 5s interval, touch swipe.
- Sticky header, sticky mobile call bar.
- Sitemap structure (43 URLs).
- LocalBusiness JSON-LD on home, FAQPage schema with 24 questions, OfferCatalog with 9 services.

## 12. What we change

- Retire emoji icons in services, replace with lucide-react SVGs.
- Retire em dashes site-wide. Commas only, per brand skill.
- Retire "free quote" / "free estimate" → "same-day estimate."
- Retire "#1 tree & land service" superlative.
- Retire hero h1 = brand name. New hero h1 leads with benefit + location.
- Retire CSS `background-image` on hero; switch to `next/image` with `priority` for LCP control.
- Retire `"use client"` on Hero (no interactivity needed); Tailwind hover classes replace `onMouseEnter` handlers.
- Retire reused image (tree-removal.jpg appears on tree-removal AND tree-planting cards). Each service gets a distinct photo.
- Tighten card hover shadow (`0.22` → `0.16`).
- Demote `#72CC35` lime green from primary to accent.

---

## 13. Open design decisions for /design-shotgun

The variants stage should explore:

1. **Hero composition:** full-bleed photo + overlay vs. split layout (photo right, headline left) vs. video-poster-static (silenced hero from a future shoot).
2. **Service grid density:** 9 cards in one grid vs. grouped into Residential / Commercial / Emergency triptychs.
3. **B2B entry point:** dedicated "For Property Managers" nav item + landing, or B2B reassurance band on homepage between hero and services.
4. **Coverage map:** static SVG with city pins (recommended) vs. minimal grid of 10 city tiles vs. integrated into the hero as a small inset.
5. **Storm-emergency treatment:** persistent red callout band site-wide vs. only-when-active (toggled via a `STORM_MODE` env flag when weather demands).

These five become the shotgun matrix.
