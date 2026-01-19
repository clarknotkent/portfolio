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
                &quot;I&apos;m just a simple man, trying to make my way in the universe.&quot;
              </blockquote>
              
              <p className="max-w-xl text-lg text-[#94A3B8] leading-relaxed font-light">
                I love technology, gaming, and sports. I&apos;m currently an IT student building my foundation in full-stack development. Whether I&apos;m out on the football field, playing video games, or diving into a new project, I&apos;m just focused on the grind and getting better every day.
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

          {/* Social Links */}
          <div className="flex items-center gap-6 pt-4">
            {/* Email */}
            <a 
              href="mailto:kentaspa54@gmail.com"
              className="h-6 w-6 text-[#94A3B8] hover:text-[#6366F1] transition-colors"
              aria-label="Email"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>

            {/* GitHub */}
            <a 
              href="https://github.com/clarknotkent"
              target="_blank"
              rel="noopener noreferrer"
              className="h-6 w-6 text-[#94A3B8] hover:text-[#6366F1] transition-colors"
              aria-label="GitHub"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://linkedin.com/in/clarknotkent"
              target="_blank"
              rel="noopener noreferrer"
              className="h-6 w-6 text-[#94A3B8] hover:text-[#6366F1] transition-colors"
              aria-label="LinkedIn"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a 
              href="https://instagram.com/clarknotkent_"
              target="_blank"
              rel="noopener noreferrer"
              className="h-6 w-6 text-[#94A3B8] hover:text-[#6366F1] transition-colors"
              aria-label="Instagram"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
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
