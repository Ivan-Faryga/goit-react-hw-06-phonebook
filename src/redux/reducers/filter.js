import { FILTER_CONTACT } from "../types/types";

const initialState = "";

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_CONTACT:
      return action.payload;
    default:
      return state;
  }
};

export default filterReducer;
