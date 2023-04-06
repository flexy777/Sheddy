import React, { Component } from "react";
import AppLayer from "./AppLayer";
import Team from "./Team";

class TajMobile extends Component {

  render() {
    const circle = {
    height : "50px",
    width : "50px",
    fontWeight:"bold",
    borderRadius:"50%",
    backgroundColor:"#c05e54",
    display:"inline-block",
    color:"white",
    paddingTop:"7px",
    textAlign:"center"
    }
    return (
      <AppLayer butnColor='url("TajMobile/Rectangle2.png")'
     >
         <section
          className="parallax p-0"
          data-parallax-background-ratio="0.3"
          style={{
           
            background: "black",
          }}
        >
          <div
            className="position-absolute cover-background top-0px left-0px w-100 h-100"
            data-parallax-background-ratio="0.5"
          />
          <div className="container-fluid first-section">
            <div className="row">
              <div className=" col-lg-6 d-flex flex-column  padding-8-rem-tb ">
                <h1
                  style={{
                    fontSize: "50px",
                    fontWeight: "bold",
                    color: "#c05e54",
                    width:"85%"
                  }}
                >
                  Taj Bank Mobile Application Revamp
                </h1>
                <h6
                  style={{
                    color: "#c05e54",
                    fontWeight: "bold",
                    fontSize:"20px"
                  }}
                >
                 SUMMARY
                </h6>
                <h5
                  style={{
                    fontSize: "16px",
                    color: "white",
                    width:"85%"
                   
                  }}
                >
                 I am trying to provide a better user Experience to enable customers 
                 have and enjoy a better and spectacular banking Experience 
                 while using the Mobile Application on their Smartphones.
                </h5>
      
                <div
                  style={{
                    marginTop: "15px",
                  }}
                  className="d-flex"
                >
                  <button
                    style={{
                      backgroundImage: "linear-gradient(to right, #4c2521, #100706)",
                      border:"1px solid white",
                      borderRadius:"5px",
                      textTransform:"none",
                      color: "white",
                      marginRight: "10px",
                    }}
                    className="btn btn-medium"
                  >
                    Case Study
                  </button>

                  <button
                    style={{
                      backgroundImage: "linear-gradient(to right, #4c2521, #100706)",
                      border:"1px solid white",
                      borderRadius:"5px",
                      textTransform:"none",
                      color: "white",
                      marginRight: "10px",
                    }}
                    className="btn btn-medium"
                  >
                    Product Design
                  </button>
                  <button
                    style={{
                      backgroundImage: "linear-gradient(to right, #4c2521, #100706)",
                      border:"1px solid white",
                      borderRadius:"5px",
                      textTransform:"none",
                      color: "white",
                    }}
                    className="btn btn-medium"
                  >
                    FinTech
                  </button>
                </div>
              </div>
              <div  className="col-lg-6 padding-8-rem-tb ">
                <img src="TajMobile/Taj_Mock.png" />
              </div>
            </div>
          </div>
        </section>
        {/* end section */}
        {/* start section */}
        <section
          style={{
            background: "black",
          }}
        >
          <div style={{}} className="container-fluid">
            <img src="TajMobile/Banner_copy.png" />
          </div>
        </section>
        {/* end section */}
        {/* start section */}
        <section
          style={{
            // backgroundImage: 'url("new_images/boolean_bg_left1.jpg")',
            background: "black",
          }}
        >
          <div className="container-fluid first-section">
            <div className="row">
              <div
                style={{
                  borderRight: "2px solid #c05e54",
                }}
                className=" col-lg-6   "
              >
                <h1
                  style={{
                    fontSize: "50px",
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  Project
                  <br />
                  Overview
                </h1>
                <h6
                  style={{
                    color: "#4c2521",
                    fontWeight: "bold",
                    fontSize: "70px",
                    textAlign: "right",
                  }}
                >
                  01{" "}
                </h6>
              </div>
              <div className="col-lg-6  ">
                <h1
                  style={{
                    fontSize: "50px",
                    fontWeight: "bold",
                    color: "grey",
                    textAlign: "right",
                  }}
                >
                  Project Overview
                </h1>
                <h6
                  style={{
                    color: "#c05e54",
                    fontWeight: "bold",
                    fontSize: "15px",

                    // textAlign:"right"
                  }}
                >
                  DESCRIPTION{" "}
                </h6>
                <h6
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "15px",
                    width: "90%",
                    // textAlign:"right"
                  }}
                >
                  In Today's Banking Sector, transacting are meant to be carried out 
                  with ease and convinence. In view of this, mobile applications were 
                  developed and put in place to help achieve this goal. The current 
                  Application (TajMobile) was not so satisfactory in terms of design & 
                  overall user experience, I thought to give my hands to updating the 
                  system design and giving it a better User Experience.
                </h6>

                
              </div>
            </div>
          </div>
        </section>

        {/* end section */}
    
        {/* start section */}
      <section style={{background:"black"}}>
        <div className="container">
        <h1 style={{fontSize:"20px", color:"#c05e54", fontWeight:"bold"}}>Design Process</h1>
        <div className="row">
                  <div style={{textAlign:"center"}} className="col-lg-3 col-md-6">
                    <span style={circle}>01</span>
                    <h3 style={{fontSize:"15px", fontWeight:"bold",color:"#c05e54" }}>User Research</h3>
                    <p style={{color:"white", fontSize:"12px", fontWeight:"bold"}}>User Research and Analysis was done at the beginning to clarify the vision</p>
                  </div>
                  <div style={{textAlign:"center"}} className="col-lg-3 col-md-6">
                  <span style={circle}>02</span>
                  <h3 style={{fontSize:"15px", fontWeight:"bold",color:"#c05e54" }}>UX Design</h3>
                  <p style={{color:"white", fontSize:"12px", fontWeight:"bold"}}>The Goal was to build a UX that is fast and easy to understand by the user</p>
                    </div>
                    <div style={{textAlign:"center"}} className="col-lg-3 col-md-6">
                    <span style={circle}>03</span>
                    <h3 style={{fontSize:"15px", fontWeight:"bold",color:"#c05e54" }}>Visual Design</h3>
                    <p style={{color:"white", fontSize:"12px", fontWeight:"bold"}}>An Eye-catching UI with an interactive colour scheme iconography to attract Users</p>
                    </div>
                    <div style={{textAlign:"center"}} className="col-lg-3 col-md-6">
                    <span style={circle}>04</span>
                    <h3 style={{fontSize:"15px", fontWeight:"bold",color:"#c05e54" }}>Prototype Testing</h3>
                    <p style={{color:"white", fontSize:"12px", fontWeight:"bold"}}>After completing the design I created a prototype to test the performance</p>
                    </div>
        </div>

        </div>
      </section>
        {/* end section */}
        {/* start section */}
        <section
          style={{
            // backgroundImage: 'url("new_images/boolean_bg_left1.jpg")',
            background: "black",
          }}
        >
          <div className="container-fluid first-section">
            <div className="row">
              <div
                style={{
                  borderRight: "2px solid #c05e54",
                }}
                className=" col-lg-6   "
              >
                <h1
                  style={{
                    fontSize: "50px",
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  Project
                  <br />
                  Timeline
                </h1>
                <h6
                  style={{
                    color: "#4c2521",
                    fontWeight: "bold",
                    fontSize: "70px",
                    textAlign: "right",
                  }}
                >
                  02{" "}
                </h6>
              </div>
              <div className="col-lg-6  ">
                <h1
                  style={{
                    fontSize: "50px",
                    fontWeight: "bold",
                    color: "grey",
                    textAlign: "right",
                  }}
                >
                  Project Timeline
                </h1>
                <h6
                  style={{
                    color: "#c05e54",
                    fontWeight: "bold",
                    fontSize: "15px",

                    // textAlign:"right"
                  }}
                >
                  DESCRIPTION{" "}
                </h6>
                <h6
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "15px",
                    width: "90%",
                    // textAlign:"right"
                  }}
                >
                 Here is a breakdown of the timeline I gave to each task we had mapped out for this project
                </h6>

                
              </div>
            </div>
          </div>
        </section>
        {/* end section */}
        {/* start section */}
        <section
          style={{
            background: "black",
          }}
        >
          <div style={{}} className="container-fluid">
            <img src="TajMobile/Group_34968.png" />
          </div>
        </section>
        {/* end section */}
        {/* start section */}
        <section
          style={{
            // backgroundImage: 'url("new_images/boolean_bg_left1.jpg")',
            background: "black",
          }}
        >
          <div className="container-fluid first-section">
            <div className="row">
              <div
                style={{
                  borderRight: "2px solid #c05e54",
                }}
                className=" col-lg-6   "
              >
                <h1
                  style={{
                    fontSize: "50px",
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  The
                  <br />
                 Challenges
                </h1>
                <h6
                  style={{
                    color: "#4c2521",
                    fontWeight: "bold",
                    fontSize: "70px",
                    textAlign: "right",
                  }}
                >
                  03{" "}
                </h6>
              </div>
              <div className="col-lg-6  ">
                <h1
                  style={{
                    fontSize: "50px",
                    fontWeight: "bold",
                    color: "grey",
                    textAlign: "right",
                  }}
                >
                 The Challenges
                </h1>
                  <h3 style={{color:"white", fontSize:"15px", fontWeight:"bold", width:"90%", lineHeight:"2rem"}}>
                  A lot of customers find it difficult finding their way on the application. 
                  I personally have had issues as well using the Application Below are some of the challenges noted:
                  </h3>
                <h6
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "15px",
                    width: "90%",
                    // textAlign:"right"
                  }}
                >
                  <span>
                    <img
                      style={{ height: "15px", marginRight: "10px" }}
                      src="TajMobile/Group_34969.png"
                    />
                  </span>
                  There are Limited Functionalities which is quite different from the traditional bank mobile application.
                  <br />
                  <span>
                    <img
                      style={{ height: "15px", marginRight: "10px" }}
                      src="TajMobile/Group_34969.png"
                    />
                  </span>
                  Transaction breakdowns, Statistics and Information are not well

detailed.
                  <br />
                  <span>
                    <img
                      style={{ height: "15px", marginRight: "10px" }}
                      src="TajMobile/Group_34969.png"
                    />
                  </span>
                  Choices of colours, typeface makes the application not

welcoming to users.
                </h6>

              </div>
            </div>
          </div>
        </section>

        {/* end section */}
      
      </AppLayer>
    );
  }
}

export default TajMobile;
