# Handoff: Puente — Marketing Landing Page (Waitlist)

## Overview
This is the pre-launch marketing/landing page for **Puente**, a financial product combining
**international remittances + a cash-secured credit card** aimed at immigrants / newcomers to the U.S.

The product **does not exist yet** — this page exists to **validate demand and collect waitlist
signups**. As a result, the copy makes **no specific reward/points promises** and only two concrete
claims: a **flat $5 remittance fee** and the **real (mid-market) exchange rate with no markup**.

The page is **bilingual (English / Spanish)** with a persistent language toggle, and has four
sections plus nav/footer:
1. **Hero** — positioning + dual CTA (Join waitlist / See how it works)
2. **Remittances** — an **interactive calculator** (type/drag an amount → see what arrives in MXN)
3. **Card** — the cash-secured card explainer ("Feels like debit. Works like credit.")
4. **Waitlist** — signup form with a **success state + referral/share** prompt

> The user already has a landing page in their codebase and wants to **replace it** with this design.

## About the Design Files
The files in this bundle are **design references created in HTML/React (via inline Babel)** —
prototypes showing the intended look and behavior. They are **not** meant to be copied into
production as-is (they rely on CDN React + Babel-in-the-browser, which you should not ship).

Your task is to **recreate this design in the target codebase's existing environment** using its
established patterns (component library, routing, styling solution, i18n framework, form/validation
libs). If the existing landing page is, say, Next.js + Tailwind, rebuild these sections as Next.js
components with Tailwind tokens mapped from the palette below. If there's no suitable environment,
choose the most appropriate framework for a marketing site and implement there.

Treat the HTML as the **source of truth for layout, spacing, copy, and interaction** — not for
framework choice or file structure.

## Fidelity
**High-fidelity.** Final colors, typography, spacing, copy, and interactions are all intended as
shown. Recreate pixel-faithfully using the codebase's own primitives. The only "placeholder" values
are the illustrative FX rate (`17.20 MXN/USD`) and the fact that the form is front-end only (see
**State Management**).

---

## Design Tokens

All tokens live in `brand.css` under `:root`. Map these into the codebase's token system.

### Colors
| Token | Hex | Use |
|---|---|---|
| `--cream` | `#F6F4EB` | Page background (light theme) |
| `--cream-2` | `#FBFAF3` | Subtle raised background / inputs |
| `--surface` | `#FFFFFF` | Cards |
| `--sol` | `#FFD23D` | **Primary** (yellow) — main CTA buttons |
| `--sol-ink` | `#1C1710` | Text on yellow |
| `--mar` | `#0FB1AC` | Teal — accents, announce bar, receive amount |
| `--mar-700` | `#0B8C88` | Teal dark — eyebrows, notes |
| `--mar-900` | `#0E4D49` | Teal deepest — calculator output |
| `--cielo` | `#2C79C2` | Sky blue accent |
| `--coral` | `#F0703F` | Coral pop accent |
| `--ink` | `#15211F` | Primary text / dark sections |
| `--ink-2` | `#33403D` | Secondary text |
| `--muted` | `#6F7E7B` | Tertiary text, mono labels |
| `--line` | `#E4E6DC` | Borders |
| `--line-2` | `#EEEDE3` | Subtle borders |

### Typography
- **Display/UI font:** `Space Grotesk` (weights 400/500/600/700) — `--font`
- **Mono font:** `Space Mono` (400/700) — `--mono`, used for eyebrows, labels, numbers, fine print
- Load both from Google Fonts (or self-host).

| Class | size / line-height / spacing | weight |
|---|---|---|
| `.h1` | `clamp(40px,5.2vw,68px)` / 1.02 / `-.025em` | 700 |
| `.h2` | `clamp(28px,3.4vw,44px)` / 1.06 / `-.02em` | 700 |
| `.h3` | `22px` / 1.15 / `-.01em` | 700 |
| `.lede` | `clamp(17px,1.4vw,20px)` / 1.55, color `--ink-2` | 400 |
| `.eyebrow` | `12px`, `letter-spacing .18em`, UPPERCASE, mono, color `--mar-700` | 700 |

### Radius / Shadow / Layout
- `--radius: 18px`, `--radius-lg: 26px`, pills use `999px`
- `--shadow-sm`, `--shadow`, `--shadow-lg` (see `brand.css` for exact values)
- `--maxw: 1200px` (content max width, centered)
- Breakpoint: single `@media (max-width:900px)` collapses all 2-col grids to 1 col and hides `.nav-links`.

### Buttons (`.btn`)
- Base: inline-flex, gap 10px, `font-weight 600`, `padding 15px 24px`, `border-radius 999px`,
  transitions on transform/shadow. `.btn--sm` = `padding 11px 18px; font-size 14px`.
- `.btn--sol` — yellow bg, `--sol-ink` text, glow shadow `0 8px 20px rgba(255,210,61,.45)`; hover lifts `-2px`.
- `.btn--ink` — ink bg, cream text.
- `.btn--ghost` — transparent, `--line` border; hover border → ink.

