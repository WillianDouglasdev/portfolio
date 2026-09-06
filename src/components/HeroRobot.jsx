import { useState, useSyncExternalStore } from "react";
import animatedRobot from "../assets/images/ai-robot.svg";
import staticRobot from "../assets/images/ai-robot-static.svg";

const motionQuery = "(min-width: 992px) and (prefers-reduced-motion: no-preference)";

function subscribeToMotion(callback) {
  const preference = window.matchMedia(motionQuery);
  preference.addEventListener("change", callback);
  return () => preference.removeEventListener("change", callback);
}

function canAnimate() {
  return window.matchMedia(motionQuery).matches;
}

function HeroRobot() {
  const [paused, setPaused] = useState(false);
  const motionAllowed = useSyncExternalStore(subscribeToMotion, canAnimate, () => false);

  // CSS não pausa SMIL dentro de <img>; trocamos por um quadro estático quando necessário.
  const playing = motionAllowed && !paused;

  return (
    <div className="hero-robot">
      <img
        className="hero-robot-image"
        src={playing ? animatedRobot : staticRobot}
        alt=""
        aria-hidden="true"
        width="700"
        height="700"
        decoding="async"
      />
      {motionAllowed && (
        <button
          type="button"
          className="hero-robot-control"
          onClick={() => setPaused((current) => !current)}
          aria-label={playing ? "Pausar animação do robô" : "Reproduzir animação do robô"}
        >
          <i className={`bi ${playing ? "bi-pause" : "bi-play"}`} aria-hidden="true" />
          {playing ? "Pausar animação" : "Reproduzir animação"}
        </button>
      )}
    </div>
  );
}

export default HeroRobot;
