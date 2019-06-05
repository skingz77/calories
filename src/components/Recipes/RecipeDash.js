import React from "react";
import { connect } from "react-redux";
import RecipeContent from './RecipeContent';

class RecipesDash extends React.Component {
  render() {
    if (!this.props.macroChecker.isDone) {
      return (
        <div id="mainNav">
          <div className="main-nav">
            <div className="user"></div>
          </div>
          <div className="content">
            <div className="not-done-modal">
              <div className="modal-content">
                <p>Oh...It seems you haven't calculated your macros. Click home to continue.</p>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div id="mainNav">
          <div className="main-nav">
            <div className="user"></div>
          </div>
          <div className="content">
          <RecipeContent />
          </div>
        </div>
      );
    }
  }
}
const mapStateToProps = state => {
  return {
    macroChecker: state.macroChecker
  };
};
export default connect(mapStateToProps)(RecipesDash);
