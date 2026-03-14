import { ExternalLink } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <div className="group bg-white dark:bg-google-grey-800 border border-google-grey-200 dark:border-google-grey-700 rounded-xl p-5 hover:shadow-google-hover transition-shadow flex flex-col">
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-base font-semibold text-google-grey-900 dark:text-google-grey-50 group-hover:text-google-blue transition-colors">
          {project.title}
        </h3>
        <a
          href={project.link}
          className="p-1 rounded-full hover:bg-google-grey-100 dark:hover:bg-google-grey-700 transition-colors text-google-grey-500 dark:text-google-grey-400 hover:text-google-blue shrink-0"
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
            className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-google-grey-100 dark:bg-google-grey-700 text-google-grey-700 dark:text-google-grey-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
