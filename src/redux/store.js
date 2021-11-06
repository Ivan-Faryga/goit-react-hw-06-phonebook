// вариант 1 ====== ванильный redux
//import { createStore } from "redux";  ========= vanilla Redux
//import { devToolsEnhancer } from "redux-devtools-extension"; ========= vanilla Redux
// import { rootReducer } from "./reducers";
import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from "@reduxjs/toolkit";
// import logger from "redux-logger";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import contacts from "../redux/slices/contacts";
import filter from "../redux/slices/filter";

// ==========1============  создание стора на ванильном REDUX
// const store = createStore(rootReducer, devToolsEnhancer());
//==========================================================

//==============3======================= рабочий код для SLICE
// const rootReducer = {
//   contacts,
//   filter,
// };
// const store = configureStore({ reducer: rootReducer, devTools: true });
//===================================================================

// ==2== создание стора на REDUX TOOLKIT
const persistConfig = {
  key: "contacts",
  storage,
};

// const middleware = [...getDefaultMiddleware(), logger];

const rootReducer = combineReducers({
  contacts,
  filter,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  devTools: true,
});
const persistor = persistStore(store);
// const persistedReducer = persistReducer(persistConfig, rootReducer);
// const store = configureStore({ reducer: persistedReducer, devTools: true });

const storeObj = { store, persistor };

export default storeObj;
