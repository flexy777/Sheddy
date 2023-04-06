import React, { Component } from "react";
class Skills extends Component {
  render() {
    const divStyle = {
        position : "relative"
    }
    const textStyle = {
        position :"absolute",
        textAlign : "center",
        fontSize : "25px",
        color:"white",
        left:"27px",
        bottom:"30px"
    }
    return (
      <section className="big-section" style={{height:"max-content", padding:"0px", backgroundColor:"black"}}>
       <div style={{textAlign:"center", padding:"20px"}}>
            <h6 style={{color:"#6eb642", fontWeight:"bold", marginBottom:"0px"}}>SKILLS & TOOLBOX</h6>
            {/* <p style={{color:"black", fontWeight:"bold", marginBottom:"0px"}}>We are trusted by Leading and Top- class Brands</p> */}
          </div>
        <div className="container-fluid">
          
          <div className="row client-logo justify-content-evenly ">
            {/* start client logo item */}
            <div
              className=" col-lg-1 col-md-4 col-sm-4 "
              data-wow-delay="0.1s"
            >
              <div style={divStyle} className="client-box padding-4-rem-tb lg-padding-3-rem-tb xs-padding-4-rem-tb">
               
                  <img src="Home_Page/Group_34952.png" alt="" />
                  <span> <h3 style={textStyle}>95%</h3></span>
                  
                
              </div>
              <p style={{color:"#6eb642", textAlign:"center"}}>ADOBE XD</p>
            </div>
            {/* end client logo item */}            
            {/* start client logo item */}
            <div
              className=" col-lg-1 col-md-4 col-sm-4 "
              data-wow-delay="0.1s"
            >
              <div style={divStyle} className="client-box padding-4-rem-tb lg-padding-3-rem-tb xs-padding-4-rem-tb">
               
                  <img src="Home_Page/Group_34953.png" alt="" />
                  <span> <h3 style={textStyle}>65%</h3></span>
               
              </div>
              <p style={{color:"#6eb642", textAlign:"center"}}>FIGMA</p>
            </div>
            {/* end client logo item */}
            {/* start client logo item */}
            <div
              className=" col-lg-1 col-md-4 col-sm-4 "
              data-wow-delay="0.1s"
            >
              <div style={divStyle} className="client-box padding-4-rem-tb lg-padding-3-rem-tb xs-padding-4-rem-tb">
               
                  <img src="Home_Page/Group_34954.png" alt="" />
                  <span> <h3 style={textStyle}>80%</h3></span>
               
              </div>
              <p style={{color:"#6eb642", textAlign:"center"}}>ADOBE PHOTOSHOP</p>
            </div>
            {/* end client logo item */}
            {/* start client logo item */}
            <div
              className=" col-lg-1 col-md-4 col-sm-4 text-center sm-no-border-right wow animate__fadeIn"
              data-wow-delay="0.2s"
            >
              <div style={divStyle} className="client-box padding-4-rem-tb lg-padding-3-rem-tb xs-padding-4-rem-tb">
               
                  <img style={{
                    
                  }} src="Home_Page/Group_34955.png" alt="" />
                  <span> <h3 style={textStyle}>75%</h3></span>
               
              </div>
              <p style={{color:"#6eb642", textAlign:"center"}}>ADOBE ILLUSTRATOR</p>
            </div>
            {/* end client logo item */}
            {/* start client logo item */}
            <div
              className=" col-lg-1 col-md-4 col-sm-4 "
              data-wow-delay="0.3s"
            >
              <div style={divStyle} className="client-box padding-4-rem-tb lg-padding-3-rem-tb xs-padding-4-rem-tb">
               
                  <img src="Home_Page/Group_34956.png" alt="" />
                  <span> <h3 style={textStyle}>90%</h3></span>
               
              </div>
              <p style={{color:"#6eb642", textAlign:"center"}}>CANVA</p>
            </div>
            {/* end client logo item */}
              {/* start client logo item */}
              <div
              className=" col-lg-1 col-md-4 col-sm-4 "
              data-wow-delay="0.3s"
            >
              <div style={divStyle} className="client-box padding-4-rem-tb lg-padding-3-rem-tb xs-padding-4-rem-tb">
               
                  <img src="Home_Page/Group_34957.png" alt="" />
                  <span> <h3 style={textStyle}>80%</h3></span>
               
              </div>
              <p style={{color:"#6eb642", textAlign:"center"}}>FILMORA</p>
            </div>
            {/* end client logo item */}                           
            </div>
            <hr style={{
          border:"1px solid #6eb642",
          width:"85%",
          margin:"auto",
          marginTop:"50px",
        
         }} />
        </div>
      </section>
    );
  }
}

export default Skills;
