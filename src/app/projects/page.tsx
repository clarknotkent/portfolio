"use client";

import { projects } from "@/lib/projects";
import Link from "next/link";
import { useState } from "react";

type Category = "Software Engineering" | "PC Building" | "Creative Works";

const slugify = (value: string) => value.toLowerCase().replace(/\s+/g, "-");

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("Software Engineering");

  const categories: Category[] = ["Software Engineering", "PC Building", "Creative Works"];

  // Arrow keys move between tabs and wrap, per the WAI-ARIA tabs pattern.
  const onTabKeyDown = (event: React.KeyboardEvent, category: Category) => {
    const keys: Record<string, number> = { ArrowRight: 1, ArrowLeft: -1 };
    let next: Category | undefined;

    if (event.key in keys) {
      const index = categories.indexOf(category);
      next = categories[(index + keys[event.key] + categories.length) % categories.length];
    } else if (event.key === "Home") {
      next = categories[0];
    } else if (event.key === "End") {
      next = categories[categories.length - 1];
    }

    if (!next) return;
    event.preventDefault();
    setActiveCategory(next);
    document.getElementById(`tab-${slugify(next)}`)?.focus();
  };
  const filteredProjects = projects.filter((p) => p.category === activeCategory);

  return (
    <div className="shell pt-10 md:pt-20 pb-20 md:pb-[120px]">
      {/* Page header */}
      <div className="flex flex-col gap-6 mb-8 md:mb-10">
        <h1
          className="text-[36px] md:text-[48px] font-semibold text-ink leading-[1.1] tracking-[-0.02em]"
          style={{ fontFamily: "var(--font-valley-sans)" }}
        >
          Projects
        </h1>
        <p
          className="text-base md:text-lg text-muted leading-[1.6] max-w-[68ch]"
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          Engineering work, hardware, and things built outside the brief.
        </p>
      </div>

      {/* Tab rail — §4.6 */}
      <div className="border-b border-hairline mb-14 md:mb-20">
        <div
          role="tablist"
          aria-label="Project categories"
          className="flex gap-6 overflow-x-auto scrollbar-none -mb-px"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              id={`tab-${slugify(category)}`}
              aria-selected={activeCategory === category}
              aria-controls={`panel-${slugify(category)}`}
              /* Roving tabindex: the tablist is one tab stop, arrows move within it. */
              tabIndex={activeCategory === category ? 0 : -1}
              onKeyDown={(e) => onTabKeyDown(e, category)}
              onClick={() => setActiveCategory(category)}
              className={`text-xs font-medium uppercase tracking-[0.12em] leading-none whitespace-nowrap py-4 border-b-2 transition-colors duration-150 cursor-pointer ${
                activeCategory === category
                  ? "border-primary text-primary"
                  : "border-transparent text-muted hover:text-ink"
              }`}
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                transitionTimingFunction: "var(--ease-out)",
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Projects grid */}
      {/* `key` remounts the panel on a tab change, which replays the enter
          animation. Kept short (150ms) because this is navigation the visitor
          repeats — long enough to explain the swap, not long enough to wait on. */}
      <div
        key={activeCategory}
        className="panel-in"
        role="tabpanel"
        id={`panel-${slugify(activeCategory)}`}
        aria-labelledby={`tab-${slugify(activeCategory)}`}
        tabIndex={0}
      >
          {/* Software Engineering — 2-col grid */}
          {activeCategory === "Software Engineering" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProjects.map((project) => (
                /* The card is a container, not a link. The title carries a
                   stretched link so the whole card is clickable, which leaves the
                   repository link free to be a real, focusable sibling rather than
                   a click handler nested inside another anchor. */
                <div
                  key={project.slug}
                  className={`project-card group relative bg-canvas border border-hairline focus-within:border-primary hover:border-primary transition-[border-color] duration-150 p-6 flex flex-col rounded-[2px] ${
                    project.featured ? "md:col-span-2" : ""
                  }`}
                  style={{ transitionTimingFunction: "var(--ease-out)" }}
                >
                  <div className="flex flex-col gap-2 flex-grow">
                    <h2
                      className={`text-ink font-semibold leading-[1.3] tracking-normal ${
                        project.featured ? "text-xl md:text-2xl" : "text-lg md:text-xl"
                      }`}
                      style={{ fontFamily: "var(--font-valley-sans)" }}
                    >
                      <Link
                        href={`/projects/${project.slug}`}
                        className="after:absolute after:inset-0 after:rounded-[2px] focus-visible:outline-none focus-visible:after:outline focus-visible:after:outline-1 focus-visible:after:outline-primary focus-visible:after:outline-offset-2"
                      >
                        {project.title}
                      </Link>
                    </h2>
                    <p className="text-muted text-base leading-[1.6]">
                      {project.shortDescription || project.description}
                    </p>
                  </div>

                  {/* Tech stack tags — §4.4 */}
                  {project.techStack && (
                    <div className="flex gap-2 flex-wrap mt-auto pt-4">
                      {(project.featured ? project.techStack : project.techStack.slice(0, 4)).map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center rounded-[2px] bg-surface border border-hairline px-2 h-6 text-ink text-xs tracking-[0.04em]"
                          style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Footer */}
                  <div className="pt-6 border-t border-hairline mt-4 flex justify-between items-center">
                    <span
                      className="text-primary text-sm font-medium flex items-center gap-2 tracking-[0.02em]"
                      style={{ fontFamily: "var(--font-valley-sans)" }}
                    >
                      View Architecture
                      <span
                        className="arrow-icon transition-transform duration-150"
                        style={{ transitionTimingFunction: "var(--ease-out)" }}
                        aria-hidden="true"
                      >
                        &rarr;
                      </span>
                    </span>
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} repository on GitHub`}
                        className="relative z-10 -m-3 p-3 inline-flex items-center justify-center text-muted hover:text-ink focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-[2px] transition-[color,transform] duration-150 active:scale-[0.97]"
                        style={{ transitionTimingFunction: "var(--ease-out)" }}
                      >
                        <svg aria-hidden="true" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* PC Building — single column */}
          {activeCategory === "PC Building" && (
            <div className="grid grid-cols-1 gap-6">
              {filteredProjects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="project-card group bg-canvas border border-hairline hover:border-primary transition-[border-color,transform] duration-150 p-6 flex flex-col gap-6 rounded-[2px] active:scale-[0.97]"
                  style={{ transitionTimingFunction: "var(--ease-out)" }}
                >
                  <div className="flex flex-col gap-2">
                    {project.role && (
                      <span
                        className="text-xs text-muted uppercase tracking-[0.12em] font-medium"
                        style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                      >
                        {project.role}
                      </span>
                    )}
                    <h2
                      className="text-ink text-lg md:text-xl font-semibold leading-[1.3]"
                      style={{ fontFamily: "var(--font-valley-sans)" }}
                    >
                      {project.title}
                    </h2>
                    <p className="text-muted text-base leading-[1.6]">
                      {project.description}
                    </p>
                  </div>

                  {/* Specs */}
                  {project.components && (
                    <div className="bg-surface border border-hairline rounded-[2px] p-6">
                      <h4
                        className="text-xs text-muted uppercase tracking-[0.12em] font-medium mb-4"
                        style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                      >
                        Specifications
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {project.components.map((component, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-ink">
                            <div className="w-1 h-1 bg-primary rounded-full" />
                            <span>{component}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="pt-4 border-t border-hairline flex justify-between items-center">
                    <span
                      className="text-primary text-sm font-medium flex items-center gap-2 tracking-[0.02em]"
                      style={{ fontFamily: "var(--font-valley-sans)" }}
                    >
                      View build details
                      <span className="arrow-icon transition-transform duration-150" style={{ transitionTimingFunction: "var(--ease-out)" }} aria-hidden="true">&rarr;</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Creative Works — 2-col grid */}
          {activeCategory === "Creative Works" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProjects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="project-card group bg-canvas border border-hairline hover:border-primary transition-[border-color,transform] duration-150 p-6 flex flex-col gap-4 rounded-[2px] active:scale-[0.97]"
                  style={{ transitionTimingFunction: "var(--ease-out)" }}
                >
                  <div className="flex flex-col gap-2 flex-grow">
                    <h2
                      className="text-ink text-lg md:text-xl font-semibold leading-[1.3]"
                      style={{ fontFamily: "var(--font-valley-sans)" }}
                    >
                      {project.title}
                    </h2>
                    <p className="text-muted text-base leading-[1.6]">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-hairline flex justify-between items-center">
                    <span
                      className="text-primary text-sm font-medium flex items-center gap-2 tracking-[0.02em]"
                      style={{ fontFamily: "var(--font-valley-sans)" }}
                    >
                      View gallery
                      <span className="arrow-icon transition-transform duration-150" style={{ transitionTimingFunction: "var(--ease-out)" }} aria-hidden="true">&rarr;</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
      </div>
    </div>
  );
}
