import photographer from "../data/photographer";
import "./Intro.css";

export default function Intro() {
  const { intro } = photographer;
  return (
    <section className="intro section container" data-reveal>
      <p className="eyebrow">{intro.eyebrow}</p>
      <p className="intro__statement">{intro.statement}</p>
      <p className="intro__body">{intro.body}</p>
    </section>
  );
}
