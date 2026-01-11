# SVP Stadt Zug Design System

**Version**: 1.0  
**Last Updated**: January 2025  
**Status**: Active

## Overview

This design system provides comprehensive guidelines for building consistent, accessible, and maintainable interfaces for the SVP Stadt Zug website. It encompasses colors, typography, spacing, component patterns, and interaction behaviors.

---

## 1. Colors

### Brand Colors

The SVP brand uses a distinctive green palette derived from the party logo. Green is the primary brand color and should be used for highlights, accents, and primary actions.

#### SVP Green (Primary)
- **Green**: `hsl(120, 60%, 45%)` - `--svp-green`
- **Green Light**: `hsl(120, 50%, 55%)` - `--svp-green-light`
- **Green Dark**: `hsl(120, 70%, 35%)` - `--svp-green-dark`

**Usage**: Primary actions, links, borders, accents, hero sections, highlights, focus rings, circular avatars (like "Wer mir sind")

#### SVP Orange (Deprecated)
- **Orange**: `hsl(54, 100%, 50%)` - `--svp-orange`
- **Orange Light**: `hsl(54, 100%, 60%)` - `--svp-orange-light`
- **Orange Dark**: `hsl(54, 100%, 40%)` - `--svp-orange-dark`

**Note**: Orange colors are defined in the design system but are **not recommended for use**. Use green (`--svp-green`) instead for highlights, accents, and emphasis.

#### Swiss Blue (Secondary)
- **Blue**: `hsl(213, 84%, 25%)` - `--swiss-blue`
- **Blue Light**: `hsl(213, 54%, 35%)` - `--swiss-blue-light`
- **Blue Dark**: `hsl(213, 94%, 15%)` - `--swiss-blue-dark`

**Usage**: Secondary actions, informational elements

### Semantic Colors

- **Primary**: SVP Green (`--primary`)
- **Secondary**: Swiss Blue (`--secondary`)
- **Success**: `hsl(160, 60%, 45%)` - `--success`
- **Destructive**: `hsl(0, 65%, 51%)` - `--destructive`
- **Muted**: `hsl(210, 40%, 96%)` - `--muted` (backgrounds)
- **Accent**: `hsl(210, 40%, 96%)` - `--accent` (subtle highlights)

### Neutral Palette

- **Background**: `hsl(0, 0%, 100%)` - Pure white
- **Foreground**: `hsl(210, 20%, 15%)` - Dark text
- **Border**: `hsl(210, 20%, 90%)` - Light borders
- **Input**: `hsl(210, 20%, 90%)` - Form inputs

### Color Usage Examples

```css
/* Inline usage */
border-[hsl(var(--svp-green))]
bg-[hsl(var(--svp-green-light))]
text-[hsl(var(--svp-green-dark))]

/* Via Tailwind semantic classes */
bg-primary text-primary-foreground
border-secondary
text-muted-foreground
```

---

## 2. Typography

### Font Family

**Primary Font**: Inter  
**Fallback**: system-ui, sans-serif

Inter is loaded locally from `public/assets/fonts/` in the following weights:
- Light (300)
- Regular (400)
- Medium (500)
- SemiBold (600)
- Bold (700)
- ExtraBold (800)

### Type Scale

| Element | Size | Weight | Line Height | Usage |
|---------|------|--------|-------------|-------|
| H1 | `text-4xl md:text-5xl` | `font-bold` | `leading-tight` | Page titles, hero headlines |
| H2 | `text-3xl` | `font-bold` | `leading-tight` | Section titles (e.g., "Wer mir sind", "Aktuell") |
| H3 | `text-2xl md:text-3xl` | `font-semibold` | `leading-snug` | Subsection titles |
| H4 | `text-xl md:text-2xl` | `font-semibold` | `leading-snug` | Card titles |
| Body Large | `text-lg` | `font-normal` | `leading-relaxed` | Intro text, highlights |
| Body | `text-base` | `font-normal` | `leading-relaxed` | Default body text |
| Body Small | `text-sm` | `font-normal` | `leading-normal` | Captions, metadata |
| Body XS | `text-xs` | `font-normal` | `leading-normal` | Badges, labels |

### Typography Classes

All headings (`h1-h6`) automatically apply `font-semibold` via base styles.

