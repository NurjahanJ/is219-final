"use client"

import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import Link from "next/link"
import { DarkModeSetter } from "@/components/dark-mode-setter"
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Menu, X } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export function MainNav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  
  // Handle scroll event to add shadow and background when scrolled
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  
  // Handle smooth scrolling for anchor links
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only apply to hash links on the same page
    if (href.startsWith('/#')) {
      e.preventDefault();
      
      // If we're not on the home page, navigate first
      if (pathname !== '/') {
        window.location.href = href;
        return;
      }
      
      // Extract the id from the href
      const id = href.substring(2);
      const element = document.getElementById(id);
      
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
  
  const routes = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/#projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ]
  
  // Function to check if the route is active
  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  return (
    <nav 
      className={`flex items-center justify-between w-full py-4 px-2 md:px-8 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm shadow-md border-b border-indigo-100 dark:border-slate-700' 
          : 'bg-slate-50 dark:bg-slate-900 border-b border-border dark:border-slate-800'
      }`} 
      aria-label="Main navigation"
    >
      <Link href="/" className="text-xl font-semibold text-indigo-800 dark:text-indigo-300 hover:text-indigo-600 dark:hover:text-indigo-200 transition-colors" aria-label="Nurjahan Jhorna home page">
        <span className="font-serif">Nurjahan Jhorna</span>
      </Link>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-6 items-center">
        {routes.map((route, index) => (
          <Link 
            key={route.href} 
            href={route.href}
            onClick={(e) => handleAnchorClick(e, route.href)}
            aria-current={isActive(route.href) ? 'page' : undefined}
            className={`text-base font-medium transition-colors capitalize relative py-1 ${isActive(route.href) 
              ? 'text-indigo-800 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-indigo-600' 
              : 'text-slate-700 hover:text-indigo-600'}`}
          >
            {route.label}
          </Link>
        ))}
        <DarkModeSetter />
      </div>
      
      {/* Mobile Navigation - NavDrawer */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button 
              aria-label="Open menu" 
              aria-expanded="false"
              aria-haspopup="true"
              className="p-2 rounded-lg border border-slate-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-72 max-w-[90vw]">
            <SheetHeader className="border-b px-6 py-4 bg-slate-50">
              <SheetTitle className="text-lg font-semibold text-indigo-800 font-serif">Nurjahan Jhorna</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-2 py-6 px-6">
              {routes.map((route) => {
                const active = isActive(route.href)
                return (
                  <Link
                    key={route.href}
                    href={route.href}
                    onClick={(e) => handleAnchorClick(e, route.href)}
                    aria-current={active ? 'page' : undefined}
                    className={`block w-full rounded-lg px-4 py-3 text-base font-medium text-left transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 ${active 
                      ? 'bg-indigo-50 text-indigo-800 border-l-4 border-indigo-600' 
                      : 'hover:bg-slate-100 focus:bg-slate-100 text-slate-700'}`}
                  >
                    {route.label}
                  </Link>
                )
              })}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}