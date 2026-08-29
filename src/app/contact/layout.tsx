import type { Metadata } from "next";
import type { ReactNode } from "react";

// The page itself is a client component and cannot export metadata, so the
// route's title and description live here.
export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Kent Aspa. Open to junior software engineering roles — email, LinkedIn, and GitHub.",
  openGraph: { title: "Contact — Kent Aspa", description: "Get in touch with Kent Aspa. Open to junior software engineering roles — email, LinkedIn, and GitHub." },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
