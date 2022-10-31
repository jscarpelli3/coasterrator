import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h4 className="coaster-rator-h4">Coaster Rator</h4>
      <div>
        <Link to="/" className="linky">
          Home
        </Link>
        <Link to="" className="linky"></Link>

        <Link to=""></Link>
      </div>
    </nav>
  );
};
export default Navbar;
