import { Linkedin, Github, Mail, MapPin, ExternalLink, Download } from "lucide-react";
import { projects, experience, skills } from "../data";
import { getGreeting } from "../utils";
import { AnimatedCounter, ScrollReveal } from "../components/ui";
import resumePDF from "../assets/sanele-krakra-frontend-engineer.pdf";

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/sanele-krakra" },
  { icon: Github, label: "GitHub", href: "https://github.com/sanele23" },
  { icon: Mail, label: "Email", href: "mailto:sanele23@live.com" },
];

const stats = [
  { label: "Projects Shipped", getValue: () => projects.length, suffix: "" },
  { label: "Technologies", getValue: () => skills.length, suffix: "" },
  { label: "Years Experience", getValue: () => 4, suffix: "+" },
  { label: "Companies", getValue: () => experience.filter((e) => e.type === "work").length, suffix: "" },
];

export default function OverviewSection() {
  return (
    <section className="relative pt-24 pb-0 overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:96px_96px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pt-10 pb-16 md:pb-20">
        {/* ── Section header ── */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-outline-variant pb-6 mb-10">
            <div className="flex items-end gap-3 md:gap-5">
              <span className="font-mono text-lg md:text-2xl text-google-grey-100 font-bold tracking-widest">01 //</span>
              <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tight text-google-grey-50 leading-none uppercase">
                SYS_ARCH
              </h2>
            </div>
            <div className="inline-flex items-center gap-2 border border-outline-variant px-3 py-2 text-google-grey-400 text-[0.7rem] md:text-xs font-mono uppercase tracking-[0.16em]">
              <span className="w-2 h-2 rounded-full bg-google-grey-300 animate-pulse-slow" />
              AVAILABLE_FOR_HIRE
            </div>
          </div>
        </ScrollReveal>

        {/* ── Hero grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12">
          {/* Left: identity */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal delay={0.05}>
              <p className="font-mono text-xs text-google-grey-500 uppercase tracking-[0.2em]">
                {getGreeting()} — Frontend Engineer
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="font-headline text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-google-grey-50 leading-[1.0]">
                Sanele<br />Krakra.
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="text-base md:text-lg text-google-grey-400 max-w-xl leading-relaxed">
                Frontend Engineer with 4+ years building scalable,
                production-grade web platforms using React, TypeScript, and
                Next.js. Passionate about clean UI/UX design, component-driven
                architecture, and delivering performant interfaces that handle
                complex business logic with clarity and precision.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="flex flex-wrap items-center gap-2">
                <span className="flex items-center gap-1.5 font-mono text-xs text-google-grey-500 uppercase tracking-widest border border-outline-variant px-3 py-2">
                  <MapPin size={12} />
                  Cape Town, SA
                </span>
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={label !== "Email" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-outline-variant px-3 py-2 text-[0.68rem] font-mono uppercase tracking-widest text-google-grey-300 hover:text-google-grey-50 hover:border-google-grey-300 transition-colors"
                    aria-label={label}
                  >
                    <Icon size={13} />
                    {label}
                  </a>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right: CTAs */}
          <div className="lg:col-span-5 flex flex-col gap-3 lg:pt-2">
            <ScrollReveal delay={0.25}>
              <a
                href="#work"
                className="flex items-center justify-between w-full border border-google-grey-100 bg-google-grey-100/5 hover:bg-google-grey-100 hover:text-black px-5 py-4 font-mono text-sm uppercase tracking-widest text-google-grey-100 transition-colors group"
              >
                View Projects
                <ExternalLink size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <a
                href={resumePDF}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full border border-outline-variant hover:border-google-grey-300 px-5 py-4 font-mono text-sm uppercase tracking-widest text-google-grey-400 hover:text-google-grey-100 transition-colors group"
              >
                Download Resume
                <Download size={15} className="group-hover:translate-y-0.5 transition-transform" />
              </a>
            </ScrollReveal>
          </div>
        </div>

        {/* ── Stats row ── */}
        <div className="border-t border-outline-variant pt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-outline-variant">
            {stats.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 0.08}>
                <div className="bg-background px-6 py-6 md:py-7">
                  <p className="font-headline text-4xl md:text-5xl font-extrabold text-google-grey-50">
                    <AnimatedCounter value={`${s.getValue()}${s.suffix}`} />
                  </p>
                  <p className="font-mono text-[0.65rem] uppercase tracking-widest text-google-grey-500 mt-2">
                    {s.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
