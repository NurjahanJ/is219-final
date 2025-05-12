"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Code, Palette, Compass } from "lucide-react";

export default function About() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  
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
      </div>
      <main className="relative container mx-auto px-4 py-16 md:py-24">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Header Section */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="space-y-4 mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-blue-300 to-blue-400 bg-clip-text text-transparent" style={{
                textShadow: '0 0 20px rgba(147, 197, 253, 0.3), 0 0 40px rgba(147, 197, 253, 0.1)'
              }}>
                Nurjahan Jhorna
              </h1>
              <p className="text-2xl md:text-3xl text-blue-300 font-light">
                Digital Explorer & Frontend Developer
              </p>
            </div>
            
            <div className="space-y-6 mb-12">
              <p className="text-xl leading-relaxed text-slate-300">
                As a Web & Information Systems student at New Jersey Institute of Technology, I'm at a pivotal point in my academic journey where theory transforms into wisdom. My journey began with a curiosity about how technology can create meaningful experiences, and I'm particularly drawn to the intersection of design and functionality.
              </p>
              
              <p className="text-xl leading-relaxed text-slate-300">
                Through my academic projects, I've developed a thoughtful approach to front-end technologies like HTML, CSS, JavaScript, and React. I value the analytical process of translating complex concepts into responsive, accessible websites that provide meaningful learning experiences. Each project is an expedition into new possibilities, where I apply my growing toolkit to craft digital experiences that resonate and inspire.
              </p>
              
              <p className="text-xl leading-relaxed text-slate-300">
                I'm proficient with design tools like Figma, which I use to prototype and refine my ideas before implementation. This methodical approach helps me create cohesive experiences that balance clarity with functionality. I'm dedicated to continuous learning and growth, always seeking deeper understanding and opportunities to share insights through my work.
              </p>
            </div>
            
            <div className="flex gap-6">
              <Link 
                href="/projects" 
                className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl font-medium flex items-center gap-2 group"
              >
                <span>Explore My Work</span>
                <Compass className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
              </Link>
              <Link 
                href="/" 
                className="px-8 py-3 bg-[rgba(10,17,40,0.5)] hover:bg-[rgba(10,17,40,0.7)] backdrop-blur-sm rounded-lg text-blue-300 hover:text-blue-200 border border-blue-500/20 transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
              >
                Back to Base Camp
              </Link>
            </div>
          </div>
        </div>

        {/* Knowledge & Tools Section */}
        <div className="max-w-6xl mx-auto mt-32">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-300 mb-16">
            Knowledge & Tools
          </h2>
          <div className="bg-[rgba(10,17,40,0.7)] backdrop-blur-sm rounded-xl shadow-xl p-8 border border-blue-500/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-[rgba(10,17,40,0.5)] p-8 rounded-xl border border-blue-500/20 shadow-lg hover:shadow-blue-500/5 transition-all duration-500 transform hover:scale-[1.01] hover:bg-[rgba(10,17,40,0.6)]">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-blue-600/20 rounded-full text-blue-400">
                    <Code className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-medium text-blue-300">Development</h3>
                </div>
                <ul className="space-y-4 text-slate-200">
                  <li className="flex items-center p-3 hover:bg-blue-900/20 rounded-lg transition-colors">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-4"></span>
                    <span>HTML, CSS, JavaScript</span>
                  </li>
                  <li className="flex items-center p-3 hover:bg-blue-900/20 rounded-lg transition-colors">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-4"></span>
                    <span>React & Next.js</span>
                  </li>
                  <li className="flex items-center p-3 hover:bg-blue-900/20 rounded-lg transition-colors">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-4"></span>
                    <span>TypeScript</span>
                  </li>
                  <li className="flex items-center p-3 hover:bg-blue-900/20 rounded-lg transition-colors">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-4"></span>
                    <span>Responsive Web Design</span>
                  </li>
                  <li className="flex items-center p-3 hover:bg-blue-900/20 rounded-lg transition-colors">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-4"></span>
                    <span>Git Version Control</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[rgba(10,17,40,0.5)] p-8 rounded-xl border border-blue-500/20 shadow-lg hover:shadow-blue-500/5 transition-all duration-500 transform hover:scale-[1.01] hover:bg-[rgba(10,17,40,0.6)]">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-blue-600/20 rounded-full text-blue-400">
                    <Palette className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-medium text-blue-300">Design</h3>
                </div>
                <ul className="space-y-4 text-slate-200">
                  <li className="flex items-center p-3 hover:bg-blue-900/20 rounded-lg transition-colors">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-4"></span>
                    <span>Figma</span>
                  </li>
                  <li className="flex items-center p-3 hover:bg-blue-900/20 rounded-lg transition-colors">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-4"></span>
                    <span>UI/UX Design Principles</span>
                  </li>
                  <li className="flex items-center p-3 hover:bg-blue-900/20 rounded-lg transition-colors">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-4"></span>
                    <span>Wireframing & Prototyping</span>
                  </li>
                  <li className="flex items-center p-3 hover:bg-blue-900/20 rounded-lg transition-colors">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-4"></span>
                    <span>Visual Design</span>
                  </li>
                  <li className="flex items-center p-3 hover:bg-blue-900/20 rounded-lg transition-colors">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-4"></span>
                    <span>Tailwind CSS</span>
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

