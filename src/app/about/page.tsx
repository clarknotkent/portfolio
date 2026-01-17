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
              I'm a <span className="font-semibold text-gray-900">Developer. Athlete. Gamer.</span> — three passions that define my daily grind.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Currently pursuing my IT degree and deep in the trenches of a <span className="font-semibold text-gray-900">486-hour OJT program</span> (Target: April 2026). 
              I'm building my foundation in full-stack development, sharpening my skills in Vue.js, Node.js, Express, and Supabase through real-world projects.
            </p>
          </div>
        </section>

        {/* Education & OJT */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">Education & Training</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">IT Student</h3>
              <p className="text-gray-600">Building foundation in full-stack development</p>
            </div>
            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gray-500"></span>
                </span>
                <span className="text-sm font-semibold text-gray-700">486-Hour OJT Program (In Progress)</span>
              </div>
              <p className="text-sm text-gray-500 mt-2 ml-6">Target Completion: April 2026</p>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {["Vue.js", "Node.js", "Express", "Supabase", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"].map((tech) => (
              <div key={tech} className="px-4 py-3 bg-white border border-gray-200 rounded-lg text-center text-sm font-medium text-gray-700">
                {tech}
              </div>
            ))}
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
