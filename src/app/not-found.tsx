import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  description: "That page does not exist.",
};

const ROUTES = [
  { href: "/projects", label: "Projects", note: "Engineering work, hardware, creative" },
  { href: "/about", label: "About", note: "Education, organisations, certifications" },
  { href: "/off-keyboard", label: "Off-Keyboard", note: "Life outside the code editor" },
  { href: "/contact", label: "Contact", note: "Email, LinkedIn, GitHub" },
];

export default function NotFound() {
  return (
    <div className="shell pt-10 md:pt-20 pb-20 md:pb-[120px]">
      <div className="flex flex-col gap-12 md:gap-16">
        <div className="flex flex-col gap-5">
          <span
            className="text-xs text-muted tracking-[0.12em]"
            style={{ fontFamily: "var(--font-jetbrains-mono)" }}
          >
            404
          </span>
          <h1
            className="text-[36px] md:text-[48px] font-semibold text-ink leading-[1.1] tracking-[-0.02em] text-balance"
            style={{ fontFamily: "var(--font-valley-sans)" }}
          >
            That page does not exist
          </h1>
          <p className="text-base md:text-lg text-muted leading-[1.6] max-w-[56ch]">
            The link may be out of date, or the address may have a typo. Everything
            on the site is one of the four below.
          </p>
        </div>

        <ul className="flex flex-col border-t border-hairline max-w-[36rem]">
          {ROUTES.map((route) => (
            <li key={route.href}>
              <Link
                href={route.href}
                className="group flex items-center justify-between gap-6 min-h-14 py-3 border-b border-hairline text-ink hover:text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-[2px] transition-[color,background-color,border-color,transform] duration-150 active:scale-[0.99]"
                style={{ transitionTimingFunction: "var(--ease-out)" }}
              >
                <span className="text-base">{route.label}</span>
                <span className="text-xs text-muted text-right">{route.note}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
