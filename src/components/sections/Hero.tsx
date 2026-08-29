"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { withBasePath } from "@/lib/utils";

export function Hero() {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHydrated(true), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex-1 flex flex-col justify-center items-start shell relative z-10 min-h-[calc(100dvh-4rem)]">
      {/* Skeleton loading state */}
      {!hydrated && (
        <div className="w-full max-w-3xl flex flex-col gap-6">
          <div className="h-6 w-64 bg-hairline rounded-[2px] animate-skeleton" />
          <div className="space-y-4 w-full">
            <div className="h-10 sm:h-12 w-full bg-hairline rounded-[2px] animate-skeleton" />
            <div className="h-10 sm:h-12 w-11/12 bg-hairline rounded-[2px] animate-skeleton" style={{ animationDelay: "0.1s" }} />
            <div className="h-10 sm:h-12 w-3/4 bg-hairline rounded-[2px] animate-skeleton" style={{ animationDelay: "0.2s" }} />
          </div>
          <div className="space-y-2 w-full mt-4">
            <div className="h-4 w-full max-w-2xl bg-hairline rounded-[2px] animate-skeleton" style={{ animationDelay: "0.3s" }} />
            <div className="h-4 w-5/6 max-w-xl bg-hairline rounded-[2px] animate-skeleton" style={{ animationDelay: "0.4s" }} />
          </div>
          <div className="h-10 w-40 bg-hairline rounded-[2px] animate-skeleton mt-8" style={{ animationDelay: "0.5s" }} />
        </div>
      )}

      {/* Content */}
      <div
        className={`w-full flex flex-col items-start gap-6 sm:gap-8 py-20 md:flex-row md:items-center md:justify-between transition-[opacity,transform] duration-200 ${
          hydrated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
        style={{ transitionTimingFunction: "var(--ease-out)" }}
      >
        {/* Left: text content */}
        <div className="flex flex-col items-start gap-6 sm:gap-8 flex-1">
          {/* Status badge — §4.5 */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-hairline rounded-[2px]">
            <span className="relative flex h-2 w-2">
              <span className="animate-dot-pulse absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
            </span>
            <span
              className="text-xs text-muted font-medium tracking-[0.04em]"
              style={{ fontFamily: "var(--font-jetbrains-mono)" }}
            >
              Available for software engineering roles
            </span>
          </div>

          {/* H1 — display token: 36/48px */}
          <h1
            className="font-semibold text-4xl md:text-5xl text-ink leading-[1.1] tracking-[-0.02em]"
            style={{
              fontFamily: "var(--font-valley-sans)",
              fontSize: undefined,
            }}
          >
            <span className="text-[36px] md:text-[48px]">
              Software Engineer building precise, scalable digital infrastructure.
            </span>
          </h1>

          {/* Subtext — body-lg: 16/18px */}
          <p
            className="text-base md:text-lg text-muted leading-[1.6] max-w-[68ch]"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Hi, I&apos;m Kent. I specialize in full-stack development, front-end architecture, and building tools that make a difference.
          </p>

          {/* CTA — primary button */}
          <div className="pt-4 flex w-full justify-start">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center h-10 px-6 bg-primary hover:bg-primary-hover text-white font-medium text-sm rounded-[2px] transition-[color,background-color,transform] duration-150 active:scale-[0.98] group tracking-[0.02em]"
              style={{
                fontFamily: "var(--font-valley-sans)",
                transitionTimingFunction: "var(--ease-out)",
              }}
            >
              View Projects
              <span
                className="ml-2 transition-transform duration-150 group-hover:translate-x-1"
                style={{ transitionTimingFunction: "var(--ease-out)" }}
                aria-hidden="true"
              >
                &rarr;
              </span>
            </Link>
          </div>
        </div>

        {/* Right: profile photo — desktop only */}
        <div className="hidden md:flex flex-col items-end">
          <div className="relative w-64 h-80 border border-hairline rounded-[2px] bg-white overflow-hidden">
            <Image
              src={withBasePath("/images/profile/763298974_1503461341795929_4209668349205839748_n.jpg")}
              alt="Kent Elrond Andionne Aspa"
              fill
              className="object-cover"
              priority
              sizes="256px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
