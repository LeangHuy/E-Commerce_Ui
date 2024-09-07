import React from "react";

const CardOverview = ({ data: { icon, title, mainContent, des } }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-3 flex flex-col gap-2 justify-center">
      <div className="flex items-center gap-2">
        <div>{icon}</div>
        <p className="text-sm text-gray-400">{title}</p>
      </div>
      <div>
        <p className="font-semibold text-2xl">{mainContent}</p>
      </div>
      <div>
        <p className="text-sm text-gray-400">{des}</p>
      </div>
    </div>
  );
};

export default CardOverview;
