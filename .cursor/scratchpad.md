# SVP Stadt Zug Website - Sitemap & Organization Overview

## Current Site Structure (28 Pages)

### Main Navigation Pages
1. **Homepage** (`/`) - Index.tsx
   - HeroSection (video, stats, CTAs)
   - PeopleSection (carousel of people)
   - NewsSection (recent news)
   - ValuesSection (6 core values)
   - WasAnstehtSection (upcoming events)
   - MitmachenSection (engagement options)
   - ContactSection (contact form + info)

2. **Wahlen** (`/wahlen`) - Wahlen.tsx
   - Countdown timer
   - Preparation areas (3 cards)
   - Timeline (4 milestones)
   - Upcoming elections (4 cards)
   - CTA section

3. **Themen** (`/themen`) - Themen.tsx
   - Topic cards/list

4. **Abstimmungen** (`/abstimmungen`) - Abstimmungen.tsx
   - Vote cards with filters
   - Tabs (upcoming, past)
   - Search/filter functionality

5. **Vorstösse** (`/vorstoesse`) - Vorstoesse.tsx
   - Motion/initiative cards
   - Filters and sorting

### People & Organization
6. **Wer wir sind** (`/wer-wir-sind`) - WerWirSind.tsx
   - Statistics cards
   - Organization info

7. **Wofür wir stehen** (`/wofuer-wir-stehen`) - WofuerWirStehen.tsx
   - Values/positions display

8. **Vorstand** (`/vorstand`) - Vorstand.tsx
   - 6 board member cards
   - Activities grid

9. **Stadtrat** (`/stadtrat`) - Stadtrat.tsx
   - Stadtrat member (1)
   - Gemeinderat members (8 cards)

10. **Geschichte** (`/geschichte`) - Geschichte.tsx
    - Timeline/history sections
    - Accordion sections
    - Historical content

### Profile Pages (8 individual pages)
11-18. **Profile Pages** (`/profil/:name`)
    - AdriansRisiProfil.tsx
    - RaphaelTschanProfil.tsx
    - RomanKuengProfil.tsx
    - PhilipBrunnerProfil.tsx
    - AndreWickiProfil.tsx
    - MarcusBuehlerProfil.tsx
    - NorbertSchlumpfProfil.tsx
    - AlexOdermattProfil.tsx

### Engagement & Membership
19. **Mitglied werden** (`/mitglied-werden`) - Mitglied.tsx
    - Membership form/info

20. **Spenden** (`/spenden`) - Spenden.tsx
    - Donation form
    - Payment methods
    - Impact areas

21. **1000er Club** (`/1000er-club`) - TausenderClub.tsx
    - Club info
    - Membership tiers
    - Next event card
    - Contact section

22. **1000er Club Veranstaltungen** (`/1000er-club-veranstaltungen`) - TausenderClubVeranstaltungen.tsx
    - Event list/cards

23. **Was ansteht** (`/was-ansteht`) - WasAnsteht.tsx
    - Event calendar/list

24. **Kontakt** (`/kontakt`) - Kontakt.tsx
    - Contact form
    - Contact information

### Legal/Footer Pages
25. **Impressum** (`/impressum`) - Impressum.tsx
26. **Datenschutz** (`/datenschutz`) - Datenschutz.tsx
27. **Cookie Policy** (`/cookie`) - Cookie.tsx
28. **404 Not Found** (`*`) - NotFound.tsx

---

## Component Organization Analysis

### Current Component Structure

#### Layout Components (Global)
- ✅ `Header.tsx` - Navigation, logo, menus
- ✅ `Footer.tsx` - Footer links, contact info
- ✅ `ScrollToTop.tsx` - Scroll behavior
- ✅ `CookieNotice.tsx` - Cookie consent

#### Homepage-Specific Sections (Used only on Index)
- ✅ `HeroSection.tsx` - Video hero, stats, CTAs
- ✅ `PeopleSection.tsx` - People carousel
- ✅ `NewsSection.tsx` - Recent news
- ✅ `ValuesSection.tsx` - Core values grid
- ✅ `WasAnstehtSection.tsx` - Upcoming events preview
- ✅ `MitmachenSection.tsx` - Engagement options
- ✅ `ContactSection.tsx` - Contact form

