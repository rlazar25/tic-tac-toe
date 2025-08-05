import { Link, useRouteError } from "react-router"

const ErrorPage = () => {

    const error = useRouteError()
    console.log(error);
    

  return (
    <div className="errorPage">
        <p>Status: {error.status}</p>
        <p>{error.statusText}</p>
        <p>{error.data}</p>
        <Link to={'/'} >Back To Home Page</Link>
    </div>
  )
}

export default ErrorPage
