import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 max-w-[65ch] mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <h1 className="text-5xl font-medium tracking-tighter text-foreground">
          Brayden Bailey
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Computer Engineering · Texas A&M University '26
        </p>
        <p className="mt-6 text-[15px] leading-relaxed text-foreground/80 max-w-[55ch]">
          Building full-stack systems for enterprise clients and real-time embedded platforms. 
          Focused on scalable APIs, telemetry systems, and tools that ship.
        </p>
        <div className="mt-8 flex items-center gap-4">
          <a
            href="mailto:brayden.texas@hotmail.com"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Mail className="h-4 w-4" />
            Get in Touch
          </a>
          <a
            href="https://linkedin.com/in/Brayden-Bailey"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
