import MyCarousel from "@/components/Carousel/MyCarousel";
import React from "react";
import { categories } from "@/data/categories";
import ProductCard from "@/components/Card/ProductCard";
import CategoryButton from "@/components/Button/CategoryButton";
import {
  getAllProductActiveService,
  getAllProductService,
} from "@/service/product.service";
import { mock_data } from "@/data/mock_data";
import { getAllCategories } from "@/service/category.service";
import { ImagesSliderDemo } from "@/components/Slider/ImageSlider";
import { getAllSlideActive } from "@/service/slide.service";
import MyPagination from "../(admin)/admin/dashboard/components/MyPagination";
import { getBookmarks, postBookmark } from "@/service/bookmark";
import CustomerProductComponent from "./_component/CustomerProductComponent";
import { authOption } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

async function Home({ searchParams: { q = "All" } }) {
  const products = await getAllProductActiveService();
  const categories = await getAllCategories();
  const getCate = categories?.map((cate) => cate?.categoryName);
  const activeSlides = await getAllSlideActive();
  const session = await getServerSession(authOption);
  let bookmarkData;
  if (session?.user.payload.token) {
    bookmarkData = await getBookmarks();
  }

  return (
    <main className="w-[1330px] mx-auto max-[1400px]:w-[90%] ">
      {/* <MyCarousel /> */}
      {activeSlides?.length >= 1 && (
        <ImagesSliderDemo slides={activeSlides.map((slide) => slide?.image)} />
      )}
      <div className="flex mt-10 justify-between">
        <div className="font-medium text-[1.5rem]">Promotion products</div>
      </div>
      <div id="popular" className="scroll-mt-10">
        <ProductCard
          session={session}
          bookmarkData={bookmarkData}
          searchParams={q}
          products={products}
          isPromotion={true}
        />
      </div>
      <div id="cate" className="flex mt-10 scroll-mt-10 justify-between">
        <div className="font-medium text-[1.5rem]">All products</div>
        <CategoryButton
          searchParams={q || "All"}
          categories={["All", ...getCate]}
        />
      </div>
      <CustomerProductComponent session={session} products={products} q={q} />
    </main>
  );
}

export default Home;
