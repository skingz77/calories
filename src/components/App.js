import React from "react";
import LandingPage from "./LandingPage";
import Dashboard from './dashboard/Dashboard';
import Login from './Login';
import Recipes from './Recipes/Recipes'
import { BrowserRouter, Route } from "react-router-dom";
import "../scss/main.scss";
class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/" exact component={LandingPage} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/recipes" exact component={Recipes} />
          <Route path="/login" exact component={Login} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
