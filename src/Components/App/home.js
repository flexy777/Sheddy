import React, { Component } from "react";
import EightSection from "../../Components2/eight_section";
import FifthSection from "../../Components2/fifth_section";
import FirstSection from "../../Components2/first_section";
import Companies from "../../Components2/companies";
import FourthSection from "../../Components2/fourth_section";
import ThirdSection from "../../Components2/third_section";
import SecondSection from "../../Components2/second_section";
import Skills from "../../Components2/skills";
import SixthSection from "../../Components2/sixth_section";

import AppLayer from "./AppLayer";
class HomeApp extends Component {
  render() {
    return (
      <AppLayer>
          
          <FirstSection />
          <Companies />
          <ThirdSection />
          <Skills />
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
