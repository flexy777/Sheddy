import React, { Component } from "react";
class SeventhSection extends Component {
  render() {
    return (
      <section className="bg-light-gray">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-sm-6 text-center text-sm-start wow animate__fadeIn">
              <h4 className="alt-font font-weight-600 text-extra-dark-gray mb-0 letter-spacing-minus-1px">
                Interesting articles
              </h4>
            </div>
            <div className="col-12 col-sm-6 text-center text-sm-end wow animate__fadeIn">
              <a
                href="blog-masonry.html"
                className="btn btn-link btn-extra-large text-extra-dark-gray"
              >
                all articles
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-12 blog-content px-sm-0 margin-7-rem-top md-margin-4-rem-top">
              <ul className="blog-masonry blog-wrapper grid grid-loading grid-3col xl-grid-3col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large">
                <li className="grid-sizer" />
                {/* start blog item */}
                <li className="grid-item wow animate__fadeIn">
                  <div className="blog-post border-radius-5px bg-white">
                    <div className="d-flex justify-content-center align-items-center font-weight-500 padding-30px-lr padding-15px-tb">
                      <a
                        href="blog-masonry.html"
                        className="text-small me-auto text-slate-blue text-extra-dark-gray-hover"
                      >
                        24 February 2020
                      </a>
                      <a
                        href="blog-post-layout-01.html"
                        className="blog-like text-extra-small text-extra-dark-gray-hover"
                      >
                        <i className="far fa-heart" />
                        <span>28</span>
                      </a>
                      <a
                        href="blog-post-layout-01.html"
                        className="blog-comment text-extra-small text-extra-dark-gray-hover"
                      >
                        <i className="far fa-comment" />
                        <span>52</span>
                      </a>
                    </div>
                    <div className="blog-post-image">
                      <a href="blog-post-layout-01.html" title>
                        <img
                          src="images/home-design-agency-img-01.jpg"
                          alt=""
                        />
                      </a>
                      <div className="alt-font blog-category">
                        <a
                          href="blog-masonry.html"
                          className="text-uppercase text-extra-dark-gray-hover"
                        >
                          Fashion
                        </a>
                      </div>
                    </div>
                    <div className="post-details padding-3-rem-lr padding-2-half-rem-tb lg-padding-2-rem-all md-padding-2-half-rem-tb md-padding-3-rem-lr">
                      <a
                        href="blog-post-layout-01.html"
                        className="alt-font font-weight-500 text-extra-medium text-extra-dark-gray text-extra-dark-gray-hover d-block margin-15px-bottom"
                      >
                        Recognizing the need is the primary condition design
                      </a>
                      <p>
                        Lorem ipsum is simply dummy text of printing and
                        typesetting industry lorem ipsum been dummy...
                      </p>
                    </div>
                  </div>
                </li>
                {/* end blog item */}
                {/* start blog item */}
                <li
                  className="grid-item wow animate__fadeIn"
                  data-wow-delay="0.2s"
                >
                  <div className="blog-post border-radius-5px bg-white">
                    <div className="d-flex justify-content-center align-items-center font-weight-500 padding-30px-lr padding-15px-tb">
                      <a
                        href="blog-masonry.html"
                        className="text-small me-auto text-slate-blue text-extra-dark-gray-hover"
                      >
                        10 February 2020
                      </a>
                      <a
                        href="blog-post-layout-02.html"
                        className="blog-like text-extra-small text-extra-dark-gray-hover"
                      >
                        <i className="far fa-heart" />
                        <span>28</span>
                      </a>
                      <a
                        href="blog-post-layout-02.html"
                        className="blog-comment text-extra-small text-extra-dark-gray-hover"
                      >
                        <i className="far fa-comment" />
                        <span>40</span>
                      </a>
                    </div>
                    <div className="blog-post-image">
                      <a href="blog-post-layout-02.html" title>
                        <img
                          src="images/home-design-agency-img-02.jpg"
                          alt=""
                        />
                      </a>
                      <div className="alt-font blog-category">
                        <a
                          href="blog-masonry.html"
                          className="text-uppercase text-extra-dark-gray-hover"
                        >
                          Lifestyle
                        </a>
                      </div>
                    </div>
                    <div className="post-details padding-3-rem-lr padding-2-half-rem-tb lg-padding-2-rem-all md-padding-2-half-rem-tb md-padding-3-rem-lr">
                      <a
                        href="blog-post-layout-02.html"
                        className="alt-font font-weight-500 text-extra-medium text-extra-dark-gray text-extra-dark-gray-hover d-block margin-20px-bottom"
                      >
                        Computers are to design as microwaves are to cooking
                      </a>
                      <p>
                        Lorem ipsum is simply dummy text of printing and
                        typesetting industry lorem ipsum been dummy...
                      </p>
                    </div>
                  </div>
                </li>
                {/* end blog item */}
                {/* start blog item */}
                <li
                  className="grid-item wow animate__fadeIn"
                  data-wow-delay="0.4s"
                >
                  <div className="blog-post border-radius-5px bg-white">
                    <div className="d-flex justify-content-center align-items-center font-weight-500 padding-30px-lr padding-15px-tb">
                      <a
                        href="blog-masonry.html"
                        className="text-small me-auto text-slate-blue text-extra-dark-gray-hover"
                      >
                        18 January 2020
                      </a>
                      <a
                        href="blog-post-layout-03.html"
                        className="blog-like text-extra-small text-extra-dark-gray-hover"
                      >
                        <i className="far fa-heart" />
                        <span>30</span>
                      </a>
                      <a
                        href="blog-post-layout-03.html"
                        className="blog-comment text-extra-small text-extra-dark-gray-hover"
                      >
                        <i className="far fa-comment" />
                        <span>42</span>
                      </a>
                    </div>
                    <div className="blog-post-image">
                      <a href="blog-post-layout-03.html" title>
                        <img
                          src="images/home-design-agency-img-03.jpg"
                          alt=""
                        />
                      </a>
                      <div className="alt-font blog-category">
                        <a
                          href="blog-masonry.html"
                          className="text-uppercase text-extra-dark-gray-hover"
                        >
                          Design
                        </a>
                      </div>
                    </div>
                    <div className="post-details padding-3-rem-lr padding-2-half-rem-tb lg-padding-2-rem-all md-padding-2-half-rem-tb md-padding-3-rem-lr">
                      <a
                        href="blog-post-layout-03.html"
                        className="alt-font font-weight-500 text-extra-medium text-extra-dark-gray text-extra-dark-gray-hover d-block margin-20px-bottom"
                      >
                        Fashion and interior design are one and the same
                      </a>
                      <p>
                        Lorem ipsum is simply dummy text of printing and
                        typesetting industry lorem ipsum been dummy...
                      </p>
                    </div>
                  </div>
                </li>
                {/* end blog item */}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SeventhSection;
