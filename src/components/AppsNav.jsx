// import React from "react";
import connect from "../assets/icons/connect-icon.svg";
import Learn from "../assets/icons/learn-icon.svg";
import Entertain from "../assets/icons/entertain-icon.svg";
import Engage from "../assets/icons/engage-icon.svg";
import Care from "../assets/icons/care-icon.svg";

function AppsNav() {
  const AppsNavItems = [
    {
      icon: Engage,
      header: "Engage",
    },
    {
      icon: connect,
      header: "Connect",
    },
    {
      icon: Care,
      header: "Care",
    },
    {
      icon: Entertain,
      header: "Entertain",
    },
    {
      icon: Learn,
      header: "Learn",
    },
  ];
  return (
    <div className="apps-nav">
      <ul className="apps-nav-items">
        {AppsNavItems.map((item) => {
          return (
            <li className="apps-nav-item engage-item" key={item.header}>
              <img
                src={item.icon}
                alt={item.header + "icon"}
                className="apps-nav-item-icon"
              />
              <h3 className="apps-nav-item-header">{item.header}</h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AppsNav;
