import SectionTitle from "../components/SectionTitle";
import { education } from "../data/education";

function Education() {
  return (
    <section className="education section-shell" id="formacao" aria-labelledby="education-title">
      <div className="container-xl">
        <SectionTitle
          id="education-title"
          eyebrow="Formação"
          title="Software, dados e Inteligência Artificial"
          description="Minha formação combina fundamentos de desenvolvimento de software com estudos específicos em Inteligência Artificial e desenvolvimento web."
        />

        <div className="degree-grid">
          {education.degrees.map((degree) => (
            <article className="degree-item" key={degree.course}>
              <div className="education-meta">
                <span>{degree.period}</span>
                <span className="status-badge">{degree.status}</span>
              </div>
              <p className="education-type">Graduação</p>
              <h3>{degree.course}</h3>
              <p>{degree.institution}</p>
            </article>
          ))}
        </div>

        <div className="professional-training">
          {education.professionalTraining.map((training) => (
            <article key={training.course}>
              <div>
                <p className="education-type">{training.type}</p>
                <h3>{training.course}</h3>
                <p className="training-institution">{training.institution} · {training.period}</p>
              </div>
              <p>{training.description}</p>
            </article>
          ))}
        </div>

        <div className="continuous-learning">
          <h3>Estudos complementares atuais</h3>
          <div>
            {education.continuousLearning.map((study) => (
              <article key={study.institution}>
                <h4>{study.institution}</h4>
                <p>{study.focus}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
