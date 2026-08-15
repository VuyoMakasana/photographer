import { Link } from "react-router-dom";
import photographer from "../data/photographer";
import "./Footer.css";

export default function Footer() {
  const { contact, name, footer } = photographer;
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__top">
        <div className="site-footer__brand">
          <p className="site-footer__name">{name}</p>
          <p className="site-footer__tagline">{contact.location}</p>
        </div>

        <nav className="site-footer__nav" aria-label="Footer">
          <Link to="/work">Work</Link>
          <Link to="/about">About</Link>
          <Link to="/journal">Journal</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="site-footer__contact">
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>{contact.phone}</a>
          <a href={contact.instagram} target="_blank" rel="noreferrer">
            {contact.instagramHandle}
          </a>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <p>© {year} {name}. All rights reserved.</p>
        <p>{footer.note}</p>
      </div>
    </footer>
  );
}
