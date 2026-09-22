"use client";

import Carousel from "./Carousel";

export default function MiddleImageSlider() {
  return (
    <section className="middle-sec">
      <div className="container">
        <Carousel className="middle-slider" wrapAround prevNextButtons={false}>
          <img className="mdsl-item w-full!" src="/engineering/imgs-new/mid-slider-bg-1.jpg"
            alt="Best Engineering College in Punjab and India" />
        </Carousel>
      </div>
    </section>
  );
}
