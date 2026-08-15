import { Link } from "react-router-dom";
import projects from "../data/projects";
import "./FeaturedWork.css";

// Pull a curated subset for the homepage — first four projects, in an
// intentional large/small/large/text/large rhythm rather than a grid.
export default function FeaturedWork() {
  const featured = projects.slice(0, 4);

  return (
    <section className="featured section section-alt" data-reveal>
      <div className="container featured__head">
        <p className="eyebrow">Selected Work</p>
        <h2 className="featured__title">Recent series</h2>
      </div>

      <div className="featured__list">
        {featured.map((project, i) => (
          <article
            key={project.slug}
            className={`featured__item featured__item--${i % 2 === 0 ? "a" : "b"}`}
            data-reveal
          >
            <Link to={`/work/${project.slug}`} className="featured__media">
              <img src={project.cover} alt={project.title} loading="lazy" />
            </Link>
            <div className="featured__copy">
              <p className="eyebrow">
                {project.category} · {project.year}
              </p>
              <h3 className="featured__item-title">{project.title}</h3>
              <p className="featured__desc">{project.description}</p>
              <Link to={`/work/${project.slug}`} className="btn">
                View Project →
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="container featured__foot">
        <Link to="/work" className="btn">
          View All Work →
        </Link>
      </div>
    </section>
  );
}
