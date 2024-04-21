import React from "react";
import ContentHolder from "../components/ContentHolder";
import FloodPercentageCard from "../components/FloodPercentageCard";


const DashboardPage = () => {
  return (
    <div className="h-full w-full p-5 overflow-auto">
      <ContentHolder customStyles="flex flex-col justify-items-center">
      <p className="text-base font-semibold">Flood Percentage for</p>
      <div className="w-full flex flex-row flex-wrap gap-5 py-5">
      <FloodPercentageCard day="Today" icon="icon" percentage="80 %" rainFall="85.6" windSpeed="79"/>
        <FloodPercentageCard day="Today" icon="icon" percentage="80 %" rainFall="85.6" windSpeed="79"/>
        <FloodPercentageCard day="Today" icon="icon" percentage="80 %" rainFall="85.6" windSpeed="79"/>
        <FloodPercentageCard day="Today" icon="icon" percentage="80 %" rainFall="85.6" windSpeed="79"/>
        <FloodPercentageCard day="Today" icon="icon" percentage="80 %" rainFall="85.6" windSpeed="79"/>
      </div>
        
      </ContentHolder>
    </div>
  );
};

export default DashboardPage;
