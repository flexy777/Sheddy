import React, { Component } from "react";
import AppLayer from "./AppLayer";
import Team from "./Team";

class AboutUs extends Component {
  render() {
    return (
      <AppLayer navbarClass={"navbar navbar-expand-lg navbar-dark bg-transparent header-light fixed-top header-reverse-scroll"}
     >
        <section
          className="parallax"
          data-parallax-background-ratio="0.5"
          style={{ backgroundImage: 'url("images/about-us-bg.jpg")' }}
        >
          <div className="opacity-extra-medium bg-extra-dark-gray" />
          <div className="container">
            <div className="row align-items-stretch justify-content-center small-screen">
              <div className="col-12 position-relative page-title-extra-small text-center d-flex align-items-center justify-content-center flex-column">
                <h1 className="alt-font text-white opacity-6 margin-20px-bottom">
                  About our company
                </h1>
                <h2 className="text-white alt-font font-weight-400 w-55 md-w-65 sm-w-80 center-col xs-w-100 letter-spacing-minus-1px line-height-50 sm-line-height-45 xs-line-height-30 no-margin-bottom">
                  we are a leading software development company
                </h2>
              </div>
              <div className="down-section text-center">
                <a href="#about" className="section-link">
                  <i className="ti-arrow-down icon-extra-small text-black bg-yellow padding-15px-all xs-padding-10px-all border-radius-100" />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* end page title */}
        {/* start section */}
        <section id="about" className="bg-light-gray">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-4 pe-lg-0 d-flex md-margin-30px-bottom">
                <div
                  className="w-100 md-h-700px sm-h-550px xs-h-450px cover-background"
                  style={{
                    backgroundImage: 'url("images/about-us-img-07.jpg")',
                  }}
                />
              </div>
              <div className="col-12 col-lg-4 col-md-6 ps-lg-0 d-flex sm-margin-30px-bottom">
                <div className="justify-content-center w-100 d-flex flex-column bg-yellow padding-5-half-rem-lr lg-padding-3-rem-lr md-padding-4-rem-all">
                  <span className="text-large alt-font font-weight-200 text-black margin-20px-bottom d-block">
                  The Boolean Tech is a one-stop IT solution provider web and mobile app development company in Abuja, NG. Having hands-on experience in delivering and deploying cutting-edge web and mobile applications, we create customer-centric product design and deliver ceaseless experience that leaves the user Wowwwww! 
                  </span>
                  <a
                    href="/services"
                    className="btn btn-large btn-link text-black text-black-hover align-self-start"
                  >
                    Company overview
                  </a>
                </div>
              </div>
              <div className="col-12 col-lg-4 col-md-6">
                <img src="images/about-us-img-01.jpg" alt="" />
                <div className="bg-black padding-3-half-rem-lr padding-3-rem-tb lg-padding-2-rem-all md-padding-2-half-rem-all sm-padding-4-rem-all last-paragraph-no-margin">
                  <span className="alt-font text-yellow font-weight-500 margin-10px-bottom d-block">
                    Our Mission
                  </span>
                  <p>
                  It is through our passion and commitment to our clients that we develop software to face real-world challenges. It is our love for and dedication to what we do that enables us to become a better company for ourselves, for our clients, our community and the world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end section */}
        {/* start section */}
        <section className="bg-light-gray wow animate__fadeIn">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-6 col-sm-8 text-center margin-5-rem-bottom md-margin-3-rem-bottom">
                <span className="text-extra-medium margin-15px-bottom alt-font d-block w-100">
                  Browse amazing social media features
                </span>
                <h5 className="alt-font text-extra-dark-gray font-weight-500 margin-2-rem-bottom sm-w-100">
                  We offer a full range of software development services!
                </h5>
              </div>
            </div>
            <div className="row justify-content-center">
              {/* start feature box item */}
              <div className="col-12 col-lg-6 col-md-9 margin-30px-bottom xs-margin-15px-bottom">
                <div className="feature-box h-100 feature-box-left-icon border-radius-5px bg-black box-shadow-small  overflow-hidden padding-4-rem-all">
                  <div className="feature-box-icon">
                    <i className="line-icon-Navigation-LeftWindow icon-medium text-white" />
                  </div>
                  <div className="feature-box-content last-paragraph-no-margin">
                    <span className="alt-font font-weight-500 margin-10px-bottom d-block text-white">
                      Who we are?
                    </span>
                    <p className="text-white">
                    Our team of passionate developers and designers nurtures your dreamed ideas into reality by solving the real-world problems for the business and their customers. Having released more than 75 apps of the respectable brands under the belt of our well-versed team, we leave no stone unturned when it comes to security and transparency. 
                    </p>
                  </div>
                 
