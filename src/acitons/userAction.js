"user server";

import { updateShopInfoService } from "@/service/shop.service";

export const updateUserInfoAction = async (date) => {
  const res = updateShopInfoService(date);
  return res;
};
