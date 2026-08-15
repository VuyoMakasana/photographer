import About from "../components/About";
import Seo from "../components/Seo";
import useReveal from "../hooks/useReveal";

export default function AboutPage() {
  const revealRef = useReveal();
  return (
    <div ref={revealRef}>
      <Seo
        title="About — Amara Studio"
        description="Amara Kessler is a documentary and editorial photographer based in Cape Town, South Africa."
      />
      <About />
    </div>
  );
}
