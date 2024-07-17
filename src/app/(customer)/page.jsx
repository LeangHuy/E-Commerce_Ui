import MyCarousel from "@/components/Carousel/MyCarousel";
import React from "react";
import { categories } from "@/data/categories";
import ProductCard from "@/components/Card/ProductCard";
import CategoryButton from "@/components/Button/CategoryButton";
import { getAllProductService } from "@/service/product.service";
import { mock_data } from "@/data/mock_data";
import { getAllCategories } from "@/service/category.service";
import { ImagesSliderDemo } from "@/components/Slider/ImageSlider";
import { getAllSlideActive } from "@/service/slide.service";

async function Home({ searchParams: { q = "All" } }) {
  const products = await getAllProductService();
  const categories = await getAllCategories();
  const getCate = categories?.map((cate) => cate?.categoryName);
  const activeSlides = await getAllSlideActive();

  return (
    <main className="w-[1330px] mx-auto max-[1400px]:w-[90%] ">
      {/* <MyCarousel /> */}
      <ImagesSliderDemo slides={activeSlides} />
      <div className="flex mt-10 justify-between">
        <div className="font-medium text-[1.5rem]">Promotion products</div>
        {/* <CategoryButton categories={["All", ...categories]} /> */}
      </div>
      <div id="popular" className="scroll-mt-10">
        <ProductCard searchParams={q} products={products} isPromotion={true} />
      </div>
      <div className="flex mt-10 justify-between">
        <div className="font-medium text-[1.5rem]">All products</div>
        <CategoryButton
          searchParams={q || "All"}
          categories={["All", ...getCate]}
        />
      </div>

      <div id="product" className="scroll-mt-10">
        <ProductCard
          searchParams={q}
          products={products?.filter((p) => p.discount <= 0)}
          isPromotion={false}
        />
      </div>

      {/* <div className="">
        <h1>{getShopInfo?.payload?.shopName}</h1>
      </div> */}
    </main>
  );
}

export default Home;
