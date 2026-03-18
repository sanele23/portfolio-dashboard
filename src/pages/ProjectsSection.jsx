import { projects } from "../data";
import { ProjectCard, ScrollReveal, TiltCard } from "../components/ui";

export default function ProjectsSection() {
  return (
    <section>
      <ScrollReveal>
        <h1 className="text-2xl md:text-3xl font-semibold text-google-grey-900 dark:text-google-grey-50 mb-1">
          Projects
        </h1>
        <p className="text-google-grey-600 dark:text-google-grey-400 mb-8">
          A collection of things I&apos;ve built and shipped.
        </p>
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <ScrollReveal key={p.title} delay={i * 0.08}>
            <TiltCard>
              <ProjectCard project={p} />
            </TiltCard>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
