import React from "react";
import Sports from "../Sports/Sports";

const LandingPage: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-full h-full my-8 bg-slate-100 dark:bg-[#292B32]">
      <div className=" bg-slate-100 dark:bg-[#292B32] overflow-hidden">
        <div className="container mx-auto px-4 py-8 w-11/12">
          <div className="py-4">
            <span className="text-3xl text-gray-600 font-bold pb-8 dark:text-white underline ml-5">
              Sports
            </span>
          </div>
          <Sports />
        </div>
        <div className="flex justify-center py-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
