import FeaturedProject from "../components/FeaturedProject";
import ProjectCard from "../components/ProjectCard";
import SectionTitle from "../components/SectionTitle";
import {
  featuredProjects,
  secondaryProjects,
  upcomingProjects,
} from "../data/projects";

function Projects() {
  return (
    <section className="projects section-shell" id="projetos" aria-labelledby="projects-title">
      <div className="container-xl">
        <SectionTitle
          id="projects-title"
          eyebrow="Projetos em destaque"
          title="Problemas transformados em produtos"
          description="Aplicações que combinam desenvolvimento, regras de negócio, dados e decisões técnicas documentadas."
        />

        <div className="featured-projects">
          {featuredProjects.map((project, index) => (
            <FeaturedProject key={project.id} project={project} index={index} />
          ))}
        </div>

        {upcomingProjects.length > 0 && (
          <div className="conditional-projects" aria-label="Projetos em desenvolvimento">
            {upcomingProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        {secondaryProjects.length > 0 && (
          <div className="secondary-projects">
            <h3>Outros projetos</h3>
            <div className="secondary-projects-grid">
              {secondaryProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
