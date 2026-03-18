import { motion } from "framer-motion";
import { skills } from "../data";
import { ScrollReveal, AnimatedBar } from "../components/ui";

export default function TechStackSection() {
  return (
    <section>
      <ScrollReveal>
        <h1 className="text-2xl md:text-3xl font-semibold text-google-grey-900 dark:text-google-grey-50 mb-1">
          Tech Stack
        </h1>
        <p className="text-google-grey-600 dark:text-google-grey-400 mb-8">
          Technologies and tools I work with daily.
        </p>
      </ScrollReveal>

      {/* Skill cloud with glassmorphism */}
      <ScrollReveal>
        <div className="relative overflow-hidden bg-white/70 dark:bg-google-grey-800/70 backdrop-blur-lg border border-google-grey-200/50 dark:border-google-grey-700/50 rounded-2xl p-8 shadow-google">
          {/* Background gradient accent */}
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-gradient-to-br from-google-blue/10 to-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-gradient-to-br from-google-green/10 to-teal-500/10 rounded-full blur-3xl" />

          <div className="relative flex flex-wrap gap-3 justify-center">
            {skills.map((skill, i) => (
              <motion.span
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.03, duration: 0.3 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className={`px-4 py-2 text-sm font-medium rounded-full ${skill.color} shadow-sm cursor-default transition-shadow hover:shadow-md`}
              >
                {skill.name}
              </motion.span>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Proficiency breakdown */}
      <ScrollReveal delay={0.2}>
        <h2 className="text-lg font-semibold text-google-grey-900 dark:text-google-grey-50 mt-10 mb-4">
          Proficiency
        </h2>
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          {
            category: "Frontend",
            level: 95,
            color: "bg-gradient-to-r from-google-blue to-blue-500",
          },
          {
            category: "DevOps & CI/CD",
            level: 70,
            color: "bg-gradient-to-r from-google-green to-emerald-500",
          },
          {
            category: "UI/UX Design",
            level: 75,
            color: "bg-gradient-to-r from-google-yellow to-amber-400",
          },
          {
            category: "Backend",
            level: 55,
            color: "bg-gradient-to-r from-google-red to-rose-500",
          },
        ].map((item, i) => (
          <ScrollReveal key={item.category} delay={i * 0.1}>
            <div className="bg-white/80 dark:bg-google-grey-800/80 backdrop-blur-sm border border-google-grey-200 dark:border-google-grey-700 rounded-xl p-5 hover:shadow-google-hover transition-all">
              <div className="flex justify-between mb-3">
                <span className="text-sm font-medium text-google-grey-800 dark:text-google-grey-200">
                  {item.category}
                </span>
                <span className="text-sm font-semibold text-google-grey-600 dark:text-google-grey-400">
                  {item.level}%
                </span>
              </div>
              <AnimatedBar
                level={item.level}
                color={item.color}
                delay={i * 0.15}
              />
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
