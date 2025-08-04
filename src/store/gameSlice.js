import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "game",
  initialState: {
    cells: Array(9).fill(""),
    whoPlay: "cross",
    winner: null,
  },
  reducers: {
    clickCellAction: (state, action) => {
      // disable click
      if (state.cells[action.payload] !== "" || state.winner) return;

      // copy and give player class
      const updatedCells = [...state.cells];
      updatedCells[action.payload] = state.whoPlay;

      // update who play next
      state.cells = updatedCells;
      state.whoPlay = state.whoPlay === "cross" ? "circle" : "cross";

      // check winner
      const winningCombos = [
        [0, 1, 2],[3, 4, 5],[6, 7, 8], //horizontal
        [0, 3, 6],[1, 4, 7],[2, 5, 8], //vertical
        [0, 4, 8],[2, 4, 6], //diagonal
      ];

      for (let combo of winningCombos){
        const [a,b,c] = combo;

        // condition for winner
        if(updatedCells[a] && updatedCells[a] === updatedCells[b] && updatedCells[b] === updatedCells[c]){
            state.winner = updatedCells[a]
            return
        }
        // if it is a draw
        if(!updatedCells.includes("")){
            state.winner = "draw"
        }
      }
    },
    restartGameAction: (state) => {
        state.cells = Array(9).fill("");
        state.whoPlay = "cross";
        state.winner = null
    }
  },
});

export const { clickCellAction, restartGameAction} = gameSlice.actions;
export default gameSlice.reducer;
