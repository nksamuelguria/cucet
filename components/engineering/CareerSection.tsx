import Carousel from "./Carousel";
import ArrowIcon from "./shared/ArrowIcon";

type CareerCard = {
  itemClassName: string;
  heading: React.ReactNode;
  body: React.ReactNode;
  href: string;
  // Trailing space matches the original markup: the label and the arrow image
  // are separated by a single space inside the anchor.
  ctaLabel: string;
  bgSrc: string;
  bgAlt: string;
};

const CAREER_CARDS: CareerCard[] = [
  {
    itemClassName: "edge-item",
    heading: <>A Guide to<br /> Discover.<br /> Learn.<br /> Empower.</>,
    body: "Career Guide 2026",
    href: "/engineering/Career-Guide.pdf",
    ctaLabel: "View More ",
    bgSrc: "/engineering/imgs-new/crg-bg.webp",
    bgAlt: "Career Guide",
  },
  {
    itemClassName: "edge-item",
    heading: <>Predict<br /> Your Future Career</>,
    body: "Apply to view report",
    href: "https://cucet.cuchd.in/index.aspx?utm_source=Website&utm_medium=predict",
    ctaLabel: "Apply Now ",
    bgSrc: "/engineering/imgs-new/pyf-bg.webp",
    bgAlt: "Predict Your Future",
  },
  {
    itemClassName: "edge-item",
    heading: "Detailed Report on CU Placements",
    body: <>- Highest Package Offered<br /> - Students Placed<br /> - Packages above 1.7 CR</>,
    href: "placements/",
    ctaLabel: "View More ",
    bgSrc: "/engineering/imgs-new/det-place-bg.webp",
    bgAlt: "CU Placements",
  },
  {
    itemClassName: "edge-item cu-welcome",
    heading: "Students from more than 68 Countries",
    body: "With more than 150+ Bachelors, Masters, and Doctoral programs to choose from, CU is one of the highly preferred destinations for International Students.",
    href: "international/",
    ctaLabel: "Explore More ",
    bgSrc: "/engineering/imgs-new/cu-welcome-bg.webp",
    bgAlt: "International Students",
  },
  {
    itemClassName: "edge-item",
    heading: <>Joint Entrance<br /> Examination</>,
    body: "JEE is an Indian standardized computer-based test for admission to various technical undergraduate programs in engineering.",
    href: "/engineering/latest-assets/brochures/JEE-Brochure.pdf",
    ctaLabel: "View More ",
    bgSrc: "/engineering/imgs-new/jee-bg.webp",
    bgAlt: "Joint Entrance Examination",
  },
];

export default function CareerSection() {
  return (
    <section className="career-sec">
      <div className="container px-188 px-1399">
        <Carousel className="edge-slider">
          {CAREER_CARDS.map((card) => (
            <div className={card.itemClassName} key={card.bgSrc}>
              <h4>{card.heading}</h4>
              <p>{card.body}</p>
              <a href={card.href} target="_blank" className="btn btn-primary btn-hoverEffect hidden!">{card.ctaLabel}<ArrowIcon /></a>
              <img loading="lazy" decoding="async" className="box-bg" src={card.bgSrc} alt={card.bgAlt} />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
