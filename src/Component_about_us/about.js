import React, { Component } from "react";
import Header from "../Components2/header";
class AboutApp extends React.Component {
  render() {
    return (
      <>
        <div>
        <Header />
          {/* end header */}
          {/* start page title */}
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
                  <h2 className="text-white alt-font font-weight-500 w-55 md-w-65 sm-w-80 center-col xs-w-100 letter-spacing-minus-1px line-height-50 sm-line-height-45 xs-line-height-30 no-margin-bottom">
                    we are a creative design studio
                  </h2>
                </div>
                <div className="down-section text-center">
                  <a href="#about" className="section-link">
                    <i className="ti-arrow-down icon-extra-small text-white bg-transparent-black padding-15px-all xs-padding-10px-all border-radius-100" />
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
                  <div className="justify-content-center w-100 d-flex flex-column bg-fast-blue padding-5-half-rem-lr lg-padding-3-rem-lr md-padding-4-rem-all">
                    <span className="text-extra-large alt-font font-weight-500 text-white margin-20px-bottom d-block">
                      We started this company 10 years ago out of a desire to
                      design and build amazing things.
                    </span>
                    <p className="text-white opacity-7">
                      Lorem ipsum is simply dummy text of the printing and
                      typeing industry. Lorem ipsum has been the industry's
                      standard dummy text ever since text.
                    </p>
                    <a
                      href="our-services.html"
                      className="btn btn-large btn-link text-white text-white-hover align-self-start"
                    >
                      Company overview
                    </a>
                  </div>
                </div>
                <div className="col-12 col-lg-4 col-md-6">
                  <img src="images/about-us-img-01.jpg" alt="" />
                  <div className="bg-white padding-3-half-rem-lr padding-3-rem-tb lg-padding-2-rem-all md-padding-2-half-rem-all sm-padding-4-rem-all last-paragraph-no-margin">
                    <span className="alt-font text-extra-dark-gray font-weight-500 margin-10px-bottom d-block">
                      About digital agency
                    </span>
                    <p>
                      Lorem ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem ipsum has been the industry's
                      standard dummy text.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* end section */}
          {/* start section */}
          <section className="wow animate__fadeIn">
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-12 col-xl-7 col-lg-8 col-md-7 col-sm-10 text-center text-md-start sm-margin-30px-bottom">
                  <h5 className="alt-font text-extra-dark-gray font-weight-500 mb-0">
                    <strong className="text-fast-blue text-decoration-underline">
                      25 years
                    </strong>{" "}
                    we have created websites for global brands. Our success
                    story.
                  </h5>
                </div>
                <div className="col-12 col-xl-3 offset-xl-2 col-lg-4 col-md-5 text-center text-md-end">
                  <a
                    href="https://www.youtube.com/watch?v=g0f_BRYJLJE"
                    className="popup-youtube btn btn-extra-large btn-gradient-fast-blue-purple btn-round-edge"
                  >
                    <i
                      className="fa fa-arrow-right line-icon-Video-5 icon-large d-inline-block no-margin-left margin-15px-right align-middle"
                      aria-hidden="true"
                    />{" "}
                    <div className="d-inline-block text-start align-middle">
                      <span className="opacity-6 text-medium d-block font-weight-500 line-height-15px">
                        Story video
                      </span>
                      Watch
                    </div>
                  </a>
                </div>
              </div>
              <div className="row row-cols-1 row-cols-md-4 row-cols-sm-2 client-logo-style-01 align-items-center margin-7-half-rem-top sm-margin-5-rem-top">
                {/* start client item */}
                <div className="col text-center margin-30px-bottom sm-margin-15px-bottom wow animate__fadeIn">
                  <div className="client-box padding-15px-all border border-color-dark-gray">
                    <a href="#">
                      <img
                        className="client-box-image"
                        src="images/client-logo-35.png"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                {/* end client item */}
                {/* start client item */}
                <div
                  className="col text-center margin-30px-bottom sm-margin-15px-bottom wow animate__fadeIn"
                  data-wow-delay="0.2s"
                >
                  <div className="client-box padding-15px-all border border-color-dark-gray">
                    <a href="#">
                      <img
                        className="client-box-image"
                        src="images/client-logo-37.png"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                {/* end client item */}
                {/* start client item */}
                <div
                  className="col text-center margin-30px-bottom sm-margin-15px-bottom wow animate__fadeIn"
                  data-wow-delay="0.4s"
                >
                  <div className="client-box padding-15px-all border border-color-dark-gray">
                    <a href="#">
                      <img
                        className="client-box-image"
                        src="images/client-logo-33.png"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                {/* end client item */}
                {/* start client item */}
                <div
                  className="col text-center margin-30px-bottom sm-margin-15px-bottom wow animate__fadeIn"
                  data-wow-delay="0.6s"
                >
                  <div className="client-box padding-15px-all border border-color-dark-gray">
                    <a href="#">
                      <img
                        className="client-box-image"
                        src="images/client-logo-38.png"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                {/* end client item */}
                {/* start client item */}
                <div className="col text-center sm-margin-15px-bottom wow animate__fadeIn">
                  <div className="client-box padding-15px-all border border-color-dark-gray">
                    <a href="#">
                      <img
                        className="client-box-image"
                        src="images/client-logo-39.png"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                {/* end client item */}
                {/* start client item */}
                <div
                  className="col text-center sm-margin-15px-bottom wow animate__fadeIn"
                  data-wow-delay="0.2s"
                >
                  <div className="client-box padding-15px-all border border-color-dark-gray">
                    <a href="#">
                      <img
                        className="client-box-image"
                        src="images/client-logo-34.png"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                {/* end client item */}
                {/* start client item */}
                <div
                  className="col text-center xs-margin-15px-bottom wow animate__fadeIn"
                  data-wow-delay="0.4s"
                >
                  <div className="client-box padding-15px-all border border-color-dark-gray">
                    <a href="#">
                      <img
                        className="client-box-image"
                        src="images/client-logo-40.png"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                {/* end client item */}
                {/* start client item */}
                <div
                  className="col text-center wow animate__fadeIn"
                  data-wow-delay="0.6s"
                >
                  <div className="client-box padding-15px-all border border-color-dark-gray">
                    <a href="#">
                      <img
                        className="client-box-image"
                        src="images/client-logo-36.png"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                {/* end client item */}
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
                    We offer a full range of digital marketing services!
                  </h5>
                </div>
              </div>
              <div className="row justify-content-center">
                {/* start feature box item */}
                <div className="col-12 col-lg-6 col-md-9 margin-30px-bottom xs-margin-15px-bottom">
                  <div className="feature-box h-100 feature-box-left-icon border-radius-5px bg-white box-shadow-small feature-box-dark-hover overflow-hidden padding-4-rem-all">
                    <div className="feature-box-icon">
                      <i className="line-icon-Navigation-LeftWindow icon-medium text-fast-blue" />
                    </div>
                    <div className="feature-box-content last-paragraph-no-margin">
                      <span className="alt-font font-weight-500 margin-10px-bottom d-block text-extra-dark-gray">
                        Powerfull theme options
                      </span>
                      <p>
                        Lorem ipsum is simply dummy text of the printing
                        typesetting lorem ipsum been text. Adipiscing eiusmod
                        tempor incididunt magna.
                      </p>
                    </div>
                    <div className="feature-box-overlay bg-gradient-fast-blue-purple" />
                  </div>
                </div>
                {/* end feature box item */}
                {/* start feature box item */}
                <div className="col-12 col-lg-6 col-md-9 margin-30px-bottom xs-margin-15px-bottom">
                  <div className="feature-box h-100 feature-box-left-icon border-radius-5px bg-white box-shadow-small feature-box-dark-hover overflow-hidden padding-4-rem-all">
                    <div className="feature-box-icon">
                      <i className="line-icon-Cursor-Click2 icon-medium text-fast-blue" />
                    </div>
                    <div className="feature-box-content last-paragraph-no-margin">
                      <span className="alt-font font-weight-500 margin-10px-bottom d-block text-extra-dark-gray">
                        Unlimited layouts and styles
                      </span>
                      <p>
                        Lorem ipsum is simply dummy text of the printing
                        typesetting lorem ipsum been text. Adipiscing eiusmod
                        tempor incididunt magna.
                      </p>
                    </div>
                    <div className="feature-box-overlay bg-gradient-fast-blue-purple" />
                  </div>
                </div>
                {/* end feature box item */}
                {/* start feature box item */}
                <div className="col-12 col-lg-6 col-md-9 md-margin-30px-bottom xs-margin-15px-bottom">
                  <div className="feature-box h-100 feature-box-left-icon border-radius-5px bg-white box-shadow-small feature-box-dark-hover overflow-hidden padding-4-rem-all">
                    <div className="feature-box-icon">
                      <i className="line-icon-Like-2 icon-medium text-fast-blue" />
                    </div>
                    <div className="feature-box-content last-paragraph-no-margin">
                      <span className="alt-font font-weight-500 margin-10px-bottom d-block text-extra-dark-gray">
                        Developing an effective strategy
                      </span>
                      <p>
                        Lorem ipsum is simply dummy text of the printing
                        typesetting lorem ipsum been text. Adipiscing eiusmod
                        tempor incididunt magna.
                      </p>
                    </div>
                    <div className="feature-box-overlay bg-gradient-fast-blue-purple" />
                  </div>
                </div>
                {/* end feature box item */}
                {/* start feature box item */}
                <div className="col-12 col-lg-6 col-md-9">
                  <div className="feature-box h-100 feature-box-left-icon border-radius-5px bg-white box-shadow-small feature-box-dark-hover overflow-hidden padding-4-rem-all">
                    <div className="feature-box-icon">
                      <i className="line-icon-One-FingerTouch icon-medium text-fast-blue" />
                    </div>
                    <div className="feature-box-content last-paragraph-no-margin">
                      <span className="alt-font font-weight-500 margin-10px-bottom d-block text-extra-dark-gray">
                        Automated testing and support
                      </span>
                      <p>
                        Lorem ipsum is simply dummy text of the printing
                        typesetting lorem ipsum been text. Adipiscing eiusmod
                        tempor incididunt magna.
                      </p>
                    </div>
                    <div className="feature-box-overlay bg-gradient-fast-blue-purple" />
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
                    With years of experience in the website design and
                    development industry ThemeZaa pride ourselves on creating
                    unique, creative &amp; quality designs that are developed
                    upon the latest coding.
                  </p>
                  <ul className="p-0 list-style-02 margin-2-rem-top margin-3-rem-bottom">
                    <li className="margin-15px-bottom">
                      <i
                        className="feather icon-feather-arrow-right-circle text-large text-fast-blue margin-10px-right"
                        aria-hidden="true"
                      />
                      <span className="text-extra-dark-gray alt-font">
                        Beautiful and easy to understand animations
                      </span>
                    </li>
                    <li className="margin-15px-bottom">
                      <i
                        className="feather icon-feather-arrow-right-circle text-large text-fast-blue margin-10px-right"
                        aria-hidden="true"
                      />
                      <span className="text-extra-dark-gray alt-font">
                        Theme advantages are pixel perfect design
                      </span>
                    </li>
                    <li className="margin-15px-bottom">
                      <i
                        className="feather icon-feather-arrow-right-circle text-large text-fast-blue margin-10px-right"
                        aria-hidden="true"
                      />
                      <span className="text-extra-dark-gray alt-font">
                        Find more creative ideas for your projects
                      </span>
                    </li>
                  </ul>
                  <a
                    href="contact-us-modern.html"
                    className="btn btn-medium btn-fast-blue btn-round-edge"
                  >
                    Get Started Now
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* end section */}
          {/* start section */}
          <section className="bg-light-gray wow animate__fadeIn">
            <div className="container">
              <div className="row justify-content-center">
                {/* start fancy text box item */}
                <div className="col-12 col-lg-4 col-md-9 md-margin-30px-bottom xs-margin-15px-bottom wow animate__fadeIn">
                  <div className="feature-box h-100 feature-box-left-icon-middle padding-4-rem-all bg-white box-shadow-small box-shadow-large-hover border-radius-8px overflow-hidden last-paragraph-no-margin lg-padding-2-half-rem-all md-padding-4-rem-all">
                    <div className="feature-box-icon margin-20px-right">
                      <i className="line-icon-Gear-2 icon-medium text-fast-blue" />
                    </div>
                    <div className="feature-box-content line-height-22px">
                      <div className="text-extra-dark-gray alt-font font-weight-500 line-height-20px">
                        Build websites
                      </div>
                      <span className="text-small alt-font">
                        Easy installation theme
                      </span>
                    </div>
                    <div className="bg-medium-light-gray margin-25px-top w-100 h-1px" />
                    <p className="margin-25px-top">
                      Lorem ipsum is simply dummy text of the printing
                      typesetting industry lorem ipsum has typesetting.
                    </p>
                    <h3 className="alt-font opacity-2 font-weight-500 letter-spacing-minus-2px position-absolute bottom-minus-20px sm-bottom-minus-15px right-50px m-0">
                      01
                    </h3>
                  </div>
                </div>
                {/* end fancy text box item */}
                {/* start fancy text box item */}
                <div
                  className="col-12 col-lg-4  col-md-9 md-margin-30px-bottom xs-margin-15px-bottom wow animate__fadeIn"
                  data-wow-delay="0.2s"
                >
                  <div className="feature-box h-100 feature-box-left-icon-middle padding-4-rem-all bg-white box-shadow-small box-shadow-large-hover border-radius-8px overflow-hidden last-paragraph-no-margin lg-padding-2-half-rem-all md-padding-4-rem-all">
                    <div className="feature-box-icon margin-20px-right">
                      <i className="line-icon-Transform icon-medium text-fast-blue" />
                    </div>
                    <div className="feature-box-content line-height-22px">
                      <div className="text-extra-dark-gray alt-font font-weight-500 line-height-20px">
                        Custom shortcodes
                      </div>
                      <span className="text-small alt-font">
                        Unlimited theme guide
                      </span>
                    </div>
                    <div className="bg-medium-light-gray margin-25px-top w-100 h-1px" />
                    <p className="margin-25px-top">
                      Lorem ipsum is simply dummy text of the printing
                      typesetting industry lorem ipsum has typesetting.
                    </p>
                    <h3 className="alt-font opacity-2 font-weight-500 letter-spacing-minus-2px position-absolute bottom-minus-20px sm-bottom-minus-15px right-50px m-0">
                      02
                    </h3>
                  </div>
                </div>
                {/* end fancy text box item */}
                {/* start fancy text box item */}
                <div
                  className="col-12 col-lg-4  col-md-9 wow animate__fadeIn"
                  data-wow-delay="0.4s"
                >
                  <div className="feature-box h-100 feature-box-left-icon-middle padding-4-rem-all bg-white box-shadow-small box-shadow-large-hover border-radius-8px overflow-hidden last-paragraph-no-margin lg-padding-2-half-rem-all md-padding-4-rem-all">
                    <div className="feature-box-icon margin-20px-right">
                      <i className="line-icon-Heart icon-medium text-fast-blue" />
                    </div>
                    <div className="feature-box-content line-height-22px">
                      <div className="text-extra-dark-gray alt-font font-weight-500 line-height-20px">
                        Theme advantages
                      </div>
                      <span className="text-small alt-font">
                        Fully optimised code
                      </span>
                    </div>
                    <div className="bg-medium-light-gray margin-25px-top w-100 h-1px" />
                    <p className="margin-25px-top">
                      Lorem ipsum is simply dummy text of the printing
                      typesetting industry lorem ipsum has typesetting.
                    </p>
                    <h3 className="alt-font opacity-2 font-weight-500 letter-spacing-minus-2px position-absolute bottom-minus-20px sm-bottom-minus-15px right-50px m-0">
                      03
                    </h3>
                  </div>
                </div>
                {/* end fancy text box item */}
              </div>
            </div>
          </section>
          {/* end section */}
          {/* start section */}
          <section className="bg-slate-blue overlap-height xs-no-padding wow animate__fadeIn">
            <div className="container xs-no-padding">
              <div className="row align-items-center overlap-gap-section no-margin-lr">
                <div
                  className="col-12 col-lg-6 align-self-lg-stretch p-0 cover-background md-h-400px wow animate__fadeIn"
                  style={{
                    backgroundImage: 'url("images/about-us-img-06.jpg")',
                  }}
                />
                <div
                  className="col-12 col-lg-6 p-0 text-center wow animate__fadeIn"
                  data-wow-delay="0.2s"
                >
                  <div className="bg-gradient-sky-blue-pink padding-6-rem-lr padding-7-rem-tb lg-padding-4-rem-lr lg-padding-5-rem-tb md-padding-5-rem-all">
                    <a
                      href="https://www.youtube.com/watch?v=g0f_BRYJLJE"
                      className="popup-youtube video-icon-box video-icon-large position-relative margin-50px-bottom d-block"
                    >
                      <span>
                        <span className="video-icon bg-white">
                          <i className="icon-simple-line-control-play text-gradient-light-purple-light-orange" />
                          <span className="video-icon-sonar">
                            <span className="video-icon-sonar-bfr bg-white opacity-7" />
                            <span className="video-icon-sonar-afr bg-white" />
                          </span>
                        </span>
                      </span>
                    </a>
                    <span className="text-extra-medium alt-font margin-20px-bottom d-block text-white opacity-7">
                      Powerful theme for creatives designer
                    </span>
                    <h5 className="alt-font text-white font-weight-500 margin-40px-bottom xs-margin-20px-bottom">
                      We design brand, digital experience that engage the right
                      customers{" "}
                    </h5>
                    <a
                      href="contact-us-simple.html"
                      className="btn btn-extra-large btn-link text-white text-extra-dark-gray-hover"
                    >
                      Get Started Now
                    </a>
                  </div>
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
                        <span className="alt-font">For creative design</span>
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
                {/* start team item */}
                <div
                  className="col team-style-02 text-center sm-margin-15px-bottom wow animate__fadeIn"
                  data-wow-delay="0.2s"
                >
                  <figure>
                    <div className="team-member-image border-radius-5px overflow-hidden">
                      <img alt="" src="images/about-team-01.jpg" />
                      <div className="team-member-details bg-transparent-gradient-light-purple-light-orange padding-2-half-rem-lr align-items-center justify-content-center d-flex flex-column">
                        <div className="text-white text-uppercase alt-font font-weight-500">
                          I am Creative
                        </div>
                        <div className="social-icon w-100 position-absolute bottom-40px left-0px">
                          <a
                            href="https://www.facebook.com/"
                            target="_blank"
                            className="icon-very-small text-white"
                          >
                            <i
                              aria-hidden="true"
                              className="fab fa-facebook-f"
                            />
                          </a>
                          <a
                            href="https://twitter.com/"
                            target="_blank"
                            className="icon-very-small text-white"
                          >
                            <i aria-hidden="true" className="fab fa-twitter" />
                          </a>
                          <a
                            href="https://www.dribbble.com"
                            target="_blank"
                            className="icon-very-small text-white"
                          >
                            <i aria-hidden="true" className="fab fa-dribbble" />
                          </a>
                          <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            className="icon-very-small text-white"
                          >
                            <i
                              aria-hidden="true"
                              className="fab fa-linkedin-in"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <figcaption className="team-member-position padding-35px-tb text-center">
                      <div className="text-extra-dark-gray alt-font line-height-18px text-medium text-uppercase font-weight-500">
                        Jemmy Watson
                      </div>
                      <span className="text-small text-uppercase">
                        Graphic Designer
                      </span>
                    </figcaption>
                  </figure>
                </div>
                {/* end team item */}
                {/* start team item */}
                <div
                  className="col team-style-02 text-center sm-margin-15px-bottom wow animate__fadeIn"
                  data-wow-delay="0.4s"
                >
                  <figure>
                    <div className="team-member-image border-radius-5px overflow-hidden">
                      <img alt="" src="images/about-team-03.jpg" />
                      <div className="team-member-details bg-transparent-gradient-light-purple-light-orange padding-2-half-rem-lr align-items-center justify-content-center d-flex flex-column">
                        <div className="text-white text-uppercase alt-font font-weight-500">
                          I am trendy
                        </div>
                        <div className="social-icon w-100 position-absolute bottom-40px left-0px">
                          <a
                            href="https://www.facebook.com/"
                            target="_blank"
                            className="icon-very-small text-white"
                          >
                            <i
                              aria-hidden="true"
                              className="fab fa-facebook-f"
                            />
                          </a>
                          <a
                            href="https://twitter.com/"
                            target="_blank"
                            className="icon-very-small text-white"
                          >
                            <i aria-hidden="true" className="fab fa-twitter" />
                          </a>
                          <a
                            href="https://www.dribbble.com"
                            target="_blank"
                            className="icon-very-small text-white"
                          >
                            <i aria-hidden="true" className="fab fa-dribbble" />
                          </a>
                          <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            className="icon-very-small text-white"
                          >
                            <i
                              aria-hidden="true"
                              className="fab fa-linkedin-in"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <figcaption className="team-member-position padding-35px-tb text-center">
                      <div className="text-extra-dark-gray alt-font line-height-18px text-medium text-uppercase font-weight-500">
                        Bryan Jonhson
                      </div>
                      <span className="text-small text-uppercase">
                        Operations Officer
                      </span>
                    </figcaption>
                  </figure>
                </div>
                {/* end team item */}
                {/* start team item */}
                <div
                  className="col team-style-02 text-center wow animate__fadeIn"
                  data-wow-delay="0.6s"
                >
                  <figure>
                    <div className="team-member-image border-radius-5px overflow-hidden">
                      <img alt="" src="images/about-team-02.jpg" />
                      <div className="team-member-details bg-transparent-gradient-light-purple-light-orange padding-2-half-rem-lr align-items-center justify-content-center d-flex flex-column">
                        <div className="text-white text-uppercase alt-font font-weight-500">
                          I am punctual
                        </div>
                        <div className="social-icon w-100 position-absolute bottom-40px left-0px">
                          <a
                            href="https://www.facebook.com/"
                            target="_blank"
                            className="icon-very-small text-white"
                          >
                            <i
                              aria-hidden="true"
                              className="fab fa-facebook-f"
                            />
                          </a>
                          <a
                            href="https://twitter.com/"
                            target="_blank"
                            className="icon-very-small text-white"
                          >
                            <i aria-hidden="true" className="fab fa-twitter" />
                          </a>
                          <a
                            href="https://www.dribbble.com"
                            target="_blank"
                            className="icon-very-small text-white"
                          >
                            <i aria-hidden="true" className="fab fa-dribbble" />
                          </a>
                          <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            className="icon-very-small text-white"
                          >
                            <i
                              aria-hidden="true"
                              className="fab fa-linkedin-in"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <figcaption className="team-member-position padding-35px-tb text-center">
                      <div className="text-extra-dark-gray alt-font line-height-18px text-medium text-uppercase font-weight-500">
                        Jeremy Dupont
                      </div>
                      <span className="text-small text-uppercase">
                        Web Developer
                      </span>
                    </figcaption>
                  </figure>
                </div>
                {/* end team item */}
              </div>
              <div className="bg-medium-light-gray margin-6-rem-bottom margin-3-rem-top w-100 h-1px" />
              <div className="row align-items-center justify-content-center">
                <div
                  className="col-12 col-xl-7 col-md-8 col-sm-10 text-center text-md-start sm-margin-30px-bottom wow animate__fadeIn"
                  data-wow-delay="0.1s"
                >
                  <h6 className="alt-font text-extra-dark-gray font-weight-500 mb-0 md-w-90 sm-w-100">
                    <strong className="text-decoration-underline">
                      Creative thinkers,
                    </strong>{" "}
                    clever developer and marketing superheroes apply for work
                    with us.
                  </h6>
                </div>
                <div
                  className="col-12 col-xl-5 col-md-4 text-center text-md-end wow animate__fadeIn"
                  data-wow-delay="0.2s"
                >
                  <a
                    href="contact-us-classic.html"
                    className="btn btn-large btn-round-edge btn-transparent-fast-blue btn-slide-right-bg"
                  >
                    Join the team
                    <span className="bg-fast-blue" />
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* end section */}
          {/* start footer */}
          <footer className="footer-dark bg-slate-blue">
            <div className="footer-top padding-five-tb lg-padding-eight-tb md-padding-50px-tb">
              <div className="container">
                <div className="row">
                  {/* start footer column */}
                  <div className="col-12 col-lg-3 col-sm-6 md-margin-40px-bottom xs-margin-25px-bottom">
                    <span className="alt-font font-weight-500 d-block text-white margin-20px-bottom xs-margin-10px-bottom">
                      Company
                    </span>
                    <ul>
                      <li>
                        <a href="about-us.html">About company</a>
                      </li>
                      <li>
                        <a href="our-services.html">Company services</a>
                      </li>
                      <li>
                        <a href="our-team.html">Job opportunities</a>
                      </li>
                      <li>
                        <a href="contact-us-classic.html">Contact us</a>
                      </li>
                    </ul>
                  </div>
                  {/* end footer column */}
                  {/* start footer column */}
                  <div className="col-12 col-lg-3 col-sm-6 md-margin-40px-bottom xs-margin-25px-bottom">
                    <span className="alt-font font-weight-500 d-block text-white margin-20px-bottom xs-margin-10px-bottom">
                      Customer
                    </span>
                    <ul>
                      <li>
                        <a href="faq.html">Client support</a>
                      </li>
                      <li>
                        <a href="pricing-packages.html">Pricing packages</a>
                      </li>
                      <li>
                        <a href="our-story.html">Company history</a>
                      </li>
                      <li>
                        <a href="our-process.html">Our process</a>
                      </li>
                    </ul>
                  </div>
                  {/* end footer column */}
                  {/* start footer column */}
                  <div className="col-12 col-lg-3 col-sm-6 xs-margin-25px-bottom">
                    <span className="alt-font font-weight-500 d-block text-white margin-20px-bottom xs-margin-10px-bottom">
                      Get in touch
                    </span>
                    <p className="w-85 margin-15px-bottom">
                      27 Eden walk eden centre, Orchard view, Paris, France
                    </p>
                    <div>
                      <i className="feather icon-feather-phone-call icon-very-small margin-10px-right text-white" />
                      +1 234 567 8910
                    </div>
                    <div>
                      <i className="feather icon-feather-mail icon-very-small margin-10px-right text-white" />
                      <a href="#">info@yourdomain.com</a>
                    </div>
                  </div>
                  {/* end footer column */}
                  {/* start footer column */}
                  <div className="col-12 col-lg-3 col-sm-6">
                    <span className="alt-font font-weight-500 d-block text-white margin-20px-bottom">
                      Follow us on Instagram
                    </span>
                    <div className="w-100 d-inline-block margin-10px-top">
                      <ul
                        className="instafeed-grid instafeed-wrapper grid grid-3col xl-grid-3col lg-grid-3col md-grid-3col sm-grid-3col xs-grid-3col gutter-small"
                        data-total={3}
                      >
                        <li className="grid-item">
                          <figure>
                            <a href="#" data-href="{{link}}" target="_blank">
                              <img
                                src="#"
                                data-src="{{image}}"
                                className="insta-image"
                                alt=""
                              />
                              <span className="insta-counts">
                                <i className="fab fa-instagram" />
                                {"{"}
                                {"{"}likes{"}"}
                                {"}"}
                              </span>
                            </a>
                          </figure>
                        </li>
                      </ul>
                      <a
                        className="alt-font text-extra-small text-uppercase font-weight-500 margin-20px-top d-inline-block"
                        href="https://www.instagram.com/"
                        target="_blank"
                      >
                        <i className="fab fa-instagram icon-extra-small align-middle margin-10px-right text-gradient-light-purple-light-orange" />
                        <span className="d-inline-block align-middle">
                          Follow instagram
                        </span>
                      </a>
                    </div>
                  </div>
                  {/* end footer column */}
                </div>
              </div>
            </div>
            <div className="footer-bottom padding-40px-tb border-top border-color-white-transparent">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-12 col-md-3 text-center text-md-start sm-margin-20px-bottom">
                    <a href="index.html" className="footer-logo">
                      <img
                        src="images/logo-white.png"
                        data-at2x="images/logo-white@2x.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="col-12 col-md-6 text-center last-paragraph-no-margin sm-margin-20px-bottom">
                    <p>
                      © 2021 Litho is Proudly Powered by{" "}
                      <a href="https://www.themezaa.com/" target="_blank">
                        ThemeZaa
                      </a>
                    </p>
                  </div>
                  <div className="col-12 col-md-3 text-center text-md-end">
                    <div className="social-icon-style-12">
                      <ul className="extra-small-icon light">
                        <li>
                          <a
                            className="facebook"
                            href="https://www.facebook.com/"
                            target="_blank"
                          >
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a
                            className="dribbble"
                            href="http://www.dribbble.com"
                            target="_blank"
                          >
                            <i className="fab fa-dribbble" />
                          </a>
                        </li>
                        <li>
                          <a
                            className="twitter"
                            href="http://www.twitter.com"
                            target="_blank"
                          >
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a
                            className="instagram"
                            href="http://www.instagram.com"
                            target="_blank"
                          >
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          {/* end footer */}
          {/* start scroll to top */}
          <a className="scroll-top-arrow" href="javascript:void(0);">
            <i className="feather icon-feather-arrow-up" />
          </a>
          {/* end scroll to top */}
        </div>
      </>
    );
  }
}

export default AboutApp;
