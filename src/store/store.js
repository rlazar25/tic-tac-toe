import { configureStore } from "@reduxjs/toolkit";
import gameSlice from "./gameSlice";
import editSlice from "./editSlice"

const store = configureStore({
  reducer: {
    gameStore: gameSlice,
    editStore: editSlice
  },
});

export default store;
