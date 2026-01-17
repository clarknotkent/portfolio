"use client";

import { projects } from "@/lib/projects";
import Link from "next/link";
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Project Showcase</h1>
          <p className="text-xl text-gray-600">
            A unified hub of my technical projects, PC builds, and creative endeavors.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="border-b border-gray-200"
        >
          <div className="flex gap-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`pb-4 px-1 border-b-2 transition-colors ${
                  activeCategory === category
                    ? "border-gray-900 text-gray-900 font-semibold"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
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
                      className="block bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors h-full"
                    >
                      <div className="space-y-4">
                        {/* Role */}
                        {project.role && (
                          <div className="text-sm">
                            <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded border border-gray-200">
                              {project.role}
                            </span>
                          </div>
                        )}

                        {/* Title */}
                        <h2 className="text-xl font-semibold text-gray-900">
                          {project.title}
                        </h2>

                        {/* Description */}
                        <p className="text-gray-600 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Tech Stack */}
                        {project.techStack && (
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="text-xs px-2 py-1 bg-gray-50 text-gray-700 rounded border border-gray-200"
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
                      className="block bg-white border border-gray-200 rounded-lg p-8 hover:border-gray-300 transition-colors"
                    >
                      <div className="space-y-6">
                        {/* Header */}
                        <div className="space-y-2">
                          <div className="text-sm">
                            <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded border border-gray-200">
                              {project.role}
                            </span>
                          </div>
                          <h2 className="text-2xl font-semibold text-gray-900">
                            {project.title}
                          </h2>
                          <p className="text-gray-600 leading-relaxed">
                            {project.description}
                          </p>
                        </div>

                        {/* Spec Sheet */}
                        {project.components && (
                          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                            <h3 className="text-sm font-semibold text-gray-900 mb-4">
                              SPECIFICATIONS
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {project.components.map((component, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-center gap-2 text-sm text-gray-700"
                                >
                                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
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
                      className="block bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors h-full"
                    >
                      <div className="space-y-4">
                        {/* Title */}
                        <h2 className="text-xl font-semibold text-gray-900">
                          {project.title}
                        </h2>

                        {/* Description */}
                        <p className="text-gray-600 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Image Grid Preview */}
                        <div className="grid grid-cols-3 gap-2 pt-2">
                          {Array.from({ length: Math.min(project.imageCount || 6, 6) }).map((_, i) => (
                            <div
                              key={i}
                              className="aspect-square bg-gray-100 border border-gray-200 rounded flex items-center justify-center"
                            >
                              <span className="text-xs text-gray-400">{i + 1}</span>
                            </div>
                          ))}
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
