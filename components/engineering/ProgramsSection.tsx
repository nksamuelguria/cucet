import type { ReactNode } from "react";

import Carousel from "./Carousel";
import CollabLogo from "./shared/CollabLogo";

const DEPARTMENTS: { icon: string; name: ReactNode }[] = [
  { icon: "apex-icon", name: <>Apex<br /> Programs</> },
  { icon: "cse-icon", name: <>Computer Science &amp;<br /> Engineering</> },
  { icon: "bs-icon", name: <>Biotechnology<br /> Engineering</> },
  { icon: "aero-icon", name: <>Aerospace<br /> Engineering</> },
  { icon: "auto-icon", name: <>Automobile<br /> Engineering</> },
  { icon: "chem-icon", name: <>Chemical<br /> Engineering</> },
  { icon: "civil-icon", name: <>Civil<br /> Engineering</> },
  { icon: "it-icon", name: <>Information Technology<br /> Engineering</> },
  { icon: "elec-icon", name: <>Electrical<br /> Engineering</> },
  { icon: "elcom-icon", name: <>Electronics &amp; Comm.<br /> Engineering</> },
  { icon: "mecha-icon", name: <>Mechatronics<br /> Engineering</> },
  { icon: "mech-icon", name: <>Mechanical<br /> Engineering</> },
  { icon: "food-icon", name: <>Food Technology<br /> Engineering</> },
];

const INTERDISCIPLINARY = (
  <>
    <br />
    <small>(Interdisciplinary Program)</small>
  </>
);

// Each group renders as a full-width block with its courses split across three
// columns; the column split is part of the original layout, so it is data.
const COURSE_GROUPS: { title: string; columns: ReactNode[][] }[] = [
  {
    title: "Under-Graduate Engineering Courses",
    columns: [
      [
        "B.E. Aerospace Engineering",
        "B.E. Automobile Engineering",
        "B.E. BioTechnology Engineering",
        "B.E. Chemical Engineering",
        "B.E. Civil Engineering",
        "B.E. Computer Science & Engineering",
      ],
      [
        "B.E. Electrical Engineering",
        "B.E. Electronics and Communication Engineering",
        "B.E. Information Technology",
        "B.E. Mechanical Engineering",
        "B.E. Mechatronics Engineering",
      ],
      [
        "B.E. Food Technology",
        "Bachelor of Engineering (Computer Science and Engineering) (with Specialization in Full Stack Development)",
      ],
    ],
  },
  {
    title: "Post-Graduate Engineering Courses",
    columns: [
      [
        "M.E. Automobile Engineering",
        "M.E. Computer Science & Engineering",
        "M.E. Electronics and Communication Engineering",
        "M.E. Electrical Engineering",
        "M.E. Mechanical Engineering",
      ],
      [
        <>M.E. Electric Vehicle Technologies{INTERDISCIPLINARY}</>,
        "M.E. Civil - Structural & Construction Engineering",
        <>M.E. Civil - Environment Engineering{INTERDISCIPLINARY}</>,
        "M.E. CSE Artificial Intelligence and Machine Learning",
      ],
      [
        <>M.E. Robotics &amp; AI{INTERDISCIPLINARY}</>,
        <>M.E. Artificial Intelligence{INTERDISCIPLINARY}</>,
        "M.E. CSE Data Science",
        <>M.E. Space Technologies{INTERDISCIPLINARY}</>,
      ],
    ],
  },
  {
    title: "Engineering Lateral Entry Courses",
    columns: [
      [
        "B.E. Lateral in Aerospace Engineering",
        "B.E. Lateral in Automobile Engineering",
        "B.E. Lateral in Biotechnology Engineering",
        "B.E. Lateral in Chemical Engineering",
        "B.E. Lateral in Civil Engineering",
        "B.E. Lateral in Computer Science & Engineering",
        "B.E. Lateral in Electrical Engineering",
      ],
      [
        "B.E. Lateral in Electronics & Comm. Engineering",
        "B.E. Lateral in Food Technology Engineering",
        "B.E. Lateral in Information Technology Engineering",
        "B.E. Lateral in Mechanical Engineering",
        "B.E. Lateral in Mechatronics Engineering",
        "B.E. (CSE) Lateral in Artificial Intelligence (AI)",
        "B.E. (CSE) Lateral in Full Stack Development",
      ],
      [
        <>B.E. (CSE) Lateral in Artificial Intelligence and Machine Learning (In association with <CollabLogo name="ibm" />)</>,
        <>B.E. (CSE) Lateral in Cloud Computing (In association with <CollabLogo name="ibm" />)</>,
        <>B.E. (CSE) Lateral in Cyber Security (In association with <CollabLogo name="ibm" />)</>,
        <>B.E. (CSE) Lateral in Data Science (In association with <CollabLogo name="ibm" />)</>,
        <>B.E. (CSE) Lateral in IOT &amp; AI (In association with <CollabLogo name="ibm" />)</>,
      ],
    ],
  },
  {
    title: "CSE Industry Collaborated Programs",
    columns: [
      [
        <>Bachelor of Engineering (Hons.) Computer Science &amp; Engineering (Artificial Intelligence) in Collaboration with <CollabLogo name="microsoft" /></>,
        <>B.E. (Computer Science and Engineering) (Computer Science and Business Systems) (In association with <CollabLogo name="tcs" />)</>,
        <>Bachelor of Engineering (Hons.) (Computer Science and Engineering) (Data Science) (In association with <CollabLogo name="ibm" />)</>,
      ],
      [
        <>B.E. - Computer Science and Engineering (CSE) Cloud Computing (In association with <CollabLogo name="ibm" />)</>,
        <>Bachelor of Engineering (Hons.) (Computer Science and Engineering) (Cyber Security) (In association with <CollabLogo name="ibm" />)</>,
        "M.E. CSE Cloud Computing with Virtusa",
      ],
      [
        <>B.E. CSE with Specialization in Artificial Intelligence and Machine Learning (In association with <CollabLogo name="ibm" />)</>,
        "Bachelor of Engineering (Hons.) (Computer Science and Engineering) (with Specialization in Internet of Things & Artificial Intelligence)",
      ],
    ],
  },
  {
    title: "Doctorate Programs",
    columns: [
      [
        "Doctorate of Philosophy (Electrical Engineering)",
        "Doctorate of Philosophy (Mechanical Engineering)",
      ],
      [
        "Doctorate of Philosophy (Computer Science Engineering)",
        "Doctorate of Philosophy (Civil Engineering)",
      ],
      [
        "Doctorate of Philosophy (Electronics & Communication Engineering)",
        <>Doctorate of Philosophy (Emerging Technologies &amp; Intelligent Systems){INTERDISCIPLINARY}</>,
      ],
    ],
  },
];

