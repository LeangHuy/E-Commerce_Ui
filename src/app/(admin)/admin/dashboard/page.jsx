import React from "react";
import Header from "./components/Header";
import { redirect } from "next/navigation";
import { getUserData } from "@/service/user.service";
import { countTotalOrderPerDayService, countTotalOrderService, totalPriceOrderService } from "@/service/order.service";
import { TotalOrder } from "./components/TotalOrderCard";
import { allProductInShop, allProductInStock, allProductOutStock } from "@/service/product.service";

const AdminDashboardPage = async ({ searchParams: { tab = "Overview" } }) => {
  const userData = await getUserData();
  if (userData.payload.role === "USER") {
    redirect("/");
  }
  const countTotalOrderPerDay = await countTotalOrderPerDayService();
  const countAllDayOrder = await countTotalOrderService();
  const totalPriceAllOrder = await totalPriceOrderService();
  const allProduct = await allProductInShop();
  const allProductHaveStock = await allProductInStock();
  const allProductNoStock = await allProductOutStock();

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
            <TotalOrder orderCount={countTotalOrderPerDay} data={{ title: "Orders", description: "Showing total orders for the today.", subtitle: "Total order today", color: "1" }} />
            <TotalOrder orderCount={countAllDayOrder} data={{ title: "Orders", description: "Showing total orders for the everyday.", subtitle: "Total order everyday", color: "2" }} />
            <TotalOrder orderCount={totalPriceAllOrder} data={{ title: "$", description: "Showing total price for all orders.", subtitle: "Total price", color: "2" }} />
            <TotalOrder orderCount={allProduct} data={{ title: "products", description: "Showing total products in shop.", subtitle: "Total products", color: "5" }} />
            <TotalOrder orderCount={allProductHaveStock} data={{ title: "products", description: "Showing total products in stock.", subtitle: "Total products in stock", color: "5" }} />
            <TotalOrder orderCount={allProductNoStock} data={{ title: "products", description: "Showing total products out stock.", subtitle: "Total products out stock", color: "10" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
