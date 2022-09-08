import { configureStore } from "@reduxjs/toolkit";
import { globalReducer } from "./reducer";

export const store = configureStore({
  reducer: {
    global: globalReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>

export * from "./reducer"
export * from "./selector"
