"use client";

import Carousel from "./Carousel";

type Partner = {
  src: string;
  alt: string;
};

const PARTNERS: Partner[] = [
  { src: "/engineering/imgs-new/uojamestown.png", alt: "University of Jamestown" },
  { src: "/engineering/imgs-new/uonorthalabama.png", alt: "University of North Alabama" },
  { src: "/engineering/imgs-new/uoarkansas.png", alt: "Arkansas State University" },
  { src: "/engineering/imgs-new/uocbu.png", alt: "CBU" },
  { src: "/engineering/imgs-new/uowebster.png", alt: "Webster University" },
  { src: "/engineering/imgs-new/uolatrobe.png", alt: "La Trobe University" },
  { src: "/engineering/imgs-new/uowollongong.png", alt: "University of Wollongong Australia" },
  { src: "/engineering/imgs-new/uoaivancity.png", alt: "Aivancity" },
];

export default function PartnersCarousel() {
  return (
    <section className="int-sec" style={{ backgroundImage: "url('/engineering/imgs-new/world-map-bg.png')" }}>
      <div className="container">
        <div className="subHeading text-center">
          <h3><small>Our Prestigious International Partners</small></h3>
        </div>
        <Carousel className="partner-slider mt-5" prevNextButtons={false}>
          {PARTNERS.map((partner) => (
            <div className="ip-item" key={partner.src}>
              <img src={partner.src} alt={partner.alt} />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
