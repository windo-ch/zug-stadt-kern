# SVP Stadt Zug Website Refresh Plan

## Core Constraints
- Keep: "Mir lieferet – für eusi Stadt Zug"
- Keep: Existing SVP colors and typography
- Keep: Images (client provides)
- Approach: Mobile-first

## Current Site Architecture (Actual Structure)

### HOME (Index.tsx)
- Hero (Tagline + CTAs + Stats)
- NewsSection ("Was ansteht" - Latest 4 items)
- ValuesSection (6 Pillars - currently displayed as cards)
- OverviewSection (Quick links + Stats)
- WasAnstehtSection (Top 3 upcoming items)
- ContactSection (Form + Contact Info)

### WER WIR SIND (WerWirSind.tsx)
- Statistics (200+ Mitglieder, 30+ Jahre, 1 Stadtpräsident)
- Party Values (3 cards: Bürgernähe, Lösungsorientiert, Gemeinschaftlich)
- Kantonsebene (Gregor R. Bruhin - Kantonsrat)
- Kommissionen (Daniel Gramm Schneider, Raphael Tschan)
- Weitere Parteimitglieder (10+ members listed)

### VORSTAND (Vorstand.tsx)
- 6 Vorstandsmitglieder with photos:
  - Adrian Risi (Präsident, Kantonsrat)
  - Raphael Tschan (Vizepräsident, RPK)
  - Roman Küng (Vizepräsident & GGR Fraktionspräsident)
  - Philip C. Brunner (Kantonsrat, Fraktionspräsident, Gemeinderat)
  - André Wicki (Stadtpräsident)
  - Marcus H. Bühler

### STADRAT (Stadtrat.tsx)
- Stadtrat/Exekutive: André Wicki (Stadtpräsident)
- Grosser Gemeinderat (Legislative):
  - Fraktionschef: Roman Küng
  - 4 weitere Gemeinderäte: Philip C. Brunner, Marcus Bühler, René Gretener, Manfred Pirchler

### WOFÜR WIR STEHEN (WofuerWirStehen.tsx)
- 6 Core Values:
  1. Sicherheit & Ordnung
  2. Tradition & Heimat
  3. Bürgernähe & Demokratie
  4. Wirtschaft & Innovation
  5. Stadtentwicklung & Infrastruktur
  6. Umwelt & Nachhaltigkeit

### KONTAKT (Kontakt.tsx)
- Contact form with category selection
- Contact info: sekretariat@svp-zug.ch, 079 329 13 33 (Roman Küng)
- Address: SVP Stadt Zug, Postfach, 6300 Zug

## Section-by-Section Specifications

### 1. Hero Section (Current: HeroSection.tsx)

**Current State:**
- Video background with controls ✅
- Tagline with green gradient ✅
- 2 CTAs: "Mitmachen" and "Unsere Ziele" ✅
- 4 Stats: 33 Jahre, 200+ Mitglieder, 8 Sitze, 25% Wähleranteil ✅

**Recommended Updates:**
- Keep video background (already implemented)
- Ensure mobile-first layout (60vh on mobile, full-screen on desktop)
- Add count-up animation on scroll for stats

### 2. "Wer mir sind" Section (NEW - Priority)

**Current State:** 
No dedicated people section on homepage. People data exists in:
- Vorstand page: 6 people with photos
- Stadtrat page: 1 Stadtrat + 5 Gemeinderäte
- WerWirSind page: Various members

**Recommended Implementation:**
Create new `PeopleSection` component for homepage showing:
- **Vorstand** (3-4 key people): Adrian Risi, Raphael Tschan, Roman Küng, André Wicki
- **Stadtrat**: André Wicki (Stadtpräsident)
- **GGR-Fraktion**: Roman Küng (Fraktionschef) + 1-2 others
- Link to full "Wer wir sind" page

**Card Specifications:**
- Square photo (1:1 ratio)
- Name (bold)
- Role/Position (light)
- Link to individual profile pages (already exist: /profil/adrian-risi, etc.)
- Optional: One-line quote on hover/tap

**Categories to Show:**
- Vorstand (3-4 people)
- Stadtrat (1 person)
- GGR-Fraktion (2-3 people)

### 3. "Wofür mir stönd" (6 Pillars)

**Current State:** 
- ValuesSection.tsx shows 6 values as cards (non-expandable)
- WofuerWirStehen.tsx shows same 6 with expandable details

**Current 6 Pillars:**
1. Sicherheit und Ordnung
2. Tiefe Abgaben, starke Wirtschaft
3. Geordnete Zuwanderung
4. Freiheit und Eigenverantwortung
5. Solide Finanzen
6. Lebenswerte Quartiere

