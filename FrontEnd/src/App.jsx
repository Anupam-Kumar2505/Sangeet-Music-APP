import "./App.css";
import "./index.css";
import "./Components/Sidebar.jsx";

import Header from "./Components/Header.jsx";
import HeroSectionPlayer from "./Components/HeroSectionPlayer.jsx";
import MusicPlayer from "./Components/MusicPlayer.jsx";
import SlideDetailsProvider from "./store/song-list-store.jsx";

export default function App() {
  return (
    <SlideDetailsProvider>
      <div className="flex flex-col h-lvh backdrop-blur-sm">
        <Header />
        <HeroSectionPlayer />
        <MusicPlayer />
      </div>
    </SlideDetailsProvider>
  );
}
