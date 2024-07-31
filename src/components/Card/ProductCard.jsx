import { Heart } from "lucide-react";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { getPhoto } from "@/lib/utils";
import { BadgePercent } from "lucide-react";
import { postBookmark } from "@/service/bookmark";
import AddToBookmark from "../Button/AddToBookmark";
import Tag from "../Tag/Tag";

const ProductCard = ({
  products = [{ categoryName: "" }],
  searchParams = "All",
  isPromotion = false,
}) => {
  let filterProducts;
  if (!isPromotion) {
    filterProducts =
      searchParams == "All" || undefined
        ? products
        : products.filter((p) =>
          p?.category?.categoryName
            .toLocaleLowerCase()
            .includes(searchParams?.toLocaleLowerCase())
        );
  } else {
    filterProducts = products?.filter((p) => p.discount > 5);
  }


  console.log('filter data in product card : ',filterProducts)

  return (
    <main className="w-full grid grid-cols-4 gap-6 my-8 max-[1400px]:grid-cols-3 max-[950px]:grid-cols-2 max-[600px]:grid-cols-1">
      {filterProducts?.map((item, idx) => (
        <div
          key={idx}
          className="grid transition-all grid-rows-[1fr_auto_auto] gap-3 p-2 bg-gray-300 bg-opacity-20 rounded-xl"
        >
          <div className="h-[20rem] relative">
            <Link href={`/view/product/${item?.productId}`}>
              <Image
                width={1000}
                height={1000}
                alt="pic 1"
                src={getPhoto(
                  item &&
                  item?.imageProductList &&
                  item?.imageProductList[0]?.fileName
                )}
                className="object-cover w-full h-full  rounded-xl"
              />
            </Link>
            <AddToBookmark item={item} />
            {item?.discount > 0 && (
              <p className="absolute top-3 left-3 stroke-red-500 py-1 px-4 text-sm bg-white  rounded-full stroke-[2] flex gap-1 items-center cursor-pointer">
                <span className="text-red-500 font-medium">
                  {item?.discount}
                </span>
                <BadgePercent className="size-[1rem] stroke-red-500" />
              </p>
            )}
          </div>

          <section className="flex-grow border-t border-primary opacity-20"></section>
          <Link href={`/view/product/${item?.productId}`} className="">
            <h3 className="font-medium text-xl text-[#1d1d1d] line-clamp-1">
              {item?.productName}
            </h3>
            <p className="line-clamp-2 text-sm mb-3">{item?.productDesc}</p>
            <div className=" text-[18px flex justify-end">
              {item?.discount == 0 ? (
                <span className="text-white font-medium bg-sky-300 py-0 px-2 rounded-md">
                  {item?.unitPrice}$
                </span>
              ) : (
                <div className="flex gap-2 items-center">
                  <div className="line-through text-sm text-red-500">
                    {item?.unitPrice}$
                  </div>
                  <div className="text-white font-medium bg-sky-300 py-0 px-2 rounded-md">
                    {parseFloat(item?.priceAfterDiscount).toFixed(2)}$
                  </div>
                </div>
              )}
            </div>
          </Link>
        </div>
      ))}
    </main>
  );
};

export default ProductCard;
