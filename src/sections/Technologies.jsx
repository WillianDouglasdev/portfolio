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
          description="Desenvolvimento é o eixo da minha base; dados ampliam a leitura dos problemas e automação apoia soluções mais eficientes. Os destaques refletem as competências mais presentes nos meus projetos."
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
