const techStack = {
  frontend: [
    { name: "Vue.js", icon: "M356.9,64.3H280.1l-76.9,132.5L126.4,64.3H0l203.1,362.8L406.3,64.3H356.9z M203.1,154.7l50.7,89.7h-101.4L203.1,154.7z", color: "#42b883" },
    { name: "React.js", icon: "M666.3,296.5c0-32.5-40.7-63.3-103.1-82.4c14.4-63.6,8-114.2-20.2-130.4c-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6,0,8.3,0.9,11.4,2.6c13.6,7.8,19.5,37.5,14.9,75.7c-1.1,9.4-2.9,19.3-5.1,29.4c-19.6-4.8-41-8.5-63.5-10.9c-13.5-18.5-27.5-35.3-41.6-50c32.6-30.3,63.2-46.9,84-46.9V22.3c-27.5,0-63.5,19.6-99.9,53.6c-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7,0,51.4,16.5,84,46.6c-14,14.7-28,31.4-41.3,49.9c-22.6,2.4-44,6.1-63.6,11c-2.3-10-4-19.7-5.2-29c-4.7-38.2,1.1-67.9,14.6-75.8c3-1.8,6.9-2.6,11.5-2.6V22.3c-8.4,0-16,1.8-22.6,5.6c-28.1,16.2-34.4,66.7-19.9,130.1c-62.2,19.2-102.7,49.9-102.7,82.3c0,32.5,40.7,63.3,103.1,82.4c-14.4,63.6-8,114.2,20.2,130.4c6.5,3.8,14.1,5.6,22.5,5.6c27.5,0,63.5-19.6,99.9-53.6c36.4,33.8,72.4,53.2,99.9,53.2c8.4,0,16-1.8,22.6-5.6c28.1-16.2,34.4-66.7,19.9-130.1C625.8,359.7,666.3,328.9,666.3,296.5z M536.1,229.8c-3.7,12.9-8.3,26.2-13.5,39.5c-4.1-8-8.4-16-13.1-24c-4.6-8-9.5-15.8-14.4-23.4C509.3,224,523,226.6,536.1,229.8z M490.3,336.3c-7.8,13.5-15.8,26.3-24.1,38.2c-14.9,1.3-30,2-45.2,2c-15.1,0-30.2-0.7-45-1.9c-8.3-11.9-16.4-24.6-24.2-38c-7.6-13.1-14.5-26.4-20.8-39.8c6.2-13.4,13.2-26.8,20.7-39.9c7.8-13.5,15.8-26.3,24.1-38.2c14.9-1.3,30-2,45.2-2c15.1,0,30.2,0.7,45,1.9c8.3,11.9,16.4,24.6,24.2,38c7.6,13.1,14.5,26.4,20.8,39.8C504.7,309.8,497.8,323.2,490.3,336.3z M522.6,323.3c5.4,13.4,10,26.8,13.8,39.8c-13.1,3.2-26.9,5.9-41.2,8c4.9-7.7,9.8-15.6,14.4-23.7C514.2,339.4,518.5,331.3,522.6,323.3z M421.2,430c-9.3-9.6-18.6-20.3-27.8-32c9,0.4,18.2,0.7,27.5,0.7c9.4,0,18.7-0.2,27.8-0.7C439.7,409.7,430.4,420.4,421.2,430z M346.8,371.1c-14.2-2.1-27.9-4.7-41-7.9c3.7-12.9,8.3-26.2,13.5-39.5c4.1,8,8.4,16,13.1,24C337.1,355.7,341.9,363.5,346.8,371.1z M420.7,163c9.3,9.6,18.6,20.3,27.8,32c-9-0.4-18.2-0.7-27.5-0.7c-9.4,0-18.7,0.2-27.8,0.7C402.2,183.3,411.5,172.6,420.7,163z M346.7,221.9c-4.9,7.7-9.8,15.6-14.4,23.7c-4.6,8-8.9,16-13,24c-5.4-13.4-10-26.8-13.8-39.8C318.6,226.7,332.4,224,346.7,221.9z M256.2,347.1c-35.4-15.1-58.3-34.9-58.3-50.6c0-15.7,22.9-35.6,58.3-50.6c8.6-3.7,18-7,27.7-10.1c5.7,19.6,13.2,40,22.5,60.9c-9.2,20.8-16.6,41.1-22.2,60.6C274.3,354.2,264.9,350.8,256.2,347.1z M310,490c-13.6-7.8-19.5-37.5-14.9-75.7c1.1-9.4,2.9-19.3,5.1-29.4c19.6,4.8,41,8.5,63.5,10.9c13.5,18.5,27.5,35.3,41.6,50c-32.6,30.3-63.2,46.9-84,46.9C316.8,492.6,313,491.7,310,490z M547.2,413.8c4.7,38.2-1.1,67.9-14.6,75.8c-3,1.8-6.9,2.6-11.5,2.6c-20.7,0-51.4-16.5-84-46.6c14-14.7,28-31.4,41.3-49.9c22.6-2.4,44-6.1,63.6-11C544.3,394.8,546.1,404.5,547.2,413.8z M585.7,347.1c-8.6,3.7-18,7-27.7,10.1c-5.7-19.6-13.2-40-22.5-60.9c9.2-20.8,16.6-41.1,22.2-60.6c9.9,3.1,19.3,6.5,28.1,10.2c35.4,15.1,58.3,34.9,58.3,50.6C644,312.2,621.1,332.1,585.7,347.1z", color: "#61dafb" },
    { name: "Next.js", icon: "M386.4,35.1L186.7,293.6v184.1h36.9V330.6l172-237.7c5.5-7.5,16.2-9.1,23.8-3.6c7.5,5.5,9.1,16.2,3.6,23.8L269.2,317.2l-61.2,84v139.5h147.6c55.3,0,100.2-44.9,100.2-100.2V88.4C455.7,56.8,422.8,24.8,386.4,35.1z M343,403.4h-47.2L343,330.2V403.4z M398.5,477.7h-78.9l87.9-120.8h14.5c7,0,12.7,5.7,12.7,12.7v87.9C434.6,469.4,410.4,477.7,398.5,477.7z", color: "#FFFFFF" },
    { name: "Flutter", icon: "M318.4,3.8L59.1,263.1l75.1,75.1l234.2-234.2L318.4,3.8z M318.4,178.7L134.2,362.9l75.1,75.1l109.1-109.1l109.1,109.1l75.1-75.1L318.4,178.7z", color: "#02569B" }
  ],
  backend: [
    { name: "Supabase", icon: "M 125.87891 33.933594 C 122.91308 33.933594 120.18294 35.578063 118.70703 38.197266 L 30.126953 187.61133 C 26.738953 193.58133 31.029969 200.93359 37.808594 200.93359 L 106.50977 200.93359 C 109.85277 200.93359 112.90384 199.01144 114.50684 196.05664 L 203.08984 46.642578 C 206.47884 40.672578 202.18578 33.933594 195.40918 33.933594 L 125.87891 33.933594 z M 109.34375 275.06641 C 112.68675 275.06641 115.73586 276.98661 117.33886 279.93961 L 205.91992 429.35352 C 209.30892 435.32352 205.01977 442.06641 198.24219 442.06641 L 129.54102 442.06641 C 126.19802 442.06641 123.14891 440.14425 121.54491 437.19125 L 32.960938 287.77734 C 29.572938 281.80734 33.864 274.45703 40.642578 274.45703 L 109.34375 275.06641 z", color: "#3ECF8E" },
    { name: "Firebase", icon: "M5.8,312.5L42.3,3.8l0.2-1.7l1.3,1.1l42.3,39.7L5.8,312.5z M118.9,118.9l-28.1-53.3l0.7-1.5l1.5-0.5l42.3,7.9L118.9,118.9z M424.5,369.5L390,122.9c-1.3-9.5-11.9-14.3-19.8-9.1l-345.7,222L195,494.5c10.7,7.1,24.7,7.1,35.3,0l194.2-125z", color: "#FFCA28" }
  ],
  languages: [
    { name: "TypeScript", icon: "M0,256L0,256L0,256L256,256v256H0V256z M236.7,195.6c3.1,4.6,5.9,10.4,6.1,18.1l28.6,0.1c-0.4-13.7-5.5-25.1-13.2-34.1c-14.5-16.9-37.5-24.1-68.7-21.7c-20.1,1.6-37.5,8-50.9,19.1c-13.7,11.3-20.5,26.9-20.5,46.5c0,14.9,3.6,27.2,10.7,36.9c7.1,9.7,18.5,17.2,34.3,22.5c15.8,5.3,27.3,9.8,34.5,13.5c7.2,3.7,10.8,9.3,10.8,16.8c0,7.6-3.1,13.7-9.4,18.3c-6.2,4.6-14.3,7-24.3,7.2c-16.9,0.3-29.7-4.3-38.5-13.9c-4.4-4.8-7.5-11.5-9.4-20.1l-29.1,0.1c0.6,13.9,4.7,25.5,12.3,34.6c14.6,17.6,37.1,26.6,67.5,27c19.9,0.2,37.3-4.1,52.1-12.9c14.9-8.8,22.3-22.9,22.3-42.3c0-15.5-3.9-28.1-11.8-37.9c-7.9-9.8-20.3-17.8-37.2-24c-16.9-6.2-28.5-11.2-34.8-15c-6.3-3.8-9.4-9.1-9.4-15.9c0-6.8,2.9-12.5,8.7-17c5.8-4.5,13.6-6.9,23.4-7.1C218,188.8,231.3,192,236.7,195.6z M303.5,120h29.4v150h88.1v24.7H303.5V120z", color: "#3178C6" },
    { name: "JavaScript", icon: "M0,0v512h512V0H0z M266.1,396.1c0,44.1-25.9,64.3-63.6,64.3c-34.1,0-53.8-17.6-63.9-38.9l34.7-21c6.7,11.9,12.8,21.9,27.4,21.9c14,0,22.9-5.5,22.9-26.8V241.2h42.5V396.1z M361.7,460.4c-39.6,0-65.2-18.8-77.7-43.5l34.7-20c9.1,14.9,21,25.9,42.1,25.9c17.7,0,29-8.9,29-21.1c0-14.7-11.6-19.9-31.1-28.4l-10.7-4.6c-30.8-13.1-51.3-29.6-51.3-64.3c0-32,24.4-56.4,62.5-56.4c27.1,0,46.6,9.4,60.6,34.1l-33.2,21.3c-7.3-13.1-15.2-18.3-27.4-18.3c-12.5,0-20.4,7.9-20.4,18.3c0,12.8,7.9,18,26.2,25.9l10.7,4.6c36.3,15.6,56.7,31.4,56.7,67.1C431.3,437.6,404.2,460.4,361.7,460.4z", color: "#F7DF1E" }
  ]
};

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">About Me</h1>
          <p className="text-xl text-[#94A3B8] italic border-l-4 border-[#00D9FF] pl-4">
            "I'm just a simple man, trying to make my way in the universe."
          </p>
        </div>

        {/* Bio Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Who I Am</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-lg text-[#94A3B8] leading-relaxed">
              I'm Kent, a passionate learner aspiring to make an impact as a Software Engineer and Project Manager. 
              I love tackling complex problems, from building full-stack applications to leading development teams. 
              My competitive spirit keeps me busy—whether I'm playing video games or out on the field playing Flag Football.
            </p>
          </div>
        </section>

        {/* Education */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Education</h2>
          <div className="bg-[#1E293B] border border-[#334155] rounded-lg p-6 space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-white">Ateneo de Davao University</h3>
              <p className="text-[#94A3B8]">Bachelor of Science in Information Technology</p>
              <p className="text-sm text-[#94A3B8]">2022 – 2026</p>
              <p className="text-sm text-[#94A3B8] mt-1">QPI: 3.xx (Pending calculation)</p>
            </div>
          </div>
        </section>

        {/* Organizations */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Organizations</h2>
          <div className="space-y-4">
            {/* ACCESS */}
            <div className="bg-[#1E293B] border border-[#334155] rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                ACCESS (Ateneo Circle of Computer Enthusiasts for Study and Success)
              </h3>
              <div className="space-y-2 text-sm text-[#94A3B8]">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#00D9FF] rounded-full"></div>
                  <span><span className="font-medium text-white">Executive Vice President</span> | May 2025 – Present</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#00D9FF] rounded-full"></div>
                  <span><span className="font-medium text-white">President</span> | January 2024 – May 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#00D9FF] rounded-full"></div>
                  <span><span className="font-medium text-white">Internal Vice President</span> | April 2023 – December 2023</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#00D9FF] rounded-full"></div>
                  <span><span className="font-medium text-white">Member</span> | August 2022 – Present</span>
                </div>
              </div>
            </div>

            {/* Davao Legionnaires */}
            <div className="bg-[#1E293B] border border-[#334155] rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">
                Davao Legionnaires Flag Football Team
              </h3>
              <p className="text-sm text-[#94A3B8]">
                <span className="font-medium text-white">Active Player</span> | 2022 – Present
              </p>
            </div>

            {/* DICE */}
            <div className="bg-[#1E293B] border border-[#334155] rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">
                DICE (Davao Interschool Computer Enthusiasts)
              </h3>
              <p className="text-sm text-[#94A3B8]">
                <span className="font-medium text-white">Community Member</span> | September 2023 – Present
              </p>
            </div>
          </div>
        </section>

        {/* Volunteering */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Volunteering (Photographer)</h2>
          <div className="bg-[#1E293B] border border-[#334155] rounded-lg p-6">
            <div className="space-y-3 text-sm text-[#94A3B8]">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#00D9FF] rounded-full"></div>
                <span><span className="font-medium text-white">UXPH</span> | August 2025 – September 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#00D9FF] rounded-full"></div>
                <span><span className="font-medium text-white">UX Davao</span> | January 2024 – Present</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#00D9FF] rounded-full"></div>
                <span><span className="font-medium text-white">Devcon Davao</span> | May 2024 – June 2024</span>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Tech Stack</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-white mb-3">Frontend</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {techStack.frontend.map((tech) => (
                  <div key={tech.name} className="px-4 py-3 bg-[#1E293B] border border-[#334155] rounded-lg text-center text-sm font-medium text-white flex flex-col items-center gap-2">
                    <svg className="w-8 h-8" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                      <path d={tech.icon} fill={tech.color} />
                    </svg>
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-3">Backend</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {techStack.backend.map((tech) => (
                  <div key={tech.name} className="px-4 py-3 bg-[#1E293B] border border-[#334155] rounded-lg text-center text-sm font-medium text-white flex flex-col items-center gap-2">
                    <svg className="w-8 h-8" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                      <path d={tech.icon} fill={tech.color} />
                    </svg>
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-3">Languages</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {techStack.languages.map((tech) => (
                  <div key={tech.name} className="px-4 py-3 bg-[#1E293B] border border-[#334155] rounded-lg text-center text-sm font-medium text-white flex flex-col items-center gap-2">
                    <svg className="w-8 h-8" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                      <path d={tech.icon} fill={tech.color} />
                    </svg>
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Certifications</h2>
          <div className="bg-[#1E293B] border border-[#334155] rounded-lg p-6">
            <div className="space-y-3 text-sm text-[#94A3B8]">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#00D9FF] rounded-full"></div>
                <span><span className="font-medium text-white">Introduction to Project Management</span> | Issued by IBM (via Coursera)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#00D9FF] rounded-full"></div>
                <span><span className="font-medium text-white">CCNA: Introduction to Networks</span> | Issued by Cisco</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
