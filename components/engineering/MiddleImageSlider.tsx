import Carousel from "./Carousel";

export default function MiddleImageSlider() {
  return (
    <section className="middle-sec">
      <div className="container">
        <Carousel className="middle-slider" wrapAround prevNextButtons={false}>
          <img loading="lazy" decoding="async" className="mdsl-item w-full!" src="/engineering/imgs-new/mid-slider-bg-1.webp"
            srcSet="/engineering/imgs-new/mid-slider-bg-1-800.webp 800w, /engineering/imgs-new/mid-slider-bg-1.webp 1694w"
            sizes="(max-width: 800px) 100vw, 1000px"
            alt="Best Engineering College in Punjab and India" />
        </Carousel>
      </div>
    </section>
  );
}
