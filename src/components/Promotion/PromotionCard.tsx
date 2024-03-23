import React from "react";

interface CardProps {
  title: string;
  imageUrl: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, imageUrl, description }) => {
  return (
    <div className="relative max-w-xs  rounded-sm overflow-hidden mx-5  shadow-xl w-full dark:bg-gray-700">
      <div className="p-2">
        {/* Ad label */}
        <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded-sm">
          Ad
        </div>
        <img className="w-full  " src={imageUrl} alt={title} />
      </div>
      <div className="px-6 py-4 dark:text-white text-black">
        <div className="font-bold text-xl mb-2 ">{title}</div>
        <p className=" text-base">{description}</p>
      </div>
    </div>
  );
};

export default Card;
