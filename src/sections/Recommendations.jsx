import SectionTitle from "../components/SectionTitle";
import {
  recommendationLetter,
  recommendations,
} from "../data/recommendations";

function Recommendations() {
  return (
    <section
      className="recommendations section-shell"
      id="recomendacoes"
      aria-labelledby="recommendations-title"
    >
      <div className="container-xl">
        <SectionTitle
          id="recommendations-title"
          eyebrow="Recomendações"
          title="Confiança construída na prática"
          description="Relatos de pessoas que acompanharam meu desenvolvimento em ambientes profissionais e de formação."
        />

        <div className="recommendation-grid">
          {recommendations.map((recommendation) => (
            <article className="recommendation-card" key={recommendation.id}>
              <i className="bi bi-quote recommendation-quote-icon" aria-hidden="true" />
              <blockquote>
                <p>{recommendation.quote}</p>
              </blockquote>

              <footer className="recommendation-author">
                {recommendation.linkedin ? (
                  <a
                    href={recommendation.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Perfil de ${recommendation.name} no LinkedIn`}
                  >
                    {recommendation.name}
                    <i className="bi bi-linkedin" aria-hidden="true" />
                  </a>
                ) : (
                  <strong>{recommendation.name}</strong>
                )}
                <p>{recommendation.currentRole}</p>
                <span>{recommendation.relationship}</span>
              </footer>
            </article>
          ))}
        </div>

        <article className="recommendation-letter">
          <a
            className="recommendation-letter-preview"
            href={recommendationLetter.image}
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir a carta de recomendação da Infinity School em tamanho completo"
          >
            <img
              src={recommendationLetter.image}
              alt="Carta de recomendação emitida pela Infinity School para Willian Douglas"
              loading="lazy"
              width="918"
              height="1288"
            />
          </a>

          <div className="recommendation-letter-content">
            <p className="education-type">Documento de formação</p>
            <h3>{recommendationLetter.title}</h3>
            <p>{recommendationLetter.description}</p>
            <p className="recommendation-letter-date">
              Emitida em {recommendationLetter.issuedAt}
            </p>
            <a
              className="button button--secondary"
              href={recommendationLetter.image}
              target="_blank"
              rel="noreferrer"
            >
              Ver carta completa
              <i className="bi bi-box-arrow-up-right" aria-hidden="true" />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Recommendations;
