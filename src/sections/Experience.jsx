import SectionTitle from "../components/SectionTitle";
import { experiences } from "../data/experience";

function Experience() {
  return (
    <section className="experience section-shell" id="experiencia" aria-labelledby="experience-title">
      <div className="container-xl">
        <SectionTitle
          id="experience-title"
          eyebrow="Experiência"
          title="Tecnologia aplicada em contextos reais"
          description="Uma trajetória que reúne dados, desenvolvimento, suporte e participação na comunidade."
        />

        <div className="experience-grid">
          {experiences.map((experience) => (
            <article className="experience-item" key={experience.id}>
              <div className="experience-topline">
                <p>{experience.period}</p>
                {experience.location && <p>{experience.location}</p>}
              </div>
              <h3>{experience.role}</h3>
              <p className="experience-organization">{experience.organization}</p>
              <p>{experience.description}</p>
              {experience.technologies.length > 0 && (
                <ul className="chip-list chip-list--small" aria-label={`Competências em ${experience.organization}`}>
                  {experience.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
