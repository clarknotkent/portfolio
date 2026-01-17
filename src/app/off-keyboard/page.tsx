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
            Life beyond the code — where I recharge, compete, and create in different ways.
          </p>
        </motion.div>

        {/* PC Building Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3">
            <div className="h-1 w-12 bg-gray-300"></div>
            <h2 className="text-2xl font-semibold text-gray-900">PC Building</h2>
          </div>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">High-Performance Systems</h3>
              <p className="text-gray-600 leading-relaxed">
                Technical assembly and optimization for competitive gaming. I focus on hardware selection, 
                thermal management, and performance tuning — especially for CS2 at maximum frame rates.
              </p>
              <div className="pt-4 text-sm text-gray-500">
                <p>• Custom builds optimized for competitive FPS</p>
                <p>• Thermal & airflow optimization</p>
                <p>• RGB-free, performance-first philosophy</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Photography Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3">
            <div className="h-1 w-12 bg-gray-300"></div>
            <h2 className="text-2xl font-semibold text-gray-900">Photography</h2>
          </div>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Visual Storytelling</h3>
              <p className="text-gray-600 leading-relaxed">
                Capturing moments through the lens — from street photography to event coverage. 
                I focus on composition, natural lighting, and candid captures.
              </p>
              
              {/* Photo Gallery Placeholder */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="aspect-square bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
                  >
                    <span className="text-xs text-gray-400">Photo {i}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Digital Art Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3">
            <div className="h-1 w-12 bg-gray-300"></div>
            <h2 className="text-2xl font-semibold text-gray-900">Digital Art</h2>
          </div>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Creative Design & Illustration</h3>
              <p className="text-gray-600 leading-relaxed">
                Exploring visual design through digital illustration and graphic work. 
                From UI mockups to character sketches, creativity meets technical precision.
              </p>
              
              {/* Art Gallery Placeholder */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="aspect-video bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
                  >
                    <span className="text-xs text-gray-400">Art {i}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Athlete Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3">
            <div className="h-1 w-12 bg-gray-300"></div>
            <h2 className="text-2xl font-semibold text-gray-900">Athlete</h2>
          </div>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Flag Football</h3>
              <p className="text-gray-600 leading-relaxed">
                Out on the field, I bring the same intensity I apply to coding. Whether it's reading the play, 
                executing under pressure, or working with the team, football teaches me discipline, resilience, and strategic thinking.
              </p>
              <div className="pt-4 text-sm text-gray-500">
                <p>• Teamwork & Communication</p>
                <p>• Physical & Mental Endurance</p>
                <p>• Strategy & Adaptation</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Gamer Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3">
            <div className="h-1 w-12 bg-gray-300"></div>
            <h2 className="text-2xl font-semibold text-gray-900">Gamer</h2>
          </div>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Competitive Gaming</h3>
              <p className="text-gray-600 leading-relaxed">
                Gaming isn't just a hobby — it's another arena where I sharpen my reflexes, decision-making, and problem-solving skills. 
                From strategy games to competitive shooters, I'm always analyzing, adapting, and pushing for improvement.
              </p>
              <div className="pt-4 text-sm text-gray-500">
                <p>• Quick Decision Making</p>
                <p>• Pattern Recognition</p>
                <p>• Competitive Mindset</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Philosophy */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold text-gray-900">The Philosophy</h2>
          <div className="border-l-4 border-gray-300 pl-6 py-2 bg-gray-50">
            <p className="text-lg text-gray-600 italic leading-relaxed">
              "Balance isn't about splitting time equally — it's about bringing full focus to whatever you're doing in the moment. 
              Whether it's debugging code, running a play, or clutching a round, I commit fully and learn from every experience."
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
