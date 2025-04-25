import Link from "next/link";
import { Github, Linkedin, Mail, Star, Code, Palette, Layout, Users, PenTool } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen px-4 py-12 md:py-20 pt-16 md:pt-24 relative">
      {/* Decorative background elements */}
      <div className="absolute top-1/3 left-1/4 text-indigo-200 dark:text-indigo-800 opacity-10" aria-hidden="true">
        <Star className="w-16 h-16" />
      </div>
      <div className="absolute bottom-1/4 right-1/4 bg-indigo-100 dark:bg-indigo-800 w-32 h-32 rounded-full opacity-20" aria-hidden="true"></div>
      <div className="absolute top-1/2 right-1/3 bg-purple-100 dark:bg-purple-800 w-24 h-24 rounded-full opacity-10" aria-hidden="true"></div>
      
      <main className="container mx-auto max-w-5xl relative z-10" id="main-content">
        {/* Header Section with Photo and Intro */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 mb-16 bg-gradient-to-br from-indigo-50 dark:from-indigo-950 to-transparent p-8 rounded-2xl border border-indigo-100 dark:border-indigo-800">
          {/* Profile Photo - Using a placeholder */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 overflow-hidden rounded-full border-4 border-indigo-200 dark:border-indigo-700 shadow-xl bg-white dark:bg-slate-800 flex items-center justify-center transition-transform duration-300" aria-hidden="true">
            <div className="text-4xl md:text-5xl font-serif text-indigo-700 dark:text-indigo-300">NJ</div>
            {/* Decorative elements */}
            <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20"></div>
            <div className="absolute -top-2 -left-2 w-12 h-12 bg-indigo-200 dark:bg-indigo-800 rounded-full opacity-20"></div>
          </div>
          
          {/* Name and Intro */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-indigo-900 dark:text-indigo-300 text-4xl md:text-5xl font-serif mb-4 relative inline-block">
              Nurjahan Jhorna
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-transparent rounded-full"></span>
            </h1>
            <h2 className="text-purple-700 dark:text-purple-400 text-xl md:text-2xl mb-6 font-light">Web & Information Systems Student</h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed font-light">
              I'm dedicated to creating thoughtful and insightful digital experiences through a blend of UX/UI design and web development. 
              My academic journey has equipped me with a foundation of knowledge and analytical thinking that I apply to every project.
              I'm continually seeking deeper understanding of technologies and design principles to enhance my ability to communicate complex ideas simply.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link 
                href="/#projects" 
                className="px-6 py-3 bg-indigo-700 dark:bg-indigo-900 text-white rounded-lg hover:bg-indigo-800 dark:hover:bg-indigo-700 transition-all duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:ring-offset-2 font-medium"
              >
                View My Work
              </Link>
              <Link 
                href="/" 
                className="px-6 py-3 border-2 border-indigo-600 dark:border-indigo-400 text-indigo-700 dark:text-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:text-indigo-800 dark:hover:text-indigo-300 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:ring-offset-2 font-medium"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>

        {/* About Me Section */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="h-px w-12 bg-indigo-300 dark:bg-indigo-600 mr-4"></div>
            <h2 className="text-3xl md:text-4xl font-serif text-center text-indigo-900 dark:text-indigo-300" id="about">About Me</h2>
            <div className="h-px w-12 bg-indigo-300 dark:bg-indigo-600 ml-4"></div>
          </div>
          
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 border-l-4 border-l-indigo-600 dark:border-l-indigo-400 hover:shadow-lg transition-shadow duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed font-light">
                  As a Web & Information Systems student, I'm at a pivotal point in my academic journey where theory transforms into wisdom. I'm particularly drawn to the intersection of design and functionality, where I can create digital experiences that are both enlightening and accessible.
                </p>
                <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed font-light">
                  My academic projects have allowed me to develop a thoughtful approach to front-end technologies like HTML, CSS, JavaScript, and React. I value the analytical process of translating complex concepts into responsive, accessible websites that provide meaningful learning experiences.
                </p>
              </div>
              <div>
                <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed font-light">
                  I'm proficient with design tools like Figma, which I use to prototype and refine my ideas before implementation. This methodical approach helps me create cohesive experiences that balance clarity with functionality.
                </p>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-light">
                  I'm dedicated to continuous learning and growth as a developer and designer. My goal is to expand my knowledge while creating digital solutions that illuminate and educate. I approach each project with thoughtful consideration, always seeking deeper understanding and opportunities to share insights through my work.
                </p>
              </div>
            </div>
            <div className="mt-6 flex justify-center">
              <span className="inline-block px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium">Sage Mindset</span>
            </div>
          </div>
        </div>
        
        {/* Skills Section */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="h-px w-12 bg-indigo-300 dark:bg-indigo-600 mr-4"></div>
            <h2 className="text-3xl md:text-4xl font-serif text-center text-indigo-900 dark:text-indigo-300" id="skills">Knowledge & Tools</h2>
            <div className="h-px w-12 bg-indigo-300 dark:bg-indigo-600 ml-4"></div>
          </div>
          
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-indigo-100 dark:border-indigo-400 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-full text-indigo-700 dark:text-indigo-300">
                    <Code className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-medium text-indigo-800 dark:text-indigo-300 font-serif">Development</h3>
                </div>
                <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                  <li className="flex items-center p-2 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded-lg transition-colors">
                    <span className="w-2 h-2 bg-indigo-500 dark:bg-indigo-400 rounded-full mr-3"></span>
                    <span className="font-light">HTML, CSS, JavaScript</span>
                  </li>
                  <li className="flex items-center p-2 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded-lg transition-colors">
                    <span className="w-2 h-2 bg-indigo-500 dark:bg-indigo-400 rounded-full mr-3"></span>
                    <span className="font-light">React & Next.js</span>
                  </li>
                  <li className="flex items-center p-2 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded-lg transition-colors">
                    <span className="w-2 h-2 bg-indigo-500 dark:bg-indigo-400 rounded-full mr-3"></span>
                    <span className="font-light">TypeScript</span>
                  </li>
                  <li className="flex items-center p-2 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded-lg transition-colors">
                    <span className="w-2 h-2 bg-indigo-500 dark:bg-indigo-400 rounded-full mr-3"></span>
                    <span className="font-light">Responsive Web Design</span>
                  </li>
                  <li className="flex items-center p-2 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded-lg transition-colors">
                    <span className="w-2 h-2 bg-indigo-500 dark:bg-indigo-400 rounded-full mr-3"></span>
                    <span className="font-light">Git Version Control</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-purple-100 dark:border-purple-400 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full text-purple-700 dark:text-purple-400">
                    <Palette className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-medium text-purple-800 dark:text-purple-400 font-serif">Design</h3>
                </div>
                <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                  <li className="flex items-center p-2 hover:bg-purple-50 dark:hover:bg-purple-900/30 rounded-lg transition-colors">
                    <span className="w-2 h-2 bg-purple-500 dark:bg-purple-400 rounded-full mr-3"></span>
                    <span className="font-light">Figma</span>
                  </li>
                  <li className="flex items-center p-2 hover:bg-purple-50 dark:hover:bg-purple-900/30 rounded-lg transition-colors">
                    <span className="w-2 h-2 bg-purple-500 dark:bg-purple-400 rounded-full mr-3"></span>
                    <span className="font-light">UI/UX Design Principles</span>
                  </li>
                  <li className="flex items-center p-2 hover:bg-purple-50 dark:hover:bg-purple-900/30 rounded-lg transition-colors">
                    <span className="w-2 h-2 bg-purple-500 dark:bg-purple-400 rounded-full mr-3"></span>
                    <span className="font-light">Wireframing & Prototyping</span>
                  </li>
                  <li className="flex items-center p-2 hover:bg-purple-50 dark:hover:bg-purple-900/30 rounded-lg transition-colors">
                    <span className="w-2 h-2 bg-purple-500 dark:bg-purple-400 rounded-full mr-3"></span>
                    <span className="font-light">Visual Design</span>
                  </li>
                  <li className="flex items-center p-2 hover:bg-purple-50 dark:hover:bg-purple-900/30 rounded-lg transition-colors">
                    <span className="w-2 h-2 bg-purple-500 dark:bg-purple-400 rounded-full mr-3"></span>
                    <span className="font-light">Tailwind CSS</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer Navigation */}
        <div className="mt-16 text-center">
          <nav className="flex flex-wrap justify-center gap-6" aria-label="Footer navigation">
            <Link 
              href="/" 
              className="text-indigo-700 dark:text-indigo-400 hover:text-indigo-900 dark:hover:text-indigo-300 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:ring-offset-2 p-2 rounded-lg flex items-center gap-2 hover:bg-indigo-50 dark:hover:bg-indigo-900/30"
            >
              <span className="w-1 h-1 bg-indigo-500 dark:bg-indigo-400 rounded-full"></span>
              Home
            </Link>
            <Link 
              href="/#projects" 
              className="text-indigo-700 dark:text-indigo-400 hover:text-indigo-900 dark:hover:text-indigo-300 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:ring-offset-2 p-2 rounded-lg flex items-center gap-2 hover:bg-indigo-50 dark:hover:bg-indigo-900/30"
            >
              <span className="w-1 h-1 bg-indigo-500 dark:bg-indigo-400 rounded-full"></span>
              My Playground
            </Link>
            <Link 
              href="/contact" 
              className="text-indigo-700 dark:text-indigo-400 hover:text-indigo-900 dark:hover:text-indigo-300 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:ring-offset-2 p-2 rounded-lg flex items-center gap-2 hover:bg-indigo-50 dark:hover:bg-indigo-900/30"
            >
              <span className="w-1 h-1 bg-indigo-500 dark:bg-indigo-400 rounded-full"></span>
              Contact
            </Link>
          </nav>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-6 font-light">&copy; 2025 Nurjahan Jhorna. Illuminating digital wisdom.</p>
        </div>
      </main>
    </div>
  );
}
