import { motion } from "framer-motion";

const projects = [
  {
    title: "Formula SAE Driver Display System",
    role: "Backend Engineer",
    dates: "Jan 2026 – Present",
    description: "Real-time telemetry streaming and remote configuration for a race car driver display, built on TypeScript with WebSocket communication to Raspberry Pi.",
    tags: ["TypeScript", "WebSocket", "REST API", "Raspberry Pi"],
    bullets: [
      "Architected backend service enabling real-time telemetry streaming and remote configuration updates",
      "Developed REST APIs for managing screen layouts, display widgets, and CAN signal mappings",
      "Implemented connection monitoring and heartbeat logic for fault-tolerant cloud-to-vehicle communication",
    ],
  },
  {
    title: "Revello",
    role: "Co-Founder / Developer",
    dates: "Jul 2024",
    description: "Local deal discovery app serving 2,000+ users in under 6 months, built with JavaScript and Firebase.",
    tags: ["JavaScript", "Firebase", "Firestore", "Auth"],
    bullets: [
      "Co-founded and shipped a deal discovery app serving over 2,000 users in under 6 months",
      "Built with Firebase Auth and Firestore, enabling real-time deal updates and custom filtering",
      "Launched landing page to support business outreach, securing early partnerships",
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-16 max-w-3xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-sm uppercase tracking-widest text-muted-foreground mb-10"
      >
        Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{ y: -4 }}
            className="rounded-2xl bg-card p-6 transition-shadow duration-150"
            style={{ boxShadow: 'var(--shadow-card)' }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = 'var(--shadow-card-hover)')}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'var(--shadow-card)')}
          >
            <div className="mb-1 flex items-baseline justify-between">
              <h3 className="text-sm font-semibold text-foreground">{project.title}</h3>
            </div>
            <p className="text-xs text-muted-foreground tabular-nums">{project.role} · {project.dates}</p>
            <p className="mt-3 text-[15px] leading-relaxed text-foreground/80">
              {project.description}
            </p>
            <ul className="mt-4 space-y-1.5">
              {project.bullets.map((b, j) => (
                <li key={j} className="text-[13px] leading-relaxed text-muted-foreground pl-3 relative before:content-[''] before:absolute before:left-0 before:top-[8px] before:w-1 before:h-1 before:rounded-full before:bg-muted-foreground/40">
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
