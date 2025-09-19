// src/pages/SoftwareProjectsPage.tsx
import { ProjectCard } from "@/components/custom/ProjectCard";

export function NetworkProjectsPage() {
  return (
    <section id="software">
      <h2 className="mb-8 text-3xl font-bold">Network</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard 
          title="NetStatus"
          description="Personal Insight Engine"
          imageUrl="https://raw.githubusercontent.com/carmanoli/netstatus/refs/heads/main/image/logo.png"
          githubUrl="https://github.com/carmanoli/netstatus"
          tags={['Python', 'Netowork', 'YAML', 'SCAPY']}
        />


      </div>
    </section>
  );
}