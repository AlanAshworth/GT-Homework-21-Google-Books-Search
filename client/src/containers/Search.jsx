import React, { Component, Fragment } from "react";
import Jumbotron from "../components/shared/Jumbotron/Jumbotron";
import BookSearch from "../components/BookSearch/BookSearch";

class Search extends Component {
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
              <BookSearch />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h1>Search Page</h1>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Search;
