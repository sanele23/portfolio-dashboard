import { ExternalLink } from "lucide-react";
import { projects } from "../data";
import { ScrollReveal } from "../components/ui";
import coverPhoto from "../assets/cover-photo.jpeg";

function ProjectCard({ project, index }) {
  const itemNumber = String(index + 1).padStart(2, "0");
  const isLive = project.link && project.link !== "#";

  return (
    <article className="relative min-w-0 h-full border border-outline-variant bg-black/30 p-3 md:p-3.5 flex flex-col">
      <div className="flex items-center justify-between mb-2.5">
        <span className="font-mono text-google-grey-500 text-sm tracking-widest">
          [{itemNumber}]
        </span>

        <a
          href={isLive ? project.link : "#"}
          target={isLive ? "_blank" : undefined}
          rel="noopener noreferrer"
          onClick={!isLive ? (e) => e.preventDefault() : undefined}
          className={`inline-flex items-center gap-1.5 border px-2.5 py-1 text-[0.65rem] font-mono uppercase tracking-widest transition-colors ${
            isLive
              ? "border-google-grey-100 text-google-grey-100 hover:bg-google-grey-100 hover:text-black"
              : "border-outline-variant text-google-grey-500 cursor-not-allowed"
          }`}
          aria-label={isLive ? `Open ${project.title}` : `${project.title} unavailable`}
        >
          {isLive ? "Live" : "Internal"}
          {isLive && <ExternalLink size={12} />}
        </a>
      </div>

      <div className="relative border border-google-grey-200/80 p-1 bg-background/70 mb-3.5">
        <span className="absolute -top-2.5 left-4 w-4 h-4 border border-google-grey-200/80 bg-background" />
        <div className="relative overflow-hidden h-40 md:h-40">
          <img
            src={coverPhoto}
            alt={project.title}
            className="w-full h-full object-cover opacity-75"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,245,255,0.12),transparent_65%)]" />
        </div>
      </div>

      <div className="space-y-3 min-w-0 flex-1">
        <h3 className="font-headline text-lg md:text-xl font-extrabold tracking-tight uppercase text-google-grey-50 leading-tight break-words">
          {project.title.toUpperCase()}
        </h3>

        <p className="text-google-grey-400 text-sm md:text-base leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="border border-outline-variant px-2.5 py-1 text-[0.65rem] font-mono uppercase tracking-widest text-google-grey-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function ProjectsSection() {
  return (
    <section className="relative py-16 md:py-20 bg-background overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:96px_96px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-outline-variant" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-outline-variant" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <ScrollReveal>
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6 border-b border-outline-variant pb-6 md:pb-7 mb-8 md:mb-10">
            <div className="flex items-end gap-3 md:gap-5">
              <span className="font-mono text-lg md:text-2xl text-google-grey-100 font-bold tracking-widest">
                03 //
              </span>
              <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tight text-google-grey-50 leading-none uppercase">
                Project Vault
              </h2>
            </div>

            <div className="inline-flex items-center gap-2 border border-outline-variant px-3 py-2 text-google-grey-400 text-[0.7rem] md:text-xs font-mono uppercase tracking-[0.16em]">
              <span className="w-2 h-2 rounded-full bg-google-grey-300" />
              DECONSTRUCTED_MODE_ON
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="relative z-10 mb-6 md:mb-7 border border-amber-300/40 bg-amber-300/5 px-4 py-3">
            <p className="font-mono text-[0.68rem] md:text-xs uppercase tracking-[0.16em] text-amber-200">
              Note: Current projects are being updated — stay tuned.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
          {projects.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.08}>
              <ProjectCard project={p} index={i} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
