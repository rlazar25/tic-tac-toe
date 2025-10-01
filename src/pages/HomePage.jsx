import { Link } from "react-router"
// redux and slices
import { useDispatch } from "react-redux"
import { setModeAction } from "../store/gameSlice"

const HomePage = () => {

  const dispatch = useDispatch()

  return (
    <div className="homePage">
      <h1>Tic Tac Toe</h1>
        <Link to={'/gamePage'} onClick={() => dispatch(setModeAction("classic"))} className="btn">Classic Mode</Link>
        <Link to={'/gamePage'} onClick={() => dispatch(setModeAction("dynamic"))} className="btn">Dynamic Mode</Link>
        <Link to={'/editPage'} className="btn">Edit</Link>
    </div>
  )
}

export default HomePage
