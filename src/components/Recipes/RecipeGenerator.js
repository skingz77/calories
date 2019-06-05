import React from "react";
import { fetchRecipe } from "../../actions";
import { connect } from "react-redux";

class RecipeGenerator extends React.Component {
  componentDidMount() {
    this.props.fetchRecipe("");
  }
  displa = () => {
    console.log(this.props.recObject[0].PROCNT);
  };

  recipeCardGenerator = () => {
    return this.props.recObject.map(ind => {
      try {
        let calories = (ind.calories / ind.serving).toFixed(2);
        let protein = (ind.PROCNT.quantity / ind.serving).toFixed(2);
        let carbs = (ind.CHOCDF.quantity / ind.serving).toFixed(2);
        let fats = (ind.FAT.quantity / ind.serving).toFixed(2);
        return (
          <div className="recipeCard" key={ind.label}>
            <a href={ind.shareAs} rel="noopener noreferrer" target="_blank">
            <div className="recipeImg"style={{background: `url('${ind.image}') no-repeat center center`}} /> 
            </a>
            <div className="recipeInfo">
              <h2>{ind.label}</h2>
              <div className="metaRecInfo">
                <h5>Calories: {calories}</h5>
                <h5>Protein: {protein}</h5>
                <h5>Carbs: {carbs}</h5>
                <h5>Fats: {fats}</h5>
                <h5>Serves: {ind.serving}</h5>
              </div>
            </div>
          </div>
        );
      } catch {
       return  console.log("error");
      }
    });
  };
  render() {
    if (!this.props.recObject) {
      return <div>Loading</div>;
    } else {
      return (
        <div className="recipeCardContain">{this.recipeCardGenerator()}</div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    recObject: state.recObject,
    recInput: state.recInput
  };
};

export default connect(
  mapStateToProps,
  {
    fetchRecipe
  }
)(RecipeGenerator);
