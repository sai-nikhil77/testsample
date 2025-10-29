import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import projectImage from "@assets/stock_images/modern_clean_laptop__6c491831.jpg";

export default function Portfolio() {
  const personalInfo = {
    name: "Sai Nikhil Somepalli",
    title: "Full Stack Software Developer",
    email: "ssomepal@buffalo.edu",
    linkedinUrl: "https://www.linkedin.com/in/sainikhilsomepalli/",
    githubUrl: "https://github.com/sai-nikhil77",
  };

  const biography = [
    "I'm a Full Stack Developer with a Master's in Computer Science from University at Buffalo and hands-on experience building enterprise-scale web applications. Currently working at BNY Mellon, I specialize in creating high-performance backend services and intuitive frontend experiences.",
    "My expertise spans the full technology stack - from designing RESTful and GraphQL APIs with Django, Flask, and FastAPI to building responsive React applications with TypeScript. I'm passionate about cloud architecture, having achieved AWS Solutions Architect certification, and regularly work with Docker, Kubernetes, and CI/CD pipelines.",
    "I thrive on solving complex problems and optimizing performance - whether it's reducing API latency by 30%, cutting application load times by 40%, or implementing AI-powered features for enhanced system reliability.",
  ];

  const skills = [
    "Python",
    "Java",
    "TypeScript",
    "JavaScript",
    "React.js",
    "Node.js",
    "Django",
    "Flask",
    "FastAPI",
    "Spring Boot",
    "GraphQL",
    "PostgreSQL",
    "MongoDB",
    "MySQL",
    "AWS",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "Git",
  ];

  const projects = [
    {
      id: "serverless-info-system",
      title: "Serverless Information Retrieval System",
      description: "Built a serverless information retrieval system on AWS using S3, Lambda, DynamoDB, and API Gateway, achieving 80% faster query response times and reducing operational costs by 40%.",
      image: projectImage,
      technologies: ["AWS Lambda", "DynamoDB", "S3", "API Gateway", "Python"],
      githubUrl: "https://github.com/sai-nikhil77",
    },
    {
      id: "food-ordering-app",
      title: "Full-Stack Food Ordering Application",
      description: "Developed a comprehensive food ordering platform with Django backend and React frontend, featuring calorie tracking, fitness integration, and secure payment processing.",
      image: projectImage,
      technologies: ["Django", "React", "PostgreSQL", "Django REST Framework"],
      githubUrl: "https://github.com/sai-nikhil77",
    },
    {
      id: "enterprise-web-apps",
      title: "Enterprise Web Applications",
      description: "Designed and developed enterprise-scale applications at BNY Mellon using modern frameworks, improving backend performance and reducing API latency by 30% while ensuring WCAG compliance.",
      image: projectImage,
      technologies: ["Django", "Flask", "FastAPI", "React", "TypeScript", "AWS"],
      githubUrl: "https://github.com/sai-nikhil77",
    },
  ];

  const experience = [
    {
      company: "Verus",
      position: "Full Stack Developer",
      period: "Jan 2025 - Present",
      description: "Leading development of modern web applications with focus on scalability and performance. Building full-stack solutions using cutting-edge technologies and best practices.",
    },
    {
      company: "BNY Mellon",
      position: "Full Stack Developer",
      period: "May 2024 - Dec 2024",
      description: "Designed and developed enterprise-scale web applications using Django, Flask, and FastAPI, improving backend performance and reducing API latency by 30%. Built responsive frontends with React.js and TypeScript. Automated CI/CD pipelines with Jenkins, Docker, and Kubernetes on AWS. Integrated AI-powered anomaly detection models and machine learning APIs for predictive analytics.",
    },
    {
      company: "Sage Softtech",
      position: "Full Stack Developer",
      period: "Jan 2022 - July 2023",
      description: "Developed RESTful APIs with Flask, PostgreSQL, and Docker, reducing average response time by 30%. Optimized backend logic and SQL queries, cutting application load times by 40%. Implemented frontend performance optimizations lowering API response times from 200ms to <20ms. Built serverless information retrieval system on AWS achieving 80% faster query response times.",
    },
  ];

  const education = [
    {
      institution: "University at Buffalo",
      degree: "Master of Science in Computer Science",
      period: "Aug 2023 - Dec 2024",
    },
    {
      institution: "VIT Vellore",
      degree: "B. Tech in Computer Science and Engineering",
      period: "2018 - 2022",
    },
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2024",
    },
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2024",
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
        description="Master's in Computer Science from University at Buffalo. Building high-performance enterprise applications at BNY Mellon. AWS Certified Solutions Architect passionate about full-stack development and cloud architecture."
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
