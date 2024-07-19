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
  const res = await fetch(`${process.env.BASE_URL}/slideshows`, {
    next: {
      tag: ["getAllSlideShows"],
    },
    cache: "no-store",
  });

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

export const getSlideById = async (slideId) => {
  console.log(slideId);
  const res = await fetch(`${process.env.BASE_URL}/slideshows/${slideId}`);

  const { payload } = await res.json();

  console.log("get slide", payload);

  return payload;
};

export const editSlideById = async (data, slideId) => {
  const res = await fetch(`${process.env.BASE_URL}/slideshows/${slideId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      //   Authorization: `Bearer ${session?.user?.token}`,
      Authorization: `Bearer ${process.env.TOKEN}`,
    },
    body: JSON.stringify(data),
  });

  const { payload } = await res.json();

  return payload;
};
