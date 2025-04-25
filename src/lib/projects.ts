// Define the Project type for better type safety
export interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string; // Optional GitHub URL
  demo?: string;   // Optional demo URL
  image?: string;  // Optional image path
}

// Export an array of projects
export const projects: Project[] = [
  {
    title: "Dashboard UI",
    description: "A responsive dashboard built using Next.js and Tailwind CSS, with charts and data layout.",
    tags: ["Next.js", "Tailwind CSS", "Chart.js", "Vercel"],
    github: "https://github.com/NurjahanJ/dasboard",
    demo: "https://dasboard-wheat.vercel.app/"
  },
  {
    title: "Flutter Calculator",
    description: "A simple but well-designed calculator app built using Flutter.",
    tags: ["Flutter", "Dart", "Mobile UI"],
    github: "https://github.com/NurjahanJ/flutter_calculator"
  },
  {
    title: "Story AI",
    description: "An interactive storytelling application that uses AI to generate personalized stories based on user input.",
    tags: ["AI", "Python", "NLP", "Interactive"],
    github: "https://github.com/NurjahanJ/story_ai"
  }
];

// Helper function to get all unique tags across projects
export function getAllTags(): string[] {
  const allTags = projects.flatMap(project => project.tags);
  return [...new Set(allTags)];
}

// Helper function to filter projects by tag
export function getProjectsByTag(tag: string): Project[] {
  return projects.filter(project => project.tags.includes(tag));
}
