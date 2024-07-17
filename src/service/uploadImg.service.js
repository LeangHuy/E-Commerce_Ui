export const uploadImg = async (fileImg, slideId) => {
  console.log("file slide : ", fileImg);
  const res = await fetch(`${process.env.BASE_URL}/files/slide/${slideId}`, {
    method: "POST",
    headers: {
      // "Content-Type": "multipart/form-data",
      //   Authorization: `Bearer ${session?.user?.token}`,
      Authorization: `Bearer ${process.env.TOKEN}`,
    },
    body: fileImg,
  });

  const { payload } = await res.json();

  return payload;
};

export const uploadImgProduct = async (fileImg, productId) => {
  // let arrFile =
  console.log("adsdasdadas", { ...fileImg }, productId);
  // return;
  const res = await fetch(
    `${process.env.BASE_URL}/post-multiple/${productId}`,
    {
      method: "POST",
      headers: {
        // "Content-Type": "multipart/form-data",
        // accept: "*/*",
        //   Authorization: `Bearer ${session?.user?.token}`,
        Authorization: `Bearer ${process.env.TOKEN}`,
      },
      body: fileImg,
    }
  );

  if (!res.ok) {
    console.log("res", res);
  }

  const { payload } = await res.json();

  return payload;
};
