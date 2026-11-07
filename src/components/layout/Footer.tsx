import { site } from "../../data/site";
import { FleurDeLis } from "../ui/Doodles";

export function Footer() {
  return (
    <footer>
      <p className="footer-text">
        <FleurDeLis className="footer-fleur" tone="yellow" />©{" "}
        {site.copyrightYear} {site.name}. All rights reserved.
      </p>
    </footer>
  );
}
