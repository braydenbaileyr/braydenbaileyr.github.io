import { motion, useReducedMotion } from "framer-motion";

const experience = [
  {
    company: "Austin Lane Technologies (ALMobile)",
    location: "Denton, Texas",
    stints: [
      {
        role: "Software Engineer Intern",
        dates: "May 2025 – Present",
        bullets: [
          "Developed full-stack features for enterprise payroll and time-tracking systems used across North America",
          "Built and extended ASP.NET Core controllers and APIs supporting report filters, pagination, caching, and efficient retrieval",
          "Refactored legacy reports with Blazor and Telerik Reporting to deliver 15+ reports for enterprise clients",
          "Diagnosed and resolved production issues across frontend, backend, and database layers, including pagination and lazy-loading for large datasets",
          "Wrote SQL queries and migration scripts to update database schemas and maintain compatibility across releases",
        ],
      },
      {
        role: "Software Engineering Intern",
        dates: "Summer 2024",
        bullets: [
          "Implemented front-end bug fixes and maintained enterprise payroll/time-tracking workflows using JavaScript",
          "Contributed to production issue triage and fixes with support teams, improving resolution consistency",
          "Built an IndexedDB-based debugging tool that captures application state and exports session data for repeatable bug reproduction",
        ],
      },
    ],
  },
];

const ExperienceSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="experience" className="py-16 max-w-3xl mx-auto px-6">
      <motion.h2
        {...(reduceMotion
          ? {}
          : {
              initial: { opacity: 0 },
              whileInView: { opacity: 1 },
              viewport: { once: true },
            })}
        className="text-sm uppercase tracking-widest text-muted-foreground mb-10"
      >
        Experience
      </motion.h2>
      <div className="space-y-12">
        {experience.map((job, i) => (
          <motion.div
            key={i}
            {...(reduceMotion
              ? {}
              : {
                  initial: { opacity: 0, y: 8 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.4, delay: i * 0.05, ease: [0.25, 0.1, 0.25, 1] },
                })}
            className="grid grid-cols-1 md:grid-cols-[30%_1fr] gap-4"
          >
            <div>
              <p className="text-sm font-medium text-foreground">{job.company}</p>
              <p className="text-xs text-muted-foreground">{job.location}</p>
            </div>
            <div>
              <div className="space-y-7">
                {job.stints.map((stint, k) => (
                  <div key={k}>
                    <p className="text-sm font-semibold text-foreground">
                      {stint.role}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground tabular-nums">
                      {stint.dates}
                    </p>
                    <ul className="mt-3 space-y-2">
                      {stint.bullets.map((bullet, j) => (
                        <li
                          key={j}
                          className="text-[15px] leading-relaxed text-foreground/80 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-muted-foreground/30"
                        >
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
