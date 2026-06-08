# Handoff: Puente — Marketing Landing Page (Waitlist)

## Overview
This is the pre-launch marketing/landing page for **Puente**, a **remittance platform** for
immigrants / newcomers to the U.S. whose core value prop is: **send money home, and build U.S.
credit history by doing it.** There is **no credit card** — credit is built from the user's
on-time payments, which Puente reports to the credit bureaus on their behalf.

The product **does not exist yet** — this page exists to **validate demand and collect waitlist
signups / customer conversations**. The copy makes **no specific score promises** and keeps the
credit mechanism deliberately high-level (see *Messaging guardrails* below). The two concrete
remittance claims are a **flat $5 fee** and the **real (mid-market) exchange rate with no markup**.

The page is **bilingual (English / Spanish)** with a persistent language toggle, and has four
sections plus nav/footer:
1. **Hero** — positioning (two pillars: *Send money. Build credit.*) + dual CTA
2. **Remittances** — an **interactive calculator** (type/drag an amount → see what arrives in MXN)
3. **How it works** — 3-step explainer of how remittances build credit + a privacy callout + eligibility
4. **Sign up** — a centered CTA block (the actual signup is handled by the team's own flow; see below)

> This replaces the previous card-centric version. Anything referencing a "credit card", "rewards",
> "cashback", or "cash-secured" is **out of date** — the product is remittances + credit-building only.

## Messaging guardrails (important for any copy changes)
- **Lead with the outcome, not the mechanism.** Hero says *what* (build credit by sending money), not *how*.
- **Explain the mechanism once, plainly** — only in *How it works*, as: send → Puente reports your
  on-time payments to the U.S. credit bureaus → your credit history grows. **Do not** specify the
  underlying funding mechanism (it is intentionally abstracted and still being finalized).
- **Never over-promise** (no "+X points", no guaranteed approval).
- **Privacy is a feature:** Puente never stores or reports the user's documentation, legal, or
  immigration status. This line must stay.
- **Eligibility:** "Works with your ITIN or SSN."

## About the Design Files
The files in this bundle are **design references created in HTML/React (via inline Babel)** —
prototypes showing the intended look and behavior. They are **not** meant to be copied into
production as-is (they rely on CDN React + Babel-in-the-browser, which you should not ship).

Your task is to **recreate this design in the target codebase's existing environment** using its
established patterns (component library, routing, styling solution, i18n framework, analytics). If
the existing site is, say, Next.js + Tailwind, rebuild these sections as components with Tailwind
tokens mapped from the palette below. If there's no suitable environment, choose the most
appropriate framework for a marketing site and implement there.

Treat the HTML as the **source of truth for layout, spacing, copy, and interaction** — not for
framework choice or file structure.

## Fidelity
**High-fidelity.** Final colors, typography, spacing, copy, and interactions are all intended as
shown. Recreate pixel-faithfully using the codebase's own primitives. The only "placeholder" values
are the illustrative FX rate (`17.20 MXN/USD`) and the fact that the prototype's CTA does not itself
capture data (see **State Management / Signup**).

---

## Design Tokens

All tokens live in `brand.css` under `:root`. Map these into the codebase's token system.

### Colors
| Token | Hex | Use |
|---|---|---|
| `--cream` | `#F6F4EB` | Page background (light theme); hero + How-it-works sections |
| `--cream-2` | `#FBFAF3` | Subtle raised background / inputs |
| `--surface` | `#FFFFFF` | Cards (calculator, How-it-works step cards) |
| `--mist` | `#E8F4F1` | **Soft teal section wash** (a light tint of `--mar`) — Remittances section bg |
| `--sol` | `#FFD23D` | **Primary** (yellow) — main CTA buttons |
| `--sol-ink` | `#1C1710` | Text on yellow |
| `--mar` | `#0FB1AC` | Teal — accents, announce bar, receive amount, privacy callout |
| `--mar-700` | `#0B8C88` | Teal dark — eyebrows, notes, How-it-works h2 accent |
| `--mar-900` | `#0E4D49` | Teal deepest — calculator output |
| `--cielo` | `#2C79C2` | Sky blue accent |
| `--coral` | `#F0703F` | Coral pop accent (hero "credit.", step 3 number badge) |
| `--ink` | `#15211F` | Primary text / dark sections (Sign up, footer) |
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
- Breakpoints: `@media (max-width:900px)` collapses 2-col grids to 1 col and hides `.nav-links`;
  `@media (max-width:860px)` collapses the How-it-works 3-col steps + 2-col foot to single column.

### Section background rhythm
Sections deliberately alternate so no two neighbors share a background:
`hero (--cream)` → `Remittances (--mist)` → `How it works (--cream)` → `Sign up (--ink, dark)`.

### Buttons (`.btn`)
- Base: inline-flex, gap 10px, `font-weight 600`, `padding 15px 24px`, `border-radius 999px`,
  transitions on transform/shadow. `.btn--sm` = `padding 11px 18px; font-size 14px`.
- `.btn--sol` — yellow bg, `--sol-ink` text, glow shadow `0 8px 20px rgba(255,210,61,.45)`; hover lifts `-2px`.
- `.btn--ink` — ink bg, cream text.
- `.btn--ghost` — transparent, `--line` border; hover border → ink.

---

## Screens / Views

One page, scrolled, with anchored sections (`#remittances`, `#how`, `#waitlist`).
Smooth scroll + `scroll-margin-top:96px` so anchors clear the sticky nav.

### 0. Announcement bar (`.announce`)
- Full-width teal (`--mar`) bar, text `#04312f`, mono 12.5px/700.
- Content: `"Early access is open."` + underlined link `"Sign up"` → `#waitlist` with a small arrow icon.

### 1. Nav (`.nav` / `.nav-inner`)
- Sticky top, max-width 1200. Logo (left), center links (`Remittances`, `How it works` → `#how`),
  right cluster = **ES/EN toggle** + `.btn--sol.btn--sm` "Sign up".
- `.nav-links` hidden under 900px.

### 2. Hero (`<header class="hero">` / `.hero-inner`) — bg `--cream`
- 2-col grid (copy left, visual right), collapses to 1 col under 900px.
- **Copy column** (`.hero-copy`), top→bottom:
  - `.eyebrow` — "Remittances + credit building"
  - `.h1` — **two** stacked lines, each `<span style="display:block">`, **second word colored**:
    line1 word2 = `--mar-700`, line2 word2 = `--coral`.
    EN: "Send **money.**" / "Build **credit.**"
  - `.lede` — "Send money home — and build your U.S. credit history with every payment you make.
    One app, built for newcomers." (Note: **no fee** is mentioned in the hero on purpose.)
  - `.hero-cta` — `.btn--sol` "Sign up" + `.btn--ghost` "See how it works →" (→ `#remittances`)
  - `.hero-elig` — teal-tinted pill: a small `ID` chip + "Works with your ITIN or SSN."
  - `.hero-note` — three inline items with colored dots: "$5 flat fee" / "Real exchange rate" / "Built for newcomers"
- **Visual column** (`.hero-visual`, height 580px): two soft background **blobs** + a **CreditPhone**
  mock (defined in `brand-ui.jsx`, styled via `.cphone*` in `brand.css`). This is the centerpiece —
  a phone screen that shows **both** halves of the value prop at once:
  - A dark-teal **credit-score card** (`--mar-900` bg) with an uppercase mono label, a large score
    (**712**), a sol-yellow **▲ +132** delta pill, and a **rising line/area trend graph** (sol stroke,
    faint sol gradient fill, highlighted end node).
  - A **"Your remittances"** list (`t.phone.sends`) of outgoing transfers — recipient, "Reported on
    time · bureau", the amount (e.g. `−$200`), and a teal **✓ on time** tag — under a "Each one counts ↑" note.
  - A full-width **"Send money"** sol button.
  - **All copy is bilingual via `COPY[lang].phone`** (greeting, name, scoreLabel, delta, remitLabel,
    remitNote, reported, onTime, `sends[]`, cta). The **712 / +132 score is illustrative** (an example
    product shot, not a promise) — keep it clearly aspirational; do not present it as a guaranteed outcome.
  - Recreate as a static visual, or wire it to live app data / swap in a real product render.

### 3. Remittances — interactive calculator (`#remittances`, `.section--mist`)
- `.feature` 2-col grid: copy left, **calculator** right.
- Copy: eyebrow "Remittances", h2 "Money home, the moment you tap send.", lede about flat $5 + real
  rate + the fact that each transfer also builds U.S. credit history.
- **Calculator** (`.calc` card, max-width 430px, white, `--shadow` — pops against the mist bg):
  - `.calc-to` row — Mexico flag dot + "Mexico" + uppercase mono label "Sending to"
  - `.calc-amt` "You send" — `$` + **numeric input** (`.calc-input`, mono 30px/700), clamped 0–50000; right side mono "USD" with blue pip
  - `.calc-slider` — range 20–2000 step 10, `accent-color: --mar`, two-way bound to the input
  - `.chips` — quick-amount buttons `$100 / $200 / $500 / $1000`; active chip = ink bg
  - `.calc-rate` — centered "1 USD = 17.20 MXN" between hairlines
  - `.calc-amt--rcv` "They receive" — teal-tinted, mono 30px output = `round(amount × 17.20)` with thousands separators; "MXN" with teal pip
  - `.calc-foot` — "Fee **$5.00 flat**" (left) and "Total to pay **$\<amount+5\>**" (right)
  - `.calc-note` — teal "Real mid-market rate · no markup"
  - `.btn--sol` full-width "Sign up" → `#waitlist`

### 4. How it works (`#how`, `.section--cream`)
- **Header** (`.how-head`, max-width 660): eyebrow "How it works", `.h2` "Build credit **without
  thinking about it.**" (second clause colored `--mar-700`), `.lede` intro.
- **Steps** (`.how-steps`, 3-col grid, gap 24, collapses to 1 col under 860px). Each `.how-step` is a
  **white card** (`--surface`, `--shadow-sm`, `--radius-lg`) with a circular **number badge**
  (`.how-num`, 46px, mono 700) in a sequenced color, an `.h3` title, and a body paragraph. A small
  CSS chevron connects cards on desktop (`.how-step:not(:last-child)::after`).
  - Badge colors: **1** = `--sol` (ink text), **2** = `--mar` (white), **3** = `--coral` (white).
  - Step 1 — "Send money home" / "Send like you always do — $5 flat, at the real exchange rate, arriving in seconds."
  - Step 2 — "We report your on-time payments" / "Puente reports your payments to the major U.S. credit bureaus on your behalf."
  - Step 3 — "Your credit history grows" / "On-time payments build a stronger U.S. credit profile over time — no card, no debt."
- **Foot** (`.how-foot`, 2-col grid `1.5fr 1fr`, collapses under 860px):
  - `.how-privacy` (left) — teal-tinted callout (`rgba(15,177,172,.07)` bg, teal border) with a
    **lock icon** chip, bold title **"Your status stays private"**, and body: "We never store or
    report your documentation, legal, or immigration status. Your credit-building is based on your
    payments — nothing else." **(Keep this verbatim — it's a core trust message.)**
  - `.how-side` (right) — a white `.need` box (ID/card icon + uppercase mono **"What you'll need"** +
    "An ITIN or SSN and a U.S. address. That's it.") above a `.btn--sol` "Sign up".

### 5. Sign up (`#waitlist`, `.waitlist` — dark `--ink` section)
- Centered single column (`.wl-inner` overridden to `grid-template-columns:1fr`, centered).
- `.wl-copy`: eyebrow (yellow `--sol`) "Waitlist", `.h2` "Sign up today", `.lede`, a `.wl-trustline`
  list of 3 ticked points ("A spot the day we launch" / "Founding-member perks" / "Help shape the
  product"), and a `.btn--sol` "Sign up".
- **No inline form.** In the prototype this CTA is the end of the funnel; the team handles the
  actual signup capture via their own flow/endpoint. See **State Management / Signup**.
  - *(Note: a fully-built `WaitlistForm` component — name/phone/email + country, monthly amount,
    current provider, plus a success + referral/WhatsApp-share state — still exists in
    `landing-web.jsx` but is **not rendered**. It's there if you ever want to embed capture directly;
    otherwise ignore it.)*

### Footer (`.footer`, dark)
- Logo + tagline left ("Send money home and build U.S. credit doing it. One app, built for our
  community."); ES/EN toggle + "Sign up" button right.
- Bottom row: "© 2026 Puente Financial, Inc. · Concept in validation — not yet available." + current language name.

---

## Interactions & Behavior

### Language toggle (EN / ES)
- Two pill buttons (`.lang button`); active one = ink bg + cream text.
- Switching swaps **all** page copy from the `COPY` dictionary (`landing-copy.jsx`) and persists the
  choice to `localStorage` key `puente-lang` (default `en`). Appears in nav and footer.
- **i18n:** in the real codebase, move the `COPY` object into your i18n framework (next-intl,
  react-i18next, etc.). The full EN + ES strings are in `landing-copy.jsx` — reuse them verbatim.

### Calculator
- Input, slider, and chips are all bound to a single `amount` state.
  - Typing clamps to 0–50000. Slider range 20–2000. Chips set exact values and highlight when matched.
  - **Receive** = `Math.round(amount × 17.20)`, formatted `en-US` no decimals.
  - **Total** = `amount + 5`, formatted with 2 decimals.
- `17.20` (`RATE`) and the `$5` fee (`FEE`) are constants in `landing-web.jsx`. In production, pull the
  rate from your FX source (or show a "rates update live" disclaimer) and keep the fee configurable.

### Responsive
- `900px`: 2-col grids → 1 col; calculator full-width; nav center links hide.
- `860px`: How-it-works steps and foot collapse to single column; step connector chevrons hide.

---

## State Management
- `lang`: `'en' | 'es'`, persisted to `localStorage['puente-lang']`.
- Calculator `amount`: number (controlled by input/slider/chips).

### Signup
- The prototype's "Sign up" buttons are anchors to `#waitlist`; **data capture is handled by the
  team's existing signup flow**, not by this page. When implementing, wire each "Sign up" CTA to that
  flow (route, modal, or embedded form) and fire your analytics/conversion event. Good qualifying
  fields to capture if you build your own form: name, phone, email, country sent to, monthly amount,
  current provider (these mirror the unused `WaitlistForm`).

## Assets
- **Fonts:** Space Grotesk + Space Mono (Google Fonts).
- **`favicon.svg`** — the Puente arch mark (ink arch on a yellow `#FFD23D` rounded tile). Ship at site
  root; referenced via `<link rel="icon" type="image/svg+xml">` + `apple-touch-icon`. Generate .ico/PNG
  fallbacks (16/32/180/512) if you need legacy/PWA support.
- **`og-image.png`** — 1200×630 social link-preview image. Ship at site root. ⚠️ This image and the
  `<head>` social meta still carry **older card-era wording** ("The credit card for immigrants…") —
  **regenerate/rewrite them** to match the remittance-first positioning before launch.
- **Social meta tags** live in `Puente - Web Landing.html` `<head>` (Open Graph + Twitter). **Swap
  `https://puente.com` for the live domain** so `og:url` / `og:image` resolve to absolute URLs, and
  update the title/description copy to the remittance-first messaging.
- **Logo, CreditPhone:** CSS/SVG components in `brand-ui.jsx` — no external image files. The hero
  `CreditPhone` (score graph + remittance list) is the key visual; recreate as a component, wire to real
  app data, or swap in a product render. (`PhoneApp`, `CreditCard`, and `SendWidget` also live in that
  file but the web landing no longer uses them.)
- **Flag / icons:** inline SVG + CSS (Mexico flag is a 3-stripe CSS dot; checks/arrows/lock are inline SVG).

## Files
Design reference files included in this bundle:
- `Puente - Web Landing.html` — entry point (loads React/Babel via CDN + the JSX files below)
- `brand.css` — **all design tokens + component styles** (the most important file to port)
- `landing-web.jsx` — page structure, calculator, and the (unused) waitlist-form logic
- `landing-copy.jsx` — the full **bilingual copy dictionary** (EN + ES) — reuse strings verbatim
- `brand-ui.jsx` — shared brand components (Logo, **CreditPhone** = the hero score-graph + remittances visual, etc.)
- `favicon.svg`, `og-image.png` — site assets (see notes above re: regenerating the OG image)

To preview the reference locally, open `Puente - Web Landing.html` in a browser (it's self-contained
via CDN scripts). Use it to verify spacing, colors, and interactions as you rebuild.
