import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [nav, setnav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "contact",
    },
    {
      id: 5,
      link: "experience",
    },
  ];

  return (
    <>
      <div className="flex justify-between text-white items-center w-full h-20 bg-black fixed px-4 ">
        <div>
          <h1 className="font-shoeb  text-4xl ">Shoeb Akhtar</h1>
        </div>
        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 font-medium capitalize text-gray-500 hover:scale-125 cursor-pointer duration-200 hover:text-white"
            >
       <a href={`#${link}`}>{link}</a>
            </li>
          ))}
        </ul>
        <div
          onClick={() => setnav(!nav)}
          className="cursor-pointer text-gray-400 z-10 pr-2 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {nav&&(
        <ul className=" flex flex-col justify-center items-center absolute top-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
        {links.map(({ id, link }) => (
            <li
              key={id}
              className="py-4 font-medium text-4xl capitalize text-gray-500 hover:scale-125 hover:text-white cursor-pointer duration-200"
            >
       <a href={`#${link}`}>{link}</a>
            </li>
          ))}
        </ul>
        )}
      </div>
    </>
  );
};

export default NavBar;
