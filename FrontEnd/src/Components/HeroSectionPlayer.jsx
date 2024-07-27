import { useContext, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";
import "../App.css";

import React, { useRef, Component } from "react";

import Slide from "./Slide";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "../styles/Hero.css";
import { SlideDetails } from "../store/song-list-store";

const HeroSectionPlayer = () => {
  const {
    arrowRef,
    slideList,
    defaultIndex,
    handlePrev,
    handleNext,
    handleSwipe,
  } = useContext(SlideDetails);

  var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "60px",
    swipeToSlide: true,
    focusOnSelect: true,
    initialSlide: 0,
    arrows: false,
    variableWidth: true,
    afterChange: (index) => {
      handleSwipe(index);
    },
  };

  let sliderProject = "";
  sliderProject = slideList.map((slide, i) => <Slide slide={slide} key={i} />);
  return (
    <div className="container">
      <div className="buttons flex flex-row justify-around items-center">
        <button
          onClick={() => {
            return arrowRef.current.slickPrev();
          }}
          className="back"
        >
          <FaChevronLeft size={50} />
        </button>
        <button
          onClick={() => {
            return arrowRef.current.slickNext();
          }}
          className="next
           "
        >
          <FaChevronRight size={50} />
        </button>
      </div>
      <Slider className=".slider-container" ref={arrowRef} {...settings}>
        {sliderProject}
      </Slider>
    </div>
  );
};
export default HeroSectionPlayer;
