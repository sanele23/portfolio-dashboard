import {
  Linkedin,
  Github,
  Mail,
  MapPin,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { projects, experience, skills } from "../data";
import { getGreeting } from "../utils";
import {
  ProjectCard,
  ScrollReveal,
  AnimatedCounter,
  TiltCard,
  FloatingParticles,
} from "../components/ui";
import profileImg from "../assets/profile.jpeg";

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sanele-krakra",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/sanele23",
    gradient: "from-gray-600 to-gray-900",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:sanele23@live.com",
    gradient: "from-red-400 to-red-600",
  },
];

export default function OverviewSection() {
  const stats = [
    { label: "Projects", value: projects.length, color: "text-google-blue" },
    { label: "Technologies", value: skills.length, color: "text-google-green" },
    { label: "Years Experience", value: "4+", color: "text-google-yellow" },
    {
      label: "Companies",
      value: experience.filter((e) => e.type === "work").length,
      color: "text-google-red",
    },
  ];

  return (
    <section className="space-y-6">
      {/* ── Hero Section with Animated Gradient ── */}
      <ScrollReveal>
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-google-blue via-blue-600 to-indigo-700 dark:from-google-blue/90 dark:via-blue-800 dark:to-indigo-900 p-6 md:p-8 text-white">
          <FloatingParticles count={15} />

          {/* Gradient orbs for depth */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-blue-400/20 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-6">
            {/* Profile picture with glow */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute inset-0 bg-white/20 rounded-full blur-xl scale-110" />
              <img
                src={profileImg}
                alt="Sanele Krakra"
                className="relative w-28 h-28 md:w-32 md:h-32 rounded-full object-cover shrink-0 ring-4 ring-white/30 shadow-2xl"
              />
            </motion.div>

            {/* Bio */}
            <div className="flex-1 text-center sm:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-xs font-medium mb-3">
                  <Sparkles size={12} />
                  {getGreeting()}, Visitor 👋
                </div>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                  Sanele Krakra
                </h1>
                <p className="text-blue-100 font-medium text-lg mt-1">
                  Frontend Developer
                </p>
                <div className="flex items-center justify-center sm:justify-start gap-1 mt-2 text-blue-200 text-sm">
                  <MapPin size={14} />
                  <span>Cape Town, South Africa</span>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-5 text-sm text-blue-50/90 leading-relaxed max-w-2xl"
              >
                Frontend Engineer with 4+ years of experience building scalable,
                production-grade web platforms using React, TypeScript, and
                Next.js. Passionate about clean UI/UX design, component-driven
                architecture, and delivering performant interfaces that handle
                complex business logic with clarity and precision.
              </motion.p>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex items-center justify-center sm:justify-start gap-3 mt-6"
              >
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/15 backdrop-blur-sm text-sm font-medium text-white hover:bg-white/25 transition-all hover:scale-105 active:scale-95"
                    >
                      <Icon size={16} />
                      <span>{link.label}</span>
                    </a>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* ── Quick Stats with Animated Counters ── */}
      <div>
        <ScrollReveal delay={0.1}>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-google-grey-500 dark:text-google-grey-400 mb-3">
            Quick Stats
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {stats.map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 0.1}>
              <TiltCard>
                <div className="bg-white/80 dark:bg-google-grey-800/80 backdrop-blur-sm border border-google-grey-200 dark:border-google-grey-700 rounded-xl p-4 hover:shadow-google-hover transition-all">
                  <p className="text-sm text-google-grey-600 dark:text-google-grey-400 mb-1">
                    {s.label}
                  </p>
                  <p className={`text-3xl font-bold ${s.color}`}>
                    <AnimatedCounter value={s.value} />
                  </p>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* ── Recent Projects ── */}
      <div>
        <ScrollReveal>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-google-grey-900 dark:text-google-grey-50">
              Recent Projects
            </h2>
            {/* <span className="text-xs text-google-grey-500 dark:text-google-grey-400 flex items-center gap-1">
              Scroll for more <ArrowRight size={12} />
            </span> */}
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
          {projects.slice(0, 3).map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.1}>
              <TiltCard>
                <ProjectCard project={p} />
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
