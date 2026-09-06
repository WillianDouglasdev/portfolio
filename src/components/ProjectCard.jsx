function ProjectCard({ project, isExpanded, onToggle }) {
  const detailsId = `${project.id}-details`;
  const titleId = `${project.id}-title`;

  return (
    <article
      className={`project-card ${isExpanded ? "is-expanded" : ""}`}
      aria-labelledby={titleId}
    >
      <a
        className="project-card-media"
        href={project.links.demo}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Abrir demonstração do ${project.title}`}
      >
        <img
          src={project.image}
          alt={project.imageAlt}
          width={project.imageWidth}
          height={project.imageHeight}
          loading="lazy"
          decoding="async"
        />
      </a>

      <div className="project-card-body">
        <div className="project-card-heading">
          <div>
            {project.subtitle && <p className="project-card-subtitle">{project.subtitle}</p>}
            <h4 id={titleId}>{project.title}</h4>
          </div>
          <span className="project-card-badge">{project.badge}</span>
        </div>

        <p className="project-card-tagline">{project.tagline}</p>
        <p className="project-card-description">{project.description}</p>

        <ul
          className="chip-list chip-list--small project-card-stack"
          aria-label={`Tecnologias principais do ${project.title}`}
        >
          {project.primaryTechnologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        <div className="project-actions">
          <a
            className="button button--primary"
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver projeto
            <i className="bi bi-arrow-up-right" aria-hidden="true" />
          </a>
          <a
            className="button button--secondary"
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-github" aria-hidden="true" />
            GitHub
          </a>
        </div>

        <button
          className="disclosure-button"
          type="button"
          aria-expanded={isExpanded}
          aria-controls={detailsId}
          onClick={onToggle}
        >
          {isExpanded ? "Ocultar detalhes" : "Ver detalhes"}
          <i
            className={`bi ${isExpanded ? "bi-chevron-up" : "bi-chevron-down"}`}
            aria-hidden="true"
          />
        </button>

        {isExpanded && (
          <div
            className="project-card-expanded"
            id={detailsId}
            role="region"
            aria-labelledby={titleId}
          >
            <dl>
              <div>
                <dt>O problema</dt>
                <dd>{project.problem}</dd>
              </div>
              <div>
                <dt>A solução</dt>
                <dd>{project.solution}</dd>
              </div>
              <div>
                <dt>{project.detailLabel}</dt>
                <dd>{project.detail}</dd>
              </div>
            </dl>

            <div className="project-card-complete-stack">
              <p>Como foi construído</p>
              <ul
                className="chip-list chip-list--small"
                aria-label={`Stack completa do ${project.title}`}
              >
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
