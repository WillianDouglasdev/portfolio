import SocialLinks from "../components/SocialLinks";
import { profile } from "../data/profile";

function Hero() {
  return (
    <section className="hero section-shell" id="inicio" aria-labelledby="hero-title">
      <div className="container-xl hero-content">
        <div className="hero-copy">
          <p className="hero-context">
            <i className="bi bi-geo-alt" aria-hidden="true" />
            {profile.location}
            <span aria-hidden="true">·</span>
            {profile.academicContext}
          </p>

          <h1 id="hero-title">{profile.name}</h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-description">{profile.heroDescription}</p>

          <div className="hero-actions">
            <a className="button button--primary" href="#projetos">
              Ver projetos
              <i className="bi bi-arrow-down-right" aria-hidden="true" />
            </a>
            <SocialLinks />
            {profile.links.resume && (
              <a className="text-link" href={profile.links.resume} download>
                Currículo
              </a>
            )}
          </div>

          <ul className="hero-technologies" aria-label="Tecnologias centrais">
            {profile.coreTechnologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </div>

        <div className="hero-signature" aria-hidden="true">
          <span className="hero-monogram">WD</span>
          <span className="hero-orbit hero-orbit--one" />
          <span className="hero-orbit hero-orbit--two" />
          <span className="hero-focus-badge hero-focus-badge--backend">
            <i className="bi bi-braces" />
            Backend
          </span>
          <span className="hero-focus-badge hero-focus-badge--data">
            <i className="bi bi-bar-chart-line" />
            Dados
          </span>
          <span className="hero-focus-badge hero-focus-badge--ai">
            <i className="bi bi-stars" />
            IA aplicada
          </span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
