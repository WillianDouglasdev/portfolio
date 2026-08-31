import SocialLinks from "../components/SocialLinks";
import { profile } from "../data/profile";

function Contact() {
  return (
    <section className="contact section-shell" id="contato" aria-labelledby="contact-title">
      <div className="container-xl contact-layout">
        <div>
          <p className="eyebrow">Contato</p>
          <h2 id="contact-title">Vamos conversar?</h2>
          <p>
            Estou aberto a estágios e oportunidades iniciais em desenvolvimento, dados e áreas que conectem essas frentes. Você pode falar comigo diretamente ou conhecer melhor meu trabalho pelo LinkedIn e pelo GitHub.
          </p>
        </div>

        <div className="contact-actions">
          {profile.links.email && (
            <a className="button button--primary" href={profile.links.email}>
              <i className="bi bi-envelope" aria-hidden="true" />
              Enviar e-mail
            </a>
          )}
          <SocialLinks />
          {profile.links.resume && (
            <a className="button button--secondary" href={profile.links.resume} download>
              Baixar currículo
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
