import { IoLogoChrome } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { RiPlayListFill } from "react-icons/ri";
import {
  MdMusicNote,
  MdOutlineAccountCircle,
  MdArrowDropDown,
} from "react-icons/md";

const Sidebar = () => {
  return (
    <>
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="flex-none ">
        <label
          htmlFor="my-drawer-3"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-6 w-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="bg-base-200 flex flex-col md:flex-none h-screen w-80 p-4">
          <a className="flex items-center text-white no-underline">
            <IoLogoChrome className=" mr-2 h-8 w-10 " />
            <span className="text-primary text-left text-2xl">SideBar</span>
          </a>
          <hr className="border-gray-400 my-4 " />

          {/* Sidebar content here */}
          <div className="flex flex-col  h-dvh p-4 justify-between">
            <ul className="menu menu-lg">
              <li>
                <a>
                  <FaHome className="h-4 w-4" />
                  <span className="text-gray-300">Home</span>
                </a>
              </li>
              <li>
                <a>
                  <RiPlayListFill className="h-4 w-4" />
                  <span className="text-gray-300">PlayLists</span>
                </a>
              </li>
              <li>
                <a>
                  <MdMusicNote className="h-4 w-4" />
                  <span className="text-gray-300">Discover</span>
                </a>
              </li>
            </ul>
            <div>
              <hr className="border-gray-400" />
              <div className="flex items-center justify-between text-white no-underline mt-3">
                <div className="flex items-center">
                  <MdOutlineAccountCircle className=" mr-2 h-8 w-10 " />
                  <span className="text-primary text-left text-2xl">
                    Cravenburg
                  </span>
                </div>
                <div>
                  <MdArrowDropDown size={25} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
