import React from "react";
import Header from "../components/Header";
import ShopInfo from "./ShopInfo";
import { getShopInfoService } from "@/service/shop.service";

async function ShopPage({ searchParams: { tab = "Shop" } }) {
  const shopData = await getShopInfoService();
  return (
    <div className="w-full ">
      <Header tab={tab} />
      <div className="conten p-5 bg-gray-100 w-full min-h-screen">
        <div className=" bg-white rounded-2xl  w-full min-h-full">
          <ShopInfo shopData={shopData} />
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
