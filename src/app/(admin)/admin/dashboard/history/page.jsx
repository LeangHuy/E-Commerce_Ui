import { getAllOrdersAdmin, getOrderHistory } from "@/service/order.service";
import Header from "../components/Header";
import ActionCard from "./ActionCard";

const OrderPage = async ({ searchParams: { tab = "Overview" } }) => {
  const orders = await getOrderHistory("/admin");
  return (
    <div className="w-full">
      <Header tab={tab} />
      <div className="content p-5 bg-gray-100">
        <div className="bg-white rounded-2xl p-5">
          {Object.entries(
            orders
              .filter((o) => o?.orderResponse.orderDetail?.length > 0)
              .reduce((acc, order) => {
                const date = new Date(order.orderResponse.orderDate).toLocaleDateString();
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
                    <ActionCard order={order} key={order?.orderResponse?.orderId} />
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
