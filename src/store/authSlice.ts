import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AuthState } from "./authSlice.type";

const initialState: AuthState = {
  isAdmin: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clean(state) {
      state.isAdmin = null;
    },
    setIsAdmin(state, action: PayloadAction<boolean | null>) {
      state.isAdmin = action.payload;
    },
  },
});
export const { clean, setIsAdmin } = authSlice.actions
export const authSliceReducer = authSlice.reducer;
