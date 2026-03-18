import { Briefcase, GraduationCap } from "lucide-react";
import { experience } from "../data";
import { TimelineItem, ScrollReveal } from "../components/ui";

export default function ExperienceSection() {
  const workItems = experience.filter((e) => e.type === "work");
  const eduItems = experience.filter((e) => e.type === "education");

  return (
    <section>
      <ScrollReveal>
        <h1 className="text-2xl md:text-3xl font-semibold text-google-grey-900 dark:text-google-grey-50 mb-1">
          Experience &amp; Education
        </h1>
        <p className="text-google-grey-600 dark:text-google-grey-400 mb-8">
          My professional journey and academic background.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Work Experience */}
        <div>
          <ScrollReveal direction="left">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/30">
                <Briefcase size={20} className="text-google-blue" />
              </div>
              <h2 className="text-lg font-semibold text-google-grey-900 dark:text-google-grey-50">
                Work Experience
              </h2>
            </div>
          </ScrollReveal>
          <div className="relative pl-6 border-l-2 border-google-blue/30 space-y-6">
            {workItems.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.15} direction="left">
                <TimelineItem item={item} dotColor="border-google-blue" />
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <ScrollReveal direction="right">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 rounded-lg bg-green-50 dark:bg-green-900/30">
                <GraduationCap size={20} className="text-google-green" />
              </div>
              <h2 className="text-lg font-semibold text-google-grey-900 dark:text-google-grey-50">
                Education
              </h2>
            </div>
          </ScrollReveal>
          <div className="relative pl-6 border-l-2 border-google-green/30 space-y-6">
            {eduItems.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.15} direction="right">
                <TimelineItem item={item} dotColor="border-google-green" />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
