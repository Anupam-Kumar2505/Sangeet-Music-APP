import { createContext, useReducer, useRef, useState, useEffect } from "react";

export const SlideDetails = createContext({
  songElement: null,
  songIndex: 0,
  slideList: [
    {
      name: "End of Beginning",
      artist: "Djo",
      img: "src/assets/song-covers/End_of_Beginning.png",
      src: "src/assets/songs/end-of-beginning.mp3",
    },
    {
      name: "Somewhere only We Know",
      artist: "Keane",
      img: "src/assets/song-covers/somewhere-only-we-know.jpeg",
      src: "src/assets/songs/somewhere-only-we-know.mp3",
    },
    {
      name: "Nothing New",
      artist: "Rio Romeo",
      img: "src/assets/song-covers/nothing-new.jpg",
      src: "src/assets/songs/nothings-new.mp3",
    },
  ],
  handlePrev: () => {},
  handleNext: () => {},
  isPlaying: false,
  handlePausePlay: () => {},
  formatTime: () => {},
  handleAudioUpdate: () => {},
  currentTime: 0,
  audioProgress: 0,
  handleMusicProgressBar: () => {},
  volume: 100,
  handleVolumeProgressBar: () => {},
});

const indexReducer = (currentIndex, action) => {
  let newIndex = currentIndex;
  const totalSlides = action.payload.slideList.length;

  if (action.type === "PREV") {
    if (newIndex - 1 >= 0) {
      newIndex = newIndex - 1;
    } else {
      newIndex = newIndex;
    }
  } else if (action.type === "NEXT") {
    newIndex = newIndex + 1 < totalSlides ? newIndex + 1 : newIndex;
  }

  return newIndex;
};

const SlideDetailsProvider = ({ children }) => {
  const songElement = useRef(null);
  const [audioProgress, setAudioProgress] = useState(0);
  const [volume, setVolume] = useState(100);
  const [songIndex, dispatchIndex] = useReducer(indexReducer, 0);
  const [slideList, setSlideList] = useState([
    {
      name: "End of Beginning",
      artist: "Djo",
      img: "src/assets/song-covers/End_of_Beginning.png",
      src: "src/assets/songs/end-of-beginning.mp3",
    },
    {
      name: "Somewhere only We Know",
      artist: "Keane",
      img: "src/assets/song-covers/somewhere-only-we-know.jpeg",
      src: "src/assets/songs/somewhere-only-we-know.mp3",
    },
    {
      name: "Nothing New",
      artist: "Rio Romeo",
      img: "src/assets/song-covers/nothing-new.jpg",
      src: "src/assets/songs/nothings-new.mp3",
    },
  ]);

  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const updateDuration = () => {
    setDuration(songElement.current.duration);
  };

  const handleAudioUpdate = () => {
    setCurrentTime(songElement.current.currentTime);

    const progress = parseInt(
      (songElement.current.currentTime / songElement.current.duration) * 100
    );
    setAudioProgress(isNaN(progress) ? 0 : progress);
  };

  const handleMusicProgressBar = (e) => {
    setAudioProgress(e.target.value);
    songElement.current.currentTime =
      (e.target.value * songElement.current.duration) / 100;
  };

  const handleVolumeProgressBar = (e) => {
    setVolume(e.target.value);
    songElement.current.volume = e.target.value / 100;
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const handlePrev = () => {
    dispatchIndex({ type: "PREV", payload: { slideList } });
    setTimeout(() => {
      if (songElement.current) {
        songElement.current.play().catch((error) => {
          // Handle play errors, if any (e.g., due to user interaction policies)
          console.error("Playback failed:", error);
        });
      }
      setIsPlaying(true); // Set playing state to true
    }, 0); // Immediate execution after state update
  };

  const handleNext = () => {
    dispatchIndex({ type: "NEXT", payload: { slideList } });
    setTimeout(() => {
      if (songElement.current) {
        songElement.current.play().catch((error) => {
          // Handle play errors, if any (e.g., due to user interaction policies)
          console.error("Playback failed:", error);
        });
      }
      setIsPlaying(true); // Set playing state to true
    }, 0); // Immediate execution after state update
  };

  const handlePausePlay = () => {
    if (isPlaying) {
      songElement.current.pause();
    } else {
      songElement.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const loadShow = () => {
    let stt = 0;
    const items = document.querySelectorAll(".slider .item");

    if (items.length === 0) return;

    items[songIndex].style.transform = "none";
    items[songIndex].style.zIndex = 1;
    items[songIndex].style.filter = "none";
    items[songIndex].style.opacity = 1;

    for (let i = songIndex + 1; i < slideList.length; i++) {
      stt++;
      items[i].style.transform = `translateX(${120 * stt}px) scale(${
        1 - 0.2 * stt
      }) perspective(16px) rotateY(-1deg)`;
      items[i].style.zIndex = -stt;
      items[i].style.filter = "blur(5px)";
      items[i].style.opacity = stt > 2 ? 0 : 1;
    }

    stt = 0;
    for (let i = songIndex - 1; i >= 0; i--) {
      stt++;
      items[i].style.transform = `translateX(${-120 * stt}px) scale(${
        1 - 0.2 * stt
      }) perspective(16px) rotateY(1deg)`;
      items[i].style.zIndex = -stt;
      items[i].style.filter = "blur(5px)";
      items[i].style.opacity = stt > 2 ? 0 : stt == 1 ? 0.8 : 0.6;
    }
  };

  useEffect(() => {
    loadShow();
  }, [songIndex]);

  useEffect(() => {
    console.log(isPlaying);
    if (isPlaying) {
      songElement.current.play();
    } else {
      songElement.current.pause();
    }
  }, [isPlaying]);

  return (
    <SlideDetails.Provider
      value={{
        songElement,
        slideList,
        songIndex,
        handlePrev,
        handleNext,
        isPlaying,
        handlePausePlay,
        formatTime,
        handleAudioUpdate,
        currentTime,
        audioProgress,
        handleMusicProgressBar,
        volume,
        handleVolumeProgressBar,
      }}
    >
      {children}
    </SlideDetails.Provider>
  );
};
export default SlideDetailsProvider;
