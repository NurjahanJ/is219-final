import Link from "next/link";
import { Github, Linkedin, Mail, Compass, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-zinc-900/80 backdrop-blur-sm border-t border-blue-500/20 py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-blue-400 font-bold text-lg mb-4 flex items-center">
              <Compass className="w-5 h-5 mr-2" />
              Navigation
            </h3>
            <nav className="flex flex-col space-y-2">
              <Link 
                href="/" 
                className="text-slate-300 hover:text-blue-300 transition-colors duration-300 flex items-center"
              >
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-slate-300 hover:text-blue-300 transition-colors duration-300 flex items-center"
              >
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                About
              </Link>
              <Link 
                href="/projects" 
                className="text-slate-300 hover:text-blue-300 transition-colors duration-300 flex items-center"
              >
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                Projects
              </Link>
              <Link 
                href="/contact" 
                className="text-slate-300 hover:text-blue-300 transition-colors duration-300 flex items-center"
              >
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                Contact
              </Link>
            </nav>
          </div>
          
          {/* Connect */}
          <div className="space-y-4">
            <h3 className="text-blue-400 font-bold text-lg mb-4">Connect</h3>
            <div className="flex flex-col space-y-3">
              <a 
                href="mailto:nurjahan.jhorna@example.com" 
                className="text-slate-300 hover:text-blue-300 transition-colors duration-300 flex items-center group"
              >
                <div className="p-2 bg-zinc-800 rounded-full mr-3 group-hover:bg-zinc-700 transition-colors duration-300 border border-blue-500/20 group-hover:border-blue-500/40">
                  <Mail className="w-4 h-4 text-blue-400 group-hover:text-blue-300" />
                </div>
                <span>Email</span>
              </a>
              <a 
                href="https://github.com/NurjahanJ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-blue-300 transition-colors duration-300 flex items-center group"
              >
                <div className="p-2 bg-zinc-800 rounded-full mr-3 group-hover:bg-zinc-700 transition-colors duration-300 border border-blue-500/20 group-hover:border-blue-500/40">
                  <Github className="w-4 h-4 text-blue-400 group-hover:text-blue-300" />
                </div>
                <span>GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/nurjahan-jhorna" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-blue-300 transition-colors duration-300 flex items-center group"
              >
                <div className="p-2 bg-zinc-800 rounded-full mr-3 group-hover:bg-zinc-700 transition-colors duration-300 border border-blue-500/20 group-hover:border-blue-500/40">
                  <Linkedin className="w-4 h-4 text-blue-400 group-hover:text-blue-300" />
                </div>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
          
          {/* About Site */}
          <div className="space-y-4">
            <h3 className="text-blue-400 font-bold text-lg mb-4">About This Map</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              My Digital Map is a portfolio designed to guide you through my journey as a developer and designer.
              Built with Next.js, TypeScript, and Tailwind CSS, it showcases my projects and skills.
            </p>
            <p className="text-slate-400 text-sm mt-4">
              &copy; {new Date().getFullYear()} Nurjahan Jhorna. Charting digital frontiers.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
