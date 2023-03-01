import React, { Component } from "react";
class ContactUs extends React.Component {
  render() {
    return (
      <>
         <div>
  {/* start header */}
  <header>
    {/* start navigation */}
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent header-light fixed-top border-bottom border-color-black-transparent header-reverse-scroll">
      <div className="container-lg nav-header-container">
        <div className="col-auto col-sm-6 col-lg-2 me-auto ps-lg-0">
          <a className="navbar-brand" href="index.html">
            <img src="images/logo-black.png" data-at2x="images/logo-black@2x.png" className="default-logo" alt="" />
            <img src="images/logo-fast-blue-black.png" data-at2x="images/logo-fast-blue-black@2x.png" className="alt-logo" alt="" />
            <img src="images/logo-fast-blue-black.png" data-at2x="images/logo-fast-blue-black@2x.png" className="mobile-logo" alt="" />
          </a>
        </div>
        <div className="col-auto menu-order px-lg-0">
          <button className="navbar-toggler float-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-label="Toggle navigation">
            <span className="navbar-toggler-line" />
            <span className="navbar-toggler-line" />
            <span className="navbar-toggler-line" />
            <span className="navbar-toggler-line" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav alt-font">
              <li className="nav-item dropdown megamenu">
                <a href="#" className="nav-link">Home</a>
                <i className="fa fa-angle-down dropdown-toggle" data-bs-toggle="dropdown" aria-hidden="true" />
                <div className="menu-back-div dropdown-menu megamenu-content" role="menu">
                  <div className="d-lg-flex justify-content-center">
                    <ul className="d-lg-inline-block">
                      <li className="dropdown-header">Corporate</li>
                      <li><a href="home-startup.html">Startup</a></li>
                      <li><a href="home-business.html">Business</a></li>
                      <li><a href="home-corporate.html">Corporate</a></li>
                      <li><a href="home-finance.html">Finance</a></li>
                      <li><a href="home-application.html">Application</a></li>
                      <li><a href="home-consulting.html">Consulting</a></li>
                      <li><a href="home-digital-agency.html">Digital agency</a></li>
                      <li><a href="home-seo-agency.html">SEO agency</a></li>
                      <li><a href="home-events-conference.html">Events &amp; conference</a></li>
                      <li><a href="home-marketing-agency.html">Marketing agency</a></li>
                    </ul>
                    <ul className="d-lg-inline-block">
                      <li className="dropdown-header">Specialized</li>
                      <li><a href="home-restaurant.html">Restaurant</a></li>
                      <li><a href="home-architecture.html">Architecture</a></li>
                      <li><a href="home-hotel-resort.html">Hotel &amp; resort</a></li>
                      <li><a href="home-travel-agency.html">Travel agency</a></li>
                      <li><a href="home-yoga-meditation.html">Yoga &amp; meditation</a></li>
                      <li><a href="home-gym-fitness.html">Gym &amp; fitness</a></li>
                      <li><a href="home-spa-salon.html">Spa salon</a></li>
                      <li><a href="home-cafe.html">Cafe</a></li>
                      <li><a href="home-decor.html">Home decor</a></li>
                      <li><a href="home-dentist.html">Dentist</a></li>
                      <li><a href="home-interior-design.html">Interior design</a></li>
                    </ul>
                    <ul className="d-lg-inline-block">
                      <li className="dropdown-header">Portfolio</li>
                      <li><a href="home-design-agency.html">Design agency</a></li>
                      <li><a href="home-web-agency.html">Web agency</a></li>
                      <li><a href="home-creative-agency.html">Creative agency</a></li>
                      <li><a href="home-freelancer.html">Freelancer</a></li>
                      <li><a href="home-branding-agency.html">Branding agency</a></li>
                      <li><a href="home-photography.html">Photography</a></li>
                      <li><a href="home-personal-portfolio.html">Personal portfolio</a></li>
                      <li><a href="home-vertical-portfolio.html">Vertical portfolio</a></li>
                      <li><a href="home-interactive-portfolio.html">Interactive portfolio</a></li>
                      <li><a href="home-split-portfolio.html">Split portfolio</a></li>
                      <li><a href="home-creative-portfolio.html">Creative portfolio</a></li>
                    </ul>
                    <ul className="d-lg-inline-block">
                      <li className="dropdown-header">Other</li>
                      <li><a href="home-furniture-shop.html">Furniture shop</a></li>
                      <li><a href="home-fashion-shop.html">Fashion shop</a></li>
                      <li><a href="home-magazine.html">Magazine</a></li>
                      <li><a href="home-lifestyle-blog.html">Lifestyle blog</a></li>
                      <li><a href="home-classic-blog.html">Classic blog</a></li>
                      <li><a href="home-blog-metro.html">Blog metro</a></li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown simple-dropdown">
                <a href="#" className="nav-link">Pages</a>
                <i className="fa fa-angle-down dropdown-toggle" data-bs-toggle="dropdown" aria-hidden="true" />
                <ul className="dropdown-menu" role="menu">
                  <li className="dropdown">
                    <a data-bs-toggle="dropdown" href="javascript:void(0);">About<i className="fas fa-angle-right dropdown-toggle" /></a>
                    <ul className="dropdown-menu">
                      <li><a href="about-me.html">About me</a></li>
                      <li><a href="about-us.html">About us</a></li>
                      <li><a href="our-story.html">Our story</a></li>
                      <li><a href="who-we-are.html">Who we are</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a data-bs-toggle="dropdown" href="javascript:void(0);">Services<i className="fas fa-angle-right dropdown-toggle" /></a>
                    <ul className="dropdown-menu">
                      <li><a href="our-services.html">Our services</a></li>
                      <li><a href="what-we-offers.html">What we offer</a></li>
                      <li><a href="our-process.html">Our process</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a data-bs-toggle="dropdown" href="javascript:void(0);">Contact<i className="fas fa-angle-right dropdown-toggle" /></a>
                    <ul className="dropdown-menu">
                      <li><a href="contact-us-simple.html">Contact simple</a></li>
                      <li><a href="contact-us-classic.html">Contact classic</a></li>
                      <li><a href="contact-us-modern.html">Contact modern</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a data-bs-toggle="dropdown" href="javascript:void(0);">Additional pages<i className="fas fa-angle-right dropdown-toggle" /></a>
                    <ul className="dropdown-menu">
                      <li><a href="our-team.html">Our team</a></li>
                      <li><a href="latest-news.html">Latest news</a></li>
                      <li><a href="pricing-packages.html">Pricing packages</a></li>
                      <li><a href="404.html">Error 404</a></li>
                      <li><a href="maintenance.html">Maintenance</a></li>
                      <li><a href="coming-soon.html">Coming soon</a></li>
                      <li><a href="coming-soon-v2.html">Coming soon - V2</a></li>
                      <li><a href="faq.html">FAQ's</a></li>
                      <li><a href="search-result.html">Search result</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown simple-dropdown">
                <a href="#" className="nav-link">Portfolio</a>
                <i className="fa fa-angle-down dropdown-toggle" data-bs-toggle="dropdown" aria-hidden="true" />
                <ul className="dropdown-menu" role="menu">
                  <li className="dropdown">
                    <a data-bs-toggle="dropdown" href="javascript:void(0);">Portfolio classic<i className="fas fa-angle-right dropdown-toggle" /></a>
                    <ul className="dropdown-menu">
                      <li><a href="portfolio-classic-two-column.html">Classic 2 column</a></li>
                      <li><a href="portfolio-classic-three-column.html">Classic 3 column</a></li>
                      <li><a href="portfolio-classic-four-column.html">Classic 4 column</a></li>
                      <li><a href="portfolio-classic-masonry.html">Classic masonry</a></li>
                      <li><a href="portfolio-classic-metro.html">Classic metro</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a data-bs-toggle="dropdown" href="javascript:void(0);">Portfolio boxed<i className="fas fa-angle-right dropdown-toggle" /></a>
                    <ul className="dropdown-menu">
                      <li><a href="portfolio-boxed-two-column.html">Boxed 2 column</a></li>
                      <li><a href="portfolio-boxed-three-column.html">Boxed 3 column</a></li>
                      <li><a href="portfolio-boxed-four-column.html">Boxed 4 column</a></li>
                      <li><a href="portfolio-boxed-masonry.html">Boxed masonry</a></li>
                      <li><a href="portfolio-boxed-metro.html">Boxed metro</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a data-bs-toggle="dropdown" href="javascript:void(0);">Portfolio colorful<i className="fas fa-angle-right dropdown-toggle" /></a>
                    <ul className="dropdown-menu">
                      <li><a href="portfolio-colorful-two-column.html">Colorful 2 column</a></li>
                      <li><a href="portfolio-colorful-three-column.html">Colorful 3 column</a></li>
                      <li><a href="portfolio-colorful-four-column.html">Colorful 4 column</a></li>
                      <li><a href="portfolio-colorful-masonry.html">Colorful masonry</a></li>
                      <li><a href="portfolio-colorful-metro.html">Colorful metro</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a data-bs-toggle="dropdown" href="javascript:void(0);">Portfolio bordered<i className="fas fa-angle-right dropdown-toggle" /></a>
                    <ul className="dropdown-menu">
                      <li><a href="portfolio-bordered-two-column.html">Bordered 2 column</a></li>
                      <li><a href="portfolio-bordered-three-column.html">Bordered 3 column</a></li>
                      <li><a href="portfolio-bordered-four-column.html">Bordered 4 column</a></li>
                      <li><a href="portfolio-bordered-masonry.html">Bordered masonry</a></li>
                      <li><a href="portfolio-bordered-metro.html">Bordered metro</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a data-bs-toggle="dropdown" href="javascript:void(0);">Portfolio overlay<i className="fas fa-angle-right dropdown-toggle" /></a>
                    <ul className="dropdown-menu">
                      <li><a href="portfolio-overlay-two-column.html">Overlay 2 column</a></li>
                      <li><a href="portfolio-overlay-three-column.html">Overlay 3 column</a></li>
                      <li><a href="portfolio-overlay-four-column.html">Overlay 4 column</a></li>
                      <li><a href="portfolio-overlay-masonry.html">Overlay masonry</a></li>
                      <li><a href="portfolio-overlay-metro.html">Overlay metro</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a data-bs-toggle="dropdown" href="javascript:void(0);">Portfolio switch image<i className="fas fa-angle-right dropdown-toggle" /></a>
                    <ul className="dropdown-menu">
                      <li><a href="portfolio-switch-image-two-column.html">Switch image 2 column</a></li>
                      <li><a href="portfolio-switch-image-three-column.html">Switch image 3 column</a></li>
                      <li><a href="portfolio-switch-image-four-column.html">Switch image 4 column</a></li>
                      <li><a href="portfolio-switch-image-masonry.html">Switch image masonry</a></li>
                      <li><a href="portfolio-switch-image-metro.html">Switch image metro</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a data-bs-toggle="dropdown" href="javascript:void(0);">Portfolio other<i className="fas fa-angle-right dropdown-toggle" /></a>
                    <ul className="dropdown-menu">
                      <li><a href="portfolio-scattered.html">Portfolio scattered</a></li>
                      <li><a href="portfolio-justified-gallery.html">Justified gallery</a></li>
                      <li><a href="portfolio-slider.html">Portfolio slider</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a data-bs-toggle="dropdown" href="javascript:void(0);">Single project page<i className="fas fa-angle-right dropdown-toggle" /></a>
                    <ul className="dropdown-menu">
                      <li><a href="single-project-page-01.html">Single project page 01</a></li>
                      <li><a href="single-project-page-02.html">Single project page 02</a></li>
                      <li><a href="single-project-page-03.html">Single project page 03</a></li>
                      <li><a href="single-project-page-04.html">Single project page 04</a></li>
                      <li><a href="single-project-page-05.html">Single project page 05</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown megamenu">
                <a href="javascript:void(0);" className="nav-link">Elements</a>
                <i className="fa fa-angle-down dropdown-toggle" data-bs-toggle="dropdown" aria-hidden="true" />
                <div className="menu-back-div dropdown-menu megamenu-content" role="menu">
                  <div className="d-lg-flex justify-content-center">
                    <ul className="d-lg-inline-block">
                      <li className="dropdown-header">General</li>
                      <li><a href="accordions.html"><i className="ti-layout-accordion-separated" />Accordions</a></li>
                      <li><a href="buttons.html"><i className="ti-mouse" />Buttons</a></li>
                      <li><a href="team.html"><i className="ti-user" />Team</a></li>
                      <li><a href="team-carousel.html"><i className="ti-layout-slider-alt" />Team carousel</a></li>
                      <li><a href="clients.html"><i className="ti-id-badge" />Clients</a></li>
                      <li><a href="client-carousel.html"><i className="ti-layout-slider" />Client carousel</a></li>
                      <li><a href="subscribe.html"><i className="ti-crown" />Subscribe</a></li>
                      <li><a href="call-to-action.html"><i className="ti-eye" />Call to action</a></li>
                      <li><a href="tab.html"><i className="ti-layout-tab" />Tab</a></li>
                      <li><a href="google-map.html"><i className="ti-location-pin" />Google map</a></li>
                      <li><a href="contact-form.html"><i className="ti-clipboard" />Contact form</a></li>
                      <li><a href="image-gallery.html"><i className="ti-gallery" />Image gallery</a></li>
                    </ul>
                    <ul className="d-lg-inline-block">
                      <li className="dropdown-header">Content &amp; infographics</li>
                      <li><a href="progress-bar.html"><i className="icon-hourglass" />Progress bar</a></li>
                      <li><a href="icon-with-text.html"><i className="ti-layout-media-left" />Icon with text</a></li>
                      <li><a href="overline-icon-box.html"><i className="ti-write" />Over line icon box</a></li>
                      <li><a href="custom-icon-with-text.html"><i className="ti-vector" />Custom icon with text</a></li>
                      <li><a href="counters.html"><i className="ti-timer" />Counters</a></li>
                      <li><a href="countdown.html"><i className="ti-alarm-clock" />Countdown</a></li>
                      <li><a href="pie-charts.html"><i className="ti-pie-chart" />Pie charts</a></li>
                      <li><a href="fancy-text-box.html"><i className="ti-layout-cta-center" />Fancy text box</a></li>
                      <li><a href="text-box.html"><i className="ti-layout-cta-left" />Text box</a></li>
                      <li><a href="fancy-text.html"><i className="ti-text" />Fancy text</a></li>
                    </ul>
                    <ul className="d-lg-inline-block">
                      <li className="dropdown-header">Interactive</li>
                      <li><a href="testimonials.html"><i className="ti-thought" />Testimonials</a></li>
                      <li><a href="testimonials-carousel.html"><i className="ti-comments" />Testimonials carousel</a></li>
                      <li><a href="video.html"><i className="ti-video-camera" />Video</a></li>
                      <li><a href="interactive-banners.html"><i className="ti-image" />Interactive banners</a></li>
                      <li><a href="services.html"><i className="ti-bookmark-alt" />Services</a></li>
                      <li><a href="info-banner.html"><i className="ti-layout-slider" />Info banner</a></li>
                      <li><a href="rotate-box.html"><i className="ti-package" />Rotate box</a></li>
                      <li><a href="process-step.html"><i className="ti-layers" />Process step</a></li>
                      <li><a href="instagram.html"><i className="ti-instagram" />Instagram</a></li>
                      <li><a href="parallax-scrolling.html"><i className="ti-exchange-vertical" />Parallax scrolling</a></li>
                      <li><a href="text-slider.html"><i className="ti-layout-media-overlay" />Text slider</a></li>
                    </ul>
                    <ul className="d-lg-inline-block">
                      <li className="dropdown-header">Text &amp; containers</li>
                      <li><a href="heading.html"><i className="ti-text" />Heading</a></li>
                      <li><a href="dropcaps.html"><i className="ti-smallcap" />Drop caps</a></li>
                      <li><a href="columns.html"><i className="ti-layout" />Columns</a></li>
                      <li><a href="blockquote.html"><i className="ti-quote-left" />Blockquote</a></li>
                      <li><a href="highlights.html"><i className="ti-underline" />Highlights</a></li>
                      <li><a href="message-box.html"><i className="ti-layout-media-right-alt" />Message box</a></li>
                      <li><a href="social-icons.html"><i className="ti-user" />Social icons</a></li>
                      <li><a href="lists.html"><i className="ti-list" />Lists</a></li>
                      <li><a href="seperators.html"><i className="ti-layout-line-solid" />Separators</a></li>
                      <li><a href="pricing-table.html"><i className="ti-layout-column2" />Pricing table</a></li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown simple-dropdown">
                <a href="#" className="nav-link">Features</a>
                <i className="fa fa-angle-down dropdown-toggle" data-bs-toggle="dropdown" aria-hidden="true" />
                <ul className="dropdown-menu" role="menu">
                  <li className="dropdown">
                    <a data-bs-toggle="dropdown" href="javascript:void(0);">Header and menu<i className="fas fa-angle-right dropdown-toggle" /></a>
                    <ul className="dropdown-menu">
                      <li><a href="transparent-header.html">Transparent header</a></li>
                      <li><a href="white-header.html">White header</a></li>
                      <li><a href="dark-header.html">Dark header</a></li>
                      <li><a href="header-with-top-bar.html">Header with top bar</a></li>
                      <li><a href="header-with-push.html">Header with push</a></li>
                      <li><a href="center-navigation.html">Center navigation</a></li>
                      <li><a href="center-logo.html">Center logo</a></li>
                      <li><a href="top-logo.html">Top logo</a></li>
                      <li><a href="one-page-navigation.html">One page navigation</a></li>
                      <li className="dropdown">
                        <a data-bs-toggle="dropdown" href="javascript:void(0);">Hamburger menu<i className="fas fa-angle-right dropdown-toggle" /></a>
                        <ul className="dropdown-menu">
                          <li><a href="hamburger-menu.html">Hamburger menu</a></li>
                          <li><a href="hamburger-menu-modern.html">Hamburger menu modern</a></li>
                          <li><a href="hamburger-menu-half.html">Hamburger menu half</a></li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a data-bs-toggle="dropdown" href="javascript:void(0);">Left menu<i className="fas fa-angle-right dropdown-toggle" /></a>
                        <ul className="dropdown-menu">
                          <li><a href="left-menu-classic.html">Left menu classic</a></li>
                          <li><a href="left-menu-modern.html">Left menu modern</a></li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a data-bs-toggle="dropdown" href="javascript:void(0);">Header type<i className="fas fa-angle-right dropdown-toggle" /></a>
                        <ul className="dropdown-menu">
                          <li><a href="header-always-fixed.html">Always fixed</a></li>
                          <li><a href="header-disable-fixed.html">Disable fixed</a></li>
                          <li><a href="header-reverse-scroll.html">Reverse scroll</a></li>
                          <li><a href="header-responsive-sticky.html">Responsive sticky</a></li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a data-bs-toggle="dropdown" href="javascript:void(0);">Mobile menu<i className="fas fa-angle-right dropdown-toggle" /></a>
                        <ul className="dropdown-menu">
                          <li><a href="mobile-menu-classic.html">Classic</a></li>
                          <li><a href="mobile-menu-modern.html">Modern</a></li>
                          <li><a href="mobile-menu-full-screen.html">Full screen</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a data-bs-toggle="dropdown" href="javascript:void(0);">Footer<i className="fas fa-angle-right dropdown-toggle" /></a>
                    <ul className="dropdown-menu">
                      <li><a href="footer-style-01.html">Footer style 01</a></li>
                      <li><a href="footer-style-02.html">Footer style 02</a></li>
                      <li><a href="footer-style-03.html">Footer style 03</a></li>
                      <li><a href="footer-style-04.html">Footer style 04</a></li>
                      <li><a href="footer-style-05.html">Footer style 05</a></li>
                      <li><a href="footer-style-06.html">Footer style 06</a></li>
                      <li><a href="footer-style-07.html">Footer style 07</a></li>
                      <li><a href="footer-style-08.html">Footer style 08</a></li>
                      <li><a href="footer-style-09.html">Footer style 09</a></li>
                      <li><a href="footer-style-10.html">Footer style 10</a></li>
                      <li><a href="footer-style-11.html">Footer style 11</a></li>
                      <li><a href="footer-style-12.html">Footer style 12</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a data-bs-toggle="dropdown" href="javascript:void(0);">Page title<i className="fas fa-angle-right dropdown-toggle" /></a>
                    <ul className="dropdown-menu">
                      <li><a href="page-title-left-alignment.html">Left alignment</a></li>
                      <li><a href="page-title-right-alignment.html">Right alignment</a></li>
                      <li><a href="page-title-center-alignment.html">Center alignment</a></li>
                      <li><a href="page-title-colorful-style.html">Colorful style</a></li>
                      <li><a href="page-title-big-typography.html">Big typography</a></li>
                      <li><a href="page-title-parallax-background.html">Parallax background</a></li>
                      <li><a href="page-title-separate-breadcrumbs.html">Separate breadcrumbs</a></li>
                      <li><a href="page-title-gallery-background.html">Gallery background</a></li>
                      <li><a href="page-title-background-video.html">Background video</a></li>
                      <li><a href="page-title-mini-version.html">Mini version</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a data-bs-toggle="dropdown" href="javascript:void(0);">Modal popup<i className="fas fa-angle-right dropdown-toggle" /></a>
                    <ul className="dropdown-menu">
                      <li><a href="modal-simple.html">Simple modal</a></li>
                      <li><a href="modal-subscription.html">Subscription</a></li>
                      <li><a href="modal-contact-form.html">Contact form</a></li>
                      <li><a href="modal-youtube-video.html">Youtube video</a></li>
                      <li><a href="modal-vimeo-video.html">Vimeo video</a></li>
                      <li><a href="modal-google-map.html">Google map</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a data-bs-toggle="dropdown" href="javascript:void(0);">Icon packs<i className="fas fa-angle-right dropdown-toggle" /></a>
                    <ul className="dropdown-menu">
                      <li><a href="icon-packs-icons-mind-line.html">Icons mind line</a></li>
                      <li><a href="icon-packs-icons-mind-solid.html">Icons mind solid</a></li>
                      <li><a href="icon-packs-feather.html">Feather</a></li>
                      <li><a href="icon-packs-font-awesome.html">Font awesome</a></li>
                      <li><a href="icon-packs-et-line.html">ET line</a></li>
                      <li><a href="icon-packs-themify.html">Themify</a></li>
                      <li><a href="icon-packs-simple-line.html">Simple line</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="animations.html">Animations</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown simple-dropdown">
                <a href="#" className="nav-link">Blog</a>
                <i className="fa fa-angle-down dropdown-toggle" data-bs-toggle="dropdown" aria-hidden="true" />
                <ul className="dropdown-menu" role="menu">
                  <li className="dropdown"><a href="blog-grid.html">Blog grid</a></li>
                  <li className="dropdown"><a href="blog-masonry.html">Blog masonry</a></li>
                  <li className="dropdown"><a href="blog-classic.html">Blog classic</a></li>
                  <li className="dropdown"><a href="blog-simple.html">Blog simple</a></li>
                  <li className="dropdown"><a href="blog-side-image.html">Blog side image</a></li>
                  <li className="dropdown"><a href="blog-metro.html">Blog metro</a></li>
                  <li className="dropdown"><a href="blog-overlay-image.html">Blog overlay image</a></li>
                  <li className="dropdown"><a href="blog-modern.html">Blog modern</a></li>
                  <li className="dropdown"><a href="blog-clean.html">Blog clean</a></li>
                  <li className="dropdown"><a href="blog-widget.html">Blog widget</a></li>
                  <li className="dropdown"><a href="blog-standard.html">Blog standard</a></li>
                  <li className="dropdown">
                    <a data-bs-toggle="dropdown" href="javascript:void(0);">Post layout<i className="fas fa-angle-right dropdown-toggle" /></a>
                    <ul className="dropdown-menu">
                      <li><a href="blog-post-layout-01.html">Blog post layout 01</a></li>
                      <li><a href="blog-post-layout-02.html">Blog post layout 02</a></li>
                      <li><a href="blog-post-layout-03.html">Blog post layout 03</a></li>
                      <li><a href="blog-post-layout-04.html">Blog post layout 04</a></li>
                      <li><a href="blog-post-layout-05.html">Blog post layout 05</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a data-bs-toggle="dropdown" href="javascript:void(0);">Post types<i className="fas fa-angle-right dropdown-toggle" /></a>
                    <ul className="dropdown-menu">
                      <li><a href="blog-standard-post.html">Standard post</a></li>
                      <li><a href="blog-gallery-post.html">Gallery post</a></li>
                      <li><a href="blog-slider-post.html">Slider post</a></li>
                      <li><a href="blog-html5-video-post.html">HTML5 video post</a></li>
                      <li><a href="blog-youtube-video-post.html">Youtube video post</a></li>
                      <li><a href="blog-vimeo-video-post.html">Vimeo video post</a></li>
                      <li><a href="blog-audio-post.html">Audio post</a></li>
                      <li><a href="blog-blockquote-post.html">Blockquote post</a></li>
                      <li><a href="blog-full-width-post.html">Full width post</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown megamenu">
                <a href="javascript:void(0);" className="nav-link">Shop</a>
                <i className="fa fa-angle-down dropdown-toggle" data-bs-toggle="dropdown" aria-hidden="true" />
                <div className="menu-back-div dropdown-menu megamenu-content" role="menu">
                  <div className="d-lg-flex justify-content-center">
                    <ul className="d-lg-inline-block md-margin-15px-bottom">
                      <li className="dropdown-header">Shop layout</li>
                      <li><a href="shop-wide.html">Shop wide</a></li>
                      <li><a href="shop-left-sidebar.html">Left sidebar</a></li>
                      <li><a href="shop-right-sidebar.html">Right sidebar</a></li>
                      <li><a href="shop-only-categories.html">Only categories</a></li>
                      <li><a href="single-product.html">Single product</a></li>
                      <li className="dropdown-header">Utility pages</li>
                      <li><a href="shopping-cart.html">Shopping cart</a></li>
                      <li><a href="checkout.html">Checkout</a></li>
                      <li><a href="login-register.html">Login / Register</a></li>
                    </ul>
                    <ul className="d-lg-inline-block d-none small-gap">
                      <li>
                        <a href="index.html" className="menu-banner-image"><img src="images/menu-banner-01.jpg" alt="" /></a>
                      </li>
                    </ul>
                    <ul className="d-lg-inline-block d-none no-padding-right">
                      <li>
                        <a href="index.html" className="menu-banner-image"><img src="images/menu-banner-02.jpg" alt="" /></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-auto text-end pe-0 font-size-0">
          <div className="header-search-icon search-form-wrapper">
            <a href="javascript:void(0)" className="search-form-icon header-search-form"><i className="feather icon-feather-search" /></a>
            {/* start search input */}
            <div className="form-wrapper">
              <button title="Close" type="button" className="search-close alt-font">×</button>
              <form id="search-form" role="search" method="get" className="search-form text-start" action="search-result.html">
                <div className="search-form-box">
                  <span className="search-label alt-font text-small text-uppercase text-medium-gray">What are you looking for?</span>
                  <input className="search-input alt-font" id="search-form-input5e219ef164995" placeholder="Enter your keywords..." name="s" defaultValue type="text" autoComplete="off" />
                  <button type="submit" className="search-button">
                    <i className="feather icon-feather-search" aria-hidden="true" />
                  </button>
                </div>
              </form>
            </div>
            {/* end search input */}
          </div>
          <div className="header-language dropdown d-lg-inline-block">
            <a href="javascript:void(0);"><i className="feather icon-feather-globe" /></a>
            <ul className="dropdown-menu alt-font">
              <li><a href="javascript:void(0);" title="English"><span className="icon-country"><img src="images/country-flag-16X16/usa.png" alt="" /></span>English</a></li>
              <li><a href="javascript:void(0);" title="England"><span className="icon-country"><img src="images/country-flag-16X16/england.png" alt="" /></span>England</a></li>
              <li><a href="javascript:void(0);" title="France"><span className="icon-country"><img src="images/country-flag-16X16/france.png" alt="" /></span>France</a></li>
              <li><a href="javascript:void(0);" title="Russian"><span className="icon-country"><img src="images/country-flag-16X16/russian.png" alt="" /></span>Russian</a></li>
              <li><a href="javascript:void(0);" title="Spain"><span className="icon-country"><img src="images/country-flag-16X16/spain.png" alt="" /></span>Spain</a></li>
            </ul>
          </div>
          <div className="header-cart-icon dropdown">
            <a href="javascript:void(0);"><i className="feather icon-feather-shopping-bag" /><span className="cart-count alt-font bg-fast-blue text-white">2</span></a>
            <ul className="dropdown-menu cart-item-list">
              <li className="cart-item align-items-center">
                <a href="javascript:void(0);" className="alt-font close">×</a>
                <div className="product-image">
                  <a href="single-product.html"><img src="images/cart-image-01.jpg" className="cart-thumb" alt="" /></a>
                </div>
                <div className="product-detail alt-font">
                  <a href="single-product.html">Delica Omtantur</a>
                  <span className="item-ammount">$100.00</span> 
                </div>
              </li>
              <li className="cart-item align-items-center">
                <a href="javascript:void(0);" className="alt-font close">×</a>
                <div className="product-image">
                  <a href="single-product.html"><img src="images/cart-image-02.jpg" className="cart-thumb" alt="" /></a>
                </div>
                <div className="product-detail alt-font">
                  <a href="single-product.html">Gianvito Rossi</a>
                  <span className="item-ammount">$99.99</span> 
                </div>
              </li>
              <li className="cart-item cart-total">
                <div className="alt-font margin-15px-bottom"><span className="w-50 d-inline-block text-medium text-uppercase">Subtotal:</span><span className="w-50 d-inline-block text-end text-medium font-weight-500">$199.99</span></div>
                <a href="shopping-cart.html" className="btn btn-small btn-dark-gray">view cart</a>
                <a href="checkout.html" className="btn btn-small btn-fast-blue">checkout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
  {/* end header */}
  {/* start page title */}
  <section className="bg-gradient-light-orange-light-pink">
    <div className="container">
      <div className="d-flex flex-column flex-md-row justify-content-end extra-small-screen align-items-end">
        <div className="w-100 w-md-50 page-title-extra-small">
          <h1 className="alt-font text-extra-dark-gray position-relative padding-90px-left padding-15px-right sm-padding-55px-left mb-md-0 sm-margin-20px-bottom"><span className="page-title-separator-line bg-black w-70px sm-w-40px" />Contact us modern</h1>
        </div>
        <div className="w-100 w-md-50">
          <h4 className="alt-font font-weight-500 text-extra-dark-gray mb-0">We create brand new corporate identities</h4>
        </div>
      </div>
    </div>
  </section>
  {/* end page title */} 
  {/* start section */}
  <section>
    <div className="container">
      <div className="row align-items-end">
        <div className="col-12 col-lg-6 col-md-4 sm-margin-30px-bottom">
          <h5 className="alt-font w-50 text-extra-dark-gray font-weight-500 mb-0 lg-w-65 md-w-100">How can we help you today?</h5>
        </div>
        <div className="col-12 col-lg-6 col-md-8">
          <div className="row">
            <div className="col-12 col-sm-6 xs-margin-30px-bottom"> 
              <span className="alt-font d-block text-extra-dark-gray font-weight-500 margin-10px-bottom">London</span>
              <p className="w-80 margin-5px-bottom lg-w-90">401 Broadway, 24th Floor, Orchard View, London, UK</p>
              <span className="d-block margin-10px-bottom">Tel: 123 456 7890</span>
              <a href="https://www.google.com/maps?ll=-37.817214,144.955925&z=16&t=m&hl=en-US&gl=IN&mapclient=embed&cid=13153204942596594449" target="_blank" className="text-uppercase text-small text-extra-dark-gray font-weight-500 text-decoration-line-bottom">View on google map</a>
            </div>
            <div className="col-12 col-sm-6">
              <span className="alt-font d-block text-extra-dark-gray font-weight-500 margin-10px-bottom">France</span>
              <p className="w-80 margin-5px-bottom lg-w-90">27 Eden Walk Eden Centre, Orchard View, Paris, France</p>
              <span className="d-block margin-10px-bottom">Tel: 123 456 7890</span>
              <a href="https://www.google.com/maps?ll=-37.817214,144.955925&z=16&t=m&hl=en-US&gl=IN&mapclient=embed&cid=13153204942596594449" target="_blank" className="text-uppercase text-small text-extra-dark-gray font-weight-500 text-decoration-line-bottom">View on google map</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end section */}
  {/* start section */}
  <section className="one-third-screen p-0 position-relative wow animate__fadeIn">
    <div className="container">
      <div className="row align-items-center justify-content-center one-third-screen">
        <a href="#" className="btn btn-extra-large btn-dark-gray btn-box-shadow z-index-2">litho design life</a>
      </div>
    </div>  
    {/* start slider */}
    <div className="swiper-container position-absolute top-0px" data-slider-options="{ &quot;loop&quot;: true, &quot;slidesPerView&quot;: 1, &quot;effect&quot;: &quot;fade&quot;, &quot;navigation&quot;: { &quot;nextEl&quot;: &quot;.swiper-auto-next&quot;, &quot;prevEl&quot;: &quot;.swiper-auto-prev&quot; }, &quot;keyboard&quot;: { &quot;enabled&quot;: true, &quot;onlyInViewport&quot;: true }, &quot;autoplay&quot;: { &quot;delay&quot;: 5000, &quot;disableOnInteraction&quot;: false }, &quot;fadeEffect&quot;: { &quot;crossFade&quot;: true } }">
      <div className="swiper-wrapper">
        {/* start slider item */}
        <div className="swiper-slide cover-background" style={{backgroundImage: 'url("images/contact-us-modern-01.jpg")'}} />{/* end slider item */}
        {/* start slider item */}
        <div className="swiper-slide cover-background" style={{backgroundImage: 'url("images/contact-us-modern-02.jpg")'}} />{/* end slider item */}
        {/* start slider item */}
        <div className="swiper-slide cover-background" style={{backgroundImage: 'url("images/contact-us-modern-03.jpg")'}} />{/* end slider item */}
      </div>
    </div>
    {/* end slider */}
  </section>
  {/* end section */}
  {/* start section */}
  <section className="big-section wow animate__fadeIn">
    <div className="container">
      <div className="row align-items-end justify-content-center">
        <div className="col-12 col-lg-5 col-md-8 md-margin-50px-bottom">
          <div className="feature-box feature-box-left-icon-middle padding-4-rem-all bg-light-gray overflow-hidden background-position-top background-no-repeat lg-padding-3-rem-lr md-padding-5-rem-all xs-padding-3-half-rem-all" style={{backgroundImage: 'url("images/quotes-01.png")'}}>
            <div className="feature-box-icon margin-25px-right xs-margin-15px-right">
              <img className="border-radius-100 w-80px xs-w-50px" src="images/user-01.jpg" alt="" />
            </div>
            <div className="feature-box-content">
              <div className="text-large text-extra-dark-gray alt-font font-weight-500 w-90">More comfortable talking with us?</div>
            </div>
            <p className="margin-30px-top margin-15px-bottom w-80 lg-w-100">Schedule a 15 minute intro call with us. He'll answer your questions and discuss.</p>
            <a href="#" className="text-small text-extra-dark-gray font-weight-500 text-decoration-line-bottom text-uppercase">Pick a schedule</a>
          </div>
        </div>
        <div className="col-12 col-lg-6 offset-lg-1 col-md-8">
          <h4 className="alt-font text-black font-weight-600">Let's get in touch with us</h4>
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
            <iframe className="w-100 h-100 filter-grayscale-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.843821917424!2d144.956054!3d-37.817127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1427947693651" />
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
            <span className="text-extra-dark-gray alt-font text-medium">+1 123 456 7890</span>
          </div>
        </div>
        {/* end feature box item*/}
        {/* start feature box item*/}
        <div className="col-12 col-sm-auto sm-margin-15px-bottom wow animate__fadeIn" data-wow-delay="0.4s">
          <div className="d-flex justify-content-center align-items-center padding-15px-lr h-100">
            <i className="feather icon-feather-mail align-middle icon-extra-small text-gradient-magenta-orange margin-10px-right" />
            <a href="mailto:no-reply@domain.com" className="text-extra-dark-gray alt-font text-medium">no-reply@domain.com</a>
          </div>
        </div>
        {/* end feature box item*/}
        {/* start feature box item*/}
        <div className="col-12 col-sm-auto wow animate__fadeIn" data-wow-delay="0.6s">
          <div className="d-flex justify-content-center align-items-center padding-15px-lr h-100">
            <i className="feather icon-feather-globe align-middle icon-extra-small text-gradient-magenta-orange margin-10px-right" />
            <a href="#" className="text-extra-dark-gray alt-font text-medium">www.yourdomain.com</a>
          </div>
        </div>
        {/* end feature box item*/}
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
            <span className="alt-font font-weight-500 d-block text-white margin-20px-bottom xs-margin-10px-bottom">Company</span>
            <ul>
              <li><a href="about-us.html">About company</a></li>
              <li><a href="our-services.html">Company services</a></li>
              <li><a href="our-team.html">Job opportunities</a></li>
              <li><a href="contact-us-classic.html">Contact us</a></li>
            </ul>
          </div>
          {/* end footer column */}
          {/* start footer column */}
          <div className="col-12 col-lg-3 col-sm-6 md-margin-40px-bottom xs-margin-25px-bottom">
            <span className="alt-font font-weight-500 d-block text-white margin-20px-bottom xs-margin-10px-bottom">Customer</span>
            <ul>                           
              <li><a href="faq.html">Client support</a></li>
              <li><a href="pricing-packages.html">Pricing packages</a></li>
              <li><a href="our-story.html">Company history</a></li>
              <li><a href="our-process.html">Our process</a></li>
            </ul>
          </div>
          {/* end footer column */}
          {/* start footer column */}
          <div className="col-12 col-lg-3 col-sm-6 xs-margin-25px-bottom">
            <span className="alt-font font-weight-500 d-block text-white margin-20px-bottom xs-margin-10px-bottom">Get in touch</span>
            <p className="w-85 margin-15px-bottom">27 Eden walk eden centre, Orchard view, Paris, France</p>
            <div><i className="feather icon-feather-phone-call icon-very-small margin-10px-right text-white" />+1 234 567 8910</div>
            <div><i className="feather icon-feather-mail icon-very-small margin-10px-right text-white" /><a href="#">info@yourdomain.com</a></div>
          </div>
          {/* end footer column */}
          {/* start footer column */}
          <div className="col-12 col-lg-3 col-sm-6">
            <span className="alt-font font-weight-500 d-block text-white margin-20px-bottom">Follow us on Instagram</span>
            <div className="w-100 d-inline-block margin-10px-top">
              <ul className="instafeed-grid instafeed-wrapper grid grid-3col xl-grid-3col lg-grid-3col md-grid-3col sm-grid-3col xs-grid-3col gutter-small" data-total={3}>
                <li className="grid-item"><figure><a href="#" data-href="{{link}}" target="_blank"><img src="#" data-src="{{image}}" className="insta-image" alt="" /><span className="insta-counts"><i className="fab fa-instagram" />{'{'}{'{'}likes{'}'}{'}'}</span></a></figure></li>
              </ul>
              <a className="alt-font text-extra-small text-uppercase font-weight-500 margin-20px-top d-inline-block" href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram icon-extra-small align-middle margin-10px-right text-gradient-light-purple-light-orange" /><span className="d-inline-block align-middle">Follow instagram</span></a>
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
            <a href="index.html" className="footer-logo"><img src="images/logo-white.png" data-at2x="images/logo-white@2x.png" alt="" /></a>
          </div>
          <div className="col-12 col-md-6 text-center last-paragraph-no-margin sm-margin-20px-bottom">
            <p>© 2021 Litho is Proudly Powered by <a href="https://www.themezaa.com/" target="_blank">ThemeZaa</a></p>
          </div>
          <div className="col-12 col-md-3 text-center text-md-end">
            <div className="social-icon-style-12">
              <ul className="extra-small-icon light">
                <li><a className="facebook" href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f" /></a></li>
                <li><a className="dribbble" href="http://www.dribbble.com" target="_blank"><i className="fab fa-dribbble" /></a></li>
                <li><a className="twitter" href="http://www.twitter.com" target="_blank"><i className="fab fa-twitter" /></a></li>
                <li><a className="instagram" href="http://www.instagram.com" target="_blank"><i className="fab fa-instagram" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* end footer */}
  {/* start scroll to top */}
  <a className="scroll-top-arrow" href="javascript:void(0);"><i className="feather icon-feather-arrow-up" /></a>
  {/* end scroll to top */}
</div>

      </>
    );
  }
}

export default ContactUs;
