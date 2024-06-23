"use server";

import { loginService, registerService } from "@/service/auth.service";

export const registerAction = async (req) => {
  const res = await registerService(req);
  return res;
};

export const loginAction = async (req) => {
  const res = await loginService(req);
  return res;
};
