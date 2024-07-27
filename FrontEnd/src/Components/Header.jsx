import SearchBar from "./SearchBar";
import Sidebar from "./Sidebar";
import { MdOutlineAccountCircle } from "react-icons/md";
const Header = () => {
  return (
    <>
      <div className="drawer mb-[2%] z-10">
        <div className="drawer-content flex ">
          {/* Navbar */}
          <div className="navbar w-full">
            <Sidebar className="" />
            <SearchBar />
            <MdOutlineAccountCircle className="h-8 w-10 " />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
