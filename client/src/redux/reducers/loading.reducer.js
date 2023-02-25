import loadingActionTypes from "../action-types/loading.actionTypes";

const initialState = {
  loading: false,
};

export default function loadingReducer(state = initialState, action) {
  const { type } = action;

  switch (type) {
    case loadingActionTypes.LOADER_START:
      return {
        ...state,
        loading: true,
      };
    case loadingActionTypes.LOADER_END:
      return {
        ...state,
        loading: false,
      };
    default:
      return {
        ...state,
      };
  }
}
