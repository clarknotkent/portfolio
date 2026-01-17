# Portfolio Images

This directory contains all images used in the portfolio website.

## Directory Structure

### `/flag-football`
Images for the Flag Football section on the Off-Keyboard page.
- Davao Legionnaires Match Day
- Competing in Manila
- Team Huddle in CDO

### `/event-photography`
Images for the Event Photography section on the Off-Keyboard page.
- UX Davao Workshop Candid
- Devcon Networking Session
- UXPH Conference 2025
- Tech Meetup Discussion

### `/community-building`
Images for the Community Building section on the Off-Keyboard page.
- ACCESS General Assembly
- Student Mentorship Session
- Collaborative Project Brainstorm

## Image Guidelines

- **Format:** JPG or WebP preferred (optimized for web)
- **Aspect Ratio:** 16:9 (e.g., 1920x1080, 1280x720)
- **Naming Convention:** Use kebab-case (e.g., `davao-legionnaires-match-day.jpg`)
- **Optimization:** Compress images before uploading to reduce file size

## Usage in Code

Images can be referenced in Next.js using:
```tsx
<img src="/images/flag-football/image-name.jpg" alt="Description" />
```

Or with Next.js Image component:
```tsx
import Image from 'next/image'
<Image src="/images/flag-football/image-name.jpg" alt="Description" width={1920} height={1080} />
```
