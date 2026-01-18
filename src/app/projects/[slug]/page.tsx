import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

type Props = {
    params: Promise<{ slug: string }>
}

export default async function ProjectPage(props: Props) {
    const params = await props.params;
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-8">
        {/* Back Button */}
        <Link href="/projects">
          <Button variant="ghost">← Back to Work</Button>
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
              <p className="text-lg text-[#94A3B8] leading-relaxed">
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
              <p className="text-lg text-[#94A3B8] leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-white">Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Array.from({ length: project.imageCount || 12 }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square bg-[#1E293B] border border-[#334155] rounded-lg flex items-center justify-center hover:bg-[#334155] transition-colors cursor-pointer"
                  >
                    <span className="text-[#94A3B8]">{i + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
