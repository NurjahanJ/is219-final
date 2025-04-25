"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ProjectsAnimation } from "@/components/ProjectsAnimation";
import { projects } from "@/lib/projects";
import { Compass, Code, Palette } from "lucide-react";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animated background effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

    // Create particles
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
    }> = [];

    const colors = ["#2f4f4f", "#87ceeb", "#c2b280"];
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 5 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, "rgba(47, 79, 79, 0.05)"); // Forest Green with opacity
      gradient.addColorStop(1, "rgba(135, 206, 235, 0.05)"); // Sky Blue with opacity
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      for (const particle of particles) {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1;
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color + "20"; // Add transparency
        ctx.fill();
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
    };
  }, []);

  return (
    <div className="min-h-screen pt-16 md:pt-20">
      {/* Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* Fullscreen Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-4 z-10 bg-gradient-to-b from-slate-50 to-indigo-50 dark:from-slate-900 dark:to-indigo-950">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="mb-6">
            <span className="inline-block px-4 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-medium mb-4">Web & Information Systems</span>
          </div>
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-700 dark:from-indigo-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent mb-6">
              Nurjahan Jhorna
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-8">
              UX Designer & Frontend Developer
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
              Guiding the digital journey with clarity and insight. I create thoughtful interfaces and knowledge-rich experiences that educate, illuminate, and inspire understanding.
            </p>
          </div>
          <div className="pt-8">
            <Button asChild size="lg" className="text-base bg-indigo-700 hover:bg-indigo-800 dark:bg-indigo-600 dark:hover:bg-indigo-700 text-white shadow-md transition-all duration-300">
              <Link href="/#projects">Explore My Work</Link>
            </Button>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
              <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </section>

      <main className="container mx-auto space-y-16 px-4 py-16 relative z-10">
        {/* My Journey Section */}
        <section id="journey" className="py-16">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="h-px w-12 bg-indigo-300 mr-4"></div>
              <h2 className="text-indigo-900 dark:text-indigo-300 text-3xl md:text-4xl font-serif mb-6">My Journey</h2>
              <div className="h-px w-12 bg-indigo-300 ml-4"></div>
            </div>
            <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto font-light">
              The path of knowledge that has shaped my understanding and perspective in the digital realm.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-6 border-l-4 border-l-indigo-600 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-full text-indigo-700 dark:text-indigo-300">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-medium text-indigo-800 dark:text-indigo-300 font-serif">Education</h3>
              </div>
              <p className="text-slate-700 leading-relaxed">
                Currently pursuing a degree in Web & Information Systems, where I'm building a strong foundation in both the technical and design aspects of web development. My coursework includes UX design principles, web programming, and information architecture.  
              </p>
            </article>
            
            {/* Development Card */}
            <article className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-6 border-l-4 border-l-purple-600 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full text-purple-700 dark:text-purple-300">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-medium text-purple-800 dark:text-purple-300 font-serif">Development</h3>
              </div>
              <p className="text-slate-700 leading-relaxed">
                Continuously expanding my development skills through hands-on projects and self-directed learning. I'm proficient in HTML, CSS, JavaScript, and React, and I'm always exploring new technologies to add to my toolkit. I enjoy the problem-solving aspect of coding and the satisfaction of building functional, responsive websites.
              </p>
            </article>
            
            {/* Design Card */}
            <article className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-6 border-l-4 border-l-slate-600 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-slate-100 dark:bg-slate-700 rounded-full text-slate-700 dark:text-slate-300">
                  <Palette className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-medium text-slate-800 dark:text-slate-300 font-serif">Design</h3>
              </div>
              <p className="text-slate-700 leading-relaxed">
                Developing my UX/UI design skills through coursework and self-directed learning. I'm passionate about creating user-centered designs that combine aesthetics with functionality, using tools like Figma to bring my ideas to life.
              </p>
            </article>
          </div>
        </section>
        
        {/* Projects Section */}
        <section id="projects" className="py-16 md:py-24 bg-slate-100 dark:bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-4">
              <div className="h-px w-12 bg-indigo-300 mr-4"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-indigo-800 dark:text-indigo-300">My Playground</h2>
              <div className="h-px w-12 bg-indigo-300 ml-4"></div>
            </div>
            <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto font-light mb-12">
              Discover my collection of works that demonstrate my approach to problem-solving and knowledge application.
            </p>
          </div>
          
          <ProjectsAnimation projects={projects} />
        </section>
      </main>
    </div>
  );
}
