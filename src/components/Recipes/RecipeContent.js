import React from "react";
import RecipeGenerator from './RecipeGenerator';
import {recipeInput, fetchRecipe } from '../../actions';
import { connect } from "react-redux";

class RecipeContent extends React.Component {
  change =(value)=>{
    if (value.key === "Enter") {
      this.props.recipeInput(value.target.value)
      this.props.fetchRecipe(value.target.value)
    }
  }
  render() {
    return (
      <div className="search-recipe-combo-container">
        <div className="search-area">
          <input type="text" name="search" placeholder="Search Here" onKeyPress={this.change}/>

        </div>
        <div className="search-bar-contain">
          <RecipeGenerator />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fitnessGoals: state.fitnessGoals
  };
};

export default connect(mapStateToProps,
  {
    fetchRecipe,
    recipeInput
  })(RecipeContent);
