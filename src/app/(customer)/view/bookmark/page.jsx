import { getPhoto } from "@/lib/utils";
import { BadgePercent } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function BookmarkPage() {
  const bookmarkData = await getBookmarks();
  return (
    <div className="w-[1330px] mx-auto min-h-[50vh]  my-10  gap-10">
      <div className="font-semibold text-[1.6rem]">Bookmarks</div>
      {bookmarkData.title ? (
        <div className="flex justify-center items-center h-full font-semibold text-[1.6rem]">
          You don't have any bookmark at the moment
        </div>
      ) : (
        <main className="w-full grid grid-cols-4 gap-6 my-8 max-[1400px]:grid-cols-3 max-[950px]:grid-cols-2 max-[600px]:grid-cols-1">
          {bookmarkData?.payload.bookMarkLists.map((item, idx) => (
            <div
              key={idx}
              className="grid transition-all grid-rows-[1fr_auto_auto] gap-3 p-2 bg-gray-300 bg-opacity-20 rounded-xl"
            >
              <div className="h-[20rem] relative">
                <Link href={`/view/product/${item?.product.productId}`}>
                  <Image
                    width={1000}
                    height={1000}
                    alt="pic 1"
                    src={getPhoto(
                      item &&
                      item?.product.imageProductList &&
                      item?.product.imageProductList[0]?.fileName
                    )}
                    className="object-cover w-full h-full  rounded-xl"
                  />
                </Link>
                <div
                  className={`absolute top-3 right-3 size-[35px] stroke-red-500 p-2 bg-white  rounded-full stroke-[2] cursor-pointer flex items-center justify-center `}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="red"
                    stroke="white"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-heart"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </div>

                {item?.product?.discount > 0 && (
                  <p className="absolute top-3 left-3 stroke-red-500 py-1 px-4 text-sm bg-white  rounded-full stroke-[2] flex gap-1 items-center cursor-pointer">
                    <span className="text-red-500 font-medium">
                      {item?.product?.discount}
                    </span>
                    <BadgePercent className="size-[1rem] stroke-red-500" />
                  </p>
                )}
              </div>
              <section className="flex-grow border-t border-primary opacity-20"></section>
              <Link
                href={`/view/product/${item?.product.productId}`}
                className=""
              >
                <h3 className="font-medium text-xl text-[#1d1d1d] line-clamp-1">
                  {item?.product.productName}
                </h3>
                <p className="line-clamp-2 text-sm mb-3">
                  {item?.product?.productDesc}
                </p>
                <div className=" text-[18px flex justify-end">
                  {item?.product?.discount == 0 ? (
                    <span className="text-white font-medium bg-sky-300 py-0 px-2 rounded-md">
                      {item?.product?.unitPrice}$
                    </span>
                  ) : (
                    <div className="flex gap-2 items-center">
                      <div className="line-through text-sm text-red-500">
                        {item?.product?.unitPrice}$
                      </div>
                      <div className="text-white font-medium bg-sky-300 py-0 px-2 rounded-md">
                        {item?.product?.priceAfterDiscount}$
                      </div>
                    </div>
                  )}
                </div>
              </Link>
            </div>
          ))}
        </main>
      )}
    </div>
  );
}

export default BookmarkPage;
