// redux
import { useDispatch, useSelector } from 'react-redux'
import { clickCellAction } from '../store/gameSlice'

const CellComponent = (props) => {

  const {cell, id} = props
  const {crossColor, circleColor} = useSelector(state => state.editStore);
  
  const dispatch = useDispatch()

  // change color
  const getStyle = () => {
    if(cell === "cross") return {"--color-cross": crossColor}
    if(cell === "circle") return {"--color-circle": circleColor}
  }

  return (
    <div className='gameCell' id={id} onClick={() => dispatch(clickCellAction(id))}>
      <div className={cell} style={getStyle()}></div>
    </div>
  )
}

export default CellComponent
