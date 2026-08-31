import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { education } from "../data/education";

function Education() {
  const [showCurrentStudies, setShowCurrentStudies] = useState(false);

  return (
    <section
      className="education section-shell"
      id="formacao"
      aria-labelledby="education-title"
    >
      <div className="container-xl">
        <SectionTitle
          id="education-title"
          eyebrow="Formação"
          title="Software, dados e Inteligência Artificial"
          description="Formação acadêmica e prática alinhada aos projetos que desenvolvo."
        />

        <div className="degree-list">
          {education.degrees.map((degree) => (
            <article className="degree-item" key={degree.course}>
              <div>
                <p className="education-type">Graduação</p>
                <h3>{degree.course}</h3>
                <p>{degree.institution}</p>
              </div>
              <div className="education-meta">
                <span>{degree.period}</span>
                <span className="status-badge">{degree.status}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="professional-training">
          {education.professionalTraining.map((training) => (
            <article key={training.course}>
              <div>
                <p className="education-type">{training.type}</p>
                <h3>{training.course}</h3>
              </div>
              <p className="training-institution">
                {training.institution} · {training.period}
              </p>
            </article>
          ))}
        </div>

        <div className="current-studies">
          <p>
            <strong>Estudos atuais:</strong>{" "}
            {education.continuousLearning.map((study) => study.institution).join(" · ")}
          </p>
          <button
            className="disclosure-button"
            type="button"
            aria-expanded={showCurrentStudies}
            aria-controls="current-studies-details"
            onClick={() => setShowCurrentStudies((current) => !current)}
          >
            {showCurrentStudies ? "Ocultar detalhes" : "Ver detalhes dos estudos"}
            <i
              className={`bi ${showCurrentStudies ? "bi-chevron-up" : "bi-chevron-down"}`}
              aria-hidden="true"
            />
          </button>

          {showCurrentStudies && (
            <ul className="current-studies-details" id="current-studies-details">
              {education.continuousLearning.map((study) => (
                <li key={study.institution}>
                  <strong>{study.institution}</strong>
                  <span>{study.focus}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}

export default Education;
