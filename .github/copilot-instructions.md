# Working in this repository

Portfolio for Kent Elrond Andionne Aspa. Next.js 16 (App Router, Turbopack), React 19, TypeScript, Tailwind v4, Framer Motion. Statically exported to GitHub Pages.

Read [PRODUCT.md](../PRODUCT.md) before changing anything user-facing — it records the audience, the positioning, and the facts that must not be invented. [README.md](../README.md) covers structure, tokens, and generated files.

## Constraints that break things if ignored

- **Static export.** `output: "export"`. No server runtime, no API routes, no database, no server actions. A feature needing a backend is out of scope.
- **Base path.** The site may be served from a repo subpath. Every asset path goes through `withBasePath()` from `src/lib/utils.ts`. A bare root-relative path works locally and 404s in production.
- **`images.unoptimized: true`**, forced by static export. Images ship at source resolution — size them before committing. Cap the long edge around 2000px.
- **Two generators run before dev and build.** Use `npm run dev` / `npm run build`, never bare `next dev` / `next build`, or `screenshot-dims.ts` and `photo-exif.ts` go stale.
- **`src/lib/screenshot-dims.ts` and `src/lib/photo-exif.ts` are generated.** Never hand-edit; run `npm run dims` / `npm run exif`.
- **`src/app/fonts/OFL.txt` must stay.** The SIL Open Font License requires the notice to ship with the font.

## Design system

Tokens live in `src/app/globals.css` and are exposed as Tailwind utilities via `@theme`.

**Use the utilities, never hex literals.** Components currently contain zero arbitrary colour values; keep it that way. `bg-canvas`, `text-ink`, `bg-surface`, `border-hairline`, `text-muted`, `text-muted-strong`, `text-primary`, `bg-success`.

- Light mode only. There is no dark theme; do not add one.
- Fonts: Valley Sans (display, self-hosted), Manrope (body), JetBrains Mono (metadata). Not Inter.
- 2px radius. Elevation comes from 1px hairlines and whitespace — not shadows.
- One shell: 1120px max-width, gutters 20 / 32 / 48. Nav, footer, and every page use it.
- A faint 40px background grid; components align to it. This is deliberate, not decoration.

## Motion

`src/lib/motion.ts` holds the shared entrance and crossfade, and reads `useReducedMotion`. Reuse it rather than writing inline variants.

- 150ms hover, 200ms entry, `var(--ease-out)`. Nothing over 300ms.
- Animate `transform` and `opacity` only.
- Prefer CSS transitions over JS: they are interruptible and run off the main thread.
- Never gate content visibility on an animation completing — if it does not run, the content must still be visible.
- Pressable elements get `active:scale-[0.97]` with `transform` in the transition list.

## Accessibility — currently clean, keep it that way

Every route has one `h1`, no heading-level skips, all four landmarks, and alt text on every image.

- Interactive elements are `<button>` or `<a>` — never a `<div>`/`<span>` with a click handler.
- No interactive element nested inside another. Cards use a stretched link (`after:inset-0`) on the title so the repo link can be a real sibling.
- Tap targets ≥44px; pad the hit area rather than enlarging the visual.
- Focus rings on everything: `focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-2`.
- The projects tab rail implements the full WAI-ARIA tabs pattern — `tablist`/`tab`/`tabpanel`, `aria-selected`, roving tabindex, arrow keys.

## Content

All project content is `src/lib/projects.ts`. Adding a project is a data edit — append a `Project`, drop screenshots in `public/images/software-engineering/<slug>/`, run `npm run dims`.

**Verify every stack and status claim against that project's own repository on its current branch.** This has been wrong before: Health Key was described as using Supabase when the branch in question had no database at all. When the repo and the site disagree, the repo wins.

Never invent testimonials, metrics, user counts, or uptime figures. None exist.

## Verify before claiming done

`npm run lint`, `npx tsc --noEmit`, and `npm run build` must all pass. For anything visual, take a screenshot — a green build says nothing about whether the page renders correctly.
