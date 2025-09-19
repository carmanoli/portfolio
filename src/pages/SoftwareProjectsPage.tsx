// src/pages/SoftwareProjectsPage.tsx
import { ProjectCard } from "@/components/custom/ProjectCard";

export function SoftwareProjectsPage() {
  return (
    <section id="software">
      <h2 className="mb-8 text-3xl font-bold">Software Development</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Aqui colocas os cartões dos teus projetos de software */}
        <ProjectCard 
          title="WeaveSight"
          description="Personal Insight Engine"
          imageUrl="https://raw.githubusercontent.com/carmanoli/weavesight/refs/heads/main/image/logo.png"
          githubUrl="https://github.com/carmanoli/weavesight"
          tags={['React', 'TypeScript', 'AI', 'PWA']}
        />

                <ProjectCard 
          title="foldermirror"
          description="A simple command-line tool that unidirectionally mirrors one folder to another"
          imageUrl="https://raw.githubusercontent.com/carmanoli/foldermirror/refs/heads/main/image/logo.png"
          githubUrl="https://github.com/carmanoli/foldermirror"
          tags={['C#', 'CLI', '.NET', 'File Sync']}
        />
        {/* Outros cartões de software... */}
      </div>
    </section>
  );
}