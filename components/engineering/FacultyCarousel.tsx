"use client";

import Carousel from "./Carousel";

type Faculty = {
  name: string;
  designation: string;
  points: string[];
  img: string;
  alt: string;
};

const FACULTY: Faculty[] = [
  {
    name: "Dr. Jashanpreet Singh",
    designation: "Assistant Professor",
    points: [
      "90+ Research Publications",
      "Key contributions in thermal spray coatings, and tribology",
    ],
    img: "/engineering/imgs-new/fc-jashan.jpg",
    alt: "Jashanpreet Portrait",
  },
  {
    name: "Dr. Meet Kumari",
    designation: "Assistant Professor",
    points: [
      "120+ Research Articles",
      "Key contributions in Photonics, Optical Communication Networks",
    ],
    img: "/engineering/imgs-new/fc-meet.jpg",
    alt: "Meet Portrait",
  },
  {
    name: "Dr. Mohammad Ashfaq",
    designation: "Assistant Professor",
    points: [
      "91+ Research Articles",
      "Key contributions in Nanotechnology & Biomedical Applications",
    ],
    img: "/engineering/imgs-new/fc-ashfaq.jpg",
    alt: "Ashfaq Portrait",
  },
  {
    name: "Dr. Mehtab Singh",
    designation: "Assistant Professor",
    points: [
      "150+ Research Papers",
      "Key contributions in optical communication systems & photonic radars",
    ],
    img: "/engineering/imgs-new/fc-mehtab.jpg",
    alt: "Mehtab Portrait",
  },
  {
    name: "Dr. Deepak Kukkar",
    designation: "Professor",
    points: [
      "75 Research Articles",
      "Key contributions in Biosensing of CKD Biomarkers & Environmental Pollutants",
    ],
    img: "/engineering/imgs-new/fc-deepak.jpg",
    alt: "Deepak Portrait",
  },
  {
    name: "Dr. Kaushik",
    designation: "Professor",
    points: [
      "240+ Research Articles",
      "Key contributions in Nanofabrication, Bio-inspired Materials, Green Nanotechnology",
    ],
    img: "/engineering/imgs-new/fc-kaushik.jpg",
    alt: "Kaushik Portrait",
  },
  {
    name: "Dr. Atul Kabra",
    designation: "Associate Professor",
    points: [
      "90+ Research Publications",
      "Key contributions on pharmacology, focusing on neurodegenerative diseases & herbal drug development",
    ],
    img: "/engineering/imgs-new/fc-atul.jpg",
    alt: "Atul Portrait",
  },
  {
    name: "Dr. Hitesh K. Dewangan",
    designation: "Associate Professor",
    points: [
      "75+ Research Publications",
      "Key contributions in pharmaceutics focusing Nanovaccine & Formulation development",
    ],
    img: "/engineering/imgs-new/fc-hitesh.jpg",
    alt: "Hitesh Portrait",
  },
];

export default function FacultyCarousel() {
  return (
    <section className="faculty-sec">
      <div className="container">
        <div className="subHeading text-center position-relative">
          <h3>
            Proud Hub of Researchers<br /> Ranked Among{" "}
            <highlight>The World’s Top 2% Scientists</highlight>
            <small>(Stanford Global List 2024)</small>
          </h3>
        </div>
      </div>
      <div className="ps-188 position-relative">
        <Carousel className="edge-slider">
          {FACULTY.map((f) => (
            <div className="fac-item" key={f.name}>
              <div className="fac-upper">
                <div className="fac-content">
                  <h5>{f.name}</h5>
                  <span>{f.designation}<br />Chandigarh University</span>
                </div>
              </div>
              <div className="fac-lower">
                <ul>
                  {f.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
              <div className="fac-pic">
                <img src={f.img} alt={f.alt} />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
