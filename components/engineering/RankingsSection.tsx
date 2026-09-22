"use client";

export default function RankingsSection() {
  return (
    <section className="ranking-sec">
      <div className="container px-188 px-1399 h-full!">
        <div className="row h-full! items-end!">
          <div className="col-md-5 hidden! md:block!">
            <img src="/engineering/imgs-new/rank-inset.png" width="554" alt="Rankings Inset" className="rankInset" />
          </div>
          <div className="col-md-7 h-full!">
            <div className="row h-49 align-items-center">
              <div className="col-sm-6">
                <img className="nirf-image" src="/engineering/imgs-new/nirf-ranking.png" alt="NIRF Rankings"
                  width="294" />
              </div>
              <div className="col-sm-6">
                <img className="qs-image" src="/engineering/imgs-new/qs-rank-by-subject-engineering-banner.png"
                  alt="QS World University Rankings" width="360" />
              </div>
            </div>
            <div className="row h-51 items-start!">
              <div className="col-sm-6 abet-block">
                <img className="abet-logo mr-4!" src="/engineering/imgs-new/abet-logo-engineering_white.webp"
                  alt="ABET Rankings" />
                <div className="abet-info">
                  <h5>Globally Recognised Engineering Programs with ABET Accreditation</h5>
                  <p>BE Computer Science & Engineering, BE Electronics & Communication
                    Engineering, BE Chemical Engineering</p>
                </div>
              </div>
              <div className="col-sm-6 abet-block">
                <img className="abet-logo mr-4!"
                  src="/engineering/imgs-new/abet-logo-computing-engineering_white.webp"
                  alt="ABET Rankings" />
                <div className="abet-info">
                  <h5>Globally Recognised Engineering Program with ABET Accreditation</h5>
                  <p>BE Computer Science & Engineering</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
