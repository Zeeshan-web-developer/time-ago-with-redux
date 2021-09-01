import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rooReducer from "./reducer";

const perssistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(perssistConfig, rooReducer);
const store = createStore(persistedReducer);

export const persistor = persistStore(store);
export default store;
