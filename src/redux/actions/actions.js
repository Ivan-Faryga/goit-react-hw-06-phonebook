import { ADD_CONTACT, DELETE_CONTACT, FILTER_CONTACT } from "../types/types";

export const addContact = (formData) => ({
  type: ADD_CONTACT,
  payload: formData,
});

export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload: id,
});

export const filterContact = (value) => ({
  type: FILTER_CONTACT,
  payload: value,
});
