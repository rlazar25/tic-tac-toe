import { configureStore } from "@reduxjs/toolkit";
import gameSlice from "./gameSlice"

const store = configureStore({
    gameStore: gameSlice
})

export default store;