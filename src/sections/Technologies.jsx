import SectionTitle from "../components/SectionTitle";
import TechnologyGroup from "../components/TechnologyGroup";
import { technologyGroups } from "../data/technologies";

function Technologies() {
  return (
    <section className="technologies section-shell" id="tecnologias" aria-labelledby="technologies-title">
      <div className="container-xl">
        <SectionTitle
          id="technologies-title"
          eyebrow="Tecnologias e competências"
          title="Ferramentas dentro de contexto"
          description="Minha base atual está em desenvolvimento web com Python e JavaScript, apoiada por APIs, bancos de dados e ferramentas de análise. O destaque acompanha o uso nos meus projetos e experiências."
        />
        <div className="technology-grid">
          {technologyGroups.map((group) => (
            <TechnologyGroup key={group.title} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Technologies;
