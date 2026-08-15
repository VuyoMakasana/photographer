import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import photographer from "../data/photographer";
import useLockBodyScroll from "../hooks/useLockBodyScroll";
import "./Header.css";

const NAV_LINKS = [
  { label: "Work", to: "/work" },
  { label: "About", to: "/about" },
  { label: "Journal", to: "/journal" },
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useLockBodyScroll(menuOpen);

  // Close mobile menu on route change via Escape or link click
  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="site-header__bar container">
        <Link to="/" className="site-header__brand" onClick={() => setMenuOpen(false)}>
          {photographer.name}
        </Link>

        <nav className="site-header__nav" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `site-header__link ${isActive ? "is-active" : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="site-header__toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="visually-hidden">{menuOpen ? "Close menu" : "Open menu"}</span>
          <span className={`site-header__burger ${menuOpen ? "is-open" : ""}`} aria-hidden="true">
            <span />
            <span />
          </span>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`mobile-nav ${menuOpen ? "is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile" className="mobile-nav__links">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.to}
              to={link.to}
              tabIndex={menuOpen ? 0 : -1}
              style={{ transitionDelay: `${i * 45}ms` }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mobile-nav__meta">
          <a href={`mailto:${photographer.contact.email}`} tabIndex={menuOpen ? 0 : -1}>
            {photographer.contact.email}
          </a>
          <a
            href={photographer.contact.instagram}
            tabIndex={menuOpen ? 0 : -1}
            target="_blank"
            rel="noreferrer"
          >
            {photographer.contact.instagramHandle}
          </a>
        </div>
      </div>
    </header>
  );
}
