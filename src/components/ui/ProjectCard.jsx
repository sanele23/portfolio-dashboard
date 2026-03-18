import { ExternalLink } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <div className="group relative bg-white/80 dark:bg-google-grey-800/80 backdrop-blur-sm border border-google-grey-200/50 dark:border-google-grey-700/50 rounded-xl p-5 hover:shadow-google-hover transition-all duration-300 flex flex-col overflow-hidden">
      {/* Gradient border accent on hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-google-blue/0 via-transparent to-purple-500/0 group-hover:from-google-blue/10 group-hover:to-purple-500/10 transition-all duration-500 pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-base font-semibold text-google-grey-900 dark:text-google-grey-50 group-hover:text-google-blue transition-colors">
            {project.title}
          </h3>
          <a
            href={project.link}
            className="p-1.5 rounded-lg hover:bg-google-grey-100 dark:hover:bg-google-grey-700 transition-all text-google-grey-500 dark:text-google-grey-400 hover:text-google-blue hover:scale-110 shrink-0"
            aria-label={`Open ${project.title}`}
          >
            <ExternalLink size={16} />
          </a>
        </div>
        <p className="text-sm text-google-grey-600 dark:text-google-grey-400 mb-4 flex-1 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-google-grey-100/80 dark:bg-google-grey-700/80 text-google-grey-700 dark:text-google-grey-300 backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
