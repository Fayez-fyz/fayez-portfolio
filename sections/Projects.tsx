'use client';

import { Github } from 'lucide-react';
import { projects, personal } from '@/lib/data';
import { SectionHeading } from '@/components/SectionHeading';
import { ProjectCard } from '@/components/ProjectCard';

export function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Projects"
          title="Things I built, personal and professional"
          description="Two personal builds where I own the architecture end to end, plus two products shipped professionally."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <Github size={16} />
            More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
