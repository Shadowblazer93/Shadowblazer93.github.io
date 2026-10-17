/**
 * Invisible scroll target for the header shortcuts. Renders the element the
 * `#id` links resolve to, so smooth scrolling has something to aim at.
 */
export function Anchor({ id }: { id: string }) {
  return <span id={id} className="anchor" aria-hidden="true" />;
}
