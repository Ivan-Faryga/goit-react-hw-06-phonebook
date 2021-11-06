// import { ADD_CONTACT, DELETE_CONTACT, FILTER_CONTACT } from "../types/types";  //======= var 1
// import { createAction } from "@reduxjs/toolkit";   //========== var 2

//======================= 1 ========= Vanilla Redux

// export const addContact = (formData) => ({
//   type: ADD_CONTACT,
//   payload: formData,
// });

// export const deleteContact = (id) => ({
//   type: DELETE_CONTACT,
//   payload: id,
// });

// export const filterContact = (value) => ({
//   type: FILTER_CONTACT,
//   payload: value,
// });

//======================= 2 ========= Basic REDUX TOOLKIT

// export const addContact = createAction("contacts/addContact");
// export const deleteContact = createAction("contacts/deleteContact");

// export const filterContact = createAction("contacts/filterContact");
