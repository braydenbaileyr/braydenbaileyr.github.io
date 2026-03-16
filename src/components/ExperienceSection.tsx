import { motion } from "framer-motion";

const experience = [
  {
    company: "Austin Lane Technologies (ALMobile)",
    location: "Denton, Texas",
    role: "Software Engineer Intern",
    dates: "Summer 2024, May 2025 – Present",
    bullets: [
      "Developed full-stack features using JavaScript, C#, ASP.NET Core, and Blazor for enterprise payroll and time-tracking systems used across North America",
      "Built and extended ASP.NET Core controllers and API endpoints supporting report filters, pagination, caching, and efficient data retrieval",
      "Refactored legacy reports utilizing Blazor and Telerik Reporting to deliver 15+ reports for enterprise clients",
      "Diagnosed and resolved production issues across frontend, backend, and database layers, including pagination and lazy-loading for datasets exceeding tens of thousands of rows",
      "Wrote SQL queries and migration scripts to update database schemas and maintain compatibility across versions",
      "Designed a client-side debugging tool using IndexedDB that captures application state and exports it to help support teams reproduce bugs",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-16 max-w-3xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-sm uppercase tracking-widest text-muted-foreground mb-10"
      >
        Experience
      </motion.h2>
      <div className="space-y-12">
        {experience.map((job, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
            className="grid grid-cols-1 md:grid-cols-[30%_1fr] gap-4"
          >
            <div>
              <p className="text-sm font-medium text-foreground">{job.company}</p>
              <p className="text-xs text-muted-foreground tabular-nums mt-1">{job.dates}</p>
              <p className="text-xs text-muted-foreground">{job.location}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground mb-3">{job.role}</p>
              <ul className="space-y-2">
                {job.bullets.map((bullet, j) => (
                  <li key={j} className="text-[15px] leading-relaxed text-foreground/80 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-muted-foreground/30">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
