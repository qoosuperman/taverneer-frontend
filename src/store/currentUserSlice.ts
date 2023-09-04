import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CurrentUserState } from "./currentUserSlice.type";

const initialState: CurrentUserState = {
  isAdmin: null,
  name: null,
};

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    clean(state) {
      state.isAdmin = null;
      state.name = null;
    },
    setCurrentUser(
      state,
      action: PayloadAction<{ is_admin: boolean; name: string }>
    ) {
      state.isAdmin = action.payload.is_admin;
      state.name = action.payload.name;
    },
  },
});
export const { clean, setCurrentUser } = currentUserSlice.actions;
export const currentUserSliceReducer = currentUserSlice.reducer;
