import React from "react";
import Header from "../components/Header";

const ShopPage = ({ searchParams: { tab = "Shop" } }) => {
  return (
    <div className="w-full">
      <Header tab={tab} />
      <div className="content p-5 bg-gray-100">
        <div className=" bg-white rounded-2xl p-10">Shop</div>
      </div>
    </div>
  );
};

export default ShopPage;
