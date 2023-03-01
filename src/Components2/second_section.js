import React, { Component } from "react";
import Values from "../Components/App/values";
class SecondSection extends Component {
  render() {
    return (
      <section className="bg-black wow animate__fadeIn">
        <div className="container">
          <h4
            className="text-yellow"
            style={{ display: "flex", justifyContent: "center" }}
          >
            Our Core Values
          </h4>
          <div className="row row-cols-1 row-cols-lg-3 row-cols-sm-2">
             <Values/>
          </div>
        </div>
      </section>
    );
  }
}

export default SecondSection;
