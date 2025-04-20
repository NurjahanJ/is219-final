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
    description: "A clean, responsive dashboard app built with modern React and Tailwind UI practices.",
    tags: ["Next.js", "Tailwind CSS", "Chart.js", "Vercel"],
    github: "https://github.com/NurjahanJ/dashboard",
    demo: "https://dasboard-wheat.vercel.app/"
  },
  // You can add more projects here as needed
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
