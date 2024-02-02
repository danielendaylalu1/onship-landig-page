// import React from "react";
import RightArrow from "../assets/icons/rightarrow-icon.svg";

const CrewEngagment = () => {
  return (
    <div className="crew-engagment">
      <h2 className="crew-engagment-header">
        Take your crew engagement to the next level
      </h2>
      <a href="#" className="crew-engagment-btn">
        Book a Demo
        <img src={RightArrow} alt="right arrow" />
      </a>
    </div>
  );
};

export default CrewEngagment;