**Responsive Typography**: 
- H1 (page titles): Use responsive classes (`text-4xl md:text-5xl`)
- H2 (section titles): Use fixed size `text-3xl` (e.g., "Wer mir sind", "Aktuell")
- H3 and below: Use responsive classes where appropriate

```tsx
<h1 className="text-4xl md:text-5xl font-bold">
  Page Title
</h1>
<h2 className="text-3xl font-bold">
  Section Title
</h2>
```

---

## 3. Spacing

### Section Spacing

**`.section-padding`**: Applied to major page sections
- Padding: `py-16 px-4 md:px-6 lg:px-8`
- Vertical: 4rem (64px) on all screen sizes
- Horizontal: Responsive - 1rem mobile → 1.5rem tablet → 2rem desktop

### Container Width

**`.container-max`**: Maximum width container
- `max-w-7xl` (1280px)
- Centered with `mx-auto`

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `p-4` | 1rem (16px) | Card padding (mobile) |
| `p-6` | 1.5rem (24px) | Card padding (desktop), standard spacing |
| `p-8` | 2rem (32px) | Larger card padding, component spacing |
| `py-16` | 4rem (64px) | Section vertical padding |
| `mb-4` | 1rem | Element spacing |
| `mb-8` | 2rem | Component spacing |
| `mb-12` | 3rem | Section spacing |

---

## 4. Component Patterns

### Circular Avatar Pattern

**Component**: `CircularAvatar` (`src/components/patterns/CircularAvatar.tsx`)

A reusable component for displaying people with circular avatars, green borders, and category badges.

**Features**:
- Circular avatar with 4px SVP green border
- Border lightens on hover (`--svp-green-light`)
- Shine effect animation (gradient sweep on hover)
- Category badge positioned below avatar
- Optional profile link wrapper
- Responsive sizing (sm, md, lg)

**Usage**:
```tsx
import CircularAvatar from '@/components/patterns/CircularAvatar';

<CircularAvatar
  name="Adrian Risi"
  image="./assets/people/vorstand/Risi_Adrian_SVP.jpg"
  profileLink="/profil/adrian-risi"
  category="Vorstand"
  role="Präsident"
  position="Kantonsrat"
  size="md"
/>
```

**Visual Specifications**:
- Avatar sizes: `w-32 h-32 md:w-40 md:h-40` (md), responsive scaling
- Border: `border-4 border-[hsl(var(--svp-green))]`
- Badge: Green background, white text, rounded-full
- Hover: Scale 105%, border lightens, shine animation

**Used in**: PeopleSection, Vorstand page, Stadtrat page

---

### Card Variants

#### `.card-elevated`
Base elevated card with shadow and hover effects.

```css
@apply bg-[hsl(var(--card))] rounded-xl shadow-[var(--shadow-medium)] 
       hover:shadow-[var(--shadow-strong)] 
       transition-[var(--transition-smooth)] p-6;
```

**Usage**: Default card for content sections

#### `.card-news`
News article cards with subtle hover scale.

```css
@apply card-elevated hover:scale-[1.02] cursor-pointer;
```

**Usage**: NewsSection component

#### `.card-value`
Value proposition cards with gradient hover.

```css
@apply card-elevated text-center hover:bg-gradient-to-br 
       hover:from-[hsl(var(--card))] hover:to-[hsl(var(--accent))];
```

**Usage**: ValuesSection component

#### `.card-people`
People profile cards with specific hover effects.

#### `.card-vote`
Voting/referendum cards with distinct styling.

#### `.card-vote-compact`
Compact version for vote listings.

#### `.card-initiative`
Initiative/motion cards.

#### `.card-success`
Success state cards with green accent.

#### `.card-overview`
Overview section cards.

---

### Button Variants

#### `.btn-hero`
Primary hero call-to-action button with gradient background.

```css
@apply bg-gradient-to-r from-[hsl(var(--svp-green))] to-[hsl(var(--svp-green-light))] 
       text-white font-semibold px-8 py-4 rounded-lg 
       shadow-[var(--shadow-strong)] 
       hover:scale-105 hover:shadow-[var(--shadow-strong)] 
       hover:from-[hsl(var(--svp-green-light))] hover:to-[hsl(var(--svp-green))]
       transition-[var(--transition-bounce)] 
       focus:ring-4 focus:ring-[hsl(var(--svp-green)_/_0.3)];
```

