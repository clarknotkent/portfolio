"use client";

import { projects } from "@/lib/projects";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type Category = "Software Engineering" | "PC Building" | "Creative Works" | "SIP Passion Plan";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("Software Engineering");

  const categories: Category[] = ["Software Engineering", "PC Building", "Creative Works", "SIP Passion Plan"];
  const filteredProjects = projects.filter((p) => p.category === activeCategory);

  return (
    <div id="projects-top" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white">Project Showcase</h1>
          <p className="text-xl text-[#94A3B8]">
            A unified hub of my technical projects, PC builds, and creative endeavors.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="border-b border-[#334155]"
        >
          <div className="flex gap-8">
            {categories.map((category) => (
              <motion.button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                whileTap={{ scale: 0.96 }}
                className={`pb-4 px-1 border-b-2 transition-colors ${
                  activeCategory === category
                    ? "border-[#00D9FF] text-[#00D9FF] font-semibold"
                    : "border-transparent text-[#94A3B8] hover:text-[#00D9FF] hover:border-[#00D9FF]/50"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Software Engineering */}
            {activeCategory === "Software Engineering" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -6, scale: 1.01 }}
                    whileTap={{ scale: 0.98, y: -2 }}
                  >
                    <Link
                      href={`/projects/${project.slug}`}
                      className="group block bg-[#1E293B] border border-[#334155] rounded-lg p-6 hover:border-[#6366F1]/50 transition-colors h-full"
                    >
                      <div className="space-y-4">
                        {/* Role */}
                        {project.role && (
                          <div className="text-sm">
                            <span className="px-2 py-1 bg-[#0F172A] text-[#94A3B8] rounded border border-[#334155]">
                              {project.role}
                            </span>
                          </div>
                        )}

                        {/* Title */}
                        <h2 className="text-xl font-semibold text-white">
                          {project.title}
                        </h2>

                        {/* Short Description */}
                        <p className="text-[#94A3B8] leading-relaxed text-justify">
                          {project.shortDescription || project.description}
                        </p>

                        {/* Tech Stack */}
                        {project.techStack && (
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="text-xs px-2 py-1 bg-[#0F172A] text-[#94A3B8] rounded border border-[#334155]"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}

                        <p className="text-sm text-[#00D9FF] font-medium inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          View Project <span aria-hidden="true">→</span>
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}

            {/* PC Building */}
            {activeCategory === "PC Building" && (
              <div className="grid grid-cols-1 gap-6">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -6, scale: 1.01 }}
                    whileTap={{ scale: 0.98, y: -2 }}
                  >
                    <Link
                      href={`/projects/${project.slug}`}
                      className="group block bg-[#1E293B] border border-[#334155] rounded-lg p-8 hover:border-[#00D9FF]/50 transition-colors"
                    >
                      <div className="space-y-6">
                        {/* Header */}
                        <div className="space-y-2">
                          <div className="text-sm">
                            <span className="px-2 py-1 bg-[#0F172A] text-[#94A3B8] rounded border border-[#334155]">
                              {project.role}
                            </span>
                          </div>
                          <h2 className="text-2xl font-semibold text-white">
                            {project.title}
                          </h2>
                          <p className="text-[#94A3B8] leading-relaxed text-justify">
                            {project.description}
                          </p>
                        </div>

                        {/* Spec Sheet */}
                        {project.components && (
                          <div className="bg-[#0F172A] border border-[#334155] rounded-lg p-6">
                            <h3 className="text-sm font-semibold text-white mb-4">
                              SPECIFICATIONS
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {project.components.map((component, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-center gap-2 text-sm text-[#94A3B8]"
                                >
                                  <div className="w-1 h-1 bg-[#00D9FF] rounded-full"></div>
                                  <span>{component}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        <p className="text-sm text-[#00D9FF] font-medium inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          View Build Details <span aria-hidden="true">→</span>
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Creative Works */}
            {activeCategory === "Creative Works" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -6, scale: 1.01 }}
                    whileTap={{ scale: 0.98, y: -2 }}
                  >
                    <Link
                      href={`/projects/${project.slug}`}
                      className="group block bg-[#1E293B] border border-[#334155] rounded-lg p-6 hover:border-[#00D9FF]/50 transition-colors h-full"
                    >
                      <div className="space-y-4">
                        {/* Title */}
                        <h2 className="text-xl font-semibold text-white">
                          {project.title}
                        </h2>

                        {/* Description */}
                        <p className="text-[#94A3B8] leading-relaxed text-justify">
                          {project.description}
                        </p>

                        {/* Image Grid Preview */}
                        <div className="grid grid-cols-3 gap-2 pt-2">
                          {project.slug === "photography-portfolio" ? (
                            Array.from({ length: 6 }).map((_, i) => (
                              <div
                                key={i}
                                className="relative aspect-square bg-[#0F172A] border border-[#334155] rounded overflow-hidden"
                              >
                                <Image
                                  src={`/images/photography/${i + 1}.JPG`}
                                  alt={`Photography ${i + 1}`}
                                  fill
                                  className="object-cover"
                                  sizes="(max-width: 768px) 33vw, 16vw"
                                />
                              </div>
                            ))
                          ) : (
                            Array.from({ length: Math.min(project.imageCount || 6, 6) }).map((_, i) => (
                              <div
                                key={i}
                                className="aspect-square bg-[#0F172A] border border-[#334155] rounded flex items-center justify-center"
                              >
                                <span className="text-xs text-[#94A3B8]">{i + 1}</span>
                              </div>
                            ))
                          )}
                        </div>

                        <p className="text-sm text-[#00D9FF] font-medium inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          View Gallery <span aria-hidden="true">→</span>
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}

            {/* SIP Passion Plan */}
            {activeCategory === "SIP Passion Plan" && (
              <div className="max-w-5xl space-y-12">
                <motion.header
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45 }}
                  className="pb-8 border-b border-[#334155] space-y-5"
                >
                  <p className="text-sm uppercase tracking-[0.18em] text-[#00D9FF] font-semibold">
                    Final Summative Assessment
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">SIP Passion Plan</h2>
                  <p className="text-base md:text-lg text-[#94A3B8] leading-8 text-left max-w-4xl">
                    This section serves as my major output for the Seniors Integration Program journey.
                    For now, the full writeup is in placeholder format and will be replaced with the final submission.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <Link
                      href="#sip-mission"
                      className="text-sm px-4 py-2.5 bg-[#1E293B] border border-[#334155] rounded text-[#94A3B8] hover:text-white hover:border-[#00D9FF] transition-colors"
                    >
                      Personal Mission Statement
                    </Link>
                    <Link
                      href="#sip-prayer"
                      className="text-sm px-4 py-2.5 bg-[#1E293B] border border-[#334155] rounded text-[#94A3B8] hover:text-white hover:border-[#00D9FF] transition-colors"
                    >
                      Prayer for Future Self
                    </Link>
                    <Link
                      href="#sip-plan"
                      className="text-sm px-4 py-2.5 bg-[#1E293B] border border-[#334155] rounded text-[#94A3B8] hover:text-white hover:border-[#00D9FF] transition-colors"
                    >
                      10-20 Year Passion Plan
                    </Link>
                  </div>
                </motion.header>

                <article className="space-y-16">
                  <motion.section
                    id="sip-mission"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.45 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start scroll-mt-24"
                  >
                    <figure className="space-y-3 w-full max-w-[420px]">
                      <Link
                        href="/images/photography/1.JPG"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block"
                      >
                        <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden border border-[#334155] bg-[#1E293B]">
                          <Image
                            src="/images/photography/1.JPG"
                            alt="SIP reflection visual 1"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 1024px) 100vw, 420px"
                          />
                        </div>
                      </Link>
                      <figcaption className="text-sm text-[#94A3B8]">
                        Reflection Image 1. <Link href="/images/photography/1.JPG" target="_blank" rel="noopener noreferrer" className="text-[#00D9FF] hover:text-[#6FC3DF] transition-colors">Open full image</Link>
                      </figcaption>
                    </figure>

                    <div className="space-y-5">
                      <h3 className="text-2xl md:text-3xl font-semibold text-white">1. Personal Mission Statement</h3>
                      <p className="text-base md:text-lg text-[#94A3B8] leading-8 text-left">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in eros ac justo convallis feugiat.
                        Aliquam erat volutpat. Integer tristique sem ut arcu feugiat, vitae consequat risus interdum.
                      </p>
                      <p className="text-base md:text-lg text-[#94A3B8] leading-8 text-left">
                        Donec aliquet, ipsum sed malesuada condimentum, lectus nunc tincidunt libero, vitae faucibus nibh
                        nunc in leo. Morbi id cursus nisl, in blandit quam.
                      </p>
                    </div>
                  </motion.section>

                  <motion.section
                    id="sip-prayer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.45 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start scroll-mt-24"
                  >
                    <div className="space-y-5">
                      <h3 className="text-2xl md:text-3xl font-semibold text-white">2. Prayer for Your Future Self</h3>
                      <p className="text-base md:text-lg text-[#94A3B8] leading-8 text-left">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Praesent
                        feugiat, purus ac posuere pretium, sem nibh pellentesque est, ac posuere lacus turpis vel lorem.
                      </p>
                      <p className="text-base md:text-lg text-[#94A3B8] leading-8 text-left">
                        Suspendisse varius nibh at sapien volutpat, vel ullamcorper eros porttitor. Cras tempus, turpis in
                        ultricies faucibus, velit elit volutpat lacus, et suscipit leo lectus vitae arcu.
                      </p>
                    </div>

                    <figure className="space-y-3 w-full max-w-[420px] lg:ml-auto">
                      <Link
                        href="/images/photography/2.JPG"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block"
                      >
                        <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden border border-[#334155] bg-[#1E293B]">
                          <Image
                            src="/images/photography/2.JPG"
                            alt="SIP reflection visual 2"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 1024px) 100vw, 420px"
                          />
                        </div>
                      </Link>
                      <figcaption className="text-sm text-[#94A3B8]">
                        Reflection Image 2. <Link href="/images/photography/2.JPG" target="_blank" rel="noopener noreferrer" className="text-[#00D9FF] hover:text-[#6FC3DF] transition-colors">Open full image</Link>
                      </figcaption>
                    </figure>
                  </motion.section>

                  <motion.section
                    id="sip-plan"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.45 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start scroll-mt-24"
                  >
                    <figure className="space-y-3 w-full max-w-[420px]">
                      <Link
                        href="/images/photography/3.JPG"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block"
                      >
                        <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden border border-[#334155] bg-[#1E293B]">
                          <Image
                            src="/images/photography/3.JPG"
                            alt="SIP reflection visual 3"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 1024px) 100vw, 420px"
                          />
                        </div>
                      </Link>
                      <figcaption className="text-sm text-[#94A3B8]">
                        Reflection Image 3. <Link href="/images/photography/3.JPG" target="_blank" rel="noopener noreferrer" className="text-[#00D9FF] hover:text-[#6FC3DF] transition-colors">Open full image</Link>
                      </figcaption>
                    </figure>

                    <div className="space-y-5">
                      <h3 className="text-2xl md:text-3xl font-semibold text-white">3. 10–20 Year Passion Plan</h3>
                      <p className="text-base md:text-lg text-[#94A3B8] leading-8 text-left">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sollicitudin justo id feugiat ultrices.
                        Integer eu facilisis augue. Aenean ac eros nec urna imperdiet luctus at non ex.
                      </p>
                      <p className="text-base md:text-lg text-[#94A3B8] leading-8 text-left">
                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed ac massa
                        elit. Nullam volutpat magna vitae neque tincidunt, nec fermentum elit suscipit.
                      </p>
                      <Link
                        href="#projects-top"
                        className="inline-flex items-center gap-1 text-base text-[#00D9FF] hover:text-[#6FC3DF] transition-colors pt-1"
                      >
                        Back to top <span aria-hidden="true">↑</span>
                      </Link>
                    </div>
                  </motion.section>
                </article>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
