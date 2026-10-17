import { site } from "../../data/site";

export function Footer() {
  return (
    <footer>
      <p className="footer-text">
        © {site.copyrightYear} {site.name}. All rights reserved.
      </p>
    </footer>
  );
}
