import itemActionTypes from "../action-types/item.actionTypes";

const initialState = {
  itemsList: null,
  error: null,
};

export default function itemReducer(state = initialState, action) {
  const { type, response, error } = action;

  switch (type) {
    case itemActionTypes.GET_ITEMS_SUCCESS:
    case itemActionTypes.UPDATE_ITEM_SUCCESS:
    case itemActionTypes.DELETE_ITEM_SUCCESS:
    case itemActionTypes.ADD_ITEM_SUCCESS:
      return {
        ...state,
        itemsList: response?.items,
        error: null,
      };
    case itemActionTypes.GET_ITEMS_FAILURE:
    case itemActionTypes.UPDATE_ITEM_FAILURE:
    case itemActionTypes.DELETE_ITEM_FAILURE:
    case itemActionTypes.ADD_ITEM_FAILURE:
      return {
        ...state,
        usersList: null,
        error: error,
      };

    default:
      return {
        ...state,
      };
  }
}
