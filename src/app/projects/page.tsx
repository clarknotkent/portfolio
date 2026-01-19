"use client";

import { projects } from "@/lib/projects";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type Category = "Software Engineering" | "PC Building" | "Creative Works";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("Software Engineering");

  const categories: Category[] = ["Software Engineering", "PC Building", "Creative Works"];
  const filteredProjects = projects.filter((p) => p.category === activeCategory);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`pb-4 px-1 border-b-2 transition-colors ${
                  activeCategory === category
                    ? "border-[#00D9FF] text-[#00D9FF] font-semibold"
                    : "border-transparent text-[#94A3B8] hover:text-[#00D9FF] hover:border-[#00D9FF]/50"
                }`}
              >
                {category}
              </button>
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
                  >
                    <Link
                      href={`/projects/${project.slug}`}
                      className="block bg-[#1E293B] border border-[#334155] rounded-lg p-6 hover:border-[#6366F1]/50 transition-colors h-full"
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
                  >
                    <Link
                      href={`/projects/${project.slug}`}
                      className="block bg-[#1E293B] border border-[#334155] rounded-lg p-8 hover:border-[#00D9FF]/50 transition-colors"
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
                  >
                    <Link
                      href={`/projects/${project.slug}`}
                      className="block bg-[#1E293B] border border-[#334155] rounded-lg p-6 hover:border-[#00D9FF]/50 transition-colors h-full"
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
