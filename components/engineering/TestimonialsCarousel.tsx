"use client";

import Carousel from "./Carousel";

type Testimonial = {
  photo: string;
  logo: string;
  logoAlt: string;
  logoWidth: string;
  quote: string;
  name: string;
  role: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    photo: "/engineering/imgs-new/ira-gupta.jpg",
    logo: "/engineering/imgs-new/microsoft-logo-dark.png",
    logoAlt: "Microsoft",
    logoWidth: "108",
    quote:
      "I'm very impressed with Chandigarh University and it’s positive intent to do what’s best for students and implement it on a national scale is noteworthy.",
    name: "Ms. Ira Gupta",
    role: "Chief Human Resources Officer, Microsoft",
  },
  {
    photo: "/engineering/imgs-new/kurian.jpg",
    logo: "/engineering/imgs-new/adani-logo.png",
    logoAlt: "Chandigarh University Engineering",
    logoWidth: "70",
    quote:
      "Chandigarh University has a pioneering way of bringing academia, corporates, industry, and CEOs together and hear their views.",
    name: "Mr. Kurian Chandapillai",
    role: "Chief Sales Officer, Adani Cements Adani",
  },
  {
    photo: "/engineering/imgs-new/aparna-dhingra.jpg",
    logo: "/engineering/imgs-new/bmw-logo.png",
    logoAlt: "Chandigarh University Engineering",
    logoWidth: "43",
    quote:
      "I am impressed with the University, what I really like is that CU is including industry on every level and is aligning itself to our expectations.",
    name: "Ms. Aparna Dhingra",
    role: "Head of Region (HR)- Asia Pacific, Africa, Middle East, BMW Ind",
  },
  {
    photo: "/engineering/imgs-new/thirukumaran.jpg",
    logo: "/engineering/imgs-new/ibm-logo.png",
    logoAlt: "Chandigarh University Engineering College",
    logoWidth: "64",
    quote:
      "There are constraints in implementing things that come out of a discussion, but Chandigarh University is very serious about the implementation of inputs coming from industry.",
    name: "Mr. Thirukkumaran Nagarajan",
    role: "Vice President & HR Head, IBM",
  },
  {
    photo: "/engineering/imgs-new/harpreet-kaur.jpg",
    logo: "/engineering/imgs-new/adobe-logo.png",
    logoAlt: "Chandigarh University Engineering",
    logoWidth: "108",
    quote:
      "CU’s initiative for involving industry to craft its curriculum will definitely keep it ahead of others.",
    name: "Ms. Harpreet Kaur",
    role: "Director, Talent Acquisition, Adobe",
  },
];

type PartnerLogo = {
  src: string;
  alt: string;
  className?: string;
};

const PARTNER_LOGOS: PartnerLogo[] = [
  {
    src: "/engineering/images/logo500-6.webp",
    alt: "Chandigarh University Google Engineering Placements",
  },
  {
    src: "/engineering/imgs-new/microsoft-logo-est.png",
    alt: "Chandigarh University Microsoft Engineering Placements",
  },
  {
    src: "/engineering/imgs-new/intel-logo.png",
    alt: "Chandigarh University Intel Engineering Placements",
  },
  {
    src: "/engineering/images/logo500-3.webp",
    alt: "Chandigarh University IBM Engineering Placements",
  },
  {
    className: "max-w-full h-auto ptrans",
    src: "/engineering/imgs-new/tcs-logo.png",
    alt: "Chandigarh University TCS Engineering Placements",
  },
  {
    className: "max-w-full h-auto ptrans",
    src: "/engineering/imgs-new/virtusa-logo.png",
    alt: "Chandigarh University Virtusa Engineering Placements",
  },
  {
    src: "/engineering/images/logo500-1.webp",
    alt: "Chandigarh University Engineering Placements at Amazon",
  },
  {
    src: "/engineering/images/logo500-2.webp",
    alt: "Chandigarh University Engineering Placements at American Express",
  },
];

export default function TestimonialsCarousel() {
  return (
    <section className="mind-sec">
      <div className="container">
        <div className="subHeading text-center">
          <h3>Voices from Industry Partners </h3>
        </div>
      </div>
      <Carousel className="mind-slider" wrapAround>
        {TESTIMONIALS.map((t) => (
          <div className="mind-item" key={t.name}>
            <div className="mimg">
              <div className="person-pic">
                <img src={t.photo} alt="Engineering Mind Alumni" className="w-full!" />
              </div>
              <div className="comp-logo">
                <img src={t.logo} alt={t.logoAlt} width={t.logoWidth} />
              </div>
            </div>
            <div className="para">
              <p>{t.quote}</p>
            </div>
            <div className="person-info">
              <h6>{t.name}</h6>
              <span>{t.role}</span>
            </div>
          </div>
        ))}
      </Carousel>
      <div className="container">
        <div className="estd-box">
          <div className="row g-0">
            <div className="col-md-3 position-relative">
              <div className="subHeading text-center">
                <h3 className="mb-0!"><small>Esteemed<br /> Industry Partners</small></h3>
              </div>
            </div>
            <div className="col-md-9">
              <Carousel className="partner-slider" prevNextButtons={false}>
                {PARTNER_LOGOS.map((l) => (
                  <div className="fg-item" key={l.src}>
                    <img className={l.className} src={l.src} alt={l.alt} />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
