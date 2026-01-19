export interface Project {
  slug: string;
  title: string;
  description: string;
  shortDescription?: string;
  techStack?: string[];
  role?: string;
  category: string;
  components?: string[];
  imageCount?: number;
  screenshots?: string[];
  tags?: string[];
  repoUrl?: string;
}

export const projects: Project[] = [
  // Software Engineering
  {
    slug: "immunization-management-system",
    title: "NIP Immunization Management System",
    shortDescription: "Capstone/Thesis Project developed for Barangay Tibungco Health Center under the Service Learning Program of the Arrupe Office of Social Formation. Built with PWA technology, QR Code scanning, and SMS Notification Blasting.",
    description: "A Capstone/Thesis Project developed for Barangay Tibungco Health Center under the Service Learning Program of the Arrupe Office of Social Formation. Built as a Progressive Web Application (PWA) utilizing QR Code scanning features for easy record retrieval and SMS Notification Blasting for automated patient reminders. As Team Lead, I guided a team of three through the full software development lifecycle to deliver an Immunization Management System tailored for the National Immunization Program (NIP). The system was engineered using Vue.js and Bootstrap on the front end—chosen for their lightweight design that effectively supports PWA functionality—with Node.js and Express powering the backend. We deployed Supabase (PostgreSQL) for the database and PhilSMS for the automated messaging system.",
    techStack: ["Vue.js", "Bootstrap", "Node.js", "Express", "Supabase", "PhilSMS"],
    role: "Team Lead",
    category: "Software Engineering",
    screenshots: [
      "/images/projects/nip-ims/screenshot-1.jpg",
      "/images/projects/nip-ims/screenshot-2.jpg",
      "/images/projects/nip-ims/screenshot-3.jpg"
    ],
    tags: ["Full-Stack Development", "PWA", "Healthcare", "QR Scanning", "SMS Integration"],
    repoUrl: "https://github.com/clarknotkent/immunization-management-system",
  },
  {
    slug: "health-key-pharma-scm",
    title: "Health Key Pharma | SCM & E-Commerce System",
    shortDescription: "Systems Analysis and Design project: Supply Chain Management system integrated with an e-commerce platform for Health Key Pharma Davao.",
    description: "A Systems Analysis and Design project where we developed a Supply Chain Management (SCM) system integrated with an e-commerce platform for Health Key Pharma Davao. As the Front End Developer, I focused on building a responsive interface using React JS and Tailwind CSS to bridge the gap between warehouse logistics and digital pharmacy sales. The system was engineered with Node.js and Express for the backend and Supabase for the database, providing end-to-end inventory management and seamless e-commerce functionality.",
    techStack: ["React", "Tailwind CSS", "Node.js", "Express", "Supabase"],
    role: "Front End Developer",
    category: "Software Engineering",
    screenshots: [
      "/images/projects/health-key/screenshot-1.jpg",
      "/images/projects/health-key/screenshot-2.jpg",
      "/images/projects/health-key/screenshot-3.jpg"
    ],
    tags: ["Full-Stack Development", "E-Commerce",],
    repoUrl: "https://github.com/clarknotkent/health-key-pharma-scm",
  },
  {
    slug: "univents",
    title: "UniVents",
    shortDescription: "Multi-Platform App Development final project built with Flutter to enhance cross-platform development fundamentals.",
    description: "A cross-platform event discovery app developed as a final project for my Multi-Platform App Development class. Built using Flutter, Dart, and Firebase to enhance our fundamentals and understanding of cross-platform development. The project explores real-time event browsing and student registration using a mobile-first approach. This was an academic graded project focused on demonstrating technical proficiency in building cross-platform mobile applications.",
    techStack: ["Flutter", "Dart", "Firebase"],
    role: "Mobile Developer",
    category: "Software Engineering",
    screenshots: [
      "/images/projects/univents/screenshot-1.jpg",
      "/images/projects/univents/screenshot-2.jpg",
      "/images/projects/univents/screenshot-3.jpg"
    ],
    tags: ["Cross-Platform Development", "Mobile App",],
    repoUrl: "https://github.com/clarknotkent/univents",
  },
  
  // PC Building
  {
    slug: "custom-sff-workstation-formd-t1",
    title: "SFF Workstation | FormD T1",
    description: "A high-performance, small form factor rig built for my specific needs.",
        components: [
            "FormD T1 (Sandwich Layout)",
            "AMD Ryzen 7 7800X3D",
            "NVIDIA RTX 3070",
            "Gigabyte Aorus B850I",
            "32GB DDR5-6400 CL36",
            "Corsair MP600 Core Mini",
            "Corsair SF850 (SFX)",
            "Thermalright AXP90-X47",
        ],
    role: "System Builder",
    category: "PC Building",
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
    imageCount: 8,
  },
];
