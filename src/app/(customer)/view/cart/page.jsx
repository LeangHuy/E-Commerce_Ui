import RemoveAllCart from "@/components/Button/RemoveAllCart";
import OrderDetailCard from "@/components/Card/OrderDetailCard";
import { TableData } from "@/components/Table/Table";
import React from "react";

const page = () => {
  return (
    <div className="w-[1330px] mx-auto my-10 grid grid-cols-[1fr_400px] gap-10">
      <div className="product-list flex flex-col gap-6">
        <header className="flex justify-between items-center">
          <h3 className="text-2xl font-semibold">Cart</h3>
          <RemoveAllCart />
        </header>
        <TableData />
      </div>
      <OrderDetailCard />
    </div>
  );
};

export default page;
