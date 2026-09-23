// The arrow that trails every call-to-action button. Two colourways: the white
// arrow on red/dark buttons, and the red one on the white button in the mentor
// section. Attribute order matches the original markup so the rendered HTML is
// unchanged.
export default function ArrowIcon({ variant = "white" }: { variant?: "white" | "red" }) {
  const src =
    variant === "red"
      ? "/engineering/imgs-new/right-arrow-red.webp"
      : "/engineering/imgs-new/right-arrow-btn.webp";

  return <img decoding="async" src={src} alt="Button Arrow" width="22" className="ml-2!" />;
}
