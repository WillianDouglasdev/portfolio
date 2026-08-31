import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Education from "./sections/Education";
import Focus from "./sections/Focus";
import Technologies from "./sections/Technologies";
import Projects from "./sections/Projects";
import Recommendations from "./sections/Recommendations";
import Contact from "./sections/Contact";
import useScrollReveal from "./hooks/useScrollReveal";

function App() {
  useScrollReveal();

  return (
    <>
      <a className="skip-link" href="#conteudo-principal">
        Pular para o conteúdo principal
      </a>
      <Navbar />
      {/* Esta sequência também orienta a ordem dos links na navbar. */}
      <main id="conteudo-principal">
        <Hero />
        <About />
        <Education />
        <Focus />
        <Technologies />
        <Projects />
        <Recommendations />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
