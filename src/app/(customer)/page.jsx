import MyCarousel from "@/components/Carousel/MyCarousel";
import React from "react";
import { categories } from "@/data/categories";
import ProductCard from "@/components/Card/ProductCard";
import CategoryButton from "@/components/Button/CategoryButton";
import { getAllProductService } from "@/service/product.service";
import { mock_data } from "@/data/mock_data";
import { getAllCategories } from "@/service/category.service";
import { ImagesSliderDemo } from "@/components/Slider/ImageSlider";

async function Home() {
  const products = await getAllProductService();
  const categories = await getAllCategories();
  return (
    <main>
      {/* <MyCarousel /> */}
      <ImagesSliderDemo />
      <div className="flex container mt-10 justify-between">
        <div className="font-medium text-[1.5rem]">Popular products</div>
        <CategoryButton categories={["All", ...categories]} />
      </div>
      <div id="product" className="scroll-mt-10">
        <ProductCard products={products} />
      </div>
      {/* <div className="">
        <h1>{getShopInfo?.payload?.shopName}</h1>
      </div> */}
    </main>
  );
}

export default Home;
