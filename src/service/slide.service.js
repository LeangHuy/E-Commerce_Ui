export const createSlideShow = async ({ title, description }) => {
  const res = await fetch(`${process.env.BASE_URL}/slideshows`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      //   Authorization: `Bearer ${session?.user?.token}`,
      Authorization: `Bearer ${process.env.TOKEN}`,
    },
    body: JSON.stringify({
      title,
      description,
    }),
  });

  const { payload } = await res.json();

  return payload;
};

export const getAllSlideShows = async () => {
  const res = await fetch(
    `${process.env.BASE_URL}/slideshows`,
    {
      headers: {
        // "Content-Type": "application/json",
        //   Authorization: `Bearer ${session?.user?.token}`,
        Authorization: `Bearer ${process.env.TOKEN}`,
      },
    },
    {
      next: {
        tag: ["getAllSlideShows"],
      },
    }
  );

  const { payload } = await res.json();

  return payload;
};

export const changeStatusSlide = async (slideId, statusSlide) => {
  const res = await fetch(
    `${
      process.env.BASE_URL
    }/slideshows/active/${slideId}?isActive=${!statusSlide}`,

    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        //   Authorization: `Bearer ${session?.user?.token}`,
        Authorization: `Bearer ${process.env.TOKEN}`,
      },
    }
  );
  const data = await res.json();
  return data;
};

export const getAllSlideActive = async () => {
  const res = await fetch(`${process.env.BASE_URL}/slideshows/active`);
  const { payload } = await res.json();
  console.log(payload);
  return payload;
};
