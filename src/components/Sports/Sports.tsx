import React from "react";
import Card from "./SportsCard";
import Promotion from "../Promotion/Promotion";

const sportsData = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1609864810388-125e6cf81b79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFza2V0YmFsbCUyMHBsYXllciUyMG1vZGVsfGVufDB8fDB8fHww",
    teamName: "Team A",
    totalEvents: 10,
    eventName: "Event 1",
    sportName: "Football",
  },
  {
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1674164229916-214a5ca5e9d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA1fHxiYXNrZXRiYWxsJTIwcGxheWVyJTIwbW9kZWx8ZW58MHx8MHx8fDA%3D",
    teamName: "Team B",
    totalEvents: 15,
    eventName: "Event 2",
    sportName: "Basketball",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1688138344547-cddf551412a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRlbm5pcyUyMHBsYXllciUyMG1vZGVsfGVufDB8fDB8fHww",
    teamName: "Team C",
    totalEvents: 20,
    eventName: "Event 3",
    sportName: "Tennis",
  },
  {
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1664304756683-676e4d52edd5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGJhc2ViYWxsJTIwcGxheWVyfGVufDB8fDB8fHww",
    teamName: "Team D",
    totalEvents: 20,
    eventName: "Event 3",
    sportName: "Baseball",
  },
];

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
