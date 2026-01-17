export interface Project {
  slug: string;
  title: string;
  description: string;
  techStack?: string[];
  role?: string;
  category: string;
  components?: string[];
  imageCount?: number;
  tags?: string[];
  repoUrl?: string;
}

export const projects: Project[] = [
  // Software Engineering
  {
    slug: "immunization-management-system",
    title: "NIP Immunization Management System",
    description: "A Capstone/Thesis Project under the Service Learning Program of the Arrupe Office of Social Formation developed for the Barangay Tibungco Health Center to modernize immunization tracking. Built as a PWA with QR scanning and SMS notifications to streamline real-world healthcare logistics.",
    techStack: ["Vue.js", "Bootstrap", "Node.js", "Express", "Supabase", "PhilSMS"],
    role: "Team Lead",
    category: "Software Engineering",
    tags: ["Full-Stack Development", "PWA", "Healthcare", "QR Scanning", "SMS Integration"],
    repoUrl: "https://github.com/clarknotkent/immunization-management-system",
  },
  {
    slug: "health-key-pharma-scm",
    title: "Health Key Pharma | SCM & E-Commerce System",
    description: "A full-stack inventory and sales platform developed for Health Key Pharma Davao. I focused on building a responsive interface to bridge the gap between warehouse logistics and digital pharmacy sales.",
    techStack: ["React", "Tailwind CSS", "Node.js", "Express", "Supabase"],
    role: "Front End Developer",
    category: "Software Engineering",
    tags: ["Full-Stack Development", "E-Commerce",],
    repoUrl: "https://github.com/clarknotkent/health-key-pharma-scm",
  },
  {
    slug: "univents",
    title: "UniVents",
    description: "A cross-platform event discovery app developed as a final project for Multi-Platform App Development. It explores real-time event browsing and student registration using a mobile-first approach.",
    techStack: ["Flutter", "Dart", "Firebase"],
    role: "Mobile Developer",
    category: "Software Engineering",    tags: ["Cross-Platform Development", "Mobile App",],    repoUrl: "https://github.com/clarknotkent/univents",
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
    imageCount: 12,
  },
  {
    slug: "digital-art-showcase",
    title: "Digital Art",
    description: "Digital Illustrations all made from procreate, an old hobby of mine. Most of these i did out of pure boredom.",
    category: "Creative Works",
    imageCount: 8,
  },
];
