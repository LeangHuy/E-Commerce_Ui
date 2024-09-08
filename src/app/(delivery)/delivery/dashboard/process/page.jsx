import React from "react";
import { redirect } from "next/navigation";
import { getUserData } from "@/service/user.service";

import { getCurrentDeli } from "@/service/delivery.service";
import ActionCard from "@/app/(admin)/admin/dashboard/order/ActionCard";
import Header from "../components/Header";

const AdminDashboardPage = async ({ searchParams: { tab = "Overview" } }) => {
  const userData = await getUserData();
  if (userData?.payload?.role === "USER" || userData?.payload == null) {
    redirect("/");
  }
  const allDeli = await getCurrentDeli(userData?.payload?.user?.userId);
  console.log(allDeli);
  return (
    <div className="w-full">
      <Header tab={tab} />
      <div className="content p-5 bg-gray-100">
        <div className="  rounded-2xl bg-white p-10">
          <div className="card-overview grid grid-cols-1  gap-6">
            {Object.entries(
              allDeli?.payload
                .filter(
                  (o) =>
                    o?.orderResponse.orderDetail?.length > 0 &&
                    o?.orderResponse?.status == "DELIVERY"
                )
                .reduce((acc, order) => {
                  const date = new Date(
                    order.orderResponse.orderDate
                  ).toLocaleDateString();
                  if (!acc[date]) {
                    acc[date] = [];
                  }
                  acc[date].push(order);
                  return acc;
                }, {})
            )
              .sort(([dateA], [dateB]) => new Date(dateB) - new Date(dateA)) // Sort dates in descending order
              .map(([date, groupedOrders]) => (
                <div key={date} className="mb-6">
                  <h1 className="text-2xl font-bold mb-4">Orders on {date}</h1>
                  <div className="card-overview flex flex-col gap-6">
                    {groupedOrders.map((order) => (
                      <ActionCard
                        useFor="delivery"
                        deliveries={allDeli?.payload}
                        order={order}
                        key={order?.orderResponse?.orderId}
                      />
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
