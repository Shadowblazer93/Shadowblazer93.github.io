import { Fragment, type ReactNode } from "react";

/**
 * Renders items separated by a literal space.
 *
 * HTML collapses the newlines between inline elements into a single space, but
 * JSX strips that whitespace. This restores the spacing for inline elements
 * that sit side by side (nav links, header links, project links, ...).
 */
export function InlineList({ items }: { items: ReactNode[] }) {
  return (
    <>
      {items.map((item, index) => (
        <Fragment key={index}>
          {index > 0 ? " " : null}
          {item}
        </Fragment>
      ))}
    </>
  );
}
