import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { experiences } from "../data/experience";

function Experience() {
  const [expandedExperience, setExpandedExperience] = useState(null);

  function toggleExperience(experienceId) {
    setExpandedExperience((current) =>
      current === experienceId ? null : experienceId,
    );
  }

  return (
    <section
      className="experience section-shell"
      id="experiencia"
      aria-labelledby="experience-title"
    >
      <div className="container-xl">
        <SectionTitle
          id="experience-title"
          eyebrow="Experiência"
          title="Tecnologia aplicada em contextos reais"
          description="Dados, desenvolvimento, suporte e participação na comunidade em uma trajetória ainda em construção."
        />

        <ol className="experience-timeline">
          {experiences.map((experience) => {
            const isExpanded = expandedExperience === experience.id;
            const detailsId = `${experience.id}-experience-details`;

            return (
              <li className="experience-item" key={experience.id}>
                <article>
                  <div className="experience-topline">
                    <p>{experience.period}</p>
                    {experience.location && <p>{experience.location}</p>}
                  </div>
                  <h3 id={`${experience.id}-experience-title`}>{experience.role}</h3>
                  <p className="experience-organization">{experience.organization}</p>
                  <p className="experience-summary">{experience.summary}</p>

                  <button
                    className="disclosure-button"
                    type="button"
                    aria-expanded={isExpanded}
                    aria-controls={detailsId}
                    onClick={() => toggleExperience(experience.id)}
                  >
                    {isExpanded ? "Ocultar atuação" : "Ver atuação"}
                    <i
                      className={`bi ${isExpanded ? "bi-chevron-up" : "bi-chevron-down"}`}
                      aria-hidden="true"
                    />
                  </button>

                  {isExpanded && (
                    <div
                      className="experience-details"
                      id={detailsId}
                      role="region"
                      aria-labelledby={`${experience.id}-experience-title`}
                    >
                      <ul className="responsibility-list">
                        {experience.responsibilities.map((responsibility) => (
                          <li key={responsibility}>{responsibility}</li>
                        ))}
                      </ul>

                      {experience.technologies.length > 0 && (
                        <ul
                          className="chip-list chip-list--small"
                          aria-label={`Competências em ${experience.organization}`}
                        >
                          {experience.technologies.map((technology) => (
                            <li key={technology}>{technology}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export default Experience;
