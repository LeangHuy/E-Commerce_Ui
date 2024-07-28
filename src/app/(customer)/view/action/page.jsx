import { getAllOrders } from "@/service/order.service";
import React from "react";
import ActionCard from "./ActionCard";
import { getUserData } from "@/service/user.service";
import Image from "next/image";
import { getPhoto } from "@/lib/utils";

const ActionPage = async () => {
  const orders = await getAllOrders();
  const currentUser = await getUserData();

  return (
    <div className="w-[1330px] mx-auto my-[6rem]">
      <div className="grid grid-cols-[1fr_400px] gap-[3rem]">
        <div>
          <h3 className="mb-6 text-3xl font-medium">Product orders</h3>
          <div className="flex flex-col gap-6">
            {orders
              .filter((o) => o.orderDetail?.length > 0)
              ?.map((order) => (
                <ActionCard order={order} key={order?.orderId} />
              ))}
          </div>
        </div>
        <div className="shadow-sm h-fit align-top hover:shadow-md duration-250 sticky top-6 overflow-hidden rounded-lg grid grid-rows-[12rem_1fr]">
          <div className=" relative bg-[url('https://images.unsplash.com/photo-1436335231969-f3271f28670d?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover">
            <Image
              width={1000}
              height={1000}
              alt="product img"
              src={getPhoto(currentUser?.payload?.user?.profile)}
              className="size-[8rem] absolute left-1/2 bottom-0 object-cover p-2 bg-white shadow-sm -translate-x-1/2 translate-y-1/2 rounded-full"
            />
          </div>
          <div className="pt-[8rem] pb-10 px-10 flex flex-col gap-6">
            <section>
              <p className="text-mid text-gray-400">Name</p>
              <p className="text-normal font-medium flex gap-2">
                <span>{currentUser?.payload?.user?.firstName}</span>
                <span>{currentUser?.payload?.user?.lastName}</span>
              </p>
            </section>
            <section>
              <p className="text-mid text-gray-400">Email</p>
              <p className="text-normal font-medium">
                {currentUser?.payload?.user?.email}
              </p>
            </section>
            <section>
              <p className="text-mid text-gray-400">Phone Number</p>
              <p className="text-normal font-medium">0987654321</p>
            </section>
            <section>
              <p className="text-mid text-gray-400">Address</p>
              <p className="text-normal font-medium">
                {currentUser?.payload?.user?.address}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionPage;
