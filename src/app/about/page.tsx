const techStack = {
  frontend: [
    { name: "Vue.js", icon: "M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36zm-12.8 70.4L128 182.4 64 70.4h31.68L128 140.8 160.32 70.4H192z", viewBox: "0 0 256 221", color: "#42b883" },
    { name: "React.js", icon: "M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z", viewBox: "0 0 24 24", color: "#61dafb" },
    { name: "Next.js", icon: "M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z", viewBox: "0 0 24 24", color: "#FFFFFF" },
    { name: "Flutter", icon: "M14.314 0L2.3 12 6 15.7 21.684.012h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z", viewBox: "0 0 24 24", color: "#02569B" }
  ],
  backend: [
    { name: "Supabase", icon: "M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L2.203 12.424l-.401.562a1.04 1.04 0 0 0 .836 1.659H12v8.959a.396.396 0 0 0 .716.233l9.081-12.261.401-.562a1.04 1.04 0 0 0-.836-1.66z", viewBox: "0 0 24 24", color: "#3ECF8E" },
    { name: "Firebase", icon: "M3.89 15.672L6.255.461A.542.542 0 0 1 7.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 0 0-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 0 0 1.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 0 0-.96 0L3.53 17.984z", viewBox: "0 0 24 24", color: "#FFCA28" }
  ],
  languages: [
    { name: "TypeScript", icon: "M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z", viewBox: "0 0 24 24", color: "#3178C6" },
    { name: "JavaScript", icon: "M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z", viewBox: "0 0 24 24", color: "#F7DF1E" }
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
                    <svg className="w-8 h-8" viewBox={tech.viewBox} xmlns="http://www.w3.org/2000/svg">
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
                    <svg className="w-8 h-8" viewBox={tech.viewBox} xmlns="http://www.w3.org/2000/svg">
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
                    <svg className="w-8 h-8" viewBox={tech.viewBox} xmlns="http://www.w3.org/2000/svg">
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
