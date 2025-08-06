import { createSlice } from "@reduxjs/toolkit";

const editSlice = createSlice({
  name: "edit",
  initialState: {
    crossColor: "#ff4a3a",
    circleColor: "#3aa6ff",
    crossName: "Player 1",
    circleName: "Player 2"
  },
  reducers: {
    setColorCrossAction: (state, action) => {
      state.crossColor = action.payload;
    },
    setColorCircleAction: (state, action) => {
      state.circleColor = action.payload;
    },
    setCrossNameAction: (state, action) =>{
      state.crossName = action.payload
    },
    setCircleNameAction: (state, action) =>{
      state.circleName = action.payload
    }
  },
});

export const { setColorCrossAction, setColorCircleAction, setCrossNameAction, setCircleNameAction } = editSlice.actions;
export default editSlice.reducer;
