"user server";

import { updateShopInfoService } from "@/service/shop.service";
import { date } from "zod";

export const updateUserInfoAction = async (date) => {
  const res = updateShopInfoService(date);
  return res;
};
