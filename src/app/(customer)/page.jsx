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
import MyPagination from "../(admin)/admin/dashboard/components/MyPagination";
import { postBookmark } from "@/service/bookmark";

async function Home({ searchParams: { q = "All" } }) {
  const products = await getAllProductService();

  const categories = await getAllCategories();
  const getCate = categories?.map((cate) => cate?.categoryName);
  const activeSlides = await getAllSlideActive();

  return (
    <main className="w-[1330px] mx-auto max-[1400px]:w-[90%] ">
      {/* <MyCarousel /> */}
      {activeSlides?.length >= 1 && (
        <ImagesSliderDemo slides={activeSlides.map((slide) => slide?.image)} />
      )}
      <div className="flex mt-10 justify-between">
        <div className="font-medium text-[1.5rem]">Promotion products</div>
        {/* <CategoryButton categories={["All", ...categories]} /> */}
      </div>
      <div id="popular" className="scroll-mt-10">
        <ProductCard searchParams={q} products={products} isPromotion={true} />
      </div>
      <div id="cate" className="flex mt-10 scroll-mt-10 justify-between">
        <div className="font-medium text-[1.5rem]">All products</div>
        <CategoryButton
          searchParams={q || "All"}
          categories={["All", ...getCate]}
        />
      </div>

      <div id="product" className="scroll-mt-10">
        <ProductCard
          searchParams={q}
          products={products?.filter((p) => p)}
          isPromotion={false}
        />
      </div>
      <div className="flex justify-center m-5 text-black">
        <MyPagination products={products} />
      </div>
    </main>
  );
}

export default Home;
