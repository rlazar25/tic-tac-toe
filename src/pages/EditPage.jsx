// redux
import { useDispatch, useSelector } from "react-redux"
import { setColorCrossAction, setColorCircleAction, setCrossNameAction, setCircleNameAction } from "../store/editSlice";
// component
import BackToHomeBtnComponent from "../components/BackToHomeBtnComponent"
const EditPage = () => {

  const { crossColor, circleColor, crossName, circleName } = useSelector(state => state.editStore);
  const dispatch = useDispatch();


  return (
    <div className="editPage">
      <div>
        <div className="editColor">
          <label htmlFor="crossColor">Cross Color:</label>
          <input onChange={e => dispatch(setColorCrossAction(e.target.value))} value={crossColor} type="color" id="crossColor" />
        </div>
        <div className="editColor">
          <label htmlFor="circleColor">Circle Color:</label>
          <input onChange={e => dispatch(setColorCircleAction(e.target.value))} value={circleColor} type="color" id="circleColor" />
        </div>
      </div>
      <div className="editName">
        <input type="text" max={15} placeholder="Enter name for cross" value={crossName} onChange={e => dispatch(setCrossNameAction(e.target.value))} />
        <input type="text" max={15} placeholder="Enter name for circle" value={circleName} onChange={e => dispatch(setCircleNameAction(e.target.value))} />
      </div>
      <BackToHomeBtnComponent />
    </div>
  )
}

export default EditPage
