import React, { Component } from "react";
class FourthSection extends Component {
  render() {
    return (
      <section className="bg-gradient-white-light-gray">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-12 col-lg-6 position-relative text-center md-margin-30px-bottom wow animate__fadeIn"
              data-wow-delay="0.2s"
            >
              <img src="images/home-design-agency-img-01.png" alt="" />
              
            </div>
            <div className="col-12 col-xl-4 col-lg-5 offset-lg-1 col-md-7">
              <h5
                className="alt-font font-weight-600 text-extra-dark-gray margin-4-half-rem-bottom letter-spacing-minus-1px text-center text-lg-start wow animate__fadeInRight"
                data-wow-delay="0.2s"
              >
                Whatever We Start, We Think Through To The End
              </h5>
              <p>
        
              We do make a plan for designing and developing mobile apps and web development solutions that help businesses to solve organizational challenges, improve sales, and customer engagement. From project ideation to release in the market, we deliver our clients with the best software development service for their business.
              </p>
            </div>
          </div>
          <div className="row">
            <div
              className="col-12 text-center margin-7-rem-top lg-margin-4-half-rem-top wow animate__fadeIn"
              data-wow-delay="0.6s"
            >
              <span className="alt-font text-extra-dark-gray text-large">
                Are you interested in our services?{" "}
                <a
                  href="/contact-us"
                  className="font-weight-600 text-decoration-line-bottom text-extra-dark-gray text-black-hover section-link"
                >
                  Get started now
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FourthSection;