---

## Screens / Views

There is **one page**, scrolled, with anchored sections (`#remittances`, `#card`, `#waitlist`).
Smooth scroll + `scroll-margin-top:96px` so anchors clear the sticky nav.

### 0. Announcement bar (`.announce`)
- Full-width teal (`--mar`) bar, text `#04312f`, mono 12.5px/700.
- Content: `"Early access is open."` + underlined link `"Join the waitlist"` → `#waitlist` with a small arrow icon.

### 1. Nav (`.nav` / `.nav-inner`)
- Sticky top, max-width 1200, contains: **Logo** (left), center links (`Remittances`, `Card`),
  right cluster = **ES/EN toggle** + `.btn--sol.btn--sm` "Join waitlist".
- `.nav-links` hidden under 900px.

### 2. Hero (`<header class="hero">` / `.hero-inner`)
- 2-col grid (copy left, visual right), collapses to 1 col under 900px.
- **Copy column** (`.hero-copy`), top→bottom:
  - `.eyebrow` — "Credit card + remittances"
  - `.h1` — three stacked lines, each a `<span style="display:block">`, with the **second word
    colored**: line1 word2 = `--mar-700`, line2 word2 = `--cielo`, line3 word2 = `--coral`.
    EN: "Send **money.**" / "Build **credit.**" / "Earn **rewards.**"
  - `.lede` — subhead paragraph
  - `.hero-cta` — `.btn--sol` "Join the waitlist" + `.btn--ghost` "See how it works →"
  - `.hero-elig` — teal-tinted pill: a small `ID` chip + "No SSN required — start with your passport or government ID."
  - `.hero-note` — three inline items with colored dots: "$5 flat fee" / "Real exchange rate" / "Built for newcomers"
- **Visual column** (`.hero-visual`): two soft background **blobs**, a **PhoneApp** mock, and a
  **CreditCard** (`variant="sol"`) absolutely positioned bottom-right, rotated `-9deg`, width 300px, z-index 3.
  (Both components defined in `brand-ui.jsx` — recreate as static visuals or use your own product imagery.)

### 3. Remittances — interactive calculator (`#remittances`, `.section--cream`)
- `.feature` 2-col grid: copy left, **calculator** right.
- Copy: eyebrow "Remittances", h2, lede about flat $5 + real rate.
- **Calculator** (`.calc` card, max-width 430px, white, `--shadow`):
  - `.calc-to` row — Mexico flag dot + "Mexico" + uppercase mono label "Sending to"
  - `.calc-amt` "You send" — `$` + **numeric input** (`.calc-input`, mono 30px/700), clamped 0–50000; right side mono "USD" with blue pip
  - `.calc-slider` — range 20–2000 step 10, `accent-color: --mar`, two-way bound to the input
  - `.chips` — quick-amount buttons `$100 / $200 / $500 / $1000`; active chip = ink bg
  - `.calc-rate` — centered "1 USD = 17.20 MXN" between hairlines
  - `.calc-amt--rcv` "They receive" — teal-tinted, mono 30px output = `round(amount × 17.20)` formatted with thousands separators; "MXN" with teal pip
  - `.calc-foot` — "Fee **$5.00 flat**" (left) and "Total to pay **$\<amount+5\>**" (right)
  - `.calc-note` — teal "Real mid-market rate · no markup"
  - `.btn--sol` full-width "Join the waitlist" → `#waitlist`

### 4. Card (`#card`, `.section--surface`)
- `.feature.feature--flip` — visual **left**, copy right (flips to stacked under 900px).
- Visual: **CreditCard** `variant="ink"`, rotated `4deg`, width 420px.
- Copy:
  - eyebrow "The card"
  - `.h2` two lines: "Feels like **debit.**" (debit colored `--cielo`) / "Works like **credit.**" (credit colored `--coral`)
  - `.lede`
  - `.ticks` list — 3 bullets, each with a `✓` tick chip:
    1. "Build U.S. credit history — your everyday spending counts toward it."
    2. "Cash-secured: no credit check, and no debt to fall into."
    3. "Earn rewards on the things you buy every day."
  - `.need` — dashed-border note box: card icon + **"What you'll need"** (uppercase mono) +
    "A passport or government ID and a U.S. address. No SSN required to start."
  - `.btn--sol` "Join the waitlist"

### 5. Waitlist (`#waitlist`, `.waitlist` — dark ink section)
- 2-col grid (`.wl-inner`): copy left, form card right.
- **Copy** (`.wl-copy`): eyebrow (yellow `--sol`), h2 "Be first in line.", lede, and a
  `.wl-trustline` list of 3 ticked points: "A spot the day we launch" / "Founding-member perks" / "Help shape the product".
