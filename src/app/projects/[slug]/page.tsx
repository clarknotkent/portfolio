"use client";

import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePageEntrance } from "@/lib/motion";
import { useState, useEffect, use, useMemo, useCallback } from "react";
import { withBasePath } from "@/lib/utils";
import { screenshotDims, isPortrait } from "@/lib/screenshot-dims";
import { photoExif } from "@/lib/photo-exif";

type Props = {
    params: Promise<{ slug: string }>
}

export default function ProjectPage({ params }: Props) {
  const pageEntrance = usePageEntrance();
  const resolvedParams = use(params);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [failedScreenshots, setFailedScreenshots] = useState<string[]>([]);

  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  const projectIndex = projects.filter((p) => p.category === project.category).findIndex((p) => p.slug === project.slug);
  const categoryProjects = projects.filter((p) => p.category === project.category);
  const prevProject = projectIndex > 0 ? categoryProjects[projectIndex - 1] : null;
  const nextProject = projectIndex < categoryProjects.length - 1 ? categoryProjects[projectIndex + 1] : null;

  /* Image arrays */
  const images = useMemo(() => {
    if (project.gallery?.length) {
      return project.gallery.map((image) => ({
        src: withBasePath(image.src),
        key: image.src,
        alt: image.alt,
        caption: image.caption,
        note: image.note,
      }));
    }
    if (project.slug === "photography-portfolio") {
      return Array.from({ length: project.imageCount || 11 }, (_, i) => ({
        src: withBasePath(`/images/photography/${i + 1}.JPG`),
        key: `/images/photography/${i + 1}.JPG`,
        alt: `Photography ${i + 1}`,
        caption: undefined as string | undefined,
        note: undefined as string | undefined,
      }));
    } else if (project.slug === "digital-art-showcase") {
      return Array.from({ length: project.imageCount || 8 }, (_, i) => ({
        src: withBasePath(`/images/digital-art/${i + 1}.jpg`),
        key: `/images/digital-art/${i + 1}.jpg`,
        alt: `Digital Art ${i + 1}`,
        caption: undefined as string | undefined,
        note: undefined as string | undefined,
      }));
    }
    return [];
  }, [project.slug, project.imageCount, project.gallery]);

  const softwareScreenshots = useMemo(() => {
    if (project.category !== "Software Engineering") return [];
    return (project.screenshots || [])
      .map((src) => withBasePath(src))
      .filter((src) => !failedScreenshots.includes(src));
  }, [project.category, project.screenshots, failedScreenshots]);

  const pcBuildPhotos = useMemo(() => {
    if (project.category !== "PC Building") return [];
    return (project.screenshots || [])
      .map((src) => withBasePath(src))
      .filter((src) => !failedScreenshots.includes(src));
  }, [project.category, project.screenshots, failedScreenshots]);

  // Reset the broken-image list when the route changes. Adjusting state during
  // render is React's documented pattern for this; an effect would fire a second
  // render pass after the stale list had already painted.
  const [renderedSlug, setRenderedSlug] = useState(project.slug);
  if (renderedSlug !== project.slug) {
    setRenderedSlug(project.slug);
    setFailedScreenshots([]);
  }

  const openModal = (index: number) => setSelectedImageIndex(index);
  const closeModal = useCallback(() => setSelectedImageIndex(null), []);
  const goToPrevious = useCallback(() => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) setSelectedImageIndex(selectedImageIndex - 1);
  }, [selectedImageIndex]);
  const goToNext = useCallback(() => {
    if (selectedImageIndex !== null && selectedImageIndex < images.length - 1) setSelectedImageIndex(selectedImageIndex + 1);
  }, [selectedImageIndex, images.length]);

  /* Keyboard navigation for lightbox */
  useEffect(() => {
    if (selectedImageIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selectedImageIndex, closeModal, goToPrevious, goToNext]);

  /* Body scroll lock for lightbox */
  useEffect(() => {
    if (selectedImageIndex !== null) {
      document.body.classList.add("drawer-open");
    } else {
      document.body.classList.remove("drawer-open");
    }
    return () => document.body.classList.remove("drawer-open");
  }, [selectedImageIndex]);

  // EXIF is baked at build time (scripts/gen-photo-exif.mjs), so opening the
  // lightbox costs no fetch, no parse, and no parser in the bundle.
  const metadata =
    selectedImageIndex !== null && images[selectedImageIndex]
      ? photoExif[images[selectedImageIndex].key]
      : undefined;

  const formatExposureTime = (time?: number) => {
    if (!time) return null;
    if (time >= 1) return `${time}s`;
    return `1/${Math.round(1 / time)}s`;
  };

  const formatDate = (date?: string) => {
    if (!date) return null;
    try {
      return new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
    } catch { return null; }
  };

  /* Telemetry strip data */
  const isMobileOnly = project.screenshotLayout === "mobile-row";

  // Some projects ship a mix of desktop captures and phone captures. Forcing both
  // into one 16:9 grid letterboxes the phone shots into a thin strip surrounded by
  // empty surface, so they are split and framed separately.
  const wideShots = softwareScreenshots.filter((src) => !isPortrait(src));
  const phoneShots = softwareScreenshots.filter((src) => isPortrait(src));
  const showPhoneRail = isMobileOnly || phoneShots.length > 0;
  const showWideGrid = !isMobileOnly && wideShots.length > 0;
  const railShots = isMobileOnly ? softwareScreenshots : phoneShots;
  // The telemetry strip is a Software Engineering device. A PC build and a gallery
  // have nothing to report in those columns, so they do not get the strip at all.
  const isSoftware = project.category === "Software Engineering";

  // A handful of large portrait pieces would be postage stamps two-up on a phone,
  // and stacking them keeps the running order (and the centre piece) intact.
  const galleryCols =
    images.length <= 4 ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-2 md:grid-cols-3";

  // Every tile in a gallery takes the shape of its first image, so the row reads as
  // one block. The crop is presentational only — the lightbox still shows the full piece.
  const leadDims = images.length ? screenshotDims[images[0].key] : undefined;
  const galleryAspect = leadDims ? `${leadDims.width} / ${leadDims.height}` : "4 / 5";
  const telemetryItems = isSoftware
    ? [
        { label: "Role", value: project.role || "Developer" },
        { label: "Year", value: project.year || "2025", tabular: true },
        ...(isMobileOnly
          ? [{ label: "Platform", value: "Mobile — installable PWA" }]
          : [{ label: "Status", value: project.status || "Complete" }]),
        { label: "Stack count", value: String(project.techStack?.length || 0), tabular: true },
      ]
    : [];

  return (
    <motion.div
      {...pageEntrance}
    >
      <div className="shell pt-10 md:pt-20 pb-20 md:pb-[120px]">
        <div className="flex flex-col gap-20 md:gap-20">
          {/* Header block */}
          <div className="flex flex-col">
            {/* Back link */}
            <Link
              href="/projects"
              className="inline-flex items-center h-11 w-fit text-xs font-medium uppercase tracking-[0.12em] text-muted hover:text-primary transition-[color,background-color,border-color,transform] duration-150 active:scale-[0.99]"
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                transitionTimingFunction: "var(--ease-out)",
              }}
            >
              &larr; Projects
            </Link>

            {/* H1 */}
            <h1
              className="mt-6 text-[36px] md:text-[48px] font-semibold text-ink leading-[1.1] tracking-[-0.02em] max-w-[1000px]"
              style={{
                fontFamily: "var(--font-valley-sans)",
                textWrap: "pretty",
              }}
            >
              {project.title}
            </h1>

            {/* Subtext */}
            <p className="mt-6 text-base md:text-lg text-muted leading-[1.6] max-w-[68ch]">
              {project.shortDescription || project.description}
            </p>

            {/* Telemetry strip */}
            {telemetryItems.length > 0 && (
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 border border-hairline rounded-[2px] bg-canvas">
              {telemetryItems.map((item, i) => (
                <div
                  key={item.label}
                  className={`p-4 md:px-5 md:py-4 flex flex-col gap-1.5 ${
                    i < telemetryItems.length - 1 ? "border-r border-hairline" : ""
                  } ${i < 2 ? "border-b md:border-b-0 border-hairline" : ""}`}
                  style={i === 1 ? { borderRight: "1px solid #E5E7EB" } : undefined}
                >
                  <span
                    className="text-xs font-medium uppercase tracking-[0.12em] text-muted"
                    style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                  >
                    {item.label}
                  </span>
                  <span
                    className={`text-sm leading-[1.5] text-ink ${item.tabular ? "tabular-nums" : ""}`}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
            )}
          </div>

          {/* Software Engineering content */}
          {project.category === "Software Engineering" && (
            <>
              {/* Body copy */}
              <div className="flex flex-col gap-6 max-w-[68ch]">
                <p className="text-base leading-[1.6] text-ink">
                  {project.description}
                </p>
              </div>

              {/* Screenshot gallery */}
              {softwareScreenshots.length > 0 && (
                <div className="flex flex-col gap-12">
                  {/* Desktop captures — each framed at its own aspect ratio */}
                  {showWideGrid && (
                    <div className="flex flex-col gap-8">
                      <div className="flex items-center gap-4">
                        <h2
                          className="text-xs font-medium uppercase tracking-[0.12em] text-muted whitespace-nowrap"
                          style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                        >
                          {showPhoneRail ? "Screens — desktop" : "Screenshots"}
                        </h2>
                        <span className="h-px bg-hairline flex-1" />
                      </div>
                      <div
                        className={`grid grid-cols-1 gap-6 items-start ${
                          wideShots.length === 1 ? "" : "md:grid-cols-2"
                        }`}
                      >
                        {wideShots.map((screenshot, index) => {
                          const dims = screenshotDims[screenshot];
                          return (
                            <figure
                              key={screenshot}
                              className="w-full overflow-hidden border border-hairline rounded-[2px] bg-surface m-0"
                            >
                              <Image
                                src={screenshot}
                                alt={`${project.title} screenshot ${index + 1}`}
                                width={dims?.width ?? 1440}
                                height={dims?.height ?? 900}
                                className="w-full h-auto block"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                onError={() => {
                                  setFailedScreenshots((prev) =>
                                    prev.includes(screenshot) ? prev : [...prev, screenshot]
                                  );
                                }}
                              />
                            </figure>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Phone captures — held at phone width in a snap rail */}
                  {showPhoneRail && railShots.length > 0 && (
                    <div className="flex flex-col gap-8">
                      <div className="flex items-center gap-4">
                        <h2
                          className="text-xs font-medium uppercase tracking-[0.12em] text-muted whitespace-nowrap"
                          style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                        >
                          Screens — mobile
                        </h2>
                        <span className="h-px bg-hairline flex-1" />
                      </div>
                      <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none">
                        {railShots.map((screenshot, index) => {
                          const dims = screenshotDims[screenshot];
                          return (
                            <figure
                              key={screenshot}
                              className="flex-shrink-0 flex flex-col gap-2 m-0 snap-start"
                              style={{ width: 240 }}
                            >
                              <span className="border border-hairline rounded-[2px] overflow-hidden bg-surface block">
                                <Image
                                  src={screenshot}
                                  alt={`${project.title} mobile screen ${index + 1}`}
                                  width={dims?.width ?? 390}
                                  height={dims?.height ?? 844}
                                  className="w-full h-auto block"
                                  sizes="240px"
                                  onError={() => {
                                    setFailedScreenshots((prev) =>
                                      prev.includes(screenshot) ? prev : [...prev, screenshot]
                                    );
                                  }}
                                />
                              </span>
                            </figure>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Tech stack section */}
              {project.techStack && (
                <div className="flex flex-col gap-8">
                  <div className="flex items-center gap-4">
                    <h2
                      className="text-xs font-medium uppercase tracking-[0.12em] text-muted whitespace-nowrap"
                      style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                    >
                      Stack
                    </h2>
                    <span className="h-px bg-hairline flex-1" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-[2px] bg-surface border border-hairline px-2 h-6 text-ink text-xs tracking-[0.04em]"
                        style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View repository — secondary button */}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center h-10 px-6 rounded-[2px] text-sm font-medium tracking-[0.02em] border border-hairline text-ink hover:border-primary hover:text-primary transition-[color,border-color,transform] duration-150 w-fit gap-2.5 active:scale-[0.99]"
                      style={{
                        fontFamily: "var(--font-valley-sans)",
                        transitionTimingFunction: "var(--ease-out)",
                      }}
                    >
                      View repository <span aria-hidden="true">&rarr;</span>
                    </a>
                  )}
                </div>
              )}
            </>
          )}

          {/* PC Building content */}
          {project.category === "PC Building" && (
            <>
              <div className="flex flex-col gap-6 max-w-[68ch]">
                <p className="text-base leading-[1.6] text-ink">
                  {project.description}
                </p>
              </div>

              {/* Spec sheet */}
              {project.components && (
                <div className="flex flex-col gap-8">
                  <div className="flex items-center gap-4">
                    <h2
                      className="text-xs font-medium uppercase tracking-[0.12em] text-muted whitespace-nowrap"
                      style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                    >
                      Specifications
                    </h2>
                    <span className="h-px bg-hairline flex-1" />
                  </div>
                  <div className="border border-hairline rounded-[2px] bg-canvas">
                    {project.components.map((component, idx) => (
                      <div
                        key={idx}
                        className={`flex items-center gap-3 px-5 py-3 text-sm text-ink ${
                          idx < project.components!.length - 1 ? "border-b border-hairline" : ""
                        }`}
                      >
                        <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0" />
                        <span>{component}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Build photos */}
              <div className="flex flex-col gap-8">
                <div className="flex items-center gap-4">
                  <h2
                    className="text-xs font-medium uppercase tracking-[0.12em] text-muted whitespace-nowrap"
                    style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                  >
                    Build photos
                  </h2>
                  <span className="h-px bg-hairline flex-1" />
                </div>
                {pcBuildPhotos.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {pcBuildPhotos.map((photo, i) => (
                      <div
                        key={photo}
                        className="relative aspect-square bg-surface border border-hairline rounded-[2px] overflow-hidden"
                      >
                        <Image
                          src={photo}
                          alt={`${project.title} build photo ${i + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          onError={() => {
                            setFailedScreenshots((prev) =>
                              prev.includes(photo) ? prev : [...prev, photo]
                            );
                          }}
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-surface border border-hairline rounded-[2px] p-6 text-sm text-muted-strong">
                    No build photos found.
                  </div>
                )}
              </div>
            </>
          )}

          {/* Creative Works content */}
          {project.category === "Creative Works" && (
            <>
              <div className="flex flex-col gap-6 max-w-[68ch]">
                <p className="text-base leading-[1.6] text-ink">
                  {project.description}
                </p>
              </div>

              {/* Gallery grid */}
              <div className="flex flex-col gap-8">
                <div className="flex items-center gap-4">
                  <h2
                    className="text-xs font-medium uppercase tracking-[0.12em] text-muted whitespace-nowrap"
                    style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                  >
                    Gallery
                  </h2>
                  <span className="h-px bg-hairline flex-1" />
                </div>
                <div className={`grid gap-4 items-start ${galleryCols}`}>
                  {images.length > 0 ? (
                    images.map((image, i) => (
                      <button
                        key={i}
                        onClick={() => openModal(i)}
                        className="relative bg-surface border border-hairline rounded-[2px] overflow-hidden hover:border-primary transition-[border-color,transform] duration-150 cursor-pointer group block w-full active:scale-[0.97]"
                        style={{ aspectRatio: galleryAspect, transitionTimingFunction: "var(--ease-out)" }}
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover group-hover:scale-[1.02] transition-transform duration-150"
                          style={{ transitionTimingFunction: "var(--ease-out)" }}
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </button>
                    ))
                  ) : (
                    Array.from({ length: project.imageCount || 12 }).map((_, i) => (
                      <div
                        key={i}
                        className="bg-surface border border-hairline rounded-[2px] flex items-center justify-center"
                        style={{ aspectRatio: galleryAspect }}
                      >
                        <span className="text-muted text-sm">{i + 1}</span>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Tags */}
              {project.tags && project.tags.length > 0 && (
                <div className="flex flex-col gap-8">
                  <div className="flex items-center gap-4">
                    <h2
                      className="text-xs font-medium uppercase tracking-[0.12em] text-muted whitespace-nowrap"
                      style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                    >
                      Tags
                    </h2>
                    <span className="h-px bg-hairline flex-1" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-[2px] bg-surface border border-hairline px-2 h-6 text-ink text-xs tracking-[0.04em]"
                        style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}

          {/* Prev / next navigation */}
          <div className="flex justify-between gap-6 border-t border-hairline pt-8">
            {prevProject ? (
              <Link href={`/projects/${prevProject.slug}`} className="flex flex-col gap-1.5 text-left active:scale-[0.97] transition-transform duration-150">
                <span
                  className="text-xs font-medium uppercase tracking-[0.12em] text-muted"
                  style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                >
                  &larr; Previous
                </span>
                <span
                  className="text-lg font-semibold text-ink leading-[1.3]"
                  style={{ fontFamily: "var(--font-valley-sans)" }}
                >
                  {prevProject.title}
                </span>
              </Link>
            ) : <div />}
            {nextProject ? (
              <Link href={`/projects/${nextProject.slug}`} className="flex flex-col gap-1.5 text-right ml-auto active:scale-[0.97] transition-transform duration-150">
                <span
                  className="text-xs font-medium uppercase tracking-[0.12em] text-muted"
                  style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                >
                  Next &rarr;
                </span>
                <span
                  className="text-lg font-semibold text-ink leading-[1.3]"
                  style={{ fontFamily: "var(--font-valley-sans)" }}
                >
                  {nextProject.title}
                </span>
              </Link>
            ) : <div />}
          </div>
        </div>
      </div>

      {/* Lightbox — creative works */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-10"
          style={{ backgroundColor: "rgba(9,9,11,0.92)" }}
          onClick={closeModal}
        >
          {/* Close button — 44px tap target */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 w-11 h-11 flex items-center justify-center text-white hover:text-primary transition-[color,background-color,border-color,transform] duration-150 z-20 active:scale-[0.99]"
            aria-label="Close lightbox"
            style={{ transitionTimingFunction: "var(--ease-out)" }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
              <path d="M1 1L17 17M17 1L1 17" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>

          {/* Nav arrows */}
          {selectedImageIndex > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center border border-hairline rounded-[2px] text-white hover:text-primary hover:border-primary transition-[color,background-color,border-color,transform] duration-150 z-10 active:scale-[0.99]"
              aria-label="Previous image"
              style={{ transitionTimingFunction: "var(--ease-out)" }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 2L4 8L10 14" stroke="currentColor" strokeWidth="1.5" /></svg>
            </button>
          )}
          {selectedImageIndex < images.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center border border-hairline rounded-[2px] text-white hover:text-primary hover:border-primary transition-[color,background-color,border-color,transform] duration-150 z-10 active:scale-[0.99]"
              aria-label="Next image"
              style={{ transitionTimingFunction: "var(--ease-out)" }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 2L12 8L6 14" stroke="currentColor" strokeWidth="1.5" /></svg>
            </button>
          )}

          {/* Image */}
          <div
            className="relative w-full h-full max-w-5xl mx-auto flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full">
              <Image
                src={images[selectedImageIndex].src}
                alt={images[selectedImageIndex].alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 80vw"
                priority
              />
            </div>
            {/* Caption below image, for galleries that title their pieces */}
            {images[selectedImageIndex].caption && (
              <figcaption className="mt-4 flex flex-col items-center gap-1 text-center px-4">
                <span className="text-sm leading-[1.5] text-canvas">
                  {images[selectedImageIndex].caption}
                </span>
                {images[selectedImageIndex].note && (
                  <span
                    className="text-xs tracking-[0.04em] text-muted"
                    style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                  >
                    {images[selectedImageIndex].note}
                  </span>
                )}
              </figcaption>
            )}
            {/* EXIF line below image */}
            {metadata && (
              <div
                className="mt-4 text-xs text-muted tracking-[0.04em]"
                style={{ fontFamily: "var(--font-jetbrains-mono)" }}
              >
                {[
                  metadata.iso ? `ISO ${metadata.iso}` : null,
                  metadata.exposureTime ? formatExposureTime(metadata.exposureTime) : null,
                  metadata.fNumber ? `f/${metadata.fNumber}` : null,
                  metadata.focalLength ? `${metadata.focalLength}mm` : null,
                ].filter(Boolean).join(" · ")}
                {metadata.dateTaken && ` · ${formatDate(metadata.dateTaken)}`}
              </div>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
}