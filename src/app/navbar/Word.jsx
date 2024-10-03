import { useState, useEffect } from "react";

const Word = () => {
  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(1);
  const [count3, setCount3] = useState(1);

  useEffect(() => {
    const incrementCount = (setCount, target) => {
      const duration = 2000; // Duration in milliseconds
      const intervalTime = 1; // Update the count every 1 millisecond
      const steps = Math.ceil(duration / intervalTime); // Calculate the number of steps to reach the target
      const increment = target / steps; // Calculate the increment per step

      const interval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount >= target) {
            clearInterval(interval);
            return target; // Ensure we don't exceed the target
          }
          return Math.ceil(prevCount + increment); // Increment the count
        });
      }, intervalTime);
    };

    incrementCount(setCount1, 500);
    incrementCount(setCount2, 1000);
    incrementCount(setCount3, 15000);

    return () => {
      clearInterval();
    };
  }, []);

  return (
    <div className="absolute z-10 flex items-center justify-center gap-7">
      <div className="flex flex-col items-center justify-center  h-[240px]  gap-5 text-4xl font-bold text-gray-800 bg-white rounded-lg shadow-lg w-[200px]">
        <div className="flex items-center justify-center w-16 h-16 text-gray-600 transition-colors duration-300 ease-in-out bg-yellow-400 rounded-full hover:bg-gray-600 hover:text-yellow-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
            />
          </svg>
        </div>
        {count1}+<p className="text-[15px] mt-[-15px]">Expert Instructor</p>
      </div>
      <div className="flex flex-col items-center justify-center h-[240px]  gap-5 text-4xl font-bold text-gray-800 bg-white rounded-lg shadow-lg w-[200px]">
        <div className="flex items-center justify-center w-16 h-16 text-gray-600 transition-colors duration-300 ease-in-out bg-yellow-400 rounded-full hover:bg-gray-600 hover:text-yellow-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
            />
          </svg>
        </div>
        {count2}+<p className="text-[15px] mt-[-15px]">Course Enrollment</p>
      </div>
      <div className="flex flex-col items-center justify-center h-[240px] gap-5 text-4xl font-bold text-gray-800 bg-white rounded-lg shadow-lg w-[200px]">
        <div className="flex items-center justify-center w-16 h-16 text-gray-600 transition-colors duration-300 ease-in-out bg-yellow-400 rounded-full hover:bg-gray-600 hover:text-yellow-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
            />
          </svg>
        </div>
        {count3} K<p className="text-[15px] mt-[-15px]">Student learning</p>
      </div>
    </div>
  );
};

export default Word;
