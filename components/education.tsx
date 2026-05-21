"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, GraduationCap } from "lucide-react";

const education = [
  {
    type: "degree",
    title: "BSc — Cloud Applications Programming",
    institution: "WSB Merito Wroclaw",
    period: "2023 – Present (Year 3)",
    note: "EU citizen, full-time eligible",
    highlights: [
      "Core curriculum: web technologies, cloud architecture, databases, DevOps, system security",
      "Minimum Bachelor's degree requirement met — final year of CS-related engineering programme",
      "Permanent residency in Poland (EU), full-time employment only",
    ],
  },
  {
    type: "certification",
    title: "Salesforce Developer — Certified + Tutor",
    institution: "Synebo",
    period: "2024",
    highlights: [
      "Lightning Web Components (frontend) and Apex (backend) — component-based UI architecture directly analogous to React/Vue patterns",
      "Contributed to open source tooling exploration and documented findings",
      "Experience with open source development culture",
    ],
  },
];

export function Education() {
  return (
    <section id="education" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Education & Training
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Continuous learning with a focus on web technologies and cloud
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {education.map((item, index) => (
            <Card
              key={index}
              className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
            >
              <CardHeader>
                <div className="mb-2 flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                    {item.type === "degree" ? (
                      <GraduationCap className="h-5 w-5 text-primary" />
                    ) : (
                      <Award className="h-5 w-5 text-primary" />
                    )}
                  </div>
                  <Badge variant="secondary" className="text-xs capitalize">
                    {item.type}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{item.title}</CardTitle>
                <p className="font-medium text-primary">{item.institution}</p>
                <p className="text-sm text-muted-foreground">{item.period}</p>
                {item.note && (
                  <p className="text-xs text-muted-foreground/80">{item.note}</p>
                )}
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {item.highlights.map((highlight, hIndex) => (
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
