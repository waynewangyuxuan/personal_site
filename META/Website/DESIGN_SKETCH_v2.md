# Website Design Sketch v2

**Date**: 2026-02-03
**Direction**: Single-Page Scroll Experience
**Principle**: 简约但不简单 (Minimalist but not simplistic)

---

## Core Concept Change

**v1**: Multi-page with minimal styling
**v2**: Single-page scroll storytelling with refined animations

```
User lands → Scroll → Content reveals progressively → Never leaves the page
```

---

## Architecture: One Long Page

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                         HERO                                │
│                      (100vh)                                │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                      PROJECTS                               │
│               (scroll-triggered reveal)                     │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                      RESEARCH                               │
│            (narrative unfolds on scroll)                    │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                       ABOUT                                 │
│              (experience timeline)                          │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                      CONTACT                                │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**No separate pages**. Navigation becomes scroll anchors.

---

## Typography Upgrade

### Font Choice: Syne

```css
/* Display / Headlines */
font-family: 'Syne', sans-serif;
font-weight: 700;  /* Bold for impact */
letter-spacing: -0.03em;

/* Body */
font-family: 'Inter', sans-serif;
font-weight: 400;

/* Mono / Technical */
font-family: 'JetBrains Mono', monospace;
```

**Why Syne**:
- Geometric but with personality
- Strong display presence
- Works at large sizes
- More "designed" feel than Space Grotesk

### Type Scale

```
Hero name:     6rem (96px) → 4rem mobile
Section title: 3rem (48px) → 2rem mobile
Subsection:    1.5rem (24px)
Body:          1rem (16px)
Caption/Meta:  0.875rem (14px)
```

---

## Scroll Animation System

### Phase 1: Hero → Projects Transition

```
Scroll 0-100vh:
├── Hero name stays fixed, fades slightly
├── Tagline fades out
└── First project card enters from bottom

Scroll 100vh+:
├── Hero completely fades
└── Projects section takes over
```

### Phase 2: Project Cards Reveal

```
Each project card:
├── Starts below viewport (translateY: 100px, opacity: 0)
├── On scroll into view: slides up + fades in
├── Stagger: 100ms between cards
└── On hover: subtle lift + border highlight
```

### Phase 3: Research Section

```
Research narrative:
├── "THE QUESTION" fades in first
├── Pause (sticky for 50vh of scroll)
├── "THE CRITIQUE" slides in from left
│   ├── Paper 1 appears
│   └── Paper 2 appears (stagger)
├── "THE CONSTRUCTION" slides in from right
└── "THE INSIGHT" fades in last
```

### Phase 4: About/Experience

```
Timeline:
├── Each experience item reveals on scroll
├── Line draws down as you scroll
└── Smooth continuous reveal
```

---

## Visual Elements (Adding Richness)

### Subtle Grid Background
```css
.grid-bg {
  background-image:
    linear-gradient(var(--border) 1px, transparent 1px),
    linear-gradient(90deg, var(--border) 1px, transparent 1px);
  background-size: 60px 60px;
  opacity: 0.3;
}
```

### Gradient Accents
```css
.gradient-text {
  background: linear-gradient(135deg, #1A1A1A 0%, #6B6B6B 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

### Animated Underlines
```css
/* Link underlines that draw on hover */
.link::after {
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}
.link:hover::after {
  transform: scaleX(1);
}
```

### Section Dividers
```
Instead of hard borders, use:
├── Gradient fade between sections
├── Or animated line that draws as you scroll
└── Or subtle parallax shift
```

---

## Navigation (Scroll-Based)

### Fixed Nav Behavior
```
Scroll 0:     Nav hidden or minimal
Scroll 100vh: Nav fades in (fixed)
              Shows: Logo | Projects | Research | About
              Clicking scrolls to section (smooth)
```

### Progress Indicator
```
Option A: Vertical line on right side showing scroll progress
Option B: Dots indicating current section
Option C: Just highlight current nav item
```

---

## Interaction Details

### Hover States
| Element | Hover Effect |
|---------|-------------|
| Project card | Scale 1.02 + shadow lift + border color |
| Nav link | Underline draws left→right |
| External link | Arrow animates right |
| Email | Background highlight |

### Scroll Easing
```javascript
// Use smooth easing for scroll-triggered animations
easing: [0.25, 0.1, 0.25, 1] // cubic-bezier
duration: 600ms // for most reveals
stagger: 100ms // between items
```

### Click Feedback
```
Button click → scale down slightly (0.98) → release
```

---

## Technical Implementation

### Libraries Needed
```json
{
  "framer-motion": "^11.x",  // For scroll animations
  "lenis": "^1.x"            // For smooth scroll (optional)
}
```

### Scroll Animation Approach
```tsx
// Using Framer Motion's useInView
const ref = useRef(null);
const isInView = useInView(ref, { once: true, margin: "-100px" });

