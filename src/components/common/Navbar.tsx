"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Off-Keyboard", href: "/off-keyboard" },
  { name: "Contact", href: "/contact" },
  { name: "About", href: "/about" },
];

export function Navbar() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  /* Escape dismisses the drawer, as any overlay should. */
  useEffect(() => {
    if (!drawerOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [drawerOpen]);

  /* Body scroll lock */
  useEffect(() => {
    if (drawerOpen) {
      document.body.classList.add("drawer-open");
    } else {
      document.body.classList.remove("drawer-open");
    }
    return () => document.body.classList.remove("drawer-open");
  }, [drawerOpen]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-hairline"
      style={{ boxShadow: "0 1px 2px rgba(0,0,0,0.04)" }}
    >
      <div className="shell h-16 flex items-center justify-between whitespace-nowrap">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 text-ink active:scale-[0.97] transition-transform duration-150">
          <svg
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"
              fill="currentColor"
            />
          </svg>
          <span
            className="text-xl font-semibold leading-tight tracking-[-0.015em]"
            style={{ fontFamily: "var(--font-valley-sans)" }}
          >
            Kent
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav
          className="hidden md:flex items-center gap-9"
          style={{ fontFamily: "var(--font-jetbrains-mono)" }}
        >
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-xs font-medium uppercase tracking-[0.12em] leading-none flex items-center h-11 pb-1 border-b-2 transition-colors duration-150 ${
                  active
                    ? "text-primary border-primary"
                    : "text-ink border-transparent hover:text-primary"
                }`}
                style={{ transitionTimingFunction: "var(--ease-out)" }}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile hamburger / X */}
        <button
          type="button"
          onClick={() => setDrawerOpen((o) => !o)}
          className="md:hidden flex items-center justify-center w-11 h-11 -mr-2.5 rounded-[2px] transition-transform duration-150 active:scale-[0.94] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-2"
          style={{ transitionTimingFunction: "var(--ease-out)" }}
          aria-label={drawerOpen ? "Close menu" : "Open menu"}
          aria-expanded={drawerOpen}
          aria-controls="mobile-nav"
        >
          {drawerOpen ? (
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              aria-hidden="true"
              className="text-primary"
            >
              <path
                d="M1 1L17 17M17 1L1 17"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          ) : (
            <div className="flex flex-col items-center justify-center gap-[5px]">
              <span className="block w-[18px] h-[1.5px] bg-ink" />
              <span className="block w-[18px] h-[1.5px] bg-ink" />
            </div>
          )}
        </button>
      </div>

      {/* Mobile drawer. Always mounted and toggled with CSS rather than
          unmounted behind an exit animation: visibility never depends on an
          animation finishing, so the menu still works if motion is throttled.
          The transition is also interruptible — tapping the toggle twice quickly
          reverses from wherever it got to instead of restarting. */}
      <div
        id="mobile-nav"
        className={`md:hidden fixed inset-0 top-16 z-40 bg-canvas/[0.98] backdrop-blur-sm transition-[opacity,transform] ${
          drawerOpen
            ? "opacity-100 translate-y-0 duration-[250ms]"
            : "opacity-0 -translate-y-2 pointer-events-none duration-[180ms]"
        }`}
        style={{ transitionTimingFunction: "var(--ease-drawer)" }}
        inert={!drawerOpen ? true : undefined}
      >
        <nav className="shell flex flex-col" aria-label="Mobile">
          {navItems.map((item, i) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeDrawer}
                aria-current={active ? "page" : undefined}
                className={`flex items-center h-14 text-base font-medium uppercase tracking-[0.12em] border-b border-hairline transition-[color,opacity,transform] duration-200 ${
                  drawerOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                } ${active ? "text-primary border-l-2 border-l-primary pl-4" : "text-ink pl-0"}`}
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  transitionTimingFunction: "var(--ease-drawer)",
                  /* Cascade in on open; leave together on close, because the exit
                     should feel like the system responding, not presenting. */
                  transitionDelay: drawerOpen ? `${60 + i * 40}ms` : "0ms",
                }}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

    </header>
  );
}
