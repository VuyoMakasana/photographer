import { Link } from "react-router-dom";
import photographer from "../data/photographer";
import "./Hero.css";

export default function Hero() {
  const { hero } = photographer;

  return (
    <section className="hero">
      <picture className="hero__media">
        <source media="(max-width: 640px)" srcSet={hero.image.mobile} />
        <img src={hero.image.desktop} alt={hero.image.alt} fetchPriority="high" />
      </picture>
      <div className="hero__scrim" aria-hidden="true" />

      <div className="hero__content container">
        <p className="eyebrow hero__kicker" style={{ color: "var(--color-paper)" }}>
          {hero.kicker}
        </p>
        <h1 className="hero__headline">{hero.headline}</h1>
        <p className="hero__subhead">{hero.subhead}</p>
        <div className="hero__ctas">
          <Link to={hero.primaryCta.href} className="btn-solid">
            {hero.primaryCta.label}
          </Link>
          <Link to={hero.secondaryCta.href} className="btn" style={{ color: "var(--color-paper)" }}>
            {hero.secondaryCta.label}
          </Link>
        </div>
      </div>

      <div className="hero__scroll-cue" aria-hidden="true">
        <span />
      </div>
    </section>
  );
}
