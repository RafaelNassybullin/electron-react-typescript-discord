import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../";

const menuSelector = (state: RootState) => state.global.menuPopup;

export const menuReselect = createSelector(menuSelector, (menu) => {
  return menu
});

const menuSelector2 = (state: RootState) => state.global.menuPopup2;

export const menuReselect2 = createSelector(menuSelector2, (menu) => {
  return menu
});