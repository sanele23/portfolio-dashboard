import { Briefcase, GraduationCap, Calendar } from "lucide-react";
import { experience } from "../data";
import { ScrollReveal } from "../components/ui";

function EntryCard({ item, index, tag }) {
  return (
    <ScrollReveal delay={index * 0.1}>
      <article className="border border-outline-variant bg-black/30 p-4 md:p-5 flex flex-col gap-3 min-w-0">
        <div className="flex items-start justify-between gap-3 flex-wrap">
          <div className="space-y-0.5 min-w-0">
            <h3 className="text-google-grey-50 text-base md:text-lg font-bold leading-tight break-words">
              {item.role}
            </h3>
            <p className="font-mono text-[0.7rem] uppercase tracking-widest text-google-grey-400 break-words">
              {item.company}
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 border border-outline-variant px-2.5 py-1 text-[0.62rem] font-mono uppercase tracking-widest text-google-grey-500 shrink-0">
            {tag === "work" ? <Briefcase size={11} /> : <GraduationCap size={11} />}
            {tag}
          </span>
        </div>

        <div className="flex items-center gap-1.5 font-mono text-[0.65rem] uppercase tracking-widest text-google-grey-500">
          <Calendar size={11} />
          {item.period}
        </div>

        <p className="text-google-grey-400 text-sm leading-relaxed border-t border-outline-variant pt-3">
          {item.description}
        </p>
      </article>
    </ScrollReveal>
  );
}

export default function ExperienceSection() {
  const workItems = experience.filter((e) => e.type === "work");
  const eduItems = experience.filter((e) => e.type === "education");

  return (
    <section className="relative py-16 md:py-20 bg-background overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:96px_96px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-outline-variant pb-6 mb-8 md:mb-10">
            <div className="flex items-end gap-3 md:gap-5">
              <span className="font-mono text-lg md:text-2xl text-google-grey-100 font-bold tracking-widest">
                04 //
              </span>
              <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tight text-google-grey-50 leading-none uppercase">
                Field Log
              </h2>
            </div>
            <div className="inline-flex items-center gap-2 border border-outline-variant px-3 py-2 text-google-grey-400 text-[0.7rem] md:text-xs font-mono uppercase tracking-[0.16em]">
              <span className="w-2 h-2 rounded-full bg-google-grey-300" />
              RECORD_VERIFIED
            </div>
          </div>
        </ScrollReveal>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-7 items-start">
          {/* Work */}
          <div className="space-y-4">
            <ScrollReveal>
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-google-grey-500 mb-4">
                — Work Experience
              </p>
            </ScrollReveal>
            {workItems.map((item, i) => (
              <EntryCard key={i} item={item} index={i} tag="work" />
            ))}

            {/* Award callout */}
            <ScrollReveal delay={0.3}>
              <div className="border border-amber-300/40 bg-amber-300/5 p-4 flex gap-3 items-start">
                <span className="text-lg leading-none">🏆</span>
                <div>
                  <p className="font-mono text-[0.65rem] uppercase tracking-widest text-amber-200 mb-1">
                    Award Recognition
                  </p>
                  <p className="text-google-grey-400 text-sm leading-relaxed">
                    Contributed to the award-winning{" "}
                    <span className="text-google-grey-200 font-semibold">
                      Insurance Implementation Leader
                    </span>{" "}
                    project at TFG (2024).
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <ScrollReveal>
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-google-grey-500 mb-4">
                — Education
              </p>
            </ScrollReveal>
            {eduItems.map((item, i) => (
              <EntryCard key={i} item={item} index={i} tag="education" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
