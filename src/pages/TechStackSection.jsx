import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills } from "../data";
import ZustandBearIcon from "../components/icons/ZustandBearIcon";
import BuilderioIcon from "../components/icons/BuilderioIcon";
import MSWIcon from "../components/icons/MSWIcon";
import SwaggerIcon from "../components/icons/SwaggerIcon";
import RestApiIcon from "../components/icons/RestApiIcon";
import ReactHookFormIcon from "../components/icons/ReactHookFormIcon";
import { ScrollReveal } from "../components/ui";

export default function TechStackSection() {
  const [currentPage, setCurrentPage] = useState(0);

  // Define how many items per page (matching the 6 columns in your image)
  const itemsPerPage = 6;
  const totalPages = Math.ceil(skills.length / itemsPerPage);

  // Get current slice of skills
  const currentSkills = skills.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage,
  );

  return (
    <section className="py-24 bg-google-grey-50 dark:bg-google-grey-900/50">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header - Styled like the attachment */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <ScrollReveal>
            <div className="space-y-4">
              <h2 className="font-headline text-4xl font-bold tracking-tight text-google-grey-900 dark:text-white">
                The Modern Stack
              </h2>
              <p className="text-google-grey-600 dark:text-google-grey-400 max-w-xl text-lg leading-relaxed">
                Leveraging the latest tools to build scalable and maintainable
                enterprise applications.
              </p>
            </div>
          </ScrollReveal>

          {/* Pagination Indicators (Right-aligned like the image) */}
          <div className="flex gap-1.5 mb-2">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className="group py-2 px-1 focus:outline-none"
              >
                <div
                  className={`h-1 rounded-full transition-all duration-300 ${
                    currentPage === i
                      ? "w-10 bg-brand-primary"
                      : "w-4 bg-google-grey-300 dark:bg-google-grey-700 group-hover:bg-google-grey-400"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Animated Grid Container */}
        <div className="min-h-[250px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6"
            >
              {currentSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-white dark:bg-google-grey-800 border border-google-grey-100 dark:border-google-grey-700 rounded-[32px] p-8 flex flex-col items-center justify-center gap-5 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold ${skill.color}`}
                  >
                    {(() => {
                      switch (skill.name.toLowerCase()) {
                        case "zustand":
                          return (
                            <ZustandBearIcon className="w-10 h-10 object-contain" />
                          );

                        case "msw":
                          return (
                            <MSWIcon className="w-10 h-10 object-contain" />
                          );
                        case "swagger":
                          return (
                            <SwaggerIcon className="w-10 h-10 object-contain" />
                          );
                        case "restfulapis":
                          return (
                            <RestApiIcon className="w-10 h-10 object-contain" />
                          );
                        case "reacthookform":
                          return (
                            <ReactHookFormIcon className="w-10 h-10 object-contain" />
                          );
                        default:
                          return (
                            <img
                              src={`https://skillicons.dev/icons?i=${skill.name.toLowerCase().replace(" ", "")}`}
                              alt={skill.name}
                              className="w-10 h-10 object-contain"
                            />
                          );
                      }
                    })()}
                  </div>
                  <span className="font-bold text-google-grey-900 dark:text-white text-sm text-center">
                    {skill.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
