"use client";

import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";

import "./Footer.css";

export default function Footer() {
  // Original index.php ran this inline: the bar stays hidden until the page
  // has scrolled past 100px, then gets .show.
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBar(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <footer className="footer-section programFooter footer-p">
        <div className="footer-top-heiding">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className="footer-logo text-center my-12!">
                  <a className="" href="#page-top">
                    <img src="/engineering/images/cucet-logo.webp"
                      alt="CUCET - Chandigarh University Common Entrance Test"
                      title="CUCET 2026 - Chandigarh University Common Entrance Test" width="120" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-top">
          <div className="row justify-center! deals-box">
            <div className="col-md-4 col-6 hidden!">
              <div className="footer-widget mb-30">
                <div className="f-widget-title">
                  <h5>Information</h5>
                </div>
                <div className="card-info">
                  <strong className="block!">Registration Start Date </strong>
                  <strong id="str_conduct" className="block!">Exam Last Date CUCET-II</strong>

                  <div className="section-header text-left">
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-6 hidden!">
              <div className="footer-widget mb-30">
                <div className="f-widget-title">
                  <h5>Dates</h5>
                </div>
                <div className="card-info">
                  <span id="span_startdate" className="block!">30 Jul 2024</span>
                  <span id="span_datedetails" className="block!">30 Jul 2024 to 10 Oct 2024</span>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 footer-links text-center">
              <div className="footer-widget mb-30">
                <div className="row">
                  <div className="col-12">
                    <div className="f-widget-title">
                      <h5>Get in Touch</h5>
                    </div>
                    <div className="cu-address">
                      <p>
                        <MapPin size={16} />
                        <b>Chandigarh University</b>
                        <br />
                        NH-05 Chandigarh-Ludhiana Highway,
                        Mohali, Punjab (INDIA)<br />
                        General Helpline No:+91-160-3051003<br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-wrap">
          <div className="container">
            <div className="row align-items-center text-center">
              <div className="col-12">
                Copyright ©2025 All Rights Reserved for CUCET Common Entrance Test
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div
        className={showBar ? "footer-fixed-bar show" : "footer-fixed-bar"}
      >
        <p>Grab up to 100% Scholarship Worth ₹200 Cr. - </p>
        <a className="page-scroll" href="#home">Apply Online</a>
      </div>
    </>
  );
}
