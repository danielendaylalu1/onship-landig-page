// import React from "react";
import connect from "../assets/icons/connect-icon.svg";
import Learn from "../assets/icons/learn-icon.svg";
import Entertain from "../assets/icons/entertain-icon.svg";
import Engage from "../assets/icons/engage-icon.svg";
import Care from "../assets/icons/care-icon.svg";

function Features() {
  const featureCards1 = [
    {
      icon: connect,
      header: "Connect",
      connect:
        "World’s first maritime digital app marketplace for crew engagement, productivity and welfare",
    },
    {
      icon: Learn,
      header: "Train",
      connect:
        "World’s first maritime digital app marketplace for crew engagement, productivity and welfare",
    },
    {
      icon: Entertain,
      header: "Entertain",
      connect:
        "World’s first maritime digital app marketplace for crew engagement, productivity and welfare",
    },
  ];
  const featureCards2 = [
    {
      icon: Engage,
      header: "Engage",
      connect:
        "World’s first maritime digital app marketplace for crew engagement, productivity and welfare",
    },
    {
      icon: Care,
      header: "Care",
      connect:
        "World’s first maritime digital app marketplace for crew engagement, productivity and welfare",
    },
  ];
  return (
    <div className="features">
      <h2 className="features-header">Core features</h2>
      <div className="features-card-container">
        <div className="features-card-wrapper wrapper1">
          {featureCards1.map((card) => {
            return (
              <div className="features-card" key={card.header}>
                <img
                  src={card.icon}
                  alt={card.header + "icon"}
                  className="features-card-icon"
                />
                <h3 className="features-card-header">{card.header}</h3>
                <h3 className="features-card-content">{card.connect}</h3>
              </div>
            );
          })}
        </div>
        <div className="features-card-wrapper wrapper2">
          {featureCards2.map((card) => {
            return (
              <div className="features-card" key={card.header}>
                <img
                  src={card.icon}
                  alt={card.header + "icon"}
                  className="features-card-icon"
                />
                <h3 className="features-card-header">{card.header}</h3>
                <h3 className="features-card-content">{card.connect}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Features;
