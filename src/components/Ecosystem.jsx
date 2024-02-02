// import React from "react";
import RightArrow from "../assets/icons/rightarrow-icon.svg";

// import Slider from "react-slick";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import { EffectCoverflow, Pagination } from "swiper/modules";

import Explore1 from "../assets/images/explore-img1.svg";
import Explore2 from "../assets/images/explore-img2.svg";
import Explore3 from "../assets/images/explore-img3.svg";
import Explore4 from "../assets/images/explore-img4.svg";
import Explore5 from "../assets/images/explore-img5.svg";

const Ecosystem = () => {
  const exploreImages = [Explore1, Explore2, Explore3, Explore4, Explore5];
  return (
    <div className="ecosystem">
      <h2 className="ecosystem-header">
        One-stop ecosystem for all your crew engagement needs
      </h2>
      <div className="ecosystem-carousel"></div>
      <a href="#" className="crew-engagment-btn">
        Book a Demo
        <img src={RightArrow} alt="right arrow" />
      </a>
    </div>
  );
};

export default Ecosystem;
