"use server";
import {
  createBank,
  deleteBankById,
  getBankById,
  updateBank,
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

export const updateBankAction = async (data, bankId) => {
  const result = await updateBank(data, bankId);
  revalidateTag("getAllBanks");
  return result;
};
