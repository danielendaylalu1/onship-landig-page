/* eslint-disable react/prop-types */
// import React from "react";

function AppsOverViewCard({ cardContent }) {
  return (
    <div className="apps-overview-card1">
      {cardContent.map((item) => {
        return (
          <div className="apps-overview-card" key={item.header}>
            <img
              src={item.icon}
              alt="vide meetings icon"
              className="apps-overview-card-icon"
            />
            <div className="apps-overview-card-content">
              <h3 className="apps-overview-card-header">{item.header}</h3>
              <p className="apps-overview-card-conetnt">{item.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AppsOverViewCard;
