import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import ProductCard from "@/components/Card/ProductCard";
import Tag from "@/components/Tag/Tag";
import { AddToCart, MyToast } from "@/components/Toast/MyToast";
import { Button } from "@/components/ui/button";
import { specs } from "@/data/spec";
import { tags } from "@/data/tags";
import { Check } from "lucide-react";
import { DollarSign } from "lucide-react";
import Image from "next/image";
import React from "react";

const page = ({ params: { pro_id } }) => {

  return (
    <div className="w-[1300px] mx-auto my-10">
      <BreadCrumb />
      <section className="grid-photo h-[500px] w-full grid grid-cols-3 grid-rows-2 gap-3 my-10">
        <Image
          width={1000}
          height={1000}
          alt="pic 1"
          src={
            "https://images.unsplash.com/photo-1605899435973-ca2d1a8861cf?q=80&w=2625&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          className="object-cover w-full h-full col-span-2 row-span-2 rounded-md"
        />
        <Image
          width={1000}
          height={1000}
          alt="pic 1"
          src={
            "https://images.unsplash.com/photo-1571716846252-df1324ce17bb?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          className="object-cover w-full h-full col-start-[3/4] row-start-[1/2] rounded-md"
        />
        <Image
          width={1000}
          height={1000}
          alt="pic 1"
          src={
            "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=3047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          className="object-cover w-full h-full  rounded-md"
        />
      </section>
      <section className="grid grid-cols-[1fr_300px] gap-10">
        <div className="flex flex-col gap-6">
          <p className="text-sm text-sky-500">
            Published on {new Date().toDateString()}
          </p>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-6">
              <h3 className="text-2xl font-bold">Xbox 2024</h3>
              <Tag
                className={" !rounded-full text-sky-500"}
                title={"Original"}
              />
            </div>
            <p className="flex gap-2 items-center text-xl text-red-500 font-medium">
              <DollarSign className="size-[20px]" />
              <span>200</span>
            </p>
            <div className="flex flex-col gap-4">
              <p className="font-semibold">Description</p>
              <p className="w-[70%] text-slate-600">
                The Xbox 2024 is a cutting-edge gaming console emphasizing power
                efficiency with a minimum consumption of 30 watts. It features a
                high-performance processor, advanced graphics, extensive
                backward compatibility, and seamless integration with Xbox Game
                Pass, delivering an exceptional and eco-friendly gaming
                experience.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Spec</p>
              {specs.map((data, idx) => (
                <p key={idx} className="flex items-center gap-3">
                  <span className="size-[6px] bg-black rounded-full"></span>
                  <span className="flex gap-4 items-center">
                    <span className="font-medium">{data.spec_title}</span>
                    <span className="">{data.spec}</span>
                  </span>
                </p>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-semibold">Tags</p>
              <div className="flex  gap-2">
                {tags.map((tag, idx) => (
                  <Tag
                    key={idx}
                    title={"#" + tag}
                    className={
                      " hover:-translate-y-1 transition-all cursor-pointer hover:bg-sky-400 hover:text-white hover:border-transparent"
                    }
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="wrap-card">
          <div className="w-full bg-white shadow-md p-3 rounded-md flex flex-col gap-6">
            <div className="grid grid-cols-[auto_1fr] gap-4">
              <div className="relative rounded-full size-[60px]">
                <Image
                  src={
                    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  width={1000}
                  height={1000}
                  alt="pf seller"
                  className=" object-cover object-top w-full h-full rounded-full"
                />
                <Check className=" size-[20px] absolute bottom-0 right-0 bg-sky-500 stroke-white p-1 rounded-full" />
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-medium">Leang Huy</p>
                <p className="text-sm text-slate-600">
                  Owner of this website that you can trust
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[auto_1fr] gap-3">
              <AddToCart
                className={
                  "bg-transparent group border hover:border-transparent "
                }
              />

              <Button className={" w-full"}>Buy Now</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="my-10">
        <h3 className="text-2xl font-semibold mb-6">Related </h3>
        <div className="grid grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((itc, idx) => (
            <ProductCard key={idx} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default page;