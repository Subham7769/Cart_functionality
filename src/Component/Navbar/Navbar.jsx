import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {

const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <nav>
      <div>
        <span>Shopping Cart</span>
      </div>
      <div>
        <ul>
          <li>
            <NavLink to="/" className="Navlink">Home Page</NavLink>
          </li>
          <li>
            <NavLink to="/cart" className="Navlink">Cart Page 
            <span className="badge">{cartItems.length}</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
