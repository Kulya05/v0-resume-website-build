"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Download, Mail, MapPin, Phone } from "lucide-react";

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
            <AvatarImage src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MQqifT0TJ0gU4v4JO1WMlD8iFyqWNk.png" alt="Artem Kulinich" />
            <AvatarFallback className="bg-primary text-2xl font-bold text-primary-foreground md:text-3xl">
              AK
            </AvatarFallback>
          </Avatar>

          <div className="space-y-3">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Artem Kulinich
            </h1>
            <p className="text-xl font-medium text-primary md:text-2xl">
              Junior AI-First Developer
            </p>
            <p className="text-muted-foreground">
              Monterail | Wroclaw / Remote
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              Wroclaw, Poland
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

          <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            {"Cloud Applications Engineering student who builds with AI — not just alongside it. I've shipped a production e-commerce platform solo, written automation scripts that replaced hours of manual work, and I obsessively explore how AI changes the way software gets built."}
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
