import { useState } from "react"
import CellComponent from "./components/CellComponent"

const App = () => {

  const [cells, setCells] = useState(Array(9).fill(""));
  const [whoPlay, setWhoPlay] = useState("cross");
  const [winner, setWinner] = useState(null);

  return (
    <div>
      <h1>Tic Tac Toe</h1>

      <div className="gameContainer">
        {cells.map((cell, index) => {
          return <CellComponent key={index} />
        })}
      </div>
    </div>
  )
}

export default App
