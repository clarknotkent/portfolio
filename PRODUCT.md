# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary:** Philippine employers hiring junior / new-graduate software engineers — Davao and Manila tech companies, agencies, and in-house teams. The reader is a recruiter or engineering lead screening a candidate, and the outcome that counts is an interview request.

The site also receives collaborators and peers, but they are not the audience decisions are optimised for.

## Product Purpose

A personal portfolio for Kent Elrond Andionne Aspa presenting software engineering work, a small-form-factor PC build, and creative output (photography, digital art) in one place.

Success is a reader deciding, from the site alone, that Kent is worth interviewing — and having enough concrete evidence in hand to justify that decision to someone else.

## Positioning

**The systems went into real use.** This is the claim a classmate's portfolio cannot truthfully copy, and it is the thing future work must protect:

- **ImmunizeMe (NIP Immunization Management System)** was piloted at Barangay Tibungco Health Center under the Service Learning Program of the Arrupe Office of Social Formation, and carried past thesis defence through an IT Practicum internship at the ARISEn Laboratory. Kent was Team Lead over a team of three.
- **Health Key** was built for Health Key Pharmaceutical Product Distribution, an operating pharmaceutical distributor in Davao City, and defended 19 May 2025 as a BS Information Technology software engineering project.
- **ImmunizeMe v2** was named a finalist at Uniservitate Asia Oceania 2026.

Most student work stops at defence. The differentiator is deployment to real users and institutions, not breadth of stacks or volume of projects.

## Operating Context

- Read by recruiters during a screening pass, typically alongside a CV and a GitHub profile.
- Distributed as a link. There is no funnel, no account, and no return visit to design for.
- Hosted on GitHub Pages via GitHub Actions on push to `main` / `master`.
- Contact happens off-site: email, LinkedIn, GitHub, Instagram.

## Capabilities and Constraints

**Confirmed functionality**

- Five routes: home, projects (tabbed across Software Engineering / PC Building / Creative Works), project detail per slug, about, off-keyboard, contact.
- Project content is typed data in `src/lib/projects.ts`; adding a project is a data edit, not a component build.
- Galleries support captioned pieces, EXIF read from photography at runtime, and a lightbox.
- Image dimensions are measured at build time into `src/lib/screenshot-dims.ts` so frames match their content without layout shift.

**Technical constraints**

- **Static export only.** `next.config.ts` sets `output: "export"`; there is no server runtime, no API route, and no database. Any feature requiring a backend is out of scope unless the hosting model changes.
- **`images.unoptimized: true`** is forced by static export. Images ship at their source resolution, so asset sizing is a manual discipline rather than something the framework solves.
- **Base path.** The site can be served from a repository subpath, so every asset and link path must route through `withBasePath()` in `src/lib/utils.ts`. Bare root-relative paths 404 in production while working locally.
- **The contact form has no backend.** It composes a `mailto:` URL and hands off to the visitor's mail client. On a device with no configured mail client the form silently does nothing — an open product decision, not a solved one.

**Undecided**

- Whether the contact form should remain `mailto:`-based, move to a third-party form service, or be replaced by direct links.
- Whether `tinas-aesthetics-wellness-booking` stays on the site: there is no repository for it, so its stack and description cannot be verified against source.

## Brand Commitments

- **Name:** Kent Elrond Andionne Aspa. Short form "Kent" is the wordmark.
- **Handles, all binding:** `github.com/clarknotkent`, `linkedin.com/in/clarknotkent`, `kentaspa54@gmail.com`, Instagram `@clarknotkent_`.
- **Voice:** plain and specific. Existing project copy describes mechanisms and trade-offs rather than selling — "there is deliberately no database yet" over "leveraging cutting-edge architecture". Future copy must not inflate this into marketing language.
- **Affiliation:** Ateneo de Davao University, BS Information Technology.
- An incumbent visual system exists and ships; it is specified in `design/` and `design_final/`. This file does not describe it — that belongs in DESIGN.md.

## Evidence on Hand

**Real and verifiable**

- Screenshots captured from each project's own repository (`docs/screenshots/`, `docs/v1.5-ui/`), under `public/images/software-engineering/`.
- Source READMEs in the sibling repositories are the authority for every stack and description claim.
- Photography with intact EXIF (11 images); digital art recovered from Procreate documents (3 selected, captioned).
- PC build: Ryzen 7 7800X3D, RTX 5070, B850I, FormD T1.
- Certifications: Introduction to Project Management (IBM via Coursera), CCNA: Introduction to Networks (Cisco).
- Organisation roles: Executive Vice President, Internal Vice President.

**Absences future work must not fabricate**

- No testimonials, references, or endorsements exist. Do not invent them.
- No usage metrics, user counts, uptime figures, or performance benchmarks exist for any project. Do not invent them.
- No employment history beyond the ARISEn Laboratory IT Practicum.
- Health Key has no automated tests, and its purchase-order schema and payment model have known gaps — the README documents them. Do not describe it as finished.
- **Stack claims have been wrong before.** Health Key was previously described as using Supabase when its prototype had no database at all. Every stack and capability claim must be checked against the current branch of the source repository, not against an older description or an earlier branch.

## Product Principles

1. **Deployment beats completion.** Work that reached real users at a real institution leads. A polished coursework project does not outrank a deployed one.
2. **Every claim is verifiable against source.** Descriptions, stacks, and status come from the project's own repository on its current branch. When the repo and the site disagree, the repo wins.
3. **Engineering leads; the person is texture.** Off-Keyboard, photography, digital art, and the PC build show there is someone behind the code. They sit one level below the engineering work and never compete with it for the reader's first attention.
4. **Built for a scan, then for depth.** A recruiter decides in under a minute. The surface must carry the decision; the detail pages carry the justification.
5. **Nothing that static hosting cannot serve.** No feature is worth breaking the export, the base path, or the zero-runtime deployment.

## Accessibility & Inclusion

No standard has been set by the user yet — recorded as undecided rather than assumed.

Material context for that decision: an audit on 2026-08-29 found WCAG 2.1 AA failures in shipping code, including a keyboard-unreachable repository link on project cards, missing tab semantics, and placeholder text at 2.07:1 contrast. Given the primary audience is employers evaluating an engineer, whether to commit to AA is a product decision worth making explicitly.
