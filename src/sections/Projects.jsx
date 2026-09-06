import { useState } from "react";
import FeaturedProject from "../components/FeaturedProject";
import ProjectCard from "../components/ProjectCard";
import SectionTitle from "../components/SectionTitle";
import {
  featuredProjects,
  secondaryProjects,
  upcomingProjects,
} from "../data/projects";

function Projects() {
  const [expandedProject, setExpandedProject] = useState(null);

  function toggleProject(projectId) {
    setExpandedProject((current) => (current === projectId ? null : projectId));
  }

  return (
    <section className="projects section-shell" id="projetos" aria-labelledby="projects-title">
      <div className="container-xl">
        <SectionTitle
          id="projects-title"
          eyebrow="Projetos principais"
          title="Problemas transformados em produtos"
          description="Aplicações que combinam desenvolvimento, regras de negócio, dados e decisões técnicas documentadas."
        />

        <div className="featured-projects">
          {featuredProjects.map((project, index) => (
            <FeaturedProject
              key={project.id}
              project={project}
              index={index}
              isExpanded={expandedProject === project.id}
              onToggle={() => toggleProject(project.id)}
            />
          ))}
        </div>

        {upcomingProjects.length > 0 && (
          <div className="conditional-projects" aria-label="Projetos em desenvolvimento">
            {upcomingProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                isExpanded={expandedProject === project.id}
                onToggle={() => toggleProject(project.id)}
              />
            ))}
          </div>
        )}

        {secondaryProjects.length > 0 && (
          <div className="secondary-projects" aria-labelledby="secondary-projects-title">
            <div className="secondary-projects-heading">
              <p className="eyebrow">Outras soluções</p>
              <h3 id="secondary-projects-title">Mais projetos</h3>
              <p>
                Experimentos de produto que ampliam o portfólio com regras locais,
                TypeScript e experiências de aprendizagem.
              </p>
            </div>
            <div className="secondary-projects-grid">
              {secondaryProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  isExpanded={expandedProject === project.id}
                  onToggle={() => toggleProject(project.id)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
