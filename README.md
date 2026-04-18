# Clarknotkent Portfolio

Personal portfolio showcasing software engineering projects, PC builds, creative works, and the Seniors Integration Program (SIP) reflection output. Built with Next.js 16 and deployed as a static site on GitHub Pages.

## Pages

- **Home** (`/`) — Hero section and introduction
- **Projects** (`/projects`) — Tabbed showcase: Software Engineering, PC Building, Creative Works
  - Individual detail pages at `/projects/[slug]`
- **SIP** (`/sip`) — Seniors Integration Program output, organized into three tabs:
  - *AdDU Journey Map* — 2022–2026 timeline with per-year reflections and images
  - *Conversion Story* — long-form narrative in 6 sections with alternating image/text layout
  - *SIP Passion Plan* — Personal Mission Statement, Prayer for My Future Self, and a phased 10–20 year plan
- **About** (`/about`) — Education, organizations, volunteering, tech stack, certifications
- **Off-Keyboard** (`/off-keyboard`) — Flag Football, Event Photography, Community Building galleries
- **Contact** (`/contact`) — Email and social links

## Tech Stack

- **Framework:** Next.js 16.1.3 (App Router, Turbopack, static export)
- **UI:** React 19.2.3, Tailwind CSS v4
- **Animations:** Framer Motion 12
- **Icons:** react-icons, lucide-react
- **Utilities:** clsx, tailwind-merge, exifr (photo EXIF metadata)
- **Language:** TypeScript 5
- **Typography:** Inter (Google Fonts)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Production build:

```bash
npm run build
```

Static preview:

```bash
npx serve out
```

## Deployment

Deployed to GitHub Pages via GitHub Actions (`.github/workflows`). Pushes to `master` trigger a static export build and publish. A `withBasePath` helper in [src/lib/utils.ts](src/lib/utils.ts) handles asset paths under the repo subpath.

To enable: Repository Settings → Pages → Source: **GitHub Actions**.

## Project Structure

```
src/
├── app/
│   ├── page.tsx                 # Home
│   ├── layout.tsx               # Root layout + metadata
│   ├── globals.css              # Tailwind base + tokens
│   ├── projects/
│   │   ├── page.tsx             # Tabbed showcase
│   │   └── [slug]/
│   │       ├── layout.tsx       # Project detail wrapper
│   │       └── page.tsx         # Individual project detail
│   ├── sip/page.tsx             # SIP page with Journey Map / Conversion Story / Passion Plan tabs
│   ├── about/page.tsx
│   ├── off-keyboard/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── common/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/Hero.tsx
│   └── ui/Button.tsx
└── lib/
    ├── projects.ts              # Project data model
    └── utils.ts                 # withBasePath, cn helpers

public/images/
├── conversion/                  # Reserved for Conversion Story images
├── journey-map/                 # AdDU Journey Map year images (image.jpg … image5.jpg)
├── photography/                 # 11 photos with EXIF metadata
├── digital-art/                 # Digital art gallery
├── pc/                          # PC build photos
├── profile/                     # Profile photos
├── event-photography/
├── community-building/
├── flag-football/
└── software-engineering/        # Project screenshots grouped by stack
```

## Design System

- **Background:** Deep Slate `#0F172A`
- **Surfaces:** Slate Gray `#1E293B` (cards), border `#334155`
- **Accent:** Electric Cyan `#00D9FF` (hover `#6FC3DF`)
- **Secondary accent:** Indigo `#6366F1` (Software Engineering card hover)
- **Text:** White `#FFFFFF` primary, `#94A3B8` muted
- **Typography:** Inter, bold headings
- **Layout:** Centered `max-w-6xl` containers with 8px spacing grid
- **Motion:** Framer Motion `initial`/`whileInView` fades with light stagger; `AnimatePresence` crossfade on tab changes

## Content Summary

- **Projects (6):** NIP Immunization System (capstone), Health Key Pharma SCM, UniVents (Flutter), FormD T1 SFF build, Photography Portfolio, Digital Art Showcase
- **SIP:** Full AdDU journey timeline (2022–2026), conversion narrative, and 10–20 year passion plan
- **Organizations:** ACCESS (leadership), Davao Legionnaires, DICE
- **Volunteering:** UXPH, UX Davao, Devcon Davao
- **Certifications:** IBM Project Management, Cisco CCNA

## Author

Kent Elrond Andionne Aspa

- Email: kentaspa54@gmail.com
- LinkedIn: [linkedin.com/in/clarknotkent](https://www.linkedin.com/in/clarknotkent/)
- GitHub: [github.com/clarknotkent](https://github.com/clarknotkent)
- Instagram: [@clarknotkent_](https://instagram.com/clarknotkent_)

© 2026 Kent Elrond Andionne Aspa. All rights reserved.
