---
name: Technical Portfolio
theme: Technical Portfolio
theme-mode: Dark
framework: React (Vite)
aesthetic: Apex Engineering / Dark Developer Dashboard
document: Operational Build Rules & Constraints
governance: Strict Phased Progression
reference-design: design.md
reference-prd: prd.md
reference-content: Profile (1).pdf
---

## Build Rules
- **Strict Phased Progression:** Work strictly stage by stage. Do not proceed to the subsequent stage until explicit user confirmation is received.
- **Stage Isolation:** Each stage must respect its defined boundaries (e.g. Stage 1 has zero styling and zero components; Stage 2 has zero real content; Stage 3 uses strictly Profile.pdf data).
- **Authentic Content Rule:** Use only the real content from `Profile (1).pdf`. If something is missing, leave that section empty and tell the user what is missing. Do not fill the gap and do not write filler text.

## Context
- **Candidate:** G Gyanesh — 1st-year B.Tech undergraduate student specializing in Computer Science & Engineering (AI/ML) at GIET University Gunupur.
- **Location:** Jharsuguda, Odisha, India.
- **Objective:** High-impact technical portfolio website to secure engineering internships.
- **Persona & Tone:** Methodical, analytical, calm, engineering-focused, and transparent. Avoid marketing buzzwords and hyperbole.

## Design
- **Theme:** Methodical, high-density dark developer dashboard / IDE environment ("Apex Engineering").
- **Colors:**
  - Canvas Base: `#0B0F19`
  - Surface Elevation 1: `#111827`
  - Surface Elevation 2 (Cards): `#1E293B`
  - Surface Elevation 3 (Borders): `#334155`
  - Primary Accent: `#3B82F6` / `#ADC6FF`
  - Secondary Accent: `#60A5FA`
  - Tertiary Accent: `#38BDF8`
  - High-Contrast Text: `#F8FAFC`
  - Medium-Contrast Text: `#94A3B8`
  - Low-Contrast Text: `#64748B`
  - Availability Pulse: `#10B981` (Terminal Emerald)
- **Typography:**
  - Headlines: Plus Jakarta Sans
  - Body: Inter (Max reading width `68ch`)
  - Code & Badges: JetBrains Mono

## Responsive Behaviour
- **Desktop (>= 1024px / 1440px target):** 12-column calibrated grid with 16px/24px gutters, compact developer density, two-column asymmetric split layouts.
- **Tablet / Small Desktop (768px - 1023px):** Fluid grid scaling, stacked dual-columns where required.
- **Mobile (< 768px):** Single-column vertical stack, persistent bottom action bar for primary CTA (`Get in Touch`), touch-friendly targets, no horizontal overflows.

## Development (Tech Stack)
- **Framework:** React with Vite build tool.
- **Styling:** Vanilla CSS (CSS Modules / standard CSS custom property tokens conforming strictly to `design.md`).
- **Semantic Components:** Structured modular React components reflecting the 7 PRD sections.
- **Interactions:** React hooks for clipboard copy feedback, smooth anchor scrolling, and modal/toast states.
- **Accessibility:** Semantic headings hierarchy (`<h1>` down to `<h4>`), explicit `aria-label` attributes on interactive elements, high contrast ratios exceeding WCAG AA.
