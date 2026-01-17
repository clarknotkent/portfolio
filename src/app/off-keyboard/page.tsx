"use client";

import { motion } from "framer-motion";

export default function OffKeyboardPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Off-Keyboard</h1>
          <p className="text-xl text-gray-600">
            Going AFK - Life outside Tech
          </p>
        </motion.div>

        {/* Flag Football Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3">
            <div className="h-1 w-12 bg-gray-300"></div>
            <h2 className="text-2xl font-semibold text-gray-900">Flag Football</h2>
          </div>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Fun, Competitive Spirit, and Teamwork</h3>
              <p className="text-gray-600 leading-relaxed">
                Flag football is my ultimate escape—it's a way for me to step away from the screen, forget my problems, and just have fun on the field. 
                It's a chance to bond with people from different backgrounds who share a love for the NFL. This sport has given me a growing community 
                and the chance to travel across the country to compete in Iligan, Cagayan de Oro, Manila, Malaybalay, and Davao.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Event Photography Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3">
            <div className="h-1 w-12 bg-gray-300"></div>
            <h2 className="text-2xl font-semibold text-gray-900">Event Photography</h2>
          </div>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Capturing the Moment</h3>
              <p className="text-gray-600 leading-relaxed">
                When I'm not at my desk, I often volunteer to be the event photographer for local tech gatherings. I focus on capturing candid, 
                unscripted moments throughout events hosted by organizations like UX Davao, Devcon Davao, and UXPH. I prefer to document the real 
                interactions that happen when the community comes together.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Community Building Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3">
            <div className="h-1 w-12 bg-gray-300"></div>
            <h2 className="text-2xl font-semibold text-gray-900">Community Building</h2>
          </div>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Collaboration with Fellow Students</h3>
              <p className="text-gray-600 leading-relaxed">
                A large part of my time is spent within ACCESS, focusing on the power of student collaboration. I believe in building a space where 
                IT enthusiasts can learn from one another and grow together. It's about creating a supportive environment where we can share ideas 
                and build a network that extends beyond the classroom.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
