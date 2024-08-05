import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className="w-[75%] h-1/2 rounded-full bg-neutral  flex justify-center  relative">
      <IoSearch className="absolute left-3 top-2.5" />
      <input
        type="text"
        className=" w-full focus:outline-none bg-transparent placeholder:text-slate-500 text-black pl-10"
        placeholder="Search"
      ></input>
    </div>
  );
};

export default SearchBar;
