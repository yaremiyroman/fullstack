import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section>
      <h2>404 - Page Not Found</h2>
      <p>The page you requested does not exist.</p>
      <Link to="/">Go back to Home</Link>
    </section>
  )
}

export default NotFound
