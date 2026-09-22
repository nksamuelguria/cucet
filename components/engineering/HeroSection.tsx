"use client";

import ArrowIcon from "./shared/ArrowIcon";

import { useState } from "react";
import Carousel from "./Carousel";

type HeroSlide = {
  className: string;
  image: string;
};

const HERO_SLIDES: HeroSlide[] = [
  {
    className: "heroSlider__item",
    image: "/engineering/imgs-new/banner-2025-4.webp",
  },
  {
    className: "heroSlider__item hidden! md:block!",
    image: "/engineering/imgs-new/banner-2025-6.jpg",
  },
  {
    className: "heroSlider__item hidden! md:block!",
    image: "/engineering/imgs-new/bnr-1.jpg",
  },
  {
    className: "heroSlider__item hidden! md:block!",
    image: "/engineering/imgs-new/banner-2025-5.jpg",
  },
  {
    className: "heroSlider__item hidden! md:block!",
    image: "/engineering/imgs-new/banner-2025-3.jpg",
  },
  {
    className: "heroSlider__item hidden! md:block!",
    image: "/engineering/imgs-new/banner-2025-2.jpg",
  },
];

type Placement = {
  photo: string;
  photoAlt: string;
  txtClassName: string;
  firstName: string;
  lastName: React.ReactNode;
  course: string;
  packageLabel: React.ReactNode;
  amount: string;
  unit: string;
  logo: string;
  logoAlt: string;
  logoWidth: string;
};

const PLACEMENTS: Placement[] = [
  {
    photo: "/engineering/imgs-new/sid-inset-bg.png",
    photoAlt: "Siddharth Photo",
    txtClassName: "hp-txt",
    firstName: "Siddhant",
    lastName: <> Bhardwaj</>,
    course: "CSE-IBM Information Security",
    packageLabel: (
      <>
        International
        <br /> Highest Package
      </>
    ),
    amount: "1.7",
    unit: "CRORE",
    logo: "/engineering/imgs-new/dame-munni-cap.png",
    logoAlt: "Dame Irone logo",
    logoWidth: "155",
  },
  {
    photo: "/engineering/imgs-new/jaspreet-inset-bg.png",
    photoAlt: "Jaspreet Singh Photo",
    txtClassName: "hp-txt aat",
    firstName: "Jaspreet",
    lastName: <> Singh</>,
    course: "Computer Science Engineering",
    packageLabel: (
      <>
        National
        <br /> Highest Package
      </>
    ),
    amount: "59.9",
    unit: "LPA",
    logo: "/engineering/imgs-new/atlassian-logo.png",
    logoAlt: "Atlassian Logo",
    logoWidth: "90",
  },
  {
    photo: "/engineering/imgs-new/vc-inset-bg.png",
    photoAlt: "Vandana Photo",
    txtClassName: "hp-txt",
    firstName: "Vandana",
    lastName: <> Chauhan</>,
    course: "Computer Science Engineering",
    packageLabel: <>National{" "} Package</>,
    amount: "54.75",
    unit: "LPA",
    logo: "/engineering/imgs-new/pan-logo-light.png",
    logoAlt: "Paloalto Logo",
    logoWidth: "183",
  },
  {
    photo: "/engineering/imgs-new/kc-inset-bg.png",
    photoAlt: "Kunal Photo",
    txtClassName: "hp-txt",
    firstName: "Kunal",
    lastName: <> Chawla</>,
    course: "AIT-CSE (B.E. CSE with AIML)",
    packageLabel: (
      <>
        International{" "} Package
      </>
    ),
    amount: "54.00",
    unit: "LPA",
    logo: "/engineering/imgs-new/volvo-logo.png",
    logoAlt: "Volvo Logo",
    logoWidth: "179",
  },
  {
    photo: "/engineering/imgs-new/shanya-inset-bg.png",
    photoAlt: "Shanya Photo",
    txtClassName: "hp-txt",
    firstName: "Shanya",
    lastName: <> Trehan</>,
    course: "Computer Science Engineering",
    packageLabel: <>National{" "} Package</>,
    amount: "51.00",
    unit: "LPA",
    logo: "/engineering/imgs-new/microsoft-logo.png",
    logoAlt: "Microsoft Logo",
    logoWidth: "108",
  },
  {
    photo: "/engineering/imgs-new/harsh-inset-bg.png",
    photoAlt: "Harsh Photo",
    txtClassName: "hp-txt",
    firstName: "Harsh",
    lastName: <> Vardhan</>,
    course: "Computer Science Engineering",
    packageLabel: <>National{" "} Package</>,
    amount: "44.00",
    unit: "LPA",
    logo: "/engineering/imgs-new/amazon-logo.png",
    logoAlt: "Amazon Logo",
    logoWidth: "109",
  },
];

