import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import {
  recommendationLetter,
  recommendations,
} from "../data/recommendations";

function getInitials(name) {
  const nameParts = name.trim().split(/\s+/);
  return `${nameParts[0][0]}${nameParts[nameParts.length - 1][0]}`;
}

function Recommendations() {
  const [expandedRecommendation, setExpandedRecommendation] = useState(null);

  function toggleRecommendation(recommendationId) {
    setExpandedRecommendation((current) =>
      current === recommendationId ? null : recommendationId,
    );
  }

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
          description="Relatos de pessoas que acompanharam meu desenvolvimento profissional e acadêmico."
        />

        <div className="recommendation-list">
          {recommendations.map((recommendation) => {
            const isExpanded = expandedRecommendation === recommendation.id;
            const detailsId = `${recommendation.id}-recommendation`;

            return (
              <article className="recommendation-item" key={recommendation.id}>
                <i className="bi bi-quote recommendation-quote-icon" aria-hidden="true" />

                <blockquote id={detailsId}>
                  <p>{isExpanded ? recommendation.quote : recommendation.excerpt}</p>
                </blockquote>

                <div className="recommendation-author">
                  <span className="recommendation-avatar" aria-hidden="true">
                    {getInitials(recommendation.name)}
                  </span>
                  <div>
                    <a
                      href={recommendation.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Perfil de ${recommendation.name} no LinkedIn`}
                    >
                      {recommendation.name}
                      <i className="bi bi-linkedin" aria-hidden="true" />
                    </a>
                    <p>{recommendation.currentRole}</p>
                    <span>{recommendation.relationship}</span>
                  </div>
                </div>

                <button
                  className="disclosure-button"
                  type="button"
                  aria-expanded={isExpanded}
                  aria-controls={detailsId}
                  onClick={() => toggleRecommendation(recommendation.id)}
                >
                  {isExpanded ? "Recolher recomendação" : "Ler recomendação completa"}
                  <i
                    className={`bi ${isExpanded ? "bi-chevron-up" : "bi-chevron-down"}`}
                    aria-hidden="true"
                  />
                </button>
              </article>
            );
          })}
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
          </div>

          <a
            className="button button--secondary"
            href={recommendationLetter.image}
            target="_blank"
            rel="noreferrer"
          >
            Ver carta completa
            <i className="bi bi-box-arrow-up-right" aria-hidden="true" />
          </a>
        </article>
      </div>
    </section>
  );
}

export default Recommendations;
