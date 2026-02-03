# Implementation Guide

**Purpose**: Tell the developer where to get each piece of content when building the website.

---

## Content Source Map

### Landing Page

| Section | Content | Source File |
|---------|---------|-------------|
| **Hero - Name** | "WAYNE WANG" | Hardcode |
| **Hero - Tagline** | "Building tools for the post-AI world" | Hardcode |
| **Selected Projects** | 3 projects with name + one-liner | `META/Project/PROFILE.md` → "Project Portfolio" section |
| **Research Teaser** | Quote + 3 items | `META/Research/PROFILE.md` → "Publications" + "Current Research" |
| **Currently** | School + previous | `META/WAYNE_PROFILE.md` → "Quick Facts" |
| **Footer - Email** | w.wayne.vip@gmail.com | `META/WAYNE_PROFILE.md` |

---

### Research Page (`/research`)

| Section | Content | Source File |
|---------|---------|-------------|
| **The Question** | "How do we evaluate if AI can actually predict the future?" | Hardcode |
| **The Critique (2025)** | Paper 1 + Paper 2 details | `META/Research/PROFILE.md` → "Publications" |
| **The Construction (2026)** | Systemic World Models | `META/Research/PROFILE.md` → "Current Research" |
| **The Insight** | "Don't just find the problems—build the solutions." | Hardcode |

#### Paper Details to Extract

**Paper 1 (ACL 2026)**:
```
Title: Temporal Leakage in Search-Engine Date-Filtered Web Retrieval
Stat: 71% of date-filtered queries return post-cutoff data
Position: 4th author
Venue: ACL 2026
```
Source: `META/Research/PROFILE.md` → Section "1. Temporal Leakage..."

**Paper 2 (arXiv)**:
```
Title: Simulated Ignorance Fails
Stat: 52% performance gap when simulating ignorance
Position: 2nd author
Venue: arXiv
Link: https://arxiv.org/abs/2601.13717
```
Source: `META/Research/PROFILE.md` → Section "2. Simulated Ignorance Fails"

**Paper 3 / Active Project**:
```
Title: Systemic World Models
Description: Structured forecasting with Threads, Timelines, Causes
Status: Active / UCSD Collaborator
```
Source: `META/Research/PROFILE.md` → Section "Current Research"

---

### Projects Page (`/projects`)

| Project | Source | Live URL |
|---------|--------|----------|
| Graphex | `META/Project/Graphex.md` | https://graphex.app |
| Notate | `META/Project/Notate.md` | https://vw-ai.github.io/Notate.ai/ |
| Where2Meet | `META/Project/where2meet.md` | https://www.where2meet.org/ |
| Inxtone | `META/Project/Inxtone.md` | https://inxtone.com |
| VibeHub | `META/Project/Vibehub.md` | https://vibehub.icu/ |

#### Per-Project Content to Extract

For each project, extract from its `.md` file:

| Field | Source Location |
|-------|-----------------|
| Name | File title |
| One-liner | "What is X?" section, first sentence |
| Problem | "Problems & Solutions" → Problem statement |
| Solution | "Problems & Solutions" → Solution description |
| Tech Stack | "Technology" or mentioned in implementation |
| Status | Infer from content (live/concept/WIP) |
| URL | `META/Project/INDEX.md` |

---

### About Page (`/about`)

| Section | Content | Source File |
|---------|---------|-------------|
| **Bio** | Professional summary | `META/WAYNE_PROFILE.md` → "Professional Summary" |
| **Narrative** | Origin → Insight → Philosophy | `META/WAYNE_PROFILE.md` → "The Wayne Wang Narrative" |
| **Experience Timeline** | ByteDance → NYU → CITIC | `META/Experience/PROFILE.md` |
| **Education** | UCSD MS, NYU BS | `META/Education/PROFILE.md` |

#### Experience Items to Extract

| Company | Period | Role | Source |
|---------|--------|------|--------|
| ByteDance | Jun-Sep 2025 | SWE Intern | `META/Experience/PROFILE.md` |
| NYU Research | Jun 2024-May 2025 | Research Assistant | `META/Experience/PROFILE.md` |
| CITIC Poly Fund | Jun-Aug 2023 | Data Intern | `META/Experience/PROFILE.md` |

---

## Visual Language Reference

| Property | Value | Notes |
|----------|-------|-------|
| **Font - Primary** | Space Grotesk | Headings, nav |
| **Font - Mono** | JetBrains Mono | Technical details |
| **Font Weights** | 400, 500 only | No bold |
| **Background** | #FAFAFA | Not pure white |
| **Text** | #1A1A1A | Not pure black |
| **Accent** | None (or minimal) | Only on hover if at all |
| **Page Margin** | 15-20% viewport | Wide margins |
| **Section Gap** | 120px+ | Generous spacing |
| **Base Unit** | 8px | All spacing multiples |

---

## Interaction Specs

