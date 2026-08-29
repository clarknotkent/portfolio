/**
 * Site-level facts used by metadata across every route.
 *
 * The absolute origin matters: Open Graph and Twitter crawlers do not resolve
 * root-relative paths, so a share card needs a full URL. On GitHub Pages the
 * site is served from a repository subpath, which `basePath` carries.
 */

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const site = {
  name: "Kent Aspa",
  /** Override with NEXT_PUBLIC_SITE_ORIGIN if the site moves to a custom domain. */
  origin: process.env.NEXT_PUBLIC_SITE_ORIGIN ?? "https://clarknotkent.github.io",
  basePath,
  title: "Kent Aspa — Software Engineer",
  description:
    "Software engineer from Davao City. I build systems that reach real users — an immunization record piloted at a barangay health centre, and supply chain software for a pharmaceutical distributor.",
  ogImage: "/images/og/og.jpg",
} as const;

/** Absolute site URL, including the GitHub Pages subpath when there is one. */
export const siteUrl = `${site.origin}${basePath}`;
