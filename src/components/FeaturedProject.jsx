function FeaturedProject({ project, index }) {
  const mediaFirst = project.mediaPosition === "start";

  return (
    <article
      className={`featured-project ${mediaFirst ? "featured-project--media-start" : ""} ${!project.image ? "featured-project--without-media" : ""}`}
      aria-labelledby={`${project.id}-title`}
    >
      <div className="project-content">
        <p className="project-number" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </p>
        <h3 id={`${project.id}-title`}>{project.title}</h3>
        <p className="project-tagline">{project.tagline}</p>

        <dl className="project-details">
          <div>
            <dt>Problema</dt>
            <dd>{project.problem}</dd>
          </div>
          <div>
            <dt>Solução</dt>
            <dd>{project.solution}</dd>
          </div>
          <div>
            <dt>Diferencial</dt>
            <dd>{project.differential}</dd>
          </div>
        </dl>

        <p className="project-highlight">{project.highlight}</p>

        <ul className="chip-list" aria-label={`Tecnologias utilizadas no ${project.title}`}>
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        <div className="project-actions">
          <a className="button button--primary" href={project.links.demo} target="_blank" rel="noreferrer">
            Ver projeto
            <i className="bi bi-arrow-up-right" aria-hidden="true" />
          </a>
          <a className="button button--secondary" href={project.links.github} target="_blank" rel="noreferrer">
            <i className="bi bi-github" aria-hidden="true" />
            Código no GitHub
          </a>
        </div>
      </div>

      {project.image && (
        <a
          className="project-media"
          href={project.links.demo}
          target="_blank"
          rel="noreferrer"
          aria-label={`Abrir demonstração do ${project.title}`}
        >
          <img src={project.image} alt={project.imageAlt} loading="lazy" />
        </a>
      )}
    </article>
  );
}

export default FeaturedProject;
