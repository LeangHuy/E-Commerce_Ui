import MyCarousel from "@/components/Carousel/MyCarousel";
import React from "react";
import { categories } from "@/data/categories";
import ProductCard from "@/components/Card/ProductCard";
import CategoryButton from "@/components/Button/CategoryButton";
import { getAllProductService } from "@/service/product.service";

async function Home() {
  const products = await getAllProductService();
  console.log("all procducts ", products);
  return (
    <main>
      <MyCarousel />
      <div className="flex container mt-10 justify-between">
        <div className="font-bold text-[1.5rem]">Popular products</div>
        <CategoryButton categories={categories} />
      </div>
      <div>
        <ProductCard products={products} />
      </div>
      {/* <div className="">
        <h1>{getShopInfo?.payload?.shopName}</h1>
      </div> */}
    </main>
  );
}

export default Home;
