import { site } from "../../data/site";

export function ContactSection() {
  return (
    <section className="contact-section">
      <h2 className="section-title--center contact-heading">Contact Me</h2>

      <form
        className="contact-form"
        action="https://formspree.io/f/movwkqvq"
        method="POST"
      >
        <input
          className="contact-input"
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />
        <input
          className="contact-input"
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />
        <textarea
          className="contact-input"
          name="message"
          placeholder="Your Message"
          rows={5}
          required
        />
        <button type="submit" className="contact-send">
          Send
        </button>
      </form>

      <p className="contact-direct">
        Or email me directly at <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
    </section>
  );
}
