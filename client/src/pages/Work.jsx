import ProjectArchive from "../components/ProjectArchive";
import useReveal from "../hooks/useReveal";
import Seo from "../components/Seo";

export default function Work() {
  const revealRef = useReveal();

  return (
    <div ref={revealRef}>
      <Seo
        title="Work — Amara Studio"
        description="A chronological archive of weddings, portrait series and editorial commissions by Amara Studio."
      />
      <section className="container" style={{ paddingTop: "clamp(6.5rem, 10vw, 9rem)", paddingBottom: "2rem" }}>
        <p className="eyebrow">Archive</p>
        <h1 style={{ fontSize: "var(--step-4)", marginTop: "0.5rem" }}>Work</h1>
        <p style={{ color: "var(--color-ink-soft)", maxWidth: "48ch", marginTop: "1rem" }}>
          A chronological record of series and commissions, organized by year.
        </p>
      </section>
      <section className="container" style={{ paddingBottom: "var(--section-space)" }}>
        <ProjectArchive />
      </section>
    </div>
  );
}
