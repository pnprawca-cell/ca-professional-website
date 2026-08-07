---
name: CA Professional Services
description: สำนักงานสอบบัญชีที่สร้างเครื่องมือของตัวเอง — warm-ivory, terracotta-sealed, quietly authoritative
colors:
  terracotta-seal: "#c96442"
  terracotta-ink: "#a34a24"
  terracotta-wash: "#f5e5dd"
  warm-ivory: "#faf9f5"
  oat-surface: "#f0eee6"
  pure-card: "#ffffff"
  near-black-ink: "#1f1e1d"
  stone-gray: "#63605b"
  dune-line: "#e5e2d9"
typography:
  display:
    fontFamily: "Anuphan, 'Segoe UI', sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  price:
    fontFamily: "Anuphan, 'Segoe UI', sans-serif"
    fontSize: "clamp(2rem, 4vw, 2.75rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Anuphan, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 1.875rem)"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Anuphan, 'Segoe UI', sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Anuphan, 'Segoe UI', sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  label:
    fontFamily: "Anuphan, 'Segoe UI', sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "normal"
  eyebrow:
    fontFamily: "Anuphan, 'Segoe UI', sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.1em"
rounded:
  sm: "8px"
  md: "16px"
  lg: "24px"
  full: "9999px"
spacing:
  gutter: "20px"
  section-y: "56px"
  section-y-lg: "80px"
  container: "72rem"
components:
  button-primary:
    backgroundColor: "{colors.near-black-ink}"
    textColor: "{colors.warm-ivory}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "10px 20px"
  button-accent:
    backgroundColor: "{colors.terracotta-ink}"
    textColor: "{colors.pure-card}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
  button-secondary:
    backgroundColor: "{colors.pure-card}"
    textColor: "{colors.near-black-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "10px 20px"
  card:
    backgroundColor: "{colors.pure-card}"
    textColor: "{colors.stone-gray}"
    rounded: "{rounded.md}"
    padding: "24px"
  input:
    backgroundColor: "{colors.pure-card}"
    textColor: "{colors.near-black-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "10px 16px"
---

# Design System: CA Professional Services

## 1. Overview

**Creative North Star: "The Practitioner's Ledger"**

This is the workspace of a real auditor who happens to build software — not a software company guessing at what audit work feels like. Everything on the surface should read as *practitioner-proof, not promise*: warm paper tones, calm spacing, a single terracotta mark used like a CPA's stamp. The system carries PRODUCT.md's core belief that *ความสงบและอ่านง่ายคือความมืออาชีพ* — calm and legibility **are** the professionalism. Density is generous, never busy; a page should feel like a well-kept ledger, not a dashboard.

The palette is a warm-ivory ground with near-black ink and one terracotta accent. Depth is tonal, not shadowed: layers step from Warm Ivory to Oat Surface to Pure Card, separated by hairline Dune borders. Type is a single Thai/Latin family (Anuphan) carrying the whole hierarchy through weight and size — a deliberate one-voice choice, not a timid one.

