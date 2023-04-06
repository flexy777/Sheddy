import React, { Component } from "react";
class Header extends Component {
  render() {
    const { navbarClass, butnColor} = this.props;
    return (
      <header>
        <nav className={navbarClass || "navbar navbar-expand-lg navbar-dark bg-transparent header-light fixed-top navbar-boxed header-reverse-scroll"}>
          <div className="container-fluid nav-header-container">
            <div className="col-5 col-lg-2 ps-lg-0 me-auto me-lg-0">
              <a className="navbar-brand" href="/"> 
                <img
                  src="Home_Page/logo.png"
                  data-at2x="Home_Page/logo.png"
                  alt=""
                  className="default-logo"
                />
                <img
                  src="Home_Page/logo.png"
                  data-at2x="Home_Page/logo.png"
                  alt=""
                  className="alt-logo"
                />
                <img
                  src="Home_Page/logo.png"
                  data-at2x="Home_Page/logo.png"
                  className="mobile-logo"
                  alt=""
                />
              </a>
            </div>
            <div className="col-auto col-lg-8 md-position-initial md-no-padding">
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
              <div
                className="collapse navbar-collapse justify-content-center"
                id="navbarNav"
              >
                <ul className="navbar-nav alt-font">
                  <li className="nav-item dropdown megamenu top">
                    <a href="/" className="nav-link">
                      Home</a>
                    </li>
                  <li className="nav-item dropdown simple-dropdown top">
                    <a href="/about-me" className="nav-link">
                      About Me</a>
                  </li>
                  
                  <li className="nav-item dropdown simple-dropdown top">
                    
                    <a href="/resume" className="nav-link">
                      Resume </a>
                    </li>

                  <li className="nav-item dropdown simple-dropdown top">
                    
                    <a href="/projects" className="nav-link">
                      Projects </a>
                    
                  </li>
                  

                  <li className="nav-item dropdown simple-dropdown">
                    <a href="/blog" className="nav-link">
                      Blog
                    </a>
                    
                  </li>
                      
                  <li className="nav-item dropdown megamenu top">
                    <a href="/contact-me" className="nav-link">
                      Contact Me
                    </a>
                 
                  </li>
                 
                </ul>
              </div>
            </div>
            <div className="col-auto col-lg-2 text-end hidden-xs px-lg-0">
              <div className="header-social-icon d-inline-block">
              <button style={{
                background: butnColor || "#6eb642",
                backgroundSize: "100%",
                color:"white",
                textTransform:"none",
                border:"none"
                }} className="btn btn-medium">
                Hire Me
                </button>
              
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
