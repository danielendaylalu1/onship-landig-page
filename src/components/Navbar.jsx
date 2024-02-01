// import React from "react";

function Navbar() {
  const navitems = ["Home", "Apps", "Explore", "LeaderShip", "Join"];
  return (
    <div className="nav-bar">
      <div className="logo">
        <h2 className="logo">
          <a href="#">Ship On</a>
        </h2>
      </div>
      <div className="nav">
        <ul className="nav-items">
          {navitems.map((item) => {
            return (
              <li className="nav-item" key={item}>
                <a href="#" className="nav-link">
                  {item}
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
