import React, { Component } from "react";
import AppLayer from "./AppLayer";

class ContactUs extends Component {
  render() {
    return (
      <AppLayer>
        <section className="bg-yellow">
    <div className="container">
      <div className="d-flex flex-column flex-md-row justify-content-end extra-small-screen align-items-end">
        <div className="w-100 w-md-50 page-title-extra-small">
          <h1 className="alt-font text-extra-dark-gray position-relative padding-90px-left padding-15px-right sm-padding-55px-left mb-md-0 sm-margin-20px-bottom"><span className="page-title-separator-line bg-black w-70px sm-w-40px" />Contact us</h1>
        </div>
        <div className="w-100 w-md-50">
          <h6 className="alt-font font-weight-300 text-extra-dark-gray mb-0">We look forward to hearing more about your needs and making your next software project a success. Contact us now and we guarantee to get back to you as soon as possible.</h6>
        </div>
      </div>
    </div>
  </section>
  {/* end page title */} 
  {/* start section */}
  <section className="bg-black">
    <div className="container">
      <div className="row align-items-end">
        <div className="col-12 col-lg-6 col-md-4 sm-margin-30px-bottom">
          <h5 className="alt-font w-50 text-yellow font-weight-500 mb-0 lg-w-65 md-w-100">How can we help you today?</h5>
        </div>
        <div className="col-12 col-lg-6 col-md-8">
          <div className="row">
            <div className="col-12 col-sm-6 xs-margin-30px-bottom"> 
              <span className="alt-font d-block text-yellow font-weight-500 margin-10px-bottom">Abuja</span>
              <p className="w-80 margin-5px-bottom lg-w-90">Plot 576 Independence Ave, Central Business District 900103, Abuja</p>
              <span className="d-block margin-10px-bottom">Tel: +234 909 426 7360</span>
              <a href="https://www.google.com/maps/place/The+Boolean+Technologies+Nig+Ltd/@9.0398707,7.4723841,15z/data=!4m5!3m4!1s0x0:0x4a445dad6c5a0a80!8m2!3d9.0398707!4d7.4723841" target="_blank" className="text-uppercase text-small text-yellow font-weight-500 text-decoration-line-bottom">View on google map</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end section */}
  {/* start section */}
  <section className="big-section wow animate__fadeIn">
    <div className="container">
      <div className="row align-items-end justify-content-center">
        <div className="col-12 col-lg-5 col-md-8 md-margin-50px-bottom">
          <div className="feature-box feature-box-left-icon-middle padding-4-rem-all bg-yellow overflow-hidden background-position-top background-no-repeat lg-padding-3-rem-lr md-padding-5-rem-all xs-padding-3-half-rem-all" style={{backgroundImage: 'url("images/quotes-01.png")'}}>
            <div className="feature-box-icon margin-25px-right xs-margin-15px-right">
              <img className="border-radius-100 w-80px xs-w-50px" src="images/user-01.jpg" alt="" />
            </div>
            <div className="feature-box-content">
              <div className="text-large text-black alt-font font-weight-500 w-90">More comfortable talking with us?</div>
            </div>
            <p className="margin-30px-top margin-15px-bottom w-80 lg-w-100 text-black">Schedule a 15 minute intro call with us. He'll answer your questions and discuss.</p>
            <a href="#" className="text-small text-extra-dark-gray font-weight-500 text-decoration-line-bottom text-uppercase">Pick a schedule</a>
          </div>
        </div>
        <div className="col-12 col-lg-6 offset-lg-1 col-md-8">
          <h4 className="alt-font text-black font-weight-600">Get in touch with us</h4>
          <form action="email-templates/contact-form.php" method="post" className="alt-font text-extra-dark-gray">
            <input className="input-border-bottom border-color-extra-dark-gray bg-transparent placeholder-dark large-input px-0 margin-25px-bottom border-radius-0px required" type="text" name="name" placeholder="Your name" />
            <input className="input-border-bottom border-color-extra-dark-gray bg-transparent placeholder-dark large-input px-0 margin-25px-bottom border-radius-0px required" type="email" name="email" placeholder="Your email address" />
            <input className="input-border-bottom border-color-extra-dark-gray bg-transparent placeholder-dark large-input px-0 margin-25px-bottom border-radius-0px" type="tel" name="phone" placeholder="Mobile no" />
            <textarea className="input-border-bottom border-color-extra-dark-gray bg-transparent placeholder-dark large-input px-0 margin-35px-bottom border-radius-0px" name="comment" rows={5} placeholder="How can we help you?" defaultValue={""} />
            <div className="g-recaptcha margin-35px-bottom" data-sitekey="6LfJf98bAAAAAGC26hfKyd2Ptddbs9xYm4mCNeLx" />
            <input type="hidden" name="redirect" defaultValue />
            <button className="btn btn-medium btn-dark-gray mb-0 submit" type="submit">send message</button>
            <div className="form-results d-none" />
          </form>
        </div>
      </div>
    </div>
  </section>
  {/* end section */}
  {/* start map section */}
  <section className="no-padding-tb wow animate__fadeIn">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 px-0">
          <div className="map-style-3 h-500px xs-h-300px">
          <iframe classname="w-100 h-100 filter-grayscale-100" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15761.04702017564!2d7.4723841!3d90398707!3m2!1i1024!2i768!4f131!3m3!1m2!1s0x0%3A0x4a445dad6c5a0a80!2sThe%20Boolean%20Technologies%20Nig%20Ltd!5e0!3m2!1sen!2sng!4v1634043314606!5m2!1sen!2sng" style={{border: 0}} allowFullScreen loading="lazy" width="100%" height={500}>
</iframe>          
            </div>
        </div>
      </div>
    </div>
  </section>
  {/* end map section */}
  {/* start section */}
  <section className="half-section">
    <div className="container">
      <div className="row justify-content-center">
        {/* start feature box item*/}
        <div className="col-12 col-sm-auto sm-margin-15px-bottom wow animate__fadeIn" data-wow-delay="0.2s">
          <div className="d-flex justify-content-center align-items-center padding-15px-lr h-100">
            <i className="feather icon-feather-headphones align-middle icon-extra-small text-gradient-magenta-orange margin-10px-right" />
            <span className="text-extra-dark-gray alt-font text-medium">+234 909 426 7360</span>
          </div>
        </div>
        {/* end feature box item*/}
        {/* start feature box item*/}
        <div className="col-12 col-sm-auto sm-margin-15px-bottom wow animate__fadeIn" data-wow-delay="0.4s">
          <div className="d-flex justify-content-center align-items-center padding-15px-lr h-100">
            <i className="feather icon-feather-mail align-middle icon-extra-small text-gradient-magenta-orange margin-10px-right" />
            <a href="mailto:no-reply@domain.com" className="text-extra-dark-gray alt-font text-medium">booleantech@gmail.com</a>
          </div>
        </div>
        {/* end feature box item*/}
        {/* start feature box item*/}
        <div className="col-12 col-sm-auto wow animate__fadeIn" data-wow-delay="0.6s">
          <div className="d-flex justify-content-center align-items-center padding-15px-lr h-100">
            <i className="feather icon-feather-globe align-middle icon-extra-small text-gradient-magenta-orange margin-10px-right" />
            <a href="#" className="text-extra-dark-gray alt-font text-medium">www.booleantech.com</a>
          </div>
        </div>
        {/* end feature box item*/}
      </div>  
    </div>
  </section>
  {/* end section */}
      </AppLayer>
     
    );
  }
}

export default ContactUs;
