"use client";

import { Fragment, useEffect, useState } from "react";

import "./Header.css";

// The header shows two copies of the same button; CSS swaps which one is
// visible per breakpoint, so they differ only by this class.
const APPLY_BUTTONS = ["apply-btn", "call-btn"];

const BRAND_LOGOS = [
  {
    src: "/engineering/images/cu-logo-white.png",
    alt: "chandigarh University logo",
    className: "h-cu-logo",
    title: undefined,
  },
  {
    src: "/engineering/images/naac-logo-white.png",
    alt: "NAAC A+ Grade University in Punjab",
    className: "h-naac-logo",
    title: "NAAC A+ Grade University in Punjab",
  },
  {
    src: "/engineering/images/qs-logo-new.png",
    alt: "QS World Ranked University",
    className: "h-naac-logo",
    title: "QS World Ranked University",
  },
];

function ArrowGlyph() {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      width="18"
      height="18"
    >
      <style
        type="text/css"
        dangerouslySetInnerHTML={{ __html: `.st0{fill:#FFFFFF;}` }}
      />
      <g>
        <g>
          <path
            className="st0"
            d="M508.9,248.5l-160-160c-4.2-4.2-10.9-4.2-15.1,0c-4.2,4.2-4.2,10.9,0,15.1l141.8,141.8H10.7
                                C4.8,245.3,0,250.1,0,256s4.8,10.7,10.7,10.7h464.9L333.8,408.5c-4.2,4.2-4.2,10.9,0,15.1c2.1,2.1,4.8,3.1,7.5,3.1s5.5-1,7.5-3.1
                                l160-160C513,259.4,513,252.6,508.9,248.5z"
          ></path>
        </g>
      </g>
    </svg>
  );
}

export default function Header() {
  // Original main.js: $(window).scroll -> scrollTop >= 50 toggles .sticky on
  // <header>, which is what gives the bar its background once the page moves.
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY >= 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={sticky ? "programHeader sticky" : "programHeader"}>
        <div className="cucetLogo">
          <div className="logo-area">
            <span className="block!">
              <div>
                {BRAND_LOGOS.map((logo, i) => (
                  <Fragment key={logo.src}>
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className={logo.className}
                      title={logo.title}
                    />
                    {/* The original had a newline between each <img>, which
                        renders as a space and widens the logo cluster. */}
                    {i < BRAND_LOGOS.length - 1 ? " " : null}
                  </Fragment>
                ))}
              </div>
            </span>
          </div>
        </div>
        {APPLY_BUTTONS.map((variant) => (
          <a key={variant} href="#home" className={`cu-btn red-bg ${variant} mt-0`}>
            Apply Today <ArrowGlyph />
          </a>
        ))}
      </header>

      <style
        dangerouslySetInnerHTML={{
          __html: `
    .select2-results__option, .ui-menu .ui-menu-item a {
        font-size: 14px;
        line-height: 16px;
    }
    .loginPopup {
        background: linear-gradient(135deg, #c52f33 0%, #000 100%)!important;
    }
    .loginLogo img {
        margin-bottom: 20px;
    }
    @media only screen and (max-width: 820px) {
        .h-cu-logo {
            width: 180px;
        }
        .h-naac-logo {
            width: 120px;
            margin-left: 5px;
        }
        .programHeader .cu-btn {
            padding: 12px 15px !important;
            letter-spacing: 1px;
            margin-top: 11px;
        }
    }
    @media (max-width: 767px) {
        .userLogingraphic {
            margin-top: unset!important;
        }
        .equalHight {
            border-left: 0!important;
            padding-left: 0!important;
        }
        #closePopup {
            background: var(--bgcolor-blue)!important;
            padding: 5px;
            border-radius: 10px;
        }

        /********* TEMPORARY CSS AUDIT ********/
        .programHeader .cu-btn {
            display: none;
        }
        .pageBanner-inner_in {
            padding: 170px 0 100px;
        }
        .pageBanner-inner_in .col-sm-6:first-child {
            order: 2;
            margin-top: 30px;
        }
        /********* TEMPORARY CSS AUDIT ********/
    }
`,
        }}
      />
    </>
  );
}
