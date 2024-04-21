import React from "react";

const FloodPrecentageCard = ({ day, icon, percentage, rainFall, windSpeed }) => {
  return (
    <div className="bg-amber-200 rounded-lg min-w-40 w-max h-max flex-col justify-around">
      <div className="flex flex-row justify-around ">
        <div className="font-semibold">{day}</div>
        <div>{icon}</div>
      </div>
      <div className="flex flex-row justify-around ">
        <p className="text-5xl font-semibold text-red-700 my-5">{percentage}</p>
      </div>
      <div className="flex flex-col justify-around px-2 pb-4">
        <p className="text-sm">Rain Fall (mm) :{rainFall}</p>
        <p className="text-sm">Wind Speed(mph):{windSpeed}</p>
      </div>
    </div>
  );
};

export default FloodPrecentageCard;
