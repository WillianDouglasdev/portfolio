import { profile } from "../data/profile";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-xl footer-content">
        <p>© {new Date().getFullYear()} {profile.name}.</p>
        <p>Desenvolvido com React e Bootstrap.</p>
      </div>
    </footer>
  );
}

export default Footer;
