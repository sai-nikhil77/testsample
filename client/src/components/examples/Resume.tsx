import Resume from "../Resume";

export default function ResumeExample() {
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

  return (
    <Resume
      experience={experience}
      education={education}
      certifications={certifications}
      onDownloadResume={() => console.log("Download resume triggered")}
    />
  );
}
