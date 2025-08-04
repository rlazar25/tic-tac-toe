const { createSlice } = require("@reduxjs/toolkit");


const gameSlice = createSlice({
    name: "game",
    initialState: {
        cells: Array(9).fill(""),
        whoPlay: 'cross',
        winner: null
    },
    reducers: {
        clickCellAction: (state, action) =>{}
    }
})

export const {clickCellAction} = gameSlice.actions
export default gameSlice.reducer;