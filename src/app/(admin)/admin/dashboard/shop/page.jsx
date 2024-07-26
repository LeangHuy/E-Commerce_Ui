import React from "react";
import Header from "../components/Header";
import ShopInfo from "./ShopInfo";
import { getShopInfoService } from "@/service/shop.service";

async function ShopPage({ searchParams: { tab = "Shop" } }) {
  const shopData = await getShopInfoService();
  return (
    <div className="w-full h-screen overflow-y-hidden">
      <Header tab={tab} />
      <div className="content p-5 bg-gray-100 w-full h-full">
        <div className=" bg-white rounded-2xl p-10 w-full h-full">
          <ShopInfo shopData={shopData} />
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
