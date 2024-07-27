import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { IoPauseSharp, IoPlaySharp } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { FaVolumeUp } from "react-icons/fa";
import { useContext, useState } from "react";
import { SlideDetails } from "../store/song-list-store";

const MusicPlayer = () => {
  const {
    arrowRef,
    slideList,
    defaultIndex,
    handlePrev,
    handleNext,
    isPlaying,
    handlePausePlay,
  } = useContext(SlideDetails);

  return (
    <div className="flex-1 0 flex flex-row justify-center items-center">
      <div className="h-[8vh] w-[40vw] bg-[#101820] flex flex-row justify-center items-center rounded-full">
        <div className="  flex-[0.4] flex flex-row">
          <div
            className="flex-1 flex justify-end items-center cursor-pointer"
            onClick={() => {
              return arrowRef.current.slickPrev();
            }}
          >
            <MdSkipPrevious size={30} color="#F2AA4C" />
          </div>
          <div
            className=" flex-1 flex justify-center items-center"
            onClick={() => {
              handlePausePlay();
            }}
          >
            {isPlaying ? (
              <IoPauseSharp size={30} color="#F2AA4C" />
            ) : (
              <IoPlaySharp size={30} color="#F2AA4C" className="pl-1" />
            )}
          </div>
          <div
            className=" flex-1 flex bg-justify-start items-center cursor-pointer"
            onClick={() => {
              return arrowRef.current.slickNext();
            }}
          >
            <MdSkipNext size={30} color="#F2AA4C" />
          </div>
        </div>
        <div className="bg-[#0D0F12] rounded-md flex-1 flex flex-row max-h-[60%]">
          <div className="  flex-[0.2] flex justify-center items-center ">
            <img
              src={slideList[defaultIndex].img}
              className="aspect-square w-[60%] border-2 border-white"
            />
          </div>
          <div className=" flex-1 flex flex-col">
            <div className="flex-1 text-[14px] indent-1 font-roboto font-extrabold  text-[#F2AA4C] flex flex-row items-end leading-tight">
              {slideList[defaultIndex].name}
            </div>
            <div className="flex-[0.8] indent-1 text-[10px] font-roboto font-thin ">
              {slideList[defaultIndex].artist}
            </div>
          </div>
          <div className=" flex-[0.3] flex flex-row justify-around items-center">
            <div>3:15</div>
            <div>
              <BsThreeDots />
            </div>
          </div>
        </div>
        <div className="flex-[0.3]  flex flex-row justify-center items-center ">
          <div className="pr-3">
            <FaVolumeUp size={20} color="#F2AA4C" />
          </div>
          <div className="pl-3">
            <img src={"src/assets/icons/musical-note.png"} className="h-4 " />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MusicPlayer;