return (
  <motion.div
    ref={ref}
    initial={{ opacity: 0, y: 50 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
  >
    {children}
  </motion.div>
);
```

### Section Scroll Locking (Optional)
For research section "pause" effect:
```tsx
// Sticky section that plays animation while scrolling
position: sticky;
top: 0;
height: 100vh;
// Animation progress tied to scroll position
```

---

## Section-by-Section Breakdown

### 1. Hero Section (100vh)
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                                                             │
│                                                             │
│                     WAYNE WANG                              │
│                                                             │
│          Building tools for the post-AI world.              │
│                                                             │
│                                                             │
│                                                             │
│                         ↓                                   │
│                    scroll                                   │
└─────────────────────────────────────────────────────────────┘

Animations:
- Name: Fade in + slight scale up on load
- Tagline: Fade in with 200ms delay
- Scroll indicator: Pulse animation
```

### 2. Projects Section
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  PROJECTS                                                   │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  GRAPHEX                                             │   │
│  │  AI-powered learning canvas                          │   │
│  │                                               →      │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  NOTATE                                              │   │
│  │  Knowledge layer for AI capture                      │   │
│  │                                               →      │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ... more projects reveal on scroll ...                     │
│                                                             │
└─────────────────────────────────────────────────────────────┘

Animations:
- Section title: Fade in when section enters
- Each card: Staggered slide-up reveal
- On hover: Card lifts with subtle shadow
```

### 3. Research Section
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  RESEARCH                                                   │
│                                                             │
│  ─────────────────────────────────────────────────────────  │
│                                                             │
│  THE QUESTION                                               │
│  How do we evaluate if AI can predict the future?          │
│                                                             │
│  ─────────────────────────────────────────────────────────  │
│                                                             │
│  CRITIQUE                      │      CONSTRUCTION          │
│  01 Search engines leak        │      03 Systemic Models    │
│  02 Models can't forget        │         (building now)     │
│                                │                            │
│  ─────────────────────────────────────────────────────────  │
│                                                             │
│  "Don't just find the problems—build the solutions."       │
│                                                             │
└─────────────────────────────────────────────────────────────┘

Animations:
- Two-column layout for Critique vs Construction
- Items reveal as you scroll
- Quote at end has emphasis animation
```

### 4. About Section
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ABOUT                                                      │
│                                                             │
│  Bio paragraph...                                           │
│                                                             │
│  ─────────────────────────────────────────────────────────  │
│                                                             │
│  EXPERIENCE                                                 │
│                                                             │
│  2025        ByteDance                                      │
│  │           Software Engineer Intern                       │
│  │                                                          │
│  2024        NYU Research                                   │
│  │           Research Assistant                             │
│  │                                                          │
│  2023        CITIC Poly Fund                                │
│              Data Intern                                    │
│                                                             │
│  ─────────────────────────────────────────────────────────  │
│                                                             │
│  EDUCATION                                                  │
│  UCSD (current) · NYU Tandon                               │
│                                                             │
└─────────────────────────────────────────────────────────────┘

Animations:
- Timeline line draws down as you scroll
- Each experience item fades in
```

### 5. Contact/Footer
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                                                             │
│                    w.wayne.vip@gmail.com                    │
│                                                             │
│                                                             │
└─────────────────────────────────────────────────────────────┘

Simple, centered, maybe with subtle hover effect on email.
```

---

## File Structure (Updated)

```
frontend/
├── app/
│   ├── layout.tsx
│   ├── page.tsx              # Single page with all sections
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── Header.tsx        # Scroll-aware nav
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── Research.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   └── ui/
│       ├── ScrollReveal.tsx  # Reusable scroll animation wrapper
│       ├── AnimatedText.tsx  # Text reveal animations
│       └── ProjectCard.tsx
├── lib/
│   ├── content.ts
│   └── utils.ts
└── hooks/
    └── useScrollProgress.ts  # Track scroll position
```

---

## Implementation Order

1. **Install Framer Motion**
2. **Update fonts to Syne + Inter**
3. **Create ScrollReveal component**
4. **Rebuild as single page with sections**
5. **Add scroll-triggered animations per section**
6. **Refine timing and easing**
7. **Add hover states and micro-interactions**
8. **Polish responsive behavior**

---

## Key Principles Reminder

- **Minimalist but not simplistic**: Few elements, but each is refined
- **Animation as content**: Movement fills the "emptiness"
- **Progressive reveal**: Reward scrolling with new content
- **No jarring transitions**: Everything flows
- **Performance first**: No janky scroll
