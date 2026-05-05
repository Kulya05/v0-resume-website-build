"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Folder } from "lucide-react";

const projects = [
  {
    title: "E-commerce Platform",
    subtitle: "Full Stack + AI Automation",
    period: "2025 – Present",
    tech: ["Shopify", "JavaScript", "Liquid", "CSS", "REST APIs"],
    highlights: [
      "Built and shipped a production storefront end-to-end — architecture, backend logic, UX, third-party integrations — solo.",
      "Used Claude and Codex as core development partners — architectural collaborators for reasoning through integration design and debugging edge cases.",
      "REST API integrations for cart automation, upsell triggers, and payment flows.",
      "Custom UI components engineered for conversion — iterative, data-informed design process.",
    ],
  },
  {
    title: "Workflow Automation",
    subtitle: "DSV Operations",
    period: "2025 – Present",
    tech: ["Python", "Claude AI", "GitHub Copilot", "Internal tooling"],
    highlights: [
      "Identified repetitive manual reporting tasks and built Python scripts to automate them — reduced operational cycle time measurably.",
      "Used Claude as a reasoning partner — problem decomposition, script architecture, edge case identification.",
      "Documented workflows and automated data verification pipelines — bringing software engineering discipline to operations.",
    ],
  },
];

export function Projects() {
  return (
    <section id="projects" className="bg-secondary/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Featured Projects
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Real-world products built with AI-first methodology
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
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
                  <ExternalLink className="h-5 w-5 text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
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
