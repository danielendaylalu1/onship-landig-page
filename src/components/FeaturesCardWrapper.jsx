/* eslint-disable react/prop-types */
// import React from 'react'

import { motion } from "framer-motion";

function FeaturesCardWrapper({ featureCards, cardVarient }) {
  return (
    <motion.div className="features-card-wrapper wrapper1">
      {featureCards.map((card) => {
        return (
          <motion.div
            className="features-card"
            key={card.header}
            variants={cardVarient}
          >
            <img
              src={card.icon}
              alt={card.header + "icon"}
              className="features-card-icon"
            />
            <h3 className="features-card-header">{card.header}</h3>
            <h3 className="features-card-content">{card.connect}</h3>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export default FeaturesCardWrapper;
