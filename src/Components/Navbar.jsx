import React from "react";
import { Link } from "react-router-dom";
import "../Style/nav.css";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand mx-auto" to="/">
          <img
            // src="https://wallpapercave.com/wp/wp2520270.jpg"
            alt="Bike-Z Logo"
            className="logo-img"
          />
          BIKE-Z
        </Link>

        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <Link class="nav-link" to="/">
              Home <span class="sr-only">(current)</span>
            </Link>
          </li>
          <li>
            <Link class="nav-link" to="/products">
              Products <span class="sr-only">(current)</span>
            </Link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              About
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Services
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
