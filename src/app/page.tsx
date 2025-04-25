"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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

      <main className="container mx-auto space-y-16 px-4 py-16 relative z-10">
        {/* Core Principles Section - Explorer Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
          <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-primary">Adventure Guides</CardTitle>
              <CardDescription>Navigate with confidence</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-medium-contrast">
                We chart the course through complex digital terrain, providing expert guidance to help you discover new possibilities and reach your destination.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-secondary hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-secondary">Innovative Pathfinders</CardTitle>
              <CardDescription>Cutting-edge solutions</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-medium-contrast">
                Our team explores the frontiers of technology to create custom solutions that open new horizons and transform how you interact with the digital world.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-accent hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-accent">Reliable Partners</CardTitle>
              <CardDescription>Steadfast support on every journey</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-medium-contrast">
                We stand by your side throughout your expedition, providing dependable support and expertise to overcome challenges and celebrate victories.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Invitation Section - Friendly Call to Action */}
        <div className="text-center space-y-8 py-16">
          <h2 className="text-primary text-3xl font-semibold max-w-3xl mx-auto">
            Ready to embark on your next digital adventure?
          </h2>
          <p className="text-lg text-medium-contrast max-w-2xl mx-auto">
            Join us as we explore new frontiers and discover innovative solutions tailored to your unique journey.
          </p>
          <Button size="lg" className="text-base bg-secondary text-text-dark hover:bg-secondary-600 hover:scale-105 transition-all duration-300">
            Start Your Expedition
          </Button>
        </div>
      </main>
    </div>
  );
}
