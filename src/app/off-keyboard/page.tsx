"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

interface SlideImage {
  src: string;
  alt: string;
}

interface GallerySlideshowProps {
  images: SlideImage[];
}

function GallerySlideshow({ images }: GallerySlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageError, setImageError] = useState<{ [key: number]: boolean }>({});

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleImageError = (index: number) => {
    setImageError((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <div className="relative mt-6">
      {/* Slideshow Container */}
      <div className="relative aspect-video bg-[#0F172A] rounded-lg overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            {imageError[currentIndex] ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[#94A3B8] text-center px-4">{images[currentIndex].alt}</span>
              </div>
            ) : (
              <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                fill
                className="object-cover"
                onError={() => handleImageError(currentIndex)}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#1E293B]/80 hover:bg-[#1E293B] rounded-full flex items-center justify-center border border-[#334155] transition-colors"
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5 text-[#00D9FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#1E293B]/80 hover:bg-[#1E293B] rounded-full flex items-center justify-center border border-[#334155] transition-colors"
              aria-label="Next slide"
            >
              <svg className="w-5 h-5 text-[#00D9FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Pagination Dots */}
      {images.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-[#00D9FF]" : "bg-[#334155] hover:bg-[#94A3B8]"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

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
          <h1 className="text-4xl md:text-5xl font-bold text-white">Off-Keyboard</h1>
          <p className="text-xl text-[#94A3B8]">
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
            <div className="h-1 w-12 bg-[#00D9FF]"></div>
            <h2 className="text-2xl font-semibold text-white">Flag Football</h2>
          </div>
          
          <div className="bg-[#1E293B] border border-[#334155] rounded-lg p-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Fun, Competitive Spirit and Teamwork</h3>
              <p className="text-[#94A3B8] leading-relaxed">
                Flag football is my ultimate escape—it&apos;s a way for me to step away from the screen, forget my problems, and just have fun on the field. 
                It&apos;s a chance for me to bond with people that are from different backgrounds; the one thing we all have in common is our shared love for 
                American Football or the NFL. This sport introduced me to a growing community and gave me the chance to travel throughout the country to 
                compete in Iligan, Cagayan de Oro, Manila, Malaybalay, and Davao.
              </p>
              
              <GallerySlideshow 
                images={[
                  { src: "/images/flag-football/595080906_1381678140636080_1318923575577891537_n.jpg", alt: "Davao Legionnaires Match Day" },
                  { src: "/images/flag-football/595307726_25312621365065410_1546899642655596101_n.jpg", alt: "Competing in Manila Tournament" },
                  { src: "/images/flag-football/597599121_1381677657302795_1083627458644293300_n.jpg", alt: "Team Huddle in CDO" },
                  { src: "/images/flag-football/597972817_1381680703969157_6090325612564495738_n.jpg", alt: "Flag Football Action Shot" }
                ]}
              />
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
            <div className="h-1 w-12 bg-[#00D9FF]"></div>
            <h2 className="text-2xl font-semibold text-white">Event Photography</h2>
          </div>
          
          <div className="bg-[#1E293B] border border-[#334155] rounded-lg p-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Capturing the Moment</h3>
              <p className="text-[#94A3B8] leading-relaxed">
                When I&apos;m not at my desk, I often volunteer to be the event photographer for local tech gatherings. I focus on capturing candid, 
                unscripted moments throughout events hosted by organizations like UX Davao, Devcon Davao, and UXPH. I prefer to document the real 
                interactions that happen when the community comes together.
              </p>
              
              <GallerySlideshow 
                images={[
                  { src: "/images/event-photography/ux-davao-workshop-candid.jpg", alt: "UX Davao Workshop Candid" },
                  { src: "/images/event-photography/devcon-networking-session.jpg", alt: "Devcon Networking Session" },
                  { src: "/images/event-photography/uxph-conference-2025.jpg", alt: "UXPH Conference 2025" },
                  { src: "/images/event-photography/tech-meetup-discussion.jpg", alt: "Tech Meetup Discussion" }
                ]}
              />
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
            <div className="h-1 w-12 bg-[#00D9FF]"></div>
            <h2 className="text-2xl font-semibold text-white">Community Building</h2>
          </div>
          
          <div className="bg-[#1E293B] border border-[#334155] rounded-lg p-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Collaboration with Fellow Students</h3>
              <p className="text-[#94A3B8] leading-relaxed">
                A large part of my time is spent within ACCESS, focusing on the power of student collaboration. I believe in the importance of building 
                a space where all students from the Ateneo&apos;s Computer Studies Cluster can learn from one another and grow together. It&apos;s about more than just tech; it&apos;s about creating a supportive 
                environment where we can share ideas, tackle challenges as a group, and build a network that extends beyond the classroom.
              </p>
              
              <GallerySlideshow 
                images={[
                  { src: "/images/community-building/access-general-assembly.jpg", alt: "ACCESS General Assembly" },
                  { src: "/images/community-building/student-mentorship-session.jpg", alt: "Student Mentorship Session" },
                  { src: "/images/community-building/collaborative-project-brainstorm.jpg", alt: "Collaborative Project Brainstorm" }
                ]}
              />
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
