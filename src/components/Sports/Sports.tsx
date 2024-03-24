import React from "react";
import Card from "./SportsCard";
import Promotion from "../Promotion/Promotion";
import sportsData from "@/Data/SportsData";


const Sports: React.FC = () => {
  return (
    <div className="flex justify-center align-middle">
      <div className="">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {sportsData.map((data, index) => (
            <Card key={index} {...data} />
          ))}
          <Promotion />
        </div>
      </div>
    </div>
  );
};

export default Sports;
