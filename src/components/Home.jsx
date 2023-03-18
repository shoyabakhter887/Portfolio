import React from "react";

import Images from "../assets/images.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import SocialLinks from "./SocialLinks";

const Home = () => {
  return (
    <>
     
      <div id="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
        <div className=" max-w-screen-lg mx-auto flex flex-col
        items-center justify-center h-full md:flex-row">
          <div className=" flex flex-col justify-center h-full">
            <h2 className="text-4xl sm:text-7xl font-bold text-white">I'm a Front End Developer</h2>
            <p className="py-4 text-gray-500 max-w-md">
              I have 6 Month of experience building and desgining Web Site.
              Currently, I love to work on web application using technologies
              like React, Tailwind, Github.
            </p>
            <div>
            <button className="group text-white cursor-pointer w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500">
            Portfolio 
               <span className="group-hover:rotate-90 duration-300 ml-1"> <MdKeyboardArrowRight size={25}/></span>
        
          </button>
          </div>
          
          </div>
          <div>
            <img src={Images} alt="My Profile" className="rounded-2xl mx:auto w-2/3 md:w-full" />
          </div>
        
        
        </div>
        
      </div>
      <SocialLinks/>
    </>
  );
};

export default Home;
