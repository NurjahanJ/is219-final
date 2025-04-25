"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
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
    <nav className="flex items-center justify-between w-full py-4 px-2 md:px-8 border-b border-border" aria-label="Main navigation">
      <Link href="/" className="text-xl font-semibold text-primary-700" aria-label="Explorer home page">
        Explorer
      </Link>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6">
        {routes.map((route) => {
          const active = isActive(route.href)
          return (
            <Link 
              key={route.href} 
              href={route.href}
              onClick={(e) => handleAnchorClick(e, route.href)}
              aria-current={active ? 'page' : undefined}
              className={`text-base font-medium transition-colors capitalize relative py-1 ${active 
                ? 'text-primary-700 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary-500' 
                : 'text-foreground hover:text-primary-600'}`}
            >
              {route.label}
            </Link>
          )
        })}
      </div>
      
      {/* Mobile Navigation - NavDrawer */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button 
              aria-label="Open menu" 
              aria-expanded="false"
              aria-haspopup="true"
              className="p-2 rounded-lg border border-border bg-background shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-72 max-w-[90vw]">
            <SheetHeader className="border-b px-6 py-4">
              <SheetTitle className="text-lg font-semibold text-primary-700">Explorer</SheetTitle>
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
                    className={`block w-full rounded-lg px-4 py-3 text-base font-medium text-left transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 ${active 
                      ? 'bg-primary-50 text-primary-700 border-l-4 border-primary-500' 
                      : 'hover:bg-muted focus:bg-muted text-foreground'}`}
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