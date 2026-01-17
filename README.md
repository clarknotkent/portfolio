# Kent Elrond Andionne Aspa - Portfolio

A personal portfolio showcasing projects, experience, and interests. Built with Next.js, featuring a clean grayscale wireframe design.

## Project Status
**Phase:** Low/Mid Fidelity → Ready for High Fidelity Design
- ✅ Core structure and layout complete
- ✅ All content pages implemented
- ✅ Image galleries with slideshows
- ✅ Contact information and social links
- 🎨 Ready for visual polish and final design

## Tech Stack
- **Framework:** Next.js 16.1.3 (App Router)
- **Styling:** Tailwind CSS v4 (Grayscale wireframe design)
- **Animations:** Framer Motion 12.26.2
- **Language:** TypeScript
- **Image Optimization:** Next.js Image component

## Features
- **Project Showcase:** Categorized portfolio (Software Engineering, PC Building, Creative Works)
- **About Page:** Education, organizations, volunteering, tech stack, and certifications
- **Off-Keyboard:** Personal interests with image slideshows (Flag Football, Event Photography, Community Building)
- **Contact:** Social links with optimized layout
- **Responsive Design:** Mobile-first approach with consistent spacing

## Getting Started

Install dependencies:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Build for production:
```bash
npm run build
```

## Project Structure
```
src/
├── app/
│   ├── page.tsx                 # Home page with hero section
│   ├── projects/
│   │   ├── page.tsx            # Project showcase with tabs
│   │   └── [slug]/page.tsx     # Individual project details
│   ├── about/page.tsx           # About me page
│   ├── off-keyboard/page.tsx    # Personal interests with galleries
│   └── contact/page.tsx         # Contact and social links
├── components/
│   ├── common/
│   │   ├── Navbar.tsx          # Navigation component
│   │   └── Footer.tsx          # Footer with copyright
│   ├── sections/
│   │   └── Hero.tsx            # Hero section component
│   └── ui/
│       └── Button.tsx          # Reusable button component
├── lib/
│   └── projects.ts             # Project data store
└── public/
    └── images/
        ├── flag-football/       # Flag football images
        ├── event-photography/   # Event photography images
        └── community-building/  # Community building images
```

## Design System
- **Colors:** Strict grayscale palette (gray-50 to gray-900, white, black)
- **Typography:** Responsive scaling (text-sm to text-6xl)
- **Spacing:** Consistent padding and margins (py-12, space-y-12, etc.)
- **Layout:** max-w-6xl for content alignment with navbar
- **Components:** Minimal borders, rounded corners, subtle hover states

## Content
- **Projects:** 6 projects across 3 categories
- **Organizations:** ACCESS (leadership roles), Davao Legionnaires, DICE
- **Volunteering:** Photographer for UXPH, UX Davao, Devcon Davao
- **Certifications:** IBM Project Management, Cisco CCNA
- **Tech Stack:** Vue/React/Next/Flutter, Supabase/Firebase, TypeScript/JavaScript

## Next Steps (High Fidelity Phase)
- [ ] Add actual profile photo to hero section
- [ ] Implement color scheme and visual identity
- [ ] Add more project screenshots
- [ ] Enhance typography and spacing refinements
- [ ] Add animations and micro-interactions
- [ ] Optimize performance and SEO
- [ ] Add dark mode support (optional)

## Author
Kent Elrond Andionne Aspa
- Email: kentaspa54@gmail.com
- LinkedIn: [linkedin.com/in/clarknotkent](https://www.linkedin.com/in/clarknotkent/)
- GitHub: [github.com/clarknotkent](https://github.com/clarknotkent)
- Instagram: [@clarknotkent_](https://instagram.com/clarknotkent_)

© 2026 Kent Elrond Andionne Aspa. All rights reserved.
