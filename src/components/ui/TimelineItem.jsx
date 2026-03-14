import { Briefcase, GraduationCap, Calendar } from "lucide-react";

export default function TimelineItem({ item, dotColor }) {
  return (
    <div className="relative">
      <div
        className={`absolute -left-[25px] top-1 w-3 h-3 rounded-full bg-white border-2 ${dotColor}`}
      />
      <div className="bg-white border border-google-grey-200 rounded-xl p-5 hover:shadow-google-hover transition-shadow">
        <div className="flex items-center gap-2 mb-1">
          {item.type === "work" ? (
            <Briefcase size={16} className="text-google-blue" />
          ) : (
            <GraduationCap size={16} className="text-google-green" />
          )}
          <h3 className="text-base font-semibold text-google-grey-900">
            {item.role}
          </h3>
        </div>
        <p className="text-sm text-google-grey-600 mb-1">{item.company}</p>
        <div className="flex items-center gap-1 text-xs text-google-grey-500 mb-3">
          <Calendar size={12} />
          <span>{item.period}</span>
        </div>
        <p className="text-sm text-google-grey-600 leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
}
