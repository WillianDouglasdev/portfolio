import SectionTitle from "../components/SectionTitle";
import { articles, mediumUrl } from "../data/articles";

function Articles() {
  return (
    <section className="articles section-shell" id="artigos" aria-labelledby="articles-title">
      <div className="container-xl">
        <SectionTitle
          id="articles-title"
          eyebrow="Aprendizado documentado"
          title="Ideias que também viram registro"
          description="Também documento conceitos, decisões e aprendizados que surgem enquanto estudo e desenvolvo projetos."
        />
        <div className="articles-grid">
          {articles.slice(0, 3).map((article) => (
            <article key={article.url}>
              <p>{article.date}</p>
              <h3>{article.title}</h3>
              <a href={article.url} target="_blank" rel="noreferrer">
                Ler artigo <i className="bi bi-arrow-up-right" aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
        {mediumUrl && (
          <a className="text-link" href={mediumUrl} target="_blank" rel="noreferrer">
            Ver publicações no Medium
          </a>
        )}
      </div>
    </section>
  );
}

export default Articles;
