import { Link, useParams, Navigate } from "react-router-dom";
import journal from "../data/journal";
import Seo from "../components/Seo";
import useReveal from "../hooks/useReveal";
import "./JournalDetail.css";

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-ZA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function JournalDetail() {
  const { slug } = useParams();
  const post = journal.find((p) => p.slug === slug);
  const revealRef = useReveal();

  if (!post) return <Navigate to="/journal" replace />;

  return (
    <article ref={revealRef} className="journal-detail">
      <Seo title={`${post.title} — Amara Studio Journal`} description={post.excerpt} image={post.cover} />

      <div className="container journal-detail__head" data-reveal>
        <Link to="/journal" className="btn" style={{ marginBottom: "2rem", display: "inline-block" }}>
          ← Journal
        </Link>
        <p className="eyebrow">
          {post.category} · {formatDate(post.date)}
        </p>
        <h1 className="journal-detail__title">{post.title}</h1>
      </div>

      <div className="journal-detail__cover">
        <img src={post.cover} alt="" />
      </div>

      <div className="container journal-detail__body" data-reveal>
        {post.body.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </article>
  );
}
