// src/pages/CybersecurityProjectsPage.tsx
import { ProjectCard } from "@/components/custom/ProjectCard";

export function CybersecurityProjectsPage() {
  return (
    <section id="Cybersecurity">
      <h2 className="mb-8 text-3xl font-bold">Cyber</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

        <ProjectCard 
          title="Observability"
          description="This project aims to apply the acquired knowledge with a focus on the observability and monitoring of a web server network infrastructure." 
          imageUrl="https://raw.githubusercontent.com/carmanoli/observability/refs/heads/main/image/logo.png"
          githubUrl="https://github.com/carmanoli/observability"
          tags={['Linux', 'Grafana', 'Python', 'Apache']}
        />

        <ProjectCard 
          title="Wargaming"
          description="A simulated environment for practicing cybersecurity skills, featuring various challenges and scenarios to enhance learning and expertise." 
          imageUrl="https://raw.githubusercontent.com/carmanoli/Wargaming/refs/heads/main/image/logo.png"
          githubUrl="https://github.com/carmanoli/Wargaming"
          tags={['Linux', 'Cisco', 'Kali', 'PFSense']}
        />


      </div>
    </section>
  );
}