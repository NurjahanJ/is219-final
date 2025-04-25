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
    <Card className="flex flex-col h-full overflow-hidden hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] border-l-4 border-l-indigo-600 dark:border-l-indigo-400 group bg-white dark:bg-slate-800">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-xl md:text-2xl text-indigo-800 dark:text-indigo-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-200 transition-colors font-serif">
            {title}
          </CardTitle>
          <div className="p-2 rounded-full bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-800/60 transition-colors">
            <Folder className="h-5 w-5" aria-hidden="true" />
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-3" aria-label="Project technologies">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTagColor(tag)} transition-transform duration-300 hover:scale-105`}
              role="listitem"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-slate-700 dark:text-slate-300 text-sm md:text-base font-light leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-3 pt-4 border-t border-slate-200 dark:border-slate-700">
        {demo && (
          <Button 
            asChild 
            variant="default" 
            size="sm" 
            className="bg-indigo-700 hover:bg-indigo-800 dark:bg-indigo-600 dark:hover:bg-indigo-700 text-white focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
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
            className="border-indigo-500 dark:border-indigo-400 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
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
