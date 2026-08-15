import photographer from "../data/photographer";
import "./About.css";

export default function About() {
  const { about, photographerName } = photographer;

  return (
    <div className="about">
      <div className="about__intro container">
        <div className="about__portrait" data-reveal>
          <img src={about.portrait} alt={about.portraitAlt} />
        </div>
        <div className="about__copy" data-reveal>
          <p className="eyebrow">About</p>
          <h1 className="about__name">{photographerName}</h1>
          <p className="about__short">{about.shortBio}</p>
          {about.longBio.map((para, i) => (
            <p className="about__para" key={i}>
              {para}
            </p>
          ))}
          <blockquote className="about__philosophy">“{about.philosophy}”</blockquote>
        </div>
      </div>

      <div className="about__facts container" data-reveal>
        <div className="about__fact">
          <p className="eyebrow">Experience</p>
          <p>{about.experience}</p>
        </div>
        <div className="about__fact">
          <p className="eyebrow">Location</p>
          <p>{about.location}</p>
        </div>
        <div className="about__fact">
          <p className="eyebrow">Areas Served</p>
          <p>{about.areasServed.join(" · ")}</p>
        </div>
      </div>

      <div className="about__lists container">
        <div className="about__list-block" data-reveal>
          <p className="eyebrow">Awards</p>
          <ul>
            {about.awards.map((a) => (
              <li key={a.title}>
                <span>{a.title}</span>
                <span className="about__list-year">{a.year}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="about__list-block" data-reveal>
          <p className="eyebrow">Publications</p>
          <ul>
            {about.publications.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
        <div className="about__list-block" data-reveal>
          <p className="eyebrow">Selected Clients</p>
          <ul>
            {about.clients.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
