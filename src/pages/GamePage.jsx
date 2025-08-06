// components
import CellComponent from "../components/CellComponent"
//redux
import { useDispatch, useSelector } from "react-redux"
import { restartGameAction } from "../store/gameSlice"
import BackToHomeBtnComponent from "../components/BackToHomeBtnComponent"

const GamePage = () => {

  const {cells, winner, whoPlay, crossScore,circleScore} = useSelector(state => state.gameStore)
  const {crossName, circleName} = useSelector(state => state.editStore)
  const dispatch = useDispatch()
  
  return (
    <div className="gamePage">
      <div className="gameInfo">
           {winner ? <p className="msg">{winner === "draw" ? "It's a Draw" : `Winner is ${winner}`}</p> : <p>Turn: {whoPlay}</p>}
          <div className="gameScore">
            <p>{crossName}: {crossScore}</p>
            <p>{circleName}: {circleScore}</p>
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