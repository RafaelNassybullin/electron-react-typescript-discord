import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IGlobalState {
  menuPopup: boolean
  menuPopup2: boolean
}

const globalState: IGlobalState = {
  menuPopup: false,
  menuPopup2: false
};

export const globalSlice = createSlice({
  name: "global",
  initialState: globalState,
  reducers: {
    openCloseMenu: (state, action: PayloadAction) => {
      state.menuPopup = !state.menuPopup
    },
    openCloseMenu2: (state, action: PayloadAction) => {
      state.menuPopup2 = !state.menuPopup2
    },
  },
});

export const {
  openCloseMenu,
  openCloseMenu2,
} = globalSlice.actions;

export const globalReducer = globalSlice.reducer;
