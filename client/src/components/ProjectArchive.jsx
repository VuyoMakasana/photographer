import { Link } from "react-router-dom";
import projects from "../data/projects";
import "./ProjectArchive.css";

export default function ProjectArchive() {
  const sorted = [...projects].sort((a, b) => Number(b.year) - Number(a.year));

  return (
    <ul className="archive" data-reveal>
      {sorted.map((project) => (
        <li key={project.slug} className="archive__row">
          <Link to={`/work/${project.slug}`} className="archive__link">
            <span className="archive__year">{project.year}</span>
            <span className="archive__thumb">
              <img src={project.cover} alt="" loading="lazy" />
            </span>
            <span className="archive__title-wrap">
              <span className="archive__title">{project.title}</span>
              <span className="archive__meta">
                {project.category} — {project.location}
              </span>
            </span>
            <span className="archive__arrow" aria-hidden="true">→</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
