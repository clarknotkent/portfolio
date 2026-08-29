"use client";

import { motion } from "framer-motion";
import { usePageEntrance } from "@/lib/motion";

export default function AboutPage() {
  const pageEntrance = usePageEntrance();
  return (
    <div className="shell pt-10 md:pt-20 pb-20 md:pb-[120px]">
      <motion.div
        {...pageEntrance}
        className="flex flex-col gap-14 md:gap-20"
      >
        {/* Page header */}
        <div className="flex flex-col gap-6">
          <span
            className="text-xs font-medium uppercase tracking-[0.12em] text-muted"
            style={{ fontFamily: "var(--font-jetbrains-mono)" }}
          >
            About
          </span>
          <h1
            className="text-[36px] md:text-[48px] font-semibold text-ink leading-[1.1] tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-valley-sans)" }}
          >
            About
          </h1>

          {/* Bio */}
          <div className="text-base leading-[1.6] text-ink max-w-[68ch] flex flex-col gap-6">
            <p>
              I build precise, scalable digital infrastructure. My approach to software engineering is
              rooted in minimalism and performance, stripping away unnecessary abstractions to expose
              clean, maintainable logic.
            </p>
            <p>
              I&apos;m Kent, a recent BSIT graduate focused on making an impact as a Project Manager and Software Engineer.
              I love tackling complex problems, from building full-stack applications to leading development teams.
              My competitive spirit keeps me busy—whether I&apos;m playing video games or out on the field playing Flag Football.
            </p>
          </div>
        </div>

        {/* Sections — 12-col grid: labels cols 1–3, content cols 4–12 */}

        {/* Work experience */}
        <section className="border-t border-hairline pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            <div className="lg:col-span-3">
              <span
                className="text-xs font-medium uppercase tracking-[0.12em] text-muted"
                style={{ fontFamily: "var(--font-jetbrains-mono)" }}
              >
                Work experience
              </span>
            </div>
            <div className="lg:col-span-9 flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
                <div className="flex flex-col">
                  <span className="text-base font-medium text-ink">
                    R&amp;D Intern — Project Lead
                  </span>
                  <span className="text-sm text-muted">
                    ARISEn Lab, Ateneo de Davao University
                  </span>
                  <span className="text-sm text-muted mt-1">
                    Project Manager · Product Manager · Full-Stack Developer
                  </span>
                </div>
                <span
                  className="text-xs text-muted mt-1 sm:mt-0 tabular-nums"
                  style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                >
                  Jan 2026 — Apr 2026
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="border-t border-hairline pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            <div className="lg:col-span-3">
              <span
                className="text-xs font-medium uppercase tracking-[0.12em] text-muted"
                style={{ fontFamily: "var(--font-jetbrains-mono)" }}
              >
                Education
              </span>
            </div>
            <div className="lg:col-span-9 flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
                <div className="flex flex-col">
                  <span className="text-base font-medium text-ink">
                    Bachelor of Science in Information Technology
                  </span>
                  <span className="text-sm text-muted">Ateneo de Davao University</span>
                  <span className="text-sm text-muted mt-1">QPI: 3.25</span>
                </div>
                <span
                  className="text-xs text-muted mt-1 sm:mt-0 tabular-nums"
                  style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                >
                  2022 — 2026
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Organizations */}
        <section className="border-t border-hairline pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            <div className="lg:col-span-3">
              <span
                className="text-xs font-medium uppercase tracking-[0.12em] text-muted"
                style={{ fontFamily: "var(--font-jetbrains-mono)" }}
              >
                Organizations
              </span>
            </div>
            <div className="lg:col-span-9 flex flex-col gap-6">
              {/* ACCESS */}
              <div>
                <span className="text-base font-medium text-ink block mb-2">
                  ACCESS (Ateneo Circle of Computer Enthusiasts for Study and Success)
                </span>
                <div className="flex flex-col gap-2 text-sm text-muted">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                    <span><span className="font-medium text-ink">Executive Vice President</span> | May 2025 – April 2026</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                    <span><span className="font-medium text-ink">President</span> | January 2024 – May 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                    <span><span className="font-medium text-ink">Internal Vice President</span> | April 2023 – December 2023</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                    <span><span className="font-medium text-ink">Member</span> | August 2022 – Present</span>
                  </div>
                </div>
              </div>

              {/* Davao Legionnaires */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
                <div className="flex flex-col">
                  <span className="text-base font-medium text-ink">
                    Davao Legionnaires Flag Football Team
                  </span>
                  <span className="text-sm text-muted">Active Player</span>
                </div>
                <span
                  className="text-xs text-muted mt-1 sm:mt-0 tabular-nums"
                  style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                >
                  2022 — Present
                </span>
              </div>

              {/* DICE */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
                <div className="flex flex-col">
                  <span className="text-base font-medium text-ink">
                    DICE (Davao Interschool Computer Enthusiasts)
                  </span>
                  <span className="text-sm text-muted">Community Member</span>
                </div>
                <span
                  className="text-xs text-muted mt-1 sm:mt-0 tabular-nums"
                  style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                >
                  Sep 2023 — Present
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Volunteering */}
        <section className="border-t border-hairline pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            <div className="lg:col-span-3">
              <span
                className="text-xs font-medium uppercase tracking-[0.12em] text-muted"
                style={{ fontFamily: "var(--font-jetbrains-mono)" }}
              >
                Volunteering
              </span>
            </div>
            <div className="lg:col-span-9">
              <span className="text-base font-medium text-ink block mb-2">
                Event photographer
              </span>
              <div className="flex flex-col gap-2 text-sm text-muted">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                  <span><span className="font-medium text-ink">UXPH</span> | August 2025 – September 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                  <span><span className="font-medium text-ink">UX Davao</span> | January 2024 – Present</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                  <span><span className="font-medium text-ink">DevCon Davao</span> | May 2024 – June 2024</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech stack */}
        <section className="border-t border-hairline pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            <div className="lg:col-span-3">
              <span
                className="text-xs font-medium uppercase tracking-[0.12em] text-muted"
                style={{ fontFamily: "var(--font-jetbrains-mono)" }}
              >
                Tech stack
              </span>
            </div>
            <div className="lg:col-span-9 flex flex-wrap gap-2">
              {[
                "TypeScript", "JavaScript", "Python", "React", "Next.js", "Vue.js",
                "Nuxt 3", "Node.js", "FastAPI", "Firebase", "PostgreSQL",
                "Tailwind CSS", "Framer Motion", "Git", "Docker", "Figma",
              ].map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-[2px] bg-surface border border-hairline px-2 h-6 text-ink text-xs tracking-[0.04em]"
                  style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Credentials */}
        <section className="border-t border-hairline pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            <div className="lg:col-span-3">
              <span
                className="text-xs font-medium uppercase tracking-[0.12em] text-muted"
                style={{ fontFamily: "var(--font-jetbrains-mono)" }}
              >
                Credentials
              </span>
            </div>
            <div className="lg:col-span-9 flex flex-col gap-6">
              <div className="flex flex-col">
                <span className="text-base font-medium text-ink">Introduction to Project Management</span>
                <span className="text-sm text-muted">Issued by IBM (via Coursera)</span>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-medium text-ink">CCNA: Introduction to Networks</span>
                <span className="text-sm text-muted">Issued by Cisco</span>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
