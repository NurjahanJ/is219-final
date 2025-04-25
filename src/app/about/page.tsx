import Link from "next/link";
import { Compass, Code, Palette } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background px-4 py-12 md:py-20">
      <main className="container mx-auto max-w-5xl" id="main-content">
        {/* Header Section with Photo and Intro */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 mb-16">
          {/* Profile Photo - Using a placeholder */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 overflow-hidden rounded-full border-4 border-primary-300 shadow-lg bg-primary-100 flex items-center justify-center" aria-hidden="true">
            <div className="text-4xl md:text-5xl font-bold text-primary-500">NJ</div>
          </div>
          
          {/* Name and Intro */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-primary text-4xl md:text-5xl font-bold mb-4">Nurjahan Jhorna</h1>
            <h2 className="text-accent text-xl md:text-2xl mb-6">Web & Information Systems Student</h2>
            <p className="text-lg text-medium-contrast mb-6">
              I'm passionate about creating intuitive and visually appealing digital experiences through UX/UI design and web development. 
              My academic journey has equipped me with a blend of technical skills and design thinking that I bring to every project.
              I'm constantly exploring new technologies and design trends to enhance my creative toolkit.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link 
                href="/projects" 
                className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-600 transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                View My Work
              </Link>
              <Link 
                href="/" 
                className="px-6 py-2 border border-primary text-primary rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>

        {/* About Me Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center text-primary" id="about">About Me</h2>
          
          <div className="bg-card rounded-xl shadow-md p-8 border-l-4 border-l-primary-500">
            <p className="text-medium-contrast mb-4">
              As a Web & Information Systems student, I'm at an exciting point in my academic journey where theory meets practice. I'm particularly drawn to the intersection of design and functionality, where I can create digital experiences that are both beautiful and intuitive.
            </p>
            <p className="text-medium-contrast mb-4">
              My academic projects have allowed me to develop a strong foundation in front-end technologies like HTML, CSS, JavaScript, and React. I enjoy the creative process of translating design concepts into responsive, accessible websites that provide meaningful user experiences.
            </p>
            <p className="text-medium-contrast mb-4">
              I'm proficient with design tools like Figma, which I use to prototype and iterate on my ideas before implementation. This design-first approach helps me create cohesive experiences that balance aesthetics with usability.
            </p>
            <p className="text-medium-contrast">
              I'm eager to collaborate, learn, and grow as a developer and designer. My goal is to continue expanding my skills while creating digital solutions that make a positive impact. I approach each project with curiosity and a growth mindset, always looking for opportunities to push my creative and technical boundaries.
            </p>
          </div>
        </div>
        
        {/* Skills Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center text-primary" id="skills">Skills & Tools</h2>
          
          <div className="bg-card rounded-xl shadow-md p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">Development</h3>
                <ul className="space-y-2 text-medium-contrast">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                    HTML, CSS, JavaScript
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                    React & Next.js
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                    TypeScript
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                    Responsive Web Design
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                    Git Version Control
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-4">Design</h3>
                <ul className="space-y-2 text-medium-contrast">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full mr-2"></span>
                    Figma
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full mr-2"></span>
                    UI/UX Design Principles
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full mr-2"></span>
                    Wireframing & Prototyping
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full mr-2"></span>
                    Visual Design
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full mr-2"></span>
                    Tailwind CSS
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer Navigation */}
        <nav className="text-center pt-8 border-t border-border" aria-label="Footer navigation">
          <Link href="/" className="text-primary hover:text-primary-700 transition-colors mr-6 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 p-1 rounded">
            Home
          </Link>
          <Link href="/projects" className="text-primary hover:text-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 p-1 rounded">
            Projects
          </Link>
        </nav>
      </main>
    </div>
  );
}
