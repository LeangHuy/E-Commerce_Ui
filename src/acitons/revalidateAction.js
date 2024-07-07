"use server";

import { revalidateTag } from "next/cache";

export const revalidateWhere = async (tag = "") => {
  revalidateTag(tag);
};
