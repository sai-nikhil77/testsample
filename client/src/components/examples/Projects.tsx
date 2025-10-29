import Projects from "../Projects";
import projectImage from "@assets/stock_images/modern_clean_laptop__6c491831.jpg";

export default function ProjectsExample() {
  const projects = [
    {
      id: "ecommerce-platform",
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce solution with real-time inventory management, secure payment processing, and advanced analytics dashboard.",
      image: projectImage,
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      githubUrl: "https://github.com/alexjohnson/ecommerce-platform",
      liveUrl: "https://demo-ecommerce.example.com",
    },
    {
      id: "task-manager",
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates, team collaboration features, and intelligent priority sorting.",
      image: projectImage,
      technologies: ["TypeScript", "Next.js", "Prisma", "WebSocket"],
      githubUrl: "https://github.com/alexjohnson/task-manager",
      liveUrl: "https://tasks.example.com",
    },
    {
      id: "weather-dashboard",
      title: "Weather Dashboard",
      description: "Interactive weather dashboard providing detailed forecasts, historical data visualization, and location-based alerts.",
      image: projectImage,
      technologies: ["React", "D3.js", "OpenWeather API"],
      githubUrl: "https://github.com/alexjohnson/weather-dashboard",
    },
  ];

  return <Projects projects={projects} />;
}
