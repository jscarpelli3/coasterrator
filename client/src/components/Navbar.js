import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="coaster-rator-h4">Coaster Rater</h1>
      <div>
        <Link to="/" className="linky">
          Home
        </Link>
        <Link to="" className="linky"></Link>
        <Link to=""></Link>
      </div>
    </nav>
  )
}
export default Navbar
