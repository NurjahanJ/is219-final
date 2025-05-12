"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ProjectsAnimation } from "@/components/ProjectsAnimation";
import { projects } from "@/lib/projects";
import { Compass, Code, Palette, ChevronDown } from "lucide-react";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [headlineVisible, setHeadlineVisible] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);
  const [compassBounce, setCompassBounce] = useState(false);

  // Animation timing effects
  useEffect(() => {
    // Staggered animations for elements
    const headlineTimer = setTimeout(() => setHeadlineVisible(true), 300);
    const buttonTimer = setTimeout(() => setButtonVisible(true), 800);
    const compassTimer = setTimeout(() => setCompassBounce(true), 1500);
    
    return () => {
      clearTimeout(headlineTimer);
      clearTimeout(buttonTimer);
      clearTimeout(compassTimer);
    };
  }, []);

  // Animated star field background effect
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

    // Create stars
    const stars: Array<{
      x: number;
      y: number;
      size: number;
      opacity: number;
      pulse: number;
      pulseSpeed: number;
    }> = [];
    
    // Create shooting stars
    const shootingStars: Array<{
      x: number;
      y: number;
      length: number;
      speed: number;
      angle: number;
      opacity: number;
      active: boolean;
      trail: Array<{x: number, y: number, opacity: number}>
      lifetime: number;
      maxLifetime: number;
    }> = [];
    
    // Initialize shooting stars (inactive initially)
    for (let i = 0; i < 5; i++) {
      shootingStars.push({
        x: 0,
        y: 0,
        length: 0,
        speed: 0,
        angle: 0,
        opacity: 0,
        active: false,
        trail: [],
        lifetime: 0,
        maxLifetime: 0
      });
    }

    // Function to create a new shooting star
    const createShootingStar = (star: typeof shootingStars[0]) => {
      // Start position - anywhere in the top half of the screen
      star.x = Math.random() * canvas.width;
      star.y = Math.random() * (canvas.height * 0.5);
      
      // Angle - slightly downward trajectory (between 30° and 60°)
      star.angle = Math.PI / 6 + Math.random() * (Math.PI / 6);
      if (Math.random() > 0.5) star.angle = Math.PI - star.angle; // 50% chance to go left instead of right
      
      // Speed and length
      star.speed = 5 + Math.random() * 10;
      star.length = 50 + Math.random() * 80;
      star.opacity = 0.7 + Math.random() * 0.3;
      star.active = true;
      star.trail = [];
      star.lifetime = 0;
      star.maxLifetime = 70 + Math.random() * 50; // Frames the star will live
    };

    // Create different types of stars
    const starCount = Math.min(window.innerWidth / 3, 200); // Responsive star count
    
    for (let i = 0; i < starCount; i++) {
      const size = Math.random() * 2.5;
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: size,
        opacity: Math.random() * 0.8 + 0.2,
        pulse: 0,
        pulseSpeed: Math.random() * 0.02 + 0.005
      });
    }
    
    // Create a few larger stars that pulse more dramatically
    for (let i = 0; i < 15; i++) {
      const size = Math.random() * 1.5 + 2;
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: size,
        opacity: Math.random() * 0.5 + 0.5,
        pulse: Math.random() * Math.PI * 2, // Random start position in pulse cycle
        pulseSpeed: Math.random() * 0.03 + 0.01
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw deep space background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, "#001233"); // Deep navy blue
      gradient.addColorStop(0.5, "#001845"); // Slightly lighter navy
      gradient.addColorStop(1, "#000814"); // Almost black
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Add subtle nebula effect
      const nebulaGradient = ctx.createRadialGradient(
        canvas.width * 0.8, canvas.height * 0.2, 0,
        canvas.width * 0.8, canvas.height * 0.2, canvas.width * 0.6
      );
      nebulaGradient.addColorStop(0, "rgba(75, 0, 130, 0.03)"); // Indigo with low opacity
      nebulaGradient.addColorStop(0.5, "rgba(138, 43, 226, 0.02)"); // Purple with low opacity
      nebulaGradient.addColorStop(1, "rgba(0, 0, 0, 0)"); // Transparent
      ctx.fillStyle = nebulaGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      for (const star of stars) {
        // Update star pulse
        star.pulse += star.pulseSpeed;
        
        // Calculate current opacity based on pulse
        const pulseOpacity = star.opacity * (0.7 + 0.3 * Math.sin(star.pulse));
        
        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        
        // Create a radial gradient for the star glow
        const glow = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, star.size * 2
        );
        glow.addColorStop(0, `rgba(255, 255, 255, ${pulseOpacity})`);
        glow.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.fillStyle = glow;
        ctx.fill();
        
        // Draw the star core
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${pulseOpacity + 0.2})`;
        ctx.fill();
      }
      
      // Randomly create new shooting stars
      if (Math.random() < 0.01) { // 1% chance each frame to create a new shooting star
        const inactiveStar = shootingStars.find(star => !star.active);
        if (inactiveStar) {
          createShootingStar(inactiveStar);
        }
      }
      
      // Update and draw shooting stars
      for (const star of shootingStars) {
        if (!star.active) continue;
        
        // Update position
        star.x += Math.cos(star.angle) * star.speed;
        star.y += Math.sin(star.angle) * star.speed;
        
        // Add to trail
        star.trail.unshift({ x: star.x, y: star.y, opacity: star.opacity });
        
        // Limit trail length
        if (star.trail.length > 20) {
          star.trail.pop();
        }
        
        // Draw shooting star head
        ctx.beginPath();
        const headGradient = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, 3
        );
        headGradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
        headGradient.addColorStop(1, `rgba(200, 255, 255, 0)`);
        ctx.fillStyle = headGradient;
        ctx.arc(star.x, star.y, 2, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw trail
        if (star.trail.length > 1) {
          ctx.beginPath();
          ctx.moveTo(star.trail[0].x, star.trail[0].y);
          
          // Draw the main trail line
          for (let i = 1; i < star.trail.length; i++) {
            ctx.lineTo(star.trail[i].x, star.trail[i].y);
          }
          
          // Create gradient for trail
          const trailGradient = ctx.createLinearGradient(
            star.trail[0].x, star.trail[0].y,
            star.trail[star.trail.length - 1].x, star.trail[star.trail.length - 1].y
          );
          
          trailGradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
          trailGradient.addColorStop(0.3, `rgba(120, 220, 255, ${star.opacity * 0.6})`);
          trailGradient.addColorStop(1, 'rgba(70, 120, 255, 0)');
          
          ctx.strokeStyle = trailGradient;
          ctx.lineWidth = 2;
          ctx.stroke();
          
          // Add glow effect to trail
          ctx.lineWidth = 4;
          ctx.strokeStyle = `rgba(255, 255, 255, ${star.opacity * 0.3})`;
          ctx.stroke();
        }
        
        // Check if star is out of bounds or lifetime exceeded
        star.lifetime++;
        if (
          star.x < 0 ||
          star.x > canvas.width ||
          star.y < 0 ||
          star.y > canvas.height ||
          star.lifetime > star.maxLifetime
        ) {
          star.active = false;
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Animated Star Background Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* Fullscreen Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center px-4 z-10">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          {/* Explorer Badge removed */}
          
          {/* Main Headline */}
          <div className={`max-w-3xl mx-auto text-center transition-all duration-700 delay-100 transform ${headlineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight bg-gradient-to-r from-blue-300 to-blue-400 bg-clip-text text-transparent ${headlineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-1000 ease-out`} 
              style={{ textShadow: '0 0 20px rgba(147, 197, 253, 0.3), 0 0 40px rgba(147, 197, 253, 0.1)' }}
            >
              Nurjahan Jhorna
            </h1>
            <p 
              className="text-xl md:text-2xl text-blue-300 mb-8"
              style={{
                textShadow: '0 0 10px rgba(34, 211, 238, 0.3)'
              }}
            >
              UX Designer & Frontend Developer
            </p>
            <p className="text-lg text-white/90 max-w-2xl mx-auto font-light mb-10">
              Crafting intuitive digital experiences through thoughtful design and clean code. Transforming ideas into engaging, accessible web solutions that make an impact.
            </p>
            
            {/* Glowing Button */}
            <div className={`flex flex-wrap gap-6 justify-center transition-all duration-700 delay-300 transform ${buttonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <Button asChild size="lg" className="rounded-full px-8 py-6 text-base bg-transparent hover:bg-transparent relative group overflow-hidden">
                <Link href="/about" className="relative z-10 text-white font-medium text-lg">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></span>
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full blur-md group-hover:blur-lg transition-all duration-500 animate-pulse"></span>
                  <span className="relative z-20 flex items-center justify-center gap-2 text-white">
                    Explore Now
                  </span>
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 py-6 text-base border-cyan-500/30 text-white hover:text-cyan-400 hover:bg-slate-900/50 hover:border-cyan-400/50">
                <Link href="/contact">Contact</Link>
              </Button>
            </div>
          </div>
          
          {/* Bouncing Compass Icon */}
          <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 ${compassBounce ? 'animate-bounce' : 'opacity-0'} transition-opacity duration-500`}>
            <div className="bg-slate-800/70 p-3 rounded-full border border-slate-600/50 backdrop-blur-sm">
              <ChevronDown className="h-6 w-6 text-cyan-400" />
              <span className="sr-only">Scroll down</span>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto space-y-16 px-4 py-16 relative z-10">
        {/* My Journey Section */}
        <section id="journey" className="py-12 md:py-20 relative overflow-hidden">
          {/* Subtle stars in journey section */}
          <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
            {Array.from({ length: 25 }).map((_, i) => (
              <div 
                key={`star-journey-${i}`}
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
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="h-px w-12 bg-blue-500/50 mr-4"></div>
              <h2 
                className="text-3xl md:text-4xl font-bold text-blue-300 font-sans"
                style={{
                  textShadow: '0 0 10px rgba(34, 211, 238, 0.5), 0 0 20px rgba(34, 211, 238, 0.3)'
                }}
              >
                The Expedition
              </h2>
              <div className="h-px w-12 bg-cyan-500/70 ml-4"></div>
            </div>
            <p className="text-lg text-blue-300 max-w-3xl mx-auto text-center font-light mb-12">
              Navigating the digital wilderness through continuous exploration, discovery, and creation of innovative web experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Education Card */}
            <article className="bg-[rgba(10,17,40,0.7)] backdrop-blur-sm rounded-xl shadow-md p-6 border border-blue-500/20 hover:shadow-blue-500/5 hover:translate-y-[-2px] transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-600/20 rounded-full text-blue-400">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-medium text-blue-300 font-sans">Navigation</h3>
              </div>
              <p className="text-slate-200 leading-relaxed font-light">
                Navigating the complex terrain of Web & Information Systems with strategic precision. My methodical approach integrates UX research, information architecture, and accessibility standards to create intuitive digital pathways that guide users through seamless experiences with clarity and purpose.
              </p>
            </article>
            
            {/* Development Card */}
            <article className="bg-[rgba(10,17,40,0.7)] backdrop-blur-sm rounded-xl shadow-md p-6 border border-blue-500/20 hover:shadow-blue-500/5 hover:translate-y-[-2px] transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-600/20 rounded-full text-blue-400">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-medium text-blue-300 font-sans">Development</h3>
              </div>
              <p className="text-slate-200 leading-relaxed font-light">
                Engineering robust frontend solutions with modern web technologies including React, TypeScript, and Next.js. My development approach emphasizes clean architecture, performance optimization, and responsive design principles to create scalable applications that deliver exceptional user experiences across all devices.
              </p>
            </article>
            
            {/* Design Card */}
            <article className="bg-[rgba(10,17,40,0.7)] backdrop-blur-sm rounded-xl shadow-md p-6 border border-blue-500/20 hover:shadow-blue-500/5 hover:translate-y-[-2px] transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-600/20 rounded-full text-blue-400">
                  <Palette className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-medium text-blue-300 font-sans">Design</h3>
              </div>
              <p className="text-slate-200 leading-relaxed font-light">
                Crafting visually compelling interfaces that balance form and function through systematic design thinking. My process incorporates user research, prototyping, and iterative testing to create cohesive design systems that communicate clearly, evoke appropriate emotions, and guide users intuitively through digital experiences.
              </p>
            </article>
          </div>
        </section>
        
        {/* Projects Section */}
        <section id="projects" className="py-16 md:py-24 bg-[rgba(10,17,40,0.7)] backdrop-blur-sm border-y border-blue-500/20 relative overflow-hidden">
          {/* Subtle stars in projects section */}
          <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
            {Array.from({ length: 30 }).map((_, i) => (
              <div 
                key={`star-projects-${i}`}
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
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex items-center justify-center mb-4">
              <div className="h-px w-12 bg-blue-500/50 mr-4"></div>
              <h2 
                className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-300 to-blue-400 bg-clip-text text-transparent" 
                style={{textShadow: '0 0 20px rgba(147, 197, 253, 0.3), 0 0 40px rgba(147, 197, 253, 0.1)'}} 
              >
                My Playground
              </h2>
              <div className="h-px w-12 bg-cyan-500/70 ml-4"></div>
            </div>
            <p className="text-lg text-blue-300 max-w-3xl mx-auto font-light mb-12">
              Artifacts from my digital expeditions — projects that showcase my approach to exploration, problem-solving, and innovation in the technological wilderness.
            </p>
          </div>
          
          <ProjectsAnimation projects={projects} />
        </section>
      </main>
    </div>
  );
}