                </div>
              </div>
              {/* end feature box item */}
              {/* start feature box item */}
              <div className="col-12 col-lg-6 col-md-9 margin-30px-bottom xs-margin-15px-bottom">
                <div className="feature-box h-100 feature-box-left-icon border-radius-5px bg-yellow box-shadow-small  overflow-hidden padding-4-rem-all">
                  <div className="feature-box-icon">
                    <i className="line-icon-Cursor-Click2 icon-medium text-black" />
                  </div>
                  <div className="feature-box-content last-paragraph-no-margin">
                    <span className="alt-font font-weight-500 margin-10px-bottom d-block text-black">
                      Our Approach
                    </span>
                    <p className="text-black">
                    Our skilled strategists, designers, and developers are here to take your project from ideation to publication. Being a leading software development company in Nigeria, our team is committed to developing mobile app and web-based software solutions that keep your users hooked straight into it. 
                    </p>
                  </div>
                  
                </div>
              </div>
              {/* end feature box item */}
            </div>
          </div>
        </section>
        {/* end section */}
        {/* start section */}
        <section className="wow animate__fadeIn">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-lg-6 md-margin-50px-bottom wow animate__fadeIn">
                {/* start slider */}
                <div
                  className="swiper-container white-move border-all border-width-12px border-color-white box-shadow-large border-radius-8px"
                  data-slider-options='{ "slidesPerView": 1, "loop": true, "navigation": { "nextEl": ".swiper-button-next-nav", "prevEl": ".swiper-button-previous-nav" }, "keyboard": { "enabled": true, "onlyInViewport": true }, "effect": "slide" }'
                >
                  <div className="swiper-wrapper">
                    {/* start slider item */}
                    <div className="swiper-slide">
                      <img src="images/about-us-img-08.jpg" alt="" />
                    </div>
                    {/* end slider item */}
                    {/* start slider item */}
                    <div className="swiper-slide">
                      <img src="images/about-us-img-09.jpg" alt="" />
                    </div>
                    {/* end slider item */}
                    {/* start slider item */}
                    <div className="swiper-slide">
                      <img src="images/about-us-img-10.jpg" alt="" />
                    </div>
                    {/* end slider item */}
                  </div>
                  {/* start slider navigation */}
                  <div className="swiper-button-next-nav swiper-button-next slider-navigation-style-01 light">
                    <i
                      className="feather icon-feather-arrow-right"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="swiper-button-previous-nav swiper-button-prev slider-navigation-style-01 light">
                    <i
                      className="feather icon-feather-arrow-left"
                      aria-hidden="true"
                    />
                  </div>
                  {/* end slider navigation */}
                </div>
                {/* end slider */}
              </div>
              <div
                className="col-12 col-lg-5 offset-lg-1 wow animate__fadeIn"
                data-wow-delay="0.2s"
              >
                <h5 className="alt-font text-extra-dark-gray font-weight-500">
                  It is teamwork that makes the dream work.
                </h5>
                <p>
                  With years of experience in the design and development
                  industry The Boolean Tech pride ourselves on creating unique, creative
                  &amp; quality designs that are developed upon the latest
                  coding.
                </p>
                <ul className="p-0 list-style-02 margin-2-rem-top margin-3-rem-bottom">
                  <li className="margin-15px-bottom">
                    <i
                      className="feather icon-feather-arrow-right-circle text-large text-yellow margin-10px-right"
                      aria-hidden="true"
                    />
                    <span className="text-extra-dark-gray alt-font">
                      Beautiful and easy to understand applications
                    </span>
                  </li>
                  <li className="margin-15px-bottom">
                    <i
                      className="feather icon-feather-arrow-right-circle text-large text-yellow margin-10px-right"
                      aria-hidden="true"
                    />
                    <span className="text-extra-dark-gray alt-font">
                      Interfaces are pixel perfect designs
                    </span>
                  </li>
                  <li className="margin-15px-bottom">
                    <i
                      className="feather icon-feather-arrow-right-circle text-large text-yellow margin-10px-right"
                      aria-hidden="true"
                    />
                    <span className="text-extra-dark-gray alt-font">
                      We add creative ideas to your projects
                    </span>
                  </li>
                </ul>
                <a
                  href="/contact-us"
                  className="btn btn-medium btn-fast-yellow btn-round-edge"
                >
                  Get Started Now
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* end section */}
        
        {/* start section */}
        <section className="wow animate__fadeIn pt-md-0 pb-md-0 overflow-visible sm-border-bottom sm-border-color-medium-gray">
          <div className="container">
            <div className="row align-items-center justify-content-center no-margin-lr overlap-section">
              <div className="col-12 box-shadow-medium bg-white align-items-center padding-4-rem-all sm-no-padding-tb sm-padding-15px-lr sm-box-shadow-none">
                <div className="row row-cols-1 row-cols-md-3">
                  {/* start counter item */}
                  <div className="col border-right border-color-medium-gray text-center sm-no-border-right sm-margin-30px-bottom">
                    <h4
                      className="text-fast-blue alt-font font-weight-500 mb-xl-0 d-inline-block align-middle w-130px lg-w-100 counter"
                      data-speed={2000}
                      data-to={1227}
                    />
                    <div className="d-inline-block align-middle text-center text-xl-start">
                      <span className="alt-font text-extra-dark-gray font-weight-500 line-height-14px d-block ">
                        Winning awards
                      </span>
                      <span className="alt-font">For creative applications</span>
                    </div>
                  </div>
                  {/* end counter item */}
                  {/* start counter item */}
                  <div className="col border-right border-color-medium-gray text-center sm-no-border-right sm-margin-30px-bottom">
                    <h4
                      className="text-fast-blue alt-font font-weight-500 mb-xl-0 d-inline-block align-middle w-130px lg-w-100 counter"
                      data-speed={2000}
                      data-to={1947}
                    />
                    <div className="d-inline-block align-middle text-center text-xl-start">
                      <span className="alt-font text-extra-dark-gray font-weight-500 line-height-14px d-block">
                        Working hours
                      </span>
                      <span className="alt-font">Desperate for work</span>
                    </div>
                  </div>
                  {/* end counter item */}
                  {/* start counter item */}
                  <div className="col text-center">
                    <h4
                      className="text-fast-blue alt-font font-weight-500 mb-xl-0 d-inline-block align-middle w-130px lg-w-100 counter"
                      data-speed={2000}
                      data-to={1587}
                    />
                    <div className="d-inline-block align-middle text-center text-xl-start">
                      <span className="alt-font text-extra-dark-gray font-weight-500 line-height-14px d-block">
                        Happy clients
                      </span>
                      <span className="alt-font">We love clients</span>
                    </div>
                  </div>
                  {/* end counter item */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end section */}
        {/* start section */}
        <section className="wow animate__fadeIn">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-6 text-center margin-4-half-rem-bottom sm-margin-3-rem-bottom">
                <span className="alt-font text-extra-medium">
                  The designer team
                </span>
                <h5 className="alt-font text-extra-dark-gray font-weight-500">
                  Creative people
                </h5>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-3 row-cols-sm-1 justify-content-center">
              <Team/>
              </div>
            <div className="bg-medium-light-gray margin-6-rem-bottom margin-3-rem-top w-100 h-1px" />
            <div className="row align-items-center justify-content-center">
              <div
                className="col-12 col-xl-7 col-md-8 col-sm-10 text-center text-md-start sm-margin-30px-bottom wow animate__fadeIn"
                data-wow-delay="0.1s"
              >
                <h6 className="alt-font text-extra-dark-gray font-weight-500 mb-0 md-w-90 sm-w-100">
                  <strong className="text-decoration-underline">
                    Creative developers,
                  </strong>{" "}
                  clever thinkers and marketing superheroes apply for work with
                  us.
                </h6>
              </div>
              <div
                className="col-12 col-xl-5 col-md-4 text-center text-md-end wow animate__fadeIn"
                data-wow-delay="0.2s"
              > 
              <a href="/contact-us">
                <button className="join-team">
                  Join the team  </button>
                  <span className="bg-yellow" />
                  </a>
              </div>
            </div>
          </div>
        </section>
      </AppLayer>
    );
  }
}

export default AboutUs;