This system explicitly rejects three things (from PRODUCT.md's anti-references): the old Thai-government accounting look (navy blocks, dense text, stock handshake photos); the interchangeable purple-blue-gradient SaaS landing page; and over-decorated, high-color, badge-heavy layouts that trade legibility for busyness. When in doubt, remove, don't add.

**Key Characteristics:**
- Warm-ivory ground, near-black ink, exactly one accent (terracotta)
- Flat by default — depth from tonal layering + hairline borders, not shadow
- One type family, hierarchy by weight and size
- The accent behaves like a seal: rare, deliberate, load-bearing
- Bilingual-ready (Thai primary), Thai-legible line heights and spacing

## 2. Colors

A warm, low-chroma neutral field carrying one saturated terracotta — the closer a color sits to the accent, the more deliberately it must be spent.

### Primary
- **Terracotta Seal** (`#c96442`): The decorative face of the accent. Large fills, the pricing highlight border, the about-page timeline marker dots, the pill/CheckItem wash-adjacent surfaces, and input focus borders — anywhere the terracotta is a shape or hairline, not text. Passes the 3:1 UI-component floor but **not** 4.5:1, so it never carries text. It is the brand's signature; treat every use as spending a limited budget.
- **Terracotta Ink** (`#a34a24`): The accessible face of the same terracotta, deepened for legibility. Every place the accent carries **text or a text-bearing button fill**: CTA button fills (white on ink, 5.90:1), the hero pill and blog-tag text (on wash, 4.81:1), card "ดูรายละเอียด →" and blog "อ่านต่อ" links, inline links, required-field asterisks, and the CheckItem check-mark. Verified ≥4.5:1 on ivory, wash, and white. Same hue as the Seal — deeper reads as *more* authoritative for an audit brand, not less.

### Neutral
- **Near-Black Ink** (`#1f1e1d`): Primary text, headings, the primary/dark buttons, the dark CTA banner block, and the "CA" logo mark. This — not the accent — carries most of the visual weight.
- **Stone Gray** (`#63605b`): Secondary and supporting text (descriptions, nav-inactive, captions, footer copy). Verified accessible: ~5.95:1 on Warm Ivory, ~5.49:1 on Oat Surface — passes WCAG AA for body text. Do not lighten it further.
- **Warm Ivory** (`#faf9f5`): The page background. The default ground everything sits on.
- **Oat Surface** (`#f0eee6`): Tinted section bands (alternating rhythm), the footer, and hover fills on ghost controls (`hover:bg-surface`).
- **Pure Card** (`#ffffff`): Cards, form fields, and the contact form container — the lifted-by-tone layer above Ivory and Oat.
- **Dune Line** (`#e5e2d9`): All borders and dividers — card outlines, the sticky-header underline, footer rules, input strokes.
- **Terracotta Wash** (`#f5e5dd`): The soft tint of the accent — the hero pill background, the CheckItem chip circle, and any accent-adjacent surface that must stay quiet.

### Named Rules
**The One Seal Rule.** Terracotta appears on ≤10% of any given screen. Its rarity is the point: a stamp read a hundred times a page is no longer a stamp. If two terracotta elements compete in one viewport, one of them is wrong.

**The Ink-for-Text Rule.** The terracotta has two faces and they are not interchangeable. Text and text-bearing button fills use **Terracotta Ink** (`#a34a24`, ≥4.5:1); shapes, hairlines, and marker dots use **Terracotta Seal** (`#c96442`). Terracotta Seal never sits under body text or as a filled button with text on it — it fails 4.5:1. When in doubt, if a human reads words off it, it's Ink.

**The Ink-Carries-Weight Rule.** Emphasis and hierarchy come from Near-Black Ink and type weight first. Reaching for the accent to make something "pop" is almost always the wrong move — promote it in ink weight instead.

## 3. Typography

**Display / Body / Label Font:** Anuphan (Google Fonts; Thai + Latin; weights 400 / 500 / 600 / 700), with `'Segoe UI', sans-serif` fallback.

**Character:** One humanist sans covering the entire system. Anuphan is chosen for genuine Thai legibility (loopless, even color, comfortable at long paragraph lengths) while reading cleanly in Latin — the bilingual requirement makes a single well-drawn Thai/Latin family stronger than any display+body pair. Hierarchy is built from weight and size contrast, never from a second typeface.

### Hierarchy
- **Display** (600, `clamp(2.25rem, 5vw, 3.75rem)`, line-height 1.15, tracking -0.025em): Hero and page-title H1 only. `text-wrap: balance`.
- **Price** (600, `clamp(2rem, 4vw, 2.75rem)`, line-height 1.05, tracking -0.03em, `tabular-nums`): Utility `text-price`. **Numerals only, never a heading.** Reserved for the one amount that is the point of its block — the audit starting fee, a lead plan's price. It deliberately outranks Headline so a price never loses to the section title above it. Deeper in a table, prices step down to 1.25rem (`text-xl`).
- **Headline** (600, `clamp(1.5rem, 3vw, 1.875rem)`, line-height 1.25): Section H2.
- **Title** (600, 1.125rem, line-height 1.4): Card H3 and small block headings.
- **Body** (400, 0.9375–1.125rem, line-height 1.625): Paragraphs and supporting copy. Cap measure at 65–75ch (`max-w-2xl` / `max-w-3xl`). Use the larger 1.125rem for lead paragraphs under a hero, 0.9375rem for in-card and dense copy.
- **Label** (500, 0.875rem): Nav links, form field labels, button text.
- **Eyebrow** (600, 0.875rem, tracking 0.1em, UPPERCASE, terracotta): The single kicker above a page hero — see the Don'ts.

### Named Rules
**The One-Voice Rule.** Never introduce a second font family to create contrast. If a heading needs more presence, add weight or size, not a serif. The single-family discipline is the voice.

## 4. Elevation

This system is **flat by default**. Depth is communicated tonally, not with shadow: the surface steps up in three tones — Warm Ivory (ground) → Oat Surface (bands) → Pure Card (lifted) — with Dune Line hairlines marking edges. There is no ambient or resting shadow anywhere in the system. If a design starts leaning on drop-shadows to separate elements, the tonal layering has been skipped.

### Shadow Vocabulary
- **Hover lift** (`box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05)` — Tailwind `shadow-sm`): The only shadow in the system. Applied to interactive cards on `:hover` as a subtle response to pointer state, never at rest.
- **Sticky header veil** (`backdrop-filter: blur(12px)` over `background: rgb(250 249 245 / 0.9)`): Not a shadow but the one depth cue for the pinned header — a translucent Ivory veil so content scrolls under it legibly.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. A shadow is only ever a *response to state* (hover) — never decoration, never a resting elevation. If it looks like a 2014 material card with a soft drop-shadow at rest, delete the shadow and change the background tone instead.

## 5. Components

### Buttons
- **Shape:** Gently rounded (8px, `rounded-lg`) across every variant.
- **Primary:** Near-Black Ink fill, Warm Ivory text, padding 10px 20px. The default action.
- **Accent CTA:** Terracotta Ink fill (`#a34a24`), white text (5.90:1), padding 12px 24px. Reserved for the single most important conversion action on a page (the dark CTA banner button). Spend per the One Seal Rule.
- **Secondary / Ghost:** Pure Card fill with a Dune Line border, Ink text; `hover:bg-surface` (Oat). Used for the fallback action beside a primary.
- **Hover / Focus:** Filled buttons fade (`opacity: 0.85`) on hover; secondary shifts fill to Oat. Provide a visible `:focus-visible` ring in Terracotta Ink for keyboard users.

### Cards / Containers
- **Corner Style:** 16px (`rounded-2xl`).
- **Background:** Pure Card on an Ivory or Oat section.
- **Border:** 1px Dune Line — the primary separation, present at rest.
- **Shadow Strategy:** None at rest; `shadow-sm` on hover only for linked/interactive cards (see Elevation).
- **Internal Padding:** 24px (`p-6`); the contact form container uses 28px (`p-7`).
- Cards are used deliberately for the three-pillar and feature grids — not as a default wrapper. Never nest a card in a card.

### Inputs / Fields
- **Style:** Pure Card fill, 1px Dune Line stroke, 8px radius, padding 10px 16px. Applies uniformly to text inputs, `select`, and `textarea`.
- **Focus:** Border shifts to Terracotta Seal (`focus:border-accent`); no glow, no ring-shadow — a quiet, precise state change. Consider adding a matching `:focus-visible` outline for accessibility.
- **Label:** 0.875rem, weight 500, Ink; required fields marked with a terracotta asterisk.

### Navigation
- **Header:** Sticky, translucent Ivory (`bg-background/90` + `backdrop-blur`), 64px tall, Dune Line underline. Logo = Ink "CA" tile (8px radius) + short name.
- **Links:** Label type. Active route = weight 600 Ink; inactive = Stone Gray; `hover:bg-surface` pill fill (8px radius). Trailing "เข้าสู่ระบบ" (secondary button) + "ติดต่อเรา" (primary button).
- **Mobile:** Hamburger toggles a full-width panel below the bar; stacked links with the same hover fill; `aria-expanded` wired.

### CheckItem (signature)
A terracotta value-marker: a 20px Terracotta Wash circle holding a 1.6px-stroke Terracotta Seal check SVG, beside Stone Gray body text. This is the system's way of listing proof points ("ทำไมต้องเรา") — warm, quiet, unmistakably on-brand. Prefer it over generic bullet dots or icon rows.

### Hero Pill (signature)
A `rounded-full` Terracotta Wash chip with Terracotta Seal text (0.875rem, weight 500), holding the company tagline above the hero headline. One per page, at the top of the hero only.

### Plan Ledger (signature)
The system's answer to pricing — a **fee schedule, not a card grid**. `PlanLedger` / `PlanRow` in `components/ui.tsx`.

- **Structure:** a Pure Card container with a Dune Line hairline between rows. Each row is plan name + scope on the left, amount + unit right-aligned on the right, joined by a **dotted Dune Line leader** (an `h-0` span whose bottom border lands on the name's baseline).
- **Column discipline:** the `<ul>` owns `grid-template-columns`; each `<li>` re-enters it with `grid-cols-subgrid`. This is load-bearing, not stylistic — it is what makes the price column one shared width so digits align down the page. `tabular-nums` alone does not do this, because each row would otherwise measure itself. Free tiers keep the billing unit ("฿0 / เดือน") so their digits stay in the column.
- **Hierarchy inside a section:** one **lead plan** gets a full-width block above the ledger (Price type, a Terracotta Seal hairline border, CheckItem reasons, optionally the CTA); every other plan stays in the compact ledger. Emphasis comes from that contrast.
- **Never** express plans as a row of same-sized cards with a scaled-up "popular" one. That is the SaaS template PRODUCT.md rejects, and it collides with the identical-card-grid ban.

### Billing Toggle
A `rounded-full` Pure Card segmented control with a Dune Line border and a Near-Black Ink pill that slides on `transform` only (300ms, `cubic-bezier(0.22, 1, 0.36, 1)`). Label colors transition over the same 300ms so no label sits ivory-on-white while the pill travels. Wired as a `role="radiogroup"` with `aria-checked`. Amounts re-key on change and play `animate-price-in` (280ms rise + fade); both the slide and the rise are dropped under `prefers-reduced-motion: reduce`. This is the one moment of motion on the pricing page — it exists because it turns a footnote ("รายปีจ่ายเท่า 10 เดือน") into a visible mechanic, not for decoration.

## 6. Do's and Don'ts

### Do:
- **Do** keep terracotta to ≤10% of any screen (The One Seal Rule) — CTAs, marks, focus, check icons.
- **Do** use Terracotta Ink (`#a34a24`) for any accent that carries text or a text-bearing button fill; reserve Terracotta Seal (`#c96442`) for decorative shapes, hairline borders, and marker dots (The Ink-for-Text Rule).
- **Do** build hierarchy with Near-Black Ink and Anuphan weight/size before reaching for the accent.
- **Do** convey depth by stepping tone (Ivory → Oat → Pure Card) with 1px Dune Line hairlines, not shadow.
- **Do** keep body measure at 65–75ch and lean on Anuphan's Thai legibility (line-height ~1.625).
- **Do** use the CheckItem, Hero Pill, and Plan Ledger as the signature moments; prefer them over generic bullets, badges, and card grids.
- **Do** set the one amount a block is about in Price type — a price that reads smaller than the section heading above it has lost the page.
- **Do** provide a visible `:focus-visible` state (accent border/ring) on every interactive control.

### Don't:
- **Don't** make it look like a เว็บราชการ / old-Thai-accounting site: navy blocks, dense wall-to-wall text, stock handshake/suit photography. (PRODUCT.md anti-reference.)
- **Don't** drift toward the interchangeable SaaS landing page: purple-blue gradients, glowing hero, icon-card grids of identical tiles. (PRODUCT.md anti-reference.)
- **Don't** over-decorate — too many colors, badges, and labels until legibility drops and it stops reading as professional. (PRODUCT.md anti-reference.)
- **Don't** let the terracotta uppercase eyebrow become per-section scaffolding. One deliberate kicker on a hero is voice; the same tracked all-caps label above every section is AI grammar — choose a different cadence for lower sections.
- **Don't** use gradient text (`background-clip: text`), colored side-stripe borders (`border-left`>1px as an accent), or decorative glassmorphism — all forbidden.
- **Don't** add a resting drop-shadow to cards or surfaces; shadow is a hover response only (The Flat-By-Default Rule).
- **Don't** introduce a second font family; if something needs more presence, add weight or size (The One-Voice Rule).
- **Don't** turn plans into a row of identical cards with a scaled-up "popular" one, and don't bury the reasons to buy (free-trial terms, annual saving, early-access windows) in a gray footnote list. Use the Plan Ledger's lead-plan contrast instead.
- **Don't** lighten Stone Gray (`#63605b`) for "elegance" — it's at the AA floor already; go toward Ink instead.
- **Don't** put text — or a filled button with text on it — on Terracotta Seal (`#c96442`); it lands at ~3.2–3.9:1 and fails AA. Use Terracotta Ink (`#a34a24`) for anything readable.
