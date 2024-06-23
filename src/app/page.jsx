"use client"
import MyCarousel from "@/components/Carousel/MyCarousel";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import { useState, useEffect } from "react";
import { categories } from "@/data/categories";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/Card/ProductCard";
import { getShopInfoService } from "@/service/shop.service";
import { getAllProductService } from "@/service/product.service";


function Home() {

  const [isActive, setIsActive] = useState();

  const [data, setData] = useState();
  const handleButtonClick = (categoryName) => {
    setIsActive(categoryName);
  };

  useEffect(() => {
    const data = async () => {
      const getAllProduct = await getAllProductService();
      setData(getAllProduct);
    }
    data();
  }, [])

  console.log("all product : ", data)
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
      <div >
        <ProductCard products={data?.payload} />
      </div>
      {/* <div className="">
        <h1>{getShopInfo?.payload?.shopName}</h1>
      </div> */}
    </main>
  );
};

export default Home;