**Usage**: Hero sections, primary CTAs

#### `.btn-secondary`
Secondary button with Swiss blue styling.

```css
@apply bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] 
       font-semibold px-6 py-3 rounded-lg border border-[hsl(var(--secondary))]
       hover:bg-[hsl(var(--swiss-blue-light))] 
       transition-[var(--transition-smooth)] 
       focus:ring-4 focus:ring-[hsl(var(--secondary)_/_0.3)];
```

**Usage**: Secondary actions

#### `.btn-outline`
Outline button with SVP green border and hover fill.

```css
@apply border-2 border-[hsl(var(--primary))] text-[hsl(var(--primary))] 
       font-semibold px-6 py-3 rounded-lg bg-transparent
       hover:bg-[hsl(var(--primary))] hover:text-[hsl(var(--primary-foreground))]
       transition-[var(--transition-smooth)] 
       focus:ring-4 focus:ring-[hsl(var(--primary)_/_0.3)];
```

**Usage**: Tertiary actions, navigation buttons

**Note**: Shadcn UI `Button` component is also available with variants: `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`.

---

### Gradients

Predefined gradient utilities for consistent backgrounds:

- **`.gradient-hero`**: Green gradient for hero sections
  - `linear-gradient(135deg, hsl(var(--svp-green)), hsl(var(--svp-green-light)))`

- **`.gradient-section`**: Subtle section background
  - `linear-gradient(180deg, hsl(var(--background)), hsl(var(--muted)))`

- **`.gradient-card`**: Card background gradient
  - `linear-gradient(145deg, hsl(var(--card)), hsl(var(--accent)))`

- **`.gradient-footer`**: Footer gradient
  - `linear-gradient(135deg, hsl(var(--svp-green-dark)), hsl(var(--svp-green)))`

---

## 5. Hover Effects

### Standard Hover Patterns

#### Scale Effect
```css
hover:scale-105 transition-transform duration-300
```
Used on: Buttons, cards, avatars

#### Shadow Enhancement
```css
hover:shadow-xl transition-shadow duration-300
```
Used on: Cards, elevated elements

#### Border Color Change
```css
hover:border-[hsl(var(--svp-green-light))] transition-colors duration-300
```
Used on: Avatar borders, outline buttons

#### Shine Effect (Gradient Sweep)
```css
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
```
Used on: Circular avatars, hero images

#### Image Zoom
```css
group-hover:scale-110 transition-transform duration-500
```
Used on: Avatar images, card images

### Transition Timing

- **Smooth**: `transition-[var(--transition-smooth)]` - `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`
- **Bounce**: `transition-[var(--transition-bounce)]` - `all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)`
- **Fast**: `transition-transform duration-300` - 300ms
- **Slow**: `transition-transform duration-1000` - 1000ms (for shine effects)

---

## 6. Responsive Breakpoints

**Mobile-first approach** - Base styles are for mobile, then enhanced for larger screens.

| Breakpoint | Value | Usage |
|------------|-------|-------|
| `sm` | 640px | Small tablets |
| `md` | 768px | Tablets, small laptops |
| `lg` | 1024px | Laptops |
| `xl` | 1280px | Desktop |
| `2xl` | 1400px | Large desktop (container max) |

### Responsive Patterns

**Typography**:
```tsx
className="text-3xl md:text-4xl lg:text-5xl"
```

**Spacing**:
```tsx
className="px-4 md:px-6 lg:px-8"
```

**Grid/Carousel**:
```tsx
className="basis-1/2 md:basis-1/3 lg:basis-1/4"
```

**Visibility**:
```tsx
className="hidden md:block" // Hide on mobile, show on tablet+
className="block md:hidden" // Show on mobile, hide on tablet+
```

---

## 7. Shadows

Three shadow levels defined in CSS variables:

- **Soft**: `--shadow-soft` - `0 2px 10px hsl(var(--foreground) / 0.1)`
  - Used on: Subtle elevations

- **Medium**: `--shadow-medium` - `0 4px 20px hsl(var(--foreground) / 0.15)`
  - Used on: Default cards (`.card-elevated`)

