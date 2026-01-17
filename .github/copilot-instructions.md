<!-- Use this file to provide workspace-specific custom instructions to Copilot. -->

# Portfolio Project - Kent Elrond Andionne Aspa

## Project Status: Low/Mid Fidelity Complete ✅
Ready to transition to High Fidelity design phase.

## Project Overview
Personal portfolio built with Next.js 16.1.3, Tailwind CSS v4, and Framer Motion 12.26.2.
Clean grayscale wireframe design, optimized for performance and user experience.

## Design Principles
- **Strict Grayscale:** bg-white, bg-gray-50 to bg-gray-900, text-black, text-gray-*
- **No Colors, Gradients, or Shadows:** Minimal wireframe aesthetic
- **Consistent Layout:** max-w-6xl alignment with navbar "Portfolio" text
- **Responsive:** Mobile-first with proper breakpoints (sm, md, lg)
- **Typography:** Clear hierarchy with responsive scaling

## Content Structure
### Pages
1. **Home (/)** - Hero with full name (Kent Elrond Andionne Aspa), quote, profile placeholder
2. **Projects (/projects)** - Tabbed interface: Software Engineering, PC Building, Creative Works
3. **About (/about)** - Education, Organizations (ACCESS, Davao Legionnaires, DICE), Volunteering, Tech Stack, Certifications
4. **Off-Keyboard (/off-keyboard)** - Flag Football, Event Photography, Community Building (with image slideshows)
5. **Contact (/contact)** - Email, LinkedIn, Instagram, GitHub, Steam

### Key Data
- **Education:** Ateneo de Davao University, BSIT (2022-2026)
- **ACCESS Roles:** EVP (May 2025-Present), President (Jan 2024-May 2025), IVP (Apr 2023-Dec 2023)
- **Projects:** 6 total (3 Software Engineering, 1 PC Building, 2 Creative Works)
- **Contact:** kentaspa54@gmail.com, linkedin.com/in/clarknotkent, @clarknotkent_

## Technical Implementation
- **Next.js Image:** Used for optimized image loading in galleries
- **Framer Motion:** AnimatePresence for smooth transitions and slideshows
- **TypeScript:** Strict typing throughout
- **Tailwind v4:** Modern CSS with @import syntax
- **Scrollbar Fix:** `overflow-y: scroll` on html to prevent layout shift

## Component Architecture
- **Navbar:** Fixed positioning, grayscale with active states
- **Footer:** Copyright with "Get in touch" link
- **Hero:** Full name display, quote, profile photo placeholder
- **GallerySlideshow:** Image carousel with navigation arrows and pagination dots
- **Button:** Reusable UI component with primary/outline variants

## Image Management
- **Location:** public/images/{category}/
- **Categories:** flag-football, event-photography, community-building
- **Format:** JPG/WebP, 1920x1080 recommended, 16:9 aspect ratio
- **Loading:** Next.js Image with error handling fallback

## Next Phase: High Fidelity
- Add visual polish and refined design elements
- Implement color scheme (if moving beyond grayscale)
- Add real profile photo and project screenshots
- Enhance animations and micro-interactions
- Performance optimization and SEO improvements

## Repository
https://github.com/clarknotkent/portfolio
