"use server";

import {
  loginService,
  registerService,
  verfiyService,
} from "@/service/auth.service";

export const registerAction = async (req) => {
  const res = await registerService(req);
  return res;
};

export const verfiyAction = async (otpCode) => {
  const res = await verfiyService(otpCode);
  console.log(res)
  return res;
};

export const loginAction = async (req) => {
  const res = await loginService(req);
  return res;
};
