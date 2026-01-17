export interface Project {
  slug: string;
  title: string;
  description: string;
  techStack: string[];
}

export const projects: Project[] = [
  {
    slug: "immunization-management-system",
    title: "Immunization Management System",
    description: "A comprehensive system for managing immunization records, ensuring efficient tracking and scheduling.",
    techStack: ["Vue.js", "Node.js", "Express", "Supabase"],
  },
];
