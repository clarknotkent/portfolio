import type { Metadata } from "next";
import type { ReactNode } from "react";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

type Props = {
  children: ReactNode;
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

/**
 * Per-project share cards. Without this every project URL previewed under the
 * same generic title, which is the opposite of useful when the link someone
 * shares is to one specific piece of work.
 */
export async function generateMetadata({ params }: { params: Props["params"] }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  const description = project.shortDescription ?? project.description.slice(0, 200);
  // A project's own first screenshot makes a far better card than a portrait.
  const image = project.screenshots?.[0] ?? project.gallery?.[0]?.src ?? site.ogImage;

  return {
    title: project.title,
    description,
    openGraph: {
      type: "article",
      title: `${project.title} — Kent Aspa`,
      description,
      images: [{ url: image, alt: `${project.title} screenshot` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Kent Aspa`,
      description,
      images: [image],
    },
  };
}

export default function ProjectLayout({ children }: Props) {
  return children;
}
