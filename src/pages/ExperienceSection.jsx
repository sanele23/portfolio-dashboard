import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";
import { experience } from "../data";
import { ScrollReveal } from "../components/ui";

function TimelineCard({ item, index, accentColor, accentBg }) {
  return (
    <div className="relative group">
      {/* Timeline dot */}
      <div
        className={`absolute -left-[25px] top-6 w-3 h-3 rounded-full bg-white dark:bg-google-grey-900 border-2 ${accentColor} group-hover:scale-125 transition-transform z-10`}
      />

      <div className="bg-white dark:bg-google-grey-800 border border-google-grey-200 dark:border-google-grey-700 rounded-2xl p-6 hover:shadow-google-hover dark:hover:shadow-ambient-dark transition-all duration-300 hover:-translate-y-0.5">
        {/* Role + icon */}
        <div className="flex items-start gap-3 mb-2">
          <div className={`p-2 rounded-lg ${accentBg} shrink-0 mt-0.5`}>
            {item.type === "work" ? (
              <Briefcase size={16} className={accentColor.replace("border-", "text-")} />
            ) : (
              <GraduationCap size={16} className={accentColor.replace("border-", "text-")} />
            )}
          </div>
          <div>
            <h3 className="text-base font-bold text-google-grey-900 dark:text-google-grey-50 leading-snug">
              {item.role}
            </h3>
            <p className="text-sm font-medium text-google-grey-600 dark:text-google-grey-400 mt-0.5">
              {item.company}
            </p>
          </div>
        </div>

        {/* Period */}
        <div className="flex items-center gap-1.5 text-xs text-google-grey-500 dark:text-google-grey-400 mb-4 ml-11">
          <Calendar size={12} />
          <span>{item.period}</span>
        </div>

        {/* Description */}
        <p className="text-sm text-google-grey-600 dark:text-google-grey-400 leading-relaxed ml-11">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  const workItems = experience.filter((e) => e.type === "work");
  const eduItems = experience.filter((e) => e.type === "education");

  return (
    <section className="py-24 bg-google-grey-50 dark:bg-google-grey-900/50 transition-colors">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="space-y-3 mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-primary">
              <span className="w-6 h-px bg-brand-primary" />
              Background
            </span>
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-google-grey-900 dark:text-white">
              Experience &amp; Education
            </h2>
            <p className="text-google-grey-600 dark:text-google-grey-400 text-lg max-w-xl">
              My professional journey and academic background.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Work Experience */}
          <div>
            <ScrollReveal direction="left">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-900/30">
                  <Briefcase size={20} className="text-brand-primary" />
                </div>
                <h3 className="font-headline text-xl font-bold text-google-grey-900 dark:text-white">
                  Work Experience
                </h3>
              </div>
            </ScrollReveal>

            <div className="relative pl-6 border-l-2 border-brand-primary/25 space-y-5">
              {workItems.map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.12} direction="left">
                  <TimelineCard
                    item={item}
                    index={i}
                    accentColor="border-brand-primary"
                    accentBg="bg-blue-50 dark:bg-blue-900/30"
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <ScrollReveal direction="right">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 rounded-xl bg-green-50 dark:bg-green-900/30">
                  <GraduationCap size={20} className="text-google-green" />
                </div>
                <h3 className="font-headline text-xl font-bold text-google-grey-900 dark:text-white">
                  Education
                </h3>
              </div>
            </ScrollReveal>

            <div className="relative pl-6 border-l-2 border-google-green/25 space-y-5">
              {eduItems.map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.12} direction="right">
                  <TimelineCard
                    item={item}
                    index={i}
                    accentColor="border-google-green"
                    accentBg="bg-green-50 dark:bg-green-900/30"
                  />
                </ScrollReveal>
              ))}
            </div>

            {/* Awards callout */}
            <ScrollReveal delay={0.3} direction="right">
              <div className="mt-8 p-5 bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/10 border border-yellow-200 dark:border-yellow-800/50 rounded-2xl">
                <p className="text-sm font-semibold text-yellow-900 dark:text-yellow-300 mb-1">
                  🏆 Award Recognition
                </p>
                <p className="text-sm text-yellow-800 dark:text-yellow-400">
                  Contributed to the award-winning{" "}
                  <span className="font-semibold">Insurance Implementation Leader</span>{" "}
                  project at TFG (2024).
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
