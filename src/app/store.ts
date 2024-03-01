import {configureStore} from "@reduxjs/toolkit";
import {autocompleteReducer} from "../store/autocompleteSlice";
import {showReducer} from "../store/showSlice";

export const store = configureStore({
  reducer: {
    autocomplete: autocompleteReducer,
    show: showReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof  store.dispatch;