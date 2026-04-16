"use client";

import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  SiDart,
  SiExpress,
  SiFirebase,
  SiFlutter,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSupabase,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";

type TechIcon = {
  icon: IconType;
  color: string;
};

type TechItem = {
  name: string;
  icons: TechIcon[];
};

const techStack: Record<"frontend" | "backend" | "languages", TechItem[]> = {
  frontend: [
    { name: "Vue.js", icons: [{ icon: SiVuedotjs, color: "#41B883" }] },
    { name: "React.js", icons: [{ icon: SiReact, color: "#61DAFB" }] },
    { name: "Next.js", icons: [{ icon: SiNextdotjs, color: "#FFFFFF" }] },
    { name: "Flutter", icons: [{ icon: SiFlutter, color: "#47C5FB" }] },
  ],
  backend: [
    {
      name: "Express + Node",
      icons: [
        { icon: SiExpress, color: "#FFFFFF" },
        { icon: SiNodedotjs, color: "#5FA04E" },
      ],
    },
    { name: "PostgreSQL", icons: [{ icon: SiPostgresql, color: "#336791" }] },
    { name: "Firebase", icons: [{ icon: SiFirebase, color: "#FFCA28" }] },
    { name: "Supabase", icons: [{ icon: SiSupabase, color: "#3ECF8E" }] },
  ],
  languages: [
    { name: "JavaScript", icons: [{ icon: SiJavascript, color: "#F7DF1E" }] },
    { name: "TypeScript", icons: [{ icon: SiTypescript, color: "#3178C6" }] },
    { name: "Dart", icons: [{ icon: SiDart, color: "#0175C2" }] },
    { name: "Python", icons: [{ icon: SiPython, color: "#3776AB" }] },
  ],
};

function TechGrid({ items }: { items: TechItem[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {items.map((tech) => (
        <div
          key={tech.name}
          className="px-4 py-3 bg-[#1E293B] border border-[#334155] rounded-lg text-center text-sm font-medium text-white flex flex-col items-center gap-2"
        >
          <div
            className={
              tech.icons.length > 1
                ? "flex items-center justify-center gap-2 h-8"
                : "flex items-center justify-center h-8"
            }
            aria-hidden="true"
          >
            {tech.icons.map((iconConfig, idx) => {
              const Icon = iconConfig.icon;

              return (
                <Icon
                  key={`${tech.name}-${idx}`}
                  className={tech.icons.length > 1 ? "w-5 h-5" : "w-8 h-8"}
                  style={{ color: iconConfig.color }}
                />
              );
            })}
          </div>
          <span>{tech.name}</span>
        </div>
      ))}
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white">About Me</h1>
          <p className="text-xl text-[#94A3B8] italic border-l-4 border-[#00D9FF] pl-4">
            &ldquo;I&apos;m just a simple man, trying to make my way in the universe.&rdquo;
          </p>
        </motion.div>

        {/* Bio Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold text-white">Who Am I?</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-lg text-[#94A3B8] leading-relaxed">
              I&apos;m Kent, a passionate learner aspiring to make an impact as a Software Engineer and Project Manager. 
              I love tackling complex problems, from building full-stack applications to leading development teams. 
              My competitive spirit keeps me busy—whether I&apos;m playing video games or out on the field playing Flag Football.
            </p>
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold text-white">Education</h2>
          <div className="bg-[#1E293B] border border-[#334155] rounded-lg p-6 space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-white">Ateneo de Davao University</h3>
              <p className="text-[#94A3B8]">Bachelor of Science in Information Technology</p>
              <p className="text-sm text-[#94A3B8]">2022 – 2026</p>
              <p className="text-sm text-[#94A3B8] mt-1">QPI: 3.xx (Pending calculation)</p>
            </div>
          </div>
        </motion.section>

        {/* Organizations */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold text-white">Organizations</h2>
          <div className="space-y-4">
            {/* ACCESS */}
            <div className="bg-[#1E293B] border border-[#334155] rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                ACCESS (Ateneo Circle of Computer Enthusiasts for Study and Success)
              </h3>
              <div className="space-y-2 text-sm text-[#94A3B8]">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#00D9FF] rounded-full"></div>
                  <span><span className="font-medium text-white">Executive Vice President</span> | May 2025 – Present</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#00D9FF] rounded-full"></div>
                  <span><span className="font-medium text-white">President</span> | January 2024 – May 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#00D9FF] rounded-full"></div>
                  <span><span className="font-medium text-white">Internal Vice President</span> | April 2023 – December 2023</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#00D9FF] rounded-full"></div>
                  <span><span className="font-medium text-white">Member</span> | August 2022 – Present</span>
                </div>
              </div>
            </div>

            {/* Davao Legionnaires */}
            <div className="bg-[#1E293B] border border-[#334155] rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">
                Davao Legionnaires Flag Football Team
              </h3>
              <p className="text-sm text-[#94A3B8]">
                <span className="font-medium text-white">Active Player</span> | 2022 – Present
              </p>
            </div>

            {/* DICE */}
            <div className="bg-[#1E293B] border border-[#334155] rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">
                DICE (Davao Interschool Computer Enthusiasts)
              </h3>
              <p className="text-sm text-[#94A3B8]">
                <span className="font-medium text-white">Community Member</span> | September 2023 – Present
              </p>
            </div>
          </div>
        </motion.section>

        {/* Volunteering */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold text-white">Volunteering (Photographer)</h2>
          <div className="bg-[#1E293B] border border-[#334155] rounded-lg p-6">
            <div className="space-y-3 text-sm text-[#94A3B8]">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#00D9FF] rounded-full"></div>
                <span><span className="font-medium text-white">UXPH</span> | August 2025 – September 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#00D9FF] rounded-full"></div>
                <span><span className="font-medium text-white">UX Davao</span> | January 2024 – Present</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#00D9FF] rounded-full"></div>
                <span><span className="font-medium text-white">Devcon Davao</span> | May 2024 – June 2024</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Tech Stack */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold text-white">Tech Stack</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-white mb-3">Frontend</h3>
              <TechGrid items={techStack.frontend} />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-3">Backend</h3>
              <TechGrid items={techStack.backend} />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-3">Languages</h3>
              <TechGrid items={techStack.languages} />
            </div>
          </div>
        </motion.section>

        {/* Certifications Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold text-white">Certifications</h2>
          <div className="bg-[#1E293B] border border-[#334155] rounded-lg p-6">
            <div className="space-y-3 text-sm text-[#94A3B8]">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#00D9FF] rounded-full"></div>
                <span><span className="font-medium text-white">Introduction to Project Management</span> | Issued by IBM (via Coursera)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#00D9FF] rounded-full"></div>
                <span><span className="font-medium text-white">CCNA: Introduction to Networks</span> | Issued by Cisco</span>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
