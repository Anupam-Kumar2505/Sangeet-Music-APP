import React, { useContext } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import "../App.css";
import "../styles/temp.css";
import Slide from "./Slide";
import { SlideDetails } from "../store/song-list-store";
import MusicPlayer from "./MusicPlayer";
import SideBar2 from "./Sidebar2";

//using css

const HeroSectionPlayer = () => {
  const { slideList, handlePrev, handleNext } = useContext(SlideDetails);

  let sliderProject = "";
  sliderProject = slideList.map((slide, i) => <Slide slide={slide} key={i} />);
  return (
    <main className="flex flex-row h-[90vh] bg-secondary">
      <div className="flex-[0.7] flex flex-col rounded-tr-[30px] bg-primary">
        <SideBar2 />
      </div>
      <div className="flex-1 flex flex-col z-0">
        <div className="body-slider flex-[3]">
          <div className="slider">{sliderProject};</div>
          <button id="prev" onClick={handlePrev}>
            <FaChevronLeft size={50} />
          </button>
          <button id="next" onClick={handleNext}>
            <FaChevronRight size={50} />
          </button>
        </div>
        <div className="flex-[1] flex justify-center items-center ">
          <MusicPlayer />
        </div>
      </div>
      <div className="flex-[0.7] bg-primary rounded-tl-[30px]"></div>
    </main>
  );
};
export default HeroSectionPlayer;

//using react-slick

// const HeroSectionPlayer = () => {
//   const {
//     arrowRef,
//     slideList,
//     songIndex,
//     handlePrev,
//     handleNext,
//     handleSwipe,
//   } = useContext(SlideDetails);

//   var settings = {
//     className: "center",
//     centerMode: true,
//     dots: false,
//     infinite: false,
//     speed: 300,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     centerPadding: "60px",
//     swipeToSlide: true,
//     focusOnSelect: true,
//     initialSlide: 0,
//     arrows: false,
//     variableWidth: true,
//     afterChange: (index) => {
//       handleSwipe(index);
//     },
//   };

//   let sliderProject = "";
//   sliderProject = slideList.map((slide, i) => <Slide slide={slide} key={i} />);
//   return (
//     <div className="container">
//       <div className="buttons flex flex-row justify-around items-center">
//         <button
//           onClick={() => {
//             return arrowRef.current.slickPrev();
//           }}
//           className="back"
//         >
//           <FaChevronLeft size={50} />
//         </button>
//         <button
//           onClick={() => {
//             return arrowRef.current.slickNext();
//           }}
//           className="next
//            "
//         >
//           <FaChevronRight size={50} />
//         </button>
//       </div>
//       <Slider className=".slider-container" ref={arrowRef} {...settings}>
//         {sliderProject}
//       </Slider>
//     </div>
//   );
// };
