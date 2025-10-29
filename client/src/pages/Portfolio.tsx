import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import projectImage from "@assets/stock_images/modern_clean_laptop__6c491831.jpg";

export default function Portfolio() {
  const personalInfo = {
    name: "Alex Johnson",
    title: "Full Stack Software Developer",
    email: "alex.johnson@example.com",
    linkedinUrl: "https://linkedin.com/in/alexjohnson",
    githubUrl: "https://github.com/alexjohnson",
  };

  const biography = [
    "I'm a passionate software developer with over 5 years of experience building scalable web applications. My journey in tech started with a curiosity about how things work, and has evolved into a career focused on creating meaningful digital experiences.",
    "I specialize in full-stack development with a strong emphasis on clean code, user experience, and performance optimization. I thrive in collaborative environments and enjoy mentoring junior developers.",
    "When I'm not coding, you'll find me contributing to open-source projects, writing technical blog posts, or exploring the latest trends in software architecture.",
  ];

  const skills = [
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
  ];

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

  const experience = [
    {
      company: "Tech Innovations Inc.",
      position: "Senior Full Stack Developer",
      period: "2021 - Present",
      description: "Lead development of cloud-based SaaS applications, mentor junior developers, and architect scalable microservices solutions serving 100K+ users.",
    },
    {
      company: "Digital Solutions Corp",
      position: "Full Stack Developer",
      period: "2019 - 2021",
      description: "Developed and maintained multiple client-facing web applications using React and Node.js. Improved application performance by 40% through optimization.",
    },
    {
      company: "StartupXYZ",
      position: "Junior Developer",
      period: "2018 - 2019",
      description: "Built responsive web interfaces and RESTful APIs. Collaborated with cross-functional teams in an agile environment.",
    },
  ];

  const education = [
    {
      institution: "University of Technology",
      degree: "Bachelor of Science in Computer Science",
      period: "2014 - 2018",
    },
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2022",
    },
    {
      name: "Professional Scrum Master I",
      issuer: "Scrum.org",
      year: "2021",
    },
    {
      name: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      year: "2020",
    },
  ];

  const handleDownloadResume = () => {
    console.log("Downloading resume...");
    alert("Resume download would start here. In production, this would download a PDF file.");
  };

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation name={personalInfo.name} />
      
      <Hero
        name={personalInfo.name}
        title={personalInfo.title}
        description="Passionate about building elegant solutions to complex problems. Specializing in modern web technologies and cloud architecture."
        linkedinUrl={personalInfo.linkedinUrl}
        githubUrl={personalInfo.githubUrl}
        email={personalInfo.email}
        onDownloadResume={handleDownloadResume}
        onViewWork={scrollToProjects}
      />
      
      <About biography={biography} skills={skills} />
      
      <Projects projects={projects} />
      
      <Resume
        experience={experience}
        education={education}
        certifications={certifications}
        onDownloadResume={handleDownloadResume}
      />
      
      <Contact
        email={personalInfo.email}
        linkedinUrl={personalInfo.linkedinUrl}
        githubUrl={personalInfo.githubUrl}
        responseTime="I typically respond within 24 hours"
      />
      
      <footer className="py-8 px-6 border-t text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
