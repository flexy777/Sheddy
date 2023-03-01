import React, { Component } from "react";
class Footer extends Component {
  render() {
    return (
      <footer className="padding-six-tb xs-padding-thirteen-tb footer-design-agency border-top border-width-1px border-color-medium-gray footer-sticky bg-black">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-3 order-3 order-lg-1 text-center text-lg-start last-paragraph-no-margin md-margin-25px-top">
              <a
                href="#"
                className="footer-logo margin-20px-bottom d-block"
              >
                <img
                  src="images/btech1.jpg"
                  data-at2x="images/btech1.jpg"
                  alt=""
                />
              </a>
              <p className>
               © Copyright 2021{" "} </p>
             
            </div>
            <div className="col-12 col-md-6 order-1 order-lg-2 text-center text-md-start text-lg-center sm-margin-50px-bottom xs-margin-30px-bottom">
              <span className="line-height-normal d-block margin-25px-bottom md-w-80 sm-w-100">
                <span className="font-weight-500 text-white">
                  Newsletter sign-up.
                </span>{" "}
                Get monthly updates and resources.
              </span>
              <div className="newsletter-style-03 position-relative w-75 mx-auto mx-md-0 mx-lg-auto xs-w-95">
                <form
                  action="https://lithohtml.themezaa.com/email-templates/subscribe-newsletter.php"
                  method="post"
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    className="small-input border-color-medium-gray m-0 required"
                  />
                  <input type="hidden" name="redirect" defaultValue />
                  <button className="btn submit" type="submit">
                    <i className="feather icon-feather-mail text-extra-dark-gray icon-extra-small m-0" />
                  </button>
                  <div className="form-results position-absolute d-none" />
                </form>
              </div>
            </div>
            <div className="col-12 col-lg-3 col-md-6 order-2 order-lg-3 text-center text-md-end">
              <div className="social-icon-style-12 margin-10px-bottom">
                <span className="line-height-normal d-block margin-15px-bottom">
                  Connect with social
                </span>
                <ul className="extra-small-icon">
                  <li>
                    <a
                      className="facebook"
                      href="https://www.facebook.com/"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-f text-yellow" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="dribbble"
                      href="http://www.dribbble.com/"
                      target="_blank"
                    >
                      <i className="fab fa-dribbble text-yellow" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="twitter"
                      href="http://www.twitter.com/"
                      target="_blank"
                    >
                      <i className="fab fa-twitter text-yellow" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="instagram"
                      href="http://www.instagram.com/"
                      target="_blank"
                    >
                      <i className="fab fa-instagram text-yellow" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
