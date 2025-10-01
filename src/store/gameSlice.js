import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "game",
  initialState: {
    cells: Array(9).fill(""),
    whoPlay: "cross",
    winner: null,
    crossScore: 0,
    circleScore: 0,
    moves: {
      cross: [],
      circle: [],
    },
    mode: "classic",
  },
  reducers: {
    clickCellAction: (state, action) => {
      if (state.cells[action.payload] !== "" || state.winner) return;

      const currentPlayer = state.whoPlay;

      if (state.mode === "dynamic") { // dynamic mode
        // handle only 3 symbols
        if (state.moves[currentPlayer].length === 3) {
          const oldestMove = state.moves[currentPlayer].shift();
          state.cells[oldestMove] = "";
        }
        state.cells[action.payload] = currentPlayer;
        state.moves[currentPlayer].push(action.payload);
      } else { // classic
        state.cells[action.payload] = currentPlayer;
      }

      // change player
      state.whoPlay = currentPlayer === "cross" ? "circle" : "cross";
      
      // copy state for winner check
      const updatedCells = [...state.cells];

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
            if(state.winner === "cross") {
              state.crossScore += 1
            } else if(state.winner === "circle") {
              state.circleScore += 1
            }
            return
        }
        // if it is a draw
        if(!updatedCells.includes("")){
            state.winner = "draw"
        }
      }
    },
    setModeAction: (state, action) => {
      state.mode = action.payload;
    },
    restartGameAction: (state) => {
      state.cells = Array(9).fill("");
      state.whoPlay = "cross";
      state.winner = null;
      state.moves = { cross: [], circle: [] };
    },
  },
});

export const { clickCellAction, restartGameAction, setModeAction } =
  gameSlice.actions;
export default gameSlice.reducer;
