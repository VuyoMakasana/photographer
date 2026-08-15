import Services from "../components/Services";
import Seo from "../components/Seo";
import useReveal from "../hooks/useReveal";

export default function ServicesPage() {
  const revealRef = useReveal();
  return (
    <div ref={revealRef}>
      <Seo
        title="Services — Amara Studio"
        description="Photography services offered by Amara Studio: weddings, portraits, events, fashion, editorial, and maternity & couples sessions."
      />
      <section className="container" style={{ paddingTop: "clamp(6.5rem, 10vw, 9rem)", paddingBottom: "2rem" }}>
        <p className="eyebrow">Services</p>
        <h1 style={{ fontSize: "var(--step-4)", marginTop: "0.5rem" }}>What I offer</h1>
        <p style={{ color: "var(--color-ink-soft)", maxWidth: "48ch", marginTop: "1rem" }}>
          Every booking starts with a short conversation about what you actually want documented —
          pricing below is a starting point, not a menu.
        </p>
      </section>
      <section className="container" style={{ paddingBottom: "var(--section-space)" }} data-reveal>
        <Services />
      </section>
    </div>
  );
}
