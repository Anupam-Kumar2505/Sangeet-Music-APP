import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { IoPauseSharp, IoPlaySharp } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { FaVolumeUp } from "react-icons/fa";
import { useContext, useEffect, useRef, useState } from "react";
import { SlideDetails } from "../store/song-list-store";

const MusicPlayer = () => {
  const {
    slideList,
    songIndex,
    handlePrev,
    handleNext,
    isPlaying,
    handlePausePlay,
    formatTime,
    handleAudioUpdate,
    currentTime,
    songElement,
    audioProgress,
    handleMusicProgressBar,
    volume,
    handleVolumeProgressBar,
  } = useContext(SlideDetails);

  return (
    <div className="flex-1 0 flex flex-row justify-center items-center">
      <audio
        ref={songElement}
        src={slideList[songIndex].src}
        onEnded={handleNext}
        onTimeUpdate={handleAudioUpdate}
      ></audio>
      <div className="h-[8vh] w-[40vw] bg-[#101820] flex flex-row justify-center items-center rounded-full">
        <div className="  flex-[0.4] flex flex-row">
          <div
            className="flex-1 flex justify-end items-center cursor-pointer"
            onClick={handlePrev}
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
              <IoPauseSharp
                className="cursor-pointer"
                size={30}
                color="#F2AA4C"
              />
            ) : (
              <IoPlaySharp
                size={30}
                color="#F2AA4C"
                className="pl-1 cursor-pointer"
              />
            )}
          </div>
          <div
            className=" flex-1 flex bg-justify-start items-center cursor-pointer"
            onClick={handleNext}
          >
            <MdSkipNext size={30} color="#F2AA4C" />
          </div>
        </div>
        <div className="bg-[#0D0F12] rounded-md flex-1 flex flex-row max-h-[60%]">
          <div className="  flex-[0.2] flex justify-center items-center ">
            <img
              src={slideList[songIndex].img}
              className="aspect-square w-[60%] border-2 border-white"
            />
          </div>
          <div className=" flex-1 flex flex-col">
            <div className="flex-1 indent-1   flex flex-row items-end leading-tight">
              <input
                type="range"
                name="musicProgressBar"
                className="musicProgressBar w-full"
                value={audioProgress}
                onChange={handleMusicProgressBar}
              />
            </div>
            <div className="flex-[0.8] flex flex-row items-center indent-1">
              <div className=" text-[14px] font-roboto font-extrabold  text-[#F2AA4C] leading-none">
                {slideList[songIndex].name}
              </div>
              <div className=" text-[10px] leading-6 font-roboto font-thin text-white">
                {"•"} {slideList[songIndex].artist}
              </div>
            </div>
          </div>
          <div className=" flex-[0.3] flex flex-row justify-around items-center text-white">
            <div>{formatTime(currentTime)}</div>
            <div>
              <BsThreeDots />
            </div>
          </div>
        </div>
        <div className="flex-[0.3]  flex flex-row justify-center items-center text-white ">
          <div className="pr-3">
            <div className="dropdown dropdown-top">
              <div
                tabIndex={0}
                className="btn border-none hover:bg-white/15 px-3"
              >
                <FaVolumeUp size={20} color="#F2AA4C" />
              </div>
              <input
                type="range"
                name="volumeProgressBar"
                className="volumeProgressBar dropdown-content -left-5 -rotate-90"
                value={volume}
                onChange={handleVolumeProgressBar}
              />
            </div>
          </div>
          <div className="">
            <img src={"src/assets/icons/musical-note.png"} className="h-4 " />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MusicPlayer;
