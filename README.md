# Sage Portfolio

A modern, responsive portfolio website built with the Sage brand archetype, featuring a thoughtful color palette and a knowledge-focused design. This portfolio showcases projects, skills, and professional journey in an elegant, insightful format.

## 📚 Brand Archetype: Sage

This portfolio embodies the Sage archetype with:

- **Thoughtful, calming color palette:**
  - Deep Indigo (#4338ca) - Primary color representing wisdom and knowledge
  - Soft Purple (#a78bfa) - Secondary color evoking thoughtfulness and creativity
  - Muted Teal (#0d9488) - Accent color adding depth and contemplation
  - Slate Gray (#64748b) - Neutral color providing balance and clarity

- **Educational content** that invites visitors to explore a journey of knowledge and growth
- **Organized, structured layout** with clear hierarchy and ample white space
- **Dark mode support** with carefully selected color combinations for optimal readability

## 🛠️ Tech Stack

- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Accessible UI components
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Dark mode implementation
- **Responsive Design** - Mobile-first approach

## 📂 Project Structure

```
├── public/                 # Static assets and images
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── about/          # About page with personal info and journey
│   │   ├── projects/       # Projects showcase page
│   │   ├── globals.css     # Global CSS with Explorer theme
│   │   ├── layout.tsx      # Root layout with navigation
│   │   └── page.tsx        # Home page
│   ├── components/         # Reusable components
│   │   ├── ui/             # UI components from shadcn
│   │   ├── main-nav.tsx    # Navigation component
│   │   └── ProjectCard.tsx # Project display component
│   └── lib/                # Utility functions and data
│       └── projects.ts     # Project data structure
└── tailwind.config.mjs     # Tailwind with Explorer color theme
```

## ✨ Features

- **Responsive Design** - Looks great on all devices from mobile to desktop
- **About Page** - Personal introduction with knowledge and tools sections
- **Projects Section** - Showcase of work with animated project cards
- **Contact Page** - Easy way to get in touch
- **Sage Theme** - Custom color palette inspired by wisdom and knowledge
- **Accessible UI** - Keyboard navigation and screen reader support
- **Dark Mode Support** - Thoughtfully designed for both light and dark preferences

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
3. Customize the color theme in `tailwind.config.mjs` if desired
4. Replace placeholder images with your own in the `public` directory

---
