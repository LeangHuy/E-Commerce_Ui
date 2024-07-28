import { getAllOrdersAdmin } from "@/service/order.service";
import Header from "../components/Header";
import ActionCard from "./ActionCard";

const OrderPage = async ({ searchParams: { tab = "Overview" } }) => {
  const orders = await getAllOrdersAdmin();
  console.log(orders);
  return (
    <div className="w-full">
      <Header tab={tab} />
      <div className="content p-5 bg-gray-100">
        <div className="bg-white  rounded-2xl p-5">
          <div className="card-overview flex flex-col gap-6">
            {orders
              .filter((o) => o.orderDetail?.length > 0)
              ?.map((order) => (
                <ActionCard order={order} key={order?.orderId} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
