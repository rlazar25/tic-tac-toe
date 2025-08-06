// components
import CellComponent from "../components/CellComponent"
//redux
import { useDispatch, useSelector } from "react-redux"
import { restartGameAction } from "../store/gameSlice"
import BackToHomeBtnComponent from "../components/BackToHomeBtnComponent"

const GamePage = () => {

  const {cells, winner, whoPlay, crossScore,circleScore} = useSelector(state => state.gameStore)
  const dispatch = useDispatch()
  
  return (
    <div className="gamePage">
      <div className="gameInfo">
          <p className="msg"> {winner ? (winner === "draw" ? "It's a Draw" : `Winner is ${winner}`) : `Turn: ${whoPlay}`}</p>
          <div className="gameScore">
            <p>Player 1: {crossScore}</p>
            <p>Player 2: {circleScore}</p>
          </div>
      </div>
      <div className="gameContainer">
        {cells.map((cell, index) => {
          return <CellComponent key={index} cell={cell} id={index}  />
        })}
      </div>
      <BackToHomeBtnComponent />
      {
        winner && <div className="gameBtns">
          <button className="btn" onClick={() => dispatch(restartGameAction())}>Play Again</button>
        </div>
      }
    </div>
  )
}

export default GamePage