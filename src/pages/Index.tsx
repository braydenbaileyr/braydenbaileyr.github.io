import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto">
        <HeroSection />
        <div className="mx-6 h-px bg-border" />
        <ExperienceSection />
        <div className="mx-6 h-px bg-border" />
        <ProjectsSection />
        <div className="mx-6 h-px bg-border" />
        <EducationSection />
        <div className="mx-6 h-px bg-border" />
        <SkillsSection />
        <footer className="max-w-3xl mx-auto px-6 py-12 text-center">
          <p className="text-xs text-muted-foreground">
            © 2026 Brayden Bailey
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
