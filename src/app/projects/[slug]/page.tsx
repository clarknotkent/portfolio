import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";
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
      <div className="mb-8">
        <Button variant="outline" size="sm" onClick={() => window.history.back()}>
          ← Back
        </Button>
      </div>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>
      
      <div className="flex flex-wrap gap-2 mb-8">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-sm font-medium text-gray-900 bg-gray-100 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="prose prose-gray max-w-none">
        <p className="text-lg text-gray-600 leading-relaxed">
          {project.description}
        </p>
        
        {/* Placeholder for more content */}
        <div className="mt-8 p-12 bg-gray-50 border border-gray-100 rounded-lg text-center text-gray-400">
             Project Details & Screenshots Placeholder
        </div>
      </div>
    </div>
  );
}
