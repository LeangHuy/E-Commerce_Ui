"use server";
import {
  assignDeliveryService,
  changeStatusOrder,
  countTotalOrderPerDayService,
  countTotalOrderService,
  orderByQr,
  orderService,
  updateOrderStatusToDelivery,
} from "@/service/order.service";
import { revalidatePath, revalidateTag } from "next/cache";

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

export const assignDeliveryAction = async (orderId, deliveryId) => {
  const data = await assignDeliveryService(orderId, deliveryId);
  revalidateTag("assignDelivery");
  return data;
};

export const orderByQrAction = async (data) => {
  return await orderByQr(data);
};

export const updateOrderStatusToDeliveryAction = async (orderId, status) => {
  const result = await updateOrderStatusToDelivery(orderId, status);
  revalidatePath("/delivery/dashboard");
  return result;
};
