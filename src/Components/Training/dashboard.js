import React, { Component } from "react";

class DashboardCard extends Component {
  render() {
    const { icon, title } = this.props;
    return (
      <div className="col-4 mb-4">
        <div className="card card-shadow">
          <div className="card-body text-center">
            <p className="card-text">
              <ion-icon
                name={icon}
                style={{ fontSize: 45, color: "#d0d0d0" }}
              ></ion-icon>
            </p>
            <h5 className="card-title text-uppercase">{title}</h5>
          </div>
        </div>
      </div>
    );
  }
}

class Dashboard extends Component {
  render() {
    const menus = [
      { icon: "newspaper-outline", title: "order" },
      { icon: "download-outline", title: "downloads" },
      { icon: "location-outline", title: "address list" },
      { icon: "card-outline", title: "payment method" },
      { icon: "person-outline", title: "account details" },
      { icon: "heart-outline", title: "wishlist" },
      { icon: "log-out-outline", title: "logout" },
    ];

    return (
      <div className="container">
        <div className="row mt-5">
          {menus.map((item, i) => {
            return <DashboardCard key={"item" + i} {...item} />;
            //  return <DashboardCard key={"item"+i} icon={item.icon} title={item.title} />
          })}
        </div>
      </div>
    );
  }
}

export default Dashboard;
