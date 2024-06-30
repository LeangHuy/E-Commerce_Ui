import MyCarousel from "@/components/Carousel/MyCarousel";
import React from "react";
import { categories } from "@/data/categories";
import ProductCard from "@/components/Card/ProductCard";
import CategoryButton from "@/components/Button/CategoryButton";
import { getAllProductService } from "@/service/product.service";
import { mock_data } from "@/data/mock_data";
import { getAllCategories } from "@/service/category.service";

async function Home() {
  const products = await getAllProductService();
  const categories = await getAllCategories();
  console.log(categories);
  return (
    <main>
      <MyCarousel />
      <div className="flex container mt-10 justify-between">
        <div className="font-medium text-[1.5rem]">Popular products</div>
        <CategoryButton
          categories={[
            {
              //   categoryId: "0c9849d4-5e06-4923-ae4a-0df141bb298c",
              categoryName: "All",
            },
            ...categories,
          ]}
        />
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
