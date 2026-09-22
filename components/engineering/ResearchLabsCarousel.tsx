"use client";

import Carousel from "./Carousel";

type ResearchLab = {
  src: string;
  alt: string;
  title: string;
  body: string;
};

const RESEARCH_LABS: ResearchLab[] = [
  {
    src: "/engineering/imgs-new/cuResearch-lab-kcc.webp",
    alt: "KCC Lab",
    title: "KCC Lab",
    // The trailing space matches the original markup.
    body: "The KCCRSST is giving satellite design training to students of 21 countries. The Space Centre can communicate with 28 countries that are part of Satellite Networked Open Ground Station (SatNOGS). ",
  },
  {
    src: "/engineering/imgs-new/research-lab-automobile.webp",
    alt: "Automobile Lab",
    title: "Eicher-CU Centre of Excellence",
    body: "The centre offers live workshops by industry experts, hands-on practice for students, and research on blended fuel efficiency, BS-VI commercial heavy diesel engines, and BS-VI engine emissions control techniques.",
  },
  {
    src: "/engineering/imgs-new/cuCenterOfExcellence-UltraTech.webp",
    alt: "Ultratech Lab",
    title: "CoE-Ultratech Lab",
    body: "The CoE aims to drive research and development, facilitate industry-academia collaboration, enhance skill development, and create pathways for student placements in the construction and materials sector.",
  },
  {
    src: "/engineering/imgs-new/cuResearch-lab-coforge.webp",
    alt: "Coforge Lab",
    title: "Coforge Lab",
    body: "Innovation center responsible for developing solutions for real-world problems at national and international levels, advancing autonomous vehicles, and conducting R&D on AI applications in healthcare.",
  },
  {
    src: "/engineering/imgs-new/cuElectrical-Engineering.webp",
    alt: "Electrical Engineering Lab",
    title: "Electrical Engineering Lab",
    body: "Equipped with advanced simulation tools and modern equipment, our Electrical Engineering Lab provides hands-on training in power systems, circuit design, control systems, and renewable energy applications. It bridges theoretical concepts with real-world applications, preparing students to innovate in the ever-evolving electrical and electronics industry.",
  },
  {
    src: "/engineering/imgs-new/cuMechanicalEngineering-Workshop.webp",
    alt: "Mechanical Engineering Workshop",
    title: "M.E. Workshop",
    body: "The Mechanical Engineering Workshop nurtures innovation through practical exposure to machining, fabrication, welding, and prototyping. Students gain first-hand experience in core mechanical processes, supported by state-of-the-art tools and machines, ensuring readiness for both industrial challenges and cutting-edge research.",
  },
];

export default function ResearchLabsCarousel() {
  return (
    <section className="research-sec position-relative pt-115 pb-0!">
      <div className="container">
        <div className="subHeading text-center">
          <h3>World-Class Research Infrastructure</h3>
        </div>
      </div>
      <div className="ps-188 position-relative">
        <Carousel className="researchLabs-slider mt-5" wrapAround>
          {RESEARCH_LABS.map((lab) => (
            <div className="researchLabs-item" key={lab.src}>
              <img src={lab.src} alt={lab.alt}
                className="w-full! h-full!" />
              <div className="box">
                <h3 className="title">{lab.title}</h3>
                <p>{lab.body}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
