import React, { Component } from "react";
class FifthSection extends Component {
  render() {
    return (
      <section
        id="pricing"
        className="big-section pb-0 border-bottom border-width-1px border-color-medium-gray"
      >
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-12 col-xl-4 col-lg-5 md-margin-5-rem-bottom sm-margin-6-half-rem-bottom text-center text-md-start wow animate__fadeIn"
              data-wow-delay="0.2s"
            >
              <h4 className="alt-font font-weight-600 text-extra-dark-gray letter-spacing-minus-1px margin-2-half-rem-bottom">
              Everybody Gets Exactly What They Need
              </h4>
              <p className="w-90 sm-w-100">
              We provide end-to-end software development services without compromising standard processes and quality assurance. We have served multiple companies globally transforming concepts into genuine products. 
              </p>
              <a
                href="/services"
                className="btn btn-fancy btn-medium btn-transparent-light-gray margin-20px-top"
              >
                Read more
              </a>
            </div>
            <div className="col-12 col-xl-6 offset-xl-2 col-lg-7 md-padding-25px-left md-padding-35px-right sm-padding-15px-lr">
              <div className="row row-cols-1 row-cols-md-2 align-items-center sm-no-margin-lr">
               
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-center margin-10-rem-top md-margin-7-rem-top">
            <div
              className="col-12 col-lg-3 col-md-5 col-sm-6 text-center text-lg-end order-1 md-margin-5-rem-bottom xs-margin-4-rem-bottom wow animate__fadeInRight"
              data-wow-delay="0.7s"
            >
              <i className="fas fa-quote-right icon-small d-block opacity-3 margin-25px-bottom" />
              <span className="alt-font font-weight-500 text-large line-height-30px text-extra-dark-gray d-inline-block w-80">
                We offers perfect  models for your project requirements
              </span>
            </div>
            <div className="col-12 col-lg-6 col-md-8 p-0 order-3 order-lg-2 wow animate__fadeIn">
              <img src="images/home-design-agency-img-02.png" alt="" />
            </div>
            <div
              className="col-12 col-lg-3 col-md-5 col-sm-6 text-center text-lg-start order-2 order-lg-3 md-margin-5-rem-bottom xs-margin-7-rem-bottom wow animate__fadeInLeft"
              data-wow-delay="0.7s"
            >
              <i className="fas fa-quote-left icon-small d-block opacity-3 margin-25px-bottom" />
              <span className="alt-font font-weight-500 text-large line-height-30px text-extra-dark-gray d-inline-block w-80">
                Our highly qualified and skilled developers are here to help
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FifthSection;
