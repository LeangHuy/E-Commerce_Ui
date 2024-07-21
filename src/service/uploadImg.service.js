import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export const uploadImg = async (fileImg, slideId) => {
  const session = await getServerSession(authOption);

  const res = await fetch(`${process.env.BASE_URL}/files/slide/${slideId}`, {
    method: "POST",
    headers: {
      // "Content-Type": "multipart/form-data",
      //   Authorization: `Bearer ${session?.user?.token}`,
      Authorization: `Bearer ${session.user.payload.token}`,
    },
    body: fileImg,
  });

  const { payload } = await res.json();

  return payload;
};

export const uploadImgProduct = async (fileImg, productId) => {
  // let arrFile =
  // return;
  const session = await getServerSession(authOption);

  const res = await fetch(
    `${process.env.BASE_URL}/post-multiple/${productId}`,
    {
      method: "POST",
      headers: {
        // "Content-Type": "multipart/form-data",
        // accept: "*/*",
        //   Authorization: `Bearer ${session?.user?.token}`,
        Authorization: `Bearer ${session.user.payload.token}`,
      },
      body: fileImg,
    }
  );

  // if (!res.ok) {
  //   console.log("res", res);
  // }

  const { payload } = await res.json();

  return payload;
};

export const postImg = async (fileImg) => {
  // console.log("file", fileImg);
  // return;
  const res = await fetch(`${process.env.BASE_URL}/files`, {
    method: "POST",
    body: fileImg,
  });

  const data = await res.json();
  return data?.payload?.fileName;
};
