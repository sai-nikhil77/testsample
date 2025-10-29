import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import heroImage from "@assets/generated_images/Professional_workspace_hero_background_beb3785e.png";

interface HeroProps {
  name: string;
  title: string;
  description: string;
  linkedinUrl: string;
  githubUrl: string;
  email: string;
  onDownloadResume: () => void;
  onViewWork: () => void;
}

export default function Hero({
  name,
  title,
  description,
  linkedinUrl,
  githubUrl,
  email,
  onDownloadResume,
  onViewWork,
}: HeroProps) {
  return (
    <section
      className="relative flex items-center justify-center min-h-[80vh] w-full"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
          {name}
        </h1>
        <p className="text-2xl md:text-3xl font-semibold text-white/90 mb-4">
          {title}
        </p>
        <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Button
            size="lg"
            onClick={onViewWork}
            className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover-elevate active-elevate-2"
            data-testid="button-view-work"
          >
            View My Work
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={onDownloadResume}
            className="backdrop-blur-sm bg-white/10 text-white border-white/30 hover-elevate active-elevate-2"
            data-testid="button-download-resume"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </Button>
        </div>
        
        <div className="flex items-center justify-center gap-6">
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover-elevate active-elevate-2 transition-all"
            data-testid="link-linkedin"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover-elevate active-elevate-2 transition-all"
            data-testid="link-github"
            aria-label="GitHub Profile"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href={`mailto:${email}`}
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover-elevate active-elevate-2 transition-all"
            data-testid="link-email"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
