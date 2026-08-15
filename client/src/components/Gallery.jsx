import { useMemo, useState } from "react";
import Lightbox from "./Lightbox";
import "./Gallery.css";

/**
 * items: array from data/gallery.js
 * showFilters: whether to render the category filter row
 */
export default function Gallery({ items, showFilters = true }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openIndex, setOpenIndex] = useState(null);

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(items.map((i) => i.category)))],
    [items]
  );

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? items
        : items.filter((i) => i.category === activeCategory),
    [items, activeCategory]
  );

  const lightboxImages = filtered.map((i) => ({
    src: i.src,
    alt: i.alt,
    caption: i.caption,
    meta: i.meta,
  }));

  const handleNavigate = (delta) => {
    setOpenIndex((prev) => {
      if (prev === null) return prev;
      const next = (prev + delta + filtered.length) % filtered.length;
      return next;
    });
  };

  return (
    <div className="gallery">
      {showFilters && (
        <div className="gallery__filters" role="tablist" aria-label="Filter gallery by category">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat}
              className={`gallery__filter ${activeCategory === cat ? "is-active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      <div className="gallery__grid">
        {filtered.map((item, i) => (
          <button
            type="button"
            key={item.id}
            className={`gallery__cell gallery__cell--${item.orientation}`}
            onClick={() => setOpenIndex(i)}
            aria-label={`Open ${item.caption || item.alt} in full screen`}
          >
            <img src={item.src} alt={item.alt} loading="lazy" />
            <span className="gallery__cell-meta">
              <span>{item.caption}</span>
              <span className="gallery__cell-tag">{item.category}</span>
            </span>
          </button>
        ))}
      </div>

      <Lightbox
        images={lightboxImages}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
