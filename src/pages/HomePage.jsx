import { Link } from "react-router"

const HomePage = () => {
  return (
    <div className="homePage">
        <Link to={'/gamePage'} className="btn">Game</Link>
        <Link to={'/editPage'} className="btn">Edit</Link>
    </div>
  )
}

export default HomePage
