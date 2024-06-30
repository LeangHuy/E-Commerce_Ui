"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const CategoryButton = ({ categories }) => {
  const [isActive, setIsActive] = useState("All");

  return (
    <div className="flex">
      {categories.map((category, idx) => (
        <Link
          href={`?q=${category?.categoryName}`}
          scroll={false}
          key={idx}
          className={`border-2 hover:text-white border-blue-500 font-medium p-1 px-4 rounded-full ml-4 ${
            isActive === category.categoryName
              ? "bg-blue-500 text-white"
              : "bg-color-none text-black"
          } hover:bg-blue-500`}
          onClick={() => setIsActive(category.categoryName)}
        >
          {category.categoryName}
        </Link>
      ))}
    </div>
  );
};

export default CategoryButton;
