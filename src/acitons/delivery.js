"use server";

import { assignDel, postDelivery } from "@/service/delivery.service";
import { revalidatePath } from "next/cache";

export const postDeliveryAction = async (data) => {
  const result = await postDelivery(data);
  revalidatePath("/admin/dashboard/deliveries");
  return result;
};

export const assignDelAction = async (orderId, userId) => {
  const result = await assignDel(orderId, userId);
  revalidatePath("/admin/dashboard/order");
  return result;
};


