import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="flex flex-col items-center">
        <div className="mb-4">
          <div className="inline-block w-16 h-16 border-4 border-yellow-500 rounded-full animate-spin border-t-transparent"></div>
        </div>
        <h1 className="text-2xl font-semibold text-white">Loading...</h1>
        <p className="text-lg text-gray-400">Please wait a moment</p>
      </div>
    </div>
  );
};

export default Loading;
