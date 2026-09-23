"use client";

import { useState } from "react";
import Carousel from "./Carousel";

type Step = {
  step: number;
  stepLabel: string;
  stepTitle: string;
  img: string;
  heading: string;
  paragraphs: string[];
};

const STEPS: Step[] = [
  {
    step: 1,
    stepLabel: "Step 1",
    stepTitle: "Signup",
    img: "/engineering/imgs-new/step-1-bg.webp",
    heading: "Step 1 - Signup",
    paragraphs: [
      "Sign up or Register for CUCET with basic details (Name, Email ID, Mobile No., State, Gender and Password). Your Email ID will act as your Username for the portal while the password will be set by you upon registration.",
      "On successful registration, you will receive the confirmation message on your registered contact number and Email. Use the Username and Password to Login to your CUCET Account.",
    ],
  },
  {
    step: 2,
    stepLabel: "Step 2",
    stepTitle: "Apply for CUCET",
    img: "/engineering/imgs-new/step-2-bg.webp",
    heading: "Step 2 - Apply",
    paragraphs: [
      "After successfully creating your candidate profile for CUCET, you can proceed with choosing the Date for your examination. Complete your profile by logging into your CUCET account and choose an examination date as per your convenience and preference.",
    ],
  },
  {
    step: 3,
    stepLabel: "Step 3",
    stepTitle: "Admission",
    img: "/engineering/imgs-new/step-3-bg.webp",
    heading: "Step 3 - Submit",
    paragraphs: [
      "You become eligible for admission into Chandigarh University after clearing the CUCET examination. Following your attempt at CUCET, the result will shortly be intimated, based on which you can submit your application for admission and avail merit-based scholarship.",
    ],
  },
];

export default function HowToApplySection() {
  // Original: $('.step-slider').flickity({ asNavFor: '.fst-slider' }) — the
  // nav cells were clickable and moved the content slider. Here the two
  // carousels share one index and the step cells are the tabs that set it.
  const [stepIndex, setStepIndex] = useState(0);
  // The panel keeps rotating on its own until the visitor picks a step; after
  // that it stays where they put it rather than sliding out from under them.
  const [tabPicked, setTabPicked] = useState(false);

  const pickStep = (i: number) => {
    setStepIndex(i);
    setTabPicked(true);
  };

  // Left/right move between tabs, Home/End jump to the ends, the way a
  // tablist is expected to behave.
  const onTabKeyDown = (event: React.KeyboardEvent) => {
    const moves: Record<string, number> = {
      ArrowLeft: stepIndex - 1,
      ArrowRight: stepIndex + 1,
      Home: 0,
      End: STEPS.length - 1,
    };
    const next = moves[event.key];
    if (next === undefined) return;
    event.preventDefault();
    pickStep((next + STEPS.length) % STEPS.length);
  };

  return (
    <section className="hta-sec pt-115 pb-115">
      <div className="container px-188 px-1399">
        <div className="subHeading text-center">
          <h3>How to Apply?</h3>
        </div>
        <div className="row justify-center! mt-5">
          <div className="col-md-9 col-xl-7">
            <Carousel
              className="step-slider"
              role="tablist"
              ariaLabel="How to apply"
              selectedIndex={stepIndex}
              autoPlay={false}
              prevNextButtons={false}
            >
              {STEPS.map((s, i) => (
                <div
                  className={i === stepIndex ? "step-item is-selected" : "step-item"}
                  key={s.step}
                  role="tab"
                  id={`step-tab-${s.step}`}
                  aria-controls={`step-panel-${s.step}`}
                  aria-selected={i === stepIndex}
                  tabIndex={i === stepIndex ? 0 : -1}
                  onClick={() => pickStep(i)}
                  onKeyDown={onTabKeyDown}
                >
                  <span>{s.stepLabel}</span>
                  <h5>{s.stepTitle}</h5>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-xl-11">
            <Carousel
              className="fst-slider"
              selectedIndex={stepIndex}
              onSelect={setStepIndex}
              autoPlay={tabPicked ? false : 5000}
              prevNextButtons={false}
            >
              {STEPS.map((s, i) => (
                <div
                  className="fst-item"
                  key={s.step}
                  role="tabpanel"
                  id={`step-panel-${s.step}`}
                  aria-labelledby={`step-tab-${s.step}`}
                  aria-hidden={i !== stepIndex}
                >
                  <div className="step-left">
                    <img loading="lazy" decoding="async" src={s.img} alt="How to Apply Representation" />
                  </div>
                  <div className="step-right">
                    <h6>{s.heading}</h6>
                    {s.paragraphs.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
