import type { ReactNode } from "react";
import { projects } from "@/lib/projects";

type Props = {
  children: ReactNode;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export default function ProjectLayout({ children }: Props) {
  return children;
}
