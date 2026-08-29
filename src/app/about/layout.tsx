import type { Metadata } from "next";
import type { ReactNode } from "react";

// The page itself is a client component and cannot export metadata, so the
// route's title and description live here.
export const metadata: Metadata = {
  title: "About",
  description: "Kent Elrond Andionne Aspa — BS Information Technology at Ateneo de Davao University. Education, organisations, volunteering, tech stack, and certifications.",
  openGraph: { title: "About — Kent Aspa", description: "Kent Elrond Andionne Aspa — BS Information Technology at Ateneo de Davao University. Education, organisations, volunteering, tech stack, and certifications." },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
