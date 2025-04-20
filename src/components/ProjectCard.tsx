"use client";

import { ExternalLink, Github } from "lucide-react";
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
  return (
    <Card className="flex flex-col h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl md:text-2xl text-primary-700">{title}</CardTitle>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent-100 text-accent-800"
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
      <CardFooter className="flex flex-wrap gap-2 pt-4 border-t border-border">
        {demo && (
          <Button 
            asChild 
            variant="default" 
            size="sm" 
            className="bg-primary-500 hover:bg-primary-600 text-white"
          >
            <Link href={demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
              <ExternalLink className="mr-1 h-4 w-4" />
              View Demo
            </Link>
          </Button>
        )}
        {github && (
          <Button 
            asChild 
            variant="outline" 
            size="sm" 
            className="border-primary-500 text-primary-700 hover:bg-primary-50"
          >
            <Link href={github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
              <Github className="mr-1 h-4 w-4" />
              GitHub
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
