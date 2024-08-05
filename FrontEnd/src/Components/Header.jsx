import SearchBar from "./SearchBar";
import Sidebar from "./Sidebar";
import { MdOutlineAccountCircle } from "react-icons/md";
const Header = () => {
  return (
    <header className="flex flex-row bg-secondary">
      <div className="flex-[0.7] flex justify-start  items-center">
        <img className="h-12 ml-20" src="src/assets/logo-images/logo.png" />
        <img className="h-12" src="src/assets/logo-name/name.png"></img>
      </div>
      <div className="h-[10vh] flex-1 bg-primary rounded-b-[30px] flex flex-row text-white justify-evenly items-center">
        <p className="hover:text-neutral cursor-pointer">Home</p>
        <p className="hover:text-neutral cursor-pointer">Playlists</p>
        <p className="hover:text-neutral cursor-pointer">Settings</p>
        <p className="hover:text-neutral cursor-pointer">Artist</p>
      </div>
      <div className="flex-[0.7] flex flex-row justify-center items-center">
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
