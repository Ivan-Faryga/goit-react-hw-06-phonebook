import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import { rootReducer } from "./reducers";
// import { persistStore, persistReducer } from "redux-persist";

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(rootReducer, devToolsEnhancer());

// const store = configureStore({reducer: persostedReducer, devTools: true})

export default store;
