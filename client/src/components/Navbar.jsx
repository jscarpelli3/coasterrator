import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="coaster-rator-h4">Coaster Rater</h1>
      <div>
        <Link to="/" className="linky">
          Home
        </Link>
        <br />
        <Link to="/coasterform" className="linky">
          New Coaster
        </Link>
        <Link to=""></Link>
      </div>
    </nav>
  )
}
export default Navbar
