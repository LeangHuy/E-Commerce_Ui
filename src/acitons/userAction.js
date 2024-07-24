"use server";

import { updateUserInfoService } from "@/service/user.service";

export const updateUserInfoAction = async (data) => {
  const res = await updateUserInfoService(data);
  return res;
};
