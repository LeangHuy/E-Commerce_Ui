"use server";
import { createBank } from "@/service/bank.service";
import { revalidatePath, revalidateTag } from "next/cache";
export const createBankAction = async ({ bankName, qrCode }) => {
  const data = await createBank({ bankName, qrCode });
  revalidateTag("getAllBank");
  return data;
};
