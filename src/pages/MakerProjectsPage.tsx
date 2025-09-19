// src/pages/SoftwareProjectsPage.tsx
import { ProjectCard } from "@/components/custom/ProjectCard";

export function MakerProjectsPage() {
  return (
    <section id="software">
      <h2 className="mb-8 text-3xl font-bold">Maker & IOT</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Aqui colocas os cartões dos teus projetos de software */}
        <ProjectCard 
          title="ThingyChat"
          description="An Open-Source Interactive Signage Platform"
          imageUrl="https://raw.githubusercontent.com/carmanoli/ThingyChat/refs/heads/main/image/logo.png"
          githubUrl="https://github.com/carmanoli/ThingyChat"
          tags={['JavaScript', 'WebSockets', 'PWA']}
        />
        {/* Outros cartões de software... */}
      </div>
    </section>
  );
}