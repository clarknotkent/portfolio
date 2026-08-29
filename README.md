# Portfolio

My personal site. It's where I keep the work I've actually shipped — an immunization record that made it into a pilot at a health centre here in Davao, supply chain software built for a real pharmaceutical distributor, and a handful of coursework projects I'm still happy with. Plus the PC I built and the photos I take when I'm away from the keyboard.

Live at [clarknotkent.github.io/portfolio](https://clarknotkent.github.io/portfolio).

## Running it

```bash
npm install
npm run dev
```

`npm run build` exports the whole site as static files into `out/`.

One thing I have to remember: always use `npm run dev` and `npm run build`, never plain `next dev` or `next build`. Two small scripts run first — one measures every image, the other reads the EXIF off my photos. Skip them and the galleries come out the wrong shape and the photo captions go blank.

## Adding a project

All the content is in `src/lib/projects.ts`. I add an entry there, drop screenshots into `public/images/software-engineering/<slug>/`, run `npm run dims`, and the card and its detail page show up on their own. No new components needed.

The rule I keep having to relearn: check the stack against the project's actual repo before writing it here. I had Health Key listed as using Supabase for a while when that version had no database at all.

## How it's built

Next.js and Tailwind, exported as plain static files onto GitHub Pages. No server, no database — every page is already HTML before anyone opens it.

The look is on purpose. One accent colour and nothing else competing with it. Thin grey lines instead of drop shadows. A faint grid behind everything that the layout actually lines up to. Light mode only — I'd rather do one theme properly than two of them halfway.

Valley Sans for headings, Manrope for reading, JetBrains Mono for the small technical text.

I built it to be read fast. Someone looking at this probably has a minute, so the front of each page carries the point and the detail pages hold the rest.

## Still on my list

- The hero shows a loading skeleton for 600ms even though nothing is actually loading. I should take that out.
- No PNG fallback for the favicon. Adding one crashes the build, so older Safari just won't show a tab icon.
- Tina's project has no repo, so I can't verify its stack the way I can with everything else.

## Credits

Me — Kent Elrond Andionne Aspa, BS Information Technology at Ateneo de Davao University.

Valley Sans is by [Helsinki Type Studio](https://github.com/HelsinkiTypeStudio/valley-sans), under the SIL Open Font License. Manrope and JetBrains Mono come from Google Fonts.
