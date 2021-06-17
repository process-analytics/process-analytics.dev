import * as React from "react"
import { Link } from "gatsby"
import Img from "../images/404.png";

const NotFoundPage = () => {
  return (
    <main>
      <title>Not found</title>
      <h1>Page not found</h1>
      <p>
        Oops, looks like the page cannot be found...
        <img
            alt="404 not found"
            src={ Img }
        />
        <br/><br/>
        <Link to="/">Go back to home</Link>
      </p>
    </main>
  )
}

export default NotFoundPage
