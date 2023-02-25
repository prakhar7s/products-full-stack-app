import { APIS, BASE_URL } from "../constants/appConstants";
import { fetchGet } from "../utils/fetchGet";
import { fetchPost } from "../utils/fetchPost";
import { fetchPostWithFile } from "../utils/fetchPostWithFile";

export const fetchAllItems = async () => {
  return new Promise((resolve, reject) => {
    fetchGet(BASE_URL + APIS.GET_ALL_ITEMS)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => reject(error));
  });
};
export const deleteItemById = async (id) => {
  return new Promise((resolve, reject) => {
    fetchPost(BASE_URL + APIS.DELETE_ITEM, { id }, "delete")
      .then((response) => {
        resolve(response);
      })
      .catch((error) => reject(error));
  });
};
export const addItem = async (data) => {
  return new Promise((resolve, reject) => {
    fetchPostWithFile(BASE_URL + APIS.ADD_ITEM, data, "post")
      .then((response) => {
        resolve(response);
      })
      .catch((error) => reject(error));
  });
};
export const editItem = async (data) => {
  return new Promise((resolve, reject) => {
    fetchPostWithFile(BASE_URL + APIS.UPDATE_ITEM, data, "put")
      .then((response) => {
        resolve(response);
      })
      .catch((error) => reject(error));
  });
};
