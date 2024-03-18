import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav>
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

      <div className="nav-items-list">
        <button className="nav-items-list-btn">Sign In</button>

        <button className="nav-items-list-btn">Login</button>

        <div className="nav-cart-item-wrapper">
          <FaCartShopping />
          <a href="./pages/cart.html">My cart</a>
        </div>
      </div>
    </nav>
  );
};

// const Header = () => {
//   return (
//     <nav>
//       <div className="nav-logo">
//         <img src="/cafe-logo.png" alt="cafe logo" />
//       </div>

//       <ul className="nav-links-list">
//         <li className="nav-active-link">
//           <a href="#">Home</a>
//         </li>
//         <li>
//           <a href="/pages/Menu/menu.html">Menu</a>
//         </li>
//         <li>
//           <a href="/pages/contact-us-page.html">Contact Us</a>
//         </li>
//         <li>
//           <a href="#">Blog</a>
//         </li>
//       </ul>

//       <div className="nav-items-list">
//         <button className="nav-items-list-btn">Sign In</button>

//         <button className="nav-items-list-btn">Login</button>

//         <div className="nav-cart-item-wrapper">
//           <FaCartShopping />

//           <a href="./pages/cart.html">My cart</a>
//         </div>
//       </div>
//     </nav>
//   );
// };

export default NavBar;
