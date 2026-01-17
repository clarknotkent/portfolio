export default function OffKeyboardPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Off-Keyboard</h1>
          <p className="text-xl text-gray-600">
            Life beyond the code — where I recharge, compete, and level up in different ways.
          </p>
        </div>

        {/* Athlete Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-1 w-12 bg-gray-300"></div>
            <h2 className="text-2xl font-semibold text-gray-900">Athlete</h2>
          </div>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Football</h3>
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
        </section>

        {/* Gamer Section */}
        <section className="space-y-6">
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
        </section>

        {/* Philosophy */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">The Philosophy</h2>
          <div className="border-l-4 border-gray-300 pl-6 py-2">
            <p className="text-lg text-gray-600 italic leading-relaxed">
              "Balance isn't about splitting time equally — it's about bringing full focus to whatever you're doing in the moment. 
              Whether it's debugging code, running a play, or clutching a round, I commit fully and learn from every experience."
            </p>
          </div>
        </section>

        {/* Placeholder for Images/Media */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="aspect-video bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-400 text-sm">Sports Highlight Placeholder</span>
            </div>
            <div className="aspect-video bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-400 text-sm">Gaming Setup Placeholder</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
