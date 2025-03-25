import Projects from "./Projects"; // Import your client component

export const generateMetadata = () => ({
  title: "Projects",
  description: "Explore the best projects created by Rupam Majumder.",
  keywords: "React, Next.js, Portfolio, Projects",
});

export default function ProjectsPage() {
  return <Projects />;
}
