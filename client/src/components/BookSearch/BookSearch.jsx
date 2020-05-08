import React, { Fragment } from "react";
import "./BookSearch.css";

const BookSearch = () => {
  return (
    <Fragment>
      <form className="BookSearch clearfix">
        <div className="form-group">
          <label htmlFor="bookSearch">Book Search</label>
          <input
            type="text"
            className="form-control"
            id="bookSearch"
            aria-describedby="searchHelp"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </Fragment>
  );
};

export default BookSearch;
