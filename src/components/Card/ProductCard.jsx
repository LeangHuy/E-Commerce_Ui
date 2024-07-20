import { Heart } from "lucide-react";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { getPhoto } from "@/lib/utils";
import { BadgePercent } from "lucide-react";

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
          p.categoryName
            .toLocaleLowerCase()
            .includes(searchParams.toLocaleLowerCase())
        );
  } else {
    filterProducts = products?.filter((p) => p.discount > 0);
  }

  return (
    <main className="w-full grid grid-cols-4 gap-6 my-8 max-[1400px]:grid-cols-3 max-[950px]:grid-cols-2 max-[600px]:grid-cols-1">
      {filterProducts?.map((item, idx) => (
        <div
          key={idx}
          className="grid transition-all grid-rows-[1fr_auto_auto] gap-3"
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
            <Heart
              // onClick={() => setIsActive(idx)}
              className={`absolute top-3 right-3 size-[35px] stroke-red-500 p-2 bg-white  rounded-full stroke-[2] cursor-pointer `}
            />
            {item?.discount > 0 && (
              <p className="absolute top-3 left-3 stroke-red-500 py-1 px-4 text-sm bg-white  rounded-full stroke-[2] flex gap-1 items-center cursor-pointer">
                <span className="text-red-500 font-medium">
                  {item?.discount}
                </span>
                <BadgePercent className="size-[1rem] stroke-red-500" />
              </p>
            )}
          </div>
          <Link href={`/view/product/${item?.productId}`} className="">
            <div className=" text-[18px] text-[#ff540a]">
              {item?.discount == 0 ?
                <span className="text-blue-500 font-bold">{item?.unitPrice}$</span> :
                <div>
                  <span className="line-through text-sm">{item?.unitPrice}$</span>
                  <span className="text-blue-500 font-bold">  {item?.priceAfterDiscount}$</span>
                </div>

              }
            </div>
            <h3 className="font-medium text-xl text-[#1d1d1d]">
              {item?.productName}
            </h3>
            {/* <p className="text-gray-600">{item?.productDesc}</p> */}
          </Link>
          <div className="grid grid-cols-[auto_1fr] gap-4 items-center">
            {/* <Button className=" rounded-lg">Add to Cart</Button> */}
          </div>
        </div>
      ))}
    </main>
  );
};

export default ProductCard;
