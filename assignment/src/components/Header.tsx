"use client";
import React from "react";
import { ShoppingCart } from "lucide-react";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-20">
      <div className="flex items-center justify-between px-8 py-4 bg-transparent">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-widest text-white">A B C</h1>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 font-medium text-white">
          <a href="#" className="hover:text-pink-400">Home</a>
          <a href="#" className="hover:text-pink-400">About</a>
          <a href="#" className="hover:text-pink-400 text-pink-400">Restaurants</a>
          <a href="#" className="hover:text-pink-400">Services</a>
          <a href="#" className="hover:text-pink-400">Contact</a>
        </nav>

        {/* Cart */}
        <button className="flex items-center bg-pink-700 hover:bg-pink-800 text-white px-4 py-2 rounded-md">
          <ShoppingCart size={18} className="mr-2" />
          0 Items
        </button>
      </div>
    </header>
  );
};

export default Header;
