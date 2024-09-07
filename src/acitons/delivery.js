"use server";

import { postDelivery } from "@/service/delivery.service";

export const postDeliveryAction = async (data) => {
  return await postDelivery(data);
};
