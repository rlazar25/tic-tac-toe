import { configureStore } from "@reduxjs/toolkit";
import gameSlice from "./gameSlice";

const store = configureStore({
  reducer: {
    gameStore: gameSlice,
  },
});

export default store;
