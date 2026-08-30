<div align="center">

# Portfolio

Personal portfolio site for Kent Elrond Andionne Aspa.

[![Next.js 16](https://img.shields.io/badge/Next.js-16-000000?logo=next.js&logoColor=white)](https://nextjs.org)
[![React 19](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![TypeScript 5](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS 4](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-live-222222?logo=githubpages&logoColor=white)](https://clarknotkent.github.io/portfolio)

</div>

---

The site presents software projects, a custom PC build, photography, and digital art. It is published at [clarknotkent.github.io/portfolio](https://clarknotkent.github.io/portfolio).

## Setup

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

The development server runs at `http://localhost:3000`.

To produce the files for hosting:

```bash
npm run build
```

The finished site is written to the `out` folder.

Use `npm run dev` and `npm run build` rather than calling Next.js directly. Both first run two short scripts: one records the size of every image, the other reads the camera details stored inside the photographs. Without them, image areas are sized incorrectly and photo captions come out empty.

## Adding a project

1. Add an entry to `src/lib/projects.ts`.
2. Put its images in `public/images/software-engineering/<name>/`.
3. Run `npm run dims`.

The project then appears on the projects page and receives its own detail page. No other files need to be edited.

Descriptions and technology lists should be checked against each project's own repository before being added here, since the two can drift apart.

## How the site works

Pages are built with Next.js and styled with Tailwind CSS. The entire site is converted to finished files ahead of time, so no server or database is involved once it is published.

Colours, spacing, and text sizes are defined once in `src/app/globals.css` and referred to by name everywhere else. Changing a value there changes it across every page.

The site uses a single light colour scheme. There is no dark mode.

Links and image paths are written through a helper in `src/lib/utils.ts`. This is what allows the site to work when hosted inside a subfolder rather than at the root of a domain.

## Structure

```
src/app          the pages
src/components   shared parts: navigation, footer, buttons
src/lib          project information and helpers
public/images    all images
scripts          the two setup scripts described above
```

## Known limitations

- The home page briefly shows a placeholder before the content appears, although nothing is being loaded.
- Older versions of Safari do not show the icon in the browser tab.
- One project, Tina's Aesthetics and Wellness Services, has no source repository, so its details cannot be checked.

## Hosting

The site is published to GitHub Pages automatically whenever changes are pushed to the main branch.

## Credits

Built by Kent Elrond Andionne Aspa, BS Information Technology, Ateneo de Davao University.

Valley Sans typeface by [Helsinki Type Studio](https://github.com/HelsinkiTypeStudio/valley-sans), used under the SIL Open Font License. Manrope and JetBrains Mono are from Google Fonts.
