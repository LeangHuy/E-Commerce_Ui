import React from "react";
import Header from "./components/Header";
import { redirect } from "next/navigation";
import { getUserData } from "@/service/user.service";
import { countTotalOrderPerDayService, countTotalOrderService } from "@/service/order.service";
import CardOverview from "./CardOverview";
import { ShoppingBag } from "lucide-react";
import { TotalOrder } from "./components/TotalOrderCard";

const AdminDashboardPage = async ({ searchParams: { tab = "Overview" } }) => {
  const userData = await getUserData();
  if (userData.payload.role === "USER") {
    redirect("/");
  }
  const countTotalOrderPerDay = await countTotalOrderPerDayService();
  const countAllDayOrder = await countTotalOrderService();

  return (
    <div className="w-full">
      <Header tab={tab} />
      <div className="content p-5 bg-gray-100">
        <div className="  rounded-2xl p-10">
          <div className="card-overview grid grid-cols-4 gap-6">
            {/* <CardOverview
              data={{
                icon: (
                  <ShoppingBag className="stroke-[1.3] stroke-gray-400 size-[1rem]" />
                ),
                title: "Total",
                mainContent: countTotalOrderPerDay,
                des: "Orders today",
              }}
            /> */}
            <TotalOrder orderCount={countTotalOrderPerDay} data={{ title: "Orders", description: "Showing total orders for the today.", subtitle: "Total order today" }} />
            <TotalOrder orderCount={countAllDayOrder} data={{ title: "Orders", description: "Showing total orders for the everyday.", subtitle: "Total order everyday" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
