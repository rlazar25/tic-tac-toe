// redux
import { useDispatch, useSelector } from "react-redux"
import { setColorCrossAction, setColorCircleAction } from "../store/editSlice";
// component
import BackToHomeBtnComponent from "../components/BackToHomeBtnComponent"
const EditPage = () => {

  const { crossColor, circleColor } = useSelector(state => state.editStore);
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
      <BackToHomeBtnComponent />
    </div>
  )
}

export default EditPage
