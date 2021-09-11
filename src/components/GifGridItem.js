import React from "react";

const GifGridItem = ({ id, title, url }) => {
  console.log(title);
  return (
    <div className="card animate__animated animate__fadeIn">
      <img src={url} alt={title} />
      <h4>{title}</h4>
    </div>
  );
};

export default GifGridItem;