#### Reusable UI Components (Shadcn)
- ✅ `src/components/ui/*` - 49 Shadcn UI components
- ✅ `src/components/patterns/CircularAvatar.tsx` - Extracted pattern

#### Utility Components
- ✅ `ProtectedEmail.tsx` - Email obfuscation
- ✅ `MegaMenu.tsx` - Desktop navigation
- ✅ `MitmachenDropdown.tsx` - Dropdown menu

---

## ⚠️ PROBLEMS IDENTIFIED

### 1. Duplicated Patterns Across Pages

#### Person/Member Cards (DUPLICATED 8+ TIMES)
**Found in:**
- `Vorstand.tsx` - Board member cards
- `Stadtrat.tsx` - Gemeinderat member cards  
- `PeopleSection.tsx` - People carousel items
- All 8 profile pages - Similar layouts with image, name, position, contact

**Current Implementation:**
- Each page has inline card styling
- Similar structure but slightly different
- Contact info displayed differently
- No reusable component

**Should Be:**
- `<PersonCard />` component
- `<PersonCardCompact />` variant
- `<PersonProfileLayout />` for profile pages

---

#### Section Headers (DUPLICATED 20+ TIMES)
**Found in:**
- Every page has similar section headers
- `text-center mb-12` pattern repeated
- Title + description pattern
- Badge variants

**Current Implementation:**
```tsx
<div className="text-center mb-12">
  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Title</h2>
  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Description</p>
</div>
```

**Should Be:**
- `<SectionHeader />` component
- Props: title, description, badge?, alignment?

---

#### Stat/Number Cards (DUPLICATED 5+ TIMES)
**Found in:**
- `HeroSection.tsx` - Stat cards with count-up
- `WerWirSind.tsx` - Organization stats
- `Wahlen.tsx` - Could use similar pattern

**Current Implementation:**
- Inline implementations
- Similar styling but different structure

**Should Be:**
- `<StatCard />` component
- Support for count-up animation
- Icon, number, label, sublabel

---

#### Event/Item Cards (DUPLICATED 10+ TIMES)
**Found in:**
- `Abstimmungen.tsx` - Vote cards
- `Vorstoesse.tsx` - Motion cards
- `WasAnsteht.tsx` - Event cards
- `TausenderClubVeranstaltungen.tsx` - Event cards
- `Geschichte.tsx` - Timeline items
- `Wahlen.tsx` - Election cards, timeline items

**Current Implementation:**
- Various card implementations
- Different badge styles
- Inconsistent hover effects
- Different date formatting

**Should Be:**
- `<EventCard />` component
- `<TimelineItem />` component
- `<ElectionCard />` component
- All using design system patterns

---

#### Contact Information Blocks (DUPLICATED 5+ TIMES)
**Found in:**
- `Kontakt.tsx` - Contact info cards
- `ContactSection.tsx` - Contact info
- Profile pages - Individual contact info
- `Vorstand.tsx` - Member contact info

**Current Implementation:**
- Icon + text pattern repeated
- Similar styling but inline

**Should Be:**
- `<ContactInfoItem />` component
- Icon, label, value(s)
- Consistent styling

---

#### Timeline Components (DUPLICATED 2+ TIMES)
**Found in:**
- `Wahlen.tsx` - Roadmap timeline
- `Geschichte.tsx` - History timeline
- Similar vertical timeline pattern

**Current Implementation:**
- Different implementations
- Similar visual pattern but different code

**Should Be:**
- `<Timeline />` component
- `<TimelineItem />` sub-component
- Configurable styling for different contexts

---

#### CTA Sections (DUPLICATED 8+ TIMES)
**Found in:**
- `Wahlen.tsx` - Final CTA
- `Spenden.tsx` - Donation CTA
- `Mitglied.tsx` - Membership CTA
- `TausenderClub.tsx` - Club CTA
- Multiple pages have similar CTA patterns

**Current Implementation:**
- Similar structure: title, description, buttons
- Inline implementations
- Slightly different styling

