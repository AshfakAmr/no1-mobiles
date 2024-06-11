import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Shop",
    link: "/#",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
  {
    id: 4,
    name: "Blogs",
    link: "/#blog",
  },
];

const DropdownLinks = [
  { id: "1", name: "Trending Products", link: "/#" },
  { id: "2", name: "Best Selling", link: "/#" },
  { id: "3", name: "Top Rated", link: "/#" },
];

function NavBar({ handleOrderPopUp }) {
  return (
    <div className="  dark:bg-gray-900 dark:text-white duration-200 ">
      <div className="py-4">
        <div className="container flex justify-between items-center">
          {/* Logo and Link section */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-brandWhite bg-primary p-2 rounded-md font-semibold text-2xl tracking-widest uppercase 
              dark:text-primary dark:rounded-none  dark:bg-none dark:bg-transparent sm:text-3xl"
            >
              No.1 Mobiles
            </a>
            {/* Menu Items */}
            <div className="hidden lg:block">
              <ul
                className="flex gap-4 
              items-center "
              >
                {MenuLinks.map((data, i) => (
                  <li key={i}>
                    <a
                      className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:text-gray-400  dark:hover:text-white duration-200 "
                      href={data.link}
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
                {/* Drop Down */}
                <li className="relative cursor-pointer group">
                  <a
                    className="font-semibold  text-gray-500 hover:text-black dark:text-gray-400  dark:hover:text-white duration-200 flex items-center gap-[2px] py-2 "
                    href="#"
                  >
                    Quick links
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 duration-300 dark:text-primary" />
                    </span>
                  </a>
                  <div className="absolute z-[9999] bg-white hidden group-hover:block rounded-md dark:bg-slate-900 p-2 w-[200px] shadow-md">
                    <ul className="space-y-2">
                      {DropdownLinks.map((data, i) => (
                        <li key={i}>
                          <a
                            className="font-semibold text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white inline-block p-2 hover:bg-primary/20 duration-200 w-full rounded-md"
                            href={data.link}
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* Navbar right section */}
          <div className="flex justify-between items-center gap-4">
            {/* Search bar Section */}
            <div className="relative group hidden sm:block">
              <input type="text" placeholder="Search" className="search-bar" />
              <IoMdSearch className="text-xl group-hover:text-primary text-gray-500 dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
            </div>

            {/* Order button section */}
            <button className="relative p-3">
              <FaCartShopping
                onClick={handleOrderPopUp}
                className="text-gray-500  text-xl dark:text-gray-400"
              />
              <div className="w-4 h-4 border-2  p-2.5 text-white bg-primary rounded-full  absolute -top-2 -right-2 flex items-center justify-center text-xs dark:bg-primary">
                12
              </div>
            </button>
            {/* Dark mode Section */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
