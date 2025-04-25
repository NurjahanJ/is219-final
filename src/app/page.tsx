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
    <div className="min-h-screen bg-background">
      {/* Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* Fullscreen Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-4 z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h1 className="text-primary text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Designing Meaningful <br className="hidden md:block" />
            Digital Experiences
          </h1>
          <p className="text-lg md:text-xl text-medium-contrast max-w-2xl mx-auto">
            Navigating the digital landscape with creativity and purpose. I craft intuitive interfaces and engaging experiences that connect, inspire, and deliver results.
          </p>
          <div className="pt-8">
            <Button asChild size="lg" className="text-base bg-primary hover:bg-primary-600 text-white shadow-lg transition-all duration-300 hover:scale-105">
              <Link href="/projects">Explore My Work</Link>
            </Button>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
              <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </section>

      {/* About Me Section - Scroll-based with 2-column layout */}
      <section className="relative min-h-screen flex items-center px-4 py-16 md:py-24 z-10 bg-gradient-to-b from-background to-primary-50">
        <div className="container mx-auto">
          <h2 className="text-primary text-3xl md:text-4xl font-bold mb-16 text-center">About Me</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Photo Column */}
            <div className="order-2 md:order-1 flex justify-center">
              <div className="relative rounded-2xl overflow-hidden border-4 border-primary-200 shadow-xl w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                {/* Placeholder or actual image */}
                <img 
                  src="/profile-placeholder.jpg" 
                  alt="Nurjahan Jhorna" 
                  className="object-cover w-full h-full"
                  onError={(e) => {
                    // Fallback if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center text-5xl md:text-6xl font-bold text-primary-500 bg-primary-100 bg-opacity-80">
                  NJ
                </div>
                
                {/* Nature-inspired decorative elements */}
                <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-accent-200 rounded-full opacity-20"></div>
                <div className="absolute -top-2 -left-2 w-16 h-16 bg-secondary-300 rounded-full opacity-20"></div>
              </div>
            </div>
            
            {/* Content Column */}
            <div className="order-1 md:order-2">
              <div className="bg-white bg-opacity-70 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-primary-100 shadow-lg">
                <h3 className="text-primary-700 text-2xl font-semibold mb-4">Nurjahan Jhorna</h3>
                <p className="text-primary-800 font-medium mb-4">Web & Information Systems Student</p>
                <p className="text-medium-contrast mb-6">
                  I'm passionate about creating intuitive and visually appealing digital experiences that connect with users on a meaningful level. With a focus on thoughtful design and clean code, I craft solutions that are both beautiful and functional.
                </p>
                <p className="text-medium-contrast mb-6">
                  My approach combines technical expertise with an explorer's mindset—always curious, always learning, and always seeking new paths to solve complex problems in elegant ways.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">Next.js</span>
                  <span className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium">React</span>
                  <span className="px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-medium">TypeScript</span>
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">UI/UX Design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto space-y-16 px-4 py-16 relative z-10">
        {/* My Journey Section */}
        <section id="journey" className="py-16">
          <div className="text-center mb-16">
            <h2 className="text-primary text-3xl md:text-4xl font-bold mb-6">My Journey</h2>
            <p className="text-lg text-medium-contrast max-w-3xl mx-auto">
              Exploring the path that has shaped my skills and perspective in the digital world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Education Card */}
            <article className="bg-card rounded-xl shadow-md p-6 border-t-4 border-t-primary-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary-100 rounded-full text-primary">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-primary">Education</h3>
              </div>
              <p className="text-medium-contrast">
                Currently pursuing a degree in Web & Information Systems, where I'm building a strong foundation in both the technical and design aspects of web development. My coursework includes UX design principles, web programming, and information architecture.  
              </p>
            </article>
            
            {/* Development Card */}
            <article className="bg-card rounded-xl shadow-md p-6 border-t-4 border-t-secondary-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-secondary-100 rounded-full text-secondary">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-secondary">Development</h3>
              </div>
              <p className="text-medium-contrast">
                Continuously expanding my development skills through hands-on projects and self-directed learning. I'm proficient in HTML, CSS, JavaScript, and React, and I'm always exploring new technologies to add to my toolkit. I enjoy the problem-solving aspect of coding and the satisfaction of building functional, responsive websites.
              </p>
            </article>
            
            {/* Design Card */}
            <article className="bg-card rounded-xl shadow-md p-6 border-t-4 border-t-accent-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-accent-100 rounded-full text-accent">
                  <Palette className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-accent">Design</h3>
              </div>
              <p className="text-medium-contrast">
                Developing my UX/UI design skills through coursework and self-directed learning. I'm passionate about creating user-centered designs that combine aesthetics with functionality, using tools like Figma to bring my ideas to life.
              </p>
            </article>
          </div>
        </section>
        
        {/* Projects Section */}
        <section id="projects" className="py-16">
          <div className="text-center mb-16">
            <h2 className="text-primary text-3xl md:text-4xl font-bold mb-6">My Projects</h2>
            <p className="text-lg text-medium-contrast max-w-3xl mx-auto">
              Explore my latest work showcasing my skills in web development, design, and problem-solving.
            </p>
          </div>
          
          <ProjectsAnimation projects={projects} />
        </section>
      </main>
    </div>
  );
}
