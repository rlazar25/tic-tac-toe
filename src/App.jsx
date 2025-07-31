import { useState } from "react"
// components
import CellComponent from "./components/CellComponent"

const App = () => {

  // states
  const [cells, setCells] = useState(Array(9).fill(""));
  const [whoPlay, setWhoPlay] = useState("cross");
  const [winner, setWinner] = useState(null);

  // functions
  const handleClick = (id) => {
    if (cells[id] !== "" || winner) return

    const updatedCells = [...cells]
    updatedCells[id] = whoPlay;

    setCells(updatedCells)
    setWhoPlay(whoPlay === "cross" ? "circle" : "cross");

    checkWinner(updatedCells)
  }

  const checkWinner = (currentCell) => {
    const winningCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], //horizontal
      [0, 3, 6], [1, 4, 7], [2, 5, 8], //vertical
      [0, 4, 8], [2, 4, 6]             //diagonal
    ];

    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      // chacking winner
      if (currentCell[a] && currentCell[a] === currentCell[b] && currentCell[b] === currentCell[c]) {
        setWinner(currentCell[a]);
        console.log(`Winner is ${currentCell[a]}`);
        return;
      }
    }

    // checking draw
    if (!currentCell.includes("")) {
      setWinner("draw");
      console.log("It is Draw");
    }
  }

  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>

      <div className="gameContainer">
        {cells.map((cell, index) => {
          return <CellComponent key={index} cell={cell} id={index} handleClick={handleClick} />
        })}
      </div>
    </div>
  )
}

export default App
