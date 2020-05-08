import React, { Component, Fragment } from "react";
import Jumbotron from "../components/shared/Jumbotron/Jumbotron";

class Saved extends Component {
  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col">
              <Jumbotron />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h1>Saved Page</h1>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Saved;
