import { motion } from "framer-motion";

const EducationSection = () => {
  return (
    <section className="py-16 max-w-3xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-sm uppercase tracking-widest text-muted-foreground mb-10"
      >
        Education
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        className="grid grid-cols-1 md:grid-cols-[30%_1fr] gap-4"
      >
        <div>
          <p className="text-sm font-medium text-foreground">Texas A&M University</p>
          <p className="text-xs text-muted-foreground tabular-nums mt-1">May 2026</p>
          <p className="text-xs text-muted-foreground">College Station, TX</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">B.S. Computer Engineering</p>
          <p className="text-[15px] text-foreground/80 mt-1">GPA: 3.5 · Dean's Honor Roll (Multiple Semesters)</p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {[
              "Data Structures & Algorithms",
              "Software Engineering",
              "Distributed Systems",
              "Cloud Computing",
              "Computer Architecture",
              "Microcomputer Systems",
            ].map((course) => (
              <span key={course} className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                {course}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default EducationSection;
