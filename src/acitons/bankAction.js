"use server";
import {
  createBank,
  deleteBankById,
  getBankById,
} from "@/service/bank.service";
import { revalidatePath, revalidateTag } from "next/cache";

export const createBankAction = async (data) => {
  const res = await createBank(data);
  revalidateTag("getAllBank");
  return res;
};

export const getBankByIdAction = async (bankId) => {
  return await getBankById(bankId);
};
export const deleteBankAction = async (bankId) => {
  const result = await deleteBankById(bankId);
  revalidateTag("getAllBank");
  return result;
};