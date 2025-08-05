// components
import CellComponent from "../components/CellComponent"
//redux
import { useDispatch, useSelector } from "react-redux"
import { restartGameAction } from "../store/gameSlice"

const GamePage = () => {

  const {cells, winner} = useSelector(state => state.gameStore)
  const dispatch = useDispatch()
  
  return (
    <div className="app">
      <div className="gameContainer">
        {cells.map((cell, index) => {
          return <CellComponent key={index} cell={cell} id={index}  />
        })}
      </div>
      {
        winner && <div className="winningMsg">
          <h2>{winner === "draw" ? "It's a Draw" : `Winner is ${winner.toUpperCase()}`}</h2>
          <button onClick={() => dispatch(restartGameAction())}>Play Again</button>
        </div>
      }
    </div>
  )
}

export default GamePage