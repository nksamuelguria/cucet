// Partner logo shown inline inside a course name, e.g. "... (In association
// with <IBM>)". Attribute order matches the original markup so the rendered
// HTML is unchanged.
export type Collaborator = "ibm" | "microsoft" | "tcs";

const LOGOS: Record<Collaborator, { src: string; alt: string; width: string }> = {
  ibm: {
    src: "/engineering/imgs-new/ibm-logo.webp",
    alt: "IBM Collaborated Engineering Programs",
    width: "30",
  },
  microsoft: {
    src: "/engineering/images/microsoft_logo.svg",
    alt: "microsoft",
    width: "70",
  },
  tcs: {
    src: "/engineering/imgs-new/tcs-logo.webp",
    alt: "TCS",
    width: "45",
  },
};

export default function CollabLogo({ name }: { name: Collaborator }) {
  const { src, alt, width } = LOGOS[name];
  return <img loading="lazy" decoding="async" src={src} alt={alt} width={width} className="collab-logo" />;
}
