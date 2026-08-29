"use client";

import { motion } from "framer-motion";
import { usePageEntrance } from "@/lib/motion";
import { useState } from "react";

const EMAIL = "kentaspa54@gmail.com";

const LINKS = [
  { label: "GitHub", handle: "clarknotkent", href: "https://github.com/clarknotkent" },
  { label: "LinkedIn", handle: "in/clarknotkent", href: "https://linkedin.com/in/clarknotkent" },
  { label: "Instagram", handle: "@clarknotkent_", href: "https://instagram.com/clarknotkent_" },
];

export default function ContactPage() {
  const pageEntrance = usePageEntrance();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      const field = document.createElement("textarea");
      field.value = EMAIL;
      field.setAttribute("readonly", "");
      field.style.position = "absolute";
      field.style.left = "-9999px";
      document.body.appendChild(field);
      field.select();
      document.execCommand("copy");
      document.body.removeChild(field);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="shell pt-10 md:pt-20 pb-20 md:pb-[120px]">
      <motion.div
        {...pageEntrance}
        className="flex flex-col gap-12 md:gap-16"
      >
        <div className="flex flex-col gap-5">
          <h1
            className="text-[36px] md:text-[48px] font-semibold text-ink leading-[1.1] tracking-[-0.02em] text-balance"
            style={{ fontFamily: "var(--font-valley-sans)" }}
          >
            Get in touch
          </h1>
          <p className="text-base md:text-lg text-muted leading-[1.6] max-w-[56ch]">
            Open to junior engineering roles, and to anything worth building. Email
            is the fastest way to reach me.
          </p>
        </div>

        {/* Email — the one action on this page */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center min-h-11 text-xl md:text-3xl text-ink tracking-[-0.01em] underline decoration-hairline decoration-1 underline-offset-[6px] hover:decoration-primary hover:text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-4 rounded-[2px] transition-[color,text-decoration-color,transform] duration-150 active:scale-[0.99]"
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                transitionTimingFunction: "var(--ease-out)",
              }}
            >
              {EMAIL}
            </a>

            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center justify-center h-11 px-4 shrink-0 border border-hairline rounded-[2px] text-xs font-medium uppercase tracking-[0.12em] text-muted hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-2 transition-[color,border-color,transform] duration-150 cursor-pointer active:scale-[0.99]"
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                transitionTimingFunction: "var(--ease-out)",
              }}
            >
              {copied ? "Copied" : "Copy"}
            </button>
          </div>

          {/* Announced to screen readers without moving the layout */}
          <p aria-live="polite" className="sr-only">
            {copied ? "Email address copied to clipboard" : ""}
          </p>
        </div>

        {/* Everywhere else */}
        <ul className="flex flex-col border-t border-hairline max-w-[36rem]">
          {LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-baseline justify-between gap-6 h-14 border-b border-hairline text-ink hover:text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-[2px] transition-[color,background-color,border-color,transform] duration-150 active:scale-[0.99]"
                style={{ transitionTimingFunction: "var(--ease-out)" }}
              >
                <span className="self-center text-base">{link.label}</span>
                <span
                  className="self-center text-xs text-muted group-hover:text-primary tracking-[0.04em] transition-colors duration-150"
                  style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                >
                  {link.handle}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
