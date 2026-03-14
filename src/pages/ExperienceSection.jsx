import { Briefcase, GraduationCap } from "lucide-react";
import { experience } from "../data";
import { TimelineItem } from "../components/ui";

export default function ExperienceSection() {
  const workItems = experience.filter((e) => e.type === "work");
  const eduItems = experience.filter((e) => e.type === "education");

  return (
    <section>
      <h1 className="text-2xl md:text-3xl font-semibold text-google-grey-900 mb-1">
        Experience &amp; Education
      </h1>
      <p className="text-google-grey-600 mb-8">
        My professional journey and academic background.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Work Experience */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Briefcase size={20} className="text-google-blue" />
            <h2 className="text-lg font-semibold text-google-grey-900">
              Work Experience
            </h2>
          </div>
          <div className="relative pl-6 border-l-2 border-google-blue/30 space-y-6">
            {workItems.map((item, i) => (
              <TimelineItem key={i} item={item} dotColor="border-google-blue" />
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap size={20} className="text-google-green" />
            <h2 className="text-lg font-semibold text-google-grey-900">
              Education
            </h2>
          </div>
          <div className="relative pl-6 border-l-2 border-google-green/30 space-y-6">
            {eduItems.map((item, i) => (
              <TimelineItem
                key={i}
                item={item}
                dotColor="border-google-green"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
