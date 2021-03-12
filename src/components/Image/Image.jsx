import React from "react";

const Image = ({ imgSrc, imgAlt }) => {
  return <img className="card-img-top" src={imgSrc} alt={imgAlt} />;
};

export default Image;
