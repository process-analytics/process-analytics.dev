import * as React from "react"
import { Link } from "gatsby"
import Img from "../images/404.png";

const NotFoundPage = () => {
  return (
    <main>
      <title>Not found</title>
      <p>
        Oops, looks like the page cannot be found... <br/><br/>
          <Link to="/">Go back to home</Link>
          <img
            alt="404 not found"
            src={ Img }
            />
      </p>
    </main>
  )
}

export default NotFoundPage
