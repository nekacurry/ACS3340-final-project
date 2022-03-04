import { NEW_FAV } from "../actions/Fav";

const favReducer = (state = [], action) => {
  switch (action.type) {
    case NEW_FAV:
      return [...state, action.payload.fav]
    default: return state
  }
}

export default favReducer