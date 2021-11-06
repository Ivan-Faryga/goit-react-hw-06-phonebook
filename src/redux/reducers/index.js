import { combineReducers } from "redux";
// import { combineReducers, createReducer } from "@reduxjs/toolkit"; // ====var 2 REDUX TOOLKIT
import { addContact, deleteContact, filterContact } from "./actions";
import contactsReducer from "./contacts";
import filterReducer from "./filter";

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

// ================= var 2 =========== REDUX TOOLKIT
// const contacts = createReducer([], {
//   [addContact]: (state, action) => [...state, action.payload],
//   [deleteContact]: (state, action) =>
//     state.filter((contact) => contact.id !== action.payload),
// });

// const filter = createReducer("", {
//   [filterContact]: (state, action) => action.payload,
// });

// const rootReducer = combineReducers({
//   contacts,
//   filter,
// });

// export default rootReducer;
