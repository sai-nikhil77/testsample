import About from "../About";

export default function AboutExample() {
  return (
    <About
      biography={[
        "I'm a passionate software developer with over 5 years of experience building scalable web applications. My journey in tech started with a curiosity about how things work, and has evolved into a career focused on creating meaningful digital experiences.",
        "I specialize in full-stack development with a strong emphasis on clean code, user experience, and performance optimization. I thrive in collaborative environments and enjoy mentoring junior developers.",
        "When I'm not coding, you'll find me contributing to open-source projects, writing technical blog posts, or exploring the latest trends in software architecture.",
      ]}
      skills={[
        "React",
        "TypeScript",
        "Node.js",
        "Python",
        "PostgreSQL",
        "AWS",
        "Docker",
        "GraphQL",
        "REST APIs",
        "Git",
        "CI/CD",
        "Agile",
      ]}
    />
  );
}
