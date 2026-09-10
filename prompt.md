---
name: Technical Portfolio
theme: Technical Portfolio
theme-mode: Dark
aesthetic: Apex Engineering / Dark Developer Dashboard
document: Portfolio Specifications & Wireframe Prompt
target-profile: G Gyanesh - B.Tech CSE (AI/ML)
source: Profile (1).pdf
design-spec: design.md
prd-spec: prd.md
---

# Portfolio Prompt & Specifications

## 1. Design System Foundation

### Color Palette & Accessibility
- **Canvas Base (`#0B0F19`):** Viewport backdrop establishing dark technical focus.
- **Surface Elevation 1 (`#111827`):** Nav header, major section backdrops, footer.
- **Surface Elevation 2 (`#1E293B`):** Cards, terminal frames, education blocks.
- **Surface Elevation 3 (`#334155`):** Dividers, borders, tag outlines.
- **Primary Accent (`#3B82F6` / `#ADC6FF`):** Call-to-action buttons, active states, key anchors.
- **Secondary Accent (`#60A5FA`):** Interactive links, metric callouts.
- **Tertiary Accent (`#38BDF8`):** Category prefixes (`01 // FOCUS`), computational badges.
- **Text High-Contrast (`#F8FAFC`):** Primary headlines, titles.
- **Text Medium-Contrast (`#94A3B8`):** Body paragraphs, narrative text.
- **Text Low-Contrast (`#64748B`):** Metadata, dates, breadcrumbs.
- **Status Indicator (`#10B981`):** Glowing emerald status dot for internship availability.

### Typography
- **Headlines:** `Plus Jakarta Sans`, Weights: 600, 700. Tightly tracked (`-0.02em`).
- **Body Text:** `Inter`, Weight: 400, 500. Line-height: `1.6`, maximum line length: `68ch`.
- **Code & Labels:** `JetBrains Mono`, Weights: 500, 600. Monospaced tags, prefix indices, metadata.

### Grid & Density
- **Container Max-Width:** `76rem` (1216px).
- **Desktop Grid:** 12 columns, 24px gutters, 32px safe outer padding.
- **Tablet Grid:** 8 columns, 16px gutters, 24px safe outer padding.
- **Mobile Grid:** 4 columns, 16px gutters, 16px safe outer padding.
- **Spacing Scale:** 8px baseline modular scale (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px).

---

## 2. Section Layouts & Information Architecture

```
HOME
├── 01. HERO
│   ├── Name: G Gyanesh
│   ├── Role: CSE (AI/ML) Undergraduate
│   ├── Key Pillars: Python • AI/ML • Problem Solving
│   ├── Summary: Motivated Computer Science student exploring AI/ML and practical tools
│   ├── Primary CTA: View Projects (#projects)
│   ├── Secondary CTA: Contact Me (#contact)
│   └── Tertiary CTA: Download Resume
│
├── 02. ABOUT
│   ├── Section Prefix: 02 // WHO_I_AM
│   ├── Who I Am: Analytical student grounded in computer science fundamentals
│   ├── Background: 1st Year B.Tech at GIET University Gunupur (CSE IN AI ML)
│   ├── Areas of Interest: Artificial Intelligence, Machine Learning, Problem Solving
│   ├── What Drives Me: Rigorous learning, building software that solves tangible problems
│   └── Career Direction: Growing toward AI/ML Engineering & Systems Development
│
├── 03. SKILLS
│   ├── Section Prefix: 03 // PROFICIENCIES
│   ├── Technical Skills:
│   │   ├── Python (Proficient)
│   │   ├── DBMS / Relational Databases
│   │   └── AI/ML (Foundations, Model Development)
│   ├── Problem-Solving:
│   │   └── Algorithmic thinking & analytical breakdown
│   └── Soft Skills:
│       ├── Decision Making
│       └── Crisis Management
│
├── 04. PROJECTS
│   ├── Section Prefix: 04 // BUILDS_AND_SYSTEMS
│   ├── Featured Project:
│   │   ├── Project Title
│   │   ├── Problem Statement
│   │   ├── Solution Architecture
│   │   ├── Technologies Used
│   │   └── Repository / Demo Links
│   ├── Secondary Projects:
│   │   ├── Project 02 Card
│   │   ├── Project 03 Card
│   │   └── Project 04 Card
│   └── Project Philosophy:
│       └── Learn → Build → Solve
│
├── 05. EDUCATION
│   ├── Section Prefix: 05 // ACADEMIC_JOURNEY
│   ├── Institution: GIET University Gunupur
│   ├── Degree: Bachelor of Technology (B.Tech)
│   ├── Specialization: CSE IN AI ML
│   ├── Cohort: 2025 / Current
│   └── Academic Focus: Foundational CS, Core Data Structures, AI/ML Specialization
│
├── 06. ACHIEVEMENTS
│   ├── Section Prefix: 06 // VERIFIED_CREDENTIALS
│   ├── Certifications (Populated strictly when verified)
│   ├── Awards (Populated strictly when verified)
│   ├── Recognitions (Populated strictly when verified)
│   └── Workshops & Hackathons (Populated strictly when verified)
│
└── 07. CONTACT
    ├── Section Prefix: 07 // REACH_OUT
    ├── Headline: Let's Connect
    ├── Email: ggyanesh1813@gmail.com (Instant Click-to-Copy)
    ├── LinkedIn: www.linkedin.com/in/g-gyanesh-2bb7a9376
    ├── Location: Jharsuguda, Odisha, India
    └── Internship & Collaboration Availability Callout
```