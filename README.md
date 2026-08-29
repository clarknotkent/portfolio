<div align="center">

# Portfolio

A personal site for engineering work that reached real users — an immunization record piloted at a barangay health centre, supply chain software for a Davao distributor, and the hardware and photographs from outside the brief.

[![Next.js 16](https://img.shields.io/badge/Next.js-16-000000?logo=next.js&logoColor=white)](https://nextjs.org)
[![React 19](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![TypeScript 5](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS 4](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Framer Motion 12](https://img.shields.io/badge/Framer_Motion-12-0055FF?logo=framer&logoColor=white)](https://motion.dev)
[![Static export](https://img.shields.io/badge/Static-export-1E1E1E)](#deployment)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-deployed-222222?logo=githubpages&logoColor=white)](https://clarknotkent.github.io/portfolio)

</div>

---

The portfolio is a statically exported Next.js site with no server runtime, no database and no API routes. Every page is HTML on disk before a visitor arrives.

- **No backend at all** — `output: "export"`, so a feature that needs a server is out of scope rather than deferred
- **Two build-time generators** — image dimensions and photo EXIF are measured once and compiled in, so the browser never ships a parser to read them
- **One shell, one type scale, one palette** — 1120px container, nine colour tokens, zero hex literals in components

---

## Table of Contents

- [Why it looks like this](#why-it-looks-like-this)
- [Routes](#routes)
- [Design system](#design-system)
- [Generated files](#generated-files)
- [Running it](#running-it)
- [Project structure](#project-structure)
- [Adding a project](#adding-a-project)
- [Accessibility](#accessibility)
- [Deployment](#deployment)
- [Known issues](#known-issues)
- [Credits](#credits)

---

## Why it looks like this

The audience is a recruiter with a link and about a minute. That decided nearly everything.

The surface carries the decision and the detail pages carry the justification, so the projects index leads with the work that reached real users rather than the work that was hardest to build. Colour is one accent and nothing else. Elevation is a 1px hairline, not a shadow, because shadows at this density read as noise. A faint 40px grid sits behind every page and components align to it — it is a measurement surface, not decoration.

There is no dark mode. A single light theme, committed to, beats two half-tuned ones.

---

## Routes

| Route | What it holds |
| --- | --- |
| `/` | Hero — availability, one headline, one call to action |
| `/projects` | Tabbed: Software Engineering (10), PC Building (1), Creative Works (2) |
| `/projects/[slug]` | Per-project detail, telemetry strip, screenshot gallery, stack |
| `/about` | Education, organisations, volunteering, stack, certifications |
| `/off-keyboard` | Flag football, event photography, community building |
| `/contact` | Email as the one action, then the links |
| `not-found` | A 404 in the design system rather than the framework default |

Pages are client components, so each route carries its metadata in a sibling `layout.tsx`. That is what gives all sixteen pages distinct titles and share cards instead of one generic pair.

---

## Design system

Tokens live in `src/app/globals.css` and reach components as Tailwind utilities through `@theme`. **Use the utilities, never hex literals** — there are currently zero arbitrary colour values in components, and that is what keeps contrast from drifting.

| Token | Value | Utility | Used for |
| --- | --- | --- | --- |
| Canvas | `#FCFCFD` | `bg-canvas` | Page ground |
| Ink | `#09090B` | `text-ink` | Headings, body |
| Surface | `#F3F4F6` | `bg-surface` | Tags, fills |
| Hairline | `#E5E7EB` | `border-hairline` | Every structural line |
| Muted | `#71717A` | `text-muted` | Secondary text |
| Muted strong | `#6B6B73` | `text-muted-strong` | Secondary text **on** a surface fill |
| Primary | `#4F46E5` | `text-primary` | Links, active state, focus rings |
| Success | `#059669` | `bg-success` | Availability dot |

Two muted greys exist for one reason: `#71717A` clears AA on the canvas at 4.71:1 but fails on the surface fill at 4.39:1. `muted-strong` is the surface variant at 4.80:1.

**Type.** Valley Sans for display (self-hosted, SIL OFL), Manrope for body, JetBrains Mono for metadata. Display is 36/48px, body 16/18px at 1.6, mono 12px.

**Shape.** 2px radius everywhere. Pills only on the status dot and tags.

**Motion.** 150ms hover, 200ms entry, `--ease-out`. Nothing over 300ms, `transform` and `opacity` only, and `prefers-reduced-motion` collapses it. Shared variants live in `src/lib/motion.ts` rather than inline at each call site.

---

## Generated files

Two scripts run before `dev` and `build`. Both outputs are committed; re-run them after changing images.

| Script | Writes | Why it exists |
| --- | --- | --- |
| `npm run dims` | `src/lib/screenshot-dims.ts` | Real pixel dimensions for every image, so galleries frame each one at its own ratio with no layout shift. Measuring in the browser would cause the shift it prevents. |
| `npm run exif` | `src/lib/photo-exif.ts` | Photography EXIF read once at build. The lightbox used to ship `exifr` to every visitor and refetch the full-size image to parse it — 128 KB and a network round trip for static data. |

Neither file should be edited by hand.

---

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to out/
npm run lint
```

Use `npm run dev` and `npm run build`, never bare `next dev` / `next build`, or the two manifests above go stale against the images on disk.

---

## Project structure

```
src/
├── app/
│   ├── layout.tsx              root layout, metadata, fonts, skip link
│   ├── page.tsx                home
│   ├── not-found.tsx           404
│   ├── globals.css             tokens, shell, keyframes, reduced motion
│   ├── icon.svg                favicon — the navbar mark
│   ├── apple-icon.png          180×180 touch icon
│   ├── fonts/                  Valley Sans + OFL.txt (the licence must ship)
│   └── <route>/
│       ├── layout.tsx          per-route metadata
│       └── page.tsx
├── components/
│   ├── common/   Navbar (with mobile drawer), Footer
│   ├── sections/ Hero
│   └── ui/       Button
└── lib/
    ├── projects.ts             all project content
    ├── site.ts                 name, origin, description, OG image
    ├── motion.ts               shared motion, reduced-motion aware
    ├── utils.ts                cn(), withBasePath()
    ├── screenshot-dims.ts      generated
    └── photo-exif.ts           generated

scripts/                        the two generators
public/images/                  23 MB, capped at 2000px on the long edge
```

---

## Adding a project

Append a `Project` to `src/lib/projects.ts`, drop screenshots in `public/images/software-engineering/<slug>/`, and run `npm run dims`. The card and the detail route render from the data.

```ts
{
  slug: "example",
  title: "Example — What It Does",
  shortDescription: "One sentence for the card.",
  description: "The long form, for the detail page.",
  techStack: ["Next.js", "PostgreSQL"],
  role: "Full-Stack Developer",
  category: "Software Engineering",
  screenshots: ["/images/software-engineering/example/1.png"],
  screenshotLayout: "desktop-grid",   // or "mobile-row", or omit
  featured: true,                     // spans the grid row
  repoUrl: "https://github.com/clarknotkent/example",
}
```

**Check every stack and status claim against that project's own repository on its current branch.** This has been wrong before: Health Key was described here as using Supabase while the branch in question had no database at all. When the repo and this site disagree, the repo wins.

---

## Accessibility

Currently clean, and worth keeping that way.

- One `h1` per route, no heading-level skips, all four landmarks, alt text on every image
- Interactive elements are `<button>` or `<a>` — never a `<div>` with a click handler, and never nested inside one another
- Project cards use a stretched link on the title, which is what lets the repository link be a real focusable sibling rather than a click handler inside another anchor
- The projects tab rail implements the WAI-ARIA tabs pattern: `tablist` / `tab` / `tabpanel`, `aria-selected`, roving tabindex, arrow keys with wrap
- Tap targets ≥44px, padded rather than enlarged
- A skip link ahead of the nav; Escape closes the mobile drawer, which is `inert` while shut

---

## Deployment

GitHub Actions builds and publishes to GitHub Pages on push to `main` or `master` — see [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

The site can be served from a repository subpath, so `next.config.ts` derives `basePath` from `GITHUB_REPOSITORY` and exposes it as `NEXT_PUBLIC_BASE_PATH`. **Every asset path goes through `withBasePath()`.** A bare root-relative path works locally and 404s in production, which is the one failure this repo produces most easily.

`images.unoptimized` is forced by static export, so images ship at source resolution. Size them before committing; nothing in the build will do it for you.

---

## Known issues

- **The hero shows a 600ms skeleton before content.** Nothing is loading — the delay is artificial and could go.
- **No PNG favicon fallback.** `icon.png` alongside `icon.svg` reproducibly crashes the Turbopack build (`Dependency tracking is disabled so invalidation is not allowed`), so only the SVG and the Apple touch icon ship. Safari before 16 shows no tab icon.
- **The contact form is gone.** Contact is the email address plus links, deliberately — the old form assembled a `mailto:` URL and silently did nothing where no mail client was configured.
- **`tinas-aesthetics-wellness-booking` has no source repository**, so its stack and description cannot be verified the way the others can.

---

## Credits

Built by [Kent Elrond Andionne Aspa](https://github.com/clarknotkent) — BS Information Technology, Ateneo de Davao University.

Valley Sans by [Helsinki Type Studio](https://github.com/HelsinkiTypeStudio/valley-sans), under the SIL Open Font License 1.1. Manrope and JetBrains Mono via Google Fonts.

Project content and screenshots come from each project's own repository. Descriptions are written from those READMEs rather than restated from memory.
