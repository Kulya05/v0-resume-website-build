"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const contactLinks = [
  {
    name: "Email",
    href: "mailto:artemwork05@gmail.com",
    icon: Mail,
    label: "artemwork05@gmail.com",
  },
  {
    name: "Phone",
    href: "tel:+48507954710",
    icon: Phone,
    label: "+48 507 954 710",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/artem-kulinich-3ab6482a9/",
    icon: Linkedin,
    label: "LinkedIn Profile",
  },
  {
    name: "GitHub",
    href: "https://github.com/Kulya05",
    icon: Github,
    label: "GitHub Profile",
  },
];

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Get In Touch
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Portfolio & code samples available on request. Let&apos;s build something amazing together.
          </p>
        </div>

        {/* Contact Icons */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-6">
          {contactLinks.map((link) => (
            <Button
              key={link.name}
              variant="outline"
              size="lg"
              className="group h-auto flex-col gap-2 px-8 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary/5 hover:shadow-lg"
              asChild
            >
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                <link.icon className="h-8 w-8 text-muted-foreground transition-colors duration-300 group-hover:text-primary" />
                <span className="text-sm font-medium text-foreground">{link.name}</span>
                <span className="text-xs text-muted-foreground">{link.label}</span>
              </a>
            </Button>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Artem Kulinich. All rights reserved.
          </p>
          <p className="mt-2 text-xs text-muted-foreground/70">
            Built with React, Tailwind CSS & AI-first methodology
          </p>
        </div>
      </div>
    </footer>
  );
}
