import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <NavLink to="/">
          <img src="https://fakestoreapi.com/icons/logo.png" alt="" />
        </NavLink>
        <div>
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <NavLink to="/cart">
            <FaShoppingCart />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
