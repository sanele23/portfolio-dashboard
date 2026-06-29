import { skills } from "../data";
import ZustandBearIcon from "../components/icons/ZustandBearIcon";
import MSWIcon from "../components/icons/MSWIcon";
import SwaggerIcon from "../components/icons/SwaggerIcon";
import ReactHookFormIcon from "../components/icons/ReactHookFormIcon";
import { ScrollReveal } from "../components/ui";

export default function TechStackSection() {
  const getSkillKey = (skill) => (skill.icon || skill.name).toLowerCase().replace(/\s+/g, "");

  const renderIcon = (skill) => {
    const key = getSkillKey(skill);

    switch (key) {
      case "zustand":
        return <ZustandBearIcon className="w-8 h-8 object-contain" />;
      case "msw":
        return <MSWIcon className="w-8 h-8 object-contain" />;
      case "swagger":
        return <SwaggerIcon className="w-8 h-8 object-contain" />;
      case "reacthookform":
        return <ReactHookFormIcon className="w-8 h-8 object-contain" />;
      case "posthog":
        return (
          <div className="w-8 h-8 rounded-md border border-outline-variant bg-orange-500/10 text-orange-300 flex items-center justify-center text-[0.62rem] font-mono font-bold tracking-wider">
            PH
          </div>
        );
      case "googlestitch":
        return (
          <div className="w-8 h-8 rounded-md border border-outline-variant bg-background/70 grid grid-cols-2 gap-0.5 p-1">
            <span className="rounded-sm bg-blue-400/80" />
            <span className="rounded-sm bg-green-400/80" />
            <span className="rounded-sm bg-yellow-400/80" />
            <span className="rounded-sm bg-red-400/80" />
          </div>
        );
      default:
        return (
          <img
            src={`https://skillicons.dev/icons?i=${key}`}
            alt={skill.name}
            className="w-8 h-8 object-contain"
            loading="lazy"
          />
        );
    }
  };

  return (
    <section className="relative py-16 md:py-20 bg-background overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:96px_96px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <ScrollReveal>
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6 border-b border-outline-variant pb-6 md:pb-7 mb-8 md:mb-10">
            <div className="flex items-end gap-3 md:gap-5">
              <span className="font-mono text-lg md:text-2xl text-google-grey-100 font-bold tracking-widest">
                02 //
              </span>
              <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tight text-google-grey-50 leading-none uppercase">
                Tech Matrix
              </h2>
            </div>

            <div className="inline-flex items-center gap-2 border border-outline-variant px-3 py-2 text-google-grey-400 text-[0.7rem] md:text-xs font-mono uppercase tracking-[0.16em]">
              <span className="w-2 h-2 rounded-full bg-google-grey-300" />
              STACK_INDEX_ONLINE
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <p className="relative z-10 text-google-grey-400 text-sm md:text-base leading-relaxed mb-6 md:mb-8 max-w-3xl">
            Leveraging modern frameworks, tooling, and analytics platforms to
            build scalable, maintainable products.
          </p>
        </ScrollReveal>

        <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5">
          {skills.map((skill, i) => (
            <ScrollReveal key={skill.name} delay={i * 0.03}>
              <article className="h-full border border-outline-variant bg-black/30 p-3.5 md:p-4 flex flex-col gap-3 min-w-0">
                <div className="w-11 h-11 border border-outline-variant bg-background/70 flex items-center justify-center">
                  {renderIcon(skill)}
                </div>
                <div className="space-y-1 min-w-0">
                  <h3 className="text-google-grey-100 text-sm md:text-base font-semibold leading-tight break-words">
                    {skill.name}
                  </h3>
                  {skill.upskilling && (
                    <span className="inline-flex items-center border border-amber-300/50 bg-amber-300/10 px-2 py-0.5 text-[0.62rem] font-mono uppercase tracking-wider text-amber-200">
                      Upskilling
                    </span>
                  )}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
