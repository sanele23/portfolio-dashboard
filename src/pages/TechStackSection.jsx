import { skills } from "../data";

export default function TechStackSection() {
  return (
    <section>
      <h1 className="text-2xl md:text-3xl font-semibold text-google-grey-900 dark:text-google-grey-50 mb-1">
        Tech Stack
      </h1>
      <p className="text-google-grey-600 dark:text-google-grey-400 mb-8">
        Technologies and tools I work with daily.
      </p>

      {/* Skill cloud */}
      <div className="bg-white dark:bg-google-grey-800 border border-google-grey-200 dark:border-google-grey-700 rounded-xl p-6 hover:shadow-google-hover transition-shadow">
        <div className="flex flex-wrap gap-2.5 justify-center">
          {skills.map((skill) => (
            <span
              key={skill.name}
              className={`px-4 py-2 text-sm font-medium rounded-full ${skill.color} transition-transform hover:scale-105 cursor-default`}
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>

      {/* Proficiency breakdown */}
      <h2 className="text-lg font-semibold text-google-grey-900 dark:text-google-grey-50 mt-10 mb-4">
        Proficiency
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { category: "Frontend", level: 95, color: "bg-google-blue" },
          { category: "DevOps & CI/CD", level: 70, color: "bg-google-green" },
          { category: "UI/UX Design", level: 75, color: "bg-google-yellow" },
          { category: "Backend", level: 55, color: "bg-google-red" },
        ].map((item) => (
          <div
            key={item.category}
            className="bg-white dark:bg-google-grey-800 border border-google-grey-200 dark:border-google-grey-700 rounded-xl p-5 hover:shadow-google-hover transition-shadow"
          >
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium text-google-grey-800 dark:text-google-grey-200">
                {item.category}
              </span>
              <span className="text-sm text-google-grey-500 dark:text-google-grey-400">
                {item.level}%
              </span>
            </div>
            <div className="w-full bg-google-grey-100 dark:bg-google-grey-700 rounded-full h-2">
              <div
                className={`${item.color} h-2 rounded-full transition-all duration-500`}
                style={{ width: `${item.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
