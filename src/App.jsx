import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Technologies from "./sections/Technologies";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Recommendations from "./sections/Recommendations";
import Education from "./sections/Education";
import Articles from "./sections/Articles";
import Contact from "./sections/Contact";
import { articles } from "./data/articles";

function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo-principal">
        Pular para o conteúdo principal
      </a>
      <Navbar />
      <main id="conteudo-principal">
        <Hero />
        <Projects />
        <Technologies />
        <About />
        <Experience />
        <Recommendations />
        <Education />
        {articles.length > 0 && <Articles />}
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
