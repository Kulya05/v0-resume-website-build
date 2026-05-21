"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Folder, Github } from "lucide-react";

const projects = [
  {
    title: "Interactive CV Web App",
    subtitle: "Solo Project",
    period: "2025",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://v0-resume-website-build-kuaswtxly-kulya05s-projects.vercel.app",
    highlights: [
      "Built and deployed a production-grade interactive single-page web app on Vercel — smooth-scroll navigation, structured responsive sections, cross-device compatible.",
      "Frontend built with Next.js, React and Tailwind CSS with strong attention to layout precision, spacing rhythm, and responsive behaviour across viewports.",
      "Demonstrates the ability to take a design idea and implement it as a performant, standards-compliant frontend independently.",
    ],
  },
  {
    title: "E-commerce Platform",
    subtitle: "Full Frontend + Integrations",
    period: "2025 – Present",
    tech: ["JavaScript", "Liquid", "CSS", "REST APIs", "Shopify"],
    liveUrl: "https://0csg6b-b0.myshopify.com",
    highlights: [
      "Built a full production storefront from scratch — custom JavaScript components, Liquid templates, CSS animations, third-party REST API integrations (cart, upsell, payments).",
      "Every UI element built with cross-browser compatibility, responsive design, and performance as first-class requirements. W3C-valid markup throughout.",
      "UX decisions informed by real conversion data — iterative, empirical front-end development with measurable outcomes.",
    ],
  },
  {
    title: "Smart Mafia — AI Voice Narrator",
    subtitle: "Team Project (Fullstack AI & API)",
    period: "2024",
    tech: ["NestJS", "PostgreSQL", "Socket.io", "OpenAI API", "Docker"],
    githubUrl: "https://github.com/Kulya05",
    highlights: [
      "Built the entire AI microservice from scratch in a 4-person team — NestJS backend, OpenAI API integration, Socket.io real-time events, Swagger docs.",
      "Implemented unit and integration tests, Docker Compose setup, CI/CD on GitHub Actions.",
      "Demonstrates backend capability alongside frontend primary skills — directly relevant for engineers who can assist in web technology projects.",
    ],
  },
];

export function Projects() {
  return (
    <section id="projects" className="bg-secondary/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Projects
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Real-world products built with modern frontend technologies and AI-assisted workflows
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
            >
              <CardHeader>
                <div className="mb-2 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                    <Folder className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex gap-2">
                    {project.liveUrl && (
                      <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors hover:text-primary" />
                          <span className="sr-only">View live site</span>
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 text-muted-foreground transition-colors hover:text-primary" />
                          <span className="sr-only">View on GitHub</span>
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <p className="text-sm font-medium text-primary">{project.subtitle}</p>
                <p className="text-sm text-muted-foreground">{project.period}</p>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <ul className="flex-1 space-y-2">
                  {project.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
