import SectionTitle from "../components/SectionTitle";
import { profile } from "../data/profile";
import avatarWillian from "../assets/images/avatar-willian.webp";

function About() {
  return (
    <section className="about section-shell" id="sobre" aria-labelledby="about-title">
      <div className="container-xl">
        <SectionTitle
          id="about-title"
          eyebrow="Sobre mim"
          title="Desenvolvimento como eixo. Dados como perspectiva."
        />

        <div className="about-layout">
          <figure className="about-photo">
            <img
              src={avatarWillian}
              alt="Willian Douglas durante uma atividade do GDG Belo Horizonte"
              loading="lazy"
              width="1000"
              height="1000"
            />
            <figcaption>Participação na comunidade de tecnologia em Belo Horizonte.</figcaption>
          </figure>

          <div className="about-copy">
            <p>
              Curso Análise e Desenvolvimento de Sistemas na Newton Paiva e Inteligência Artificial na UNA. Minha formação Full Stack na Infinity School estruturou a base prática que aplico em desenvolvimento web.
            </p>
            <p>
              Minha experiência conecta desenvolvimento e dados. Procuro transformar problemas em sistemas funcionais com interfaces, APIs, regras de negócio, bancos de dados e Inteligência Artificial aplicada de forma controlada.
            </p>

            <ul className="language-list" aria-label="Idiomas">
              {profile.languages.map((language) => (
                <li key={language}>
                  <i className="bi bi-translate" aria-hidden="true" />
                  {language}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
