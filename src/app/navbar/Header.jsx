import React from "react";
import { FaSearch } from "react-icons/fa";
import Pop from "./Pop-up";
import { motion } from "framer-motion";

const Header = () => {
  const route = [
    { name: "Home" },
    { name: "About Us" },
    { name: "Pages" },
    { name: "Blog" },
    { name: "Contact" },
  ];
  return (
    <div className="w-full h-96 bg-sunglow">
      <div className="flex items-center justify-around pt-10 font-bold gap-15">
        <div className="flex items-center justify-between w-6/12">
          <h1 className="font-bold text-[25px]">SkillBox</h1>

          {route.map((item, index) => {
            return (
              <h1
                className=" text-[15px] relative hover:after:content-[''] hover:after:block hover:after:w-full hover:after:h-[2px] hover:after:bg-black hover:after:absolute hover:after:left-0 hover:after:bottom-[-6px] after:transition-all after:duration-500 cursor-pointer"
                key={index}
              >
                {item.name}
              </h1>
            );
          })}
          <FaSearch />
        </div>
        <div className="flex items-center gap-5">
          <button className="h-14 bg-black border-2 border-black text-sunglow text-[20px] w-32 rounded-lg ">
            Sign Up
          </button>
          <Pop />
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -100 }} // Starts off the screen at the top
        animate={{ opacity: 1, y: 0 }} // Slides into view
        transition={{ duration: 0.5 }} // Adjusts the timing of the animation
        className="flex flex-col items-center justify-center"
      >
        <h1 className="text-[75px] font-bold pt-10">About</h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus <br /> nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </motion.div>
    </div>
  );
};

export default Header;
