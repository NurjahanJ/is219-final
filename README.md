# My Digital Map - Explorer Portfolio

A modern, responsive portfolio website built with the Explorer brand archetype, featuring an immersive starry night sky background with dynamic animations and navigation-themed elements. This digital expedition showcases my journey, projects, and skills through an adventure-focused lens, inviting visitors to chart their own course through my professional landscape.

## 🌐 Live Demo

Explore the live site: [https://portfolio-git-main-nurjahan-jhornas-projects.vercel.app/](https://portfolio-git-main-nurjahan-jhornas-projects.vercel.app/)

## 🧭 Brand Archetype: Explorer

This portfolio fully embodies the Explorer brand archetype through:

- **Adventure-Driven Color Palette:**
  - Deep Navy (#0a1128) - Primary background representing the vast night sky and unknown territories
  - Forest Green (#2f4f4f) - Primary color symbolizing wilderness and exploration
  - Sandstone (#c2b280) - Accent color evoking natural landscapes and terrain
  - Sky Blue (#87ceeb) - Secondary color representing discovery and open horizons
  - Navy (#001f3f) - Deep accent color for contrast and depth

- **Journey-Focused Design Elements:**
  - Dynamic starry background with shooting stars animation
  - Compass and map iconography throughout the interface
  - Journey cards highlighting the path of discovery
  - Expedition-themed section headers and navigation

- **Exploration Visual Language:**
  - Glass-morphism UI components suggesting transparency and discovery
  - Subtle blue glows mimicking celestial navigation
  - Card designs with border accents resembling trail markers
  - Animated elements that invite interaction and exploration

## 🛠️ Tech Stack

- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Accessible UI components
- **[Lucide Icons](https://lucide.dev/)** - Beautiful, consistent icon set
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme implementation
- **Responsive Design** - Mobile-first approach

## 📂 Project Structure

```
├── public/                 # Static assets and images
│   ├── favicon.svg        # Compass favicon in SVG format
│   └── favicon.ico        # Compass favicon in ICO format
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── about/          # About page with personal info and journey
│   │   ├── contact/        # Contact page with form and social links
│   │   ├── projects/       # Projects showcase page
│   │   ├── globals.css     # Global CSS with Explorer theme and animations
│   │   ├── layout.tsx      # Root layout with navigation and footer
│   │   └── page.tsx        # Home page
│   ├── components/         # Reusable components
│   │   ├── ui/             # UI components from shadcn
│   │   ├── main-nav.tsx    # Navigation component with Explorer theme
│   │   ├── footer.tsx      # Global footer with navigation and social links
│   │   └── ProjectCard.tsx # Project display component
│   └── lib/                # Utility functions and data
│       └── projects.ts     # Project data structure
└── tailwind.config.mjs     # Tailwind with Explorer color theme
```

## ✨ Features

- **Responsive Expedition** - Adapts seamlessly across all devices from mobile to desktop
- **Explorer Theme** - Immersive starry backgrounds with animated celestial elements
- **About Journey** - Personal narrative framed as an expedition with journey milestones
- **Project Discoveries** - Showcase of work presented as discoveries with interactive cards
- **Navigation Elements** - Compass-inspired UI components and directional cues
- **Animated Backgrounds** - Dynamic star field with twinkling stars and shooting stars
- **Expedition Cards** - Content presented in journey-themed card components
- **Glass Morphism Effects** - Modern UI with backdrop blur suggesting transparency of discovery
- **Adventure-Focused Typography** - Font choices that evoke exploration and discovery
- **Accessible Pathways** - Keyboard navigation and screen reader support for all explorers

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or newer)
- npm or yarn package manager

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/NurjahanJ/explorer-portfolio.git
   cd explorer-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser


## 🤝 Contributing

Interested in contributing to this portfolio project? Here's how:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Customization

To make this portfolio your own:

1. Update personal information in `src/app/about/page.tsx`
2. Modify project data in `src/lib/projects.ts`
3. Customize the Explorer theme colors in `tailwind.config.mjs` if desired
4. Replace the profile picture in `src/porfolio_pic.jpg`
5. Update contact information in both `src/app/contact/page.tsx` and `src/components/footer.tsx`
6. Modify the favicon in `public/favicon.svg` if you want a different theme

---
