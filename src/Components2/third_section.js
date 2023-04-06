import React, { Component } from "react";
class ThirdSection extends Component {
  render() {
    return (
      <section
        style={{
          // backgroundImage: 'url("new_images/boolean_bg_left1.jpg")',
          background: "black",
        }}
        className="bg-gradient-white-light-gray"
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 wow animate__fadeIn" data-wow-delay="0.2s">
              <img src="Home_Page/Group_34951.png" alt="" />
            </div>
            <div style={{
              marginBottom:"100px",
              marginTop:"30px",
              paddingLeft:"80px",
              color:"white"
            }} className="col-lg-6 ">
              <button
                style={{
                  backgroundImage: 'url("Home_Page/Rectangle_136.png")',
                  backgroundSize: "100%",
                  color: "white",
                  fontSize: "1.5rem",
                  fontWeight: "bolder",
                  marginBottom:"15px"
                }}
                className="btn btn-large "
              >
                ABOUT ME
              </button>

              <p>
                I'm Shedrach Ifeoluwa,<span style={{color:"#6eb642"}}> A graphic & UI/UX designer</span> skilled in
                Product designing, Branding and design facilitation with 
                <span style={{color:"#6eb642"}}>4+ years</span> of hands-on experience in digital products.  </p>

                <p> I've worked in  <span style={{color:"#6eb642"}}>over 10 industry sectors</span>with companies around the world
                creating top-class design experiences to meet customer's needs
                and demands. I possess a wide range of abilities that combine
                innovative art and design principles.  </p>
                <p> Currently designing at  <span style={{color:"#6eb642"}}> Boolean Technologies</span>, a high- technology driven company that
                creates working solutions to meet customer's needs.  </p>
               <p> Outside of work, I engage myself in  <span style={{color:"#6eb642"}}> social projects</span> that I strongly believe
                in, I also do lots of freelancing.  </p>
               <p> To learn more about me, please check out my resume.
              </p>
              😎😎😎😎
              <p>
              <button
                style={{
                  color: "#6eb642",
                  border: "1px solid #6eb642",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  marginTop:"15px",
                  boxShadow:"5px 10px #6EB642"
                }}
                className="btn btn-medium "
              >
               DOWNLOAD RESUME
              </button>
              </p>
            </div>
          </div>
         <hr style={{
          border:"1px solid #6eb642"
         }} />
        </div>
      </section>
    );
  }
}

export default ThirdSection;
