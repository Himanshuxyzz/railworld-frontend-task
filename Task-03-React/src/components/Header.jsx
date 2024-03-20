import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const NavBar = ({ variant, customStyle }) => {
  return (
    <nav className={`nav ${customStyle === "style-2" ? "pos-no-fix" : ""}`}>
      <div className="nav-logo">
        <Link to={"/"}>
          <img src="/images/cafe-logo.png" alt="cafe logo" />
        </Link>
      </div>

      <ul className="nav-links-list">
        <li className="nav-active-link">
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/menu"}>Menu</Link>
        </li>
        <li>
          <Link to={"/contact-us"}>Contact Us</Link>
        </li>
        <li>
          <Link to={"/blog"}>Blog</Link>
        </li>
      </ul>

      {!variant ? (
        <div className="nav-items-list">
          <button className="nav-items-list-btn">Sign In</button>

          <button className="nav-items-list-btn">Login</button>

          <div className="nav-cart-item-wrapper">
            <FaCartShopping />
            <a href="./pages/cart.html">My cart</a>
          </div>
        </div>
      ) : (
        <div className="nav-search-input">
          <i className="fa-solid fa-magnifying-glass search-icon"></i>
          <input
            className="nav-search-input-field"
            placeholder="search items"
            type="text"
          />
        </div>
      )}
    </nav>
  );
};

export default NavBar;
