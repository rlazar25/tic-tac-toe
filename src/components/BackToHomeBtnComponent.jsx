import { Link } from 'react-router'

const BackToHomeBtnComponent = () => {
  return (
    <div>
      <Link to={'/'} className='btn'>Back To Home</Link>
    </div>
  )
}

export default BackToHomeBtnComponent
