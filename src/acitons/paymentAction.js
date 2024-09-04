"use server";

import { getAllBanks } from "@/service/bank.service";

export const getPaymentMethodAction = async () => {
  return await getAllBanks();
};
