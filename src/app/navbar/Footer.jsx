import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=" w-full h-[400px] flex items-start pt-28 justify-around">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-[20px]">Top Categories</h1>
        <Link href={"#"}>Web development</Link>
        <Link href={"#"}>Digitial Marketing</Link>
        <Link href={"#"}>Business Insight</Link>
        <Link href={"#"}>Computer Science</Link>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-[20px]">Useful links</h1>
        <Link href={"#"}>About</Link>
        <Link href={"#"}>Service</Link>
        <Link href={"#"}>Become Teacher</Link>
        <Link href={"#"}>Blog</Link>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-[20px]">Help & Support</h1>
        <Link href={"#"}>Fourm</Link>
        <Link href={"#"}>Facebook Group</Link>
        <Link href={"#"}>Mailing List </Link>
        <Link href={"#"}>Customer Service</Link>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-[20px]">Stay update</h1>
        <div className="flex gap-3">
          <input
            className="p-3 border-2 border-black rounded-md"
            type="text"
            placeholder="Submit your email address"
          />
          <button className="flex items-center justify-center w-[120px] gap-2 p-3 transition-transform duration-300 ease-in-out transform bg-black rounded-md text-sunglow hover:-translate-y-1">
            Submit
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
        <div className="flex items-center justify-start gap-3 ">
          <Link href={"#"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="w-6 h-6"
            >
              <path
                fill="#1877F2"
                d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24h11.495v-9.293H9.692V10.89h3.128V8.408c0-3.1 1.893-4.79 4.658-4.79 1.325 0 2.462.099 2.795.143v3.24h-1.917c-1.503 0-1.794.713-1.794 1.76v2.307h3.587l-.467 3.818h-3.12V24h6.116c.73 0 1.325-.594 1.325-1.325V1.325C24 .593 23.406 0 22.675 0z"
              />
            </svg>
          </Link>
          <Link href={"#"}>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="w-6 h-6"
            >
              <path
                fill="#1DA1F2"
                d="M23.643 4.937c-.835.37-1.732.621-2.675.734a4.697 4.697 0 0 0 2.052-2.59 9.294 9.294 0 0 1-2.963 1.13A4.68 4.68 0 0 0 16.435 3c-2.59 0-4.695 2.112-4.695 4.718 0 .37.04.73.12 1.075-3.904-.2-7.365-2.09-9.686-4.967a4.784 4.784 0 0 0-.634 2.37c0 1.637.828 3.08 2.086 3.926a4.68 4.68 0 0 1-2.126-.596v.06c0 2.285 1.616 4.187 3.763 4.62a4.696 4.696 0 0 1-2.118.083c.597 1.874 2.323 3.24 4.368 3.275A9.38 9.38 0 0 1 1.11 19.15a13.188 13.188 0 0 0 7.16 2.118c8.592 0 13.287-7.24 13.287-13.522 0-.206-.004-.412-.013-.616a9.496 9.496 0 0 0 2.346-2.423z"
              />
            </svg>
          </Link>

          <Link href={"#"}>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="w-6 h-6"
            >
              <path
                fill="#FF0000"
                d="M23.498 6.186a2.985 2.985 0 0 0-2.1-2.1C19.573 3.42 12 3.42 12 3.42s-7.574 0-9.398.666a2.985 2.985 0 0 0-2.1 2.1C0 8.009 0 12 0 12s0 3.991.502 5.814a2.985 2.985 0 0 0 2.1 2.1c1.824.666 9.398.666 9.398.666s7.573 0 9.398-.666a2.985 2.985 0 0 0 2.1-2.1C24 15.991 24 12 24 12s0-3.991-.502-5.814zM9.751 15.431V8.57l6.5 3.431-6.5 3.43z"
              />
            </svg>
          </Link>

          <Link href={"#"}>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="w-6 h-6"
            >
              <defs>
                <linearGradient
                  id="instagram-gradient"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="1"
                >
                  <stop offset="0%" stop-color="#f09433" />
                  <stop offset="25%" stop-color="#e6683c" />
                  <stop offset="50%" stop-color="#dc2743" />
                  <stop offset="75%" stop-color="#cc2366" />
                  <stop offset="100%" stop-color="#bc1888" />
                </linearGradient>
              </defs>
              <path
                fill="url(#instagram-gradient)"
                d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.403a4.92 4.92 0 0 1 1.75 1.01 4.92 4.92 0 0 1 1.01 1.75c.162.46.349 1.26.403 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.43a4.92 4.92 0 0 1-1.01 1.75 4.92 4.92 0 0 1-1.75 1.01c-.46.162-1.26.349-2.43.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.43-.403a4.92 4.92 0 0 1-1.75-1.01 4.92 4.92 0 0 1-1.01-1.75c-.162-.46-.349-1.26-.403-2.43C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.43a4.92 4.92 0 0 1 1.01-1.75 4.92 4.92 0 0 1 1.75-1.01c.46-.162 1.26-.349 2.43-.403C8.416 2.175 8.796 2.163 12 2.163M12 0C8.73 0 8.332.012 7.052.07c-1.31.062-2.543.278-3.644.593a6.878 6.878 0 0 0-2.557 1.39 6.878 6.878 0 0 0-1.39 2.557C.29 6.678.074 7.91.012 9.22.012 10.5 0 10.898 0 14.17c0 3.272.012 3.67.07 4.95.062 1.31.278 2.543.593 3.644a6.878 6.878 0 0 0 1.39 2.557 6.878 6.878 0 0 0 2.557 1.39c1.1.315 2.334.53 3.644.593 1.28.058 1.678.07 4.95.07 3.272 0 3.67-.012 4.95-.07 1.31-.062 2.543-.278 3.644-.593a6.878 6.878 0 0 0 2.557-1.39 6.878 6.878 0 0 0 1.39-2.557c.315-1.1.53-2.334.593-3.644.058-1.28.07-1.678.07-4.95s-.012-3.67-.07-4.95c-.062-1.31-.278-2.543-.593-3.644a6.878 6.878 0 0 0-1.39-2.557 6.878 6.878 0 0 0-2.557-1.39C19.543.29 18.31.074 17 .012 15.67 0 15.272 0 12 0zm0 5.838a6.162 6.162 0 0 1 6.163 6.162A6.162 6.162 0 0 1 12 18.162a6.162 6.162 0 0 1-6.163-6.162A6.162 6.162 0 0 1 12 5.838m0 2.364a3.798 3.798 0 0 0-3.798 3.798 3.798 3.798 0 0 0 3.798 3.798 3.798 3.798 0 0 0 3.798-3.798 3.798 3.798 0 0 0-3.798-3.798zm8.006-.588a1.455 1.455 0 0 0-1.456 1.456c0 .804.653 1.456 1.456 1.456s1.456-.652 1.456-1.456a1.455 1.455 0 0 0-1.456-1.456z"
              />
            </svg>
          </Link>
          <Link href={"#"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="w-6 h-6"
            >
              <path
                fill="#0077B5"
                d="M22.225 0H1.775C.793 0 0 .792 0 1.774v20.452C0 23.207.793 24 1.775 24h20.45C23.207 24 24 23.207 24 22.226V1.774C24 .792 23.207 0 22.225 0zM7.084 20.452H3.665V9h3.419v11.452zm-1.709-13.03a1.983 1.983 0 1 1 0-3.966 1.983 1.983 0 0 1 0 3.966zm15.272 13.03h-3.419v-5.775c0-1.378-.027-3.156-1.922-3.156-1.923 0-2.217 1.502-2.217 3.058v5.873h-3.419V9h3.29v1.555h.046c.458-.867 1.574-1.78 3.24-1.78 3.464 0 4.112 2.283 4.112 5.257v5.42z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
