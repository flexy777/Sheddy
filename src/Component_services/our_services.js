import React, { Component } from "react";
class Services extends React.Component {
  render() {
    return (
      <>
          {/* start header */}
          <header>
            {/* start navigation */}
            <nav className="navbar top-space navbar-expand-lg navbar-light bg-white header-light navbar-boxed fixed-top header-reverse-scroll">
              <div className="container-fluid nav-header-container">
                <div className="col-auto col-sm-6 col-lg-2 me-auto ps-lg-0">
                  <a className="navbar-brand" href="index.html">
                    <img
                      src="images/logo-fast-blue-black.png"
                      data-at2x="images/logo-fast-blue-black@2x.png"
                      className="default-logo"
                      alt=""
                    />
                    <img
                      src="images/logo-fast-blue-black.png"
                      data-at2x="images/logo-fast-blue-black@2x.png"
                      className="alt-logo"
                      alt=""
                    />
                    <img
                      src="images/logo-fast-blue-black.png"
                      data-at2x="images/logo-fast-blue-black@2x.png"
                      className="mobile-logo"
                      alt=""
                    />
                  </a>
                </div>
                <div className="col-auto menu-order px-lg-0">
                  <button
                    className="navbar-toggler float-end"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-line" />
                    <span className="navbar-toggler-line" />
                    <span className="navbar-toggler-line" />
                    <span className="navbar-toggler-line" />
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav alt-font">
                      <li className="nav-item dropdown megamenu">
                        <a href="#" className="nav-link">
                          Home
                        </a>
                        <i
                          className="fa fa-angle-down dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-hidden="true"
                        />
                        <div
                          className="menu-back-div dropdown-menu megamenu-content"
                          role="menu"
                        >
                          <div className="d-lg-flex justify-content-center">
                            <ul className="d-lg-inline-block">
                              <li className="dropdown-header">Corporate</li>
                              <li>
                                <a href="home-startup.html">Startup</a>
                              </li>
                              <li>
                                <a href="home-business.html">Business</a>
                              </li>
                              <li>
                                <a href="home-corporate.html">Corporate</a>
                              </li>
                              <li>
                                <a href="home-finance.html">Finance</a>
                              </li>
                              <li>
                                <a href="home-application.html">Application</a>
                              </li>
                              <li>
                                <a href="home-consulting.html">Consulting</a>
                              </li>
                              <li>
                                <a href="home-digital-agency.html">
                                  Digital agency
                                </a>
                              </li>
                              <li>
                                <a href="home-seo-agency.html">SEO agency</a>
                              </li>
                              <li>
                                <a href="home-events-conference.html">
                                  Events &amp; conference
                                </a>
                              </li>
                              <li>
                                <a href="home-marketing-agency.html">
                                  Marketing agency
                                </a>
                              </li>
                            </ul>
                            <ul className="d-lg-inline-block">
                              <li className="dropdown-header">Specialized</li>
                              <li>
                                <a href="home-restaurant.html">Restaurant</a>
                              </li>
                              <li>
                                <a href="home-architecture.html">
                                  Architecture
                                </a>
                              </li>
                              <li>
                                <a href="home-hotel-resort.html">
                                  Hotel &amp; resort
                                </a>
                              </li>
                              <li>
                                <a href="home-travel-agency.html">
                                  Travel agency
                                </a>
                              </li>
                              <li>
                                <a href="home-yoga-meditation.html">
                                  Yoga &amp; meditation
                                </a>
                              </li>
                              <li>
                                <a href="home-gym-fitness.html">
                                  Gym &amp; fitness
                                </a>
                              </li>
                              <li>
                                <a href="home-spa-salon.html">Spa salon</a>
                              </li>
                              <li>
                                <a href="home-cafe.html">Cafe</a>
                              </li>
                              <li>
                                <a href="home-decor.html">Home decor</a>
                              </li>
                              <li>
                                <a href="home-dentist.html">Dentist</a>
                              </li>
                              <li>
                                <a href="home-interior-design.html">
                                  Interior design
                                </a>
                              </li>
                            </ul>
                            <ul className="d-lg-inline-block">
                              <li className="dropdown-header">Portfolio</li>
                              <li>
                                <a href="home-design-agency.html">
                                  Design agency
                                </a>
                              </li>
                              <li>
                                <a href="home-web-agency.html">Web agency</a>
                              </li>
                              <li>
                                <a href="home-creative-agency.html">
                                  Creative agency
                                </a>
                              </li>
                              <li>
                                <a href="home-freelancer.html">Freelancer</a>
                              </li>
                              <li>
                                <a href="home-branding-agency.html">
                                  Branding agency
                                </a>
                              </li>
                              <li>
                                <a href="home-photography.html">Photography</a>
                              </li>
                              <li>
                                <a href="home-personal-portfolio.html">
                                  Personal portfolio
                                </a>
                              </li>
                              <li>
                                <a href="home-vertical-portfolio.html">
                                  Vertical portfolio
                                </a>
                              </li>
                              <li>
                                <a href="home-interactive-portfolio.html">
                                  Interactive portfolio
                                </a>
                              </li>
                              <li>
                                <a href="home-split-portfolio.html">
                                  Split portfolio
                                </a>
                              </li>
                              <li>
                                <a href="home-creative-portfolio.html">
                                  Creative portfolio
                                </a>
                              </li>
                            </ul>
                            <ul className="d-lg-inline-block">
                              <li className="dropdown-header">Other</li>
                              <li>
                                <a href="home-furniture-shop.html">
                                  Furniture shop
                                </a>
                              </li>
                              <li>
                                <a href="home-fashion-shop.html">
                                  Fashion shop
                                </a>
                              </li>
                              <li>
                                <a href="home-magazine.html">Magazine</a>
                              </li>
                              <li>
                                <a href="home-lifestyle-blog.html">
                                  Lifestyle blog
                                </a>
                              </li>
                              <li>
                                <a href="home-classic-blog.html">
                                  Classic blog
                                </a>
                              </li>
                              <li>
                                <a href="home-blog-metro.html">Blog metro</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li className="nav-item dropdown simple-dropdown">
                        <a href="#" className="nav-link">
                          Pages
                        </a>
                        <i
                          className="fa fa-angle-down dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-hidden="true"
                        />
                        <ul className="dropdown-menu" role="menu">
                          <li className="dropdown">
                            <a
                              data-bs-toggle="dropdown"
                              href="javascript:void(0);"
                            >
                              About
                              <i className="fas fa-angle-right dropdown-toggle" />
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <a href="about-me.html">About me</a>
                              </li>
                              <li>
                                <a href="about-us.html">About us</a>
                              </li>
                              <li>
                                <a href="our-story.html">Our story</a>
                              </li>
                              <li>
                                <a href="who-we-are.html">Who we are</a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a
                              data-bs-toggle="dropdown"
                              href="javascript:void(0);"
                            >
                              Services
                              <i className="fas fa-angle-right dropdown-toggle" />
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <a href="our-services.html">Our services</a>
                              </li>
                              <li>
                                <a href="what-we-offers.html">What we offer</a>
                              </li>
                              <li>
                                <a href="our-process.html">Our process</a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a
                              data-bs-toggle="dropdown"
                              href="javascript:void(0);"
                            >
                              Contact
                              <i className="fas fa-angle-right dropdown-toggle" />
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <a href="contact-us-simple.html">
                                  Contact simple
                                </a>
                              </li>
                              <li>
                                <a href="contact-us-classic.html">
                                  Contact classic
                                </a>
                              </li>
                              <li>
                                <a href="contact-us-modern.html">
                                  Contact modern
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a
                              data-bs-toggle="dropdown"
                              href="javascript:void(0);"
                            >
                              Additional pages
                              <i className="fas fa-angle-right dropdown-toggle" />
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <a href="our-team.html">Our team</a>
                              </li>
                              <li>
                                <a href="latest-news.html">Latest news</a>
                              </li>
                              <li>
                                <a href="pricing-packages.html">
                                  Pricing packages
                                </a>
                              </li>
                              <li>
                                <a href="404.html">Error 404</a>
                              </li>
                              <li>
                                <a href="maintenance.html">Maintenance</a>
                              </li>
                              <li>
                                <a href="coming-soon.html">Coming soon</a>
                              </li>
                              <li>
                                <a href="coming-soon-v2.html">
                                  Coming soon - V2
                                </a>
                              </li>
                              <li>
                                <a href="faq.html">FAQ's</a>
                              </li>
                              <li>
                                <a href="search-result.html">Search result</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown simple-dropdown">
                        <a href="#" className="nav-link">
                          Portfolio
                        </a>
                        <i
                          className="fa fa-angle-down dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-hidden="true"
                        />
                        <ul className="dropdown-menu" role="menu">
                          <li className="dropdown">
                            <a
                              data-bs-toggle="dropdown"
                              href="javascript:void(0);"
                            >
                              Portfolio classic
                              <i className="fas fa-angle-right dropdown-toggle" />
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <a href="portfolio-classic-two-column.html">
                                  Classic 2 column
                                </a>
                              </li>
                              <li>
                                <a href="portfolio-classic-three-column.html">
                                  Classic 3 column
                                </a>
                              </li>
                              <li>
                                <a href="portfolio-classic-four-column.html">
                                  Classic 4 column
                                </a>
                              </li>
                              <li>
                                <a href="portfolio-classic-masonry.html">
                                  Classic masonry
                                </a>
                              </li>
                              <li>
                                <a href="portfolio-classic-metro.html">
                                  Classic metro
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a
                              data-bs-toggle="dropdown"
                              href="javascript:void(0);"
                            >
                              Portfolio boxed
                              <i className="fas fa-angle-right dropdown-toggle" />
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <a href="portfolio-boxed-two-column.html">
                                  Boxed 2 column
                                </a>
                              </li>
                              <li>
                                <a href="portfolio-boxed-three-column.html">
                                  Boxed 3 column
                                </a>
                              </li>
                              <li>
                                <a href="portfolio-boxed-four-column.html">
                                  Boxed 4 column
                                </a>
                              </li>
                              <li>
                                <a href="portfolio-boxed-masonry.html">
                                  Boxed masonry
                                </a>
                              </li>
                              <li>
                                <a href="portfolio-boxed-metro.html">
                                  Boxed metro
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a
                              data-bs-toggle="dropdown"
                              href="javascript:void(0);"
                            >
                              Portfolio colorful
                              <i className="fas fa-angle-right dropdown-toggle" />
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <a href="portfolio-colorful-two-column.html">
                                  Colorful 2 column
                                </a>
                              </li>
                              <li>
                                <a href="portfolio-colorful-three-column.html">
                                  Colorful 3 column
                                </a>
                              </li>
                              <li>
                                <a href="portfolio-colorful-four-column.html">
                                  Colorful 4 column
                                </a>
                              </li>
                              <li>
                                <a href="portfolio-colorful-masonry.html">
                                  Colorful masonry
                                </a>
                              </li>
                              <li>
                                <a href="portfolio-colorful-metro.html">
                                  Colorful metro
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a
                              data-bs-toggle="dropdown"
                              href="javascript:void(0);"
                            >
                              Portfolio bordered
                              <i className="fas fa-angle-right dropdown-toggle" />
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <a href="portfolio-bordered-two-column.html">
                                  Bordered 2 column
                                </a>
                              </li>
                              <li>
                                <a href="portfolio-bordered-three-column.html">
                                  Bordered 3 column
                                </a>
                              </li>
                              <li>
                                <a href="portfolio-bordered-four-column.html">
                                  Bordered 4 column
                                </a>
                              </li>
                              <li>
                                <a href="portfolio-bordered-masonry.html">
                                  Bordered masonry
                                </a>
                              </li>
                              <li>
                                <a href="portfolio-bordered-metro.html">
                                  Bordered metro
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a
                              data-bs-toggle="dropdown"
                              href="javascript:void(0);"
                            >
                              Portfolio overlay
                              <i className="fas fa-angle-right dropdown-toggle" />
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <a href="portfolio-overlay-two-column.html">
                                  Overlay 2 column
                                </a>
                              </li>
                              <li>
                                <a href="portfolio-overlay-three-column.html">
                                  Overlay 3 column
                                </a>
                              </li>
                              <li>
                                <a href="portfolio-overlay-four-column.html">
                                  Overlay 4 column
                                </a>
                              </li>
                              <li>
                                <a href="portfolio-overlay-masonry.html">
                                  Overlay masonry
                                </a>
                              </li>
                              <li>
                                <a href="portfolio-overlay-metro.html">
                                  Overlay metro
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a
                              data-bs-toggle="dropdown"
                              href="javascript:void(0);"
                            >
                              Portfolio switch image
                              <i className="fas fa-angle-right dropdown-toggle" />
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <a href="portfolio-switch-image-two-column.html">
                                  Switch image 2 column
                                </a>
                              </li>
                              <li>
                                <a href="portfolio-switch-image-three-column.html">
                                  Switch image 3 column
                                </a>
                              </li>
                              <li>
                                <a href="portfolio-switch-image-four-column.html">
                                  Switch image 4 column
                                </a>
                              </li>
                              <li>
                                <a href="portfolio-switch-image-masonry.html">
                                  Switch image masonry
                                </a>
                              </li>
                              <li>
                                <a href="portfolio-switch-image-metro.html">
                                  Switch image metro
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a
                              data-bs-toggle="dropdown"
                              href="javascript:void(0);"
                            >
                              Portfolio other
                              <i className="fas fa-angle-right dropdown-toggle" />
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <a href="portfolio-scattered.html">
                                  Portfolio scattered
                                </a>
                              </li>
                              <li>
                                <a href="portfolio-justified-gallery.html">
                                  Justified gallery
                                </a>
                              </li>
                              <li>
                                <a href="portfolio-slider.html">
                                  Portfolio slider
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a
                              data-bs-toggle="dropdown"
                              href="javascript:void(0);"
                            >
                              Single project page
                              <i className="fas fa-angle-right dropdown-toggle" />
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <a href="single-project-page-01.html">
                                  Single project page 01
                                </a>
                              </li>
                              <li>
                                <a href="single-project-page-02.html">
                                  Single project page 02
                                </a>
                              </li>
                              <li>
                                <a href="single-project-page-03.html">
                                  Single project page 03
                                </a>
                              </li>
                              <li>
                                <a href="single-project-page-04.html">
                                  Single project page 04
                                </a>
                              </li>
                              <li>
                                <a href="single-project-page-05.html">
                                  Single project page 05
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown megamenu">
                        <a href="javascript:void(0);" className="nav-link">
                          Elements
                        </a>
                        <i
                          className="fa fa-angle-down dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-hidden="true"
                        />
                        <div
                          className="menu-back-div dropdown-menu megamenu-content"
                          role="menu"
                        >
                          <div className="d-lg-flex justify-content-center">
                            <ul className="d-lg-inline-block">
                              <li className="dropdown-header">General</li>
                              <li>
                                <a href="accordions.html">
                                  <i className="ti-layout-accordion-separated" />
                                  Accordions
                                </a>
                              </li>
                              <li>
                                <a href="buttons.html">
                                  <i className="ti-mouse" />
                                  Buttons
                                </a>
                              </li>
                              <li>
                                <a href="team.html">
                                  <i className="ti-user" />
                                  Team
                                </a>
                              </li>
                              <li>
                                <a href="team-carousel.html">
                                  <i className="ti-layout-slider-alt" />
                                  Team carousel
                                </a>
                              </li>
                              <li>
                                <a href="clients.html">
                                  <i className="ti-id-badge" />
                                  Clients
                                </a>
                              </li>
                              <li>
                                <a href="client-carousel.html">
                                  <i className="ti-layout-slider" />
                                  Client carousel
                                </a>
                              </li>
                              <li>
                                <a href="subscribe.html">
                                  <i className="ti-crown" />
                                  Subscribe
                                </a>
                              </li>
                              <li>
                                <a href="call-to-action.html">
                                  <i className="ti-eye" />
                                  Call to action
                                </a>
                              </li>
                              <li>
                                <a href="tab.html">
                                  <i className="ti-layout-tab" />
                                  Tab
                                </a>
                              </li>
                              <li>
                                <a href="google-map.html">
                                  <i className="ti-location-pin" />
                                  Google map
                                </a>
                              </li>
                              <li>
                                <a href="contact-form.html">
                                  <i className="ti-clipboard" />
                                  Contact form
                                </a>
                              </li>
                              <li>
                                <a href="image-gallery.html">
                                  <i className="ti-gallery" />
                                  Image gallery
                                </a>
                              </li>
                            </ul>
                            <ul className="d-lg-inline-block">
                              <li className="dropdown-header">
                                Content &amp; infographics
                              </li>
                              <li>
                                <a href="progress-bar.html">
                                  <i className="icon-hourglass" />
                                  Progress bar
                                </a>
                              </li>
                              <li>
                                <a href="icon-with-text.html">
                                  <i className="ti-layout-media-left" />
                                  Icon with text
                                </a>
                              </li>
                              <li>
                                <a href="overline-icon-box.html">
                                  <i className="ti-write" />
                                  Over line icon box
                                </a>
                              </li>
                              <li>
                                <a href="custom-icon-with-text.html">
                                  <i className="ti-vector" />
                                  Custom icon with text
                                </a>
                              </li>
                              <li>
                                <a href="counters.html">
                                  <i className="ti-timer" />
                                  Counters
                                </a>
                              </li>
                              <li>
                                <a href="countdown.html">
                                  <i className="ti-alarm-clock" />
                                  Countdown
                                </a>
                              </li>
                              <li>
                                <a href="pie-charts.html">
                                  <i className="ti-pie-chart" />
                                  Pie charts
                                </a>
                              </li>
                              <li>
                                <a href="fancy-text-box.html">
                                  <i className="ti-layout-cta-center" />
                                  Fancy text box
                                </a>
                              </li>
                              <li>
                                <a href="text-box.html">
                                  <i className="ti-layout-cta-left" />
                                  Text box
                                </a>
                              </li>
                              <li>
                                <a href="fancy-text.html">
                                  <i className="ti-text" />
                                  Fancy text
                                </a>
                              </li>
                            </ul>
                            <ul className="d-lg-inline-block">
                              <li className="dropdown-header">Interactive</li>
                              <li>
                                <a href="testimonials.html">
                                  <i className="ti-thought" />
                                  Testimonials
                                </a>
                              </li>
                              <li>
                                <a href="testimonials-carousel.html">
                                  <i className="ti-comments" />
                                  Testimonials carousel
                                </a>
                              </li>
                              <li>
                                <a href="video.html">
                                  <i className="ti-video-camera" />
                                  Video
                                </a>
                              </li>
                              <li>
                                <a href="interactive-banners.html">
                                  <i className="ti-image" />
                                  Interactive banners
                                </a>
                              </li>
                              <li>
                                <a href="services.html">
                                  <i className="ti-bookmark-alt" />
                                  Services
                                </a>
                              </li>
                              <li>
                                <a href="info-banner.html">
                                  <i className="ti-layout-slider" />
                                  Info banner
                                </a>
                              </li>
                              <li>
                                <a href="rotate-box.html">
                                  <i className="ti-package" />
                                  Rotate box
                                </a>
                              </li>
                              <li>
                                <a href="process-step.html">
                                  <i className="ti-layers" />
                                  Process step
                                </a>
                              </li>
                              <li>
                                <a href="instagram.html">
                                  <i className="ti-instagram" />
                                  Instagram
                                </a>
                              </li>
                              <li>
                                <a href="parallax-scrolling.html">
                                  <i className="ti-exchange-vertical" />
                                  Parallax scrolling
                                </a>
                              </li>
                              <li>
                                <a href="text-slider.html">
                                  <i className="ti-layout-media-overlay" />
                                  Text slider
                                </a>
                              </li>
                            </ul>
                            <ul className="d-lg-inline-block">
                              <li className="dropdown-header">
                                Text &amp; containers
                              </li>
                              <li>
                                <a href="heading.html">
                                  <i className="ti-text" />
                                  Heading
                                </a>
                              </li>
                              <li>
                                <a href="dropcaps.html">
                                  <i className="ti-smallcap" />
                                  Drop caps
                                </a>
                              </li>
                              <li>
                                <a href="columns.html">
                                  <i className="ti-layout" />
                                  Columns
                                </a>
                              </li>
                              <li>
                                <a href="blockquote.html">
                                  <i className="ti-quote-left" />
                                  Blockquote
                                </a>
                              </li>
                              <li>
                                <a href="highlights.html">
                                  <i className="ti-underline" />
                                  Highlights
                                </a>
                              </li>
                              <li>
                                <a href="message-box.html">
                                  <i className="ti-layout-media-right-alt" />
                                  Message box
                                </a>
                              </li>
                              <li>
                                <a href="social-icons.html">
                                  <i className="ti-user" />
                                  Social icons
                                </a>
                              </li>
                              <li>
                                <a href="lists.html">
                                  <i className="ti-list" />
                                  Lists
                                </a>
                              </li>
                              <li>
                                <a href="seperators.html">
                                  <i className="ti-layout-line-solid" />
                                  Separators
                                </a>
                              </li>
                              <li>
                                <a href="pricing-table.html">
                                  <i className="ti-layout-column2" />
                                  Pricing table
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li className="nav-item dropdown simple-dropdown">
                        <a href="#" className="nav-link">
                          Features
                        </a>
                        <i
                          className="fa fa-angle-down dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-hidden="true"
                        />
                        <ul className="dropdown-menu" role="menu">
                          <li className="dropdown">
                            <a
                              data-bs-toggle="dropdown"
                              href="javascript:void(0);"
                            >
                              Header and menu
                              <i className="fas fa-angle-right dropdown-toggle" />
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <a href="transparent-header.html">
                                  Transparent header
                                </a>
                              </li>
                              <li>
                                <a href="white-header.html">White header</a>
                              </li>
                              <li>
                                <a href="dark-header.html">Dark header</a>
                              </li>
                              <li>
                                <a href="header-with-top-bar.html">
                                  Header with top bar
                                </a>
                              </li>
                              <li>
                                <a href="header-with-push.html">
                                  Header with push
                                </a>
                              </li>
                              <li>
                                <a href="center-navigation.html">
                                  Center navigation
                                </a>
                              </li>
                              <li>
                                <a href="center-logo.html">Center logo</a>
                              </li>
                              <li>
                                <a href="top-logo.html">Top logo</a>
                              </li>
                              <li>
                                <a href="one-page-navigation.html">
                                  One page navigation
                                </a>
                              </li>
                              <li className="dropdown">
                                <a
                                  data-bs-toggle="dropdown"
                                  href="javascript:void(0);"
                                >
                                  Hamburger menu
                                  <i className="fas fa-angle-right dropdown-toggle" />
                                </a>
                                <ul className="dropdown-menu">
                                  <li>
                                    <a href="hamburger-menu.html">
                                      Hamburger menu
                                    </a>
                                  </li>
                                  <li>
                                    <a href="hamburger-menu-modern.html">
                                      Hamburger menu modern
                                    </a>
                                  </li>
                                  <li>
                                    <a href="hamburger-menu-half.html">
                                      Hamburger menu half
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="dropdown">
                                <a
                                  data-bs-toggle="dropdown"
                                  href="javascript:void(0);"
                                >
                                  Left menu
                                  <i className="fas fa-angle-right dropdown-toggle" />
                                </a>
                                <ul className="dropdown-menu">
                                  <li>
                                    <a href="left-menu-classic.html">
                                      Left menu classic
                                    </a>
                                  </li>
                                  <li>
                                    <a href="left-menu-modern.html">
                                      Left menu modern
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="dropdown">
                                <a
                                  data-bs-toggle="dropdown"
                                  href="javascript:void(0);"
                                >
                                  Header type
                                  <i className="fas fa-angle-right dropdown-toggle" />
                                </a>
                                <ul className="dropdown-menu">
                                  <li>
                                    <a href="header-always-fixed.html">
                                      Always fixed
                                    </a>
                                  </li>
                                  <li>
                                    <a href="header-disable-fixed.html">
                                      Disable fixed
                                    </a>
                                  </li>
                                  <li>
                                    <a href="header-reverse-scroll.html">
                                      Reverse scroll
                                    </a>
                                  </li>
                                  <li>
                                    <a href="header-responsive-sticky.html">
                                      Responsive sticky
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="dropdown">
                                <a
                                  data-bs-toggle="dropdown"
                                  href="javascript:void(0);"
                                >
                                  Mobile menu
                                  <i className="fas fa-angle-right dropdown-toggle" />
                                </a>
                                <ul className="dropdown-menu">
                                  <li>
                                    <a href="mobile-menu-classic.html">
                                      Classic
                                    </a>
                                  </li>
                                  <li>
                                    <a href="mobile-menu-modern.html">Modern</a>
                                  </li>
                                  <li>
                                    <a href="mobile-menu-full-screen.html">
                                      Full screen
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a
                              data-bs-toggle="dropdown"
                              href="javascript:void(0);"
                            >
                              Footer
                              <i className="fas fa-angle-right dropdown-toggle" />
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <a href="footer-style-01.html">
                                  Footer style 01
                                </a>
                              </li>
                              <li>
                                <a href="footer-style-02.html">
                                  Footer style 02
                                </a>
                              </li>
                              <li>
                                <a href="footer-style-03.html">
                                  Footer style 03
                                </a>
                              </li>
                              <li>
                                <a href="footer-style-04.html">
                                  Footer style 04
                                </a>
                              </li>
                              <li>
                                <a href="footer-style-05.html">
                                  Footer style 05
                                </a>
                              </li>
                              <li>
                                <a href="footer-style-06.html">
                                  Footer style 06
                                </a>
                              </li>
                              <li>
                                <a href="footer-style-07.html">
                                  Footer style 07
                                </a>
                              </li>
                              <li>
                                <a href="footer-style-08.html">
                                  Footer style 08
                                </a>
                              </li>
                              <li>
                                <a href="footer-style-09.html">
                                  Footer style 09
                                </a>
                              </li>
                              <li>
                                <a href="footer-style-10.html">
                                  Footer style 10
                                </a>
                              </li>
                              <li>
                                <a href="footer-style-11.html">
                                  Footer style 11
                                </a>
                              </li>
                              <li>
                                <a href="footer-style-12.html">
                                  Footer style 12
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a
                              data-bs-toggle="dropdown"
                              href="javascript:void(0);"
                            >
                              Page title
                              <i className="fas fa-angle-right dropdown-toggle" />
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <a href="page-title-left-alignment.html">
                                  Left alignment
                                </a>
                              </li>
                              <li>
                                <a href="page-title-right-alignment.html">
                                  Right alignment
                                </a>
                              </li>
                              <li>
                                <a href="page-title-center-alignment.html">
                                  Center alignment
                                </a>
                              </li>
                              <li>
                                <a href="page-title-colorful-style.html">
                                  Colorful style
                                </a>
                              </li>
                              <li>
                                <a href="page-title-big-typography.html">
                                  Big typography
                                </a>
                              </li>
                              <li>
                                <a href="page-title-parallax-background.html">
                                  Parallax background
                                </a>
                              </li>
                              <li>
                                <a href="page-title-separate-breadcrumbs.html">
                                  Separate breadcrumbs
                                </a>
                              </li>
                              <li>
                                <a href="page-title-gallery-background.html">
                                  Gallery background
                                </a>
                              </li>
                              <li>
                                <a href="page-title-background-video.html">
                                  Background video
                                </a>
                              </li>
                              <li>
                                <a href="page-title-mini-version.html">
                                  Mini version
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a
                              data-bs-toggle="dropdown"
                              href="javascript:void(0);"
                            >
                              Modal popup
                              <i className="fas fa-angle-right dropdown-toggle" />
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <a href="modal-simple.html">Simple modal</a>
                              </li>
                              <li>
                                <a href="modal-subscription.html">
                                  Subscription
                                </a>
                              </li>
                              <li>
                                <a href="modal-contact-form.html">
                                  Contact form
                                </a>
                              </li>
                              <li>
                                <a href="modal-youtube-video.html">
                                  Youtube video
                                </a>
                              </li>
                              <li>
                                <a href="modal-vimeo-video.html">Vimeo video</a>
                              </li>
                              <li>
                                <a href="modal-google-map.html">Google map</a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a
                              data-bs-toggle="dropdown"
                              href="javascript:void(0);"
                            >
                              Icon packs
                              <i className="fas fa-angle-right dropdown-toggle" />
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <a href="icon-packs-icons-mind-line.html">
                                  Icons mind line
                                </a>
                              </li>
                              <li>
                                <a href="icon-packs-icons-mind-solid.html">
                                  Icons mind solid
                                </a>
                              </li>
                              <li>
                                <a href="icon-packs-feather.html">Feather</a>
                              </li>
                              <li>
                                <a href="icon-packs-font-awesome.html">
                                  Font awesome
                                </a>
                              </li>
                              <li>
                                <a href="icon-packs-et-line.html">ET line</a>
                              </li>
                              <li>
                                <a href="icon-packs-themify.html">Themify</a>
                              </li>
                              <li>
                                <a href="icon-packs-simple-line.html">
                                  Simple line
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a href="animations.html">Animations</a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown simple-dropdown">
                        <a href="#" className="nav-link">
                          Blog
                        </a>
                        <i
                          className="fa fa-angle-down dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-hidden="true"
                        />
                        <ul className="dropdown-menu" role="menu">
                          <li className="dropdown">
                            <a href="blog-grid.html">Blog grid</a>
                          </li>
                          <li className="dropdown">
                            <a href="blog-masonry.html">Blog masonry</a>
                          </li>
                          <li className="dropdown">
                            <a href="blog-classic.html">Blog classic</a>
                          </li>
                          <li className="dropdown">
                            <a href="blog-simple.html">Blog simple</a>
                          </li>
                          <li className="dropdown">
                            <a href="blog-side-image.html">Blog side image</a>
                          </li>
                          <li className="dropdown">
                            <a href="blog-metro.html">Blog metro</a>
                          </li>
                          <li className="dropdown">
                            <a href="blog-overlay-image.html">
                              Blog overlay image
                            </a>
                          </li>
                          <li className="dropdown">
                            <a href="blog-modern.html">Blog modern</a>
                          </li>
                          <li className="dropdown">
                            <a href="blog-clean.html">Blog clean</a>
                          </li>
                          <li className="dropdown">
                            <a href="blog-widget.html">Blog widget</a>
                          </li>
                          <li className="dropdown">
                            <a href="blog-standard.html">Blog standard</a>
                          </li>
                          <li className="dropdown">
                            <a
                              data-bs-toggle="dropdown"
                              href="javascript:void(0);"
                            >
                              Post layout
                              <i className="fas fa-angle-right dropdown-toggle" />
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <a href="blog-post-layout-01.html">
                                  Blog post layout 01
                                </a>
                              </li>
                              <li>
                                <a href="blog-post-layout-02.html">
                                  Blog post layout 02
                                </a>
                              </li>
                              <li>
                                <a href="blog-post-layout-03.html">
                                  Blog post layout 03
                                </a>
                              </li>
                              <li>
                                <a href="blog-post-layout-04.html">
                                  Blog post layout 04
                                </a>
                              </li>
                              <li>
                                <a href="blog-post-layout-05.html">
                                  Blog post layout 05
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a
                              data-bs-toggle="dropdown"
                              href="javascript:void(0);"
                            >
                              Post types
                              <i className="fas fa-angle-right dropdown-toggle" />
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <a href="blog-standard-post.html">
                                  Standard post
                                </a>
                              </li>
                              <li>
                                <a href="blog-gallery-post.html">
                                  Gallery post
                                </a>
                              </li>
                              <li>
                                <a href="blog-slider-post.html">Slider post</a>
                              </li>
                              <li>
                                <a href="blog-html5-video-post.html">
                                  HTML5 video post
                                </a>
                              </li>
                              <li>
                                <a href="blog-youtube-video-post.html">
                                  Youtube video post
                                </a>
                              </li>
                              <li>
                                <a href="blog-vimeo-video-post.html">
                                  Vimeo video post
                                </a>
                              </li>
                              <li>
                                <a href="blog-audio-post.html">Audio post</a>
                              </li>
                              <li>
                                <a href="blog-blockquote-post.html">
                                  Blockquote post
                                </a>
                              </li>
                              <li>
                                <a href="blog-full-width-post.html">
                                  Full width post
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown megamenu">
                        <a href="javascript:void(0);" className="nav-link">
                          Shop
                        </a>
                        <i
                          className="fa fa-angle-down dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-hidden="true"
                        />
                        <div
                          className="menu-back-div dropdown-menu megamenu-content"
                          role="menu"
                        >
                          <div className="d-lg-flex justify-content-center">
                            <ul className="d-lg-inline-block md-margin-15px-bottom">
                              <li className="dropdown-header">Shop layout</li>
                              <li>
                                <a href="shop-wide.html">Shop wide</a>
                              </li>
                              <li>
                                <a href="shop-left-sidebar.html">
                                  Left sidebar
                                </a>
                              </li>
                              <li>
                                <a href="shop-right-sidebar.html">
                                  Right sidebar
                                </a>
                              </li>
                              <li>
                                <a href="shop-only-categories.html">
                                  Only categories
                                </a>
                              </li>
                              <li>
                                <a href="single-product.html">Single product</a>
                              </li>
                              <li className="dropdown-header">Utility pages</li>
                              <li>
                                <a href="shopping-cart.html">Shopping cart</a>
                              </li>
                              <li>
                                <a href="checkout.html">Checkout</a>
                              </li>
                              <li>
                                <a href="login-register.html">
                                  Login / Register
                                </a>
                              </li>
                            </ul>
                            <ul className="d-lg-inline-block d-none small-gap">
                              <li>
                                <a
                                  href="index.html"
                                  className="menu-banner-image"
                                >
                                  <img src="images/menu-banner-01.jpg" alt="" />
                                </a>
                              </li>
                            </ul>
                            <ul className="d-lg-inline-block d-none no-padding-right">
                              <li>
                                <a
                                  href="index.html"
                                  className="menu-banner-image"
                                >
                                  <img src="images/menu-banner-02.jpg" alt="" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-auto text-end hidden-xs pe-0 font-size-0">
                  <div className="header-search-icon search-form-wrapper">
                    <a
                      href="javascript:void(0)"
                      className="search-form-icon header-search-form"
                    >
                      <i className="feather icon-feather-search" />
                    </a>
                    {/* start search input */}
                    <div className="form-wrapper">
                      <button
                        title="Close"
                        type="button"
                        className="search-close alt-font"
                      >
                        ×
                      </button>
                      <form
                        id="search-form"
                        role="search"
                        method="get"
                        className="search-form text-start"
                        action="search-result.html"
                      >
                        <div className="search-form-box">
                          <span className="search-label alt-font text-small text-uppercase text-medium-gray">
                            What are you looking for?
                          </span>
                          <input
                            className="search-input alt-font"
                            id="search-form-input5e219ef164995"
                            placeholder="Enter your keywords..."
                            name="s"
                            defaultValue
                            type="text"
                            autoComplete="off"
                          />
                          <button type="submit" className="search-button">
                            <i
                              className="feather icon-feather-search"
                              aria-hidden="true"
                            />
                          </button>
                        </div>
                      </form>
                    </div>
                    {/* end search input */}
                  </div>
                  <div className="header-language dropdown d-lg-inline-block">
                    <a href="javascript:void(0);">
                      <i className="feather icon-feather-globe" />
                    </a>
                    <ul className="dropdown-menu alt-font">
                      <li>
                        <a href="javascript:void(0);" title="English">
                          <span className="icon-country">
                            <img
                              src="images/country-flag-16X16/usa.png"
                              alt=""
                            />
                          </span>
                          English
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" title="England">
                          <span className="icon-country">
                            <img
                              src="images/country-flag-16X16/england.png"
                              alt=""
                            />
                          </span>
                          England
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" title="France">
                          <span className="icon-country">
                            <img
                              src="images/country-flag-16X16/france.png"
                              alt=""
                            />
                          </span>
                          France
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" title="Russian">
                          <span className="icon-country">
                            <img
                              src="images/country-flag-16X16/russian.png"
                              alt=""
                            />
                          </span>
                          Russian
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" title="Spain">
                          <span className="icon-country">
                            <img
                              src="images/country-flag-16X16/spain.png"
                              alt=""
                            />
                          </span>
                          Spain
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="header-cart-icon dropdown">
                    <a href="javascript:void(0);">
                      <i className="feather icon-feather-shopping-bag" />
                      <span className="cart-count alt-font bg-fast-blue text-white">
                        2
                      </span>
                    </a>
                    <ul className="dropdown-menu cart-item-list">
                      <li className="cart-item align-items-center">
                        <a
                          href="javascript:void(0);"
                          className="alt-font close"
                        >
                          ×
                        </a>
                        <div className="product-image">
                          <a href="single-product.html">
                            <img
                              src="images/cart-image-01.jpg"
                              className="cart-thumb"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-detail alt-font">
                          <a href="single-product.html">Delica Omtantur</a>
                          <span className="item-ammount">$100.00</span>
                        </div>
                      </li>
                      <li className="cart-item align-items-center">
                        <a
                          href="javascript:void(0);"
                          className="alt-font close"
                        >
                          ×
                        </a>
                        <div className="product-image">
                          <a href="single-product.html">
                            <img
                              src="images/cart-image-02.jpg"
                              className="cart-thumb"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="product-detail alt-font">
                          <a href="single-product.html">Gianvito Rossi</a>
                          <span className="item-ammount">$99.99</span>
                        </div>
                      </li>
                      <li className="cart-item cart-total">
                        <div className="alt-font margin-15px-bottom">
                          <span className="w-50 d-inline-block text-medium text-uppercase">
                            Subtotal:
                          </span>
                          <span className="w-50 d-inline-block text-end text-medium font-weight-500">
                            $199.99
                          </span>
                        </div>
                        <a
                          href="shopping-cart.html"
                          className="btn btn-small btn-dark-gray"
                        >
                          view cart
                        </a>
                        <a
                          href="checkout.html"
                          className="btn btn-small btn-fast-blue"
                        >
                          checkout
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </header>
          {/* end header */}
          {/* start page title */}
          <section className="bg-light-gray padding-40px-tb sm-padding-30px-tb page-title-small">
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-xl-8 col-lg-6 text-center text-lg-start">
                  <h1 className="alt-font text-extra-dark-gray font-weight-500 no-margin-bottom d-inline-block">
                    Our services
                  </h1>
                  <span className="alt-font text-medium d-block d-md-inline-block sm-margin-5px-top">
                    Professional multi-purpose template
                  </span>
                </div>
                <div className="col-xl-4 col-lg-6 text-center text-lg-end breadcrumb justify-content-center justify-content-lg-end text-small alt-font md-margin-15px-top">
                  <ul>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="#">Pages</a>
                    </li>
                    <li>Our services</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {/* end page title */}
          {/* start section */}
          <section>
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-12 col-lg-5 col-md-9 md-margin-7-rem-bottom">
                  <span className="alt-font margin-20px-bottom text-gradient-sky-blue-pink d-inline-block text-uppercase font-weight-500 letter-spacing-1px">
                    Experience agency
                  </span>
                  <h4 className="alt-font font-weight-600 text-extra-dark-gray w-95">
                    We help our clients build value digital web solutions
                  </h4>
                  <p className="w-80 lg-w-95">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua printing typesetting.
                  </p>
                  <a
                    href="#services"
                    className="btn btn-medium btn-dark-gray margin-15px-top btn-round-edge section-link"
                  >
                    Our services
                    <i className="feather icon-feather-arrow-right icon-very-small right-icon" />
                  </a>
                </div>
                <div className="col-12 col-lg-7 col-md-9 padding-55px-lr md-padding-5px-left sm-padding-50px-right">
                  <figure className="image-back-offset-shadow position-right w-100">
                    <img
                      className="border-radius-6px"
                      src="images/our-services-01.jpg"
                      alt=""
                    />
                    <span className="bg-gradient-light-purple-light-orange border-radius-6px overlay" />
                  </figure>
                </div>
              </div>
            </div>
          </section>
          {/* end section */}
          {/* start section */}
          <section className="bg-light-gray wow animate__fadeIn">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 col-md-6 text-center margin-5-rem-bottom sm-margin-3-rem-bottom">
                  <span className="alt-font margin-10px-bottom d-inline-block text-uppercase font-weight-500 text-gradient-sky-blue-pink letter-spacing-1px">
                    Unlimited Possibilities
                  </span>
                  <h5 className="alt-font text-extra-dark-gray font-weight-600 letter-spacing-minus-1px">
                    Research Strategy
                  </h5>
                </div>
              </div>
              <div className="row justify-content-center">
                {/* start services item */}
                <div className="col-12 col-lg-4 col-md-9 md-margin-30px-bottom xs-margin-15px-bottom wow animate__fadeIn">
                  <div className="feature-box text-start box-shadow-large box-shadow-double-large-hover bg-white padding-4-rem-all lg-padding-3-rem-all md-padding-4-half-rem-all">
                    <div className="feature-box-content">
                      <span className="margin-15px-bottom d-block text-extra-medium">
                        01
                      </span>
                      <h6 className="alt-font font-weight-600 d-block text-extra-dark-gray">
                        Developing strategy
                      </h6>
                      <p>
                        Lorem ipsum is simply dummy text of the printing
                        typesetting lorem ipsum been dummy text.
                      </p>
                      <div className="h-1px bg-medium-gray margin-25px-bottom w-100" />
                      <a
                        className="text-small font-weight-500 text-uppercase alt-font d-block text-extra-dark-gray"
                        href="about-me.html"
                      >
                        More info
                        <i className="feather icon-feather-arrow-right icon-extra-small float-end" />
                      </a>
                    </div>
                    <div className="feature-box-overlay bg-white" />
                  </div>
                </div>
                {/* end services item */}
                {/* start services item */}
                <div
                  className="col-12 col-lg-4 col-md-9 md-margin-30px-bottom xs-margin-15px-bottom wow animate__fadeIn"
                  data-wow-delay="0.2s"
                >
                  <div className="feature-box text-start box-shadow-large box-shadow-double-large-hover bg-white padding-4-rem-all lg-padding-3-rem-all md-padding-4-half-rem-all">
                    <div className="feature-box-content">
                      <span className="margin-15px-bottom d-block text-extra-medium">
                        02
                      </span>
                      <h6 className="alt-font font-weight-600 d-block text-extra-dark-gray">
                        Blazing performance
                      </h6>
                      <p>
                        Lorem ipsum is simply dummy text of the printing
                        typesetting lorem ipsum been dummy text.
                      </p>
                      <div className="h-1px bg-medium-gray margin-25px-bottom w-100" />
                      <a
                        className="text-small font-weight-500 text-uppercase alt-font d-block text-extra-dark-gray"
                        href="about-me.html"
                      >
                        More info
                        <i className="feather icon-feather-arrow-right icon-extra-small float-end" />
                      </a>
                    </div>
                    <div className="feature-box-overlay bg-white" />
                  </div>
                </div>
                {/* end services item */}
                {/* start services item */}
                <div
                  className="col-12 col-lg-4 col-md-9 wow animate__fadeIn"
                  data-wow-delay="0.4s"
                >
                  <div className="feature-box text-start box-shadow-large box-shadow-double-large-hover bg-white padding-4-rem-all lg-padding-3-rem-all md-padding-4-half-rem-all">
                    <div className="feature-box-content">
                      <span className="margin-15px-bottom d-block text-extra-medium">
                        03
                      </span>
                      <h6 className="alt-font font-weight-600 d-block text-extra-dark-gray">
                        Customer satisfaction
                      </h6>
                      <p>
                        Lorem ipsum is simply dummy text of the printing
                        typesetting lorem ipsum been dummy text.
                      </p>
                      <div className="h-1px bg-medium-gray margin-25px-bottom w-100" />
                      <a
                        className="text-small font-weight-500 text-uppercase alt-font d-block text-extra-dark-gray"
                        href="about-me.html"
                      >
                        More info
                        <i className="feather icon-feather-arrow-right icon-extra-small float-end" />
                      </a>
                    </div>
                    <div className="feature-box-overlay bg-white" />
                  </div>
                </div>
                {/* end services item */}
              </div>
            </div>
          </section>
          {/* end section */}
          {/* start section */}
          <section
            className="parallax overflow-visible wow animate__fadeIn"
            id="services"
            data-parallax-background-ratio="0.1"
            style={{ backgroundImage: 'url("images/our-services-17.png")' }}
          >
            <div className="container">
              <div className="row">
                <div className="col-12 col-xl-7 col-lg-8 col-md-12 md-margin-40px-bottom">
                  <div className="row">
                    <div className="col-12 position-relative margin-5-half-rem-bottom sm-margin-7-half-rem-bottom">
                      <span className="alt-font margin-20px-bottom text-gradient-sky-blue-pink d-inline-block text-uppercase font-weight-500 letter-spacing-1px">
                        What we offer services
                      </span>
                      <h5 className="alt-font font-weight-600 text-extra-dark-gray">
                        Litho theme lets you easily create websites in a matter
                        of minutes.
                      </h5>
                      <p className="w-80 margin-4-half-rem-bottom md-w-100">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry ipsum has been the industry's
                        standard dummy text when an unknown a galley of type and
                        scrambled it to make a type book.
                      </p>
                      <div className="swiper-button-next-nav swiper-button-next slider-navigation-style-03 rounded-circle">
                        <i className="feather icon-feather-arrow-right" />
                      </div>
                      <div className="swiper-button-previous-nav swiper-button-prev slider-navigation-style-03 rounded-circle">
                        <i className="feather icon-feather-arrow-left" />
                      </div>
                    </div>
                    <div className="col-12">
                      {/* start slider */}
                      <div
                        className="swiper-container black-move"
                        data-slider-options='{ "slidesPerView": 1, "loop": true, "navigation": { "nextEl": ".swiper-button-next-nav", "prevEl": ".swiper-button-previous-nav" }, "keyboard": { "enabled": true, "onlyInViewport": true }, "effect": "slide" }'
                      >
                        <div className="swiper-wrapper">
                          {/* start slider item */}
                          <div className="swiper-slide">
                            <div className="border-all border-width-1px border-color-medium-gray border-radius-4px overflow-hidden margin-5px-right xs-no-margin-right">
                              <div className="row g-0 row-cols-1 row-cols-sm-2">
                                <div
                                  className="col cover-background xs-h-250px"
                                  style={{
                                    backgroundImage:
                                      'url("images/our-story-img11.jpg")',
                                  }}
                                />
                                <div className="col">
                                  <div className="padding-4-rem-all lg-padding-3-rem-all">
                                    <span className="alt-font text-extra-dark-gray font-weight-500 d-inline-block margin-15px-bottom text-extra-medium">
                                      Brand identity
                                    </span>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sed do eiusmod tempor
                                      incididunt ut labore et dolore.
                                    </p>
                                    <a
                                      href="about-us.html"
                                      className="btn btn-very-small btn-round-edge btn-dark-gray"
                                    >
                                      Read more
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* end slider item */}
                          {/* start slider item */}
                          <div className="swiper-slide">
                            <div className="border-all border-width-1px border-color-medium-gray border-radius-4px overflow-hidden margin-5px-right xs-no-margin-right">
                              <div className="row g-0 row-cols-1 row-cols-sm-2">
                                <div
                                  className="col cover-background xs-h-250px"
                                  style={{
                                    backgroundImage:
                                      'url("images/our-story-img13.jpg")',
                                  }}
                                />
                                <div className="col">
                                  <div className="padding-4-rem-all lg-padding-3-rem-all">
                                    <span className="alt-font text-extra-dark-gray font-weight-500 d-inline-block margin-15px-bottom text-extra-medium">
                                      Exposure strategy
                                    </span>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sed do eiusmod tempor
                                      incididunt ut labore et dolore.
                                    </p>
                                    <a
                                      href="about-us.html"
                                      className="btn btn-very-small btn-round-edge btn-dark-gray"
                                    >
                                      Read more
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* end slider item */}
                          {/* start slider item */}
                          <div className="swiper-slide">
                            <div className="border-all border-width-1px border-color-medium-gray border-radius-4px overflow-hidden margin-5px-right xs-no-margin-right">
                              <div className="row g-0 row-cols-1 row-cols-sm-2">
                                <div
                                  className="col cover-background xs-h-250px"
                                  style={{
                                    backgroundImage:
                                      'url("images/our-story-img12.jpg")',
                                  }}
                                />
                                <div className="col">
                                  <div className="padding-4-rem-all lg-padding-3-rem-all">
                                    <span className="alt-font text-extra-dark-gray font-weight-500 d-inline-block margin-15px-bottom text-extra-medium">
                                      Multilingual portals
                                    </span>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sed do eiusmod tempor
                                      incididunt ut labore et dolore.
                                    </p>
                                    <a
                                      href="about-us.html"
                                      className="btn btn-very-small btn-round-edge btn-dark-gray"
                                    >
                                      Read more
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* end slider item */}
                        </div>
                      </div>
                      {/* end slider */}
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4 col-md-12 offset-xl-1">
                  <div className="sticky-top lg-position-relative">
                    <div className="bg-gradient-fast-blue-purple w-100 overflow-hidden border-radius-4px padding-4-rem-all lg-padding-3-rem-all md-padding-4-rem-all position-relative">
                      <i className="line-icon-Cursor-Click2 title-extra-large-heavy text-extra-dark-gray opacity-2 position-absolute top-minus-20px left-minus-30px" />
                      <h6 className="alt-font font-weight-500 text-white margin-35px-bottom sm-margin-15px-bottom position-relative z-index-1">
                        Custom and bespoke services
                      </h6>
                      <ul className="list-style-03 alt-font text-white">
                        <li className="border-color-dark-white-transparent mb-0">
                          Brand identity
                        </li>
                        <li className="border-color-dark-white-transparent mb-0">
                          Exposure strategy
                        </li>
                        <li className="border-color-dark-white-transparent mb-0">
                          E-commerce website
                        </li>
                        <li className="border-color-dark-white-transparent mb-0">
                          Multilingual portals
                        </li>
                        <li className="border-color-dark-white-transparent mb-0 pb-0">
                          Packaging design
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* end section */}
          {/* start section */}
          <section className="bg-light-gray wow animate__fadeIn">
            <div className="container">
              <div className="row row-cols-1 row-cols-lg-3 row-cols-sm-2">
                {/* start feature box item */}
                <div className="col wow animate__fadeIn">
                  <div className="feature-box padding-4-half-rem-all lg-padding-3-rem-all">
                    <div className="feature-box-icon feature-box-svg margin-20px-bottom">
                      <i className="line-icon-Navigation-LeftWindow icon-medium text-gradient-sky-blue-pink" />
                      <span className="feature-box-svg-shap drop-shadow">
                        <svg
                          width={100}
                          viewBox="-100 -100 200 200"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill="#fff"
                            d="M86.2,51.4C58.6,97.5,-53.4,96.5,-81.8,49.9C-110.3,3.3,-55.1,-88.8,0.9,-88.3C56.9,-87.8,113.7,5.3,86.2,51.4Z"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="feature-box-content last-paragraph-no-margin">
                      <span className="alt-font font-weight-500 margin-10px-bottom d-block text-extra-dark-gray">
                        Amazing layouts
                      </span>
                      <p>
                        Lorem ipsum is simply dummy text of the printing
                        typesetting lorem ipsum been text.
                      </p>
                    </div>
                  </div>
                </div>
                {/* end feature box item */}
                {/* start feature box item */}
                <div className="col wow animate__fadeIn" data-wow-delay="0.2s">
                  <div className="feature-box padding-4-half-rem-all lg-padding-3-rem-all">
                    <div className="feature-box-icon feature-box-svg margin-20px-bottom">
                      <i className="line-icon-Cursor-Click2 icon-medium text-gradient-sky-blue-pink" />
                      <span className="feature-box-svg-shap drop-shadow">
                        <svg
                          width={100}
                          viewBox="-110 -110 220 220"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill="#fff"
                            d="M88.6,52.5C56,107.7,-69.9,110.3,-100.2,56.5C-130.5,2.7,-65.2,-107.7,-2.3,-109C60.6,-110.3,121.2,-2.7,88.6,52.5Z"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="feature-box-content last-paragraph-no-margin">
                      <span className="alt-font font-weight-500 margin-10px-bottom d-block text-extra-dark-gray">
                        No coding required
                      </span>
                      <p>
                        Lorem ipsum is simply dummy text of the printing
                        typesetting lorem ipsum been text.
                      </p>
                    </div>
                  </div>
                </div>
                {/* end feature box item */}
                {/* start feature box item */}
                <div className="col wow animate__fadeIn" data-wow-delay="0.4s">
                  <div className="feature-box padding-4-half-rem-all lg-padding-3-rem-all">
                    <div className="feature-box-icon feature-box-svg margin-20px-bottom">
                      <i className="line-icon-Like-2 icon-medium text-gradient-sky-blue-pink" />
                      <span className="feature-box-svg-shap drop-shadow">
                        <svg
                          width={100}
                          viewBox="-100 -100 200 200"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill="#fff"
                            d="M86.2,51.4C58.6,97.5,-53.4,96.5,-81.8,49.9C-110.3,3.3,-55.1,-88.8,0.9,-88.3C56.9,-87.8,113.7,5.3,86.2,51.4Z"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="feature-box-content last-paragraph-no-margin">
                      <span className="alt-font font-weight-500 margin-10px-bottom d-block text-extra-dark-gray">
                        Easy to customize
                      </span>
                      <p>
                        Lorem ipsum is simply dummy text of the printing
                        typesetting lorem ipsum been text.
                      </p>
                    </div>
                  </div>
                </div>
                {/* end feature box item */}
                {/* start feature box item */}
                <div className="col wow animate__fadeIn">
                  <div className="feature-box padding-4-half-rem-all lg-padding-3-rem-all">
                    <div className="feature-box-icon feature-box-svg margin-20px-bottom">
                      <i className="line-icon-Talk-Man icon-medium text-gradient-sky-blue-pink" />
                      <span className="feature-box-svg-shap drop-shadow">
                        <svg
                          width={100}
                          viewBox="-110 -110 220 220"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill="#fff"
                            d="M88.6,52.5C56,107.7,-69.9,110.3,-100.2,56.5C-130.5,2.7,-65.2,-107.7,-2.3,-109C60.6,-110.3,121.2,-2.7,88.6,52.5Z"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="feature-box-content last-paragraph-no-margin">
                      <span className="alt-font font-weight-500 margin-10px-bottom d-block text-extra-dark-gray">
                        Customer satisfaction
                      </span>
                      <p>
                        Lorem ipsum is simply dummy text of the printing
                        typesetting lorem ipsum been text.
                      </p>
                    </div>
                  </div>
                </div>
                {/* end feature box item */}
                {/* start feature box item */}
                <div className="col wow animate__fadeIn" data-wow-delay="0.2s">
                  <div className="feature-box padding-4-half-rem-all lg-padding-3-rem-all">
                    <div className="feature-box-icon feature-box-svg margin-20px-bottom">
                      <i className="line-icon-Paper-Plane icon-medium text-gradient-sky-blue-pink" />
                      <span className="feature-box-svg-shap drop-shadow">
                        <svg
                          width={100}
                          viewBox="-100 -100 200 200"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill="#fff"
                            d="M86.2,51.4C58.6,97.5,-53.4,96.5,-81.8,49.9C-110.3,3.3,-55.1,-88.8,0.9,-88.3C56.9,-87.8,113.7,5.3,86.2,51.4Z"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="feature-box-content last-paragraph-no-margin">
                      <span className="alt-font font-weight-500 margin-10px-bottom d-block text-extra-dark-gray">
                        Blazing performance
                      </span>
                      <p>
                        Lorem ipsum is simply dummy text of the printing
                        typesetting lorem ipsum been text.
                      </p>
                    </div>
                  </div>
                </div>
                {/* end feature box item */}
                {/* start feature box item */}
                <div className="col wow animate__fadeIn" data-wow-delay="0.4s">
                  <div className="feature-box padding-4-half-rem-all lg-padding-3-rem-all">
                    <div className="feature-box-icon feature-box-svg margin-20px-bottom">
                      <i className="line-icon-Heart icon-medium text-gradient-sky-blue-pink" />
                      <span className="feature-box-svg-shap drop-shadow">
                        <svg
                          width={100}
                          viewBox="-110 -110 220 220"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill="#fff"
                            d="M88.6,52.5C56,107.7,-69.9,110.3,-100.2,56.5C-130.5,2.7,-65.2,-107.7,-2.3,-109C60.6,-110.3,121.2,-2.7,88.6,52.5Z"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="feature-box-content last-paragraph-no-margin">
                      <span className="alt-font font-weight-500 margin-10px-bottom d-block text-extra-dark-gray">
                        Huge icon collection
                      </span>
                      <p>
                        Lorem ipsum is simply dummy text of the printing
                        typesetting lorem ipsum been text.
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
              <div className="row justify-content-center">
                <div className="col-12 col-md-6 text-center margin-5-rem-bottom sm-margin-3-rem-bottom">
                  <span className="alt-font margin-10px-bottom d-inline-block text-uppercase font-weight-500 text-gradient-sky-blue-pink letter-spacing-1px">
                    Simple Pricing
                  </span>
                  <h5 className="alt-font text-extra-dark-gray font-weight-600 letter-spacing-minus-1px">
                    Amazing Package
                  </h5>
                </div>
              </div>
              <div className="row align-items-center justify-content-center">
                {/* start pricing item */}
                <div
                  className="col-12 col-lg-4 col-md-7 text-center md-margin-30px-bottom wow animate__fadeIn"
                  data-wow-delay="0.4s"
                >
                  <div className="pricing-table bg-white border-radius-6px padding-60px-lr padding-70px-tb lg-padding-45px-lr lg-padding-60px-tb">
                    <div className="pricing-header">
                      <div className="text-medium margin-10px-bottom d-block alt-font">
                        Core features
                      </div>
                      <div className="alt-font text-extra-dark-gray text-large font-weight-500 margin-3-rem-bottom text-uppercase">
                        Basic Plan
                      </div>
                      <h3 className="alt-font font-weight-500 text-fast-blue letter-spacing-minus-2px no-margin-bottom">
                        $29
                      </h3>
                      <span className="text-uppercase text-extra-dark-gray letter-spacing-1px font-weight-500 text-small">
                        Per year
                      </span>
                    </div>
                    <div className="pricing-body padding-3-rem-tb">
                      <ul className="list-style-03">
                        <li className="border-color-medium-gray">
                          Pixel perfect design
                        </li>
                        <li className="border-color-medium-gray">
                          Personal training applications
                        </li>
                        <li className="border-color-medium-gray">
                          Step-by-step support
                        </li>
                      </ul>
                    </div>
                    <div className="pricing-footer">
                      <a
                        className="btn btn-small btn-dark-gray letter-spacing-1px"
                        href="pricing-packages.html"
                      >
                        Choose Package
                      </a>
                    </div>
                  </div>
                </div>
                {/* end pricing item */}
                {/* start pricing item */}
                <div
                  className="col-12 col-lg-4 col-md-7 text-center md-margin-30px-bottom wow animate__fadeIn"
                  data-wow-delay="0.2s"
                >
                  <div className="pricing-table bg-gradient-fast-blue-purple border-radius-5px padding-60px-lr padding-70px-tb lg-padding-45px-lr lg-padding-60px-tb">
                    <div className="pricing-header">
                      <div className="text-white text-medium margin-10px-bottom d-block alt-font opacity-7">
                        Most popular
                      </div>
                      <div className="alt-font text-white text-large font-weight-500 margin-3-rem-bottom text-uppercase">
                        Standard Plan
                      </div>
                      <h2 className="alt-font font-weight-500 text-white letter-spacing-minus-2px no-margin-bottom">
                        $39
                      </h2>
                      <span className="text-uppercase text-white letter-spacing-1px font-weight-500 text-small">
                        Per year
                      </span>
                    </div>
                    <div className="pricing-body padding-3-rem-tb">
                      <ul className="list-style-03 text-white">
                        <li className="border-color-dark-white-transparent">
                          Pixel perfect design
                        </li>
                        <li className="border-color-dark-white-transparent">
                          Personal training applications
                        </li>
                        <li className="border-color-dark-white-transparent">
                          Responsive app layout
                        </li>
                        <li className="border-color-dark-white-transparent">
                          Step-by-step support
                        </li>
                      </ul>
                    </div>
                    <div className="pricing-footer">
                      <a
                        className="btn btn-medium btn-white letter-spacing-1px"
                        href="pricing-packages.html"
                      >
                        Choose Package
                      </a>
                    </div>
                  </div>
                </div>
                {/* end pricing item */}
                {/* start pricing item */}
                <div
                  className="col-12 col-lg-4 col-md-7 text-center wow animate__fadeIn"
                  data-wow-delay="0.4s"
                >
                  <div className="pricing-table bg-white border-radius-6px padding-60px-lr padding-70px-tb lg-padding-45px-lr lg-padding-60px-tb">
                    <div className="pricing-header">
                      <div className="text-medium margin-10px-bottom d-block alt-font">
                        Huge features
                      </div>
                      <div className="alt-font text-extra-dark-gray text-large font-weight-500 margin-3-rem-bottom text-uppercase">
                        Premium Plan
                      </div>
                      <h3 className="alt-font font-weight-500 text-fast-blue letter-spacing-minus-2px no-margin-bottom">
                        $49
                      </h3>
                      <span className="text-uppercase text-extra-dark-gray letter-spacing-1px font-weight-500 text-small">
                        Per year
                      </span>
                    </div>
                    <div className="pricing-body padding-3-rem-tb">
                      <ul className="list-style-03">
                        <li className="border-color-medium-gray">
                          Pixel perfect design
                        </li>
                        <li className="border-color-medium-gray">
                          Personal training applications
                        </li>
                        <li className="border-color-medium-gray">
                          Step-by-step support
                        </li>
                      </ul>
                    </div>
                    <div className="pricing-footer">
                      <a
                        className="btn btn-small btn-dark-gray letter-spacing-1px"
                        href="pricing-packages.html"
                      >
                        Choose Package
                      </a>
                    </div>
                  </div>
                </div>
                {/* end pricing item */}
              </div>
            </div>
          </section>
          {/* end section */}
          {/* start section */}
          <section className="bg-light-gray wow animate__fadeIn">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 col-md-6 text-center margin-5-rem-bottom sm-margin-3-rem-bottom">
                  <span className="alt-font margin-10px-bottom d-inline-block text-uppercase font-weight-500 text-gradient-sky-blue-pink letter-spacing-1px">
                    What people say
                  </span>
                  <h5 className="alt-font text-extra-dark-gray font-weight-600 letter-spacing-minus-1px">
                    Client Testimonials
                  </h5>
                </div>
              </div>
              <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 justify-content-center margin-9-rem-bottom lg-margin-7-rem-bottom">
                {/* start testimonial item */}
                <div
                  className="col md-margin-30px-bottom xs-margin-15px-bottom wow animate__fadeIn"
                  data-wow-delay="0.2s"
                >
                  <div className="testimonials-style-02 border-radius-5px overflow-hidden">
                    <img
                      alt=""
                      className="d-inline-block"
                      src="images/testimonial-img-09.jpg"
                    />
                    <div className="testimonials-content padding-3-half-rem-all text-center bg-white lg-padding-2-half-rem-lr">
                      <div className="testimonials-rounded-icon bg-white rounded-circle">
                        <i className="fa fa-quote-left icon-small text-gradient-light-purple-light-orange" />
                      </div>
                      <p>
                        Lorem ipsum dolor amet consectetur do eiusmod tempor
                        incididunt labore ut enim ad minim veniam
                      </p>
                      <span className="alt-font font-weight-500 text-extra-dark-gray text-uppercase d-block">
                        Jeremy Smith
                      </span>
                      <span className="alt-font font-weight-500 text-small text-uppercase d-block">
                        Co Founder
                      </span>
                    </div>
                  </div>
                </div>
                {/* end testimonial item */}
                {/* start testimonial item */}
                <div
                  className="col md-margin-30px-bottom xs-margin-15px-bottom wow animate__fadeIn"
                  data-wow-delay="0.4s"
                >
                  <div className="testimonials-style-02 border-radius-5px overflow-hidden">
                    <img
                      alt=""
                      className="d-inline-block"
                      src="images/testimonial-img-10.jpg"
                    />
                    <div className="testimonials-content padding-3-half-rem-all text-center bg-white lg-padding-2-half-rem-lr">
                      <div className="testimonials-rounded-icon bg-white rounded-circle">
                        <i className="fa fa-quote-left icon-small text-gradient-light-purple-light-orange" />
                      </div>
                      <p>
                        Lorem ipsum dolor amet consectetur do eiusmod tempor
                        incididunt labore ut enim ad minim veniam
                      </p>
                      <span className="alt-font font-weight-500 text-extra-dark-gray text-uppercase d-block">
                        Shoko mugikura
                      </span>
                      <span className="alt-font font-weight-500 text-small text-uppercase d-block">
                        Creative head
                      </span>
                    </div>
                  </div>
                </div>
                {/* end testimonial item */}
                {/* start testimonial item */}
                <div className="col wow animate__fadeIn" data-wow-delay="0.6s">
                  <div className="testimonials-style-02 border-radius-5px overflow-hidden">
                    <img
                      alt=""
                      className="d-inline-block"
                      src="images/testimonial-img-11.jpg"
                    />
                    <div className="testimonials-content padding-3-half-rem-all text-center bg-white lg-padding-2-half-rem-lr">
                      <div className="testimonials-rounded-icon bg-white rounded-circle">
                        <i className="fa fa-quote-left icon-small text-gradient-light-purple-light-orange" />
                      </div>
                      <p>
                        Lorem ipsum dolor amet consectetur do eiusmod tempor
                        incididunt labore ut enim ad minim veniam
                      </p>
                      <span className="alt-font font-weight-500 text-extra-dark-gray text-uppercase d-block">
                        Herman miller
                      </span>
                      <span className="alt-font font-weight-500 text-small text-uppercase d-block">
                        HR manager
                      </span>
                    </div>
                  </div>
                </div>
                {/* end testimonial item */}
              </div>
              <div className="row row-cols-1 row-cols-lg-6 row-cols-md-3 row-cols-sm-2 client-logo-style-04">
                {/* start client item */}
                <div className="col text-center sm-no-margin wow animate__fadeIn">
                  <div className="client-box padding-25px-all text-center">
                    <a href="#">
                      <img
                        alt="clients logo 01"
                        src="images/clients-logo-01.png"
                      />
                    </a>
                    <span className="client-overlay bg-white box-shadow-small border-radius-4px" />
                  </div>
                </div>
                {/* end client item */}
                {/* start client item */}
                <div className="col text-center sm-no-margin wow animate__fadeIn">
                  <div className="client-box padding-25px-all text-center">
                    <a href="#">
                      <img
                        alt="clients logo 01"
                        src="images/clients-logo-02.png"
                      />
                    </a>
                    <span className="client-overlay bg-white box-shadow-small border-radius-4px" />
                  </div>
                </div>
                {/* end client item */}
                {/* start client item */}
                <div className="col text-center sm-no-margin wow animate__fadeIn">
                  <div className="client-box padding-25px-all text-center">
                    <a href="#">
                      <img
                        alt="clients logo 01"
                        src="images/clients-logo-03.png"
                      />
                    </a>
                    <span className="client-overlay bg-white box-shadow-small border-radius-4px" />
                  </div>
                </div>
                {/* end client item */}
                {/* start client item */}
                <div className="col text-center sm-no-margin wow animate__fadeIn">
                  <div className="client-box padding-25px-all text-center">
                    <a href="#">
                      <img
                        alt="clients logo 01"
                        src="images/clients-logo-04.png"
                      />
                    </a>
                    <span className="client-overlay bg-white box-shadow-small border-radius-4px" />
                  </div>
                </div>
                {/* end client item */}
                {/* start client item */}
                <div className="col text-center sm-no-margin wow animate__fadeIn">
                  <div className="client-box padding-25px-all text-center">
                    <a href="#">
                      <img
                        alt="clients logo 01"
                        src="images/clients-logo-05.png"
                      />
                    </a>
                    <span className="client-overlay bg-white box-shadow-small border-radius-4px" />
                  </div>
                </div>
                {/* end client item */}
                {/* start client item */}
                <div className="col text-center sm-no-margin wow animate__fadeIn">
                  <div className="client-box padding-25px-all text-center">
                    <a href="#">
                      <img
                        alt="clients logo 01"
                        src="images/clients-logo-06.png"
                      />
                    </a>
                    <span className="client-overlay bg-white box-shadow-small border-radius-4px" />
                  </div>
                </div>
                {/* end client item */}
              </div>
            </div>
          </section>
          {/* end section */}
          {/* start section */}
          <section className="bg-light-gray overflow-visible position-relative pt-0 pb-md-0">
            <div className="container">
              <div className="z-index-6 bg-white border-radius-5px padding-65px-tb overlap-section-bottom md-padding-40px-all xs-padding-20px-lr">
                <div className="row g-0 align-items-center justify-content-center">
                  <div className="col-12 col-lg-5 offset-lg-1 col-md-7 col-sm-8 text-center text-md-start sm-margin-20px-bottom">
                    <h5 className="alt-font font-weight-500 text-extra-dark-gray w-95 mb-0 lg-w-100">
                      Litho is meant to simplify the website building.
                    </h5>
                  </div>
                  <div className="col-12 col-lg-4 offset-lg-2 col-md-5 col-sm-8 text-center text-md-start">
                    <a
                      href="https://www.youtube.com/watch?v=g0f_BRYJLJE"
                      className="popup-youtube video-icon-box video-icon-medium text-extra-dark-gray text-fast-blue-hover md-margin-30px-left sm-no-margin"
                    >
                      <span>
                        <span className="video-icon bg-gradient-light-purple-light-orange margin-20px-right">
                          <i className="icon-simple-line-control-play text-white" />
                          <span className="video-icon-sonar">
                            <span className="video-icon-sonar-bfr bg-gradient-light-purple-light-orange opacity-7" />
                            <span className="video-icon-sonar-afr bg-gradient-light-purple-light-orange" />
                          </span>
                        </span>
                        <span className="video-icon-text alt-font text-extra-medium font-weight-600 text-decoration-line-bottom text-uppercase">
                          Start your project
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* end section */}
          {/* start footer */}
          <footer className="footer-dark bg-slate-blue position-relative overlap-gap-section-bottom sm-padding-50px-top">
            <div className="footer-top padding-five-bottom lg-padding-eight-bottom md-padding-50px-bottom">
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
      </>
    );
  }
}

export default Services;
