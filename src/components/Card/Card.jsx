import React from "react";
import Image from "../Image/Image";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="col-sm-6 col-lg-4 d-flex justify-content-center">
      <div className="card" style={{ width: "18rem" }}>
        <Image {...props} />
        <div className="card-body">
          <p className="card-title">{props.cardTitle}</p>
          <p className="card-text">{props.cardText}</p>
        </div>
        <div>
          <a className="btn btn-dark" href={props.liveSiteURL}>
            Live Site
          </a>
          <a className="btn btn-dark" id="repoButton" href={props.repoURL}>
            GitHub Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
