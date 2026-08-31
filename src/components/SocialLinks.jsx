import { profile } from "../data/profile";

function SocialLinks({ className = "", showEmail = false }) {
  return (
    <div className={`social-links ${className}`} aria-label="Links profissionais">
      <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
        <i className="bi bi-linkedin" aria-hidden="true" />
        LinkedIn
      </a>
      <a href={profile.links.github} target="_blank" rel="noreferrer">
        <i className="bi bi-github" aria-hidden="true" />
        GitHub
      </a>
      {showEmail && profile.links.email && (
        <a href={profile.links.email}>
          <i className="bi bi-envelope" aria-hidden="true" />
          E-mail
        </a>
      )}
    </div>
  );
}

export default SocialLinks;
