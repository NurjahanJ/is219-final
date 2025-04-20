import Link from "next/link";
import { Compass, Map, Mountain } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background px-4 py-12 md:py-20">
      <main className="container mx-auto max-w-5xl">
        {/* Header Section with Photo and Intro */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 mb-16">
          {/* Profile Photo - Using a placeholder */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 overflow-hidden rounded-full border-4 border-primary-300 shadow-lg bg-primary-100 flex items-center justify-center">
            <div className="text-4xl md:text-5xl font-bold text-primary-500">JE</div>
          </div>
          
          {/* Name and Intro */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-gradient-brand text-4xl md:text-5xl font-bold mb-4">Jane Explorer</h1>
            <h2 className="text-accent-500 text-xl md:text-2xl mb-6">Adventure Seeker & Web Developer</h2>
            <p className="text-lg text-medium-contrast mb-6">
              I'm passionate about exploring new technologies and creating immersive digital experiences. 
              With a background in both design and development, I bring a unique perspective to every project I undertake.
              When I'm not coding, you'll find me hiking mountains, exploring new places, or planning my next adventure.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link 
                href="/projects" 
                className="px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors shadow-md"
              >
                View My Work
              </Link>
              <Link 
                href="/" 
                className="px-6 py-2 border border-primary-500 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
        
        {/* My Journey Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center text-gradient-brand">My Journey</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Journey Card 1 */}
            <div className="bg-card rounded-xl shadow-md p-6 border-l-4 border-l-primary-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary-100 rounded-full mr-4">
                  <Compass className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-primary-700">Discovery</h3>
              </div>
              <p className="text-medium-contrast">
                Started my journey in 2018, exploring the fundamentals of web development and design. Completed my degree in Computer Science with a focus on interactive media.
              </p>
            </div>
            
            {/* Journey Card 2 */}
            <div className="bg-card rounded-xl shadow-md p-6 border-l-4 border-l-secondary-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-secondary-100 rounded-full mr-4">
                  <Map className="h-8 w-8 text-secondary-600" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-700">Navigation</h3>
              </div>
              <p className="text-medium-contrast">
                Worked with leading tech companies to develop innovative solutions. Led a team of developers in creating responsive, accessible web applications for diverse clients.
              </p>
            </div>
            
            {/* Journey Card 3 */}
            <div className="bg-card rounded-xl shadow-md p-6 border-l-4 border-l-accent-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-accent-100 rounded-full mr-4">
                  <Mountain className="h-8 w-8 text-accent-600" />
                </div>
                <h3 className="text-xl font-semibold text-accent-700">Summit</h3>
              </div>
              <p className="text-medium-contrast">
                Currently focused on pushing boundaries with emerging technologies. Specializing in creating immersive experiences that combine stunning visuals with intuitive interactions.
              </p>
            </div>
          </div>
        </div>
        
        {/* Skills or Additional Section could go here */}
        
        {/* Footer Navigation */}
        <div className="text-center pt-8 border-t border-border">
          <Link href="/" className="text-primary-500 hover:text-primary-700 transition-colors mr-6">
            Home
          </Link>
          <Link href="/projects" className="text-primary-500 hover:text-primary-700 transition-colors">
            Projects
          </Link>
        </div>
      </main>
    </div>
  );
}
