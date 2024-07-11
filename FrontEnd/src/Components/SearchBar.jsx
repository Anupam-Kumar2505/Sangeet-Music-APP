import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className="mx-2 flex-1 justify-center h-2/3 px-2">
      <IoSearch
        color="black"
        className="px-2 w-9 bg-[#F2AA4C] h-full rounded-l-full"
      />
      <input type="text" className="w-1/3 h-full rounded-r-full bg-[#F2AA4C]" />
    </div>
  );
};

export default SearchBar;
