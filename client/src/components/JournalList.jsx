import { Link } from "react-router-dom";
import journal from "../data/journal";
import "./JournalList.css";

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-ZA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function JournalList() {
  const sorted = [...journal].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="journal-list">
      {sorted.map((post) => (
        <Link to={`/journal/${post.slug}`} key={post.slug} className="journal-card" data-reveal>
          <div className="journal-card__media">
            <img src={post.cover} alt="" loading="lazy" />
          </div>
          <div className="journal-card__copy">
            <p className="eyebrow">
              {post.category} · {formatDate(post.date)}
            </p>
            <h3 className="journal-card__title">{post.title}</h3>
            <p className="journal-card__excerpt">{post.excerpt}</p>
            <span className="btn">Read →</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
