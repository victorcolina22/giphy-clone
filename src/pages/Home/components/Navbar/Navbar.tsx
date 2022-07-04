import { FaUser } from "react-icons/fa";
import Searchbar from "../Searchbar/Searchbar";

import NavItem from "./NavItem";

const routes: Routes[] = [
  { name: "Reactions", route: " /reactions" },
  { name: "Entertainment", route: " /entertainment" },
  { name: "Sports", route: " /sports" },
  { name: "Stickers", route: " /stickers" },
  { name: "Artists", route: " /artists" },
];

type Routes = {
  name: string;
  route: string;
};

export function Navbar() {
  return (
    <>
      <header className="flex justify-between text-white">
        <div>
          <p>LOGO</p>
        </div>

        <div className="flex gap-1">
          {routes.map(({ name, route }: Routes) => (
            <NavItem
              key={name}
              className="flex justify-center items-center pt-2 pr-4 pl-4 pb-1 border-b-4 border-sky-500"
            >
              {name}
            </NavItem>
          ))}
          <NavItem className="flex justify-center items-center w-8 h-auto border-b-4 border-sky-500">
            <div className="w-1 h-4 border-r-4 border-white border-dotted"></div>
          </NavItem>
        </div>

        <div className="flex gap-1">
          <div className="flex justify-center items-center bg-sky-500 py-1 px-4">
            <p>Upload</p>
          </div>

          <div className="flex justify-center items-center bg-sky-500 py-1 px-4">
            <p>create</p>
          </div>
        </div>

        <div className="flex items-center bg-gray-600 w-40">
          <div className="flex justify-center items-center w-14 h-full bg-gray-500">
            <FaUser />
          </div>

          <div className="flex justify-center w-full">
            <p>Log in</p>
          </div>
        </div>
      </header>

      <div className="mt-4">
        <Searchbar />
      </div>
    </>
  );
}

export default Navbar;
