// import React from "react";
import headerImage from "../assets/images/header-img.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header-content-container">
        <h2 className="header-content-header">Ship On the Super app</h2>
        <p className="header-content">
          World’s first maritime digital app marketplace for crew engagement,
          productivity and welfare
        </p>
        <a className="header-content-btn" href="#">
          Book a Demo
        </a>
      </div>
      <div className="header-img-container">
        <img src={headerImage} alt="header image" className="header-img" />
      </div>
    </div>
  );
};

export default Header;
