import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import FeaturedWork from "../components/FeaturedWork";
import Gallery from "../components/Gallery";
import gallery from "../data/gallery";
import useReveal from "../hooks/useReveal";
import Seo from "../components/Seo";

export default function Home() {
  const revealRef = useReveal();
  const preview = gallery.slice(0, 6);

  return (
    <div ref={revealRef}>
      <Seo
        title="Amara Studio — Documentary & Editorial Photography"
        description="Amara Studio is a documentary and editorial photography practice based in Cape Town, South Africa, working on weddings, portraits and editorial commissions worldwide."
      />
      <Hero />
      <Intro />
      <FeaturedWork />

      <section className="section container" data-reveal>
        <div className="gallery-teaser__head">
          <p className="eyebrow">Gallery</p>
          <h2 style={{ fontSize: "var(--step-3)", marginTop: "0.4rem" }}>A closer look</h2>
        </div>
        <div style={{ marginTop: "clamp(2rem, 4vw, 3rem)" }}>
          <Gallery items={preview} showFilters={false} />
        </div>
        <div style={{ marginTop: "clamp(2rem, 4vw, 3rem)" }}>
          <Link to="/work" className="btn">
            Explore the Full Archive →
          </Link>
        </div>
      </section>
    </div>
  );
}
