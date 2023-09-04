import { configureStore } from "@reduxjs/toolkit";

import { currentUserSliceReducer } from "./currentUserSlice";

export const store = configureStore({
  reducer: { auth: currentUserSliceReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
