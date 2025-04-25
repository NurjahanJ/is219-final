"use client";

import { Project } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { useEffect, useState } from "react";

interface ProjectsAnimationProps {
  projects: Project[];
}

export function ProjectsAnimation({ projects }: ProjectsAnimationProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div 
              key={`${project.title}-${index}`} 
              className={`opacity-0 ${mounted ? 'animate-fade-in' : ''}`}
              style={{ 
                animationDelay: `${index * 150}ms`, 
                animationFillMode: 'forwards' 
              }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.tags}
                github={project.github}
                demo={project.demo}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-muted rounded-lg">
          <p className="text-medium-contrast">No projects to display yet. Check back soon!</p>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </>
  );
}
