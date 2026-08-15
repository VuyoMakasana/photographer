import JournalList from "../components/JournalList";
import Seo from "../components/Seo";
import useReveal from "../hooks/useReveal";

export default function JournalPage() {
  const revealRef = useReveal();
  return (
    <div ref={revealRef}>
      <Seo
        title="Journal — Amara Studio"
        description="Essays and behind-the-scenes stories from Amara Studio's documentary and editorial photography practice."
      />
      <section className="container" style={{ paddingTop: "clamp(6.5rem, 10vw, 9rem)", paddingBottom: "2rem" }}>
        <p className="eyebrow">Journal</p>
        <h1 style={{ fontSize: "var(--step-4)", marginTop: "0.5rem" }}>Stories</h1>
      </section>
      <section className="container" style={{ paddingBottom: "var(--section-space)" }}>
        <JournalList />
      </section>
    </div>
  );
}
