// import React from "react";
import GearImg from "../assets/icons/gear-icon.svg";
import SolutionImg from "../assets/icons/solution-icon.svg";
import FooterTopCard from "./FooterTopCard";

const FooterTop = () => {
  const data = [
    {
      header: "Maritime Operators",
      content:
        "Increase your ship-crew engagement to reduce costs, increase productivity and improve welfare",
      icon: GearImg,
      btntext: "Join onship",
    },
    {
      header: "Solution Providers",
      content:
        "Connect with staragetic partners, reach more customers and launch digital solutions 10x faster",
      icon: SolutionImg,
      btntext: "Build or Integrate",
    },
  ];
  return (
    <div className="footer-top">
      {data.map((item) => {
        return <FooterTopCard item={item} key={item.header} />;
      })}
    </div>
  );
};

export default FooterTop;
