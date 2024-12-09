import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { carousels } from "@/data/carousels";
import ProductCard from "../Card/ProductCard";
import { Button } from "../ui/button";
import { Heart } from "lucide-react";
import { Suspense } from "react";
import Loading from "@/app/loading";
export default function MyCarousel() {
  return (
    <div className="container">
      <div className=" flex justify-between mt-3 w-full h-[25rem] gap-3 ">
        <div className="w-[70%]">
          <Carousel className="-mt-1">
            <CarouselContent>
              {carousels.map((slide, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="">
                      <CardContent className="w-full flex aspect-square items-center justify-center p-0 h-[25rem] ">
                        <Image
                          width={1000}
                          height={1000}
                          alt="pic 1"
                          src={slide.image}
                          className="object-cover w-full h-full  rounded-md"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="ml-14" />
            <CarouselNext className="mr-14" />
          </Carousel>
        </div>
        <div className="p-3 bg-white shadow-md rounded-xl grid grid-rows-[1fr_auto_auto] gap-3">
          <div className="h-[15rem] relative">
            <Image
              width={1000}
              height={1000}
              alt="pic 1"
              src={
                "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=3047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              className="object-cover w-full h-full  rounded-md"
            />
            <Heart className="absolute top-3 right-3 size-[35px] p-2 stroke-red-500 bg-white rounded-full stroke-[1.5] cursor-pointer" />
          </div>
          <div>
            <h3 className="font-bold text-xl">Xbox 2024</h3>
            <p className="text-gray-600">
              It is the new model of xbox with fast and scalable
            </p>
          </div>
          <div className="grid grid-cols-[auto_1fr] gap-4 items-center">
            <p className="font-semibold text-[18px]">$ 199.99</p>
            <Button className=" rounded-lg">Add to Cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
