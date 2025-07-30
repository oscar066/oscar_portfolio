import { projects, smallProjects } from "@/lib/projectsData";
import ProjectCard from "./cards/ProjectCard";
import SmallProjectCard from "./cards/SmallProjectCard";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Projects
        </h2>
        <div className="space-y-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}

          {/* Additional Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {smallProjects.map((project) => (
              <SmallProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
