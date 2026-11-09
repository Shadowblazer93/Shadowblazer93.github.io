import { site } from "../../data/site";
import { SectionHeading } from "../ui/SectionHeading";

export function ContactSection() {
  return (
    <section className="contact-section">
      <SectionHeading className="contact-heading">Contact Me</SectionHeading>

      <form
        className="contact-form"
        action="https://formspree.io/f/movwkqvq"
        method="POST"
        data-reveal
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
          <span>Send</span>
          <i className="fa fa-paper-plane contact-send-plane" aria-hidden="true" />
        </button>
      </form>

      <p className="contact-direct" data-reveal>
        Or email me directly at <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
    </section>
  );
}
