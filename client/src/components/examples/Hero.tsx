import Hero from "../Hero";

export default function HeroExample() {
  return (
    <Hero
      name="Alex Johnson"
      title="Full Stack Software Developer"
      description="Passionate about building elegant solutions to complex problems. Specializing in modern web technologies and cloud architecture."
      linkedinUrl="https://linkedin.com/in/alexjohnson"
      githubUrl="https://github.com/alexjohnson"
      email="alex.johnson@example.com"
      onDownloadResume={() => console.log("Download resume triggered")}
      onViewWork={() => console.log("View work triggered")}
    />
  );
}
