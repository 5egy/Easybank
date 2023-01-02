import React from "react";

const Scontent = ({ heading, image, children }) => {
  return (
    <div className="section-content">
      <img src={image} alt={heading} />
      <h3>{heading}</h3>
      <p>{children}</p>
    </div>
  );
};

export default Scontent;
