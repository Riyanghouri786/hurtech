"use client";
import { motion } from "framer-motion";
import Word from "./Word";

import student from "../../public/assets/images/student.jpg";
import man from "../../public/assets/images/man.jpg";
import study from "../../public/assets/images/study.jpg";
import Image from "next/image";
import Header from "./Header";
import Footer from "./Footer";

const TextAnimation = () => {
  const route = [
    { name: "Home" },
    { name: "About Us" },
    { name: "Pages" },
    { name: "Blog" },
    { name: "Contact" },
  ];
  return (
    <>
      <Header />
      <div className="flex justify-around mt-32">
        <motion.div
          initial={{ opacity: 0, y: -100 }} // Starts off the screen at the top
          animate={{ opacity: 1, y: 0 }} // Slides into view
          transition={{ duration: 0.5 }} // Adjusts the timing of the animation
          className="flex flex-col items-start justify-center w-3/6 gap-3 pl-3"
        >
          <h1 className="font-bold text-sunglow">About us</h1>
          <h1 className="text-[50px] font-bold leading-none">
            We learn from the best and we are committed to being our best
          </h1>
        </motion.div>
        <div className="w-[300px] flex flex-col text-left justify-center gap-3 items-center">
          <p className="flex items-center justify-center text-left">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div className="w-[300px] flex  items-left">
            <button className="flex items-center w-[140px] gap-2 p-3 transition-transform duration-300 ease-in-out transform bg-black rounded-md text-sunglow hover:-translate-y-1">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6" // Adjust size for the icon
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-32 pl-24 mt-10">
        <div>
          <h1 className="text-[25px]  font-bold">Our Vision</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus <br /> nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <hr />
          <h1 className="text-[25px] font-bold">Our Mission</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus <br /> nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <hr />
          <h1 className="text-[25px] font-bold">Our Values</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus <br /> nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div>
          <Image className="h-[500px]" src={study} />
        </div>
      </div>
      <div className="flex mt-20 ml-24 ">
        <div className="flex flex-col w-1/3 gap-4">
          <h1 className="font-bold text-sunglow">Why Choose Us ?</h1>
          <p className="font-bold text-[40px] leading-10">
            Our purpose <br /> is to <br /> transform <br /> access to <br />{" "}
            Education
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Ut
            elit tellus, luctus nec <br /> ullamcorper mattis, pulvinar dapibus
            leo.
          </p>
          <button className="flex items-center w-[140px] gap-2 p-3 transition-transform duration-300 ease-in-out transform bg-black rounded-md text-sunglow hover:-translate-y-1">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6" // Adjust size for the icon
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>

        <div className="relative w-[750px] h-[350px]">
          <Image
            className="w-full h-[100%] "
            src={student}
            alt="Picture of the author"
          />
          <div className="absolute bottom-[30px] z-10 left-11">
            <Word />
          </div>
        </div>
      </div>
      <Image
        className="mt-[200px] 
        w-full h-[690px]"
        alt="Picture of the author"
        src={man}
      />
      <Footer />
    </>
  );
};

export default TextAnimation;
