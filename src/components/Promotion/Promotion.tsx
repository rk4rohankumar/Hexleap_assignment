import React from "react";
import Card from "./PromotionCard";

const App = () => {
  return (
    <div className="flex justify-center items-center m-auto  h-60 ">
      <Card
        title="Advertisement Title"
        imageUrl="https://via.placeholder.com/300"
        description="This is an example Advertisement Card for the card component. You can customize it as needed.This is an example "
      />
    </div>
  );
};

export default App;
