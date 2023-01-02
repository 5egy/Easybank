import React from "react";

const Sarticle = ({ image, author, title, children }) => {
  return (
    <div className="section-articles">
      <img src={image} alt={title} />
     <div className="article-details">
     <h5>By {author}</h5>
      <h3>{title}</h3>

      <p>{children}</p>
     </div>
    </div>
  );
};

export default Sarticle;
