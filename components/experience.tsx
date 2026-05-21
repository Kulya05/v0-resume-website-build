"use client";

import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Data & Operations Assistant",
    company: "DSV Global Transport",
    location: "Wroclaw",
    period: "Apr 2025 – Present",
    achievements: [
      "Applied AI-assisted development (Claude, GitHub Copilot) to build Python automation tools used in production — demonstrating the ship-first mindset.",
      "Cross-functional collaboration and written communication in English daily — client-facing experience in an international corporate environment.",
      "Data integrity and compliance at scale — large-volume inventory management with zero-error standards.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Work Experience
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Building real-world solutions with modern technologies
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-3xl">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent md:left-1/2 md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-8 last:mb-0">
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-4 border-background bg-primary shadow-lg md:left-1/2">
                <Briefcase className="h-4 w-4 text-primary-foreground" />
              </div>

              {/* Content card */}
              <div className="ml-12 rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg md:ml-0 md:w-[calc(50%-2rem)] md:even:ml-auto md:even:mr-0">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                  <p className="font-medium text-primary">{exp.company}</p>
                  <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span className="leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
