import Link from "next/link";
import { Compass, Code, Palette, Star } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background px-4 py-12 md:py-20 relative">
      {/* Decorative background elements */}
      <div className="absolute top-1/3 left-1/4 text-secondary-200 opacity-10" aria-hidden="true">
        <Star className="w-16 h-16" />
      </div>
      
      <main className="container mx-auto max-w-5xl relative z-10" id="main-content">
        {/* Header Section with Photo and Intro */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 mb-16 bg-gradient-to-br from-primary-50 to-transparent p-8 rounded-2xl">
          {/* Profile Photo - Using a placeholder */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 overflow-hidden rounded-full border-4 border-primary-300 shadow-xl bg-primary-100 flex items-center justify-center transform hover:rotate-3 transition-transform duration-300" aria-hidden="true">
            <div className="text-4xl md:text-5xl font-bold text-primary-500">NJ</div>
            {/* Decorative elements */}
            <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-accent-200 rounded-full opacity-20"></div>
            <div className="absolute -top-2 -left-2 w-12 h-12 bg-secondary-300 rounded-full opacity-20"></div>
          </div>
          
          {/* Name and Intro */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-primary text-4xl md:text-5xl font-bold mb-4 relative inline-block">
              Nurjahan Jhorna
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-transparent rounded-full"></span>
            </h1>
            <h2 className="text-accent text-xl md:text-2xl mb-6 font-medium">Web & Information Systems Student</h2>
            <p className="text-lg text-medium-contrast mb-6 leading-relaxed">
              I'm passionate about creating intuitive and visually appealing digital experiences through UX/UI design and web development. 
              My academic journey has equipped me with a blend of technical skills and design thinking that I bring to every project.
              I'm constantly exploring new technologies and design trends to enhance my creative toolkit.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link 
                href="/#projects" 
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-600 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 font-medium"
              >
                View My Work
              </Link>
              <Link 
                href="/" 
                className="px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary-50 hover:border-primary-600 hover:text-primary-600 transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 font-medium"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>

        {/* About Me Section */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="h-px w-12 bg-primary-300 mr-4"></div>
            <h2 className="text-3xl md:text-4xl font-semibold text-center text-primary" id="about">About Me</h2>
            <div className="h-px w-12 bg-primary-300 ml-4"></div>
          </div>
          
          <div className="bg-card rounded-xl shadow-lg p-8 border-l-4 border-l-primary-500 hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-white to-primary-50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-medium-contrast mb-4 leading-relaxed">
                  As a Web & Information Systems student, I'm at an exciting point in my academic journey where theory meets practice. I'm particularly drawn to the intersection of design and functionality, where I can create digital experiences that are both beautiful and intuitive.
                </p>
                <p className="text-medium-contrast mb-4 leading-relaxed">
                  My academic projects have allowed me to develop a strong foundation in front-end technologies like HTML, CSS, JavaScript, and React. I enjoy the creative process of translating design concepts into responsive, accessible websites that provide meaningful user experiences.
                </p>
              </div>
              <div>
                <p className="text-medium-contrast mb-4 leading-relaxed">
                  I'm proficient with design tools like Figma, which I use to prototype and iterate on my ideas before implementation. This design-first approach helps me create cohesive experiences that balance aesthetics with usability.
                </p>
                <p className="text-medium-contrast leading-relaxed">
                  I'm eager to collaborate, learn, and grow as a developer and designer. My goal is to continue expanding my skills while creating digital solutions that make a positive impact. I approach each project with curiosity and a growth mindset, always looking for opportunities to push my creative and technical boundaries.
                </p>
              </div>
            </div>
            <div className="mt-6 flex justify-center">
              <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">Explorer Mindset</span>
            </div>
          </div>
        </div>
        
        {/* Skills Section */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="h-px w-12 bg-primary-300 mr-4"></div>
            <h2 className="text-3xl md:text-4xl font-semibold text-center text-primary" id="skills">Skills & Tools</h2>
            <div className="h-px w-12 bg-primary-300 ml-4"></div>
          </div>
          
          <div className="bg-card rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-white to-secondary-50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white bg-opacity-70 backdrop-blur-sm p-6 rounded-xl border border-primary-100 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary-100 rounded-full text-primary">
                    <Code className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary">Development</h3>
                </div>
                <ul className="space-y-3 text-medium-contrast">
                  <li className="flex items-center p-2 hover:bg-primary-50 rounded-lg transition-colors">
                    <span className="w-3 h-3 bg-primary-500 rounded-full mr-3"></span>
                    <span className="font-medium">HTML, CSS, JavaScript</span>
                  </li>
                  <li className="flex items-center p-2 hover:bg-primary-50 rounded-lg transition-colors">
                    <span className="w-3 h-3 bg-primary-500 rounded-full mr-3"></span>
                    <span className="font-medium">React & Next.js</span>
                  </li>
                  <li className="flex items-center p-2 hover:bg-primary-50 rounded-lg transition-colors">
                    <span className="w-3 h-3 bg-primary-500 rounded-full mr-3"></span>
                    <span className="font-medium">TypeScript</span>
                  </li>
                  <li className="flex items-center p-2 hover:bg-primary-50 rounded-lg transition-colors">
                    <span className="w-3 h-3 bg-primary-500 rounded-full mr-3"></span>
                    <span className="font-medium">Responsive Web Design</span>
                  </li>
                  <li className="flex items-center p-2 hover:bg-primary-50 rounded-lg transition-colors">
                    <span className="w-3 h-3 bg-primary-500 rounded-full mr-3"></span>
                    <span className="font-medium">Git Version Control</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white bg-opacity-70 backdrop-blur-sm p-6 rounded-xl border border-secondary-100 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-secondary-100 rounded-full text-secondary">
                    <Palette className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary">Design</h3>
                </div>
                <ul className="space-y-3 text-medium-contrast">
                  <li className="flex items-center p-2 hover:bg-secondary-50 rounded-lg transition-colors">
                    <span className="w-3 h-3 bg-secondary-500 rounded-full mr-3"></span>
                    <span className="font-medium">Figma</span>
                  </li>
                  <li className="flex items-center p-2 hover:bg-secondary-50 rounded-lg transition-colors">
                    <span className="w-3 h-3 bg-secondary-500 rounded-full mr-3"></span>
                    <span className="font-medium">UI/UX Design Principles</span>
                  </li>
                  <li className="flex items-center p-2 hover:bg-secondary-50 rounded-lg transition-colors">
                    <span className="w-3 h-3 bg-secondary-500 rounded-full mr-3"></span>
                    <span className="font-medium">Wireframing & Prototyping</span>
                  </li>
                  <li className="flex items-center p-2 hover:bg-secondary-50 rounded-lg transition-colors">
                    <span className="w-3 h-3 bg-secondary-500 rounded-full mr-3"></span>
                    <span className="font-medium">Visual Design</span>
                  </li>
                  <li className="flex items-center p-2 hover:bg-secondary-50 rounded-lg transition-colors">
                    <span className="w-3 h-3 bg-secondary-500 rounded-full mr-3"></span>
                    <span className="font-medium">Tailwind CSS</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer Navigation */}
        <nav className="text-center pt-8 border-t border-border mt-16" aria-label="Footer navigation">
          <div className="flex flex-wrap justify-center gap-6">
            <Link 
              href="/" 
              className="text-primary hover:text-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 p-2 rounded-lg flex items-center gap-2 hover:bg-primary-50"
            >
              <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
              Home
            </Link>
            <Link 
              href="/#journey" 
              className="text-primary hover:text-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 p-2 rounded-lg flex items-center gap-2 hover:bg-primary-50"
            >
              <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
              My Journey
            </Link>
            <Link 
              href="/#projects" 
              className="text-primary hover:text-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 p-2 rounded-lg flex items-center gap-2 hover:bg-primary-50"
            >
              <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
              My Playground
            </Link>
            <Link 
              href="/contact" 
              className="text-primary hover:text-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 p-2 rounded-lg flex items-center gap-2 hover:bg-primary-50"
            >
              <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
              Contact
            </Link>
          </div>
          <p className="text-sm text-medium-contrast mt-6">© 2025 Nurjahan Jhorna. Creator of digital experiences.</p>
        </nav>
      </main>
    </div>
  );
}
