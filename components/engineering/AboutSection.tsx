"use client";

export default function AboutSection() {
  return (
    <section className="about-sec pt-115 pb-115">
      <div className="container">
        <div className="row flex-cr">
          <div className="col-lg-6">
            <div className="row abt-row">
              <div className="col-md-6 col-lg-7">
                <div className="big-dept-cover">
                  <img className="w-full!" src="/engineering/imgs-new/bcp-bg-1.jpg"
                    alt="Department big side image" />
                </div>
              </div>
              <div className="col-md-6 col-lg-5 hidden! md:block!">
                <div className="small-dept-cover-upper">
                  <img className="w-full!" src="/engineering/imgs-new/bcp-bg-2.jpg"
                    alt="Department small side image" />
                </div>
                <div className="small-dept-cover-lower">
                  <img className="w-full!" src="/engineering/imgs-new/bcp-bg-3.jpg"
                    alt="Department small side image" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="subHeading ps-40">
              <h3 className="position-relative">Best Engineering
                College in Punjab, India</h3>
              <p>The University Institute of Engineering at Chandigarh University is a premier institution of
                engineering in India, renowned for its internationally benchmarked, industry-aligned
                education. Learner-centric academic model at Best Engineering College in Punjab, India is
                focused on innovation and interdisciplinary acuity and prepares students to succeed in
                competitive career environments through an integrated mix of industrial training, global
                research internships, value-added courses, globally recognised certifications, international
                and national competitions, and capstone projects.</p>
              <p>Our new-age engineering programs are co-designed and co-delivered by industry professionals
                to enable students to stay updated with the emerging industry shifts across the globe. At
                India&apos;s Best Engineering College in Punjab, groundbreaking research work in AI,
                biotechnology, cybersecurity, sustainability, and other domains is conducted at the
                industry-collaborated Centres of Excellence in collaboration with national and international
                institutions for an immersive learning experience and to deliver solutions that make a
                societal impact.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
