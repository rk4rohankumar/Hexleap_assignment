import React from "react";

interface CardProps {
  title: string;
  imageUrl: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, imageUrl, description }) => {
  const bgColor = "dark" ? "bg-gray-600" : "bg-white";
  return (
    <div className="relative max-w-xs h-[490px] bg-white rounded-sm w-full ml-5  shadow-xl sm:w-[260px] dark:bg-gray-700">
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
