import Link from "next/link";
import { Compass, Map, Mountain } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background px-4 py-12 md:py-20">
      <main className="container mx-auto max-w-5xl" id="main-content">
        {/* Header Section with Photo and Intro */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 mb-16">
          {/* Profile Photo - Using a placeholder */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 overflow-hidden rounded-full border-4 border-primary-300 shadow-lg bg-primary-100 flex items-center justify-center" aria-hidden="true">
            <div className="text-4xl md:text-5xl font-bold text-primary-500">JE</div>
          </div>
          
          {/* Name and Intro */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-primary text-4xl md:text-5xl font-bold mb-4">Jane Explorer</h1>
            <h2 className="text-accent text-xl md:text-2xl mb-6">Adventure Seeker & Web Developer</h2>
            <p className="text-lg text-medium-contrast mb-6">
              I'm passionate about exploring new technologies and creating immersive digital experiences. 
              With a background in both design and development, I bring a unique perspective to every project I undertake.
              When I'm not coding, you'll find me hiking mountains, exploring new places, or planning my next adventure.
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
        
        {/* My Journey Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center text-primary" id="journey">My Journey</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Journey Card 1 */}
            <article className="bg-card rounded-xl shadow-md p-6 border-l-4 border-l-primary-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary-100 rounded-full mr-4" aria-hidden="true">
                  <Compass className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-primary">Discovery</h3>
              </div>
              <p className="text-medium-contrast">
                Started my journey in 2018, exploring the fundamentals of web development and design. Completed my degree in Computer Science with a focus on interactive media.
              </p>
            </article>
            
            {/* Journey Card 2 */}
            <article className="bg-card rounded-xl shadow-md p-6 border-l-4 border-l-secondary-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-secondary-100 rounded-full mr-4" aria-hidden="true">
                  <Map className="h-8 w-8 text-secondary-600" />
                </div>
                <h3 className="text-xl font-semibold text-secondary">Navigation</h3>
              </div>
              <p className="text-medium-contrast">
                Worked with leading tech companies to develop innovative solutions. Led a team of developers in creating responsive, accessible web applications for diverse clients.
              </p>
            </article>
            
            {/* Journey Card 3 */}
            <article className="bg-card rounded-xl shadow-md p-6 border-l-4 border-l-accent-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-accent-100 rounded-full mr-4" aria-hidden="true">
                  <Mountain className="h-8 w-8 text-accent-600" />
                </div>
                <h3 className="text-xl font-semibold text-accent">Summit</h3>
              </div>
              <p className="text-medium-contrast">
                Currently focused on pushing boundaries with emerging technologies. Specializing in creating immersive experiences that combine stunning visuals with intuitive interactions.
              </p>
            </article>
          </div>
        </div>
        
        {/* Skills or Additional Section could go here */}
        
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
