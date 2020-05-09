import React, { Fragment } from "react";
import "./BookDetails.css";

const BookDetails = (props) => {
  return (
    <Fragment>
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col">
              <h5>{props.title}</h5>
            </div>
            <div className="col">
              <button type="button" className="btn btn-secondary">
                View
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
        <div className="card-body">
          <p className="card-title">{props.subtitle}</p>
          <p className="card-text">{props.author}</p>
          <img src={props.picture.thumbnail} alt={props.name}></img>
          <p className="card-description">{props.description}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default BookDetails;
