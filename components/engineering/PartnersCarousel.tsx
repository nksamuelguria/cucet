import Carousel from "./Carousel";

type Partner = {
  src: string;
  alt: string;
};

const PARTNERS: Partner[] = [
  { src: "/engineering/imgs-new/uojamestown.webp", alt: "University of Jamestown" },
  { src: "/engineering/imgs-new/uonorthalabama.webp", alt: "University of North Alabama" },
  { src: "/engineering/imgs-new/uoarkansas.webp", alt: "Arkansas State University" },
  { src: "/engineering/imgs-new/uocbu.webp", alt: "CBU" },
  { src: "/engineering/imgs-new/uowebster.webp", alt: "Webster University" },
  { src: "/engineering/imgs-new/uolatrobe.webp", alt: "La Trobe University" },
  { src: "/engineering/imgs-new/uowollongong.webp", alt: "University of Wollongong Australia" },
  { src: "/engineering/imgs-new/uoaivancity.webp", alt: "Aivancity" },
];

export default function PartnersCarousel() {
  return (
    <section className="int-sec">
      <img
        className="int-bg"
        src="/engineering/imgs-new/world-map-bg.webp"
        srcSet="/engineering/imgs-new/world-map-bg-800.webp 800w, /engineering/imgs-new/world-map-bg.webp 1356w"
        sizes="100vw"
        alt=""
        loading="lazy"
        decoding="async"
      />
      <div className="container">
        <div className="subHeading text-center">
          <h3><small>Our Prestigious International Partners</small></h3>
        </div>
        <Carousel className="partner-slider mt-5" prevNextButtons={false}>
          {PARTNERS.map((partner) => (
            <div className="ip-item" key={partner.src}>
              <img loading="lazy" decoding="async" src={partner.src} alt={partner.alt} />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
