import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CardProps {
  imageUrl: string;
  teamName: string;
  date: string;
  time: string;
  address: string;
  darkMode?: boolean;
  button: string;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  teamName,
  date,
  time,
  address,
  button,
  darkMode = true,
}) => {
  const cardStyle = "dark"
    ? "bg-gray-600 text-white"
    : "bg-white text-gray-800";

  return (
    <div
      className={`rounded-sm overflow-hidden  shadow-xl h-full align-middle  justify-center bg-white dark:bg-gray-600 py-10 mx-5`}
      style={{ position: "relative" }}
    >
      <div
        className="dark:border-gray-100 border-slate-400 border-b border-dashed m-2 pb-5 relative"
        style={{ zIndex: 1 }}
      >
        <img
          className="w-full h-96 object-cover object-top transform"
          src={imageUrl}
          alt="Card Image"
        />
      </div>
      <div className="p-4 justify-center flex flex-col relative">
        <h2 className="text-xl font-bold mb-2 text-center">{teamName}</h2>
        <p className="text-sm mb-2 text-center">
          {date} | {time}
        </p>
        <p className="text-sm mb-4 text-center">{address}</p>
        <button className="bg-black hover:bg-slate-900 cursor-pointer text-white font-semi-bold py-2 px-4 rounded-sm focus:outline-none focus:shadow-outline">
          {button}
        </button>
      </div>
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          maskImage:
            "radial-gradient(circle 10px at 0 100%, transparent 0, transparent 20px, black 21px)",
          WebkitMaskImage:
            "radial-gradient(circle 10px at 0 100%, transparent 0, transparent 20px, black 21px)",
          zIndex: 0,
        }}
      ></div>
    </div>
  );
};

export default Card;
