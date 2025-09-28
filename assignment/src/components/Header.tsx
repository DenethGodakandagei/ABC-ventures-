"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext"; 

const Header = () => {
  const { cart } = useCart(); 
  const [isOpen, setIsOpen] = useState(false);

  // Calculate total items
  const cartCount = cart.reduce((acc, item) => acc + item.adults + item.kids, 0);

  return (
    <header className="absolute top-0 left-0 w-full z-20 Playfair">
      <div className="flex items-center justify-between px-8 py-4 bg-transparent">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-widest text-white">A B C</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 font-medium text-white">
          <Link href="/" className="hover:text-pink-400">
            Home
          </Link>
          <Link href="/" className="hover:text-pink-400">
            About
          </Link>
          <Link href="/" className="hover:text-pink-400">
            Restaurants
          </Link>
          <Link href="/" className="hover:text-pink-400">
            Services
          </Link>
          <Link href="/contact" className="hover:text-pink-400">
            Contact
          </Link>
        </nav>

        {/* Cart */}
        <div className="flex items-center gap-4">
          <Link
            href="/cart"
            className="flex items-center bg-pink-700 hover:bg-pink-800 text-white px-4 py-2 rounded-md"
          >
            <ShoppingCart size={18} className="mr-2" />
            {cartCount} Items
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden backdrop-blur-sm h-screen bg-opacity-90 px-8 py-6 space-y-4 text-white font-medium">
          <Link
            href="/"
            className="block hover:text-pink-400"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/"
            className="block hover:text-pink-400"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/"
            className="block hover:text-pink-400"
            onClick={() => setIsOpen(false)}
          >
            Restaurants
          </Link>
          <Link
            href="/"
            className="block hover:text-pink-400"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="block hover:text-pink-400"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
