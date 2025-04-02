import React, { useState } from "react";
import { FaBars, FaUser, FaShoppingCart } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 w-full bg-gray-300 text-white px-16 py-4 justify-between items-center gap-2">
        <div className="flex gap-4 justify-start items-center">
          <button
            className="text-black text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <IoClose /> : <FaBars />}
          </button>
          <h1 className="text-xl font-bold text-black">ShopSphere</h1>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full p-2 rounded-md border border-gray-400 text-black"
          />
        </div>
        <div className="flex justify-end gap-4 items-center">
          <Link to="/login">
          <button className="flex items-center gap-2 bg-blue-500 px-3 py-2 rounded-md">
            <FaUser />
            <p>Auth</p>
          </button>
          </Link>
          <button className="flex items-center gap-2 bg-green-500 px-3 py-2 rounded-md">
            <FaShoppingCart />
            <p>Cart</p>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="absolute left-24 top-20 w-48 z-10 rounded-md bg-white shadow-lg ">
          <ul className="flex flex-col text-black p-4">
            <li className="py-3 px-4 border-b hover:bg-gray-200 cursor-pointer transition">
              Home
            </li>
            <li className="py-3 px-4 border-b hover:bg-gray-200 cursor-pointer transition">
              Products
            </li>
            <li className="py-3 px-4 border-b hover:bg-gray-200 cursor-pointer transition">
              Cart
            </li>
            <li className="py-3 px-4 hover:bg-gray-200 cursor-pointer transition">
              Wishlist
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
