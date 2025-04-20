import Link from "next/link";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";

export default function Projects() {
  return (
    <div className="min-h-screen bg-background px-4 py-12 md:py-20">
      <main className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-gradient-brand text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-lg text-medium-contrast max-w-3xl mx-auto">
            Explore my latest work showcasing my skills in web development, design, and problem-solving.
            Each project represents a unique challenge and solution.  
          </p>
        </div>
        
        {/* Projects Grid */}
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={`${project.title}-${index}`}
                title={project.title}
                description={project.description}
                tags={project.tags}
                github={project.github}
                demo={project.demo}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-muted rounded-lg">
            <p className="text-medium-contrast">No projects to display yet. Check back soon!</p>
          </div>
        )}
        
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-medium-contrast mb-4">Interested in working together?</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/about" 
              className="px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors shadow-md"
            >
              Learn More About Me
            </Link>
            <Link 
              href="/" 
              className="px-6 py-2 border border-primary-500 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
