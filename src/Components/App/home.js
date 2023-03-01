import React, { Component } from "react";
import EightSection from "../../Components2/eight_section";
import FifthSection from "../../Components2/fifth_section";
import FirstSection from "../../Components2/first_section";

import FourthSection from "../../Components2/fourth_section";

import SecondSection from "../../Components2/second_section";

import SixthSection from "../../Components2/sixth_section";

import AppLayer from "./AppLayer";
class HomeApp extends Component {
  render() {
    return (
      <AppLayer>
          
          <FirstSection />

          <SecondSection />

          <FourthSection />

          <FifthSection />

          <SixthSection />

          <EightSection />

      </AppLayer>
     
    );
  }
}

export default HomeApp;
