import React from "react";
import "../styles/temp.css";

const Slide = ({ slide, index, imageIndex }) => {
  const { img } = slide;

  return (
    <div className="item">
      <img src={img} />
    </div>
  );
};

export default Slide;
