"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accessibility,
  Bot,
  Box,
  Code2,
  Container,
  FileCode,
  Figma,
  GitBranch,
  Globe,
  Languages,
  MessageSquare,
  Terminal,
} from "lucide-react";

const frontendSkills = [
  {
    name: "HTML5 / CSS3 / SCSS",
    description: "Semantic markup, BEM, responsive layouts, animations, cross-browser — production-grade",
    icon: FileCode,
  },
  {
    name: "JavaScript (ES6+)",
    description: "Async/await, modules, DOM manipulation, event handling, REST API integration",
    icon: Code2,
  },
  {
    name: "React",
    description: "Functional components, hooks, state management, Vercel deployment — live projects",
    icon: Globe,
  },
  {
    name: "Vue.js",
    description: "Familiar with component model and reactivity system — studied for projects",
    icon: Globe,
  },
  {
    name: "W3C / Accessibility",
    description: "Standards-compliant markup, WCAG awareness, semantic HTML, ARIA basics",
    icon: Accessibility,
  },
  {
    name: "Design Collaboration",
    description: "Figma — working with designers, extracting specs, implementing pixel-perfect UI",
    icon: Figma,
  },
];

const backendDevOps = [
  {
    name: "Git",
    description: "Version control daily — branches, PRs, collaborative workflows, GitHub Actions CI/CD",
    icon: GitBranch,
  },
  {
    name: "Node.js / Python",
    description: "Backend experience — NestJS microservices, Python automation scripts, REST API design",
    icon: Terminal,
  },
  {
    name: "Build Tools / Deploy",
    description: "Docker, Docker Compose, GitHub Actions, Vercel — full deployment pipeline experience",
    icon: Container,
  },
];

const aiToolkit = [
  {
    name: "AI / LLM APIs",
    description: "Anthropic API, OpenAI API — direct integration in production; Claude Code, Cursor daily",
    icon: Bot,
  },
  {
    name: "AI-Assisted Dev",
    description: "Agentic coding loops: plan → generate → test → refine",
    icon: MessageSquare,
  },
];

const otherSkills = [
  { name: "English C1", icon: Languages },
  { name: "International Teams", icon: Box },
  { name: "Client-Facing Communication", icon: MessageSquare },
  { name: "Technical Documentation", icon: FileCode },
];

export function Skills() {
  return (
    <section id="skills" className="bg-secondary/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Tech Stack
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Building production-grade frontends with modern tools and AI-assisted workflows
          </p>
        </div>

        {/* Frontend Skills */}
        <div className="mb-12">
          <h3 className="mb-6 flex items-center gap-2 text-xl font-semibold text-foreground">
            <Code2 className="h-5 w-5 text-primary" />
            Frontend Development
          </h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {frontendSkills.map((skill) => (
              <Card
                key={skill.name}
                className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
              >
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-base font-medium">
                    <skill.icon className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />
                    {skill.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Backend & DevOps */}
        <div className="mb-12">
          <h3 className="mb-6 flex items-center gap-2 text-xl font-semibold text-foreground">
            <Terminal className="h-5 w-5 text-primary" />
            Backend & DevOps
          </h3>
          <div className="grid gap-4 md:grid-cols-3">
            {backendDevOps.map((skill) => (
              <Card
                key={skill.name}
                className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
              >
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-base font-medium">
                    <skill.icon className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />
                    {skill.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* AI Toolkit */}
        <div className="mb-12">
          <h3 className="mb-6 flex items-center gap-2 text-xl font-semibold text-foreground">
            <Bot className="h-5 w-5 text-primary" />
            AI-Native Development
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {aiToolkit.map((skill) => (
              <Card
                key={skill.name}
                className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
              >
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-base font-medium">
                    <skill.icon className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />
                    {skill.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Skills */}
        <div>
          <h3 className="mb-6 text-xl font-semibold text-foreground">Other Skills</h3>
          <div className="flex flex-wrap gap-2">
            {otherSkills.map((skill) => (
              <Badge
                key={skill.name}
                variant="secondary"
                className="flex items-center gap-1.5 px-4 py-2 text-sm transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
              >
                <skill.icon className="h-3.5 w-3.5" />
                {skill.name}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
