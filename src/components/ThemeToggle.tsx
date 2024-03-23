"use client";
import React, { useState } from "react";

const DarkModeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="flex items-center">
      <span className="mr-2">Dark Mode:</span>
      <button
        onClick={toggleDarkMode}
        className={`${
          darkMode ? "bg-gray-900" : "bg-gray-200"
        } text-white font-bold py-2 px-4 rounded`}
      >
        {darkMode ? "On" : "Off"}
      </button>
    </div>
  );
};

export default DarkModeToggle;