**Should Be:**
- `<CTASection />` component
- Props: title, description, primaryButton, secondaryButton?, variant?

---

#### Badge/Status Indicators (DUPLICATED 15+ TIMES)
**Found in:**
- `Abstimmungen.tsx` - Vote status badges
- `Vorstoesse.tsx` - Motion status badges
- `WasAnsteht.tsx` - Event type badges
- `Wahlen.tsx` - Status badges
- Profile pages - Role badges

**Current Implementation:**
- Inline Badge components with custom colors
- Color logic duplicated
- Inconsistent color usage

**Should Be:**
- Badge variants standardized
- `<StatusBadge />` component
- Color system using design tokens

---

#### Form Patterns (DUPLICATED 3+ TIMES)
**Found in:**
- `Kontakt.tsx` - Contact form
- `ContactSection.tsx` - Contact form
- `Mitglied.tsx` - Membership form
- `Spenden.tsx` - Donation form

**Current Implementation:**
- Similar form structures
- Duplicate validation patterns
- Different field layouts

**Should Be:**
- `<FormField />` component
- `<FormSection />` component
- Shared validation utilities

---

### 2. Missing Reusable Layout Components

#### Page Layout Wrapper
**Problem:** Every page repeats:
```tsx
<div className="min-h-screen">
  <Header />
  <main>...</main>
  <Footer />
</div>
```

**Should Be:**
- `<PageLayout />` component
- Handles Header/Footer automatically
- SEO meta tags handling
- Scroll behavior

---

#### Section Wrapper
**Problem:** Every section repeats:
```tsx
<section className="section-padding bg-gradient-to-b from-background to-muted/20">
  <div className="container-max">...</div>
</section>
```

**Should Be:**
- `<Section />` component
- Props: variant, background, padding?

---

### 3. Inconsistent Data Structures

**Problem:** Similar data structured differently:
- `boardMembers` (Vorstand.tsx)
- `gemeinderat` (Stadtrat.tsx)  
- `allPeople` (PeopleSection.tsx)
- Profile page props

**Should Be:**
- Shared TypeScript types/interfaces
- `Person` type definition
- `Election` type definition
- `Event` type definition

---

## Proposed Component Architecture

### Target Structure

```
src/
├── components/
│   ├── layout/              # Layout components
│   │   ├── PageLayout.tsx
│   │   ├── Section.tsx
│   │   └── SectionHeader.tsx
│   │
│   ├── people/              # People-related components
│   │   ├── PersonCard.tsx
│   │   ├── PersonCardCompact.tsx
│   │   ├── PersonProfileLayout.tsx
│   │   └── PeopleGrid.tsx
│   │
│   │   └── CircularAvatar.tsx (move from patterns/)
│   │
│   ├── content/             # Content display components
│   │   ├── EventCard.tsx
│   │   ├── EventList.tsx
│   │   ├── VoteCard.tsx
│   │   ├── MotionCard.tsx
│   │   ├── StatCard.tsx
│   │   └── NewsCard.tsx
│   │
│   ├── timeline/            # Timeline components
│   │   ├── Timeline.tsx
│   │   └── TimelineItem.tsx
│   │
│   ├── forms/               # Form components
│   │   ├── FormField.tsx
│   │   ├── FormSection.tsx
│   │   ├── ContactForm.tsx
│   │   └── DonationForm.tsx
│   │
│   ├── ctas/                # Call-to-action components
│   │   ├── CTASection.tsx
│   │   └── CTACard.tsx
│   │
│   ├── badges/              # Badge components
│   │   ├── StatusBadge.tsx
│   │   └── TypeBadge.tsx
│   │
│   ├── contact/             # Contact-related
│   │   ├── ContactInfoItem.tsx
│   │   └── ContactInfoGrid.tsx
│   │
│   ├── sections/            # Homepage sections (keep as-is for now)
│   │   ├── HeroSection.tsx
│   │   ├── PeopleSection.tsx
│   │   └── ...
│   │
│   ├── ui/                  # Shadcn UI (keep as-is)
│   │   └── ...
│   │
│   └── patterns/            # Design patterns (deprecate, move to specific folders)
│
├── types/                   # Shared TypeScript types
│   ├── person.ts
│   ├── event.ts
│   ├── election.ts
│   └── motion.ts
│
└── pages/                   # Page components (simplified)
    └── ...
```

