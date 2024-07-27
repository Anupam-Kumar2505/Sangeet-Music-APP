import React from "react";
import "../styles/Slide.css";

const Slide = ({ slide, index, imageIndex }) => {
  const { img } = slide;

  return (
    <div className="slide Container">
      <img src={img} />
    </div>
  );
};

export default Slide;
