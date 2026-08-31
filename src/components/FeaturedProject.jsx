function FeaturedProject({ project, index, isExpanded, onToggle }) {
  const detailsId = `${project.id}-details`;

  return (
    <article
      className={`featured-project ${index === 0 ? "featured-project--primary" : ""} ${isExpanded ? "is-expanded" : ""}`}
      aria-labelledby={`${project.id}-title`}
    >
      <div className="project-summary">
        <a
          className="project-media"
          href={project.links.demo}
          target="_blank"
          rel="noreferrer"
          aria-label={`Abrir demonstração do ${project.title}`}
        >
          <img src={project.image} alt={project.imageAlt} loading="lazy" />
        </a>

        <div className="project-content">
          <p className="project-number" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 id={`${project.id}-title`}>{project.title}</h3>
          <p className="project-tagline">{project.tagline}</p>

          <ul
            className="chip-list project-primary-stack"
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
              rel="noreferrer"
            >
              Ver projeto
              <i className="bi bi-arrow-up-right" aria-hidden="true" />
            </a>
            <a
              className="button button--secondary"
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
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
        </div>
      </div>

      {isExpanded && (
        <div
          className="project-expanded"
          id={detailsId}
          role="region"
          aria-labelledby={`${project.id}-title`}
        >
          <dl className="project-details">
            <div>
              <dt>O problema</dt>
              <dd>{project.problem}</dd>
            </div>
            <div>
              <dt>A solução</dt>
              <dd>{project.solution}</dd>
            </div>
            <div>
              <dt>Decisão técnica</dt>
              <dd>
                <strong>{project.highlight}</strong> {project.differential}
              </dd>
            </div>
            <div>
              <dt>Qualidade</dt>
              <dd>{project.quality}</dd>
            </div>
          </dl>

          <div className="project-complete-stack">
            <p>Como foi construído</p>
            <ul className="chip-list" aria-label={`Stack completa do ${project.title}`}>
              {project.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </article>
  );
}

export default FeaturedProject;
