import { useEffect } from "react";

function useScrollReveal() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const elements = [...document.querySelectorAll(
      ".section-heading, .about-photo, .about-copy, .degree-item, .professional-training, " +
      ".focus-card, .technology-group, .featured-project, .secondary-projects-heading, " +
      ".project-card, .recommendation-item, .recommendation-letter, .contact-layout",
    )];

    if (!("IntersectionObserver" in window)) return undefined;

    // A classe só é adicionada na entrada: o conteúdo nunca depende do observer para aparecer.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          if (!reducedMotion.matches) entry.target.classList.add("motion-enter");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -4%", threshold: 0 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => {
      observer.disconnect();
      elements.forEach((element) => element.classList.remove("motion-enter"));
    };
  }, []);
}

export default useScrollReveal;
