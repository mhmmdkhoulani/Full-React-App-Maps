import { Link, NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto flex justify-between py-5">
        <Link to={"/"} className="text-white font-bold text-xl">
          Logo
        </Link>
        <ul className="flex space-x-5">
          <li>
            <NavLink to={"/"} className="text-white ">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/"} className="text-white ">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to={"/"} className="text-white ">
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