---

## Reusability Plan

### Phase 1: Extract Common Layout Components (HIGH PRIORITY)

**Components to Create:**
1. **`<PageLayout />`** - Wraps all pages
   - Props: title, description, children
   - Handles Header/Footer
   - SEO meta tags

2. **`<Section />`** - Standard section wrapper
   - Props: variant, background, padding, className
   - Uses design system tokens

3. **`<SectionHeader />`** - Section title + description
   - Props: title, description, badge?, alignment
   - Consistent styling

**Impact:** Reduces code duplication across all 28 pages

---

### Phase 2: Extract People Components (HIGH PRIORITY)

**Components to Create:**
1. **`<PersonCard />`** - Full person card
   - Props: person data, variant, onClick?
   - Used in: Vorstand, Stadtrat, PeopleSection

2. **`<PersonCardCompact />`** - Compact version
   - Props: person data, showContact?
   - Used in: Grids, lists

3. **`<PersonProfileLayout />`** - Profile page layout
   - Props: person data
   - Used in: All 8 profile pages

**Impact:** Unifies all person displays, makes profile pages consistent

---

### Phase 3: Extract Content Display Components (MEDIUM PRIORITY)

**Components to Create:**
1. **`<EventCard />`** - Event display
   - Props: event data, variant
   - Used in: WasAnsteht, TausenderClubVeranstaltungen, Wahlen

2. **`<VoteCard />`** - Voting/referendum card
   - Props: vote data, showRecommendation?
   - Used in: Abstimmungen

3. **`<MotionCard />`** - Motion/initiative card
   - Props: motion data
   - Used in: Vorstoesse

4. **`<StatCard />`** - Statistics/number card
   - Props: value, label, icon, animate?
   - Used in: HeroSection, WerWirSind

**Impact:** Consistent card styling, easier to maintain

---

### Phase 4: Extract Specialized Components (MEDIUM PRIORITY)

**Components to Create:**
1. **`<Timeline />`** + **`<TimelineItem />`**
   - Used in: Wahlen, Geschichte

2. **`<ContactInfoItem />`** + **`<ContactInfoGrid />`**
   - Used in: Kontakt, ContactSection, profile pages

3. **`<CTASection />`**
   - Used in: Multiple pages

4. **`<StatusBadge />`** + **`<TypeBadge />`**
   - Standardized badge components

**Impact:** Consistent patterns across similar use cases

---

### Phase 5: Extract Form Components (LOW PRIORITY)

**Components to Create:**
1. **`<FormField />`** - Standardized form field
2. **`<FormSection />`** - Form section wrapper
3. **`<ContactForm />`** - Reusable contact form
4. **`<DonationForm />`** - Reusable donation form

**Impact:** Form consistency, easier validation

---

## Type Definitions Needed

Create `src/types/` directory with:

```typescript
// person.ts
export interface Person {
  name: string;
  position: string;
  roles?: string[];
  description: string;
  image: string;
  contact?: {
    email?: string;
    phone?: string;
    address?: string;
  };
  profileLink?: string;
  // ... more fields
}

// event.ts
export interface Event {
  id: string | number;
  title: string;
  date: string;
  time?: string;
  location: string;
  type: 'vortrag' | 'anlass' | 'abstimmung' | 'versammlung';
  description: string;
  priority?: 'high' | 'medium' | 'low';
  link?: string;
}

// election.ts
export interface Election {
  id: string | number;
  title: string;
  date: string;
  description: string;
  level: 'kantonal' | 'national';
  status: string;
  priority: 'high' | 'medium' | 'low';
  link?: string;
}

// motion.ts
export interface Motion {
  id: string | number;
  title: string;
  date: string;
  status: string;
  // ... more fields
}
```

---

## Implementation Priority

### 🔴 CRITICAL (Do First)
1. Create `<PageLayout />` - Affects all 28 pages
2. Create `<Section />` - Used everywhere
3. Create `<SectionHeader />` - Used 20+ times
4. Create shared types (`Person`, `Event`, etc.)

