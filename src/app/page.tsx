"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center p-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl" />
      </div>

      <div className="z-10 w-full max-w-4xl flex flex-col items-center text-center space-y-8">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm shadow-[0_0_15px_rgba(34,197,94,0.1)]">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-xs sm:text-sm font-medium tracking-wide text-gray-300">
              <span className="text-green-400 font-bold">[LIVE]</span> 486-Hour OJT Grind in Progress <span className="text-gray-500 mx-1">|</span> Target: April 2026
            </span>
          </div>
        </motion.div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
            Developer. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Athlete.</span> Gamer.
          </h1>
          
          <blockquote className="text-lg md:text-xl text-gray-400 italic font-light border-l-4 border-purple-500/50 pl-4 py-1 inline-block text-left mx-auto max-w-2xl">
            "I’m just a simple man, trying to make my way in the universe."
          </blockquote>

          <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-300 leading-relaxed">
            I love technology, gaming, and sports. I'm currently an IT student building my foundation in full-stack development. Whether I’m out on the football field, playing video games, or diving into a new project, I’m just focused on the grind and getting better every day.
          </p>
        </motion.div>

        {/* Call to Action Buttons (Optional but good for portfolio) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 pt-4"
        >
          <a href="/builds" className="px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition-colors">
            View My Builds
          </a>
          <a href="/about" className="px-6 py-3 rounded-lg bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors border border-white/20">
            More About Me
          </a>
        </motion.div>
      </div>
    </div>
  );
}

git push -u origin master
