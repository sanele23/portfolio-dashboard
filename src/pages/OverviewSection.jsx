import {
  Linkedin,
  Github,
  Mail,
  MapPin,
  ArrowRight,
  Download,
} from "lucide-react";
import { motion } from "framer-motion";
import { projects, experience, skills } from "../data";
import { getGreeting } from "../utils";
import { AnimatedCounter, ScrollReveal } from "../components/ui";
import profileImg from "../assets/profile-image.png";
import resumePDF from "../assets/sanele-krakra-frontend-engineer.pdf";

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sanele-krakra",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/sanele23",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:sanele23@live.com",
  },
];

const stats = [
  {
    label: "Projects Shipped",
    getValue: () => projects.length,
    suffix: "",
    color: "text-brand-primary",
  },
  {
    label: "Technologies",
    getValue: () => skills.length,
    suffix: "",
    color: "text-google-green",
  },
  {
    label: "Years Experience",
    getValue: () => 4,
    suffix: "+",
    color: "text-google-yellow",
  },
  {
    label: "Companies",
    getValue: () => experience.filter((e) => e.type === "work").length,
    suffix: "",
    color: "text-google-red",
  },
];

export default function OverviewSection() {
  return (
    <section className="pt-24 pb-0 overflow-hidden">
      {/* ── Hero ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 pt-12 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="lg:col-span-7 space-y-7">
            {/* Available badge */}
            <ScrollReveal>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-google-green text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-google-green animate-pulse-slow" />
                Available for new opportunities
              </div>
            </ScrollReveal>

            {/* Headline */}
            <ScrollReveal delay={0.1}>
              <h1 className="font-headline text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-google-grey-900 dark:text-white leading-[1.08]">
                {getGreeting()}, I&apos;m{" "}
                <span className="text-brand-primary">Sanele Krakra</span>.
              </h1>
            </ScrollReveal>

            {/* Role */}
            <ScrollReveal delay={0.15}>
              <p className="text-xl font-semibold text-google-grey-500 dark:text-google-grey-400 -mt-2">
                Frontend Engineer · Cape Town, SA
              </p>
            </ScrollReveal>

            {/* Bio */}
            <ScrollReveal delay={0.2}>
              <p className="text-lg text-google-grey-600 dark:text-google-grey-400 max-w-xl leading-relaxed">
                Frontend Engineer with 4+ years building scalable,
                production-grade web platforms using React, TypeScript, and
                Next.js. Passionate about clean UI/UX design, component-driven
                architecture, and delivering performant interfaces that handle
                complex business logic with clarity and precision.
              </p>
            </ScrollReveal>

            {/* CTA buttons */}
            <ScrollReveal delay={0.25}>
              <div className="flex flex-wrap gap-4 pt-1">
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary-hover text-white px-8 py-4 rounded-xl font-bold text-base shadow-ambient hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
                >
                  View Projects
                  <ArrowRight size={18} />
                </a>
                <a
                  href={resumePDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-google-grey-100 dark:bg-google-grey-800 hover:bg-google-grey-200 dark:hover:bg-google-grey-700 text-google-grey-900 dark:text-white px-8 py-4 rounded-xl font-bold text-base transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
                >
                  <Download size={18} />
                  Resume
                </a>
              </div>
            </ScrollReveal>

            {/* Social links + location */}
            <ScrollReveal delay={0.3}>
              <div className="flex flex-wrap items-center gap-3 pt-1">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={label !== "Email" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-google-grey-200 dark:border-google-grey-700 text-google-grey-700 dark:text-google-grey-300 text-sm font-medium hover:border-brand-primary hover:text-brand-primary dark:hover:text-brand-primary hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all"
                  >
                    <Icon size={15} />
                    <span className="hidden sm:inline">{label}</span>
                  </a>
                ))}
                <span className="flex items-center gap-1.5 text-sm text-google-grey-500 dark:text-google-grey-400 ml-1">
                  <MapPin size={14} className="shrink-0" />
                  Cape Town, South Africa
                </span>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Profile Photo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <ScrollReveal delay={0.2}>
              <div className="relative">
                {/* Glow orbs */}
                <div className="absolute -inset-8 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-[4rem] blur-3xl opacity-70" />
                <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-green-100 dark:bg-green-900/20 rounded-full blur-3xl opacity-50" />

                <motion.div
                  initial={{ scale: 0.88, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[340px] lg:h-[340px] rounded-[2.5rem] overflow-hidden shadow-ambient dark:shadow-ambient-dark ring-1 ring-google-grey-200 dark:ring-google-grey-700"
                >
                  <img
                    src={profileImg}
                    alt="Sanele Krakra – Frontend Engineer"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* ── Stats row ── */}
        <div className="mt-20 pt-10 border-t border-google-grey-200 dark:border-google-grey-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
            {stats.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 0.08}>
                <div
                  className={`text-center md:text-left ${
                    i < stats.length - 1
                      ? "md:border-r md:border-google-grey-200 md:dark:border-google-grey-800 md:pr-8"
                      : ""
                  } ${i > 0 ? "md:pl-8" : ""}`}
                >
                  <p
                    className={`font-headline text-4xl font-extrabold ${s.color}`}
                  >
                    <AnimatedCounter value={`${s.getValue()}${s.suffix}`} />
                  </p>
                  <p className="text-sm text-google-grey-500 dark:text-google-grey-400 mt-1.5 font-medium">
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
