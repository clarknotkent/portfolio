<!-- Use this file to provide workspace-specific custom instructions to Copilot. -->

# Portfolio Project - Kent Elrond Andionne Aspa

## Project Status: High Fidelity Design Applied ✅
Professional IT visual identity with Deep Slate theme and Electric Indigo accents.

## Project Overview
Personal portfolio built with Next.js 16.1.3, Tailwind CSS v4, Framer Motion 12.26.2, and Inter font family.
Professional dark theme with Electric Indigo (#6366F1) primary actions.

## Design System
### Color Palette
- **Background:** Deep Slate (#0F172A)
- **Primary:** Electric Indigo (#6366F1)
- **Primary Hover:** (#4F46E5)
- **Cards:** Slate Gray (#1E293B)
- **Border:** (#334155)
- **Text Primary:** White (#FFFFFF)
- **Text Secondary:** (#94A3B8)

### Typography
- **Font Family:** Inter (Google Fonts)
- **Headings:** Bold, -0.02em letter spacing, 1.2 line height
- **Body:** 1.6 line height for optimal readability
- **Spacing:** 8px grid system (all padding/margins in multiples of 8px)

### Components
- **Navbar:** Slate Gray background, Electric Indigo active states
- **Buttons:** Electric Indigo primary, hover states defined
- **Cards:** Slate Gray (#1E293B) with subtle borders
- **Spacing:** px-16, px-24, px-32, py-32, py-48, py-64, py-80, py-128 (8px grid)

## Content Structure
### Pages
1. **Home (/)** - Hero with full name, quote, Electric Indigo CTA buttons
2. **Projects (/projects)** - Categorized showcase (Software, PC Building, Creative)
3. **About (/about)** - Education, Organizations, Volunteering, Tech Stack, Certifications
4. **Off-Keyboard (/off-keyboard)** - Flag Football, Event Photography, Community Building (slideshows)
5. **Contact (/contact)** - Social links with optimized layout

### Key Data
- **Education:** Ateneo de Davao University, BSIT (2022-2026)
- **ACCESS Roles:** EVP (May 2025-Present), President (Jan 2024-May 2025), IVP (Apr 2023-Dec 2023)
- **Projects:** 6 total (3 Software Engineering, 1 PC Building, 2 Creative Works)
- **Contact:** kentaspa54@gmail.com, linkedin.com/in/clarknotkent, @clarknotkent_

## Technical Implementation
- **Next.js Image:** Optimized image loading
- **Framer Motion:** Smooth transitions and animations
- **TypeScript:** Strict typing throughout
- **Tailwind v4:** Custom CSS variables for color scheme
- **Inter Font:** Professional typography
- **8px Grid:** Consistent spacing system

## Component Architecture
- **Navbar:** Fixed positioning, 64px height, Slate Gray background
- **Footer:** 32px padding, Slate Gray background
- **Hero:** Electric Indigo accented quote, 32px/48px spacing
- **Button:** Electric Indigo primary, 24px/32px padding (8px grid)
- **Cards:** Slate Gray background with subtle borders

## Image Management
- **Location:** public/images/{category}/
- **Categories:** flag-football, event-photography, community-building
- **Format:** JPG/WebP, 1920x1080 recommended
- **Loading:** Next.js Image with error handling

## Repository
https://github.com/clarknotkent/portfolio
