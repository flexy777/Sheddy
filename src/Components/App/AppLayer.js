import React, { Component } from "react";

// import Footer from "../../Components2/footer";

import Header from "../../Components2/header";
class AppLayer extends Component {
  render() {
    const { children, navbarClass, butnColor} = this.props;
    return (
      <>
        <Header navbarClass={navbarClass}
        butnColor={butnColor} />
        <div className="main-content">
            {children}
        </div>
        {/* <Footer /> */}
        <a className="scroll-top-arrow text-black" href="javascript:void(0);">
          <i className="feather icon-feather-arrow-up"></i>
        </a>
      </>
         
    );

  }
}

export default AppLayer;

