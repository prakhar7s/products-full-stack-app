import {
  addItem,
  deleteItemById,
  editItem,
  fetchAllItems,
} from "../../services/item.services";
import itemActionTypes from "../action-types/item.actionTypes";
import loadingActionTypes from "../action-types/loading.actionTypes";

export const fetchItemList = () => (dispatch) => {
  dispatch({
    type: loadingActionTypes.LOADER_START,
  });

  fetchAllItems()
    .then((response) => {
      dispatch({
        type: itemActionTypes.GET_ITEMS_SUCCESS,
        response: response?.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: itemActionTypes.GET_ITEMS_FAILURE,
        error,
      });
    })
    .finally(() => {
      dispatch({
        type: loadingActionTypes.LOADER_END,
      });
    });
};

export const deleteItem = (id) => (dispatch) => {
  dispatch({
    type: loadingActionTypes.LOADER_START,
  });

  deleteItemById(id)
    .then((response) => {
      dispatch({
        type: itemActionTypes.DELETE_ITEM_SUCCESS,
        response: response,
      });
    })
    .catch((error) => {
      dispatch({
        type: itemActionTypes.DELETE_ITEM_FAILURE,
        error,
      });
    })
    .finally(() => {
      dispatch({
        type: loadingActionTypes.LOADER_END,
      });
    });
};
export const addNewItem = (data) => (dispatch) => {
  dispatch({
    type: loadingActionTypes.LOADER_START,
  });

  addItem(data)
    .then((response) => {
      dispatch({
        type: itemActionTypes.ADD_ITEM_SUCCESS,
        response: response,
      });
    })
    .catch((error) => {
      dispatch({
        type: itemActionTypes.ADD_ITEM_FAILURE,
        error,
      });
    })
    .finally(() => {
      dispatch({
        type: loadingActionTypes.LOADER_END,
      });
    });
};
export const updateItem = (data) => (dispatch) => {
  dispatch({
    type: loadingActionTypes.LOADER_START,
  });

  editItem(data)
    .then((response) => {
      dispatch({
        type: itemActionTypes.UPDATE_ITEM_SUCCESS,
        response: response,
      });
    })
    .catch((error) => {
      dispatch({
        type: itemActionTypes.UPDATE_ITEM_FAILURE,
        error,
      });
    })
    .finally(() => {
      dispatch({
        type: loadingActionTypes.LOADER_END,
      });
    });
};