| Trigger | Animation | Duration | Easing |
|---------|-----------|----------|--------|
| Page load | Staggered fade-in | 300ms per element, 50ms stagger | ease-out |
| Scroll into view | Fade + slight translate-y | 400ms | ease-out |
| Hover on project | Scale 1.02 + show description | 200ms | ease |
| Hover on link | Underline draws left→right | 200ms | ease |
| Page transition | Shared element (if feasible) | 300ms | ease-in-out |

---

## File Structure (Recommended)

```
frontend/
├── app/
│   ├── page.tsx              # Landing
│   ├── research/
│   │   └── page.tsx          # Research narrative
│   ├── projects/
│   │   ├── page.tsx          # Project index
│   │   └── [slug]/
│   │       └── page.tsx      # Project detail
│   └── about/
│       └── page.tsx          # About + experience
├── components/
│   ├── layout/
│   │   ├── Header.tsx        # Minimal nav
│   │   └── Footer.tsx        # Email only
│   ├── landing/
│   │   ├── Hero.tsx
│   │   ├── ProjectsPreview.tsx
│   │   ├── ResearchTeaser.tsx
│   │   └── Currently.tsx
│   ├── research/
│   │   ├── Question.tsx
│   │   ├── Critique.tsx
│   │   ├── Construction.tsx
│   │   └── Insight.tsx
│   ├── projects/
│   │   ├── ProjectCard.tsx
│   │   └── ProjectDetail.tsx
│   └── shared/
│       ├── AnimatedSection.tsx
│       └── HoverLink.tsx
├── lib/
│   └── content.ts            # Content data (from META files)
├── styles/
│   └── globals.css           # Typography, spacing
└── public/
    └── fonts/                # Space Grotesk, JetBrains Mono
```

---

## Content Data Structure

Create `lib/content.ts` with this shape:

```typescript
// Projects
export const projects = [
  {
    slug: "graphex",
    name: "Graphex",
    oneLiner: "AI-powered learning canvas for document understanding",
    problem: "...",
    solution: "...",
    tech: ["React", "TypeScript", "..."],
    url: "https://graphex.app",
    featured: true, // Show on landing
  },
  // ... more projects
];

// Research
export const research = {
  question: "How do we evaluate if AI can actually predict the future?",
  critique: {
    year: "2025",
    papers: [
      {
        title: "Temporal Leakage in Search-Engine Date-Filtered Web Retrieval",
        stat: "71% of date-filtered queries return post-cutoff data",
        venue: "ACL 2026",
        position: "4th author",
      },
      {
        title: "Simulated Ignorance Fails",
        stat: "52% performance gap when simulating ignorance",
        venue: "arXiv",
        position: "2nd author",
        link: "https://arxiv.org/abs/2601.13717",
      },
    ],
  },
  construction: {
    year: "2026",
    project: {
      title: "Systemic World Models",
      description: "Structured forecasting with Threads, Timelines, Causes",
      status: "Active",
      role: "UCSD Collaborator",
    },
  },
  insight: "Don't just find the problems—build the solutions.",
};

// Experience
export const experience = [
  {
    company: "ByteDance",
    role: "Software Engineer Intern",
    period: "Jun - Sep 2025",
    location: "San Jose, CA",
  },
  // ... more
];

// Personal
export const personal = {
  name: "Wayne Wang",
  tagline: "Building tools for the post-AI world",
  email: "w.wayne.vip@gmail.com",
  current: "MS Computer Science @ UCSD",
  previous: "ByteDance, NYU Research",
};
```

---

## Build Checklist

### Phase 1: Landing Page
- [ ] Set up fonts (Space Grotesk, JetBrains Mono)
- [ ] Create base layout (wide margins, generous spacing)
- [ ] Build Hero (name + tagline)
- [ ] Build ProjectsPreview (3 cards)
- [ ] Build ResearchTeaser
- [ ] Build Currently
- [ ] Build Footer
- [ ] Add page load animations

### Phase 2: Research Page
- [ ] Build Question section
- [ ] Build Critique section (2 papers)
- [ ] Build Construction section
- [ ] Build Insight section
- [ ] Add scroll animations

### Phase 3: Projects
- [ ] Build project index page
- [ ] Build project detail template
- [ ] Populate all 5 projects
- [ ] Add hover interactions

### Phase 4: About
- [ ] Build bio section
- [ ] Build experience timeline
- [ ] Build education section

### Phase 5: Polish
- [ ] Responsive design
- [ ] Page transitions
- [ ] Performance optimization (< 1s LCP)
- [ ] Meta tags / SEO
- [ ] Favicon

---

## Quick Reference: What Goes Where

```
"Wayne Wang"                    → Hero
"Building tools for..."         → Hero tagline
Graphex, Notate, VibeHub       → Landing projects
"I found the problems..."       → Research teaser (landing)
71%, 52%                        → Research page stats
"Don't just find..."            → Research page insight
ByteDance, NYU, CITIC          → About page timeline
UCSD MS, NYU BS                → About page education
w.wayne.vip@gmail.com          → Footer everywhere
```
