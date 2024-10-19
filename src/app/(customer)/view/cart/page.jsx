import RemoveAllCart from "@/components/Button/RemoveAllCart";
import OrderDetailCard from "@/components/Card/OrderDetailCard";
import { TableData } from "@/components/Table/Table";
import { getUserData } from "@/service/user.service";
import React from "react";

const page = async () => {
  const user = await getUserData();
  return (
    <div className="w-[1330px] mx-auto min-h-[50vh] my-10 grid grid-cols-[1fr_400px] gap-10">
      <div className="product-list flex flex-col gap-6">
        <header className="flex justify-between items-center">
          <h3 className="text-2xl font-semibold">Cart</h3>
          <RemoveAllCart />
        </header>
        <TableData />
      </div>
      <OrderDetailCard user={user} />
    </div>
  );
};

export default page;
