import React from "react";
import Header from "../Header/header";

const About = () => {
  return (
    <>
      <section id="about" className="section about-section border-d">
        <div className="section-block about-block">
          <div className="container-fluid">
            <div className="section-header">
              <h2>
                I'm a <strong className="color">Programmer</strong>
              </h2>
            </div>

            <div className="row">
              <div className="col-md-4">
                <ul className="info-list">
                  <li>
                    <strong>Name:</strong>
                    <span>John Doe</span>
                  </li>

                  <li>
                    <strong>Job:</strong>
                    <span>Freelancer</span>
                  </li>

                  <li>
                    <strong>Age:</strong>
                    <span>26 Years</span>
                  </li>

                  <li>
                    <strong>Residence:</strong>
                    <span>United States</span>
                  </li>

                  <li>
                    <strong>Hometown:</strong>
                    <span>Dokri</span>
                  </li>
                </ul>
              </div>

              <div className="col-md-8">
                <div className="about-text">
                  <p>
                    Qui ne indoctum electram vituperatoribus. Eirmod tamquam
                    efficiendi mei cu, eum idque voluptatum ad, quo id tollit
                    regione prompta. Cu probo iusto assentior eos, usu summo
                    perpetua ne. Te suas phaedrum ullamcorper has. Ea mei
                    ponderum rationibus dissentias. Inani phaedrum suavitate eu
                    qui, vide aperiri facilis est eu. Te appetere cotidieque
                    pro, duo eu assum facete instructior, no autem aeterno
                    reprimique nec. Pri cu delectus adolescens, eruditi placerat
                    cu sed, zril nonumes forensibus in eam. Eam ne dolore
                    diceret pericula, in vis numquam pertinax. Vel ne dolorum
                    eloquentiam, et vel senserit incorrupte neglegentur, pro cu
                    audiam ocurreret reprimique.
                  </p>

                  <p>
                    Qui ne indoctum electram vituperatoribus. Eirmod tamquam
                    efficiendi mei cu, eum idque voluptatum ad, quo id tollit
                    regione prompta. Cu probo iusto assentior. Qui ne indoctum
                    electram vituperatoribus. Eirmod tamquam efficiendi mei cu,
                    eum idque voluptatum ad.
                  </p>
                </div>

                <div className="about-btns">
                  <a href="/" className="btn-custom btn-color">
                    Download Resume
                  </a>

                  <a href="/" className="btn-custom btn-color">
                    Hire Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-block services-block">
          <div className="container-fluid">
            <div className="section-header">
              <h2>
                My <strong className="color">Services</strong>
              </h2>
            </div>

            <div className="row">
              <div className="col-md-4">
                <div className="service">
                  <div className="icon">
                    <i className="icon-basic-photo"></i>
                  </div>

                  <div className="content">
                    <h4>Photography</h4>

                    <p>
                      Ei constituam theophrastus per, sea dolorum disputationi
                      in, vel menandri suavitate similique in. Vide assum
                      conceptam eum.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="service">
                  <div className="icon">
                    <i className="icon-basic-keyboard"></i>
                  </div>

                  <div className="content">
                    <h4>Programming</h4>

                    <p>
                      Ei constituam theophrastus per, sea dolorum disputationi
                      in, vel menandri suavitate similique in. Vide assum
                      conceptam eum.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="service">
                  <div className="icon">
                    <i className="ion-social-wordpress-outline"></i>
                  </div>

                  <div className="content">
                    <h4>WordPress</h4>

                    <p>
                      Ei constituam theophrastus per, sea dolorum disputationi
                      in, vel menandri suavitate similique in. Vide assum
                      conceptam eum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-block skills-block">
          <div className="container-fluid">
            <div className="section-header">
              <h2>
                My <strong className="color">Skills</strong>
              </h2>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="skill">
                  <h4>HTML/CSS</h4>

                  <div className="bar">
                    <div className="percent" style={{ width: "85%" }}></div>
                  </div>
                </div>

                <div className="skill">
                  <h4>php</h4>

                  <div className="bar">
                    <div className="percent" style={{ width: "85%" }}></div>
                  </div>
                </div>

                <div className="skill">
                  <h4>jQuery</h4>

                  <div className="bar">
                    <div className="percent" style={{ width: "85%" }}></div>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="skill">
                  <h4>JavaScript</h4>

                  <div className="bar">
                    <div className="percent" style={{ width: "85%" }}></div>
                  </div>
                </div>

                <div className="skill">
                  <h4>WordPress</h4>

                  <div className="bar">
                    <div className="percent" style={{ width: "85%" }}></div>
                  </div>
                </div>

                <div className="skill">
                  <h4>SEO</h4>

                  <div className="bar">
                    <div className="percent" style={{ width: "85%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-block pricing-block">
          <div className="section-header">
            <h2>
              My <strong className="color">Pricing</strong>
            </h2>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="p-table">
                <div className="header">
                  <h4>Basic</h4>

                  <div className="price">
                    <span className="currency">$</span>
                    <span className="amount">19</span>
                    <span className="period">/HR</span>
                  </div>
                </div>

                <ul className="items">
                  <li>App Designing</li>
                  <li>App Development</li>
                  <li>Web Development</li>
                </ul>

                <a href="/" className="btn-custom btn-color">
                  Choose This
                </a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-table">
                <div className="header">
                  <h4>Pro</h4>

                  <div className="price">
                    <span className="currency">$</span>
                    <span className="amount">29</span>
                    <span className="period">/HR</span>
                  </div>
                </div>

                <ul className="items">
                  <li>App Designing</li>
                  <li>App Development</li>
                  <li>Web Development</li>
                </ul>

                <a href="/" className="btn-custom btn-color">
                  Choose This
                </a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-table">
                <div className="header">
                  <h4>Gold</h4>

                  <div className="price">
                    <span className="currency">$</span>
                    <span className="amount">39</span>
                    <span className="period">/HR</span>
                  </div>
                </div>

                <ul className="items">
                  <li>App Designing</li>
                  <li>App Development</li>
                  <li>Web Development</li>
                </ul>

                <a href="/" className="btn-custom btn-color">
                  Choose This
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Header />
    </>
  );
};

export default About;
