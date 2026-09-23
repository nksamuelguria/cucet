import Carousel from "./Carousel";

type CompanyLogo = {
  src: string;
  alt: string;
  className?: string;
};

// Six logos, deliberately listed twice in a row so the marquee reads as a
// continuous loop. Keyed by position because the duplicates are intentional.
const COMPANY_LOGOS: CompanyLogo[] = [
  {
    src: "/engineering/images/logo500-1.webp",
    alt: "Chandigarh University Engineering Placements at Amazon",
  },
  {
    src: "/engineering/images/logo500-2.webp",
    alt: "Chandigarh University Engineering Placements at American Express",
  },
  {
    src: "/engineering/images/logo500-6.webp",
    alt: "Chandigarh University Google Engineering Placements",
  },
  {
    src: "/engineering/images/logo500-4.webp",
    alt: "Chandigarh University Microsoft Engineering Placements",
  },
  {
    src: "/engineering/images/logo500-3.webp",
    alt: "Chandigarh University IBM Engineering Placements",
  },
  {
    className: "max-w-full h-auto ptrans",
    src: "/engineering/images/logo500-5.webp",
    alt: "Chandigarh University Dell Engineering Placements",
  },
];

export default function CompanyCarousel() {
  return (
    <section className="partner-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="fortune-title text-center">
              <h6>Fortune Global 500 Companies in Recruiters List</h6>
            </div>
          </div>
          <div className="col-md-12">
            <Carousel className="partner-slider mt-6!" prevNextButtons={false}>
              {[...COMPANY_LOGOS, ...COMPANY_LOGOS].map((logo, index) => (
                <div className="fg-item" key={index}>
                  <img loading="lazy" decoding="async" className={logo.className} src={logo.src} alt={logo.alt} />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
