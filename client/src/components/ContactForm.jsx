import { useState } from "react";
import "./ContactForm.css";

const SHOOT_TYPES = ["Wedding", "Portrait", "Event", "Fashion", "Editorial", "Maternity / Couples", "Other"];

const INITIAL_STATE = {
  name: "",
  email: "",
  phone: "",
  shootType: SHOOT_TYPES[0],
  preferredDate: "",
  location: "",
  budget: "",
  message: "",
};

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.message.trim()) errors.message = "Tell us a little about what you're looking for.";
  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState(INITIAL_STATE);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setValues(INITIAL_STATE);
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="contact-form__success" role="status">
        <p className="eyebrow">Thank you</p>
        <p>Your enquiry has been sent. Expect a reply within two business days.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form__grid">
        <Field label="Name" name="name" value={values.name} onChange={handleChange} error={errors.name} required />
        <Field
          label="Email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
          required
        />
        <Field label="Phone" name="phone" type="tel" value={values.phone} onChange={handleChange} />
        <div className="contact-form__field">
          <label htmlFor="shootType">Type of shoot</label>
          <select id="shootType" name="shootType" value={values.shootType} onChange={handleChange}>
            {SHOOT_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <Field
          label="Preferred date"
          name="preferredDate"
          type="date"
          value={values.preferredDate}
          onChange={handleChange}
        />
        <Field label="Location" name="location" value={values.location} onChange={handleChange} />
        <Field label="Budget" name="budget" value={values.budget} onChange={handleChange} placeholder="e.g. R15,000–R25,000" />
      </div>

      <div className="contact-form__field contact-form__field--full">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <span id="message-error" className="contact-form__error">
            {errors.message}
          </span>
        )}
      </div>

      <button type="submit" className="btn-solid" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send Enquiry"}
      </button>

      {status === "error" && (
        <p className="contact-form__error" role="alert">
          Something went wrong sending your enquiry. Please try again, or email us directly.
        </p>
      )}
    </form>
  );
}

function Field({ label, name, type = "text", value, onChange, error, required, placeholder }) {
  return (
    <div className="contact-form__field">
      <label htmlFor={name}>
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
      />
      {error && (
        <span id={`${name}-error`} className="contact-form__error">
          {error}
        </span>
      )}
    </div>
  );
}
