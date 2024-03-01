// import React from "react";
import VideoIcon from "../assets/icons/video-icon.svg";
import PersonalizedIcon from "../assets/icons/personalized-icon.svg";
import VirtualIcon from "../assets/icons/virtual-icon.svg";
import TrackIcon from "../assets/icons/track-icon.svg";
import AppsPhone from "../assets/images/app-img.svg";
import AppsOverViewCard from "./AppsOverViewCard";

// eslint-disable-next-line react/prop-types
const AppsOverView = ({ header, order, bg, cardbg }) => {
  const cardContent1 = [
    {
      icon: VideoIcon,
      header: "Video Meetings",
      content: "Loft meetings with 256kbps optimisation",
    },
    {
      icon: PersonalizedIcon,
      header: "Train",
      content: "Push targeted content to crew for engagement & knowledge",
    },
  ];
  const cardContent2 = [
    {
      icon: VirtualIcon,
      header: "Virtual Events",
      content: "Loft Events with 3D experiences for webinars & crew engagement",
    },
    {
      icon: TrackIcon,
      header: "Track engagement",
      content: "Push targeted content to crew for engagement & knowledge",
    },
  ];
  return (
    <div className="apps-overview">
      <h2 className="apps-overview-header">{header}</h2>
      <div className={`apps-overview-container ${bg}`}>
        {order === "left" && (
          <div className="apps-overview-img-container">
            <img src={AppsPhone} alt="apps overview image" />
          </div>
        )}
        <div className="apps-overview-content-container">
          <p className="apps-overview-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="apps-overview-card-container">
            <AppsOverViewCard cardContent={cardContent1} cardbg={cardbg} />
            <AppsOverViewCard cardContent={cardContent2} cardbg={cardbg} />
          </div>

          <div className="apps-overview-carousel">
            <div className="apps-overview-carousel-card">
              <h3 className="apps-overview-carousel-card-header">
                Value Props
              </h3>
              <p className="aps-overview-carousel-card-content">
                Your company’s closed-user-network: All ranks, roles and support
                contacts at your team’s finger tips with strict privacy & safety
              </p>
            </div>
          </div>
        </div>
        {order === "right" && (
          <div className="apps-overview-img-container">
            <img src={AppsPhone} alt="apps overview image" />
          </div>
        )}
      </div>
    </div>
  );
};

export default AppsOverView;