- **Strong**: `--shadow-strong` - `0 10px 40px hsl(var(--svp-green) / 0.2)`
  - Used on: Hero buttons, prominent elements

**Usage**:
```css
shadow-[var(--shadow-medium)]
hover:shadow-[var(--shadow-strong)]
```

---

## 8. Border Radius

Consistent border radius values:

- **Base**: `--radius: 0.75rem` (12px)
- **Large**: `var(--radius)` - `rounded-lg` (12px)
- **Medium**: `calc(var(--radius) - 2px)` - `rounded-md` (10px)
- **Small**: `calc(var(--radius) - 4px)` - `rounded-sm` (8px)
- **Full**: `rounded-full` - Used for avatars, badges, pills

**Usage**:
```tsx
className="rounded-lg" // 12px
className="rounded-xl" // 16px (common for cards)
className="rounded-full" // Circular (avatars, badges)
```

---

## 9. Asset Organization

### Image Paths

**All images use relative paths**: `./assets/...`

**Structure**:
```
public/assets/
├── people/
│   ├── vorstand/        (Vorstand member photos)
│   └── gemeinderat/     (Gemeinderat member photos)
├── places/
│   └── zug/             (City of Zug photos)
├── events/
│   ├── 1000er-club/     (1000er Club event images)
│   └── general/         (General event photos)
└── fonts/               (Inter font files)
```

**Path Resolution**: With Vite `base: './'`, paths resolve correctly from any route.

**Example**:
```tsx
<img src="./assets/people/vorstand/Risi_Adrian_SVP.jpg" alt="Adrian Risi" />
```

---

## 10. Accessibility

### Focus States

All interactive elements include visible focus states:

```css
focus:ring-4 focus:ring-[hsl(var(--svp-green)_/_0.3)]
```

### Color Contrast

- Text on backgrounds meets WCAG AA standards
- Primary green on white: ✅ AA
- White text on green: ✅ AA
- Muted text: ✅ AA for body text

### Semantic HTML

- Use proper heading hierarchy (h1 → h2 → h3)
- Use semantic elements (`<nav>`, `<main>`, `<section>`, `<article>`)
- Include alt text for all images
- Use ARIA labels where appropriate

---

## 11. Component Library Reference

### Shadcn UI Components

The project uses Shadcn UI components as a foundation:
- `Button`, `Card`, `Badge`, `Input`, `Textarea`, `Select`
- `Accordion`, `Carousel`, `Dialog`, `DropdownMenu`, `NavigationMenu`
- `Tabs`, `Toast`, `Alert`

All components are located in `src/components/ui/` and follow Shadcn UI patterns with SVP styling applied.

---

## 12. Best Practices

### Do's

✅ Use semantic color variables (`--svp-green`, `--primary`) instead of hardcoded values  
✅ Apply responsive classes for all typography and spacing  
✅ Use `.section-padding` and `.container-max` for consistent layouts  
✅ Apply hover effects consistently using defined patterns  
✅ Use `CircularAvatar` component for people displays  
✅ Follow the asset path structure (`./assets/people/...`)  
✅ Use Tailwind utility classes over custom CSS when possible  

### Don'ts

❌ Don't hardcode colors - use CSS variables  
❌ Don't skip responsive breakpoints - always include mobile styles  
❌ Don't create new card variants without documenting them  
❌ Don't use absolute paths for assets (`/assets/...`) - use relative (`./assets/...`)  
❌ Don't duplicate component patterns - extract reusable components  
❌ Don't use inline styles - use Tailwind classes or CSS variables  

---

## 13. Changelog

### Version 1.0 (January 2025)

- Initial design system documentation
- Extracted CircularAvatar pattern component
- Documented all card variants and button styles
- Established asset organization structure
- Defined color palette and typography scale
- Documented hover effects and transitions

---

## 14. Resources

- **CSS Variables**: `src/index.css`
- **Tailwind Config**: `tailwind.config.ts`
- **CircularAvatar Component**: `src/components/patterns/CircularAvatar.tsx`
- **Shadcn UI Docs**: https://ui.shadcn.com/
- **Tailwind CSS Docs**: https://tailwindcss.com/docs

---

**Maintained by**: SVP Stadt Zug Development Team  
**Questions or Updates**: Update this document when adding new patterns or modifying existing ones.

