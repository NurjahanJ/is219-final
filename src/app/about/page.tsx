"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Mail, Star, Code, Palette, Layout, Users, PenTool, Compass, Map, Mountain, Zap } from "lucide-react";
import portfolioPic from "../../porfolio_pic.jpg";

export default function About() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  
  // Handle card flip
  const handleCardFlip = (index: number) => {
    setFlippedCard(flippedCard === index ? null : index);
  };
  
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0a1128] text-slate-100">
      {/* Starry night sky background */}
      <div className="absolute inset-0 z-0">
        {/* Deep blue gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1128] via-[#1c2e4a] to-[#0a1128]"></div>
        
        {/* Stars - small */}
        <div className="absolute inset-0">
          {Array.from({ length: 100 }).map((_, i) => (
            <div 
              key={`star-sm-${i}`}
              className="absolute rounded-full bg-white"
              style={{
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.7 + 0.3,
                animation: `twinkle ${Math.random() * 5 + 3}s ease-in-out infinite ${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
        
        {/* Stars - medium */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <div 
              key={`star-md-${i}`}
              className="absolute rounded-full bg-white"
              style={{
                width: `${Math.random() * 3 + 2}px`,
                height: `${Math.random() * 3 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.7 + 0.3,
                animation: `twinkle ${Math.random() * 7 + 4}s ease-in-out infinite ${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
        
        {/* Shooting stars animation removed */}
        
        {/* Distant nebula/galaxy effect */}
        <div 
          className="absolute rounded-full opacity-10 blur-2xl"
          style={{
            width: '300px',
            height: '300px',
            top: '30%',
            right: '15%',
            background: 'radial-gradient(circle, rgba(147,112,219,0.5) 0%, rgba(76,104,186,0.3) 50%, rgba(49,46,129,0) 100%)',
          }}
        ></div>
        <div 
          className="absolute rounded-full opacity-10 blur-2xl"
          style={{
            width: '250px',
            height: '250px',
            bottom: '20%',
            left: '10%',
            background: 'radial-gradient(circle, rgba(72,209,204,0.5) 0%, rgba(45,149,150,0.3) 50%, rgba(25,113,120,0) 100%)',
          }}
        ></div>
      </div>
      
      <main className="container mx-auto max-w-6xl relative z-10 pt-24 px-4" id="main-content">
        {/* Header Section with Photo and Intro */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16 mb-20">
          {/* Profile Photo with rough-corner card and neon accent */}
          <div className="relative w-full max-w-sm lg:max-w-md">
            <div className="relative group">
              {/* Rough-edged card effect */}
              <div className="absolute inset-0 bg-zinc-900 rounded-lg transform rotate-1 scale-[1.02] -z-10"></div>
              
              {/* Neon border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 opacity-70 rounded-lg blur-sm transform scale-[1.03] -z-20 group-hover:blur-md group-hover:opacity-80 transition-all duration-500"></div>
              
              {/* Photo container with rugged frame */}
              <div className="relative overflow-hidden rounded-lg bg-zinc-700 p-1">
                {/* Portfolio picture */}
                <div className="aspect-[4/5] w-full rounded-md overflow-hidden">
                  <Image 
                    src={portfolioPic} 
                    alt="Nurjahan Jhorna" 
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                
                {/* Rugged corners */}
                <div className="absolute top-0 left-0 w-12 h-12 bg-zinc-800 transform -translate-x-6 -translate-y-6 rotate-45"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-zinc-800 transform translate-x-8 translate-y-8 rotate-45"></div>
              </div>
            </div>
            
            {/* Social links */}
            <div className="flex justify-center mt-6 gap-4">
              <a href="https://github.com/NurjahanJ" target="_blank" rel="noopener noreferrer" 
                className="p-3 bg-zinc-700 hover:bg-zinc-600 rounded-full transition-colors duration-300 group">
                <Github className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://linkedin.com/in/nurjahan-jhorna" target="_blank" rel="noopener noreferrer" 
                className="p-3 bg-zinc-700 hover:bg-zinc-600 rounded-full transition-colors duration-300 group">
                <Linkedin className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="mailto:contact@example.com" 
                className="p-3 bg-zinc-700 hover:bg-zinc-600 rounded-full transition-colors duration-300 group">
                <Mail className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
          
          {/* Storytelling text with larger spacing */}
          <div className="flex-1 space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 tracking-tight">
                Nurjahan Jhorna
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full mb-6"></div>
              <h2 className="text-xl md:text-2xl text-blue-400 font-medium mb-6">Digital Explorer & Frontend Developer</h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-xl leading-relaxed text-slate-300">
                Venturing through the digital wilderness, I chart new territories in web development and design. My journey began with a curiosity about how technology can create meaningful experiences.              
              </p>
              
              <p className="text-xl leading-relaxed text-slate-300">
                As a Web & Information Systems student, I navigate the intersection of code, design, and user experience—mapping out solutions that are both functional and visually compelling.
              </p>
              
              <p className="text-xl leading-relaxed text-slate-300">
                Each project is an expedition into new possibilities, where I apply my growing toolkit of technologies to craft digital experiences that resonate and inspire.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Link 
                href="/#projects" 
                className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-md transition-all duration-300 shadow-lg shadow-blue-900/20 font-medium flex items-center gap-2 group"
              >
                <span>Explore My Work</span>
                <Compass className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
              </Link>
              <Link 
                href="/" 
                className="px-8 py-3 border-2 border-zinc-600 hover:border-zinc-500 text-slate-200 rounded-md hover:bg-zinc-700/50 transition-all duration-300 font-medium"
              >
                Back to Base Camp
              </Link>
            </div>
          </div>
        </div>

        {/* Main headline removed */}
        
        {/* About Me Section - Explorer Theme */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="h-px w-12 bg-blue-300 dark:bg-blue-600 mr-4"></div>
            <h2 className="text-3xl md:text-4xl font-serif text-center text-blue-400 dark:text-blue-300" id="about" style={{
              textShadow: '0 0 10px rgba(135, 206, 235, 0.5), 0 0 20px rgba(135, 206, 235, 0.3)'
            }}>About Me</h2>
            <div className="h-px w-12 bg-blue-300 dark:bg-blue-600 ml-4"></div>
          </div>
          
          <div className="bg-[rgba(10,17,40,0.7)] backdrop-blur-sm rounded-xl shadow-md p-8 border-l-4 border-l-blue-500 dark:border-l-blue-400 hover:shadow-lg transition-shadow duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-slate-200 mb-4 leading-relaxed font-light">
                  As a Web & Information Systems student, I'm at a pivotal point in my academic journey where theory transforms into wisdom. I'm particularly drawn to the intersection of design and functionality, where I can create digital experiences that are both enlightening and accessible.
                </p>
                <p className="text-slate-200 mb-4 leading-relaxed font-light">
                  My academic projects have allowed me to develop a thoughtful approach to front-end technologies like HTML, CSS, JavaScript, and React. I value the analytical process of translating complex concepts into responsive, accessible websites that provide meaningful learning experiences.
                </p>
              </div>
              <div>
                <p className="text-slate-200 mb-4 leading-relaxed font-light">
                  I'm proficient with design tools like Figma, which I use to prototype and refine my ideas before implementation. This methodical approach helps me create cohesive experiences that balance clarity with functionality.
                </p>
                <p className="text-slate-200 leading-relaxed font-light">
                  I'm dedicated to continuous learning and growth as a developer and designer. My goal is to expand my knowledge while creating digital solutions that illuminate and educate. I approach each project with thoughtful consideration, always seeking deeper understanding and opportunities to share insights through my work.
                </p>
              </div>
            </div>
            <div className="mt-6 flex justify-center">
              <span className="inline-block px-4 py-2 bg-blue-900/30 text-blue-300 border border-blue-500/30 rounded-full text-sm font-medium shadow-inner shadow-blue-500/10">Explorer Mindset</span>
            </div>
          </div>
        </div>
        

        
        {/* Skills Section - Explorer Theme */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="h-px w-12 bg-blue-300 dark:bg-blue-600 mr-4"></div>
            <h2 className="text-3xl md:text-4xl font-serif text-center text-blue-400 dark:text-blue-300" id="skills" style={{
              textShadow: '0 0 10px rgba(135, 206, 235, 0.5), 0 0 20px rgba(135, 206, 235, 0.3)'
            }}>Knowledge & Tools</h2>
            <div className="h-px w-12 bg-blue-300 dark:bg-blue-600 ml-4"></div>
          </div>
          
          <div className="bg-[rgba(10,17,40,0.7)] backdrop-blur-sm rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[rgba(10,17,40,0.5)] p-6 rounded-xl border border-blue-500/20 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-900/50 rounded-full text-blue-300">
                    <Code className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-medium text-blue-300 font-serif">Development</h3>
                </div>
                <ul className="space-y-3 text-slate-200">
                  <li className="flex items-center p-2 hover:bg-blue-900/20 rounded-lg transition-colors">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    <span className="font-light">HTML, CSS, JavaScript</span>
                  </li>
                  <li className="flex items-center p-2 hover:bg-blue-900/20 rounded-lg transition-colors">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    <span className="font-light">React & Next.js</span>
                  </li>
                  <li className="flex items-center p-2 hover:bg-blue-900/20 rounded-lg transition-colors">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    <span className="font-light">TypeScript</span>
                  </li>
                  <li className="flex items-center p-2 hover:bg-blue-900/20 rounded-lg transition-colors">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    <span className="font-light">Responsive Web Design</span>
                  </li>
                  <li className="flex items-center p-2 hover:bg-blue-900/20 rounded-lg transition-colors">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    <span className="font-light">Git Version Control</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[rgba(10,17,40,0.5)] p-6 rounded-xl border border-blue-500/20 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-900/50 rounded-full text-blue-300">
                    <Palette className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-medium text-blue-300 font-serif">Design</h3>
                </div>
                <ul className="space-y-3 text-slate-200">
                  <li className="flex items-center p-2 hover:bg-blue-900/20 rounded-lg transition-colors">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    <span className="font-light">Figma</span>
                  </li>
                  <li className="flex items-center p-2 hover:bg-blue-900/20 rounded-lg transition-colors">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    <span className="font-light">UI/UX Design Principles</span>
                  </li>
                  <li className="flex items-center p-2 hover:bg-blue-900/20 rounded-lg transition-colors">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    <span className="font-light">Wireframing & Prototyping</span>
                  </li>
                  <li className="flex items-center p-2 hover:bg-blue-900/20 rounded-lg transition-colors">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    <span className="font-light">Visual Design</span>
                  </li>
                  <li className="flex items-center p-2 hover:bg-blue-900/20 rounded-lg transition-colors">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    <span className="font-light">Tailwind CSS</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        

      </main>
    </div>
  );
}
