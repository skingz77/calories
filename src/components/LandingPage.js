import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <div id="pg1">
          <div className="darken-overlay">
            <div className="pg-1">
              <Nav />
              <div className="head">
                <div className="words">
                  <h1>Calorie Counter</h1>
                  <h3>Take You're First Steps To A Healthy Life</h3>
                  <div className="section">
                    <Link to="/dashboard">
                      <div className="button">Get Started</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section id="pg-2">
          <div className="welcomeImg" />
          <div className="welcome-card">
            <div>
              <h2>Food Tracking Made Easy</h2>
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                maxime nostrum, impedit quae numquam pariatur laborum vel
                quibusdam neque. Nam sapiente inventore perspiciatis animi nemo
                unde aspernatur esse nostrum exercitationem eveniet. Eligendi
                corporis et vero obcaecati at tempore praesentium voluptates,
                sed neque, pariatur a dignissimos harum fuga quibusdam eius
                itaque.
              </h4>
            </div>
          </div>
        </section>
        <section id="pg-3">
          <div className="title">
            <h2>Getting Started Is Easy</h2>
          </div>
          <div className="card-container">
            <div className="card">
              <i className="fas fa-calculator" />
              <div className="content-card">
                <h3>Calculate Macros</h3>
                <h4>
                  Use our in house calculator to calculate your daily
                  caloric/macro needs
                </h4>
              </div>
            </div>
            <div className="card">
              <i className="fas fa-check" />
              <div className="content-card">
                <h3>Choose Your Food</h3>
                <h4>
                  Comb through our database to find meals tailored to your
                  caloric needs.
                </h4>
              </div>
            </div>
            <div className="card">
              <i className="fas fa-utensils" />
              <div className="content-card">
                <h3>Enjoy Your Food</h3>
                <h4>Now you enjoy your new meal plan! Simple as that.</h4>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <div className="foot">Copyright © 2019. All Rights Reservered</div>
        </footer>
      </div>
    );
  }
}
export default LandingPage;
