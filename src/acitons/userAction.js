"use server";

import { getUserData, updateUserInfoService } from "@/service/user.service";

export const updateUserInfoAction = async (data) => {
  const res = await updateUserInfoService(data);
  return res;
};

export const getUserAction = async () => {
  return await getUserData();
};
