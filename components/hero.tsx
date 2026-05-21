"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Github, Globe, Mail, MapPin, Phone } from "lucide-react";

const techStack = ["JavaScript", "React", "Vue", "CSS/SCSS", "AI-Native"];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/30 py-20 md:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-8 text-center">
          <Avatar className="h-32 w-32 border-4 border-primary/20 shadow-xl ring-4 ring-background transition-transform duration-300 hover:scale-105 md:h-40 md:w-40">
            <AvatarImage src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PxSIp1f5sIvLKeAn7oaqIb7qUa1FZe.png" alt="Artem Kulinich" />
            <AvatarFallback className="bg-primary text-2xl font-bold text-primary-foreground md:text-3xl">
              AK
            </AvatarFallback>
          </Avatar>

          <div className="space-y-3">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Artem Kulinich
            </h1>
            <p className="text-xl font-medium text-primary md:text-2xl">
              Frontend Developer
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {techStack.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              {"Wroclaw, Poland"}
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="h-4 w-4" />
              +48 507 954 710
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="h-4 w-4" />
              artemwork05@gmail.com
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
            <a
              href="https://monterail-cv-page.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-primary"
            >
              <Globe className="h-4 w-4" />
              Portfolio
            </a>
            <span className="text-muted-foreground/50">|</span>
            <a
              href="https://github.com/Kulya05"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-primary"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>

          <p className="max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            {"Frontend developer who ships production interfaces and builds with AI as a core engineering tool. I have delivered real products end-to-end — a full e-commerce storefront, a live interactive web app deployed on Vercel, and an AI-powered backend microservice. I write clean, reusable, cross-browser compatible code with strong UX intuition built through shipping to real users."}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              size="lg"
              className="gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              asChild
            >
              <a href="/Artem_Kulinich_CV.pdf" download>
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="#contact">
                <Mail className="h-4 w-4" />
                Contact Me
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
