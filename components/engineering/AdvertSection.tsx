import ArrowIcon from "./shared/ArrowIcon";

export default function AdvertSection() {
  return (
    <section className="ads mt-6!">
      <div className="container">
        <div className="row px-188">
          <div className="col-xl-12">
            <div className="card shadow-[0_0.5rem_1rem_rgba(0,0,0,0.15)]! mt-0 2xl:mt-12! adsCard">
              <div className="card-body p-0">
                <div className="row align-items-center">
                  <div className="col-sm-8 flex! align-items-center position-relative adSlider">
                    <div className="adSlider__title">
                      <h4>Education That Empowers</h4>
                      <h3>Opportunities That Transform
                      </h3>
                    </div>
                  </div>
                  <div className="col-sm-4 sm:text-right!">
                    <a href="#home" className="adsCtabtn btn btn-primary btn-hoverEffect page-scroll">Apply Now <ArrowIcon /></a>
                  </div>
                </div>
              </div>
              <div className="adbanner">
                <img
                  src="/engineering/imgs-new/ads-bg.webp"
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
