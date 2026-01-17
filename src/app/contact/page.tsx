export default function ContactPage() {
  const socialLinks = [
    {
      platform: "Email",
      handle: "your.email@example.com",
      url: "mailto:your.email@example.com",
      description: "Best way to reach me for professional inquiries",
    },
    {
      platform: "LinkedIn",
      handle: "linkedin.com/in/yourprofile",
      url: "https://linkedin.com/in/yourprofile",
      description: "Connect with me professionally",
    },
    {
      platform: "GitHub",
      handle: "github.com/clarknotkent",
      url: "https://github.com/clarknotkent",
      description: "Check out my code and projects",
    },
    {
      platform: "Twitter / X",
      handle: "@yourhandle",
      url: "https://twitter.com/yourhandle",
      description: "Follow for tech updates and thoughts",
    },
    {
      platform: "Steam",
      handle: "yourgamertag",
      url: "https://steamcommunity.com/id/yourprofile",
      description: "Add me for some competitive gaming",
    },
    {
      platform: "Instagram",
      handle: "@yourhandle",
      url: "https://instagram.com/yourhandle",
      description: "Behind the scenes and off-keyboard moments",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Get In Touch</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Whether you want to discuss a project, collaborate, or just connect — I'm always open to new opportunities and conversations.
          </p>
        </div>

        {/* Social Links Grid */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">Find Me Online</h2>
          <div className="grid gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all group"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-1 flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-black transition-colors">
                      {social.platform}
                    </h3>
                    <p className="text-sm text-gray-500 font-mono">{social.handle}</p>
                    <p className="text-sm text-gray-600 pt-2">{social.description}</p>
                  </div>
                  <svg
                    className="h-5 w-5 text-gray-400 group-hover:text-gray-900 transition-colors"
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
        </section>

        {/* Quick Response Note */}
        <section className="bg-gray-50 border border-gray-200 rounded-lg p-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Response Time</h3>
          <p className="text-gray-600 leading-relaxed">
            I typically respond to emails and LinkedIn messages within <span className="font-semibold text-gray-900">24-48 hours</span>. 
            For urgent matters, feel free to mention it in your subject line.
          </p>
        </section>

        {/* Note about updating */}
        <div className="text-sm text-gray-400 italic border-l-4 border-gray-200 pl-4">
          <p>💡 Remember to update the placeholder handles above with your actual social media links.</p>
        </div>
      </div>
    </div>
  );
}
