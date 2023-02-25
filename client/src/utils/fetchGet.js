import axios from "axios";

const fetchGet = async (path = "") => {
  return axios.get(path);
};
export { fetchGet };
