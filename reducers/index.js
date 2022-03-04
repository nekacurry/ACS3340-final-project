import favReducer from "./FavReducer";
import { combineReducers } from "redux";

const cReducers = combineReducers({
  favList: favReducer
})

export default cReducers