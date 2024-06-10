import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";

const contactPersistConfig = {
  key: "contacts",
  storage,
};

export const store = configureStore({
  reducer: {
    contacts: persistReducer(contactPersistConfig, contactsReducer),
    filter: filterReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
