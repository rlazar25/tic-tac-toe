import { createSlice } from "@reduxjs/toolkit";

const editSlice = createSlice({
  name: "edit",
  initialState: {
    crossColor: "#ff4a3a",
    circleColor: "#3aa6ff",
  },
  reducers: {
    setColorCrossAction: (state, action) => {
      state.crossColor = action.payload;
    },
    setColorCircleAction: (state, action) => {
      state.circleColor = action.payload;
    },
  },
});

export const { setColorCrossAction, setColorCircleAction } = editSlice.actions;
export default editSlice.reducer;
