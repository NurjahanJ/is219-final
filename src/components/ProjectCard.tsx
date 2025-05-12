"use client";

import { ExternalLink, Github, Folder } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
}

export function ProjectCard({ title, description, tags, github, demo }: ProjectCardProps) {
  // Function to determine tag color based on tag name - using Sage archetype colors
  const getTagColor = (tag: string) => {
    const tagLower = tag.toLowerCase();
    if (tagLower.includes('next') || tagLower.includes('react')) {
      return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200';
    } else if (tagLower.includes('tailwind') || tagLower.includes('css')) {
      return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
    } else if (tagLower.includes('chart') || tagLower.includes('vercel')) {
      return 'bg-slate-200 text-slate-800 dark:bg-slate-800 dark:text-slate-200';
    } else if (tagLower.includes('flutter') || tagLower.includes('dart')) {
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
    } else if (tagLower.includes('mobile')) {
      return 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200';
    } else {
      return 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200';
    }
  };

  return (
    <Card className="flex flex-col h-full overflow-hidden hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] border group bg-[rgba(10,17,40,0.8)] backdrop-blur-sm border-sky-500/30 hover:border-sky-400/50 shadow-lg">
      <CardHeader className="pb-3 relative">
        {/* Subtle star background for cards */}
        <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
          {Array.from({ length: 8 }).map((_, i) => (
            <div 
              key={`star-card-${i}`}
              className="absolute rounded-full bg-white"
              style={{
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.7 + 0.3
              }}
            />
          ))}
        </div>
        
        <div className="flex items-start justify-between relative z-10">
          <CardTitle className="text-xl md:text-2xl text-sky-300 group-hover:text-sky-200 transition-colors font-sans">
            {title}
          </CardTitle>
          <div className="p-2 rounded-full bg-sky-900/40 text-sky-400 group-hover:bg-sky-800/60 transition-colors">
            <Folder className="h-5 w-5" aria-hidden="true" />
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-3" aria-label="Project technologies">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[rgba(10,17,40,0.9)] text-sky-300 border border-sky-500/30 transition-transform duration-300 hover:scale-105 hover:bg-sky-900/30"
              role="listitem"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-slate-300 text-sm md:text-base font-light leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-3 pt-4 border-t border-sky-500/20">
        {demo && (
          <Button 
            asChild 
            variant="default" 
            size="sm" 
            className="bg-sky-600 hover:bg-sky-500 text-white focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
          >
            <Link 
              href={demo} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center"
              aria-label={`View ${title} demo`}
            >
              <ExternalLink className="mr-1 h-4 w-4" aria-hidden="true" />
              View Demo
            </Link>
          </Button>
        )}
        {github && (
          <Button 
            asChild 
            variant="outline" 
            size="sm" 
            className="border-sky-500/50 text-sky-300 hover:bg-sky-900/30 focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
          >
            <Link 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center"
              aria-label={`View ${title} GitHub repository`}
            >
              <Github className="mr-1 h-4 w-4" aria-hidden="true" />
              GitHub
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
