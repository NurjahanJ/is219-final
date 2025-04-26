# My Digital Map - Explorer Portfolio

A modern, responsive portfolio website built with the Explorer brand archetype, featuring a starry night background with soft blue accents. This portfolio showcases projects, skills, and professional journey in an immersive, navigation-themed format that invites visitors to explore my digital landscape.

## 🧭 Brand Archetype: Explorer

This portfolio embodies the Explorer archetype with:

- **Immersive, night sky color palette:**
  - Deep Navy (#0a1128) - Primary background color representing the night sky
  - Soft Glowing Blue (#3b82f6) - Primary accent color evoking discovery and guidance
  - Zinc Gray (#18181b) - Secondary background for cards and containers
  - Slate Gray (#94a3b8) - Text color providing readability against dark backgrounds

- **Navigation-themed elements** including a realistic compass favicon and map-inspired components
- **Immersive starry backgrounds** that create a sense of exploration and wonder
- **Glass-like UI components** with subtle blue glows that guide the user through the experience

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

- **Responsive Design** - Looks great on all devices from mobile to desktop
- **Explorer Theme** - Immersive starry backgrounds with soft blue accents
- **About Page** - Personal introduction with profile photo and skills sections
- **Projects Section** - Showcase of work with animated project cards
- **Contact Page** - Form and social links with Explorer-themed styling
- **Global Footer** - Consistent navigation and contact options on all pages
- **Custom Compass Favicon** - Realistic navigation-themed site icon
- **Glass Morphism Effects** - Modern UI with backdrop blur and transparency
- **Accessible UI** - Keyboard navigation and screen reader support

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

## 🌐 Live Demo

Explore the live site: [https://portfolio-git-main-nurjahan-jhornas-projects.vercel.app/](https://portfolio-git-main-nurjahan-jhornas-projects.vercel.app/)

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
