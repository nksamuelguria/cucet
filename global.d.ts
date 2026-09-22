import "react";

// The original markup uses a bare <highlight> element, which the stylesheets
// target directly (`.faculty-sec highlight`, `.mentor-box highlight`).
// Swapping it for a span would drop that styling, so declare the element.
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      highlight: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}
