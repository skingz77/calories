import React from "react";
import Chart from "./Chart";
import { connect } from "react-redux";
import {customMacros} from '../../actions/index'

class DashInfo extends React.Component {
  constructor() {
    super();
    this.clickIt = this.clickIt.bind(this);
  }
  clickIt(value){
    this.props.customMacros(this.props.macroChecker, value.target.id);
}
  render() {

    if (!this.props.fitnessGoals.customMacDone) {
      return (
        <div className="recipeContent-contain">
        <h4 className="rec-title">We would like to know your fitness goals.</h4>
        <div className="recipeContent">
          <div className="fitness-goals" >
            <div className="fit-img fit-lose" />
            <div className="fit-title">
              <h4>Lose Weight</h4>
              <button className="click-here" id="lose" onClick={this.clickIt}>Click Here</button>
            </div>
          </div>
          <div className="fitness-goals">
            <div className="fit-img fit-maintain" />
            <div className="fit-title">
              <h4>Maintain Weight</h4>
              <button className="click-here" id="maintain" onClick={this.clickIt}>Click Here</button>
            </div>
          </div>
          <div className="fitness-goals">
            <div className="fit-img fit-gain" />
            <div className="fit-title">
              <h4>Gain Weight</h4>
              <button className="click-here" id="gain" onClick={this.clickIt}>Click Here</button>
            </div>
          </div>
        </div>
      </div>
      )
    } else {
      return (
        <div className="subcontain">
          <h4>Daily Caloric Intake: </h4>

          <div className="info">
            <div className="left">
              <h4>Calories: {this.props.fitnessGoals.calories}kcal</h4>
              <h4>Protein: {this.props.fitnessGoals.protein}g</h4>
              <h4>Fats: {this.props.fitnessGoals.fat}g</h4>
              <h4>Carbohydrates: {this.props.fitnessGoals.carbs}g</h4>
            </div>
            <div className="right-chart">
              <Chart />
            </div>
          </div>
          <div className="bottom">
            <h4>
              Congrats, you've successfully calculated your daily needs. So what
              now? Click on the recipes link on the left side to access hundreds
              of recipes
            </h4>
          </div>
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    fitnessGoals: state.fitnessGoals,
    macroChecker: state.macroChecker
  };
};
export default connect(mapStateToProps,{
  customMacros
})(DashInfo);
