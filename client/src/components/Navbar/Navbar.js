import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link className="navbar-brand" to="/">
      FP Mentors
    </Link>
    <div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link
            to="/"
            className={
              window.location.pathname === "/" ||
              window.location.pathname === "/home"
                ? "nav-link active"
                : "nav-link"
            }
          >
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/search"
            className={
              window.location.pathname === "/search"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Search
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/mentors"
            className={
              window.location.pathname === "/mentors"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Mentors
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/signin"
            className={
              window.location.pathname === "/signin"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Sign In
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/movies"
            className={
              window.location.pathname === "/movies"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Movie Search
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
