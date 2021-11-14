import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import contacts from "../redux/slices/contacts";
import filter from "../redux/slices/filter";
import { contactsApi } from "./contacts/contactsSlise";

// const middleware = [...getDefaultMiddleware()];

export const store = configureStore({
  reducer: {
    contacts,
    filter,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
  devTools: true,
});
