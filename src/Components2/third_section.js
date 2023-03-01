import React, { Component } from "react";
class ThirdSection extends Component {
  render() {
    return (
      <section className="big-section border-top border-color-medium-gray pb-0">
        <div className="container">
          <div className="row align-items-center margin-10-rem-bottom md-margin-5-rem-bottom sm-margin-4-rem-bottom">
            <div className="col-12 col-lg-4 text-center text-lg-start md-margin-30px-bottom wow animate__fadeIn">
              <h4 className="alt-font font-weight-600 text-extra-dark-gray mb-0 letter-spacing-minus-1px">
                Amazing work
              </h4>
            </div>
            <div className="col-12 col-lg-8 text-center wow animate__fadeIn">
              {/* start filter navigation */}
              <ul className="portfolio-filter grid-filter nav nav-tabs justify-content-center justify-content-lg-end border-0 text-uppercase font-weight-500 alt-font">
                <li className="nav active">
                  <a data-filter="*" href="#">
                    All
                  </a>
                </li>
                <li className="nav">
                  <a data-filter=".branding" href="#">
                    Branding
                  </a>
                </li>
                <li className="nav">
                  <a data-filter=".graphics" href="#">
                    Graphics
                  </a>
                </li>
                <li className="nav">
                  <a data-filter=".logos" href="#">
                    Logos
                  </a>
                </li>
                <li className="nav">
                  <a data-filter=".photography" href="#">
                    Photography
                  </a>
                </li>
              </ul>
              {/* end filter navigation */}
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 filter-content px-md-0 wow animate__fadeIn">
              <ul className="portfolio-bordered portfolio-wrapper grid grid-loading grid-4col xl-grid-4col lg-grid-2col md-grid-2col sm-grid-2col xs-grid-1col text-center">
                <li className="grid-sizer" />
                {/* start portfolio item */}
                <li className="grid-item logos branding wow animate__fadeIn">
                  <a href="single-project-page-01.html">
                    <div className="portfolio-box">
                      <div className="portfolio-image bg-white">
                        <img
                          src="images/home-design-agency-img-04.jpg"
                          alt=""
                        />
                        <div className="portfolio-hover bg-white justify-content-center d-flex flex-column">
                          <div className="scale">
                            <div className="alt-font text-extra-dark-gray font-weight-600 letter-spacing-minus-1px d-block text-extra-large text-uppercase">
                              Motion
                            </div>
                            <div className="text-uppercase text-medium-gray text-small alt-font d-block">
                              Identity
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                {/* end portfolio item */}
                {/* start portfolio item */}
                <li className="grid-item logos graphics wow animate__fadeIn">
                  <a href="single-project-page-02.html">
                    <div className="portfolio-box">
                      <div className="portfolio-image bg-white">
                        <img
                          src="images/home-design-agency-img-05.jpg"
                          alt=""
                        />
                        <div className="portfolio-hover bg-white justify-content-center d-flex flex-column">
                          <div className="scale">
                            <div className="alt-font text-extra-dark-gray font-weight-600 letter-spacing-minus-1px d-block text-extra-large text-uppercase">
                              Biolator
                            </div>
                            <div className="text-uppercase text-medium-gray text-small alt-font d-block">
                              Branding
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                {/* end portfolio item */}
                {/* start portfolio item */}
                <li className="grid-item photography branding wow animate__fadeIn">
                  <a href="single-project-page-03.html">
                    <div className="portfolio-box">
                      <div className="portfolio-image bg-white">
                        <img
                          src="images/home-design-agency-img-06.jpg"
                          alt=""
                        />
                        <div className="portfolio-hover bg-white justify-content-center d-flex flex-column">
                          <div className="scale">
                            <div className="alt-font text-extra-dark-gray font-weight-600 letter-spacing-minus-1px d-block text-extra-large text-uppercase">
                              Oslands
                            </div>
                            <div className="text-uppercase text-medium-gray text-small alt-font d-block">
                              Branding
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                {/* end portfolio item */}
                {/* start portfolio item */}
                <li className="grid-item photography graphics wow animate__fadeIn">
                  <a href="single-project-page-04.html">
                    <div className="portfolio-box">
                      <div className="portfolio-image bg-white">
                        <img
                          src="images/home-design-agency-img-07.jpg"
                          alt=""
                        />
                        <div className="portfolio-hover bg-white justify-content-center d-flex flex-column">
                          <div className="scale">
                            <div className="alt-font text-extra-dark-gray font-weight-600 letter-spacing-minus-1px d-block text-extra-large text-uppercase">
                              Financial
                            </div>
                            <div className="text-uppercase text-medium-gray text-small alt-font d-block">
                              Photography
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                {/* end portfolio item */}
                {/* start portfolio item */}
                <li className="grid-item logos graphics branding wow animate__fadeIn">
                  <a href="single-project-page-05.html">
                    <div className="portfolio-box">
                      <div className="portfolio-image bg-white">
                        <img
                          src="images/home-design-agency-img-08.jpg"
                          alt=""
                        />
                        <div className="portfolio-hover bg-white justify-content-center d-flex flex-column">
                          <div className="scale">
                            <div className="alt-font text-extra-dark-gray font-weight-600 letter-spacing-minus-1px d-block text-extra-large text-uppercase">
                              Dupont
                            </div>
                            <div className="text-uppercase text-medium-gray text-small alt-font d-block">
                              Branding
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                {/* end portfolio item */}
                {/* start portfolio item */}
                <li className="grid-item logos photography wow animate__fadeIn">
                  <a href="single-project-page-01.html">
                    <div className="portfolio-box">
                      <div className="portfolio-image bg-white">
                        <img
                          src="images/home-design-agency-img-09.jpg"
                          alt=""
                        />
                        <div className="portfolio-hover bg-white justify-content-center d-flex flex-column">
                          <div className="scale">
                            <div className="alt-font text-extra-dark-gray font-weight-600 letter-spacing-minus-1px d-block text-extra-large text-uppercase">
                              Gardner
                            </div>
                            <div className="text-uppercase text-medium-gray text-small alt-font d-block">
                              Branding
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                {/* end portfolio item */}
                {/* start portfolio item */}
                <li className="grid-item graphics photography branding wow animate__fadeIn">
                  <a href="single-project-page-02.html">
                    <div className="portfolio-box">
                      <div className="portfolio-image bg-white">
                        <img
                          src="images/home-design-agency-img-10.jpg"
                          alt=""
                        />
                        <div className="portfolio-hover bg-white justify-content-center d-flex flex-column">
                          <div className="scale">
                            <div className="alt-font text-extra-dark-gray font-weight-600 letter-spacing-minus-1px d-block text-extra-large text-uppercase">
                              Truenorth
                            </div>
                            <div className="text-uppercase text-medium-gray text-small alt-font d-block">
                              Photography
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                {/* end portfolio item */}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ThirdSection;
