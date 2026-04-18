"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { withBasePath } from "@/lib/utils";

type SipTab = "AdDU Journey Map" | "Conversion Story" | "SIP Passion Plan";

export default function SipPage() {
  const [activeTab, setActiveTab] = useState<SipTab>("AdDU Journey Map");

  const tabs: SipTab[] = ["AdDU Journey Map", "Conversion Story", "SIP Passion Plan"];

  return (
    <div id="sip-top" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white">Seniors Integration Program</h1>
          <p className="text-xl text-[#94A3B8]">
            A dedicated space for my SIP journey — reflections, milestones, and the final passion plan.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="border-b border-[#334155]"
        >
          <div className="flex flex-wrap gap-6 md:gap-8">
            {tabs.map((tab) => (
              <motion.button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                whileTap={{ scale: 0.96 }}
                className={`pb-4 px-1 border-b-2 transition-colors ${
                  activeTab === tab
                    ? "border-[#00D9FF] text-[#00D9FF] font-semibold"
                    : "border-transparent text-[#94A3B8] hover:text-[#00D9FF] hover:border-[#00D9FF]/50"
                }`}
              >
                {tab}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* AdDU Journey Map */}
            {activeTab === "AdDU Journey Map" && (
              <div className="max-w-5xl space-y-12">
                <motion.header
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45 }}
                  className="pb-8 border-b border-[#334155] space-y-5"
                >
                  <p className="text-sm uppercase tracking-[0.18em] text-[#00D9FF] font-semibold">
                    Reflection Output
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">AdDU Journey Map</h2>
                  <p className="text-base md:text-lg text-[#94A3B8] leading-8 text-left max-w-4xl">
                    Four years at the Ateneo de Davao University — from first steps as a freshman navigating a new city,
                    to leading a student club, to putting Ateneo CS back on the Davao tech map, and finally crossing the
                    graduation stage in 2026.
                  </p>
                </motion.header>

                <ol className="relative space-y-10 md:space-y-12 md:pl-10 md:before:absolute md:before:left-2.5 md:before:top-2 md:before:bottom-2 md:before:w-px md:before:bg-[#334155]">
                  {[
                    {
                      year: "2022",
                      title: "First Steps at the University (AFYOP)",
                      body: "The transition from online to face-to-face classes was already big enough, but moving to a new city and living alone for the first time made it even bigger. It was a culture shock, but also a welcome challenge. That year was less about academics and more about learning how to be independent.",
                      image: "/images/journey-map/image.jpg",
                    },
                    {
                      year: "2023",
                      title: "Going All Out at Student Clubs",
                      body: "This was the year I fully committed to ACCESS — the Ateneo Circle of Computer Enthusiasts for Study and Success, the sole academic club of the CS Cluster. I took on a leadership role and led events and initiatives for my fellow students, a role I would carry all the way through to graduation in 2026.",
                      image: "/images/journey-map/image2.jpg",
                    },
                    {
                      year: "2024",
                      title: "Bringing Back Ateneo CS within the Davao Tech Community",
                      body: "Ateneo had gone quiet in the Davao tech scene for a while. I helped change that by organizing tech talks and workshops, bringing in professionals from local tech companies to engage with my fellow students. It was about putting Ateneo CS back on the map.",
                      image: "/images/journey-map/image3.jpg",
                    },
                    {
                      year: "2025",
                      title: "Thesis and the Service Learning Program",
                      body: "Under the Arrupe Office of Social Formation, I developed an immunization management system for Barangay Tibungco Health Center as part of the national immunization program. The system used progressive web application technology, QR codes, and SMS notifications — a capstone that combined my technical skills with real community impact.",
                      image: "/images/journey-map/image4.jpg",
                    },
                    {
                      year: "2026",
                      title: "Graduation Teaser",
                      body: "Four years of adjusting, leading, building, and serving. Graduating on time was the goal, and I made it. Now it's time to rest — and I've earned it.",
                      image: "/images/journey-map/image5.jpg",
                    },
                  ].map((entry, index) => (
                    <motion.li
                      key={entry.year}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{ duration: 0.45, delay: index * 0.05 }}
                      className="relative scroll-mt-24"
                    >
                      <span
                        aria-hidden="true"
                        className="hidden md:block absolute left-0 top-2 -translate-x-[calc(100%+1.5rem)] w-5 h-5 rounded-full bg-[#0F172A] border-2 border-[#00D9FF] shadow-[0_0_0_4px_rgba(0,217,255,0.12)]"
                      />
                      <div className="bg-[#1E293B] border border-[#334155] rounded-lg overflow-hidden hover:border-[#00D9FF]/50 transition-colors grid grid-cols-1 sm:grid-cols-[minmax(0,240px)_1fr] gap-0">
                        <Link
                          href={withBasePath(entry.image)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group block"
                        >
                          <div className="relative w-full aspect-square overflow-hidden bg-[#0F172A] sm:border-r border-b sm:border-b-0 border-[#334155]">
                            <Image
                              src={withBasePath(entry.image)}
                              alt={`${entry.year} — ${entry.title}`}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                              sizes="(max-width: 640px) 100vw, 240px"
                            />
                          </div>
                        </Link>
                        <div className="p-6 md:p-7">
                          <p className="text-sm uppercase tracking-[0.18em] text-[#00D9FF] font-semibold">
                            {entry.year}
                          </p>
                          <h3 className="text-xl md:text-2xl font-semibold text-white mt-2">
                            {entry.title}
                          </h3>
                          <p className="text-base md:text-lg text-[#94A3B8] leading-8 text-left mt-4">
                            {entry.body}
                          </p>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ol>

                <div className="pt-2">
                  <Link
                    href="#sip-top"
                    className="inline-flex items-center gap-1 text-base text-[#00D9FF] hover:text-[#6FC3DF] transition-colors"
                  >
                    Back to top <span aria-hidden="true">↑</span>
                  </Link>
                </div>
              </div>
            )}

            {/* Conversion Story */}
            {activeTab === "Conversion Story" && (
              <div className="max-w-5xl space-y-12">
                <motion.header
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45 }}
                  className="pb-8 border-b border-[#334155] space-y-5"
                >
                  <p className="text-sm uppercase tracking-[0.18em] text-[#00D9FF] font-semibold">
                    Personal Narrative
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">My Conversion Story</h2>
                  <p className="text-base md:text-lg text-[#94A3B8] leading-8 text-left max-w-4xl">
                    From burnout and doubt to finding purpose through the work that mattered — a slow, honest account of
                    what four years at Ateneo de Davao quietly rebuilt in me.
                  </p>
                </motion.header>

                <article className="max-w-5xl space-y-16">
                  {[
                    {
                      heading: "Arrival",
                      image: "/images/photography/2.JPG",
                      paragraphs: [
                        "I came to Ateneo de Davao in 2022 fresh from online classes, moving to a new city, living alone for the first time. The adjustment was hard, but I welcomed it. I thought the challenge was just about surviving the transition. I did not know yet that the harder challenge would come from the inside.",
                      ],
                    },
                    {
                      heading: "The Lowest Point",
                      image: "/images/photography/7.JPG",
                      paragraphs: [
                        "By my second year, I was running on empty. I was burned out, going through the motions, asking myself what the point of all this was. I had no sense of urgency. My ADHD made it hard to function day to day, and I was doing the bare minimum just to get by — half-finished projects, skipped classes, late submissions. I nearly got debarred. On paper, I was still passing. But inside, I was not really there. I was on autopilot, and I knew it.",
                        "What I struggled with most was the doubt. I did not see a future for myself in this field. I did not see myself succeeding in the classroom, let alone in the industry. There were moments I genuinely wanted to leave my program. I questioned whether I even belonged here.",
                      ],
                    },
                    {
                      heading: "The Shift",
                      image: "/images/photography/6.JPG",
                      paragraphs: [
                        "The shift did not happen all at once. It started somewhere in my third year when my classes started asking more of me in a different way. In Software Engineering, I had to work with a real client — understand their actual problem, and build something that would genuinely help them. It was the first time I felt like what I was making actually mattered to someone. That changed something in me.",
                        "Then Sir Jonathan told me something I needed to hear — that I had potential, but I was only doing what came easy to me. He challenged me to stop doing things halfway and to actually go after things, even the uncomfortable ones. That stayed with me.",
                      ],
                    },
                    {
                      heading: "The Work That Mattered",
                      image: "/images/photography/10.JPG",
                      paragraphs: [
                        "It all came together when I worked with Sir Gab Lucky on my thesis under the Service Learning Program. I built an immunization management system for Barangay Tibungco Health Center — a real healthcare system, for a real community need. It was my capstone, my internship, and my first real taste of healthcare technology all at once. For the first time in a long time, I was not just finishing something. I was building something I was proud of.",
                      ],
                    },
                    {
                      heading: "A Slow Accumulation",
                      image: "/images/photography/11.JPG",
                      paragraphs: [
                        "St. Ignatius did not change overnight either. It was a slow, difficult interior process of letting go of who he thought he was supposed to be, and discovering who he was actually becoming. I think that is what happened to me too. I did not have a single dramatic turning point. I had a slow accumulation of moments that pushed me to stop coasting and start choosing.",
                      ],
                    },
                    {
                      heading: "Who I Am Now",
                      image: "/images/photography/1.JPG",
                      paragraphs: [
                        "I am not the same person who arrived in 2022. I am more grounded now. I manage my mental health better — I see my psychiatrist regularly, and that matters. I know myself more. I am more patient with people, more honest with myself, and more capable than I used to give myself credit for.",
                        "My thesis is the thing I leave behind at this university. But more than that, it is proof to myself that I can build something meaningful — something that serves people who need it. That is the person I want to carry into my career. Not just a developer, but someone who builds things that matter.",
                      ],
                    },
                  ].map((section, index) => {
                    const imageRight = index % 2 === 1;
                    return (
                      <motion.section
                        key={section.heading}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.45, delay: index * 0.04 }}
                        className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] gap-8 lg:gap-12 items-center scroll-mt-24"
                      >
                        <figure
                          className={`w-full max-w-[380px] mx-auto lg:mx-0 ${
                            imageRight ? "lg:order-2 lg:justify-self-end" : "lg:order-1 lg:justify-self-start"
                          }`}
                        >
                          <Link
                            href={withBasePath(section.image)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block"
                          >
                            <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden border border-[#334155] bg-[#1E293B]">
                              <Image
                                src={withBasePath(section.image)}
                                alt={`${section.heading} reflection image`}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                sizes="(max-width: 1024px) 100vw, 380px"
                              />
                            </div>
                          </Link>
                        </figure>

                        <div
                          className={`space-y-5 ${
                            imageRight ? "lg:order-1" : "lg:order-2"
                          }`}
                        >
                          <h3 className="text-xl md:text-2xl font-semibold text-white">
                            {section.heading}
                          </h3>
                          {section.paragraphs.map((paragraph, idx) => (
                            <p
                              key={idx}
                              className="text-base md:text-lg text-[#94A3B8] leading-8 text-left"
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </motion.section>
                    );
                  })}

                  <motion.blockquote
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5 }}
                    className="border-l-4 border-[#00D9FF] pl-6 py-2"
                  >
                    <p className="text-xl md:text-2xl text-white font-medium leading-9 italic">
                      I came here lost and burned out. I leave knowing what I am capable of when I actually try.
                    </p>
                  </motion.blockquote>

                  <div className="pt-2">
                    <Link
                      href="#sip-top"
                      className="inline-flex items-center gap-1 text-base text-[#00D9FF] hover:text-[#6FC3DF] transition-colors"
                    >
                      Back to top <span aria-hidden="true">↑</span>
                    </Link>
                  </div>
                </article>
              </div>
            )}

            {/* SIP Passion Plan */}
            {activeTab === "SIP Passion Plan" && (
              <div className="max-w-5xl space-y-12">
                <motion.header
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45 }}
                  className="pb-8 border-b border-[#334155] space-y-5"
                >
                  <p className="text-sm uppercase tracking-[0.18em] text-[#00D9FF] font-semibold">
                    Final Summative Assessment
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">SIP Passion Plan</h2>
                  <p className="text-base md:text-lg text-[#94A3B8] leading-8 text-left max-w-4xl">
                    My major output for the Seniors Integration Program — a personal mission statement, a prayer for my future
                    self, and a 10–20 year passion plan charting the life I intend to build.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <Link
                      href="#sip-mission"
                      className="text-sm px-4 py-2.5 bg-[#1E293B] border border-[#334155] rounded text-[#94A3B8] hover:text-white hover:border-[#00D9FF] transition-colors"
                    >
                      Personal Mission Statement
                    </Link>
                    <Link
                      href="#sip-prayer"
                      className="text-sm px-4 py-2.5 bg-[#1E293B] border border-[#334155] rounded text-[#94A3B8] hover:text-white hover:border-[#00D9FF] transition-colors"
                    >
                      Prayer for My Future Self
                    </Link>
                    <Link
                      href="#sip-plan"
                      className="text-sm px-4 py-2.5 bg-[#1E293B] border border-[#334155] rounded text-[#94A3B8] hover:text-white hover:border-[#00D9FF] transition-colors"
                    >
                      10–20 Year Passion Plan
                    </Link>
                  </div>
                </motion.header>

                <article className="space-y-16">
                  <motion.section
                    id="sip-mission"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.45 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start scroll-mt-24"
                  >
                    <figure className="space-y-3 w-full max-w-[420px]">
                      <Link
                        href={withBasePath("/images/photography/1.JPG")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block"
                      >
                        <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden border border-[#334155] bg-[#1E293B]">
                          <Image
                            src={withBasePath("/images/photography/1.JPG")}
                            alt="SIP reflection visual 1"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 1024px) 100vw, 420px"
                          />
                        </div>
                      </Link>
                      <figcaption className="text-sm text-[#94A3B8]">
                        Reflection Image 1. <Link href={withBasePath("/images/photography/1.JPG")} target="_blank" rel="noopener noreferrer" className="text-[#00D9FF] hover:text-[#6FC3DF] transition-colors">Open full image</Link>
                      </figcaption>
                    </figure>

                    <div className="space-y-5">
                      <h3 className="text-2xl md:text-3xl font-semibold text-white">I. Personal Mission Statement</h3>
                      <p className="text-base md:text-lg text-[#94A3B8] leading-8 text-left">
                        I am someone who builds things that matter. I came into this university unsure of myself, burned out,
                        and running on autopilot — and I leave it knowing what I am capable of when I actually show up. That
                        shift is not something I take lightly.
                      </p>
                      <p className="text-base md:text-lg text-[#94A3B8] leading-8 text-left">
                        I am becoming a person who leads with both technical skill and genuine care for the people I serve.
                        What drives me is the desire to create solutions that have real impact — not just impressive on paper,
                        but useful in the hands of someone who needs it. My thesis taught me that. Building a healthcare system
                        for a community that actually needed it made me realize that the best work I can do is work that serves
                        someone beyond myself.
                      </p>
                      <p className="text-base md:text-lg text-[#94A3B8] leading-8 text-left">
                        The values I want to live by are simple: do things with integrity, finish what I start, take care of my
                        mind and body, and never stop growing. I want to be the kind of professional who is trusted not just for
                        what he knows, but for how he shows up. I want to build things in this country, for this country —
                        without having to leave to prove my worth.
                      </p>
                      <p className="text-base md:text-lg text-[#94A3B8] leading-8 text-left">
                        The impact I hope to make is a healthier Philippines — one well-designed system at a time.
                      </p>
                    </div>
                  </motion.section>

                  <motion.section
                    id="sip-prayer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.45 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start scroll-mt-24"
                  >
                    <div className="space-y-5">
                      <h3 className="text-2xl md:text-3xl font-semibold text-white">II. Prayer for My Future Self</h3>
                      <p className="text-base md:text-lg text-[#94A3B8] leading-8 text-left">
                        I do not pray in the traditional sense. But I believe there is something greater than me — some force
                        or presence that moves through the world and through the people in it. This is me speaking to that.
                      </p>
                      <p className="text-base md:text-lg text-[#94A3B8] leading-8 text-left">
                        I am grateful for the years that were hard. For the burnout that forced me to slow down and figure out
                        what actually mattered. For the professors who saw something in me before I saw it in myself. For the
                        project that gave me a reason to try harder.
                      </p>
                      <p className="text-base md:text-lg text-[#94A3B8] leading-8 text-left">
                        What I ask for is not easy success. I ask for clarity — to keep knowing the difference between what I
                        am doing for the right reasons and what I am doing just to get by. I ask for the discipline to follow
                        through on the things I start, and the humility to keep learning even when I think I already know
                        enough.
                      </p>
                      <p className="text-base md:text-lg text-[#94A3B8] leading-8 text-left">
                        I ask to stay healthy — in body and in mind. To keep showing up to my psychiatrist. To keep playing.
                        To never let the grind take away the parts of me that make me human.
                      </p>
                      <p className="text-base md:text-lg text-[#94A3B8] leading-8 text-left">
                        And I ask that the work I build — the systems, the startups, the solutions — find their way to the
                        people who need them most. That ImmunizeMe is just the beginning. That ten years from now, something I
                        made is helping a child somewhere get the care they deserve.
                      </p>
                      <p className="text-base md:text-lg text-[#94A3B8] leading-8 text-left italic">
                        That would be enough.
                      </p>
                    </div>

                    <div className="w-full max-w-[420px] lg:ml-auto space-y-5">
                      {["/images/photography/2.JPG", "/images/photography/3.JPG"].map((src, idx) => (
                        <figure key={src} className="space-y-3">
                          <Link
                            href={withBasePath(src)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block"
                          >
                            <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden border border-[#334155] bg-[#1E293B]">
                              <Image
                                src={withBasePath(src)}
                                alt={`SIP prayer reflection visual ${idx + 1}`}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                sizes="(max-width: 1024px) 100vw, 420px"
                              />
                            </div>
                          </Link>
                          <figcaption className="text-sm text-[#94A3B8]">
                            Reflection Image {idx + 1}. <Link href={withBasePath(src)} target="_blank" rel="noopener noreferrer" className="text-[#00D9FF] hover:text-[#6FC3DF] transition-colors">Open full image</Link>
                          </figcaption>
                        </figure>
                      ))}
                    </div>
                  </motion.section>

                  <motion.section
                    id="sip-plan"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.45 }}
                    className="scroll-mt-24"
                  >
                    <div className="space-y-6">
                      <h3 className="text-2xl md:text-3xl font-semibold text-white">III. 10–20 Year Passion Plan</h3>

                      {[
                        {
                          label: "Where I am now",
                          years: "2026",
                          body: "I am graduating on time with a degree in Computer Science from Ateneo de Davao University. I leave with a completed thesis — an immunization management system built for a real community under a real healthcare program. I leave knowing how to lead, how to build, and how to take care of myself.",
                        },
                        {
                          label: "Years 1–3 · Build the Foundation",
                          years: "2026–2029",
                          body: "My first priority after graduation is to rest — briefly, and without guilt. Then I enter the industry as a software engineer or IT project manager, putting my skills to real use in a professional environment. I begin my master's degree during this period, deepening both my technical knowledge and my understanding of systems at scale. I stay active. Flag football stays in my life.",
                        },
                        {
                          label: "Years 3–5 · Grow and Specialize",
                          years: "2029–2031",
                          body: "By this point I am a senior — either as an engineer or a project manager. I have my master's degree completed. I am known not just as someone who can build things, but as someone who understands the full picture: the people, the process, and the product. I am planting the seeds of what comes next, quietly building the knowledge and the network to eventually go out on my own.",
                        },
                        {
                          label: "Years 5–10 · Build Something of My Own",
                          years: "2031–2036",
                          body: "This is when I start my own company — an IT and healthcare-focused startup, built in the Philippines, for the Philippines. ImmunizeMe becomes the framework. The goal is to build electronic health and medical record systems that can be licensed by the Department of Health and adopted at scale. I am not just a developer at this point. I am a founder, a leader, and someone who has earned the right to build something that lasts.",
                        },
                        {
                          label: "Years 10–20 · Lead with Purpose",
                          years: "2036–2046",
                          body: "My company is running. The systems I have built are being used. I am still physically active — still an athlete, still a person with a sound mind in a sound body. I have not left the country to get here. I have built it here, proved it here, and given back here. I am mentoring the next generation of builders the way Sir Jonathan and Sir Gab Lucky mentored me — by seeing potential in people and pushing them to stop doing things halfway.",
                        },
                      ].map((phase) => (
                        <div
                          key={phase.label}
                          className="bg-[#1E293B] border border-[#334155] rounded-lg p-5 md:p-6 space-y-2 hover:border-[#00D9FF]/50 transition-colors"
                        >
                          <p className="text-xs uppercase tracking-[0.18em] text-[#00D9FF] font-semibold">
                            {phase.years}
                          </p>
                          <h4 className="text-base md:text-lg font-semibold text-white">
                            {phase.label}
                          </h4>
                          <p className="text-sm md:text-base text-[#94A3B8] leading-7 text-left">
                            {phase.body}
                          </p>
                        </div>
                      ))}

                      <p className="text-base md:text-lg text-[#94A3B8] leading-8 text-left pt-2">
                        The life I want is not complicated. I want meaningful work, a healthy body, a clear mind, and the
                        quiet confidence of someone who knows they showed up fully — for their craft, for their community,
                        and for themselves.
                      </p>

                      <Link
                        href="#sip-top"
                        className="inline-flex items-center gap-1 text-base text-[#00D9FF] hover:text-[#6FC3DF] transition-colors pt-1"
                      >
                        Back to top <span aria-hidden="true">↑</span>
                      </Link>
                    </div>
                  </motion.section>
                </article>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