export default function HeroSection() {
  // Original: $('.heroSlider').flickity({ asNavFor: '.hero-place-slider' })
  const [placeIndex, setPlaceIndex] = useState(0);

  return (
    <section id="home" className="heroContainer position-relative">
      <Carousel
        className="heroSlider h-full!"
        selectedIndex={placeIndex}
        autoPlay={false}
        prevNextButtons={false}
      >
        {HERO_SLIDES.map((slide) => (
          <div
            key={slide.image}
            className={slide.className}
            style={{
              backgroundImage: `url('${slide.image}')`,
            }}
          ></div>
        ))}
      </Carousel>
      <div className="heroBannerForm">
        <div className="container">
          <div className="row align-items-center lg-align-start">
            <div className="col-md-6 col-lg-7 order-last order-sm-first">
              <div className="heroSlider__content">
                <Carousel
                  className="title-slider"
                  wrapAround
                  prevNextButtons={false}
                >
                  <div className="w-full!">
                    <h1 className="position-relative">
                      <span>Best</span> Engineering College in <br />
                      Punjab, India
                    </h1>
                  </div>
                  <div className="w-full!">
                    <h2 className="position-relative">
                      <span>High-Paying</span> Placements with the World's
                      Leading Companies
                    </h2>
                  </div>
                </Carousel>
                <div className="ps-67">
                  <p>
                    Chandigarh University is renowned for providing students
                    rewarding placement opportunities with global tech giants.
                  </p>
                  <div className="btn-grp">
                    <a
                      href="#programs"
                      className="btn btn-primary btn-hoverEffect page-scroll"
                    >
                      Explore Programs{" "}
                      <ArrowIcon />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-5 order-first order-sm-last">
              <div className="heroBannerForm__form ml-auto!">
                <div className="heroBannerForm-header">
                  <h3 className="mb-0!">
                    Apply Today for{" "}
                    <span>
                      Chandigarh University
                      <br /> Engineering Program
                    </span>
                  </h3>
                  <h6 className="end_date">
                    Registration End Date (Phase-II): 30<sup>th</sup> September
                    2026
                  </h6>

                  <style
                    dangerouslySetInnerHTML={{
                      __html: `
    h6.end_date {
        background: #e4363d;
        padding: 6px 8px;
        display: inline-block;
        font-size: 12px;
        line-height: 14px;
        border-radius: 6px;
        color: #fff;
        text-transform: capitalize;
        margin: 0!important;
    }
`,
                    }}
                  />
                </div>

                
              </div>
            </div>
          </div>
        </div>
        <div className="slider-trans">
          <Carousel
            className="hero-place-slider"
            selectedIndex={placeIndex}
            onSelect={setPlaceIndex}
          >
            {PLACEMENTS.map((p) => (
              <div className="item" key={p.photo}>
                <div className="almni-photo">
                  <img
                    src={p.photo}
                    alt={p.photoAlt}
                  />
                </div>
                <div className={p.txtClassName}>
                  <div className="hp-info text-white">
                    <div className="hpName">
                      {p.firstName}<span>{p.lastName}</span>
                    </div>
                    <div className="hpText">{p.course}</div>
                  </div>
                  <div className="hp-package text-white">
                    <div className="hpTextbig">{p.packageLabel}</div>
                    <div className="hpAmount">
                      <sup>₹</sup>{p.amount} <span>{p.unit}</span>
                    </div>
                  </div>
                  <div className="hpCompany">
                    <img
                      src={p.logo}
                      alt={p.logoAlt}
                      width={p.logoWidth}
                    />
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
