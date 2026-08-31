import SectionTitle from "../components/SectionTitle";
import { focusAreas } from "../data/focusAreas";

function Focus() {
  return (
    <section className="focus section-shell" id="foco" aria-labelledby="focus-title">
      <div className="container-xl">
        <SectionTitle
          id="focus-title"
          eyebrow="Direção profissional"
          title="Focos de atuação"
          description="Desenvolvimento como eixo, dados como perspectiva e Inteligência Artificial como área de evolução."
        />

        <div className="focus-grid">
          {focusAreas.map((area, index) => (
            <article className={`focus-card focus-card--${area.id}`} key={area.id}>
              <div className="focus-card-topline">
                <span className="focus-card-icon" aria-hidden="true">
                  <i className={`bi ${area.icon}`} />
                </span>
                <span className="focus-card-index">0{index + 1}</span>
              </div>
              <p className="focus-card-step">{area.step}</p>
              <h3>{area.title}</h3>
              <p className="focus-card-description">{area.description}</p>
              <ul className="chip-list chip-list--small" aria-label={`Competências relacionadas a ${area.title}`}>
                {area.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              {area.note && <p className="focus-card-note">{area.note}</p>}
            </article>
          ))}
        </div>

        <p className="focus-statement" aria-label="Síntese dos focos de atuação">
          <span>Sistemas para construir.</span>
          <span>Dados para compreender.</span>
          <span>IA para ampliar.</span>
        </p>
      </div>
    </section>
  );
}

export default Focus;
