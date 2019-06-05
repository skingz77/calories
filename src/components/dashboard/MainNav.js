import React from "react";
// import FormComp from "./formComp";
import DashInfo from "./DashInfo";
import { createMacros } from "../../actions";
import { connect } from "react-redux";
import FormComp from './formComp';

class MainNav extends React.Component {
  constructor() {
    super();
    this.submit = this.submit.bind(this);
  }

  submit = values => {
    // print the form values to the console
    this.props.createMacros(values);
  };

  render() {
    if (!this.props.macroChecker.isDone) {
      return (
        <div id="mainNav">
          <div className="main-nav">
            <div className="user"></div>
          </div>
          
          <FormComp onSubmit={this.submit} />
        </div>
      );
    } else {
      return (
        <div id="mainNav">
          <div className="main-nav">
            <div className="user"></div>
          </div>
          <div className="content">
            <DashInfo />
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

export default connect(
  mapStateToProps,
  {
    createMacros
  }
)(MainNav);