### 🟠 HIGH (Do Next)
5. Create `<PersonCard />` - Unifies 8+ implementations
6. Create `<PersonProfileLayout />` - Unifies 8 profile pages
7. Create `<EventCard />` - Used in 4+ pages
8. Create `<StatCard />` - Used in multiple pages

### 🟡 MEDIUM (Do After)
9. Create `<Timeline />` components
10. Create `<ContactInfoItem />` components
11. Create `<CTASection />` component
12. Create badge variants

### 🟢 LOW (Polish Later)
13. Extract form components
14. Create specialized card variants
15. Optimize and refactor

---

## Current Component Usage Matrix

| Component Pattern | Used In Pages | Duplication Level | Priority |
|------------------|---------------|-------------------|----------|
| Section wrapper | All 28 pages | 🔴 28x | CRITICAL |
| Section header | ~20 pages | 🔴 20x | CRITICAL |
| Person card | 10+ pages | 🔴 10x | HIGH |
| Event card | 4 pages | 🟠 4x | HIGH |
| Stat card | 3 pages | 🟠 3x | MEDIUM |
| Timeline | 2 pages | 🟡 2x | MEDIUM |
| Contact info | 5 pages | 🟠 5x | MEDIUM |
| CTA section | 8 pages | 🟠 8x | MEDIUM |
| Form fields | 4 pages | 🟠 4x | LOW |

---

## Next Steps

1. **Review this overview** - Confirm priorities
2. **Start with Phase 1** - Layout components (highest impact)
3. **Create type definitions** - Foundation for components
4. **Extract components incrementally** - One at a time, test thoroughly
5. **Update pages gradually** - Refactor pages to use new components
6. **Document components** - Add JSDoc comments, usage examples

---

## Notes

- Keep homepage sections (`HeroSection`, etc.) as-is initially
- Focus on extracting patterns that appear 3+ times first
- Maintain backward compatibility during extraction
- Test each component thoroughly before widespread adoption
- Update DESIGN_SYSTEM.md as components are created

---

## Recent Fixes Completed

### ✅ 1000er Club Events Data Extraction (January 2026)
**Problem**: All 8 events hardcoded in single component file, difficult to maintain
**Solution**: 
- Created `src/data/1000erClubEvents.ts` with event data and TypeScript interface
- Updated `TausenderClubVeranstaltungen.tsx` to import data
- Added proper SEO meta tags to page
- **Result**: Events now easy to maintain, page component simplified, no styling changes

**Files Changed**:
- Created: `src/data/1000erClubEvents.ts`
- Modified: `src/pages/TausenderClubVeranstaltungen.tsx`

**Style Preservation**: 
- ✅ All styling preserved exactly as before
- ✅ PeopleSection (Wer mir sind) style kept intact - circular avatars with green borders
- ✅ No visual changes, only code organization improvement

---

### ✅ Component Reorganization - Phase 1 Complete (January 2026)
**Goal**: Extract duplicated patterns into reusable components, establish component architecture

**Completed Work**:

#### Phase 1: Foundation
- ✅ Created shared TypeScript types: `Person`, `Event`, `Election`, `Motion` in `src/types/`
- ✅ Created component directory structure: `layout/`, `people/`, `content/`, `timeline/`, `contact/`, `ctas/`, `badges/`
- ✅ Moved `CircularAvatar.tsx` from `patterns/` to `people/`

#### Phase 2: Layout Components
- ✅ Created `PageLayout.tsx` - Wraps Header/Footer, handles SEO meta tags
  - Migrated 4 low-risk pages: Impressum, NotFound, Datenschutz, Cookie
- ✅ Created `Section.tsx` - Standard section wrapper with variants (default, muted, gradient, hero)
- ✅ Created `SectionHeader.tsx` - Standardized section headers with optional badge and alignment

#### Phase 3: People Components
- ✅ Created `PersonCard.tsx` - Reusable person card with variants (grid, compact, carousel)
  - Preserves PeopleSection circular avatar style exactly (not modified)
  - Supports Vorstand/Stadtrat card styling
