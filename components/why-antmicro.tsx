"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Building2, Code, Heart, Rocket } from "lucide-react";

const reasons = [
  {
    icon: Building2,
    title: "World-Class Partners",
    description: "Antmicro works with Google, Nvidia, Intel on open source infrastructure — that is not a typical company.",
  },
  {
    icon: Code,
    title: "Technical Challenge",
    description: "The marketing team here is not writing product descriptions; it is explaining edge computing and FPGA to people who know what those words mean.",
  },
  {
    icon: Heart,
    title: "Open Source Culture",
    description: "I build with open source tools, contribute to GitHub, and am genuinely interested in the technology Antmicro works on.",
  },
  {
    icon: Rocket,
    title: "Ready to Start",
    description: "I want to build web interfaces that do justice to world-class engineering — and I am ready to do it full-time, in Wroclaw, starting now.",
  },
];

export function WhyAntmicro() {
  return (
    <section id="why-antmicro" className="bg-secondary/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Why Antmicro
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
            This role requires a frontend developer who understands what they are building, not just how to style it
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
            >
              <CardContent className="flex gap-4 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                  <reason.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">{reason.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{reason.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
