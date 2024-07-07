"use server";

import { uploadImg } from "@/service/uploadImg.service";

export const uploadImgAction = async (fileImg, slideId) => {
  const data = await uploadImg(fileImg, slideId);
  return data;
};
