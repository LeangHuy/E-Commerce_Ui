"use server";
import {
  countTotalOrderPerDayService,
  orderService,
} from "@/service/order.service";
import { revalidateTag } from "next/cache";

export const orderAction = async (proList) => {
  const data = await orderService(proList);
  revalidateTag("getAllOrders");
  return data;
};

export const countTotalOrderPerDayAction = async () => {
  const data = await countTotalOrderPerDayService();
  return data;
};
