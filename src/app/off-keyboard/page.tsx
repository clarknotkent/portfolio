"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePageEntrance } from "@/lib/motion";
import { withBasePath } from "@/lib/utils";

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

  const nextSlide = useCallback(() => setCurrentIndex((prev) => (prev + 1) % images.length), [images.length]);
  const prevSlide = useCallback(() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length), [images.length]);
  const handleImageError = (index: number) => setImageError((prev) => ({ ...prev, [index]: true }));

  return (
    <div className="relative mt-8">
      <div className="relative aspect-video bg-surface rounded-[2px] overflow-hidden border border-hairline">
        {/* Crossfade in CSS rather than AnimatePresence. A stacked opacity
            transition is interruptible — tapping through slides quickly reverses
            from wherever it got to instead of restarting — and it runs off the
            main thread, which matters while these images are still decoding. */}
        {images.map((image, index) => (
          <div
            key={image.src}
            className={`absolute inset-0 transition-opacity duration-150 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionTimingFunction: "var(--ease-out)" }}
            aria-hidden={index !== currentIndex}
            inert={index !== currentIndex ? true : undefined}
          >
            {imageError[index] ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-muted text-center px-4 text-sm">{image.alt}</span>
              </div>
            ) : (
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                onError={() => handleImageError(index)}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
              />
            )}
          </div>
        ))}
      </div>

      {/* Controls — positioned outside the image, below it */}
      {images.length > 1 && (
        <div className="flex items-center justify-between mt-4">
          <button
            onClick={prevSlide}
            className="w-11 h-11 flex items-center justify-center border border-hairline rounded-[2px] text-muted hover:text-primary hover:border-primary transition-[color,background-color,border-color,transform] duration-150 active:scale-[0.99]"
            aria-label="Previous slide"
            style={{ transitionTimingFunction: "var(--ease-out)" }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 2L4 8L10 14" stroke="currentColor" strokeWidth="1.5" /></svg>
          </button>
          <span
            className="text-xs text-muted tracking-[0.04em] tabular-nums"
            style={{ fontFamily: "var(--font-jetbrains-mono)" }}
          >
            {currentIndex + 1} / {images.length}
          </span>
          <button
            onClick={nextSlide}
            className="w-11 h-11 flex items-center justify-center border border-hairline rounded-[2px] text-muted hover:text-primary hover:border-primary transition-[color,background-color,border-color,transform] duration-150 active:scale-[0.99]"
            aria-label="Next slide"
            style={{ transitionTimingFunction: "var(--ease-out)" }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 2L12 8L6 14" stroke="currentColor" strokeWidth="1.5" /></svg>
          </button>
        </div>
      )}
    </div>
  );
}

export default function OffKeyboardPage() {
  const pageEntrance = usePageEntrance();
  return (
    <div className="shell pt-10 md:pt-20 pb-20 md:pb-[120px]">
      <motion.div
        {...pageEntrance}
        className="flex flex-col gap-14 md:gap-20"
      >
        {/* Page header */}
        <div className="flex flex-col gap-6">
          <h1
            className="text-[36px] md:text-[48px] font-semibold text-ink leading-[1.1] tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-valley-sans)" }}
          >
            Off-Keyboard
          </h1>
          <p className="text-base md:text-lg text-muted leading-[1.6] max-w-[68ch]">
            Life outside the code editor.
          </p>
        </div>

        {/* Flag Football */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <span
              className="text-xs font-medium uppercase tracking-[0.12em] text-muted whitespace-nowrap"
              style={{ fontFamily: "var(--font-jetbrains-mono)" }}
            >
              Flag Football
            </span>
            <span className="h-px bg-hairline flex-1" />
          </div>

          <h2
            className="text-lg md:text-xl font-semibold text-ink leading-[1.3] mb-4"
            style={{ fontFamily: "var(--font-valley-sans)" }}
          >
            Fun, competitive spirit and teamwork
          </h2>
          <p className="text-base leading-[1.6] text-ink max-w-[68ch]">
            Flag football is my ultimate escape—it&apos;s a way for me to step away from the screen, forget my problems, and just have fun on the field.
            It&apos;s a chance for me to bond with people that are from different backgrounds; the one thing we all have in common is our shared love for
            American Football or the NFL. This sport introduced me to a growing community and gave me the chance to travel throughout the country to
            compete in Iligan, Cagayan de Oro, Manila, Malaybalay, and Davao.
          </p>

          <GallerySlideshow
            images={[
              { src: withBasePath("/images/flag-football/595080906_1381678140636080_1318923575577891537_n.jpg"), alt: "Davao Legionnaires match day" },
              { src: withBasePath("/images/flag-football/595307726_25312621365065410_1546899642655596101_n.jpg"), alt: "Competing in Manila tournament" },
              { src: withBasePath("/images/flag-football/597599121_1381677657302795_1083627458644293300_n.jpg"), alt: "Team huddle in CDO" },
              { src: withBasePath("/images/flag-football/597972817_1381680703969157_6090325612564495738_n.jpg"), alt: "Flag football action shot" },
            ]}
          />
        </section>

        {/* Event Photography */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <span
              className="text-xs font-medium uppercase tracking-[0.12em] text-muted whitespace-nowrap"
              style={{ fontFamily: "var(--font-jetbrains-mono)" }}
            >
              Event Photography
            </span>
            <span className="h-px bg-hairline flex-1" />
          </div>

          <h2
            className="text-lg md:text-xl font-semibold text-ink leading-[1.3] mb-4"
            style={{ fontFamily: "var(--font-valley-sans)" }}
          >
            Capturing the moment
          </h2>
          <p className="text-base leading-[1.6] text-ink max-w-[68ch]">
            When I&apos;m not at my desk, I often volunteer to be the event photographer for local tech gatherings. I focus on capturing candid,
            unscripted moments throughout events hosted by organizations like UX Davao, Devcon Davao, and UXPH. I prefer to document the real
            interactions that happen when the community comes together.
          </p>

          <GallerySlideshow
            images={[
              { src: withBasePath("/images/event-photography/Devcon.jpg"), alt: "Devcon Davao community event" },
              { src: withBasePath("/images/event-photography/UXD.JPG"), alt: "UX Davao meetup" },
              { src: withBasePath("/images/event-photography/UXPH.jpg"), alt: "UXPH conference" },
            ]}
          />
        </section>

        {/* Community Building */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <span
              className="text-xs font-medium uppercase tracking-[0.12em] text-muted whitespace-nowrap"
              style={{ fontFamily: "var(--font-jetbrains-mono)" }}
            >
              Community Building
            </span>
            <span className="h-px bg-hairline flex-1" />
          </div>

          <h2
            className="text-lg md:text-xl font-semibold text-ink leading-[1.3] mb-4"
            style={{ fontFamily: "var(--font-valley-sans)" }}
          >
            Collaboration with fellow students
          </h2>
          <p className="text-base leading-[1.6] text-ink max-w-[68ch]">
            A large part of my time is spent within ACCESS, focusing on the power of student collaboration. I believe in the importance of building
            a space where all students from the Ateneo&apos;s Computer Studies Cluster can learn from one another and grow together. It&apos;s about more than just tech; it&apos;s about creating a supportive
            environment where we can share ideas, tackle challenges as a group, and build a network that extends beyond the classroom.
          </p>

          <GallerySlideshow
            images={[
              { src: withBasePath("/images/community-building/ACCESS.jpg"), alt: "ACCESS organization meetup" },
              { src: withBasePath("/images/community-building/ACCESSxDICE-151.jpg"), alt: "ACCESS x DICE joint event" },
            ]}
          />
        </section>
      </motion.div>
    </div>
  );
}
