// redux
import { useDispatch } from 'react-redux'
import { clickCellAction } from '../store/gameSlice'

const CellComponent = (props) => {

  const dispatch = useDispatch()
  const {cell, id} = props

  return (
    <div className='gameCell' id={id} onClick={() => dispatch(clickCellAction(id))}>
      <div className={cell}></div>
    </div>
  )
}

export default CellComponent
