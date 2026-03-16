import { motion } from "framer-motion";

const skillGroups = [
  { label: "Languages", items: ["C#", "TypeScript", "JavaScript", "Python", "C++", "SQL"] },
  { label: "Frameworks", items: ["ASP.NET Core", "Blazor", "React"] },
  { label: "Tools", items: ["Git", "Docker", "AWS", "SQL Server", "PostgreSQL", "Firebase"] },
];

const SkillsSection = () => {
  return (
    <section className="py-16 max-w-3xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-sm uppercase tracking-widest text-muted-foreground mb-10"
      >
        Skills
      </motion.h2>
      <div className="space-y-6">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="text-xs font-medium text-muted-foreground mb-2">{group.label}</p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span key={skill} className="rounded-full bg-muted px-3 py-1.5 text-xs font-medium text-accent-foreground">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
