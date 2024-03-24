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
