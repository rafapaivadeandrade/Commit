import React from "react";
import { Link, Route } from "react-router-dom";

const AnnounceHome = ({ announce, id }) => {
  console.log(announce);
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100">
        <Link to={`/categories/${announce.category}/${id}`}>
          <img className="card-img-top" src={announce.photo} alt="photo" />
        </Link>
        <div className="card-body">
          <h4 className="card-title">
            <Link to={`/categories/${announce.category}/${id}`}>
              {announce.name}
            </Link>
          </h4>
          <h5>{announce.price}</h5>
          <p className="card-text">{announce.description}</p>
        </div>
      </div>
    </div>
  );
};

export default AnnounceHome;
