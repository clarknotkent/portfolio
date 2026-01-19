"use client";

import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, use, useMemo } from "react";
import exifr from "exifr";

type Props = {
    params: Promise<{ slug: string }>
}

interface ImageMetadata {
  Make?: string;
  Model?: string;
  LensModel?: string;
  FNumber?: number;
  ExposureTime?: number;
  ISO?: number;
  FocalLength?: number;
  DateTimeOriginal?: Date;
}

export default function ProjectPage({ params }: Props) {
  const resolvedParams = use(params);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [metadata, setMetadata] = useState<ImageMetadata | null>(null);
  const [loadingMetadata, setLoadingMetadata] = useState(false);

  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  // Generate image paths for photography and other creative works
  const images = useMemo(() => {
    if (project.slug === "photography-portfolio") {
      return Array.from({ length: project.imageCount || 11 }, (_, i) => ({
        src: `/images/photography/${i + 1}.JPG`,
        alt: `Photography ${i + 1}`,
      }));
    } else if (project.slug === "digital-art-showcase") {
      return Array.from({ length: project.imageCount || 8 }, (_, i) => ({
        src: `/images/digital-art/${i + 1}.jpg`,
        alt: `Digital Art ${i + 1}`,
      }));
    }
    return [];
  }, [project.slug, project.imageCount]);

  // Load EXIF metadata when image is selected
  useEffect(() => {
    if (selectedImageIndex !== null && images[selectedImageIndex]) {
      // Start loading state
      const loadMetadata = async () => {
        setLoadingMetadata(true);
        setMetadata(null);
        
        try {
          // Fetch the image as blob and parse EXIF
          const response = await fetch(images[selectedImageIndex].src);
          const blob = await response.blob();
          const data = await exifr.parse(blob);
          
          console.log('EXIF data loaded:', data); // Debug log
          setMetadata(data || null);
        } catch (error) {
          console.error("Failed to read EXIF data:", error);
          setMetadata(null);
        } finally {
          setLoadingMetadata(false);
        }
      };
      
      loadMetadata();
    }
  }, [selectedImageIndex, images]);

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
    setMetadata(null);
  };

  const goToPrevious = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const goToNext = () => {
    if (selectedImageIndex !== null && selectedImageIndex < images.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  // Format exposure time for display
  const formatExposureTime = (time?: number) => {
    if (!time) return null;
    if (time >= 1) return `${time}s`;
    const fraction = 1 / time;
    return `1/${Math.round(fraction)}s`;
  };

  // Format date for display
  const formatDate = (date?: Date) => {
    if (!date) return null;
    try {
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    } catch {
      return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-8">
        {/* Back Button */}
        <Link href="/projects" className="inline-block px-4 py-2 text-[#6366F1] hover:text-[#4F46E5] transition-colors">
          ← Back to Work
        </Link>

        {/* Software Engineering Layout */}
        {project.category === "Software Engineering" && (
          <>
            {/* Project Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm">
                <span className="px-2 py-1 bg-[#0F172A] text-[#94A3B8] rounded border border-[#334155]">
                  {project.role}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                {project.title}
              </h1>

              {/* Tech Stack */}
              {project.techStack && (
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm px-3 py-1 bg-[#0F172A] text-[#94A3B8] rounded border border-[#334155]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Project Description */}
            <div className="prose prose-gray max-w-none">
              <p className="text-lg text-[#94A3B8] leading-relaxed text-justify">
                {project.description}
              </p>
              
              {/* Repository Link */}
              {project.repoUrl && (
                <div className="mt-6">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#00D9FF] text-[#0F172A] rounded border border-[#00D9FF] hover:bg-[#6FC3DF] transition-colors font-medium"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                    </svg>
                    View Repository
                  </a>
                </div>
              )}
            </div>

            {/* Screenshots */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-white">Screenshots</h2>
              <div className="grid grid-cols-1 gap-6">
                <div className="aspect-video bg-[#1E293B] border border-[#334155] rounded-lg flex items-center justify-center">
                  <span className="text-[#94A3B8]">Screenshot Placeholder</span>
                </div>
                <div className="aspect-video bg-[#1E293B] border border-[#334155] rounded-lg flex items-center justify-center">
                  <span className="text-[#94A3B8]">Screenshot Placeholder</span>
                </div>
              </div>
            </div>

            {/* Tags */}
            {project.tags && project.tags.length > 0 && (
              <div className="pt-8 border-t border-[#334155]">
                <h3 className="text-sm font-semibold text-white mb-3">Project Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-[#1E293B] text-[#94A3B8] rounded border border-[#334155]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {/* PC Building Layout */}
        {project.category === "PC Building" && (
          <>
            {/* Header */}
            <div className="space-y-4">
              <div className="text-sm">
                <span className="px-2 py-1 bg-[#0F172A] text-[#94A3B8] rounded border border-[#334155]">
                  {project.role}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                {project.title}
              </h1>
              <p className="text-lg text-[#94A3B8] leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Full Spec Sheet */}
            {project.components && (
              <div className="bg-[#0F172A] border border-[#334155] rounded-lg p-8">
                <h2 className="text-xl font-semibold text-white mb-6">
                  BUILD SPECIFICATIONS
                </h2>
                <div className="space-y-3">
                  {project.components.map((component, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 text-[#94A3B8] pb-3 border-b border-[#334155] last:border-0"
                    >
                      <div className="w-2 h-2 bg-[#00D9FF] rounded-full mt-1.5 flex-shrink-0"></div>
                      <span className="text-base">{component}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Build Photos */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-white">Build Photos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square bg-[#1E293B] border border-[#334155] rounded-lg flex items-center justify-center"
                  >
                    <span className="text-[#94A3B8]">Photo {i + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Creative Works Layout */}
        {project.category === "Creative Works" && (
          <>
            {/* Header */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                {project.title}
              </h1>
              <p className="text-lg text-[#94A3B8] leading-relaxed text-justify">
                {project.description}
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-white">Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {(project.slug === "photography-portfolio" || project.slug === "digital-art-showcase") && images.length > 0 ? (
                  images.map((image, i) => (
                    <button
                      key={i}
                      onClick={() => openModal(i)}
                      className="relative aspect-square bg-[#1E293B] border border-[#334155] rounded-lg overflow-hidden hover:border-[#6366F1]/50 transition-all cursor-pointer group"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 50vw, 33vw"
                      />
                    </button>
                  ))
                ) : (
                  Array.from({ length: project.imageCount || 12 }).map((_, i) => (
                    <div
                      key={i}
                      className="aspect-square bg-[#1E293B] border border-[#334155] rounded-lg flex items-center justify-center hover:bg-[#334155] transition-colors cursor-pointer"
                    >
                      <span className="text-[#94A3B8]">{i + 1}</span>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Modal for Image Viewer - Instagram Style */}
            {selectedImageIndex !== null && (
              <div
                className="fixed inset-0 bg-black z-50 flex items-center justify-center"
                onClick={closeModal}
              >
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-white hover:text-[#6366F1] transition-colors z-20"
                  aria-label="Close"
                >
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Main Container - Split Layout */}
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="relative w-full h-full max-w-7xl mx-auto flex flex-col md:flex-row"
                >
                  {/* Left Side - Image */}
                  <div className="relative flex-1 bg-black flex items-center justify-center">
                    {/* Previous Button */}
                    {selectedImageIndex > 0 && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          goToPrevious();
                        }}
                        className="absolute left-4 text-white hover:text-[#6366F1] transition-colors z-10 bg-black/50 rounded-full p-2"
                        aria-label="Previous"
                      >
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                    )}

                    {/* Next Button */}
                    {selectedImageIndex < images.length - 1 && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          goToNext();
                        }}
                        className="absolute right-4 text-white hover:text-[#6366F1] transition-colors z-10 bg-black/50 rounded-full p-2"
                        aria-label="Next"
                      >
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    )}

                    <div className="relative w-full h-full">
                      <Image
                        src={images[selectedImageIndex].src}
                        alt={images[selectedImageIndex].alt}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 70vw"
                        priority
                      />
                    </div>
                  </div>

                  {/* Right Side - Details Panel */}
                  <div className="w-full md:w-96 bg-[#0F172A] flex flex-col max-h-[50vh] md:max-h-none">
                    {/* Header */}
                    <div className="p-4 border-b border-[#334155]">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#6366F1] rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-white font-semibold">Photography</p>
                          <p className="text-[#94A3B8] text-sm">
                            {selectedImageIndex + 1} / {images.length}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Scrollable Content */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-6">
                      {/* Image Title */}
                      <div>
                        <h3 className="text-white font-semibold text-lg">
                          {images[selectedImageIndex].alt}
                        </h3>
                      </div>

                      {/* EXIF Metadata */}
                      <div className="space-y-4">
                        <h4 className="text-white font-semibold text-sm uppercase tracking-wide">
                          Photo Details
                        </h4>
                        
                        {loadingMetadata ? (
                          <div className="text-[#94A3B8] text-sm">
                            Loading metadata...
                          </div>
                        ) : metadata ? (
                          <div className="space-y-3">
                            {metadata.Make && metadata.Model && (
                              <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-[#6366F1] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <div>
                                  <p className="text-[#94A3B8] text-xs uppercase tracking-wide">Camera</p>
                                  <p className="text-white text-sm mt-0.5">{metadata.Make} {metadata.Model}</p>
                                </div>
                              </div>
                            )}
                            
                            {metadata.LensModel && (
                              <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-[#6366F1] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                                <div>
                                  <p className="text-[#94A3B8] text-xs uppercase tracking-wide">Lens</p>
                                  <p className="text-white text-sm mt-0.5">{metadata.LensModel}</p>
                                </div>
                              </div>
                            )}

                            {/* Settings Grid */}
                            <div className="grid grid-cols-2 gap-4 pt-2">
                              {metadata.FocalLength && (
                                <div>
                                  <p className="text-[#94A3B8] text-xs uppercase tracking-wide">Focal Length</p>
                                  <p className="text-white font-mono text-sm mt-0.5">{Math.round(metadata.FocalLength)}mm</p>
                                </div>
                              )}
                              
                              {metadata.FNumber && (
                                <div>
                                  <p className="text-[#94A3B8] text-xs uppercase tracking-wide">Aperture</p>
                                  <p className="text-white font-mono text-sm mt-0.5">f/{metadata.FNumber}</p>
                                </div>
                              )}
                              
                              {metadata.ExposureTime && (
                                <div>
                                  <p className="text-[#94A3B8] text-xs uppercase tracking-wide">Shutter Speed</p>
                                  <p className="text-white font-mono text-sm mt-0.5">{formatExposureTime(metadata.ExposureTime)}</p>
                                </div>
                              )}
                              
                              {metadata.ISO && (
                                <div>
                                  <p className="text-[#94A3B8] text-xs uppercase tracking-wide">ISO</p>
                                  <p className="text-white font-mono text-sm mt-0.5">{metadata.ISO}</p>
                                </div>
                              )}
                            </div>
                            
                            {metadata.DateTimeOriginal && (
                              <div className="flex items-start gap-3 pt-2">
                                <svg className="w-5 h-5 text-[#6366F1] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <div>
                                  <p className="text-[#94A3B8] text-xs uppercase tracking-wide">Date Taken</p>
                                  <p className="text-white text-sm mt-0.5">{formatDate(metadata.DateTimeOriginal)}</p>
                                </div>
                              </div>
                            )}
                          </div>
                        ) : (
                          <div className="text-[#94A3B8] text-sm">
                            No metadata available
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}