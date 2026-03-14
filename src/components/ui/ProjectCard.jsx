import { ExternalLink } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <div className="group bg-white border border-google-grey-200 rounded-xl p-5 hover:shadow-google-hover transition-shadow flex flex-col">
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-base font-semibold text-google-grey-900 group-hover:text-google-blue transition-colors">
          {project.title}
        </h3>
        <a
          href={project.link}
          className="p-1 rounded-full hover:bg-google-grey-100 transition-colors text-google-grey-500 hover:text-google-blue shrink-0"
          aria-label={`Open ${project.title}`}
        >
          <ExternalLink size={16} />
        </a>
      </div>
      <p className="text-sm text-google-grey-600 mb-4 flex-1 leading-relaxed">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-google-grey-100 text-google-grey-700"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
