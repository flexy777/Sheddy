import React, { Component } from "react";
class Companies extends Component {
  render() {
    return (
      <section className="big-section" style={{height:"max-content", padding:"0px", backgroundColor:"#061007"}}>
        <div className="container-fluid">
          
          <div className="row client-logo justify-content-evenly ">
            {/* start client logo item */}
            <div
              className=" col-lg-1 col-sm-2 "
              data-wow-delay="0.1s"
            >
              <div className="client-box padding-4-rem-tb lg-padding-3-rem-tb xs-padding-4-rem-tb">
                <a href="#">
                  <img src="Home_Page/Logo_2.png" alt="" />
                </a>
              </div>
            </div>
            {/* end client logo item */}            
            {/* start client logo item */}
            <div
              className=" col-lg-1 col-sm-2 "
              data-wow-delay="0.1s"
            >
              <div className="client-box padding-4-rem-tb lg-padding-3-rem-tb xs-padding-4-rem-tb">
                <a href="#">
                  <img src="Home_Page/logo_1.png" alt="" />
                </a>
              </div>
            </div>
            {/* end client logo item */}
            {/* start client logo item */}
            <div
              className=" col-lg-1 col-sm-2 "
              data-wow-delay="0.1s"
            >
              <div className="client-box padding-4-rem-tb lg-padding-3-rem-tb xs-padding-4-rem-tb">
                <a href="#">
                  <img src="Home_Page/Logo_3.png" alt="" />
                </a>
              </div>
            </div>
            {/* end client logo item */}
            {/* start client logo item */}
            <div
              className=" col-lg-1 col-sm-2 text-center sm-no-border-right wow animate__fadeIn"
              data-wow-delay="0.2s"
            >
              <div className="client-box padding-4-rem-tb lg-padding-3-rem-tb xs-padding-4-rem-tb">
                <a href="#">
                  <img style={{
                    height : "40px"
                  }} src="Home_Page/logo_5.png" alt="" />
                </a>
              </div>
            </div>
            {/* end client logo item */}
            {/* start client logo item */}
            <div
              className=" col-lg-1 col-sm-2 "
              data-wow-delay="0.3s"
            >
              <div className="client-box padding-4-rem-tb lg-padding-3-rem-tb xs-padding-4-rem-tb">
                <a href="#">
                  <img src="Home_Page/Logo_4.png" alt="" />
                </a>
              </div>
            </div>
            {/* end client logo item */}                        
            </div>
        </div>
      </section>
    );
  }
}

export default Companies;
