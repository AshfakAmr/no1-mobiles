import React from "react";

const Heading = ({ title, subtitle }) => {
  return (
    <div>
      <div className="text-center space-y-2 mb-10 max-w-[600px] mx-auto">
        <h1 className="text-3xl lg:text-4xl font-bold">{title}</h1>
        <p className="text-xs text-gray-400">{subtitle}</p>
      </div>
    </div>
  );
};

export default Heading;
