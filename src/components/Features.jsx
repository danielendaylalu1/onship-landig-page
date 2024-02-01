// import React from "react";
import connect from "../assets/icons/connect-icon.svg";
import Learn from "../assets/icons/learn-icon.svg";
import Entertain from "../assets/icons/entertain-icon.svg";
import Engage from "../assets/icons/engage-icon.svg";
import Care from "../assets/icons/care-icon.svg";
import FeaturesCardWrapper from "./FeaturesCardWrapper";

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
        <FeaturesCardWrapper featureCards={featureCards1} />
        <FeaturesCardWrapper featureCards={featureCards2} />
      </div>
    </div>
  );
}

export default Features;
