import { useState } from "react"
// components
import CellComponent from "./components/CellComponent"

const App = () => {

  const [cells, setCells] = useState(Array(9).fill(""));
  const [whoPlay, setWhoPlay] = useState("cross");
  const [winner, setWinner] = useState(null);

  // functions
  const handleClick = (id) => {
      if(cells[id] !=="" || winner) return

      const updatedCells = [...cells]
      updatedCells[id] = whoPlay;

      setCells(updatedCells)      
      setWhoPlay(whoPlay === "cross" ? "circle" : "cross");
      
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
