import React from "react";
import TimelineData from "../utils/TimelineData";
const TimeLine = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 items-center">
      <h2 className="text-3xl font-bold text-center mb-10">My Timeline</h2>
      <div className="relative border-l-4 border-blue-500 pl-6 items-center">
        {TimelineData.map((item, index) => (
          <div key={index} className="mb-10">
            <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2.5 mt-1.5"></div>
            <p className="text-sm text-gray-400">{item.year}</p>
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TimeLine;
