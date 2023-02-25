import { combineReducers } from "redux";
import itemReducer from "./reducers/item.reducer";
import loadingReducer from "./reducers/loading.reducer";

const rootReducer = combineReducers({
  loadingReducer,
  itemReducer,
});

export default rootReducer;
