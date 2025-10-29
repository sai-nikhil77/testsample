import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Briefcase, GraduationCap, Award } from "lucide-react";

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

interface ResumeProps {
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
  onDownloadResume: () => void;
}

export default function Resume({
  experience,
  education,
  certifications,
  onDownloadResume,
}: ResumeProps) {
  return (
    <section id="resume" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
          <h2 className="text-4xl md:text-5xl font-bold">Resume</h2>
          <Button
            size="lg"
            onClick={onDownloadResume}
            data-testid="button-download-resume-section"
          >
            <Download className="w-5 h-5 mr-2" />
            Download PDF Resume
          </Button>
        </div>

        <div className="space-y-12">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-semibold">Experience</h3>
            </div>
            
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <Card key={index} data-testid={`card-experience-${index}`}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                      <div>
                        <h4 className="text-xl font-semibold">{exp.position}</h4>
                        <p className="text-lg text-muted-foreground">{exp.company}</p>
                      </div>
                      <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-base leading-relaxed">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <Card key={index} data-testid={`card-education-${index}`}>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-2">{edu.degree}</h4>
                    <p className="text-base text-muted-foreground mb-2">{edu.institution}</p>
                    <span className="text-sm font-medium text-muted-foreground">
                      {edu.period}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-semibold">Certifications</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} data-testid={`card-certification-${index}`}>
                  <CardContent className="p-6">
                    <h4 className="text-base font-semibold mb-2">{cert.name}</h4>
                    <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                    <span className="text-sm font-medium text-muted-foreground">
                      {cert.year}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
