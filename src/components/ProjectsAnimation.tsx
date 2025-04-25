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
        <div className="max-w-full mx-auto overflow-x-auto pb-4">
          <div className="flex flex-nowrap gap-6 px-6 md:px-8 justify-center w-fit mx-auto">
            {projects.map((project, index) => (
              <div 
                key={`${project.title}-${index}`} 
                className={`opacity-0 flex-shrink-0 w-full max-w-sm ${mounted ? 'animate-fade-in' : ''}`}
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