- **Form** (`.wl-card` white card, `.wl-form`):
  - Full name (text, required)
  - Phone (tel) + Email (email) — side by side (`.field-row`)
  - Country you send to (select: Mexico / Other) + How much do you send each month? (select) — side by side
  - Current remittance provider (select: Western Union / Remitly / Félix / MoneyGram / Bank transfer / I don't send yet / Other)
  - `.btn--sol` submit "Join the waitlist"
  - `.wl-fine` — "Puente is in early validation and not yet available…"
- Field labels are uppercase mono 10.5px; inputs `--cream-2` bg, `1.5px --line` border, focus border → `--mar` + white bg.

### Footer (`.footer`, dark)
- Logo + tagline left; ES/EN toggle + "Join waitlist" button right.
- Bottom row: "© 2026 Puente Financial, Inc. · Concept in validation — not yet available." + current language name.

---

## Interactions & Behavior

### Language toggle (EN / ES)
- Two pill buttons (`.lang button`); active one = ink bg + cream text.
- Switching swaps **all** page copy from the `COPY` dictionary (see `landing-copy.jsx`) and persists
  the choice to `localStorage` key `puente-lang` (default `en`). Appears in both nav and footer.
- **i18n:** in the real codebase, move the `COPY` object into your i18n framework (next-intl,
  react-i18next, etc.). The full EN + ES strings are in `landing-copy.jsx` — reuse them verbatim.

### Calculator
- Input, slider, and chips are all bound to a single `amount` state.
  - Typing clamps to 0–50000. Slider range 20–2000. Chips set exact values and highlight when matched.
  - **Receive** = `Math.round(amount × 17.20)`, formatted `en-US` no decimals.
  - **Total** = `amount + 5`, formatted with 2 decimals.
- `17.20` and the `$5` fee are constants (`RATE`, `FEE` in `landing-web.jsx`). In production, pull the
  rate from your FX source (or show a "rates update live" disclaimer) and keep the fee configurable.

### Waitlist form → success + referral
- On submit (prevent default): validate required fields, then swap the card to a **success state**:
  - Teal check circle, "You're on the list!", body copy.
  - **Referral block:** a generated invite link `puente.com/r/<firstname-slug>` (lowercased first
    name, non-alphanumerics stripped, fallback `amigo`), a read-only input, a **Copy** button
    (uses `navigator.clipboard`, shows "Copied!" for ~1.6s), and a **WhatsApp share** button
    (`https://wa.me/?text=<encoded message + link>`, opens new tab).
- Hover/focus: buttons lift `-2px`; inputs change border to teal on focus.

### Responsive
- Single breakpoint at **900px**: all 2-col grids → 1 col; calculator goes full-width; `.field-row`
  stacks; nav center links hide; waitlist padding reduces.

---

## State Management
- `lang`: `'en' | 'es'`, persisted to `localStorage['puente-lang']`.
- Calculator `amount`: number (controlled by input/slider/chips).
- Form: `done` (boolean — toggles success view), `name` (for referral slug), `copied` (transient).
- **Data:** the form is **front-end only** in the prototype — submitting just flips to the success
  state. In production, wire submission to your signup endpoint / email tool (e.g. capture name,
  phone, email, country, monthly amount, current provider) before showing success. Add real
  validation (email format, phone format) per your stack.

## Assets
- **Fonts:** Space Grotesk + Space Mono (Google Fonts).
- **`favicon.svg`** — the Puente arch mark (ink arch on a yellow `#FFD23D` rounded tile). Ship at site
  root; referenced via `<link rel="icon" type="image/svg+xml">` + `apple-touch-icon`. Generate .ico/PNG
  fallbacks (16/32/180/512) from it if you need legacy/PWA support.
- **`og-image.png`** — 1200×630 social link-preview image. Ship at site root.
- **Social meta tags** are already wired into `Puente - Web Landing.html` `<head>` (Open Graph +
  Twitter). **Swap `https://puente.com` for the live domain** so `og:url` / `og:image` resolve to
  absolute URLs — social platforms will not render a relative image path.
- **Logo, PhoneApp, CreditCard:** CSS/SVG components in `brand-ui.jsx` — no external image files.
  Recreate as components, or swap in real product renders/photography if available.
- **Flag / icons:** inline SVG + CSS (Mexico flag is a 3-stripe CSS dot; checkmarks/arrows are inline SVG).

## Files
Design reference files included in this bundle:
- `Puente - Web Landing.html` — entry point (loads React/Babel via CDN + the JSX files below)
- `brand.css` — **all design tokens + component styles** (the most important file to port)
- `landing-web.jsx` — page structure, calculator, and waitlist form logic
- `landing-copy.jsx` — the full **bilingual copy dictionary** (EN + ES) — reuse strings verbatim
- `brand-ui.jsx` — shared brand components (Logo, PhoneApp, CreditCard, etc.)

To preview the reference locally, open `Puente - Web Landing.html` in a browser (it's self-contained
via CDN scripts). Use it to verify spacing, colors, and interactions as you rebuild.
