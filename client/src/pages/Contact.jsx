import photographer from "../data/photographer";
import ContactForm from "../components/ContactForm";
import Seo from "../components/Seo";
import useReveal from "../hooks/useReveal";
import "./Contact.css";

export default function Contact() {
  const { contact } = photographer;
  const revealRef = useReveal();

  return (
    <div ref={revealRef}>
      <Seo
        title="Contact — Amara Studio"
        description="Get in touch with Amara Studio to enquire about weddings, portraits, events and editorial photography."
      />
      <section className="container contact-page">
        <div className="contact-page__head" data-reveal>
          <p className="eyebrow">{contact.heading}</p>
          <h1 className="contact-page__title">{contact.statement}</h1>
          <div className="contact-page__details">
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>{contact.phone}</a>
            <a href={contact.instagram} target="_blank" rel="noreferrer">
              {contact.instagramHandle}
            </a>
            <span>{contact.location}</span>
          </div>
        </div>

        <div data-reveal>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
