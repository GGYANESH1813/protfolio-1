---
name: Technical Portfolio
theme: Technical Portfolio
theme-mode: Dark
framework: React (Vite)
aesthetic: Apex Engineering / Dark Developer Dashboard
document: Phased Implementation Plan
governance: Stage-by-Stage Approval Required
current-status: Stage 4 Implemented - Ready for User Confirmation
total-stages: 6
---

# Phase-Wise Implementation Plan

This document governs the phased execution of the portfolio website using the **React framework (Vite + React)**.
Each phase must be fully reviewed and explicitly confirmed by the user before proceeding to the subsequent phase.

---

## Stage Summary Table

| Stage | Title | Focus & Constraints | Gate Condition |
| :--- | :--- | :--- | :--- |
| **Stage 1** | **Page Structure Only** | Create the section scaffold in the exact order given in `prd.md`. Headings and placeholder blocks only. No styling, no components. | User Confirmation Required |
| **Stage 2** | **Visual Design** | Apply colors, typography, spacing, and hierarchy from `design.md` to existing structure. Do not add content, do not add components. | User Confirmation Required |
| **Stage 3** | **Real Content Integration** | Replace placeholders with content from `Profile (1).pdf` only. If missing, leave empty and report gap. No filler text. | User Confirmation Required |
| **Stage 4** | **Components & Interactivity** | Implement functional React components (email click-to-copy toast, project card actions, smooth navigation). | User Confirmation Required |
| **Stage 5** | **Responsive Polish** | Calibrate 12-col desktop grid, 8-col tablet, 4-col mobile stack, and persistent bottom contact action bar. | User Confirmation Required |
| **Stage 6** | **Final Review & Audit** | Cross-device validation, WCAG AA contrast audit, link verification, and performance check. | Final Sign-off |

---

## Detailed Stage Specifications

### Stage 1: Page Structure Only (Scaffolding)
- **Objective:** Create the section scaffold in the exact sequence given in `prd.md`.
- **Framework Setup:** React app skeleton with pure semantic JSX sections.
- **Order of Sections:**
  1. `01. HERO` (`#hero`)
  2. `02. ABOUT` (`#about`)
  3. `03. SKILLS` (`#skills`)
  4. `04. PROJECTS` (`#projects`)
  5. `05. EDUCATION` (`#education`)
  6. `06. ACHIEVEMENTS` (`#achievements`)
  7. `07. CONTACT` (`#contact`)
- **Strict Constraints:**
  - Headings and placeholder blocks only (e.g. `[Hero Heading Placeholder]`, `[About Narrative Placeholder]`).
  - **No styling:** Zero CSS stylesheets, zero Tailwind/inline styles, default browser rendering.
  - **No components:** No buttons, no custom cards, no interactive widgets.
- **Exit Condition:** User inspects the clean structural scaffold and confirms to move to Stage 2.

---

### Stage 2: Visual Design (Styling & Design Tokens)
- **Objective:** Apply colors, typography, spacing, and hierarchy from `design.md` to the existing structure.
- **Scope:**
  - Configure CSS custom property tokens for the dark theme (`#0B0F19` canvas, `#111827` surface, `#1E293B` cards, `#334155` borders, `#3B82F6` primary accent, `#60A5FA` secondary, `#38BDF8` tertiary, `#F8FAFC` high-contrast text, `#94A3B8` medium-contrast text).
  - Apply typography tokens: Plus Jakarta Sans for headlines, Inter for body copy, JetBrains Mono for code/labels.
  - Establish spacing scale (`space-xs` through `space-4xl`), container widths (`76rem`), and grid layouts.
- **Strict Constraints:**
  - **Do NOT add content:** Retain placeholder text blocks.
  - **Do NOT add functional components** or JavaScript interaction logic.
- **Exit Condition:** User verifies the visual design tokens, layout hierarchy, and dark studio aesthetic, then confirms to move to Stage 3.

---

### Stage 3: Real Content Integration (Profile.pdf Data Only)
- **Objective:** Replace the placeholders with the real content from `Profile (1).pdf`.
- **Content Rules:**
  - Use ONLY the content attached in `Profile (1).pdf`.
  - **Missing Data Rule:** If something is missing from the profile (e.g., project repositories, awards, certifications), leave that section empty and report what is missing.
  - **Zero Filler Text:** Do not fill gaps with fictitious projects, mock companies, or boilerplate lorem ipsum.
- **Profile Data Mapping:**
  - **Name:** G Gyanesh
  - **Headline:** Btech 1st year | Specializing in CSE AIML | Proficient in python | Skilled in DBMS | Good at decision making | Crises management | looking for internships
  - **Location:** Jharsuguda, Odisha, India
  - **Summary:** "I am a motivated Computer Science student with strong interest in AI and problem solving"
  - **Education:** GIET University Gunupur — Bachelor of Technology - BTech, CSE IN AI ML · (2025)
  - **Contact:** Email: `ggyanesh1813@gmail.com` | LinkedIn: `www.linkedin.com/in/g-gyanesh-2bb7a9376`
  - **Skills:** Python, DBMS, Decision Making, Crisis Management
- **Exit Condition:** User reviews the real content mapping and the missing data report, then confirms to move to Stage 4.

---

### Stage 4: Components & Interactivity
- **Objective:** Build out interactive React components and behaviors.
- **Scope:**
  - Interactive project card docks with hover depth and link triggers.
  - Click-to-copy email button with visual toast confirmation.
  - Smooth anchor scrolling between navigation items and page sections.
  - Pulsating terminal-emerald availability indicator.
- **Exit Condition:** User tests interactive elements and confirms to move to Stage 5.

---

### Stage 5: Responsive Polish & Mobile Optimization
- **Objective:** Guarantee flawless responsiveness across viewports.
- **Scope:**
  - Desktop 12-column calibrated grid (>= 1024px).
  - Tablet 8-column layout (768px - 1023px).
  - Mobile 4-column stack (< 768px) with persistent bottom action bar.
  - Ensure zero horizontal overflow and minimum 44px touch targets.
- **Exit Condition:** User tests across screen sizes and confirms to move to Stage 6.

---

### Stage 6: Final Review & Quality Audit
- **Objective:** Complete quality verification and final delivery.
- **Scope:**
  - Accessibility audit (WCAG AA contrast, aria labels, heading semantics).
  - Verify all links, anchors, and clipboard actions.
  - Production build verification (`npm run build`).
- **Exit Condition:** Final project sign-off.
