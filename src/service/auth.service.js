export const registerService = async (req) => {
  const res = await fetch(`http://localhost:9091/api/v1/auths/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((user) => user.json())
    .catch((e) => console.log(e));
  return res;
};

export const loginService = async (req) => {
  const res = await fetch(`http://localhost:9091/api/v1/auths/login`, {
    method: "POST",
    body: JSON.stringify(req),
  })
    .then((user) => user.json())
    .catch((e) => console.log(e));
  return res;
};
