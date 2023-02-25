const fetchPost = async (path = "", data = {}, type = "POST") => {
  const res = await fetch(path, {
    method: type,
    headers: {
      Accept: "application/json, text/plain, */*", // It can be used to overcome cors errors
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
};
export { fetchPost };
