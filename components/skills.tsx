"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Bot,
  Brain,
  Cloud,
  Code2,
  FileCode,
  GitBranch,
  Globe,
  Lightbulb,
  MessageSquare,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";

const aiToolkit = [
  {
    name: "Claude / Claude Code",
    description: "Daily driver — prompting, context management, code generation, agentic workflows",
    icon: Bot,
  },
  {
    name: "Anthropic API",
    description: "Direct API integration — message construction, system prompts, streaming",
    icon: MessageSquare,
  },
  {
    name: "OpenAI / Codex",
    description: "Code generation, completion, embedding exploration",
    icon: Sparkles,
  },
  {
    name: "AI-Assisted Dev",
    description: "Agentic coding loops: plan → generate → test → refine",
    icon: Zap,
  },
  {
    name: "Prototyping",
    description: "Concept → working prototype workflow — rapid iteration",
    icon: Lightbulb,
  },
  {
    name: "LLM Understanding",
    description: "Prompt engineering, context windows, temperature/top-p intuition",
    icon: Brain,
  },
];

const devSkills = [
  {
    name: "JavaScript / React",
    description: "ES6+, component architecture, hooks, async",
    icon: Code2,
  },
  {
    name: "HTML / CSS",
    description: "Production-grade UI with custom components",
    icon: FileCode,
  },
  {
    name: "REST APIs",
    description: "Integration, authentication, webhook flows",
    icon: Globe,
  },
  {
    name: "Python",
    description: "Automation scripts, data pipelines, workflow tools",
    icon: Terminal,
  },
  {
    name: "Git / DevOps",
    description: "Version control, CI/CD concepts, Azure DevOps",
    icon: GitBranch,
  },
  {
    name: "Cloud",
    description: "Azure platform, GCP fundamentals, Vercel",
    icon: Cloud,
  },
];

const otherSkills = ["English C1", "International Teams", "Cross-functional Collaboration", "Rapid Learning"];

export function Skills() {
  return (
    <section id="skills" className="bg-secondary/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Skills & Expertise
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Building with AI as a core development partner, not just a tool
          </p>
        </div>

        {/* AI-First Toolkit */}
        <div className="mb-12">
          <h3 className="mb-6 flex items-center gap-2 text-xl font-semibold text-foreground">
            <Bot className="h-5 w-5 text-primary" />
            AI-First Toolkit
          </h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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

        {/* Development Skills */}
        <div className="mb-12">
          <h3 className="mb-6 flex items-center gap-2 text-xl font-semibold text-foreground">
            <Code2 className="h-5 w-5 text-primary" />
            Development Skills
          </h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {devSkills.map((skill) => (
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
                key={skill}
                variant="secondary"
                className="px-4 py-2 text-sm transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
