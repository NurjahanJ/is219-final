# Explorer Portfolio

A modern, responsive portfolio website built with the Explorer brand archetype, featuring colors inspired by nature and an adventure-themed design. This portfolio showcases projects, skills, and professional journey in an engaging, visually appealing format.

![Explorer Portfolio Preview](public/explorer-preview.jpg)

## 🌲 Brand Archetype: Explorer

This portfolio embodies the Explorer archetype with:

- **Colors inspired by nature:**
  - Forest Green (#2f4f4f) - Primary color representing stability and adventure
  - Sky Blue (#87ceeb) - Secondary color evoking openness and possibility
  - Sandstone (#c2b280) - Accent color adding warmth and grounding

- **Adventure-themed content** that invites visitors to join a journey of discovery
- **Responsive design** that adapts to different devices like a true explorer adapts to different terrains

## 🛠️ Tech Stack

- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Accessible UI components
- **Windsurf** - Modern animation library
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
- **About Page** - Personal introduction with "My Journey" section featuring key milestones
- **Projects Page** - Showcase of work with filterable project cards
- **Explorer Theme** - Custom color palette inspired by nature
- **Accessible UI** - Keyboard navigation and screen reader support
- **Dark Mode Support** - Optimized for both light and dark preferences

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

Explore the live site: [https://dasboard-wheat.vercel.app/](https://dasboard-wheat.vercel.app/)

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

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Built with ❤️ using Next.js and the Explorer design system. Ready to embark on your next digital adventure!
