import SearchBar from "./SearchBar";
import Sidebar from "./Sidebar";
import { MdOutlineAccountCircle } from "react-icons/md";
const Header = () => {
  return (
    <>
      <div className="drawer">
        <div className="drawer-content flex ">
          {/* Navbar */}
          <div className="navbar w-full">
            <Sidebar />
            <SearchBar />
            <MdOutlineAccountCircle className=" mr-2 h-8 w-10 " />
          </div>
          {/* Page content here */}
        </div>
      </div>
    </>
  );
};

export default Header;
