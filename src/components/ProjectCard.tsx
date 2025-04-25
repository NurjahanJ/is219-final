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
  // Function to determine tag color based on tag name
  const getTagColor = (tag: string) => {
    const tagLower = tag.toLowerCase();
    if (tagLower.includes('next') || tagLower.includes('react')) {
      return 'bg-secondary-100 text-secondary-800 dark:bg-secondary-800 dark:text-secondary-100';
    } else if (tagLower.includes('tailwind') || tagLower.includes('css')) {
      return 'bg-primary-100 text-primary-800 dark:bg-primary-800 dark:text-primary-100';
    } else if (tagLower.includes('chart') || tagLower.includes('vercel')) {
      return 'bg-accent-100 text-accent-800 dark:bg-accent-800 dark:text-accent-100';
    } else if (tagLower.includes('flutter') || tagLower.includes('dart')) {
      return 'bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100';
    } else {
      return 'bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-100';
    }
  };

  return (
    <Card className="flex flex-col h-full overflow-hidden hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] border-t-4 border-t-primary-400 group">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-xl md:text-2xl text-primary-700 group-hover:text-primary-600 transition-colors">
            {title}
          </CardTitle>
          <div className="p-2 rounded-full bg-primary-50 text-primary-500 group-hover:bg-primary-100 transition-colors">
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
        <CardDescription className="text-medium-contrast text-sm md:text-base">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-3 pt-4 border-t border-border">
        {demo && (
          <Button 
            asChild 
            variant="default" 
            size="sm" 
            className="bg-primary-500 hover:bg-primary-600 text-white focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
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
            className="border-primary-500 text-primary-700 hover:bg-primary-50 dark:hover:bg-primary-900 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
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
