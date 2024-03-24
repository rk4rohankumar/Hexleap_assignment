"use client";
import React from "react";
import Card from "./SpotLightCard";
import Slider from "react-slick";
import spotLightData from "@/Data/SpotLigtData";



const SpotLight: React.FC = ({}) => {
  
  const customArrowStyles = {
    width: "50px",
    height: "50px",
    borderRadius: "0%",
    background: "rgba(0, 0, 0, 0.5)",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  };
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
    nextArrow: (
      <div style={customArrowStyles}>
        <i className="fa-thin fa-square-chevron-right"></i>
      </div>
    ),

    prevArrow: (
      <div style={customArrowStyles}>
        <i className="fa-thin fa-square-chevron-left"></i>
      </div>
    ),
  };

  return (
    <div className="container mx-auto px-4  text-black dark:text-white mb-20 py-8 w-10/12 dark:bg-[#071717] rounded-sm  bg-gradient-to-b  dark:from-[#041f1fa3]  dark:to-[#2f0c2fa3]">
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
