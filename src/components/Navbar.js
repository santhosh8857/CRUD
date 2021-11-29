import React from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons/lib";
import { FaLaptopCode } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          <h2 style={{ marginLeft: "10px", marginRight: "1px" }}>
            {/* IconContext is used to provide color to the react icon */}
            <IconContext.Provider value={{ color: "blue" }}>
              <FaLaptopCode className="primary" />
            </IconContext.Provider>
          </h2>
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/users" className="nav-link">
                Users
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/create-user" className="nav-link">
                Create User
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