- ✅ Created `PersonProfileLayout.tsx` - Standardized profile page layout
  - Handles breadcrumb, hero, biography, sections, sidebar
  - Flexible for custom content

#### Phase 4: Content Display Components
- ✅ Created `StatCard.tsx` - Statistics/number cards with count-up animation
  - Hero variant (glassmorphism) for HeroSection
  - Default variant for other pages
- ✅ Created `EventCard.tsx` - Event display cards with variants (default, compact)
  - Matches WasAnsteht page styling
- ✅ Created `VoteCard.tsx` - Specialized cards for Abstimmungen
  - Supports both upcoming and past votes
- ✅ Created `MotionCard.tsx` - Specialized cards for Vorstösse
  - Supports current and completed motions

#### Phase 5: Specialized Components
- ✅ Created `Timeline.tsx` and `TimelineItem.tsx` - Timeline components
  - Preserves Wahlen page styling exactly
  - Supports default and history variants
- ✅ Created `ContactInfoItem.tsx` - Consistent contact information display
  - Supports default and card variants
- ✅ Created `CTASection.tsx` - Standardized call-to-action sections
  - Gradient variant with decorative elements
- ✅ Created `StatusBadge.tsx` and `TypeBadge.tsx` - Standardized badge components
  - Uses design system color tokens

**Files Created** (15 new component files):
- `src/types/person.ts`, `event.ts`, `election.ts`, `motion.ts`
- `src/components/layout/PageLayout.tsx`, `Section.tsx`, `SectionHeader.tsx`
- `src/components/people/PersonCard.tsx`, `PersonProfileLayout.tsx`
- `src/components/content/StatCard.tsx`, `EventCard.tsx`, `VoteCard.tsx`, `MotionCard.tsx`
- `src/components/timeline/Timeline.tsx`, `TimelineItem.tsx`
- `src/components/contact/ContactInfoItem.tsx`
- `src/components/ctas/CTASection.tsx`
- `src/components/badges/StatusBadge.tsx`, `TypeBadge.tsx`

**Files Modified**:
- Migrated: `Impressum.tsx`, `NotFound.tsx`, `Datenschutz.tsx`, `Cookie.tsx` to use PageLayout
- Moved: `CircularAvatar.tsx` from `patterns/` to `people/`

**Build Status**: ✅ All builds successful, no linter errors

**Next Steps** (Future work - not yet executed):
- Gradually migrate remaining 24 pages to use PageLayout
- Migrate sections to use Section and SectionHeader components
- Migrate Vorstand/Stadtrat pages to use PersonCard
- Migrate profile pages to use PersonProfileLayout
- Migrate content pages to use specialized card components
- Extract homepage sections to `sections/` directory (optional)

**Important Notes**:
- ✅ PeopleSection (Wer mir sind) style preserved - NOT modified
- ✅ All components created but not yet migrated to pages (incremental approach)
- ✅ Zero breaking changes - all existing code still works
- ✅ Components are ready for gradual migration

---

### ✅ Component Reorganization - Phase 2 Complete (January 2026)
**Goal**: Migrate pages to use reusable components (PageLayout, Section, PersonCard, StatCard)

**Completed Work**:

#### Phase 2: PageLayout & Component Migration
- ✅ Migrated 13 pages to PageLayout (Impressum, NotFound, Datenschutz, Cookie, WofuerWirStehen, Themen, Kontakt, TausenderClub, TausenderClubVeranstaltungen, WasAnsteht, Vorstand, Stadtrat, WerWirSind)
- ✅ Migrated WerWirSind, Themen, Wahlen, TausenderClub sections to use Section and SectionHeader
- ✅ Migrated Vorstand and Stadtrat pages to use PersonCard component
- ✅ Migrated WerWirSind and Themen to use StatCard component

**Files Modified**: 13 page files
**Build Status**: ✅ All builds successful, no linter errors
**Visual Status**: ✅ All styling preserved exactly, no visual changes

---

### 🚧 Component Reorganization - Phase 3 In Progress (January 2026)
**Goal**: Complete component migration - remaining PageLayout migrations, specialized card components, profile pages, and section standardization

