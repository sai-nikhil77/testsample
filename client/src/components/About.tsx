import { Badge } from "@/components/ui/badge";

interface AboutProps {
  biography: string[];
  skills: string[];
}

export default function About({ biography, skills }: AboutProps) {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          About Me
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {biography.map((paragraph, index) => (
            <p key={index} className="text-lg leading-relaxed text-foreground">
              {paragraph}
            </p>
          ))}
          
          <div className="pt-6">
            <h3 className="text-2xl font-semibold mb-6">Skills & Expertise</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="px-4 py-2 text-base"
                  data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
