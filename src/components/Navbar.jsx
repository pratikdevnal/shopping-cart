import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-indigo-500 text-white p-2 fixed w-11/12 rounded-md z-10 top-4">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="flex items-center">
          <img
            src="https://fakestoreapi.com/icons/logo.png"
            alt="Logo"
            className="h-8 mr-2"
          />
          <span className="text-lg font-bold">Your Logo</span>
        </NavLink>
        <div className="flex items-center space-x-4">
          <NavLink to="/" className="hover:text-gray-300">
            Home
          </NavLink>
          <NavLink to="/cart" className="hover:text-gray-300">
            <FaShoppingCart />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
