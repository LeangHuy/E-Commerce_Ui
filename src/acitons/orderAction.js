"use server";
import {
  changeStatusOrder,
  countTotalOrderPerDayService,
  countTotalOrderService,
  orderService,
} from "@/service/order.service";
import { revalidateTag } from "next/cache";

export const orderAction = async (proList) => {
  const data = await orderService(proList);
  // revalidateTag("getAllOrders");
  return data;
};

export const countTotalOrderPerDayAction = async () => {
  const data = await countTotalOrderPerDayService();
  return data;
};

export const countTotalOrderAction = async () => {
  const data = await countTotalOrderService();
  return data;
};

export const totalPriceOrderAction = async () => {
  const data = await countTotalOrderService();
  return data;
};

export const changeStatusOrderAction = async (orderId, status) => {
  const data = await changeStatusOrder(orderId, status);
  revalidateTag("getAllOrders");
  return data;
};
