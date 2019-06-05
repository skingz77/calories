import React from "react";
import SideNav from "../SideNav";
import RecipeDash from "./RecipeDash";

class Recipes extends React.Component {
  render() {
    return (
      <div>
        <SideNav />
        <RecipeDash />
      </div>
    );
  }
}

export default Recipes;
