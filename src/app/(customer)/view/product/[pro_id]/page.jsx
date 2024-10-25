import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import ProductCard from "@/components/Card/ProductCard";
import Tag from "@/components/Tag/Tag";
import { AddToCart, MyToast } from "@/components/Toast/MyToast";
import { getPhoto } from "@/lib/utils";
import { getCategoryById, getProductById } from "@/service/product.service";
import { getUserData } from "@/service/user.service";
import { Check } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

const page = async ({ params: { pro_id } }) => {
  if (pro_id == "undefined") notFound();
  const product = await getProductById(pro_id);
  const category = await getCategoryById(product?.category?.categoryId)
  const user = await getUserData();

  return (
    <div className="w-[1300px] mx-auto my-10">
      <BreadCrumb proName={product?.productName} />

      <section className="grid-photo h-[500px] w-full grid grid-cols-3 grid-rows-2 gap-3 my-10">
        <Image
          width={1000}
          height={1000}
          alt="pic 1"
          priority
          src={getPhoto(product?.imageProductList[0]?.fileName)}
          className="object-cover w-full h-full col-span-2 row-span-2 rounded-md"
        />
        <Image
          width={1000}
          height={1000}
          alt="pic 1"
          priority
          src={getPhoto(product?.imageProductList[1]?.fileName)}
          className="object-cover w-full h-full col-start-[3/4] row-start-[1/2] rounded-md"
        />
        <Image
          width={1000}
          height={1000}
          alt="pic 1"
          priority
          src={getPhoto(product?.imageProductList[2]?.fileName)}
          className="object-cover w-full h-full  rounded-md"
        />
      </section>
      <section className="grid grid-cols-[1fr_300px] gap-10">
        <div className="flex flex-col gap-6">
          <p className="text-sm text-sky-500">
            Published on {new Date(product?.createAt).toDateString()}
          </p>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-6">
              <h3 className="text-2xl font-bold">{product?.productName}</h3>
              <Tag
                className={`font-bold !rounded-full text-center text-sky-500 ${product?.quality !== 'original' ? "after:content-['%']" : ''
                  }`}
                title={`${product?.quality} `}
              />
            </div>
            {
              product?.warranty?.warrantyDate != 0 &&
              <div className="flex gap-2">
                <span>Warranty : </span>
                <p className="border border-gray-300 px-2 rounded-md font-medium">{product?.warranty?.warrantyDate} {product?.warranty?.warrantyTime}</p>
              </div>

            }
            {product?.discount !== 0 &&
              <div className="flex gap-4">
                <p className="font-semibold">Discount</p>
                <div className="flex  gap-2">
                  <Tag
                    className={
                      "w-16 cursor-pointer bg-sky-400 text-white font-medium text-center"
                    }
                    title={`${product?.discount} %`}
                  />
                </div>
              </div>
            }

            <div className=" text-[18px]">
              {product?.discount == 0 ?
                <div className="flex gap-2">
                  <p className="font-semibold">Price :</p>
                  <div className="flex text-sky-400 font-bold">
                    {product?.unitPrice}$
                  </div>
                </div>
                :
                <div className="">
                  <div className="flex gap-2">
                    <p className="font-semibold">Original price :</p>
                    <div className="flex text-sky-400 font-bold line-through">
                      {product?.unitPrice}$
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <p className="font-semibold">Discount price:</p>
                    <div className="flex text-sky-400 font-bold">
                      {product?.priceAfterDiscount.toFixed(2)}$
                    </div>
                  </div>
                </div>
              }
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-semibold">Description</p>
              <p className="w-[70%] text-slate-600">{product?.productDesc}</p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-semibold">Tags</p>
              <div className="flex  gap-2">
                <Tag
                  title={"#" + product?.category?.categoryName}
                  className={
                    " hover:-translate-y-1 transition-all cursor-pointer hover:bg-sky-400 hover:text-white hover:border-transparent"
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="wrap-card">
          <div className="w-full bg-white shadow-md p-3 rounded-md flex flex-col gap-6">
            <div className="grid grid-cols-[auto_1fr] gap-4">
              <div className="flex flex-col gap-2">
                <p className="font-medium">Chen Chentha</p>
                <p className="text-sm text-slate-600">
                  Owner of this website that you can trust
                </p>
              </div>
            </div>
            <div className="">
              <AddToCart
                user={user}
                data={{ ...product, qty: 1 }}
                className={
                  "bg-primary group border hover:border-transparent w-full"
                }
              />

            </div>
          </div>
        </div>
      </section>
      <section className="my-10">
        <h3 className="text-2xl font-semibold mb-6">Related </h3>
        <ProductCard products={category} />
      </section>
    </div>
  );
};

export default page;
