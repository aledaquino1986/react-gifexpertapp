import React from "react";
import useFetchGifs from "../hooks/useFetchGifs";

import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      {" "}
      <h3>{category}</h3>
      {loading && <h3>Loading...</h3>}
      <div className="card-grid">
        <ul>
          {images.map(img => {
            return <GifGridItem {...img} key={img.id} />;
          })}
        </ul>
      </div>
    </>
  );
};

export default GifGrid;
