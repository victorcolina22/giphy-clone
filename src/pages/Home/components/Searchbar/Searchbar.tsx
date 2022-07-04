import { VscSearch } from "react-icons/vsc";

export function Searchbar() {
  return (
    <div className="flex w-full">
      <input
        className="w-full px-5"
        type="text"
        placeholder="Search all the GIFS and Stickers"
      />
      <div className="flex justify-center items-center w-14 h-12 bg-red-500">
        <VscSearch color="white" fontSize="30px" />
      </div>
    </div>
  );
}

export default Searchbar;
