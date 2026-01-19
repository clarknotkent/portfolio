"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  const socialLinks = [
    {
      platform: "Email",
      handle: "kentaspa54@gmail.com",
      url: "mailto:kentaspa54@gmail.com",
      description: "Best way to reach me for professional inquiries",
    },
    {
      platform: "LinkedIn",
      handle: "linkedin.com/in/clarknotkent",
      url: "https://www.linkedin.com/in/clarknotkent/",
      description: "Connect with me professionally",
    },
    {
      platform: "Instagram",
      handle: "@clarknotkent_",
      url: "https://instagram.com/clarknotkent_",
      description: "Behind the scenes and off-keyboard moments",
    },
    {
      platform: "GitHub",
      handle: "github.com/clarknotkent",
      url: "https://github.com/clarknotkent",
      description: "Check out my code and projects",
    },
    {
      platform: "Steam",
      handle: "clarknotkent_",
      url: "https://steamcommunity.com/id/clarknotkent_/",
      description: "Add me for some competitive gaming",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white">Get In Touch</h1>
          <p className="text-lg md:text-xl text-[#94A3B8] leading-relaxed">
            Whether you want to discuss a project, collaborate, or just connect — I&apos;m always open to new opportunities and conversations.
          </p>
        </motion.div>

        {/* Social Links Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-8"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 pb-2">
            <h2 className="text-3xl font-semibold text-white">Find Me Online</h2>
            <div className="bg-[#1E293B] border border-[#334155] rounded-lg px-5 py-3">
              <p className="text-sm text-[#94A3B8]">
                I typically respond within <span className="font-semibold text-white">24-48 hours</span>
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-8 bg-[#1E293B] border border-[#334155] rounded-lg hover:border-[#00D9FF]/50 hover:shadow-sm transition-all group"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-2 flex-1">
                    <h3 className="text-xl font-semibold text-white group-hover:text-[#00D9FF] transition-colors">
                      {social.platform}
                    </h3>
                    <p className="text-sm text-[#94A3B8] font-mono break-all">{social.handle}</p>
                    <p className="text-sm text-[#94A3B8] pt-1">{social.description}</p>
                  </div>
                  <svg
                    className="h-5 w-5 text-[#94A3B8] group-hover:text-[#00D9FF] transition-colors flex-shrink-0 ml-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
