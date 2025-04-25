"use client";

import { Project } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectsAnimationProps {
  projects: Project[];
}

export function ProjectsAnimation({ projects }: ProjectsAnimationProps) {
  const [mounted, setMounted] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isTouching, setIsTouching] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Check if arrows should be visible based on scroll position
  const checkArrowVisibility = () => {
    if (!scrollContainerRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setShowLeftArrow(scrollLeft > 20);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 20);
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkArrowVisibility);
      // Initial check
      checkArrowVisibility();
    }
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', checkArrowVisibility);
      }
    };
  }, [mounted]);

  // Handle scroll buttons
  const scrollProjects = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const scrollAmount = container.clientWidth * 0.8;
    const newPosition = direction === 'left' 
      ? container.scrollLeft - scrollAmount 
      : container.scrollLeft + scrollAmount;
    
    container.scrollTo({
      left: newPosition,
      behavior: 'smooth'
    });
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollContainerRef.current) return;
    setIsTouching(true);
    setStartX(e.touches[0].clientX);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isTouching || !scrollContainerRef.current) return;
    const x = e.touches[0].clientX;
    const distance = startX - x;
    scrollContainerRef.current.scrollLeft = scrollLeft + distance;
  };

  const handleTouchEnd = () => {
    setIsTouching(false);
  };

  return (
    <>
      {projects.length > 0 ? (
        <div className="relative max-w-full mx-auto pb-4">
          {/* Mobile scroll indicators */}
          <div className="md:hidden flex justify-center mb-2 gap-1.5">
            {projects.map((_, index) => (
              <div 
                key={`indicator-${index}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${index === 0 ? 'w-6 bg-indigo-600 dark:bg-indigo-400' : 'w-1.5 bg-slate-300 dark:bg-slate-600'}`}
              />
            ))}
          </div>
          
          {/* Left scroll button - only visible on desktop */}
          {showLeftArrow && (
            <button 
              onClick={() => scrollProjects('left')}
              className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-slate-800/80 rounded-full p-2 shadow-md hover:bg-white dark:hover:bg-slate-700 transition-all"
              aria-label="Scroll projects left"
            >
              <ChevronLeft className="h-5 w-5 text-indigo-700 dark:text-indigo-300" />
            </button>
          )}
          
          {/* Right scroll button - only visible on desktop */}
          {showRightArrow && (
            <button 
              onClick={() => scrollProjects('right')}
              className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-slate-800/80 rounded-full p-2 shadow-md hover:bg-white dark:hover:bg-slate-700 transition-all"
              aria-label="Scroll projects right"
            >
              <ChevronRight className="h-5 w-5 text-indigo-700 dark:text-indigo-300" />
            </button>
          )}
          
          {/* Project cards container with touch events for mobile */}
          <div 
            ref={scrollContainerRef}
            className="flex flex-nowrap gap-6 px-6 md:px-8 justify-start md:justify-center w-full overflow-x-auto scrollbar-hide"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {projects.map((project, index) => (
              <div 
                key={`${project.title}-${index}`} 
                className={`opacity-0 flex-shrink-0 w-full max-w-[85vw] md:max-w-sm ${mounted ? 'animate-fade-in' : ''}`}
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
        /* Hide scrollbar for cleaner mobile experience */
        .scrollbar-hide {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;  /* Chrome, Safari and Opera */
        }
      `}</style>
    </>
  );
}
