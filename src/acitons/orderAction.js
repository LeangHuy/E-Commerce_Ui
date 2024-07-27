"use server";
import {
  countTotalOrderPerDayService,
  orderService,
} from "@/service/order.service";

export const orderAction = async (proList) => {
  const data = await orderService(proList);
  return data;
};

export const countTotalOrderPerDayAction = async () => {
  const data = await countTotalOrderPerDayService();
  return data;
};
