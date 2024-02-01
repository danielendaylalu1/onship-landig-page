/* eslint-disable react/prop-types */
// import React from 'react'

function FeaturesCardWrapper({ featureCards }) {
  return (
    <div className="features-card-wrapper wrapper1">
      {featureCards.map((card) => {
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
  );
}

export default FeaturesCardWrapper;
