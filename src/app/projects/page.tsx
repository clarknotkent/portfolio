"use client";

import { projects } from "@/lib/projects";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { withBasePath } from "@/lib/utils";

type Category = "Software Engineering" | "PC Building" | "Creative Works";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("Software Engineering");

  const categories: Category[] = ["Software Engineering", "PC Building", "Creative Works"];
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
                        {/* Role + Source */}
                        {(project.role || project.repoUrl) && (
                          <div className="flex flex-wrap items-center gap-2 text-sm">
                            {project.role && (
                              <span className="px-2 py-1 bg-[#0F172A] text-[#94A3B8] rounded border border-[#334155]">
                                {project.role}
                              </span>
                            )}
                            {project.repoUrl && (
                              <span className="inline-flex items-center gap-1.5 px-2 py-1 bg-[#0F172A] text-[#94A3B8] rounded border border-[#334155] group-hover:text-[#00D9FF] group-hover:border-[#00D9FF]/50 transition-colors">
                                <svg
                                  className="h-3.5 w-3.5"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                  aria-hidden="true"
                                >
                                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                                </svg>
                                Source
                              </span>
                            )}
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
                                  src={withBasePath(`/images/photography/${i + 1}.JPG`)}
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

          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
