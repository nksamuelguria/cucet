"use client";

import ArrowIcon from "./shared/ArrowIcon";

export default function MentorSection() {
  return (
    <section className="mentor-sec">
      <div className="container px-188 px-1399">
        <div className="mentor-box">
          <div className="row h-full! items-end!">
            <div className="col-md-5 hidden! xl:block!">
              <img src="/engineering/imgs-new/mentors-bg.png" width="544" alt="Mentors Inset"
                className="mentorInset" />
            </div>
            <div className="col-md-7 h-full! pr-50">
              <div className="row h-55 align-items-center">
                <div className="col-12">
                  <h4 className="mentor-title">Seasoned
                    professionals provide <br />
                    <highlight>real-world knowledge and applied learning</highlight>
                  </h4>
                </div>
              </div>
              <div className="row h-45 align-items-center justify-between!">
                <div className="col-5">
                  <div className="mentor-info">
                    <h5>Step Into the Future with Guidance from Proven Practitioners!</h5>
                  </div>
                </div>
                <div className="col-6 text-end">
                  <a href="#home" target="_blank"
                    className="btn btn-primary bg-white text-red btn-hoverEffect page-scroll">Know More <ArrowIcon variant="red" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
