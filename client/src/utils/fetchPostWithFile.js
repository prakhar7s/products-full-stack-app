const fetchPostWithFile = async (path = "", data = {}, type = "POST") => {
  const res = await fetch(path, {
    method: type,
    body: data,
  });

  return res.json();
};
export { fetchPostWithFile };
