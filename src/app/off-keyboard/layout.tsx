import type { Metadata } from "next";
import type { ReactNode } from "react";

// The page itself is a client component and cannot export metadata, so the
// route's title and description live here.
export const metadata: Metadata = {
  title: "Off-Keyboard",
  description: "Life outside the code editor — flag football, event photography, and community building.",
  openGraph: { title: "Off-Keyboard — Kent Aspa", description: "Life outside the code editor — flag football, event photography, and community building." },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
