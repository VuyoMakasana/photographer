import { Link, useParams, Navigate } from "react-router-dom";
import projects from "../data/projects";
import Lightbox from "../components/Lightbox";
import Seo from "../components/Seo";
import useReveal from "../hooks/useReveal";
import { useState } from "react";
import "./ProjectDetail.css";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const [openIndex, setOpenIndex] = useState(null);
  const revealRef = useReveal();

  if (!project) return <Navigate to="/work" replace />;

  const lightboxImages = project.gallery.map((src) => ({ src, alt: project.title }));
  const handleNavigate = (delta) => {
    setOpenIndex((prev) =>
      prev === null ? prev : (prev + delta + lightboxImages.length) % lightboxImages.length
    );
  };

  const otherProjects = projects.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div ref={revealRef}>
      <Seo
        title={`${project.title} — Amara Studio`}
        description={project.description}
        image={project.cover}
      />

      <header className="project-detail__hero">
        <img src={project.cover} alt={project.title} />
        <div className="project-detail__hero-scrim" aria-hidden="true" />
        <div className="container project-detail__hero-content">
          <p className="eyebrow" style={{ color: "var(--color-paper)" }}>
            {project.category} · {project.year}
          </p>
          <h1 className="project-detail__title">{project.title}</h1>
          <p className="project-detail__location">{project.location}</p>
        </div>
      </header>

      <section className="container project-detail__body" data-reveal>
        <p className="project-detail__description">{project.description}</p>
        {project.notes && (
          <p className="project-detail__notes">
            <span className="eyebrow">Notes</span>
            <br />
            {project.notes}
          </p>
        )}
      </section>

      <section className="container project-detail__gallery" data-reveal>
        <div className="project-detail__grid">
          {project.gallery.map((src, i) => (
            <button
              type="button"
              key={src + i}
              className={`project-detail__cell ${i === 0 ? "project-detail__cell--wide" : ""}`}
              onClick={() => setOpenIndex(i)}
              aria-label={`Open image ${i + 1} of ${project.title} in full screen`}
            >
              <img src={src} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      </section>

      <Lightbox
        images={lightboxImages}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onNavigate={handleNavigate}
      />

      <section className="container project-detail__more" data-reveal>
        <p className="eyebrow" style={{ marginBottom: "1.5rem" }}>
          More Work
        </p>
        <div className="project-detail__more-grid">
          {otherProjects.map((p) => (
            <Link to={`/work/${p.slug}`} key={p.slug} className="project-detail__more-item">
              <img src={p.cover} alt={p.title} loading="lazy" />
              <span>
                {p.title} <span className="project-detail__more-year">— {p.year}</span>
              </span>
            </Link>
          ))}
        </div>
        <Link to="/work" className="btn" style={{ marginTop: "2rem", display: "inline-block" }}>
          ← Back to Archive
        </Link>
      </section>
    </div>
  );
}
