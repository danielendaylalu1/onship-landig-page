// import React from "react";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Navbar() {
  const navitems = [
    { name: "Home", link: "#" },
    { name: "Apps", link: "#apps" },
    { name: "Explore", link: "#explore" },
    { name: "Join", link: "#join" },
  ];
  const [navShow, setNavShow] = useState(false);

  return (
    <div className="nav-bar">
      <div className="logo">
        <h2 className="logo">
          <a href="#" onClick={() => setNavShow(false)}>
            Ship On
          </a>
        </h2>
      </div>
      <div className="nav">
        <FontAwesomeIcon
          icon={faBars}
          className="nav-menu"
          onClick={() => setNavShow(!navShow)}
        />
        <ul className={`nav-items ${navShow && "nav-show"}`}>
          {navitems.map((item) => {
            return (
              <li className="nav-item" key={item}>
                <a
                  href={item.link}
                  className="nav-link"
                  onClick={() => setNavShow(false)}
                >
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
