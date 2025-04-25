import Link from "next/link";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Compass, Code, Sparkles } from "lucide-react";
import { ProjectsAnimation } from "@/components/ProjectsAnimation";

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-primary-50 px-4 py-12 md:py-20">
      <main className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-primary-100 rounded-full mb-4">
            <Compass className="h-6 w-6 text-primary-600" aria-hidden="true" />
          </div>
          <h1 className="text-primary text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
          <p className="text-lg text-medium-contrast max-w-3xl mx-auto">
            Explore my latest work showcasing my skills in web development, design, and problem-solving.
            Each project represents a unique challenge and solution that I've crafted with attention to detail and user experience.
          </p>
        </div>
        

        
        {/* Projects Grid */}
        <ProjectsAnimation projects={projects} />
        
        {/* Call to Action */}
        <div className="mt-20 text-center bg-primary-50 p-8 rounded-xl border border-primary-100 shadow-md">
          <div className="inline-flex items-center justify-center p-2 bg-secondary-100 rounded-full mb-4">
            <Sparkles className="h-6 w-6 text-secondary-600" aria-hidden="true" />
          </div>
          <h2 className="text-primary-700 text-2xl font-semibold mb-4">Interested in working together?</h2>
          <p className="text-medium-contrast mb-6 max-w-2xl mx-auto">
            I'm always open to new opportunities, collaborations, and challenges. Let's create something amazing together!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/about" 
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-600 transition-all duration-300 hover:scale-105 shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Learn More About Me
            </Link>
            <Link 
              href="/" 
              className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
