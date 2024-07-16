export const uploadImg = async (fileImg, slideId) => {
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
