// The arrow that trails every call-to-action button. Two colourways: the white
// arrow on red/dark buttons, and the red one on the white button in the mentor
// section. Attribute order matches the original markup so the rendered HTML is
// unchanged.
export default function ArrowIcon({ variant = "white" }: { variant?: "white" | "red" }) {
  const src =
    variant === "red"
      ? "/engineering/imgs-new/right-arrow-red.webp"
      : "/engineering/imgs-new/right-arrow-btn.webp";

  // The red arrow only appears in the mentor section, well below the fold;
  // the white one trails the hero CTA, so it stays eager. Marking it lazy also
  // stops React emitting a preload link for it during SSR.
  return (
    <img
      decoding="async"
      loading={variant === "red" ? "lazy" : undefined}
      src={src}
      alt="Button Arrow"
      width="22"
      className="ml-2!"
    />
  );
}
