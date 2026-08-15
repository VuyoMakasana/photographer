import { useEffect, useRef } from "react";
import useLockBodyScroll from "../hooks/useLockBodyScroll";
import "./Lightbox.css";

/**
 * Full-screen image viewer.
 * images: array of { src, alt, caption?, meta? }
 * index: currently open index (number) or null when closed
 */
export default function Lightbox({ images, index, onClose, onNavigate }) {
  const isOpen = index !== null && index !== undefined;
  useLockBodyScroll(isOpen);
  const touchStartX = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (isOpen && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate(1);
      if (e.key === "ArrowLeft") onNavigate(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose, onNavigate]);

  if (!isOpen) return null;

  const current = images[index];

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 48) onNavigate(delta > 0 ? -1 : 1);
    touchStartX.current = null;
  };

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={current.caption || current.alt}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <button
        ref={closeButtonRef}
        type="button"
        className="lightbox__close"
        onClick={onClose}
      >
        <span aria-hidden="true">✕</span>
        <span className="visually-hidden">Close image viewer</span>
      </button>

      <button
        type="button"
        className="lightbox__nav lightbox__nav--prev"
        onClick={() => onNavigate(-1)}
        aria-label="Previous image"
      >
        ‹
      </button>

      <figure className="lightbox__figure">
        <img src={current.src} alt={current.alt} />
        {(current.caption || current.meta) && (
          <figcaption>
            {current.caption && <span className="lightbox__caption">{current.caption}</span>}
            {current.meta && <span className="lightbox__meta">{current.meta}</span>}
          </figcaption>
        )}
      </figure>

      <button
        type="button"
        className="lightbox__nav lightbox__nav--next"
        onClick={() => onNavigate(1)}
        aria-label="Next image"
      >
        ›
      </button>

      <p className="lightbox__counter">
        {index + 1} / {images.length}
      </p>
    </div>
  );
}
