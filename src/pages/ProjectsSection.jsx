import { projects } from "../data";
import { ProjectCard } from "../components/ui";

export default function ProjectsSection() {
  return (
    <section>
      <h1 className="text-2xl md:text-3xl font-semibold text-google-grey-900 dark:text-google-grey-50 mb-1">
        Projects
      </h1>
      <p className="text-google-grey-600 dark:text-google-grey-400 mb-8">
        A collection of things I&apos;ve built and shipped.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}
