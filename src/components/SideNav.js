import React from "react";
import { Link } from "react-router-dom";

class SideNav extends React.Component {
  render() {
    return (
      <div id="sideNav">
        <div className="logo-dash">
          <Link to="/">
            <h3>Calories</h3>
          </Link>
        </div>
        <div className="side-real">
          <Link to="/dashboard">
            <div className="linkazz first-link">
              <i className="fas fa-home" />
              <h4>Home</h4>
            </div>
          </Link>
          <Link to="/recipes">
            <div className="linkazz">
              <i className="fas fa-carrot" />
              <h4>Recipes</h4>
            </div>
          </Link>
          <div className="linkazz">
            <i className="fas fa-folder-minus" />
            <h4>....Coming Soon</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default SideNav;
