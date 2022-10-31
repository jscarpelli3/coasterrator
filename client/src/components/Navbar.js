import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h4>RELOCATE</h4>
      <div>
        <Link to="/" className="linky">
          Home
        </Link>
        <Link to="" className="linky">
          Ratings
        </Link>

        <Link to=""></Link>
      </div>
    </nav>
  );
};
export default Navbar;
