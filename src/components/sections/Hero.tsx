"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <div className="relative flex items-center justify-center p-8 bg-[#0F172A] py-20 lg:py-32">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Column: Content */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start space-y-8 text-left order-2 lg:order-1"
        >
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              Kent Elrond <br />
              Andionne <br />
              Aspa
            </h1>
            
            <div className="space-y-4">
              <blockquote className="text-xl text-[#94A3B8] italic border-l-4 border-[#00D9FF] pl-4">
                "I'm just a simple man, trying to make my way in the universe."
              </blockquote>
              
              <p className="max-w-xl text-lg text-[#94A3B8] leading-relaxed font-light">
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
              <div key={i} className="h-6 w-6 bg-[#334155] rounded-sm hover:bg-[#00D9FF] transition-colors cursor-pointer" />
            ))}
          </div>

        </motion.div>

        {/* Right Column: Profile Photo */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5, delay: 0.1 }}
           className="relative flex justify-center lg:justify-end order-1 lg:order-2"
        >
          {/* Profile Photo Container */}
          <div className="relative w-full aspect-square max-w-[500px] bg-[#1E293B] rounded-[2rem] border border-[#334155] overflow-hidden">
            <Image
              src="/images/profile/561751792_24830002459993972_4220551045555156543_n.jpg"
              alt="Kent Elrond Andionne Aspa"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 500px"
            />
          </div>
        </motion.div>

      </div>
    </div>
  );
}
