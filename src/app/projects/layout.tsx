import type { Metadata } from "next";
import type { ReactNode } from "react";

// The page itself is a client component and cannot export metadata, so the
// route's title and description live here.
export const metadata: Metadata = {
  // A plain string here would clear the root template for child segments, so
  // /projects/[slug] would lose its " — Kent Aspa" suffix. Re-declare it.
  title: { default: "Projects", template: "%s — Kent Aspa" },
  description: "Engineering work, a small-form-factor PC build, and creative projects — including systems piloted at a barangay health centre and built for a pharmaceutical distributor in Davao City.",
  openGraph: { title: "Projects — Kent Aspa", description: "Engineering work, a small-form-factor PC build, and creative projects — including systems piloted at a barangay health centre and built for a pharmaceutical distributor in Davao City." },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