export default function ProgramsSection() {
  return (
    <section id="programs" className="programs-sec pt-0!">
      <div className="container px-188 px-1399">
        <div className="row items-end! poff-row">
          <div className="col-sm-6">
            <div className="subHeading">
              <h3>Programs Offered</h3>
              <p className="mb-4!">Chandigarh University Engineering Programs | Fees | Admission</p>
            </div>
            <div className="study-level">
              <h6>Level of Study:</h6>
              <span>Under-Graduate, Post-Graduate &amp; LEET Programs</span>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="course-logo text-end">
              <img loading="lazy" decoding="async" src="/engineering/imgs-new/engg-course-logo.webp"
                alt="Chandigarh University Engineering Admissions" width="229" />
            </div>
          </div>
        </div>
        <div className="row poff-row border-b-0!">
          <h4 className="dpt-title">Engineering Departments</h4>
        </div>
      </div>
      <div className="ps-188 position-relative">
        <Carousel className="dept-slider" wrapAround>
          {DEPARTMENTS.map((dept) => (
            <div className="dept-item" key={dept.icon}>
              <div className="link-cov">
                <div className={`crsprite ${dept.icon}`}></div>
                <h5>{dept.name}</h5>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="container px-188 px-1399">
        <div className="row course-row">
          {COURSE_GROUPS.map((group, groupIndex) => (
            <div
              className={groupIndex === 0 ? "col-md-12 mt-4! mb-6!" : "col-md-12 mb-6!"}
              key={group.title}
            >
              <h6>{group.title}</h6>
              <div className="row mt-6!">
                {group.columns.map((column, columnIndex) => (
                  <div className="col-sm-6 col-lg-4" key={columnIndex}>
                    <ul className="listStyle-2">
                      {column.map((course, courseIndex) => (
                        <li key={courseIndex}>{course}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
