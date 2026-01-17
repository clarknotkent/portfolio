export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">About Me</h1>
          <p className="text-xl text-gray-500 italic border-l-4 border-gray-300 pl-4">
            "I'm just a simple man, trying to make my way in the universe."
          </p>
        </div>

        {/* Bio Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">Who I Am</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm Kent, a passionate learner aspiring to make an impact as a Software Engineer and Project Manager. 
              I love tackling complex problems, from building full-stack applications to leading development teams. 
              My competitive spirit keeps me busy—whether I'm playing video games or out on the field playing Flag Football.
            </p>
          </div>
        </section>

        {/* Education */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">Education</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Ateneo de Davao University</h3>
              <p className="text-gray-600">Bachelor of Science in Information Technology</p>
              <p className="text-sm text-gray-500">2022 – 2026</p>
              <p className="text-sm text-gray-500 mt-1">QPI: 3.xx (Pending calculation)</p>
            </div>
          </div>
        </section>

        {/* Organizations */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">Organizations</h2>
          <div className="space-y-4">
            {/* ACCESS */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                ACCESS (Ateneo Circle of Computer Enthusiasts for Study and Success)
              </h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                  <span><span className="font-medium text-gray-700">Executive Vice President</span> | May 2025 – Present</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                  <span><span className="font-medium text-gray-700">President</span> | January 2024 – May 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                  <span><span className="font-medium text-gray-700">Internal Vice President</span> | April 2023 – December 2023</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                  <span><span className="font-medium text-gray-700">Member</span> | August 2022 – Present</span>
                </div>
              </div>
            </div>

            {/* Davao Legionnaires */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Davao Legionnaires Flag Football Team
              </h3>
              <p className="text-sm text-gray-600">
                <span className="font-medium text-gray-700">Active Player</span> | 2022 – Present
              </p>
            </div>

            {/* DICE */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                DICE (Davao Interschool Computer Enthusiasts)
              </h3>
              <p className="text-sm text-gray-600">
                <span className="font-medium text-gray-700">Community Member</span> | September 2023 – Present
              </p>
            </div>
          </div>
        </section>

        {/* Volunteering */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">Volunteering (Photographer)</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                <span><span className="font-medium text-gray-700">UXPH</span> | August 2025 – September 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                <span><span className="font-medium text-gray-700">UX Davao</span> | January 2024 – Present</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                <span><span className="font-medium text-gray-700">Devcon Davao</span> | May 2024 – June 2024</span>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">Tech Stack</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Frontend</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {["Vue.js", "React.js", "Next.js", "Flutter"].map((tech) => (
                  <div key={tech} className="px-4 py-3 bg-white border border-gray-200 rounded-lg text-center text-sm font-medium text-gray-700">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Backend</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {["Supabase", "Firebase"].map((tech) => (
                  <div key={tech} className="px-4 py-3 bg-white border border-gray-200 rounded-lg text-center text-sm font-medium text-gray-700">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Languages</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {["TypeScript", "JavaScript"].map((tech) => (
                  <div key={tech} className="px-4 py-3 bg-white border border-gray-200 rounded-lg text-center text-sm font-medium text-gray-700">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">Certifications</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                <span><span className="font-medium text-gray-700">Introduction to Project Management</span> | Issued by IBM (via Coursera)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                <span><span className="font-medium text-gray-700">CCNA: Introduction to Networks</span> | Issued by Cisco</span>
              </div>
            </div>
          </div>
        </section>

        {/* The Grind */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">The Grind</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Whether I'm coding a new feature, running plays on the football field, or strategizing in a competitive game, 
            I approach everything with the same mindset: <span className="font-semibold text-gray-900">focus on the process, trust the grind, and get better every day.</span>
          </p>
        </section>
      </div>
    </div>
  );
}