**Recommended Updates:**
- Convert homepage ValuesSection to accordion-style (expandable on tap)
- Keep current content but make it interactive
- Use icons from current implementation
- Mobile: Tap to expand with full position text
- Desktop: Hover or click to expand
- Keep content scannable

### 4. Zahlen & Fakten (Stats)

**Current State:** 
- HeroSection shows: 33 Jahre, 200+ Mitglieder, 8 Sitze, 25% Wähleranteil
- OverviewSection shows: 33 Jahre, 200+ Mitglieder, 47 Vorstösse, 78% Erfolgsquote

**Recommended:**
- Consolidate stats (avoid duplication)
- Add count-up animation on scroll into view
- Keep: 33 Jahre, 200+ Mitglieder, 8 Sitze im GGR
- Simple, no decoration

### 5. News Section

**Current State:** NewsSection.tsx shows "Was ansteht" with 4 items

**Recommended Updates:**
- Add images to news cards (16:9 ratio)
- Show date prominently (small, muted)
- Limit to 3 items on homepage
- Title (bold, 2 lines max)
- No excerpt on mobile
- Clear tap target
- "Alli News →" link to /was-ansteht

### 6. Mitmachen (Engagement)

**Current State:**
- Separate pages: /mitglied-werden, /spenden, /1000er-club
- ContactSection on homepage

**Recommended:**
- Add engagement section on homepage with 4 cards:
  - 🤝 Mitglied werden → /mitglied-werden
  - 📢 Bi Aktione helfe → Contact form or volunteer form
  - 💵 Spende → /spenden
  - 🏆 1000er-Club → /1000er-club
- Each button leads to:
  - Simple form (max 4 fields)
  - Or direct action (payment link)

### 7. Kontakt & Footer

**Current State:**
- ContactSection with form
- Footer with navigation, SVP Kanton links, legal

**Recommended Updates:**
- Add social links (Instagram, Facebook) - currently placeholder
- Keep contact info: sekretariat@svp-zug.ch, 079 329 13 33
- Show Instagram feed if exists (keep but make lighter/faster)

## Mobile-First Technical Specs

| Element | Mobile | Desktop |
|---------|--------|---------|
| Nav | Hamburger menu | Horizontal nav |
| Hero image | Full-bleed, 60vh | Background with overlay |
| Grid | 1-2 columns | 3-4 columns |
| Touch targets | Min 44px | Standard |
| Font size body | 16px min | 16-18px |
| Spacing | 16px / 24px | 24px / 48px |

## Engagement Additions

- Social Proof
  - Show Instagram feed (already have this, keep it)
  - Add member testimonials (optional)

## Remove / Simplify

| Current | Action |
|---------|--------|
| Revolution Slider | ✅ Already removed (using video) |
| Festschrift PDF link | Move to footer or "Über uns" if exists |
| Long strategy text | ✅ Already condensed in ValuesSection |
| Multiple forms | Consider consolidating engagement forms |
| Photo gallery (bottom) | Move to dedicated "Galerie" page if exists |
| Instagram embed | Keep but make lighter/faster |

## Page Load Priorities

1. Hero + Nav (immediate)
2. Wer mir sind (above fold on scroll)
3. Pillars (lazy load)
4. Stats (lazy load with animation trigger)
5. News (lazy load)
6. Instagram feed (last, async)

## Summary Checklist

- [ ] Mobile-first responsive design
- [ ] "Wer mir sind" people section prominent on homepage (NEW)
- [ ] Simplified navigation (already done)
- [ ] Fast-loading hero with video (already implemented)
- [ ] Accordion-style pillars on homepage (needs conversion)
- [ ] Cleaner news cards with images (needs images added)
- [ ] Single engagement form with options (needs consolidation)
- [ ] Keep existing colors/fonts/tagline (already done)
- [ ] Client provides all images (use existing image paths)

## Key Differences from Original Feedback

1. **People Data**: 6 Vorstand members (not 3), 1 Stadtrat + 5 Gemeinderäte (not just "Stadtrat")
2. **6 Pillars**: Different titles than original feedback (e.g., "Geordnete Zuwanderung" vs "Sicherheit")
3. **Stats**: 200+ members (not 500+), 8 GGR seats, 25% Wähleranteil
4. **Contact**: Roman Küng (079 329 13 33), not Gregor Bruhin
5. **Navigation**: Already simplified, no "Aktuelles & Termine" section

## Implementation Notes

- All people images exist in `/public/assets/vorstand/` and `/public/assets/svp-people/`
- Profile pages already exist for key members
- Current ValuesSection needs to be converted to accordion component
- NewsSection needs image support added
- Engagement section is new component to create

