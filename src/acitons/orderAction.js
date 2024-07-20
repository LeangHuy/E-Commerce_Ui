"use server";
import { orderService } from "@/service/order.service";

export const orderAction = async (proList) => {
  const data = await orderService(proList);
  return data;
};
