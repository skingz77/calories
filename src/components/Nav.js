import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="navbar">
      <nav>
        <div className="logo"></div>
        <div className="links">
          <ul>
            <li>
              <Link to="/dashboard">
                <div className="main-links">
                Dashboard
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
