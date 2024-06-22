"use client"
import MyCarousel from "@/components/Carousel/MyCarousel";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import { useState } from "react";
import { categories } from "@/data/categories";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/Card/ProductCard";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isActive, setIsActive] = useState();
  const handleButtonClick = (categoryName) => {
    setIsActive(categoryName);
  };
  return (
    <main>
      <MyCarousel />
      <div className="flex container mt-10 justify-between">
        <div className="font-bold text-[1.5rem]">Popular products</div>
        <div className="flex">
          {categories.map((category, idx) => (
            <Button
              key={idx}
              className={`border-2 border-blue-500 font-medium p-1 px-4 rounded-full ml-4 ${isActive === category.name ? 'bg-blue-500 text-white' : 'bg-color-none text-black'} hover:bg-blue-500`}
              onClick={() => handleButtonClick(category.name)}
            >
              {category.name}
            </Button>
          ))}

        </div>
      </div>
      <div className="container grid grid-cols-4 gap-6 mt-8">
        {Array.from({ length: 4 }).map((itc, idx) => (
          <ProductCard key={idx} />
        ))}
      </div>
    </main>
  );
};

export default page;
