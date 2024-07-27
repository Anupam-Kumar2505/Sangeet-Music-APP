import { createContext, useReducer, useRef, useState } from "react";

export const SlideDetails = createContext({
  arrowRef: null,
  defaultIndex: 0,
  slideList: [
    {
      name: "End of Beginning",
      artist: "Djo",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgOD0abk6GHTIRcOLItB1UnxDP8NtyACkMCA&s",
    },
    {
      name: "Somewhere only We Know",
      artist: "Keane",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuGZfjtPNOSKXLkPAC7PJEZccXOEhvV7dbgA&s",
    },
    {
      name: "Nothing New",
      artist: "Rio Romeo",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBgFi-nV1YBCBaLt-OBPIEnrLxaDXJBWs64g&s",
    },
  ],
  handlePrev: () => {},
  handleNext: () => {},
  isPlaying: false,
  handlePausePlay: () => {},
  handleSwipe: () => {},
});
const indexReducer = (currentIndex, action) => {
  let newIndex;
  if (action.type === "PREV") {
    newIndex = Math.max(0, action.payload.index - 1);
  } else if (action.type === "NEXT") {
    newIndex = Math.min(
      action.payload.slideList.length - 1,
      action.payload.index + 1
    );
  } else if (action.type === "SWIPE") {
    newIndex = action.payload.swipeIndex;
  }
  console.log(newIndex);
  return newIndex;
};

const SlideDetailsProvider = ({ children }) => {
  const arrowRef = useRef(null);
  const [defaultIndex, dispatchIndex] = useReducer(indexReducer, 0);
  const [slideList, setSlideList] = useState([
    {
      name: "End of Beginning",
      artist: "Djo",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgOD0abk6GHTIRcOLItB1UnxDP8NtyACkMCA&s",
    },
    {
      name: "Somewhere only We Know",
      artist: "Keane",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuGZfjtPNOSKXLkPAC7PJEZccXOEhvV7dbgA&s",
    },
    {
      name: "Nothing New",
      artist: "Rio Romeo",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBgFi-nV1YBCBaLt-OBPIEnrLxaDXJBWs64g&s",
    },
  ]);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePrev = (index) => {
    const handlePrevAction = {
      type: "PREV",
      payload: { index },
    };
    dispatchIndex(handlePrevAction);
  };
  const handleNext = (index) => {
    const handlePrevAction = {
      type: "NEXT",
      payload: { index, slideList },
    };
    dispatchIndex(handlePrevAction);
  };

  const handlePausePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSwipe = (swipeIndex) => {
    const handleSwipeAction = {
      type: "SWIPE",
      payload: { swipeIndex },
    };
    dispatchIndex(handleSwipeAction);
  };

  return (
    <SlideDetails.Provider
      value={{
        arrowRef,
        slideList,
        defaultIndex,
        handlePrev,
        handleNext,
        isPlaying,
        handlePausePlay,
        handleSwipe,
      }}
    >
      {children}
    </SlideDetails.Provider>
  );
};
export default SlideDetailsProvider;
