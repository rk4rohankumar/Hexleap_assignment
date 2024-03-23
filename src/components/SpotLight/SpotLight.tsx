"use client";
import React from "react";
import Card from "./SpotLightCard";
import Slider from "react-slick";

interface SpotLightProps {
  darkMode?: boolean;
}

const SpotLight: React.FC<SpotLightProps> = ({}) => {
  const spotLightData = [
    {
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1664297507357-6062ff5b63d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGJhc2ViYWxsJTIwcGxheWVyJTIwbW9kZWx8ZW58MHx8MHx8fDA%3D",
      teamName: "Team A",
      date: "March 25, 2024",
      time: "8:00 PM",
      address: "123 Main St, Cityville",
      button: "Take Flight Collection",
    },
    {
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1674921508460-01caa5771477?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGJhc2ViYWxsJTIwcGxheWVyJTIwbW9kZWx8ZW58MHx8MHx8fDA%3D",
      teamName: "Team B",
      date: "March 26, 2024",
      time: "7:30 PM",
      address: "456 Elm St, Townsville",
      button: "Orange Collection",
    },
    {
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1671586882634-dd6e99491d9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVubmlzJTIwcGxheWVyJTIwbW9kZWx8ZW58MHx8MHx8fDA%3D",
      teamName: "Team C",
      date: "March 27, 2024",
      time: "7:00 PM",
      address: "789 Oak St, Villagetown",
      button: "Take Flight Collection",
    },
    // Add more data as needed
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 bg-slate-100 text-black dark:text-white mb-20 py-8 w-10/12 dark:bg-[#071717] rounded-sm  bg-gradient-to-b  dark:from-[#041f1fa3]  dark:to-[#2f0c2fa3]">
      <div className="mx-auto" style={{ width: "80%" }}>
        <h1 className="text-center mt-10 text-5xl font-bold">
          Collection Spotlight
        </h1>
        <div className="m-8 text-center font-serif">
          <p>
            Discover extraordinary moments with our Spotlight Collection
            metatckets—exclusve access ta premium vents for an nforgetisbie
            experience. Grab yours today!
          </p>
        </div>
      </div>
      <div className="mx-auto" style={{ width: "80%" }}>
        <Slider {...settings}>
          {spotLightData.map((data, index) => (
            <Card key={index} {...data} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SpotLight;
