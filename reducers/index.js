import favReducer from "./FavReducer";
import { combineReducers } from "redux";

export default combineReducers({
  favList: favReducer,
})
