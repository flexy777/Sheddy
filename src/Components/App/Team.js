import React, { Component } from "react";
class TeamTile extends React.Component {
  render() {
      const {quote, name, position, picture} = this.props;
    return (
      <div
        className="col team-style-02 text-center sm-margin-15px-bottom wow animate__fadeIn"
        data-wow-delay="0.2s"
      >
        <figure>
          <div className="team-member-image border-radius-5px overflow-hidden">
            <img alt="" src={picture} />
            <div className="team-member-details padding-2-half-rem-lr align-items-center justify-content-center d-flex flex-column">
              <div className="text-black text-uppercase alt-font font-weight-500">
                {quote}
              </div>
              <div className="social-icon w-100 position-absolute bottom-40px left-0px">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  className="icon-very-small text-black"
                >
                  <i aria-hidden="true" className="fab fa-facebook-f" />
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  className="icon-very-small text-black"
                >
                  <i aria-hidden="true" className="fab fa-twitter" />
                </a>
                <a
                  href="https://www.dribbble.com"
                  target="_blank"
                  className="icon-very-small text-black"
                >
                  <i aria-hidden="true" className="fab fa-dribbble" />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  className="icon-very-small text-black"
                >
                  <i aria-hidden="true" className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
          </div>
          <figcaption className="team-member-position padding-35px-tb text-center">
            <div className="text-extra-dark-gray alt-font line-height-18px text-medium text-uppercase font-weight-500">
              {name}
            </div>
            <span className="text-small text-uppercase">
              {position}
            </span>
          </figcaption>
        </figure>
      </div>
    );
  }
}

class Team extends React.Component {
    render() { 
        const menus = [
            {quote:"I am Trendy", name: "Eric Obianozie", position:"Chief Executive Officer", picture:"images/about-team-01.jpg"},
            {quote:"I am Cool", name: "Ronald Emeruwa", position:"Chief Operation Officer", picture:"images/about-team-02.jpg"},
            {quote:"I am Creative", name: "Sholanke Oluwatobi", position:"Chief Technology Officer", picture:"images/about-team-03.jpg"}
            

        ];
        return (
          menus.map((item, i) => {
          return <TeamTile key={"item-team" + i} {...item} />;
          //  return <TeamTile key={"item"+i} icon={item.icon} title={item.title} />
        })
        );
    }
}
 
export default Team;
