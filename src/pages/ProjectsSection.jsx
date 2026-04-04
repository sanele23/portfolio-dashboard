import { ExternalLink, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "../data";
import { ScrollReveal } from "../components/ui";

// Accent colors cycling per card
const cardAccents = [
  "from-blue-500/10 to-indigo-500/10 group-hover:from-blue-500/20 group-hover:to-indigo-500/20",
  "from-green-500/10 to-emerald-500/10 group-hover:from-green-500/20 group-hover:to-emerald-500/20",
  "from-purple-500/10 to-pink-500/10 group-hover:from-purple-500/20 group-hover:to-pink-500/20",
  "from-amber-500/10 to-orange-500/10 group-hover:from-amber-500/20 group-hover:to-orange-500/20",
  "from-cyan-500/10 to-sky-500/10 group-hover:from-cyan-500/20 group-hover:to-sky-500/20",
  "from-rose-500/10 to-red-500/10 group-hover:from-rose-500/20 group-hover:to-red-500/20",
];

const dotColors = [
  "bg-blue-500",
  "bg-green-500",
  "bg-purple-500",
  "bg-amber-500",
  "bg-cyan-500",
  "bg-rose-500",
];

function ProjectCard({ project, index }) {
  const isLive = project.link !== "#";
  const accent = cardAccents[index % cardAccents.length];
  const dot = dotColors[index % dotColors.length];

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group relative bg-white dark:bg-google-grey-800 border border-google-grey-200 dark:border-google-grey-700 rounded-2xl p-6 hover:shadow-ambient dark:hover:shadow-ambient-dark transition-all duration-300 flex flex-col overflow-hidden"
    >
      {/* Gradient overlay on hover */}
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${accent} transition-all duration-500 pointer-events-none`}
      />

      <div className="relative z-10 flex flex-col h-full">
        {/* Header row */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-2.5">
            <span className={`w-2.5 h-2.5 rounded-full ${dot} shrink-0 mt-0.5`} />
            <h3 className="text-base font-bold text-google-grey-900 dark:text-google-grey-50 group-hover:text-brand-primary transition-colors leading-snug">
              {project.title}
            </h3>
          </div>
          <a
            href={project.link}
            target={isLive ? "_blank" : undefined}
            rel="noopener noreferrer"
            onClick={!isLive ? (e) => e.preventDefault() : undefined}
            className={`p-2 rounded-lg transition-all shrink-0 ${
              isLive
                ? "text-google-grey-500 dark:text-google-grey-400 hover:text-brand-primary hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:scale-110"
                : "text-google-grey-300 dark:text-google-grey-600 cursor-not-allowed"
            }`}
            aria-label={isLive ? `Open ${project.title}` : "Link not available"}
          >
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Description */}
        <p className="text-sm text-google-grey-600 dark:text-google-grey-400 leading-relaxed flex-1 mb-5">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-medium rounded-full bg-google-grey-100 dark:bg-google-grey-700/80 text-google-grey-700 dark:text-google-grey-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const liveProjects = projects.filter((p) => p.link !== "#");
  const otherProjects = projects.filter((p) => p.link === "#");

  return (
    <section className="py-24 bg-white dark:bg-google-grey-900 transition-colors">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center space-y-4 mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-primary">
              <span className="w-6 h-px bg-brand-primary" />
              Portfolio
              <span className="w-6 h-px bg-brand-primary" />
            </span>
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-google-grey-900 dark:text-white">
              Featured Projects
            </h2>
            <p className="text-google-grey-600 dark:text-google-grey-400 max-w-2xl mx-auto text-lg">
              A collection of things I&apos;ve built and shipped — from enterprise platforms to personal tools.
            </p>
          </div>
        </ScrollReveal>

        {/* Live / featured projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-6">
          {liveProjects.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.08}>
              <ProjectCard project={p} index={i} />
            </ScrollReveal>
          ))}
        </div>

        {/* Other / internal projects */}
        {otherProjects.length > 0 && (
          <>
            <ScrollReveal>
              <div className="flex items-center gap-4 mt-10 mb-6">
                <span className="text-sm font-semibold text-google-grey-500 dark:text-google-grey-400 uppercase tracking-widest">
                  Other Work
                </span>
                <span className="flex-1 h-px bg-google-grey-200 dark:bg-google-grey-800" />
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {otherProjects.map((p, i) => (
                <ScrollReveal key={p.title} delay={i * 0.08}>
                  <ProjectCard project={p} index={liveProjects.length + i} />
                </ScrollReveal>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