#### Phase 3.1: PageLayout Migration - Batch 2 ✅ COMPLETE
- ✅ Migrated 14 remaining pages to PageLayout:
  - High-traffic/content pages: Wahlen, Abstimmungen, Vorstoesse, Geschichte, Spenden, Mitglied
  - All 8 profile pages: AdriansRisi, AndreWicki, MarcusBuehler, PhilipBrunner, RaphaelTschan, RomanKueng, AlexOdermatt, NorbertSchlumpf
- ✅ All SEO meta tags working correctly
- ✅ Build verified, no linter errors

#### Phase 3.2: Specialized Card Components ✅ COMPLETE
- ✅ EventCard Migration: Migrated WasAnsteht.tsx to use EventCard component
  - Updated Event type to accept flexible string types (was too restrictive)
  - Build verified, visual appearance identical
- ✅ VoteCard Migration: Migrated Abstimmungen.tsx to use VoteCard component
  - Fixed dynamic color class issue in VoteCard (Tailwind doesn't support template literals)
  - Removed duplicate badge rendering functions from Abstimmungen page
  - Build verified, visual appearance identical
- ✅ MotionCard Migration: Migrated Vorstoesse.tsx to use MotionCard component
  - Fixed missing TrendingUp import in MotionCard
  - Removed duplicate getStatusBadge function from Vorstoesse page (kept getTypeBadge for explanation box)
  - Both current and completed motions now use MotionCard with appropriate status props
  - Build verified, visual appearance identical

**Files Modified**: 3 page files (WasAnsteht, Abstimmungen, Vorstoesse)

#### Phase 3.3: Profile Pages Migration - ❌ REVERTED / CANCELLED
- ❌ Attempted PersonProfileLayout migration for 2 profile pages (NorbertSchlumpf, AlexOdermatt)
- **Decision to Revert**: Profile pages are too different from each other to benefit from a unified layout abstraction
  - Each profile has unique section structures, content layouts, and sidebar items
  - PersonProfileLayout only saved ~115 lines per profile, but we still needed to write full Card structures in `sections` arrays and `customMainContent`/`customSidebarContent` props
  - Added 430 lines of abstraction code with complex type system and inconsistent usage patterns
  - The abstraction added indirection without meaningful code reduction
- ✅ **Solution**: Keep profile pages using PageLayout directly with their unique structures preserved
- ✅ Reverted NorbertSchlumpfProfil.tsx and AlexOdermattProfil.tsx to original structure (using PageLayout only)
- Note: PersonProfileLayout component exists but is not recommended for use - profiles are intentionally different and should remain so

#### Phase 3.4: Section Component Expansion ✅ COMPLETE
- ✅ Migrated sections in Wahlen, Abstimmungen, Vorstoesse, Spenden, Mitglied, Geschichte to use Section and SectionHeader
- ✅ Statistics sections, hero headers, and main content sections now use standardized components
- ✅ Build verified, visual appearance preserved

#### Phase 3.5: CTA/Contact Components ✅ COMPLETE (CTA only)
- ✅ Migrated CTA sections in Wahlen, Abstimmungen, Vorstoesse, Geschichte to use CTASection component
- ✅ Standardized call-to-action styling and structure across pages
- ⏳ ContactInfoItem migration - Optional (low priority, profiles intentionally keep unique structures)

**Current Status**: ~85% complete
- ✅ Phase 3.1: PageLayout Migration - Batch 2 (14 pages)
- ✅ Phase 3.2: Specialized Card Components (EventCard, VoteCard, MotionCard)
- ✅ Phase 3.4: Section Component Expansion (Wahlen, Abstimmungen, Vorstoesse, Spenden, Mitglied, Geschichte)
- ✅ Phase 3.5: CTA Components (Wahlen, Abstimmungen, Vorstoesse, Geschichte)
- ❌ Phase 3.3: Profile Pages Migration - Cancelled (profiles too different, abstraction not beneficial)

**Build Status**: ✅ All builds successful, no linter errors
**Remaining Work**: Optional ContactInfoItem migration in Kontakt.tsx and profile pages (low priority)
