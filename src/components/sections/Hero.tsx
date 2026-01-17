"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <div className="relative flex items-center justify-center p-8 bg-white border-b border-gray-100 py-20 lg:py-32">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Column: Content */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start space-y-8 text-left order-2 lg:order-1"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gray-500"></span>
            </span>
            <span className="text-sm font-semibold text-gray-700 tracking-wide">
              [LIVE] 486-Hour OJT Grind
            </span>
            <span className="h-4 w-px bg-gray-300"></span>
            <span className="text-sm text-gray-500 font-medium">Target: April 2026</span>
          </div>

          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1]">
              Developer. <br />
              Athlete. <br />
              Gamer.
            </h1>
            
            <div className="space-y-4">
              <blockquote className="text-xl text-gray-500 italic border-l-4 border-gray-300 pl-4">
                "I’m just a simple man, trying to make my way in the universe."
              </blockquote>
              
              <p className="max-w-xl text-lg text-gray-600 leading-relaxed font-light">
                I love technology, gaming, and sports. I'm currently an IT student building my foundation in full-stack development. Whether I’m out on the football field, playing video games, or diving into a new project, I’m just focused on the grind and getting better every day.
              </p>
            </div>
          </div>

          {/* Action Area */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2">
            <Button variant="primary" size="lg" onClick={() => window.location.href='/projects'}>
              View Projects
            </Button>
            <Button variant="outline" size="lg" onClick={() => window.location.href='/about'}>
              About Me
            </Button>
          </div>

          {/* Social Icons Placeholder */}
          <div className="flex items-center gap-6 pt-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-6 w-6 bg-gray-300 rounded-sm hover:bg-gray-400 transition-colors cursor-pointer" />
            ))}
          </div>

        </motion.div>

        {/* Right Column: Hero Image Placeholder */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5, delay: 0.1 }}
           className="relative flex justify-center lg:justify-end order-1 lg:order-2"
        >
          {/* Geometric Shape Container */}
          <div className="relative w-full aspect-square max-w-[500px] bg-gray-100 rounded-[2rem] border border-gray-200 flex items-center justify-center">
            <div className="text-center space-y-2">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 border-4 border-white shadow-sm"></div>
              <p className="text-gray-500 font-medium text-lg uppercase tracking-widest">Hero Image</p>
              <p className="text-gray-400 text-sm">Profile Photo Placeholder</p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
