import { Link } from "react-router-dom";
import Seo from "../components/Seo";

export default function NotFound() {
  return (
    <div className="container" style={{ padding: "clamp(8rem, 14vw, 12rem) 0", textAlign: "center" }}>
      <Seo title="Page Not Found — Amara Studio" description="This page could not be found." />
      <p className="eyebrow">404</p>
      <h1 style={{ fontSize: "var(--step-3)", margin: "0.75rem 0 1.5rem" }}>Page not found</h1>
      <Link to="/" className="btn">
        ← Back Home
      </Link>
    </div>
  );
}
