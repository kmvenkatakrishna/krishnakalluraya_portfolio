import React from "react";
import { Helmet } from "react-helmet";

const Header = () => {
  return (
    <>
      {" "}
      <Helmet>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Krishna Kalluraya</title>

        <link
          rel="stylesheet"
          type="text/css"
          href="bootstrap/css/bootstrap.min.css"
        />
        <link rel="stylesheet" type="text/css" href="css/linea.css" />
        <link rel="stylesheet" type="text/css" href="css/ionicons.min.css" />
        <link rel="stylesheet" type="text/css" href="css/owl.carousel.css" />
        <link rel="stylesheet" type="text/css" href="css/magnific-popup.css" />
        <link rel="stylesheet" type="text/css" href="css/style.css" />
      </Helmet>
      <div className="main-content">
        <div className="page-border border-left"></div>
        <div className="page-border border-right"></div>
        <div className="page-border border-top"></div>
        <div className="page-border border-bottom"></div>

        <a href="/" className="menu-btn">
          <span className="lines">
            <span className="l1"></span>
            <span className="l2"></span>
            <span className="l3"></span>
          </span>
        </a>
        <div className="menu">
          <div className="inner">
            <ul className="menu-items">
              <li>
                <a href="/" className="section-toggle" data-section="intro">
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/about"
                  className="section-toggle"
                  data-section="about"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#resume"
                  className="section-toggle"
                  data-section="resume"
                >
                  Resume
                </a>
              </li>

              <li>
                <a
                  href="#portfolio"
                  className="section-toggle"
                  data-section="portfolio"
                >
                  Portfolio
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="section-toggle"
                  data-section="contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="animation-block"></div>
      </div>
    </>
  );
};

export default Header;
