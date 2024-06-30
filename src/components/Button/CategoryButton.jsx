"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";

const CategoryButton = ({ categories }) => {
  const [isActive, setIsActive] = useState();

  return (
    <div className="flex">
      {categories.map((category, idx) => (
        <Button
          key={idx}
          className={`border-2 hover:text-white border-blue-500 font-medium p-1 px-4 rounded-full ml-4 ${
            isActive === category.name
              ? "bg-blue-500 text-white"
              : "bg-color-none text-black"
          } hover:bg-blue-500`}
          onClick={() => setIsActive(category.name)}
        >
          {category.name}
        </Button>
      ))}
    </div>
  );
};

export default CategoryButton;
