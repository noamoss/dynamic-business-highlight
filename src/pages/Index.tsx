
import { Hero } from "@/components/Hero";
import { ToolsSection } from "@/components/ToolsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { MaterialsSection } from "@/components/MaterialsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ToolsSection />
      <ProjectsSection />
      <MaterialsSection />
    </div>
  );
};

export default Index;
