import React from "react";

interface CardProps {
  imageUrl: string;
  teamName: string;
  totalEvents: number;
  eventName: string;
  sportName: string;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  teamName,
  totalEvents,
  eventName,
  sportName,
}) => {
  // const textColor = darkMode ? "text-gray-100" : "text-gray-800";
  // const bgColor = darkMode ? "bg-gray-700" : "bg-white";
  // const bgSports = darkMode ? "bg-gray-800" : "bg-gray-100";
  // const borderColor = darkMode ? "border-gray-700" : "border-gray-300";

  return (
    <div
      className={`rounded-sm  shadow-lg w-full m-5 dark:bg-gray-700 bg-white`}
    >
      <div className={`p-2 `}>
        <img
          className="w-full h-96 object-cover object-center"
          src={imageUrl}
          alt="Card Image"
        />
      </div>
      <div className="p-2 text-black dark:text-white">
        <h2 className={`text-xl font-bold mb-2 `}></h2>
        <div className={`flex justify-between p-2`}>
          <div className="w-1/2 pr-2">
            <p className={`text-sm `}>Total Events</p>
            <p className={`text-lg font-bold `}>{totalEvents} Events</p>
          </div>
          <div className="w-1/2 pl-2">
            <p className={`text-sm `}>Sports</p>
            <p className={`text-lg font-bold `}>{sportName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
