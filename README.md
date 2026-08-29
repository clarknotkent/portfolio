# Portfolio — Kent Elrond Andionne Aspa

Personal portfolio presenting software engineering work, a small-form-factor PC build, and creative output. Next.js 16, statically exported, deployed to GitHub Pages.

Product context — audience, positioning, and the constraints future work must preserve — lives in [PRODUCT.md](PRODUCT.md).

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to out/
npm run lint
```

`dev` and `build` both run two generators first (see [Generated files](#generated-files)); never call `next build` directly or the manifests go stale.

## Routes

| Route | Contents |
| --- | --- |
| `/` | Hero — status, headline, one CTA |
| `/projects` | Tabbed: Software Engineering (10), PC Building (1), Creative Works (2) |
| `/projects/[slug]` | Per-project detail, screenshots, stack |
| `/about` | Education, organisations, volunteering, stack, certifications |
| `/off-keyboard` | Flag football, event photography, community building |
| `/contact` | Email, LinkedIn, GitHub, Instagram |
| `not-found` | Custom 404 |

## Layout

```
src/
├── app/
│   ├── layout.tsx              root layout, metadata, fonts, skip link
│   ├── page.tsx                home
│   ├── not-found.tsx           404
│   ├── globals.css             tokens, shell, keyframes
│   ├── icon.svg                favicon (the navbar mark)
│   ├── apple-icon.png          180x180 touch icon
│   ├── fonts/                  Valley Sans (SIL OFL — keep OFL.txt)
│   └── <route>/
│       ├── layout.tsx          per-route metadata (pages are client components)
│       └── page.tsx
├── components/
│   ├── common/   Navbar, Footer
│   ├── sections/ Hero
│   └── ui/       Button
└── lib/
    ├── projects.ts             all project content
    ├── site.ts                 name, origin, description, OG image
    ├── motion.ts               shared entrance/crossfade, reduced-motion aware
    ├── utils.ts                cn(), withBasePath()
    ├── screenshot-dims.ts      GENERATED
    └── photo-exif.ts           GENERATED
```

## Design system

Tokens are declared in `globals.css` and exposed as Tailwind utilities through `@theme`. **Use the utilities, not hex literals** — there are currently zero arbitrary colour values in components, which is what keeps contrast from drifting.

| Token | Value | Utility |
| --- | --- | --- |
| Canvas | `#FCFCFD` | `bg-canvas` |
| Ink | `#09090B` | `text-ink` |
| Surface | `#F3F4F6` | `bg-surface` |
| Hairline | `#E5E7EB` | `border-hairline` |
| Muted | `#71717A` | `text-muted` |
| Muted strong | `#6B6B73` | `text-muted-strong` (on surface fills) |
| Primary | `#4F46E5` | `text-primary` / `bg-primary` |
| Success | `#059669` | `bg-success` |

- **Type:** Valley Sans (display, self-hosted), Manrope (body), JetBrains Mono (metadata).
- **Shape:** 2px radius. Elevation from 1px hairlines and whitespace, not shadows.
- **Shell:** one container — 1120px max, gutters 20 / 32 / 48 — used by nav, footer, and every page.
- **Background:** a faint 40px grid; components align to it.
- **Motion:** 150ms hover, 200ms entry, `--ease-out`. Nothing over 300ms. `transform`/`opacity` only. `prefers-reduced-motion` honoured.

Light mode only, by design. There is no dark theme.

## Generated files

Two build-time generators keep static data out of the client bundle. Both are committed; re-run them after changing images.

| Script | Writes | Why |
| --- | --- | --- |
| `npm run dims` | `src/lib/screenshot-dims.ts` | Real image dimensions, so galleries frame each image at its own ratio with no layout shift |
| `npm run exif` | `src/lib/photo-exif.ts` | Photography EXIF baked at build time, so `exifr` never ships to the browser |

## Adding a project

Append a `Project` to `src/lib/projects.ts`, put screenshots in `public/images/software-engineering/<slug>/`, and run `npm run dims`. The card and detail route render automatically.

Set `featured: true` to make a project span the grid row. `screenshotLayout` picks the gallery shape: `desktop-grid`, `mobile-row`, or omitted for auto.

**Verify every stack claim against the project's own repository on its current branch.** This has been wrong before.

## Deployment

GitHub Actions builds and publishes to GitHub Pages on push to `main`/`master` (`.github/workflows/deploy.yml`).

Because the site can be served from a repository subpath, `next.config.ts` derives `basePath` from `GITHUB_REPOSITORY`. **Route every asset path through `withBasePath()`** — a bare root-relative path works locally and 404s in production.

Static export means no server runtime, no API routes, and `images.unoptimized`. Size images before committing them; nothing in the build will do it for you.
