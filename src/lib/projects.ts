/** A curated gallery entry. Used where images carry titles of their own. */
export interface GalleryImage {
  src: string;
  alt: string;
  /** Shown under the image in the lightbox. */
  caption?: string;
  /** Optional second line under the caption. */
  note?: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  shortDescription?: string;
  techStack?: string[];
  role?: string;
  year?: string;
  status?: string;
  category: string;
  components?: string[];
  imageCount?: number;
  /** Explicit gallery with per-image captions. Takes precedence over imageCount. */
  gallery?: GalleryImage[];
  /** Leads the grid. Reserved for work that reached real users. */
  featured?: boolean;
  screenshots?: string[];
  tags?: string[];
  repoUrl?: string;
  screenshotLayout?: "default" | "mobile-row" | "desktop-grid";
}

export const projects: Project[] = [
  // Software Engineering
  {
    slug: "immunizeme-v2",
    featured: true,
    title: "ImmunizeMe v2 | Electronic Immunization Record",
    shortDescription: "A ground-up rewrite of the immunization record as a single Nuxt 4 application serving both portals over one PostgreSQL database, replacing the split Vue front end and Express API of v1.",
    description: "A ground-up rewrite of the immunization record built for the Philippine National Immunization Program. Where v1 split a Vue front end from an Express API, v2 is a single Nuxt 4 application serving both portals over one PostgreSQL 18 database, with server routes and pages in the same codebase and no separate API service. Drizzle ORM handles the schema over SQL migrations, and the interface is Nuxt UI 4 on Tailwind CSS 4 in TypeScript throughout. The design goal was to keep staff inside the encounter: patient, guardian, dose, vitals, and stock are recorded in one flow rather than across four screens. Each patient carries a signed, expiring QR code that is verified server-side\u2014an expired or forged code resolves to nothing\u2014so a busy table never has to type a name. Guardians read their child\u2019s record on their own phone instead of carrying a card that has to survive a year, and the monthly registers the centre files are generated from the same rows staff already entered rather than tallied by hand. It remains an installable PWA, because the centre\u2019s connection drops and an interrupted encounter is worse than a slow one. The project was named a finalist at Uniservitate Asia Oceania 2026.",
    techStack: ["Nuxt 4", "Vue 3", "TypeScript", "Nuxt UI 4", "Drizzle ORM", "PostgreSQL 18", "Tailwind CSS 4", "PWA"],
    role: "Full-Stack Developer",
    category: "Software Engineering",
    screenshots: [
      "/images/software-engineering/immunizeme-v2/1.png",
      "/images/software-engineering/immunizeme-v2/2.png",
      "/images/software-engineering/immunizeme-v2/3.png",
      "/images/software-engineering/immunizeme-v2/4.png"
    ],
    screenshotLayout: "desktop-grid",
    tags: ["Healthcare", "PWA", "QR Scanning", "SMS Integration", "Rewrite"],
  },
  {
    slug: "immunization-management-system",
    title: "ImmunizeMe v1 | NIP Immunization Management System",
    shortDescription: "Capstone/Thesis Project developed for Barangay Tibungco Health Center under the Service Learning Program of the Arrupe Office of Social Formation. Built with PWA technology, QR Code scanning, and SMS Notification Blasting, and carried into a live pilot.",
    description: "A Capstone/Thesis Project developed for Barangay Tibungco Health Center under the Service Learning Program of the Arrupe Office of Social Formation. Built as a Progressive Web Application (PWA) utilizing QR Code scanning features for easy record retrieval and SMS Notification Blasting for automated patient reminders. As Team Lead, I guided a team of three through the full software development lifecycle to deliver an Immunization Management System tailored for the National Immunization Program (NIP). The system was engineered using Vue.js and Bootstrap on the front end\u2014chosen for their lightweight design that effectively supports PWA functionality\u2014with Node.js and Express powering the backend. We deployed Supabase (PostgreSQL) for the database and PhilSMS for the automated messaging system. Three portals sit on top of it: an admin portal for patient records, vaccine inventory with per-lot tracking, the scheduling calendar, and the monthly registers the centre files; a mobile-first health staff portal for the people moving between patients; and a parent portal where a guardian sees only their own children. Because health staff lose connectivity mid-encounter, the staff portals prefetch what a visit needs and hold it in IndexedDB behind a service worker. This is the build that went into pilot at the health centre, carried past the thesis defense through my IT Practicum internship at the ARISEn Laboratory.",
    techStack: ["Vue 3", "Vite", "Pinia", "Bootstrap", "Node.js", "Express", "PostgreSQL", "Dexie", "PhilSMS", "Docker"],
    role: "Team Lead",
    category: "Software Engineering",
    screenshots: [
      "/images/software-engineering/immunization-management-system/1.png",
      "/images/software-engineering/immunization-management-system/2.png",
      "/images/software-engineering/immunization-management-system/3.png",
      "/images/software-engineering/immunization-management-system/4.png"
    ],
    screenshotLayout: "desktop-grid",
    tags: ["Full-Stack Development", "PWA", "Healthcare", "QR Scanning", "SMS Integration", "Offline-First"],
  },
  {
    slug: "health-key-pharma-scm",
    title: "Health Key Pharma | SCM & E-Commerce System",
    shortDescription: "Supply chain software for Health Key Pharmaceutical Product Distribution in Davao City \u2014 quotation to order to delivery for wholesale clients, a point of sale for the counter, and purchasing and receiving behind both.",
    description: "Supply chain software for Health Key Pharmaceutical Product Distribution, a drug distributor in Davao City, built as our BS Information Technology software engineering project and defended in May 2025. It is an npm-workspaces monorepo in TypeScript: one Express 5 REST API and two React 19 front ends \u2014 a staff portal and a client-facing storefront \u2014 over a single PostgreSQL 17 database, running locally in Docker. The API is organised into seven bounded contexts \u2014 identity, inventory, sales, procurement, fulfillment, pos, and documents \u2014 named the same way in all three apps with no cross-context imports, and the boundaries were drawn from which tables each controller actually writes rather than from the original folder names. Every screen is a page with a real URL you can link, bookmark and reload; dialogs are reserved for the two things that own no record. Every API path is written once in a shared typed client, so a wrong URL fails to compile instead of returning a 404, and a check script asserts that neither front end ever builds a URL of its own. Search and pagination come from the server on every list endpoint, and the browser holds no database credentials \u2014 the API owns the connection, issues the JWT, and enforces what each role may reach. This is v1.5, which applies the thirteen comments the defence panel raised: a shared DataTable and record-screen kit in the UI package so sticky column heads, clickable rows, search and pagination land everywhere at once, clients and employees split onto their own pages, and generic-branded medicines chosen from the catalogue instead of a free-text box.",
    techStack: ["React 19", "TypeScript", "Vite 6", "Tailwind CSS", "Node 22", "Express 5", "PostgreSQL 17", "Docker", "npm workspaces", "JWT"],
    role: "Front End Developer",
    category: "Software Engineering",
    repoUrl: "https://github.com/clarknotkent/software-engineering-1-and-2/tree/v1.5",
    screenshots: [
      "/images/software-engineering/health-key-pharma-scm/1.png",
      "/images/software-engineering/health-key-pharma-scm/2.png",
      "/images/software-engineering/health-key-pharma-scm/3.png",
      "/images/software-engineering/health-key-pharma-scm/4.png",
      "/images/software-engineering/health-key-pharma-scm/5.jpg",
      "/images/software-engineering/health-key-pharma-scm/6.jpg"
    ],
    screenshotLayout: "desktop-grid",
    tags: ["Full-Stack Development", "E-Commerce", "Monorepo", "Bounded Contexts", "Role-Based Access"],
  },
  {
    slug: "tinas-aesthetics-wellness-booking",
    title: "Tina's Aesthetics and Wellness Services",
    shortDescription: "Booking site for Tina's Aesthetics and Wellness Services with streamlined appointment scheduling.",
    description: "A booking site for Tina's Aesthetics and Wellness Services designed to showcase offerings and simplify appointment requests. Built with Next.js for a fast, responsive front end and a Python backend to handle booking workflows.",
    techStack: ["Next.js", "Python"],
    category: "Software Engineering",
    screenshots: [
      "/images/software-engineering/tinas-aesthetics-wellness-booking/1.jpg",
      "/images/software-engineering/tinas-aesthetics-wellness-booking/2.jpg",
      "/images/software-engineering/tinas-aesthetics-wellness-booking/3.jpg"
    ],
    screenshotLayout: "desktop-grid",
    tags: ["Booking System", "Wellness", "Service Business"],
  },
  {
    slug: "univents",
    title: "UniVents",
    shortDescription: "Multi-Platform App Development final project built with Flutter to enhance cross-platform development fundamentals.",
    description: "A cross-platform event discovery app developed as a final project for my Multi-Platform App Development class. Built using Flutter, Dart, and Firebase to enhance our fundamentals and understanding of cross-platform development. The project explores real-time event browsing and student registration using a mobile-first approach. This was an academic graded project focused on demonstrating technical proficiency in building cross-platform mobile applications.",
    techStack: ["Flutter", "Dart", "Firebase"],
    role: "Mobile Developer",
    category: "Software Engineering",
    repoUrl: "https://github.com/clarknotkent/flutterelectivefinal",
    screenshots: [
      "/images/software-engineering/univents/1.png",
      "/images/software-engineering/univents/2.png",
      "/images/software-engineering/univents/3.png",
      "/images/software-engineering/univents/4.png",
    ],
    tags: ["Cross-Platform Development", "Mobile App",],
    screenshotLayout: "mobile-row",
  },
  
  {
    slug: "bevanda-inventory",
    title: "Bevanda Inventory | Mobile Bar Stock System",
    shortDescription: "Inventory, stock movement, and event-preparation tracking for the Bevanda Mobile Bar. Built for IT Elective 2 (Python Web Development) as a Flask JSON API with a React TypeScript front end.",
    description: "An inventory system for the Bevanda Mobile Bar, built for IT Elective 2 (Python Web Development). Staff catalogue what the bar stocks, move it in and out, and set aside what a booking needs\u2014every movement is logged and the counts stay reconciled in one place. I built it as two fully independent halves: a Flask 3 JSON API with SQLAlchemy models, Alembic migrations, and a pytest suite covering the stock endpoints, paired with a React 18 single-page front end in TypeScript, Tailwind CSS, and Vite talking to it through a typed API client. The core modules are the ingredient catalog, main inventory with par levels and low-stock flagging, stock in/out logging, and a preparation inventory that transfers stock out for a booked event and reconciles what comes back as used, broken, or lost.",
    techStack: ["Flask", "Python", "SQLAlchemy", "SQLite", "ReportLab", "React 18", "TypeScript", "Tailwind CSS", "Vite"],
    role: "Full-Stack Developer",
    category: "Software Engineering",
    repoUrl: "https://github.com/clarknotkent/IT-Elective-2",
    screenshots: [
      "/images/software-engineering/bevanda-inventory/1.png",
      "/images/software-engineering/bevanda-inventory/2.png",
      "/images/software-engineering/bevanda-inventory/3.png"
    ],
    screenshotLayout: "desktop-grid",
    tags: ["Full-Stack Development", "Inventory Management", "REST API", "Coursework"],
  },
  {
    slug: "aula-course-platform",
    title: "Aula | Course Management Platform",
    shortDescription: "A course management platform where instructors author lessons and assignments, students enrol and submit, and grading happens in one place. Built for Web Systems and Technologies 2.",
    description: "A course management platform built for Web Systems and Technologies 2 (IT 2345). Instructors author courses as modules of lessons and assignments, students enrol, read, and submit, and work is graded in one place with the feedback attached to every result. The stack is Next.js 14 on the App Router with Prisma 5 over PostgreSQL 16, the whole thing containerised with Docker Compose and migrations applied on boot. Role-aware routing separates admin, instructor, and student views; the instructor dashboard computes its aggregates in the database rather than in JavaScript, and the catalog handles search, level filters, paging, and per-card enrolment state\u2014a course at capacity says so instead of failing on submit. A deterministic seed script generates a repeatable dataset of users, courses, enrolments, and graded work so the app can be demoed from a cold start.",
    techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Docker", "NextAuth"],
    role: "Full-Stack Developer",
    category: "Software Engineering",
    repoUrl: "https://github.com/clarknotkent/WebSys2",
    screenshots: [
      "/images/software-engineering/aula-course-platform/1.png",
      "/images/software-engineering/aula-course-platform/2.png",
      "/images/software-engineering/aula-course-platform/3.png",
      "/images/software-engineering/aula-course-platform/4.png"
    ],
    screenshotLayout: "desktop-grid",
    tags: ["Full-Stack Development", "Learning Platform", "Role-Based Access", "Docker"],
  },
  {
    slug: "pesopulse",
    title: "PesoPulse | Personal Finance PWA",
    shortDescription: "A private finance ledger for closed households, with AI receipt scanning and read-only sharing. Nuxt 3 PWA on the front end, FastAPI on Firebase Cloud Functions behind it.",
    description: "A Progressive Web App for tracking income and expenses across a small, closed group of users. The front end is a Nuxt 3 SPA generated statically and installable as a PWA; the back end is a Python FastAPI gateway deployed as a Firebase Cloud Function, with Cloud Firestore as the system of record\u2014never touched directly by the browser. The design principle throughout is that the server owns every write: it stamps identifiers and creation timestamps and rejects any client that tries to supply them, so a transaction's history cannot be forged. On top of the ledger sit ephemeral AI receipt scanning that reads a receipt into a draft transaction without retaining the image, and Google-Sheets-style read-only sharing so someone else can view the ledger without the ability to edit it.",
    techStack: ["Nuxt 3", "Vue 3", "TypeScript", "FastAPI", "Python", "Firebase", "Firestore", "Gemini", "PWA"],
    role: "Full-Stack Developer",
    category: "Software Engineering",
    repoUrl: "https://github.com/clarknotkent/PesoPulse",
    screenshots: [
      "/images/software-engineering/pesopulse/1.png",
      "/images/software-engineering/pesopulse/2.png",
      "/images/software-engineering/pesopulse/3.png",
      "/images/software-engineering/pesopulse/4.png"
    ],
    screenshotLayout: "mobile-row",
    tags: ["PWA", "Personal Finance", "AI Integration", "Serverless"],
  },
  {
    slug: "mini-addu-sis",
    title: "mini-addu-sis | Student Records System",
    shortDescription: "A staff-facing student records system with composable search filters, sortable columns, CSV export, and bulk delete. Built for Event-Driven Programming with Django.",
    description: "A student records system for staff, built for IT 2241 Event-Driven Programming at Ateneo de Davao University. It is a Django 5 application on SQLite with server-rendered templates and Tailwind CSS compiled to a static stylesheet. Staff search, filter, and sort the roster, add and edit records, delete one or many behind a real confirmation page, and export whatever the current filter matches as CSV\u2014not just the page on screen. Name search, multi-select course, gender, and an inclusive age range all compose into a single queryset, and the active filters carry through sorting and pagination links. Authentication gates everything, so an anonymous visitor sees no student data at all. Sorting sets aria-sort so the order is announced rather than just drawn, deletion works with JavaScript off, and dark mode is remembered across visits and applied before first paint.",
    techStack: ["Django", "Python", "SQLite", "Tailwind CSS"],
    role: "Full-Stack Developer",
    category: "Software Engineering",
    repoUrl: "https://github.com/clarknotkent/mini-addu-sis",
    screenshots: [
      "/images/software-engineering/mini-addu-sis/1.png",
      "/images/software-engineering/mini-addu-sis/2.png",
      "/images/software-engineering/mini-addu-sis/3.png",
      "/images/software-engineering/mini-addu-sis/4.png"
    ],
    screenshotLayout: "desktop-grid",
    tags: ["Full-Stack Development", "CRUD", "Accessibility", "Coursework"],
  },
  {
    slug: "bilibili-video-frontend",
    title: "BiliBili | Video Platform Front End",
    shortDescription: "A video-sharing site front end with browsable feeds, a watch page, search, and profile editing. Final project for Web Systems and Technologies 1.",
    description: "A video-sharing site front end built as the final project for Web Systems and Technologies 1. You browse the home and anime feeds, open a video to watch it alongside its description and related episodes, search the catalogue, sign in, and edit your profile\u2014with profile edits persisting between visits and the sidebar collapsing into a drawer on a phone. It is a React 18 single-page app in JavaScript with Tailwind CSS and Vite, organised as an npm workspace so the shared component library and the video catalogue live in their own packages and resolve straight to source through Vite aliases. One layout component renders the header and sidebar for every route, and a single component serves all six video pages behind a dynamic route, drawing the related list from the rest of the catalogue.",
    techStack: ["React", "JavaScript", "Tailwind CSS", "Vite", "npm workspaces"],
    role: "Front End Developer",
    category: "Software Engineering",
    repoUrl: "https://github.com/clarknotkent/WebSys1",
    screenshots: [
      "/images/software-engineering/bilibili-video-frontend/1.png",
      "/images/software-engineering/bilibili-video-frontend/2.png",
      "/images/software-engineering/bilibili-video-frontend/3.png"
    ],
    screenshotLayout: "desktop-grid",
    tags: ["Front-End Development", "Component Library", "Responsive Design"],
  },
  
  // PC Building
  {
    slug: "custom-sff-workstation-formd-t1",
    title: "SFF Workstation | FormD T1",    description: "A high-performance, small form factor rig built for my specific needs. Not the best but it gets the job done.",
        components: [
            "FormD T1 (Sandwich Layout)",
            "AMD Ryzen 7 7800X3D",
            "Asus Prime Nvidia RTX 5070",
            "Gigabyte Aorus B850I",
            "32GB DDR5-6400 CL36",
            "Corsair MP600 Core Mini",
            "Corsair SF850 (SFX)",
            "Thermalright AXP90-X47",
        ],
    category: "PC Building",
    screenshots: [
      "/images/pc/PC.jpg",
      "/images/pc/PC-2.jpg",
      "/images/pc/PC-3.jpg",
      "/images/pc/PC-4.jpg"
    ],
  },
  
  // Creative Works
  {
    slug: "photography-portfolio",
    title: "Photography",
    description: "Life as I see it. A collection of unscripted moments and random encounters, captured exactly as they happened. No poses, no scripts—just the world through my eyes.",
    category: "Creative Works",
    imageCount: 11,
  },
  {
    slug: "digital-art-showcase",
    title: "Digital Art",
    description: "Digital Illustrations all made from procreate, an old hobby of mine. Most of these i did out of pure boredom.",
    category: "Creative Works",
    gallery: [
      {
        src: "/images/digital-art/1.jpg",
        alt: "A person in a pink beanie and mint sweater stands in a quiet street at dusk holding a steaming cup, under a crescent moon and a violet sky, hemmed in by tiled roofs and power lines.",
        caption: "Taking a night walk while drinking a hot beverage at Lo-Fi City",
      },
      {
        src: "/images/digital-art/2.jpg",
        alt: "A lone figure stands on a glowing blue ribbon of road, back turned, a cyan identity disc lit on their spine, facing a hazy neon skyline crossed by red-lit flying vehicles.",
        caption: "\u201cThe Grid. A digital frontier\u2026\u201d",
        note: "Inspired by my childhood sci-fi film titled Tron Legacy",
      },
      {
        src: "/images/digital-art/3.jpg",
        alt: "A small figure in a pink hood leaps between neon skyscrapers in a blue and magenta city at night, seen from high above.",
        caption: "What\u2019s up DANGER",
      },
    ],
  },
];
